// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @name [COMBO] EpicGames
// @description Created for Hydro
// @version 1573253756
// @match https://accounts.epicgames.com/log*
// @match https://www.epicgames.com/id/log*
// @run-at document-idle
// ==/UserScript==

function e() {
    prompt("Combo please?").replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(e, o, t) {
        var a = e.split(":"), u = a.shift(), l = a.join(":");
        document.querySelector('[type="email"]').value = u, document.querySelector('[type="password"]').value = l;
    });
}

document.onload = e, setTimeout(e, 1e3);