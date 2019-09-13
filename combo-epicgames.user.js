// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-epicgames.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-epicgames.user.js
// @name [COMBO] EpicGames
// @description Created for Hydro
// @version 1568336204
// @match *://accounts.epicgames.com/log*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector("#epic_username").onkeyup = function(e, u) {
        this.value.replace(/(.*):(.*)/gi, function(e, u, o) {
            var n = e.split(":"), t = n.shift(), c = n.join(":");
            document.querySelector("#epic_username").value = t, document.querySelector("#password").value = c;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);