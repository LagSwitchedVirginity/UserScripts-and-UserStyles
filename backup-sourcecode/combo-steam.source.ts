(function () {
    let addWatcher_85041h5401h = function () {
        // @ts-ignore
        document.querySelector("#steamAccountName").onkeyup = function (r, e) {
            let regex = /((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
                // @ts-ignore
                document.querySelector("#steamAccountName").value = username;
                // @ts-ignore
                document.querySelector("#steamPassword").value = password;
            })
        };
    };
    document.onload = addWatcher_85041h5401h;
    setTimeout(addWatcher_85041h5401h, 1e3);
})();