(function() {
    let addWatcher_398ih40afda = function () {
        // @ts-ignore
        document.querySelector("input#email").onkeyup = function (r, e) {
            let regex = /((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
                // @ts-ignore
                document.querySelector("input#email").value=username;
                // @ts-ignore
                document.querySelector("input#password").value=password;
            })
        };
    };
    document.onload = addWatcher_398ih40afda;
    setTimeout(addWatcher_398ih40afda, 1e3);
})();