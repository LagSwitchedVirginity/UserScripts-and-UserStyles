// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/scripts_combos/metatags.io.user.js
// @downloadURL https://raw.githubusercontent.com/LagSwitchedVirginity/UserScripts-and-UserStyles/master/scripts_combos/metatags.io.user.js
// @name Title Function Metatags.io
// @description Adds a function to the JS Console named updateDomain(string) that allows you to change the preview domain.
// @version 1615247925153
// @match *://metatags.io/*
// @run-at document-end
// ==/UserScript==

/*
* This is terribly coded, @ me if you want, but this was coded to help out clients visualize and stop complaining about "but it says metatags.io!"
* */

unsafeWindow.updateDomain = function (dom) {
    var temp_url = new URL("https://a");
    temp_url.host = dom;
    document.querySelectorAll(".js-preview-domain").forEach(function (e) {
        e.textContent = temp_url.toString();
    });
};