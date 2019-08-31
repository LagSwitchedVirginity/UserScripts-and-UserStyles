(function () {
    let addWatcher_9324018546023 = function () {
        // @ts-ignore
        document.querySelector("#epic_username").onkeyup = function (r, e) {
            let regex = /((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)):(.*)/gi;
            this.value.replace(regex, function (t1, username, password) {
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