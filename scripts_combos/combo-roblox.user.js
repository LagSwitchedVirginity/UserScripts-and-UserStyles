// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/scripts_combos/combo-roblox.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/scripts_combos/combo-roblox.user.js
// @name [COMBO] Roblox
// @description Created for Sinnicle
// @version 1570339129
// @match *://www.roblox.com/login*
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/bililiteRange.js
// @require https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/jquery.sendkeys.js
// @run-at document-idle
// ==/UserScript==

function n() {
    document.querySelector("input#login-username").onkeyup = function(n, e) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(n, e, i) {
            var o = n.split(":"), t = o.shift(), u = o.join(":");
            $("input#login-username").val("").sendkeys(t), $("input#login-password").val("").sendkeys(u);
        });
    };
}

document.onload = n, setTimeout(n, 1e3);