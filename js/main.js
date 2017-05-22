$(document).ready(function () {
    $(".anchor").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top-0;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});