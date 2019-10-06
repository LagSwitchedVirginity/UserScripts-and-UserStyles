(function () {
    let addWatcher_9324018546023 = function () {
        // @ts-ignore
        document.querySelector("#epic_username").onkeyup = function (r, e) {
            let regex = /((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
                // @ts-ignore
                document.querySelector("#epic_username").value = username;
                // @ts-ignore
                document.querySelector("#password").value = password;
            })
        };
    };
    document.onload = addWatcher_9324018546023;
    setTimeout(addWatcher_9324018546023, 1e3);
})();