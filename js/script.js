//fixed menu start//

$(window).scroll(function () {
    $scrollamout = $(window).scrollTop();

    if ($scrollamout > 100) {
        $(".menu").addClass("sticky")
    } else {
        $(".menu").removeClass("sticky")
    }

})

//fixed menu start//
