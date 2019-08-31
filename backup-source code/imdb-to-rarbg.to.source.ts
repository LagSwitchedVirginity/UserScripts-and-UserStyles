let ogType = document.querySelector("meta[property=\"og:type\"]");
// @ts-ignore
if (ogType.content === "video.tv_show") {
    // @ts-ignore
    let id = document.querySelector("meta[property=\"pageId\"]").content;
    document.querySelector("div.wlb-title-main-details").innerHTML += `<span class="full-wl-button ribbonize" data-recordmetrics="true" style="position: relative;margin-left: 1rem;" onclick="location.href='https://www.rarbg.to/tv/${id}/'"><div class="wl-ribbon fullsize not-inWL" style="background-color:#3860bb;" title="Click to go to rarbg.to"><div class="container"><span class="text2" style="color:white;">Click to go to <b>rarbg.to</b></span></div></div></span>`
}
// @ts-ignore
else if (ogType.content === "video.movie") {
    // @ts-ignore
    let id = document.querySelector("meta[property=\"pageId\"]").content;
    document.querySelector("div.wlb-title-main-details").innerHTML += `<span class="full-wl-button ribbonize" data-recordmetrics="true" style="position: relative;margin-left: 1rem;" onclick="location.href='https://www.rarbg.to/torrents.php?imdb=${id}'"><div class="wl-ribbon fullsize not-inWL" style="background-color:#3860bb;" title="Click to go to rarbg.to"><div class="container"><span class="text2" style="color:white;">Click to go to <b>rarbg.to</b></span></div></div></span>`
}