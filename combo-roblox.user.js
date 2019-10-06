// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-roblox.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-roblox.user.js
// @name [COMBO] Roblox
// @description Created for Sinnicle
// @version 1570330165
// @match *://www.roblox.com/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector("input#login-username").onkeyup = function(e, n) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(e, n, u) {
            var o = e.split(":"), t = o.shift(), i = o.join(":");
            document.querySelector("input#login-username").value = t, document.querySelector("input#login-password").value = i;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);