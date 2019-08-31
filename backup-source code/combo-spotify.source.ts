(function() {
    let addWatcher_218939yhasfda = function () {
        // @ts-ignore
        document.querySelector("form [name=\"username\"]").onkeyup = function (r, e) {
            let regex = /((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)|\d+):(.*)/gi;
            this.value.replace(regex, function (t1, t2, t3) {
                // @ts-ignore
                $("form [name=\"username\"]").val('').sendkeys(t2);
                // @ts-ignore
                $("form [name=\"password\"]").val('').sendkeys(t3);
            })
        };
    };
    document.onload = addWatcher_218939yhasfda;
    setTimeout(addWatcher_218939yhasfda, 1e3);
})();