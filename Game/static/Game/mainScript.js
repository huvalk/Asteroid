"use strict";

    function showBox(name) {
        let arr = document.getElementsByClassName("myBox");
        for (let i = 0; i < arr.length; i++) {
            const box = arr[i];
            box.hidden = box.id === name ? false : true;
        }
    }


    function showTime(time) {
        let milsec = time%1000;
        time = Math.floor(time/1000);
        let sec = time%60;
        time = time - sec;
        let min = Math.floor(time/60);
        let res = min + ':' + sec + '.' + milsec;
        return res
    }


    function getInfo() {
        let csrf=window.Cookies.get('csrftoken');
        $.ajax({
            type: "GET",
            url: info,
            data: {
                csrfmiddlewaretoken: csrf
            },
            success: function (data) {

                let recordTable = elem('recordTable').getElementsByTagName('tbody')[0];
                while (recordTable.firstElementChild != recordTable.lastElementChild) {
                    recordTable.removeChild(recordTable.lastChild);
                }
                console.log(data);
                let flag = 0;
                for (let i = 0; i<data.length-1; i++) {
                    if (data[data.length-1].username === data[i].username)
                        flag = 1;
                    let new_row = document.createElement('tr');
                    let new_name = document.createElement('td');
                    let new_score = document.createElement('td');
                    let new_time = document.createElement('td');
                    new_name.innerText = data[i].username;
                    new_score.innerText = data[i].hight_score;
                    new_time.innerText = showTime(data[i].game_time);
                    new_row.appendChild(new_name);
                    new_row.appendChild(new_score);
                    new_row.appendChild(new_time);
                    recordTable.appendChild(new_row);
                }
                if (!flag) {
                    let i = data.length;
                    let empty_row = document.createElement('tr');
                    empty_row.innerText = '...';
                    recordTable.appendChild(empty_row);
                    let new_row = document.createElement('tr');
                    let new_name = document.createElement('td');
                    let new_score = document.createElement('td');
                    let new_time = document.createElement('td');
                    new_name.innerText = data[i].username;
                    new_score.innerText = data[i].hight_score;
                    new_time.innerText = showTime(data[i].game_time);
                    new_row.appendChild(new_name);
                    new_row.appendChild(new_score);
                    new_row.appendChild(new_time);
                    recordTable.appendChild(new_row);
                }

            }
        });
    }


    function addListenersToButtons() {
        elem("b4").addEventListener("click", function () {
            showBox('aboutCreator');
        });

        elem("b3").addEventListener("click", function () {
            showBox('aboutGame');
        });

        elem("b5").addEventListener("click", function () {
            showBox('mainMenu');
        });

        elem("b6").addEventListener("click", function () {
            showBox('mainMenu');
        });

        elem("b7").addEventListener("click", function () {
            showBox('mainMenu');
        });

        elem("b2").addEventListener("click", function () {
            showBox('recordBox');
            getInfo();
        });

        elem("b1").addEventListener("click", function () {
            showBox("gameBox");
            elem("centerBox").hidden = true;
            let pause = false;
        });
    }

window.addEventListener('load', function () {

    elem("centerBox").hidden = false;
    addListenersToButtons();

});
