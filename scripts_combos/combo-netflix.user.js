// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @name [COMBO] Netflix
// @description This is for the classic <user>:<pass> combo
// @version 1570339118
// @match *://www.netflix.com/login*
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/bililiteRange.js
// @require https://www.gitcdn.xyz/repo/dwachss/bililiteRange/master/jquery.sendkeys.js
// @run-at document-idle
// ==/UserScript==

function i() {
    document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").onkeyup = function(i, n) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(i, n, e) {
            var o = i.split(":"), d = o.shift(), t = o.join(":");
            $(".hybrid-login-form-main form input.nfTextField#id_userLoginId").sendkeys(d).val(d), 
            $(".hybrid-login-form-main form input.nfTextField#id_password").sendkeys(t).val(t);
        });
    };
}

document.onload = i, setTimeout(i, 1e3);