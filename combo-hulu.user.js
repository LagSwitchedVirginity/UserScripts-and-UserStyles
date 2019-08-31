// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-hulu.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-hulu.user.js
// @name [COMBO] Hulu
// @description Another email:pass combo system
// @version 1567272563
// @match https://auth.hulu.com/web/login*
// @match http://auth.hulu.com/web/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector('input[name="email"]').onkeyup = function(e, n) {
        this.value.replace(/((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)):(.*)/gi, function(e, n, u) {
            document.querySelector('input[name="email"]').value = n, document.querySelector('input[name="password"]').value = u;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);