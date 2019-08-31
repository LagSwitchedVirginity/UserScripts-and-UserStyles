// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-spotify.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-spotify.user.js
// @name [COMBO] Spotify
// @description This is for the classic <user>:<pass> combo
// @version 1567272150
// @include /^https?:\/\/accounts\.spotify\.[\w\.]+\/[\w-]+\/login.*$/
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/bililiteRange.js
// @require https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/jquery.sendkeys.js
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector('form [name="username"]').onkeyup = function(e, n) {
        this.value.replace(/((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)|\d+):(.*)/gi, function(e, n, o) {
            $('form [name="username"]').val("").sendkeys(n), $('form [name="password"]').val("").sendkeys(o);
        });
    };
}

document.onload = e, setTimeout(e, 1e3);