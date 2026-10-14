/**
 * Checks that every "read it myself" story is decodable at the point it appears:
 * each word uses only sounds taught so far (no blends, digraphs, double letters,
 * vowel teams, r-controlled vowels or silent e at Level 1), or is a heart word
 * taught so far. Also checks every question has 3 options and every picture
 * key the content asks for exists.
 *
 *   node scripts/check-content.mjs
 */
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const C = require('../src/content.js');
const ILLUS = require('../src/illus.js');

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);
const DIGRAPHS = ['sh', 'ch', 'th', 'wh', 'ck', 'ng', 'nk', 'ff', 'll', 'ss', 'zz', 'qu'];
const END_ONLY = new Set(['ck', 'ng', 'nk', 'ff', 'll', 'ss', 'zz']);
let problems = 0;
const fail = msg => { problems++; console.log('  PROBLEM: ' + msg); };

function graphemes(word) {
  const out = [];
  for (let i = 0; i < word.length; i++) {
    const two = word.slice(i, i + 2);
    if (DIGRAPHS.includes(two)) { out.push(two); i++; } else out.push(word[i]);
  }
  return out;
}

function decodable(word, taught) {
  const gs = graphemes(word);
  if (!gs.every(g => taught.has(g))) return 'uses a sound not taught yet';
  const isV = x => x && VOWELS.has(x);
  const isC = x => x && !VOWELS.has(x);
  for (let i = 0; i < gs.length; i++) {
    const g = gs[i], n = gs[i + 1];
    if (n && g === n) return 'double letter';
    if (isV(g) && isV(n)) return 'two vowels together';
    if (isV(g) && n === 'r') return 'r-controlled vowel';
    if (isC(g) && isC(n)) return 'consonant blend';
    if (g === 'c' && (n === 'e' || n === 'i')) return 'soft c';
    if (g === 'y' && i > 0) return 'y as a vowel';
    if (END_ONLY.has(g) && (i !== gs.length - 1 || !isV(gs[i - 1]))) return `${g} not straight after a short vowel at the end`;
    if (g === 'a' && n === 'll') return '"all" says /aw/';
  }
  if (VOWELS.has(gs[gs.length - 1]) && gs.length > 1) return 'ends in a vowel';
  return null;
}

function checkWord(raw, taught, hearts) {
  const w = raw.replace(/^[^A-Za-z]+|[^A-Za-z']+$/g, '');
  if (!w) return null;
  if (w === 'I') return hearts.has('I') ? null : '"I" (heart word not taught yet)';
  if (hearts.has(w.toLowerCase())) return null;
  let base = w.toLowerCase().replace(/'s$/, '');
  if (hearts.has(base)) return null;
  let why = decodable(base, taught);
  if (why && base.endsWith('s')) {
    const stem = base.slice(0, -1);
    if (!decodable(stem, taught) || hearts.has(stem)) why = null;
  }
  return why ? `"${w}" (${why})` : null;
}

// The whole teaching sequence, Level 1 then Level 2.
const CARDS = [
  ...C.level1.map(c => ({ ...c, level: 1, key: c.g, gs: [c.g] })),
  ...C.level2.map(c => ({ ...c, level: 2, key: c.key || c.g, gs: c.gs || [c.g] })),
];
const taught = new Set();
const hearts = new Set();
CARDS.forEach((card, idx) => {
  card.gs.forEach(g => taught.add(g));
  C.heartWords.filter(h => h.after === card.key).forEach(h => hearts.add(h.w));
  if (!ILLUS[card.anchor]) fail(`card ${card.key}: no picture for anchor "${card.anchor}"`);
  for (const kind of ['listen', 'read']) {
    const s = card[kind];
    if (!s) { if (kind === 'listen') fail(`card ${card.key}: no listen story`); continue; }
    s.qs.forEach(q => { if (q.o.length !== 3) fail(`card ${card.key} ${kind}: "${q.q}" needs 3 options`); });
  }
  if (idx >= 5 && !card.read) fail(`card ${card.key}: no read it myself story`);
  if (card.read) {
    const bad = card.read.text.split(/\s+/).map(t => checkWord(t, taught, hearts)).filter(Boolean);
    if (bad.length) fail(`card ${card.key} "${card.read.title}": ${[...new Set(bad)].join(', ')}`);
    else console.log(`  ok  ${card.key.padEnd(5)} ${card.read.title}`);
  }
});
C.heartWords.forEach(h => { if (!CARDS.some(c => c.key === h.after)) fail(`heart word "${h.w}" is linked to unknown card "${h.after}"`); });

const l1 = new Set(C.level1.map(c => c.g));
C.cvc.forEach(w => { const why = decodable(w, l1); if (why) fail(`Level 1 word "${w}": ${why}`); });
C.words2.forEach(w => { const why = decodable(w, taught); if (why) fail(`Level 2 word "${w}": ${why}`); });
C.nonsense.forEach(w => { if (C.cvc.includes(w)) fail(`nonsense word "${w}" is in the real word list`); });
C.nonsense2.forEach(w => { if (C.words2.includes(w)) fail(`nonsense word "${w}" is in the real word list`); const why = decodable(w, taught); if (why) fail(`nonsense word "${w}": ${why}`); });
const need = new Set([...C.pictureWords, ...C.pictureWords2, ...C.level0.rhymeSets.flat(), ...C.level0.syllables.map(s => s[0]), ...C.level0.firstSound.flat()]);
need.forEach(k => { if (!ILLUS[k]) fail(`no picture for "${k}"`); });

console.log(problems ? `\n${problems} problem(s)` : '\nAll content checks passed.');
process.exit(problems ? 1 : 0);
