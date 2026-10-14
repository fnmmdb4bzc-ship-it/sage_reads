// GENERATED FILE by scripts/build-site.mjs from src/content.js and src/app.html.
// Do not edit by hand: run `npm run build` after changing the content.

/** Level -> its rows (groups of sounds), each with the activity keys in it. */
export const TERMS = {
  "0": [
    {
      "title": "Sound awareness games",
      "keys": [
        "l0_rhyme",
        "l0_syll",
        "l0_first",
        "l0_letter",
        "l0_case",
        "l0_listen"
      ]
    }
  ],
  "1": [
    {
      "title": "Sounds s, a, t, p",
      "keys": [
        "card_s",
        "card_a",
        "card_t",
        "card_p"
      ]
    },
    {
      "title": "Sounds i, n, m, d",
      "keys": [
        "card_i",
        "card_n",
        "card_m",
        "card_d"
      ]
    },
    {
      "title": "Sounds g, o, c, k",
      "keys": [
        "card_g",
        "card_o",
        "card_c",
        "card_k"
      ]
    },
    {
      "title": "Sounds e, u, r, h",
      "keys": [
        "card_e",
        "card_u",
        "card_r",
        "card_h"
      ]
    },
    {
      "title": "Sounds b, f, l, j",
      "keys": [
        "card_b",
        "card_f",
        "card_l",
        "card_j"
      ]
    },
    {
      "title": "Sounds v, w, x, y, z, qu",
      "keys": [
        "card_v",
        "card_w",
        "card_x",
        "card_y",
        "card_z",
        "card_qu"
      ]
    }
  ],
  "2": [
    {
      "title": "Sounds sh, ch, th, wh",
      "keys": [
        "card_sh",
        "card_ch",
        "card_th",
        "card_wh"
      ]
    },
    {
      "title": "Sounds ck, ff ll ss zz, ng, nk",
      "keys": [
        "card_ck",
        "card_floss",
        "card_ng",
        "card_nk"
      ]
    }
  ]
};

export const LEVEL_LABELS = {
  "0": "Level 0",
  "1": "Level 1",
  "2": "Level 2",
  "3": "Level 3",
  "4": "Level 4",
  "5": "Level 5",
  "6": "Level 6",
  "7": "Level 7",
  "8": "Level 8",
  "9": "Level 9",
  "10": "Level 10",
  "11": "Level 11",
  "12": "Level 12",
  "13": "Level 13"
};

/** Which of the three areas an activity belongs to, for the Explorer sticker. */
export const AREA_OF = {
  "l0_rhyme": "sounds",
  "l0_syll": "sounds",
  "l0_first": "sounds",
  "l0_letter": "sounds",
  "l0_case": "sounds",
  "l0_listen": "sounds",
  "card_s": "stories",
  "card_a": "stories",
  "card_t": "stories",
  "card_p": "stories",
  "card_i": "stories",
  "card_n": "stories",
  "card_m": "stories",
  "card_d": "stories",
  "card_g": "stories",
  "card_o": "stories",
  "card_c": "stories",
  "card_k": "stories",
  "card_e": "stories",
  "card_u": "stories",
  "card_r": "stories",
  "card_h": "stories",
  "card_b": "stories",
  "card_f": "stories",
  "card_l": "stories",
  "card_j": "stories",
  "card_v": "stories",
  "card_w": "stories",
  "card_x": "stories",
  "card_y": "stories",
  "card_z": "stories",
  "card_qu": "stories",
  "l1_pic2word": "words",
  "l1_build": "words",
  "l1_sort": "words",
  "l1_realfake": "words",
  "l1_readchoose": "words",
  "l1_heart": "words",
  "l1_drill": "sounds",
  "l1_point": "sounds",
  "l1_wordread": "words",
  "l1_dict": "words",
  "l1_heartflash": "words",
  "card_sh": "stories",
  "card_ch": "stories",
  "card_th": "stories",
  "card_wh": "stories",
  "card_ck": "stories",
  "card_floss": "stories",
  "card_ng": "stories",
  "card_nk": "stories",
  "l2_pic2word": "words",
  "l2_build": "words",
  "l2_sort": "words",
  "l2_realfake": "words",
  "l2_readchoose": "words",
  "l2_heart": "words",
  "l2_drill": "sounds",
  "l2_point": "sounds",
  "l2_wordread": "words",
  "l2_dict": "words",
  "l2_heartflash": "words"
};

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
export const STICKER_CATALOGUE = ["sun","apple","kite","fish","ball","orange","umbrella","gift","ring","hat","yoyo","queen","rabbit","butterfly","octopus","elephant","tomato","banana","van","jet","bus","cat","dog","pig","fox","hen","nest","leaf","web","insect"];
