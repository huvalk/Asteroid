'use strict'


window.addEventListener('load', function () {
        let subBtn = elem('subBtn');
        let user_name = document.getElementsByName('user_name')[0];
        let password = document.getElementsByName('password')[0];
        let msgLbl = elem('msgLbl');


        subBtn.addEventListener('click', function () {
            let csrf=window.Cookies.get('csrftoken');
            $.ajax({
                type: "POST",
                url: req,
                data: {
                    csrfmiddlewaretoken: csrf,
                    user_name: user_name.value,
                    password: password.value
                },
                success: function (data) {
                    if (parseInt(data.status) === 1) {
                        window.location=game_url;
                    } else {
                        msgLbl.innerText = err_pass;
                    }
                }
            });
        })

})