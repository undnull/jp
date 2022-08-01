// Alright so I chose the hard way and now
// I am straight up learning to write Hiragana
// glyphs down. At least possibility of me
// understanding written text won't be zero.
//
// So in order for me to redundancy-check my
// monkey brain I wanted to have romanized
// syllables to come in random manner and not
// just in the plain old AIUEO order (aeiou).
//
// So yes, this script basically randomizes the
// living shit out of a subset of Hiragana/Katakana
// glyphs so I can torture myself and write those down.
// Like half of a 48-page scratchbook wasn't enough.

// This is an extension of the previous script,
// because duh, Katakana exists.
// But this time it's not the Romanji syllables
// that are displayed first but Hiragana... :D

const SYL = [
    "A",    "I",    "U",    "E",    "O",
    "KA",   "KI",   "KU",   "KE",   "KO",
    "SA",   "SHI",  "SU",   "SE",   "SO",
    "TA",   "CHI",  "TSU",  "TE",   "TO",
    "NA",   "NI",   "NU",   "NE",   "NO",
    "HA",   "HI",   "FU",   "HE",   "HO",
    "MA",   "MI",   "MU",   "ME",   "MO",
    "YA",           "YU",           "YO",
    "RA",   "RI",   "RU",   "RE",   "RO",
    "WA",                           "WO",
    "N"
];

const shuffle = function(arr) {
    let result = [...arr];
    let current = arr.length;
    let rndindex = 0;
    while(current !== 0) {
        rndindex = Math.floor(Math.random() * current);
        current--;
        [result[current], result[rndindex]] = [result[rndindex], result[current]];
    }

    return result;
};

const syl2kan = function(arr, func) {
    let result = [...arr];
    for(let i = 0; i < result.length; i++)
        result[i] = func(result[i]);
    return result;
};

const hepburn = require("hepburn");
const shuffled = shuffle(SYL);
const hiragana = syl2kan(shuffled, hepburn.toHiragana);
const katakana = syl2kan(shuffled, hepburn.toKatakana);

console.log(hiragana);
console.log();
console.log("wait");
process.stdin.once("data", function() {
    // Clean code my white Russian ass
    console.log(katakana);
    process.exit(0);
});

