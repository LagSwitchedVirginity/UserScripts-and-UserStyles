(function () {
    let addWatcher_s0dncxznczxcapsd = function () {
        // @ts-ignore
        document.querySelector(`input[name="email"]`).onkeyup = function (r, e) {
            let regex = /((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)):(.*)/gi;
            this.value.replace(regex, function (t1, username, password) {
                // @ts-ignore
                document.querySelector(`input[name="email"]`).value = username;
                // @ts-ignore
                document.querySelector(`input[name="password"]`).value = password;
            })
        };
    };
    document.onload = addWatcher_s0dncxznczxcapsd;
    setTimeout(addWatcher_s0dncxznczxcapsd, 1e3);
})();