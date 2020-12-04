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
    
    /* Indkøbskurv */
    let count = 0;
    //  Tilføjes til indkøbskurv når knappen klikkes
    $('.cart-btn').on('click', function () {
        let cart = $('.cart-nav');
        // Finder billedet for den knap der trykkes
        let imgtodrag = $(this).parent('.buttons').parent('.content').parent('.card').find("img").eq(0);
        if (imgtodrag) {
            // Dubliker billedet
            var imgclone = imgtodrag.clone().offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            // Styler billedets størrelse
            .css({
                'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            })
            // Definere hvor billedet skal føre hen
            .appendTo($('body')).animate({
                'top': cart.offset().top + 20,
                'left': cart.offset().left + 30,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');
            // Ændre antallet i indkøbskurv
            setTimeout(function () {
                count++;
                $(".cart-nav .item-numb").text(count);
            }, 1500);
            // Fjerner elementet fra DOM, men bevarer dataen, skaber forsvindingseffekt
            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });
    
});