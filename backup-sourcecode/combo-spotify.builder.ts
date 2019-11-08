import * as uglifyjs from "uglify-js"
import * as uglifycss from "uglifycss"

const fs = require("fs");
const userscript = require('userscript-meta');
const fil = "combo-spotify";

let userscriptMeta = userscript.stringify({
    author: "LagSwitchedVirginity",
    namespace: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    homepage: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    supportURL: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",

    updateURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,
    downloadURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,

    name: '[COMBO] Spotify',
    description: 'This is for the classic <user>:<pass> combo',
    // @ts-ignore
    version: Math.floor(new Date() / 1000),
    include: [
        "/^https:\\/\\/accounts\\.spotify\\.[\\w\\.]+\\/[\\w-]+\\/login*/",
        "/^https:\\/\\/accounts\\.spotify\\.[\\w\\.]+\\/login*/"
    ],
    require: [
        'https://code.jquery.com/jquery-3.4.1.min.js',
        'https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/bililiteRange.js',
        'https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/jquery.sendkeys.js'
    ],
    "run-at": "document-idle",
});
let uglifyCode = uglifyjs.minify(fs.readFileSync(`${fil}.source.js`).toString(), require("./settings").opts_uglifyjs);
let newCode = `${userscriptMeta}\n${uglifyCode.code}`;
console.log(newCode);
fs.writeFileSync(`${fil}.user.js`, newCode);