(function() {
    let addWatcher_610893453014734 = function () {
        // @ts-ignore
        document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").onkeyup = function (r, e) {
            let regex = /((?:(?:[\w-]+(?:\.[\w-]+)*)@(?:(?:[\w-]+\.)*\w[\w-]{0,66})\.(?:[a-z]{2,6}(?:\.[a-z]{2})?))|[\w\d]+):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
                // @ts-ignore
                $(".hybrid-login-form-main form input.nfTextField#id_userLoginId").sendkeys(username).val(username);
                // @ts-ignore
                $(".hybrid-login-form-main form input.nfTextField#id_password").sendkeys(password).val(password);
            })
        };
    };
    document.onload = addWatcher_610893453014734;
    setTimeout(addWatcher_610893453014734, 1e3);
})();