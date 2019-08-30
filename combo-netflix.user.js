// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-netflix.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-netflix.user.js
// @name [COMBO] Netflix
// @description This is for the classic <user>:<pass> combo
// @version 1567204653
// @match *://www.netflix.com/login*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").onkeyup = function(e, o) {
        console.log([ e, o ]);
        this.value.replace(/((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)|\d+):(.*)/gi, function(e, o, n) {
            document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").value = o, 
            document.querySelector(".hybrid-login-form-main form input.nfTextField#id_password").value = n;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);