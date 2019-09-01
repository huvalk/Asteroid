'use strict'


window.addEventListener('load', function () {
        let subBtn = elem('subBtn');
        let user_name = document.getElementsByName('user_name')[0];
        let password = document.getElementsByName('password')[0];
        let csrf = document.getElementsByName('csrfmiddlewaretoken')[0];
        let msgLbl = elem('msgLbl');


        subBtn.addEventListener('click', function () {
                $.ajax({
                    type: "POST",
                    url: req,
                    data: {
                        csrfmiddlewaretoken: csrf.value,
                        user_name: user_name.value,
                        password: password.value
                    },
                    success: function (data) {
                        msgLbl.value = data.message;
                        console.log(data.status)
                        if (parseInt(data.status) === 1) {
                            window.location=game_url;
                        }
                    }
                });
        })

})