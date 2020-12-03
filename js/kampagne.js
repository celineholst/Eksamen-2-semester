console.log('file: js/js.js loaded');

$(document).ready(function () {

    /* Vis navbar */
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
                /* Ændre toggle ikon */
                toggle.classList.toggle('bx-x')
            });
        }
    }

    showMenu('header-toggle', 'nav-menu');

    /* 1. advent flip */
    const card = document.querySelector(".card__inner");

    // Click event
    card.addEventListener("click", function (e) {
        card.classList.toggle('is-flipped');
    });

    /* Audio af julesang */
    var button = document.getElementById("button");
    var audio = document.getElementById("player");
    
    // Skifte ikon ved play og pause
    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.innerHTML = "◼";
        } else {
            audio.pause();
            button.innerHTML = "▶";
        }
    });
});
