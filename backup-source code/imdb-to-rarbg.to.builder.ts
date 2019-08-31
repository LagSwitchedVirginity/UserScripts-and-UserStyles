import * as uglifyjs from "uglify-js"
import * as uglifycss from "uglifycss"

const fs = require("fs");
const userscript = require('userscript-meta');
const fil = "imdb-to-rarbg.to";

let userscriptMeta = userscript.stringify({
    author: "LagSwitchedVirginity",
    namespace: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    homepage: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    supportURL: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",

    updateURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,
    downloadURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,

    name: 'IMDB to RARBG.to',
    description: 'Should add a button to an IMDB page to go to the RARBG.to piracy page. https://i.imgur.com/U0Xg1T3.png - Requested by Charlie on Discord.',
    // @ts-ignore
    version: Math.floor(new Date() / 1000),
    match: [
        '*://www.imdb.com/title/*',
        '*://imdb.com/title/*',
    ],
    "run-at": "document-end",
});
let uglifyCode = uglifyjs.minify(fs.readFileSync(`${fil}.source.js`).toString(), require("./settings").opts_uglifyjs);
let newCode = `${userscriptMeta}\n${uglifyCode.code}`;
console.log(newCode);
fs.writeFileSync(`${fil}.user.js`, newCode);