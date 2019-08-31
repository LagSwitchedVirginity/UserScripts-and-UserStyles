import * as uglifyjs from "uglify-js"
import * as uglifycss from "uglifycss"

const fs = require("fs");
const userscript = require('userscript-meta');
const fil = "combo-hulu";

let userscriptMeta = userscript.stringify({
    author: "LagSwitchedVirginity",
    namespace: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    homepage: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",
    supportURL: "https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles",

    updateURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,
    downloadURL: `https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/${fil}.user.js`,

    name: '[COMBO] Hulu',
    description: 'Another email:pass combo system',
    // @ts-ignore
    version: Math.floor(new Date() / 1000),
    match: [
        'https://auth.hulu.com/web/login*',
        'http://auth.hulu.com/web/login*',
    ],
    "run-at": "document-idle",
});
let uglifyCode = uglifyjs.minify(fs.readFileSync(`${fil}.source.js`).toString(), require("./settings").opts_uglifyjs);
let newCode = `${userscriptMeta}\n${uglifyCode.code}`;
console.log(newCode);
fs.writeFileSync(`${fil}.user.js`, newCode);