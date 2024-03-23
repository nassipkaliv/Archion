// Спойлеры
$(document).ready(function () {
    $('.js_spoiler-header').click(function () {
        var content = $(this).next('.js_spoiler-content');
        if (content.is(":visible")) {
            content.slideUp();
            $(this).children('img').css('transform', 'rotate(180deg)');
        } else {
            $('.js_spoiler-content').slideUp();
            $('.js_spoiler-header').children('img').css('transform', 'rotate(180deg)');
            content.slideDown();
            $(this).children('img').css('transform', 'rotate(0deg)');
        }
    });
});

// Переключатель контента
$(document).ready(function () {
    $(".js-panel-toggler").click(function () {
        var container = $(this).closest(".selector");
        var target = $(this).data("target");

        container.find(".js-content-panel").not("#" + target).hide(); // Скрываем другие панели только в пределах контейнера
        $("#" + target, container).show(); // Переключаем выбранную панель с анимацией
        container.find(".js-panel-toggler").removeClass("active");
        $(this).addClass("active");
    });
});

