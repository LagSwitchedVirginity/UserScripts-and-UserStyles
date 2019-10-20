import * as uglifyjs from "uglify-js"
import * as uglifycss from "uglifycss"

const fs = require("fs");
const userscript = require('userscript-meta');
const fil = "combo-minecraft";

let userscriptMeta = userscript.stringify({
    author: "LagSwitchedVirginity",
    namespace: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    homepage: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    supportURL: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",

    updateURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,
    downloadURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,

    name: '[COMBO] Minecraft',
    description: 'This is for the classic <email>:<pass> combo',
    // @ts-ignore
    version: Math.floor(new Date() / 1000),
    match: [
        'https://my.minecraft.net/en-us/login/*',
    ],
    "run-at": "document-idle",
});
let uglifyCode = uglifyjs.minify(fs.readFileSync(`${fil}.source.js`).toString(), require("./settings").opts_uglifyjs);
let newCode = `${userscriptMeta}\n${uglifyCode.code}`;
console.log(newCode);
fs.writeFileSync(`${fil}.user.js`, newCode);