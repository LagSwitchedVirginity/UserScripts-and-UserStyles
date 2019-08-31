(function() {
    let addWatcher_610893453014734 = function () {
        // @ts-ignore
        document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").onkeyup = function (r, e) {
            let regex = /((?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?)|\d+):(.*)/gi;
            this.value.replace(regex, function (t1, t2, t3) {
                // @ts-ignore
                document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").value = t2;
                // @ts-ignore
                document.querySelector(".hybrid-login-form-main form input.nfTextField#id_password").value = t3;
            })
        };
    };
    document.onload = addWatcher_610893453014734;
    setTimeout(addWatcher_610893453014734, 1e3);
})();