console.log('file: js/js.js loaded');

$(document).ready(function () {
    
    /* Vis navbar */
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
        
        if(toggle && nav) {
            toggle.addEventListener('click', () => {
               nav.classList.toggle('show')
                /* Ændre toggle ikon */
                toggle.classList.toggle('bx-x')
            });
        }
    }
    
    showMenu('header-toggle','nav-menu');
    
});