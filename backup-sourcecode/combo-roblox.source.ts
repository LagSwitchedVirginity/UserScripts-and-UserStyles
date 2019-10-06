(function () {
    let addWatcher_8016510491 = function () {
        // @ts-ignore
        document.querySelector("input#login-username").onkeyup = function (r, e) {
            let regex = /((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
                // @ts-ignore
                $("form [name=\"username\"]").val('').sendkeys(username);
                // @ts-ignore
                $("form [name=\"password\"]").val('').sendkeys(password);
            })
        };
    };
    document.onload = addWatcher_8016510491;
    setTimeout(addWatcher_8016510491, 1e3);
})();