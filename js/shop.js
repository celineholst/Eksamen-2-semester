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

    /* Indkøbskurv */
    let count = 0;
    //if add to cart btn clicked
    $('.cart-btn').on('click', function () {
        let cart = $('.cart-nav');
        // find the img of that card which button is clicked by user
        let imgtodrag = $(this).parent('.buttons').parent('.content').parent('.card').find("img").eq(0);
        if (imgtodrag) {
            // duplicate the img
            var imgclone = imgtodrag.clone().offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            }).css({
                'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
            }).appendTo($('body')).animate({
                'top': cart.offset().top + 20,
                'left': cart.offset().left + 30,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

            setTimeout(function () {
                count++;
                $(".cart-nav .item-numb").text(count);
            }, 1500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });

});
