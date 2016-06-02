// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            // depende del tino de navbar, si es fijo o no
            // ponemos un -50, -70 si es fijo y tenemos un padding en el body
            // o nada (si no esta fijo)
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});