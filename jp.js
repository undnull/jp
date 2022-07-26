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

const SYL = [
    "A",    "I",    "U",    "E",    "O",
    "KA",   "KI",   "KU",   "KE",   "KO",
    "SA",   "SHI",  "SU",   "SE",   "SO",
    "TA",   "CHI",  "TSU",  "TE",   "TO",
    "NA",   "NI",   "NU",   "NE",   "NO",
    "HA",   "HI",   "FU",   "HE",   "HO",
    "MA",   "MI",   "MU",   "ME",   "MO",
    "YA",           "YU",           "YO",
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
const syl_result = shuffle(SYL);
const kan_result = syl2kan(syl_result, hepburn.toHiragana);

console.log("showing shuffled array");
console.log(syl_result);
console.log();

console.log("press any key to show converted shuffled array");
process.stdin.once("data", function() {
    // Clean code my white Russian ass
    console.log();
    console.log("showing converted shuffled array");
    console.log(kan_result);
    process.exit(0);
});
