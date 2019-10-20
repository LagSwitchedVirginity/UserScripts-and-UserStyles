// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-minecraft.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/combo-minecraft.user.js
// @name [COMBO] Minecraft
// @description This is for the classic <email>:<pass> combo
// @version 1571554581
// @match https://my.minecraft.net/en-us/login/*
// @run-at document-idle
// ==/UserScript==

function e() {
    document.querySelector("input#email").onkeyup = function(e, t) {
        this.value.replace(/((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi, function(e, t, u) {
            var n = e.split(":"), o = n.shift(), i = n.join(":");
            document.querySelector("input#email").value = o, document.querySelector("input#password").value = i;
        });
    };
}

document.onload = e, setTimeout(e, 1e3);