// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-netflix.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-netflix.user.js
// @name [COMBO] Netflix
// @description This is for the classic <user>:<pass> combo
// @version 1568336200
// @match *://www.netflix.com/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").onkeyup = function(e, i) {
        this.value.replace(/(.*):(.*)/gi, function(e, i, n) {
            var o = e.split(":"), t = o.shift(), r = o.join(":");
            document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").value = t, 
            document.querySelector(".hybrid-login-form-main form input.nfTextField#id_password").value = r;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);