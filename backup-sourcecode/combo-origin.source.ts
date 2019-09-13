(function () {
    let addWatcher_fmi0cxzcn0z = function () {
        // @ts-ignore
        document.querySelector("#email").onkeyup = function (r, e) {
            let regex = /(.*):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
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