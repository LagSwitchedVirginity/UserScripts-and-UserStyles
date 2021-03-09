// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/scripts_combos/combo-hulu.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/scripts_combos/combo-hulu.user.js
// @name [COMBO] Hulu
// @description Another email:pass combo system
// @version 1570339125
// @match https://auth.hulu.com/web/login*
// @match http://auth.hulu.com/web/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector('input[name="email"]').onkeyup = function(e, n) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(e, n, t) {
            var u = e.split(":"), o = u.shift(), a = u.join(":");
            document.querySelector('input[name="email"]').value = o, document.querySelector('input[name="password"]').value = a;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);