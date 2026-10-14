# Sage Reads

A phonics and reading practice app for Debby Smit NILD Educational Therapy,
following an Orton-Gillingham style sequence. It is a sibling to MathIT, with
the same look, but it is **completely separate**: its own Netlify site, its own
database and its own learner logins.

**Built so far:** Level 0 (sound awareness), Level 1 (single sounds and short
vowels, 26 sound cards) and Level 2 (consonant digraphs: sh, ch, th, wh, ck,
ff ll ss zz, ng, nk; 8 sound cards). Levels 3 to 13 show as "coming soon".

## What is in it

- **Sound cards** (Levels 1 and 2): for each sound, the letter, an anchor word with a
  line drawing, a rhyme, a listen story the adult reads aloud with
  comprehension questions, and from n onwards a "read it myself" story that
  uses only sounds and heart words already taught.
- **My Garden in Bloom**: every sound card is a seed that sprouts, buds and flowers as the learner answers its questions. Finishing a group of sounds brings a bug to visit; finishing a level brings a pet to live in the garden.
- **Practice games** (learner on their own): Picture to Word, Build the Word,
  Vowel Sort, Real or Made Up, Read and Choose, Heart Words.
- **With your helper** (turn on "Adult helper" at the top): Sound Card Drill,
  Point to the Sound, Word Reading, Dictation, Heart Word Flash. There is no
  audio anywhere: the adult says the sounds.
- **Level 0 games**: Rhyme Time, Clap the Syllables, Same First Sound, Letter
  Match, Big and Small Letters, and two listen stories.
- **Heart words** page, **stickers**, **streaks**, and **tasks** you set for a
  learner from the admin page (`/admin.html`), all working the same way as MathIT.
- "Sounds learned so far": choose how far a learner has got, and the practice
  games only use words made from those sounds. This is remembered per learner
  on that device.

## Where things live

| File | What it is |
|---|---|
| `src/content.js` | All the words, stories, rhymes, questions and heart words |
| `src/illus.js` | All the pictures (simple line drawings, as code) |
| `src/app.html` | The app itself |
| `scripts/check-content.mjs` | Checks every "read it myself" story is decodable |
| `scripts/build-site.mjs` | Builds the site into `dist/`. **The app name is set here** (`APP_NAME`) |
| `web/admin.html` | Admin page: approve learners, add learners, set tasks |
| `netlify/` | The server (copied from MathIT): sign-in, database, stickers |

## Changing the name

Change `APP_NAME` at the top of `scripts/build-site.mjs`, then rebuild.

## Checking and building

```bash
npm install
npm run build     # runs the decodability check, then builds dist/
```

If a story uses a sound that has not been taught yet, the check names the word
and the build stops.
