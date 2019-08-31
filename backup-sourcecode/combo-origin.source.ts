(function () {
    let addWatcher_fmi0cxzcn0z = function () {
        // @ts-ignore
        document.querySelector("#email").onkeyup = function (r, e) {
            let regex = /((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)):(.*)/gi;
            this.value.replace(regex, function (t1, username, password) {
                // @ts-ignore
                document.querySelector("#email").value = username;
                // @ts-ignore
                document.querySelector("#password").value = password;
            })
        };
    };
    document.onload = addWatcher_fmi0cxzcn0z;
    setTimeout(addWatcher_fmi0cxzcn0z, 1e3);
})();