// ==UserScript==
// @author LagSwitchedVirginity
// @namespace https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @homepage https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @supportURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles
// @updateURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles/raw/master/scripts_combos/metatags.io.user.js
// @downloadURL https://github.com/LagSwitchedVirginity/UserScripts-and-UserStyles/raw/master/scripts_combos/metatags.io.user.js
// @name Title Function Metatags.io
// @description Adds a function to the JS Console named updateDomain(string) that allows you to change the preview domain.
// @version 1615248688512
// @match *://metatags.io/*
// @run-at document-end
// ==/UserScript==

var defaultDomain = "yourDomainHere.com";

/*
* This is terribly coded, @ me if you want, but this was coded to help out clients visualize and stop complaining about "but it says metatags.io!"
* */

var updateDomain = function (dom) {
    var temp_url = new URL("https://a");
    temp_url.host = dom;
    document.querySelectorAll(".js-preview-domain").forEach(function (e) {
        e.textContent = temp_url.toString();
    });
};

function addCustomDomainInput() {
    var searchNav = document.querySelector(".nav-search");
    var htmlInputElement = document.createElement("input");
    htmlInputElement.className = "nav-search__input c_domain";
    htmlInputElement.type = "text";
    htmlInputElement.placeholder = "custom domain";
    htmlInputElement.style.marginLeft = "15px";
    htmlInputElement.addEventListener("keyup",function () {
        updateDomain(this.value);
    });
    searchNav.appendChild(htmlInputElement);
}

addCustomDomainInput();
updateDomain(defaultDomain);

unsafeWindow.updateDomain = updateDomain;