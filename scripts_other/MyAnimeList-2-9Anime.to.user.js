// ==UserScript==
// @name        MyAnimeList - 9Anime.to
// @match       https://myanimelist.net/anime/*
// @match       https://myanimelist.net/manga/*
// @grant       none
// @version     1615251629621
// @author      LagSwitchedVirginity
// @description Adds 9Anime.to buttons for Manga&Anime
// ==/UserScript==

(function () {
    var settings = {
        DomainName: "9Anime.to",
        SearchURL: "https://www13.9anime.to/search?keyword=",
        SearchPart: "keyword",
        class_base: "c_9anime"
    };

    function addStyleSheet() {
        var element = document.createElement("style");
        element.type = "text/css";
        element.innerHTML = "a." + settings.class_base + "_link{display:inline-block;background-color:rgb(90,46,152)!important;color:white!important;padding:5px;margin:5px;}";
        document.head.appendChild(element);
    }

    addStyleSheet();

    /**
     * @param {string} searchString
     * @param {string} linkExtraText
     */
    function generateButton(searchString, linkExtraText) {
        linkExtraText = linkExtraText !== undefined ? " " + linkExtraText : "";
        var htmlAnchorElement = document.createElement("a");
        var url = new URL(settings.SearchURL);
        url.searchParams.set(settings.SearchPart, searchString);
        htmlAnchorElement.textContent = settings.DomainName + linkExtraText;
        htmlAnchorElement.href = url.toString();
        htmlAnchorElement.className = settings.class_base + "_link";
        return htmlAnchorElement;
    }

    var justTheRightSubstr = location.pathname.substr(0, 7);
    if (justTheRightSubstr === "/manga/" || justTheRightSubstr === "/anime/") {
        var titleElement = document.querySelector(".h1-title [itemprop='name']");
        var tit2 = document.querySelector('meta[property="og:title"]').content;
        // Container
        var htmlDivElement = document.createElement("div");
        htmlDivElement.className = settings.class_base + "_container";
        // General search
        htmlDivElement.appendChild(generateButton(tit2, "Original Title"));
        // English search
        var titleEnglishElement = titleElement.querySelector(".title-english");
        console.log("title elements", titleElement, titleEnglishElement);
        if (titleEnglishElement !== null) {
            var htmlAnchorElement = generateButton(titleEnglishElement.textContent, "English Title");
            console.log(htmlAnchorElement);
            htmlDivElement.appendChild(htmlAnchorElement);
        }
        titleElement.appendChild(htmlDivElement);
    }
})();