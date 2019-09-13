// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-steam.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-steam.user.js
// @name [COMBO] Steam
// @description This is for the classic <user>:<pass> combo
// @version 1568336208
// @match https://steamcommunity.com/login*
// @match http://steamcommunity.com/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector("#steamAccountName").onkeyup = function(e, t) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(e, t, o) {
            var u = e.split(":"), c = u.shift(), n = u.join(":");
            document.querySelector("#steamAccountName").value = c, document.querySelector("#steamPassword").value = n;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);