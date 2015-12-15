(function fadeInDiv() {
    var divs = $('#ghost');
    var elem = divs.eq(Math.floor(Math.random() * divs.length));
    if (!elem.is(':visible')) {
        elem.prev().remove();
        elem.animate({
            opacity: 1
        }, Math.floor(Math.random() * 1000), fadeInDiv);
    } else {

        elem.animate({
            opacity: (Math.random() * 1)
        }, Math.floor(Math.random() * 1000), function () {
            elem.before('#ghost');
            window.setTimeout(fadeInDiv);
            //fadeInDiv();
        });
    }
})();