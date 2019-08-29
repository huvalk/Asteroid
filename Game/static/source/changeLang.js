'use strict'

function elem(s) {

        s = s.toString();
        return document.getElementById(s);
}

window.addEventListener('load', function() {

    let langForm = document.getElementById('langForm');
    let langSelect = document.getElementsByName('language')[0];

    langSelect.addEventListener('click', function () {
        langForm.submit();
    })

})