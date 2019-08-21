// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-epicgames.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-epicgames.user.js
// @name [COMBO] EpicGames
// @description Created for Hydro
// @version 1566425472
// @match *://accounts.epicgames.com/log*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector("#epic_username").onkeyup = function(e, o) {
        console.log([ e, o ]);
        var u = /((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)):(.*)/gi;
        console.log(u.test(this.value)), this.value.replace(u, function(e, o, u) {
            document.querySelector("#epic_username").value = o, document.querySelector("#password").value = u;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);