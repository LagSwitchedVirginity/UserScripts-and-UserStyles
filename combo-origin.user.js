// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-origin.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-origin.user.js
// @name [COMBO] Origin
// @description This is for the classic <user>:<pass> combo
// @version 1570339123
// @match https://signin.ea.com/p/originX/login*
// @match http://signin.ea.com/p/originX/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector("#email").onkeyup = function(e, o) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(e, o, t) {
            var u = e.split(":"), n = u.shift(), a = u.join(":");
            document.querySelector("#email").value = n, document.querySelector("#password").value = a;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);