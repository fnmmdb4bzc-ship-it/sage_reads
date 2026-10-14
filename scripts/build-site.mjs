/**
 * Builds the published site into dist/ and regenerates the server's copy of
 * the curriculum.
 *
 *   dist/index.html      src/app.html with the content, pictures, font and
 *                        background baked in (one self-contained page)
 *   dist/admin.html      web/admin.html with the activity list for setting tasks
 *   dist/readit-auth.js  sign-in and API client
 *   netlify/lib/curriculum.mjs  which activities make up each level, used by
 *                        the server to award "finished a group" stickers
 *
 * The app's name lives in ONE place: APP_NAME below.
 */
import { readFile, writeFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export const APP_NAME = 'Sage Reads';

const CONTENT = require('../src/content.js');
const contentSrc = await readFile('src/content.js', 'utf8');
const illusSrc = await readFile('src/illus.js', 'utf8');
let app = await readFile('src/app.html', 'utf8');
const font = (await readFile('assets/TeachersPet.ttf')).toString('base64');
const bg = (await readFile('assets/bg_garden.jpg')).toString('base64');

// Favicon: the apple drawing, as an SVG data URI.
const ILLUS = require('../src/illus.js');
const favicon = 'data:image/png;base64,' + (await readFile('assets/sage_favicon.png')).toString('base64');
const logo = 'data:image/webp;base64,' + (await readFile('assets/sage_logo.webp')).toString('base64');
const mascot = 'data:image/webp;base64,' + (await readFile('assets/sage_mascot.webp')).toString('base64');

/* ---------- activity catalogue (from CONTENT.games) ---------- */
const ACTIVITIES = [];
const TERMS = {};
const AREA_OF = {};
const titleOf = (gm, L) => (typeof gm.title === 'object' ? gm.title[L] : gm.title);
const games = L => CONTENT.games.filter(g => g.levels.includes(L));
const SOUND_GAMES = new Set(['rhyme', 'syll', 'first', 'letter', 'case', 'drill', 'point']);

// Level 0: one row of games plus the listen stories.
const l0 = games(0).map(g => 'l0_' + g.base).concat('l0_listen');
games(0).forEach(g => ACTIVITIES.push({ k: 'l0_' + g.base, g: '0', grp: 'Level 0 · Games', t: titleOf(g, 0) }));
ACTIVITIES.push({ k: 'l0_listen', g: '0', grp: 'Level 0 · Games', t: 'Listen Stories' });
TERMS[0] = [{ title: 'Sound awareness games', keys: l0 }];
l0.forEach(k => { AREA_OF[k] = 'sounds'; });

for (const L of [1, 2]) {
  const cards = L === 1 ? CONTENT.level1 : CONTENT.level2;
  TERMS[L] = [];
  for (const gp of [...new Set(cards.map(c => c.group))]) {
    const cs = cards.filter(c => c.group === gp);
    const title = `Sounds ${cs.map(c => c.g).join(', ')}`;
    cs.forEach(c => {
      const key = 'card_' + (c.key || c.g);
      ACTIVITIES.push({ k: key, g: String(L), grp: `Level ${L} · ${title}`, t: `Sound card: ${c.g} (${c.anchor === 'yoyo' ? 'yo-yo' : c.anchor})` });
      AREA_OF[key] = 'stories';
    });
    TERMS[L].push({ title, keys: cs.map(c => 'card_' + (c.key || c.g)) });
  }
  games(L).forEach(g => {
    const k = `l${L}_${g.base}`;
    ACTIVITIES.push({ k, g: String(L), grp: g.adultOnly ? `Level ${L} · With your helper` : `Level ${L} · Practice games`, t: titleOf(g, L) });
    AREA_OF[k] = SOUND_GAMES.has(g.base) ? 'sounds' : 'words';
  });
}

/* ---------- index.html ---------- */
const swap = (s, token, value) => {
  if (!s.includes(token)) throw new Error(`placeholder ${token} missing`);
  return s.split(token).join(value);
};
app = swap(app, '/*@@CONTENT@@*/', contentSrc.replace(/<\/script/gi, '<\\/script'));
app = swap(app, '/*@@ILLUS@@*/', illusSrc.replace(/<\/script/gi, '<\\/script'));
app = swap(app, '@@FONT@@', 'data:font/ttf;base64,' + font);
app = swap(app, '@@BG@@', 'data:image/jpeg;base64,' + bg);
app = swap(app, '@@FAVICON@@', favicon);
app = swap(app, '@@LOGO@@', logo);
app = swap(app, '@@MASCOT@@', mascot);
app = swap(app, '@@HEADER_BG@@', 'data:image/jpeg;base64,' + (await readFile('assets/header_pattern.jpg')).toString('base64'));
// Debby's flower pictures for My Garden, in the order listed in assets/flowers/manifest.json.
const { readdir } = await import('node:fs/promises');
const manifest = JSON.parse(await readFile('assets/flowers/manifest.json', 'utf8'));
const flowers = await Promise.all(manifest.map(async m => 'data:image/webp;base64,' + (await readFile('assets/flowers/' + m.file)).toString('base64')));
app = swap(app, '/*@@FLOWERS@@*/[]', JSON.stringify(flowers));
app = swap(app, '/*@@FLOWER_META@@*/[]', JSON.stringify(manifest.map(m => ({ native: m.native, tall: m.tall, legend: Boolean(m.legend) }))));
const crit = JSON.parse(await readFile('assets/critters/manifest.json', 'utf8'));
for (const kind of ['insects', 'pets']) {
  for (const c of crit[kind]) c.src = 'data:image/webp;base64,' + (await readFile('assets/critters/' + c.file)).toString('base64');
}
app = swap(app, '/*@@CRITTERS@@*/{ insects: [], pets: [] }', JSON.stringify(crit));
app = swap(app, '@@PATCH@@', 'data:image/webp;base64,' + (await readFile('assets/garden_patch.webp')).toString('base64'));
app = swap(app, '@@APP_NAME@@', APP_NAME);

/* ---------- admin.html ---------- */
let admin = await readFile('web/admin.html', 'utf8');
admin = admin.replace(/^const ACTIVITIES = .*$/m, `const ACTIVITIES = ${JSON.stringify(ACTIVITIES)};`);
admin = admin.split('ReadIT Admin').join(APP_NAME + ' Admin');
admin = admin.replace('id="adminLogo" style="display:inline-block;width:46px;height:46px"></span>', 'id="adminLogo" style="display:inline-block;width:46px;height:46px"><img src="' + logo + '" alt="" style="height:46px;width:auto">' + '</span>');

/* ---------- auth client ---------- */
let auth = await readFile('web/readit-auth.js', 'utf8');
auth = auth.split("'Sign in to ReadIT'").join(`'Sign in to ${APP_NAME}'`).split('the ReadIT API').join(`the ${APP_NAME} API`);

/* ---------- server curriculum ---------- */
const cur = `// GENERATED FILE by scripts/build-site.mjs from src/content.js and src/app.html.
// Do not edit by hand: run \`npm run build\` after changing the content.

/** Level -> its rows (groups of sounds), each with the activity keys in it. */
export const TERMS = ${JSON.stringify(TERMS, null, 2)};

export const LEVEL_LABELS = ${JSON.stringify(Object.fromEntries(CONTENT.levels.map(l => [String(l.n), 'Level ' + l.n])), null, 2)};

/** Which of the three areas an activity belongs to, for the Explorer sticker. */
export const AREA_OF = ${JSON.stringify(AREA_OF, null, 2)};

export const AREAS = ["sounds","words","stories"];

/** Every activity key in a level, across all of its rows. */
export function keysForLevel(level) {
  return (TERMS[level] || []).flatMap(t => t.keys);
}

/** The rows that count towards the "finished a group" sticker. */
export function termRows(level) {
  return TERMS[level] || [];
}

/** The sticker set: codes are picture names the app knows how to draw. */
export const STICKER_CATALOGUE = ${JSON.stringify(['sun', 'apple', 'kite', 'fish', 'ball', 'orange', 'umbrella', 'gift', 'ring', 'hat', 'yoyo', 'queen', 'rabbit', 'butterfly', 'octopus', 'elephant', 'tomato', 'banana', 'van', 'jet', 'bus', 'cat', 'dog', 'pig', 'fox', 'hen', 'nest', 'leaf', 'web', 'insect'])};
`;

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await writeFile('dist/index.html', app);
await writeFile('dist/admin.html', admin);
await writeFile('dist/readit-auth.js', auth);
await writeFile('netlify/lib/curriculum.mjs', cur);
console.log(`built ${APP_NAME}: index.html ${(app.length / 1024).toFixed(0)} KB, ${ACTIVITIES.length} activities for the admin task list`);
