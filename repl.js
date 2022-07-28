// Allows me to type certain texts using
// romanji because Linux appears to SUCK
// when people attempt to actually type
// kana characters on US/RU keyboards.

const hepburn = require("hepburn");
const repl = require("node:repl");
repl.start({
    prompt: "> ",
    eval: function(cmd, ctx, filename, callback) {
        const strip = cmd.replace(/[\r\n]/gm, "");
        callback(null, hepburn.toHiragana(strip) + " // " + hepburn.toKatakana(strip));
    }
});

