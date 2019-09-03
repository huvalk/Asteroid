'use strict'


window.addEventListener('load', function () {
        let subBtn = elem('subBtn');
        let user_name = document.getElementsByName('user_name')[0];
        let password = document.getElementsByName('password');
        let msgLbl = elem('msgLbl');

        subBtn.addEventListener('click', function () {


            let csrf=window.Cookies.get('csrftoken');
            console.log(password[0], password[1])
            if (password[0].value !== password[1].value) {
                msgLbl.innerText = err_pass;
                console.log('afi');
                return;
            }
            console.log('af')
            $.ajax({
                type: "POST",
                url: check,
                data: {
                    csrfmiddlewaretoken: csrf,
                    username: user_name.value,
                    password: password[0].value
                },
                success: function (data) {
                    console.log(data)
                    if (parseInt(data.status) === 1) {
                        window.location=login_url;
                    } else {
                        msgLbl.innerText = err_user;
                    }
                }
            });
        })

})