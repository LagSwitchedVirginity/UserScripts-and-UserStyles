(function() {
    let addWatcher_610893453014734 = function () {
        // @ts-ignore
        document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").onkeyup = function (r, e) {
            let regex = /(.*):(.*)/gi;
            this.value.replace(regex, function (t1, t2,t3) {
                let c2=t1.split(":");
                let username=c2.shift();
                let password=c2.join(":");
                // @ts-ignore
                document.querySelector(".hybrid-login-form-main form input.nfTextField#id_userLoginId").value = username;
                // @ts-ignore
                document.querySelector(".hybrid-login-form-main form input.nfTextField#id_password").value = password;
            })
        };
    };
    document.onload = addWatcher_610893453014734;
    setTimeout(addWatcher_610893453014734, 1e3);
})();