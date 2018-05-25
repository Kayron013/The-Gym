// Change logo size in navbar at scroll threshold
$(window).scroll(function () {
        if ($(this).scrollTop() >= 451) {
            $('#nav-logo').addClass('small-logo');
        } else {
            $('#nav-logo').removeClass('small-logo');
        }
    });