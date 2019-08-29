"use strict";

    function showBox(name) {
        let arr = document.getElementsByClassName("myBox");
        for (let i = 0; i < arr.length; i++) {
            const box = arr[i];
            box.hidden = box.id === name ? false : true;
        }
    }

    function addListenersToButtons() {
        elem("b4").addEventListener("click", function () {
            //hideAllBoxes();
            //elem("aboutCreator").hidden = false;
            console.log('awd')
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
