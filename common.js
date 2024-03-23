var page;
var count;
var leastcount;
//var cntr = 0;
$(document).ready(function() {
    var str = 0;
    $('#owl-carousel').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });
    var owl = $("#owl-carousel").data('owlCarousel');
    $('#owl-carousel1').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });
    $('#owl-carousel2').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });
    $('#owl-carousel3').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });
    $('#owl-carousel4').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });
    $('#owl-carousel5').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });
    $('#owl-carousel6').owlCarousel({
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ["предыдущий", "следующий"]
            },
            600: {
                items: 2,
                nav: !1
            },
            1200: {
                items: 2,
                nav: !0,
                loop: !1,
                navText: ["предыдущий", "следующий"]
            }
        }
    });

    function t() {
        var t = $(window).height() - 174;
        t > 700 && ($(".slider-block .navigation").height(t), $(".slider-block").height(t), $(".slider-block .item").height(t).css("line-height", t + "px"))
    }
    var n = $("#home-slider");
    n.owlCarousel({
        loop: !1,
        items: 1,
        center: !0,
        callbacks: !0,
        URLhashListener: !0,
        startPosition: 'URLHash'
    }), $(".slider-block .navigation .button-right").click(function() {
        n.trigger("next.owl.carousel")
    }), $(".slider-block .navigation .button-left").click(function() {
        n.trigger("prev.owl.carousel")
    }), t(), $(window).resize(t);
    $(window).on('load resize', windowSize);
    $("#region").change(function() {
        location.href = "https://" + this.value
    });
    sl2 = $('.movieeee').bxSlider({
        speed: 1400,
        auto: !1,
        pager: !1,
        infiniteLoop: !1,
        hideControlOnEnd: !1,
        slideWidth: 280,
        slideMargin: 30,
        minSlides: 4,
        maxSlides: 144,
        nextText: '',
        prevText: ''
    });
    $('.fusion-carousel-holder').bxSlider({
        speed: 1400,
        auto: !0,
        pager: !1,
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        slideWidth: 200,
        slideMargin: 30,
        minSlides: 1,
        maxSlides: 5,
        controls: !1
    });
    $('.js-catalog2').bxSlider({
        speed: 1400,
        auto: !1,
        pager: !1,
        slideWidth: 1170,
        slideMargin: 12,
        minSlides: 1,
        maxSlides: 24,
        infiniteLoop: !1,
        hideControlOnEnd: !0,
        nextSelector: '.js-catalog_next2',
        prevSelector: '.js-catalog_prev2',
        nextText: '',
        prevText: ''
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn()
        } else {
            $('.scrollup').fadeOut()
        }
        client_h = document.body.clientHeight
    });
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 400
        }, 600);
        return !1
    });
    b_pag = $('b.pagers');
    pgn = b_pag.next();
    pgp = b_pag.prev();
    $('.bx-next').attr('href', pgn.attr('href'));
    $('.bx-prev').attr('href', pgp.attr('href'));
    if (typeof($('.bx-prev').attr('href')) == "undefined") $('.bx-prev').addClass('disabled');
    if (typeof($('.bx-next').attr('href')) == "undefined") $('.bx-next').addClass('disabled');
    $('.b-filter__view__list li').click(function() {
        $tab_change($(this))
    });
    $('.b-pr input').click(function() {
        $('input[name=page]').val(1);
        $('input[name=pl_2a]').val('');
        $('input[name=pl_2b]').val('');
        $('input[name=sort]').val('sort');
        this.form.submit()
    });
    $('.nxt').click(function() {
        var pg = $('.myfiltr input[name=page]').val();
        pg++;
        $('.myfiltr input[name=page]').val(pg);
        $('.myfiltr').submit();
        return !1
    });
    $('.prv').click(function() {
        var pg = $('.myfiltr input[name=page]').val();
        pg--;
        $('.myfiltr input[name=page]').val(pg);
        $('.myfiltr').submit();
        return !1
    });
    $('.lst').click(function() {
        var pg = $('.myfiltr input[name=colpage]').val();
        $('.myfiltr input[name=page]').val(pg);
        $('.myfiltr').submit();
        return !1
    });
    $('.frst').click(function() {
        $('.myfiltr input[name=page]').val(1);
        $('.myfiltr').submit();
        return !1
    });
    $('.pagepro').click(function() {
        page = $(this).val();
        $('.myfiltr input[name=page]').val(page);
        page_change();
        //$('.myfiltr').submit();
        return !1
    });
    $('.nxt1').click(function() {
        var pg = $('.myfiltr2 input[name=page]').val();
        pg++;
        $('.myfiltr input[name=page]').val(pg);
        $('.myfiltr').submit();
        return !1
    });
    $('.prv1').click(function() {
        var pg = $('.myfiltr2 input[name=page]').val();
        pg--;
        $('.myfiltr2 input[name=page]').val(pg);
        $('.myfiltr2').submit();
        return !1
    });
    $('.lst1').click(function() {
        var pg = $('.myfiltr2 input[name=colpage]').val();
        $('.myfiltr2 input[name=page]').val(pg);
        $('.myfiltr2').submit();
        return !1
    });
    $('.frst1').click(function() {
        $('.myfiltr2 input[name=page]').val(1);
        $('.myfiltr2').submit();
        return !1
    });
    $('.pagel').click(function() {
        var pg = $(this).val();
        $('.myfiltr2 input[name=page]').val(pg);
        $('.myfiltr2').submit();
        return !1
    });
    $('.b-pr select').change(function() {
        $('input[name=page]').val(1);
        $('input[name=colpage]').val('');
        $('input[name=pl_2a]').val('');
        $('input[name=pl_2b]').val('');
        $('input[name=sort]').val('sort');
        this.form.submit()
    });

    $('.prjct').css('text-align', 'center');
    $(".filtr input").click(function() {
        if ($('input[name=x2]').prop('checked') == !1) {
            $('input[name=x2]').val('')
        } else {
            $('input[name=x2]').val('on')
        }
        if ($('input[name=proect_et_1]').prop('checked') == !1) {
            $('input[name=proect_et_1]').val('')
        } else {
            $('input[name=proect_et_1]').val('on')
        }
        if ($('input[name=proect_et_2]').prop('checked') == !1) {
            $('input[name=proect_et_2]').val('')
        } else {
            $('input[name=proect_et_2]').val('on')
        }
        if ($('input[name=proect_et_3]').prop('checked') == !1) {
            $('input[name=proect_et_3]').val('')
        } else {
            $('input[name=proect_et_3]').val('on')
        }
        if ($('input[name=x3]').prop('checked') == !1) {
            $('input[name=x3]').val('')
        } else {
            $('input[name=x3]').val('on')
        }
        var snd = $.post("/cnt_pr.php", {
            sort: $(".myfiltr input[name=sort]").val(),
            x11: $(".myfiltr input[name=x11]").val(),
            x3: $(".myfiltr input[name=x3]").val(),
            x2: $(".myfiltr input[name=x2]").val(),
            x4: $(".myfiltr input[name=x4]").val(),
            x4no: $(".myfiltr input[name=x4no]").val(),
            x1: $(".myfiltr input[name=x1]").val(),
            x1no: $(".myfiltr input[name=x1no]").val(),
            x6: $(".myfiltr input[name=x6]").val(),
            x6no: $(".myfiltr input[name=x6no]").val(),
            x5: $(".myfiltr input[name=x5]").val(),
            x5no: $(".myfiltr input[name=x5no]").val(),
            x12: $(".myfiltr input[name=x12]").val(),
            x12no: $(".myfiltr input[name=x12no]").val(),
            x13: $(".myfiltr input[name=x13]").val(),
            x13no: $(".myfiltr input[name=x13no]").val(),
            proect_et_1: $(".myfiltr input[name=proect_et_1]").val(),
            proect_et_2: $(".myfiltr input[name=proect_et_2]").val(),
            proect_et_3: $(".myfiltr input[name=proect_et_3]").val(),
            proect_num: $(".myfiltr input[name=proect_num]").val(),
            pl_1a: $(".myfiltr select[name=pl_1a]").val(),
            pl_1b: $(".myfiltr select[name=pl_1b]").val(),
            pl_2a: $(".myfiltr select[name=pl_2a]").val(),
            pl_2b: $(".myfiltr select[name=pl_2b]").val(),
            x8: $(".myfiltr input[name=x8]").val(),
            x7: $(".myfiltr input[name=x7]").val(),
            x10: $(".myfiltr select[name=x10]").val(),
            x11: $(".myfiltr select[name=x11]").val(),
            archive: $(".myfiltr input[archive]").val(),
            x15: $(".myfiltr input[name=x15]").val(),
            x15no: $(".myfiltr input[name=x15no]").val(),
            sortinput: $(".myfiltr input[name=sortinput]").val()
        }, function(data) {
            if (data.success == "true") {
                $(".filtrsub").val(data.count);
                $("#windows-container-ind div.goodnews").show()
            } else {
                if (data.success == "false") {
                    $("#windows-container-ind div.goodnews").show()
                }
            }
        }, "json");
        if (snd) {}
    });
    $(".bestpr").click(function() {
        mainpage = "https://www.hmkmos.ru/";
        prolink ="https://www.hmkmos.ru/proektyi.html"
        console.log(window.location.href);
        console.log(page);
        if (page == 3 && window.location.href == mainpage){
            window.location.href = prolink;
            
        } else {
        page++;
        $.post("/bestprojects.php", {
            page: page.toString(),
            query: $("input[name=query]").val()
        }, function(data) {
            leastcount = leastcount - 6;
            if (data.length > 0) {
                $(".block_proekts_img .best").html(data);
            }
            if (leastcount <= 0) {
                $(".bestpr").hide();
            }
            $(".leastvalue").text(leastcount);
        }, "json").fail(function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    });}
    });
    var tog = $('.mainmenu2 .toggle-button');
    var togclose = $('.b-menu__item_close .toggle-button');
    tog.click(function() {
        console.log("hi")
    });
    tog.click(function(e) {
        e.preventDefault();
        var $obj = $(".b-menu");
        $obj.css('display') == 'block' ? $obj.css('display', 'none') : $obj.css('display', 'block')
    })
    togclose.click(function(e) {
        e.preventDefault();
        $('.mainmenu').css("display", "none");
        $('.menu2').css("display", "block")
    })
    var chk = $('.niceCheck');
    chk.click(function(e) {
        e.preventDefault();
        if ($(this).attr('class') == 'niceCheck niceChecked') {
            var inp = $(this).children('input');
            var nm = inp.attr('name');
            if (~nm.indexOf("no")) {
                var contrinp = $('input[name=' + nm.slice(0, -2) + ']');
                if (contrinp.attr('checked')) {
                    contrinp.removeAttr('checked');
                    contrinp.val('');
                    contrinp.parent().removeClass('niceChecked')
                }
            } else {
                var contrinp = $('input[name=' + nm + 'no]');
                if (contrinp.attr('checked')) {
                    contrinp.removeAttr('checked');
                    contrinp.val('');
                    contrinp.parent().removeClass('niceChecked')
                }
            }
        }
    });
    doc_h = $(document).height();
    client_h = document.body.clientHeight;
    if ($(window).width() > 980) {
        (function() {
            var timeout = !1,
                menu = $('.b-header__main'),
                m_ul = menu.find('.b-menu'),
                glossary = menu.find('#catalog-glossary'),
                expand = menu.find('.mainmenu .b-menu__item'),
                loaded = !1,
                lnks = $('.mainmenu .b-menu__item a'),
                unexpand = menu.find('.unexpand');
            timeout = !1;
            sl = $('.js-catalog').bxSlider({
                speed: 1400,
                auto: !1,
                pager: !1,
                infiniteLoop: !1,
                hideControlOnEnd: !1,
                slideWidth: 410,
                slideMargin: 20,
                minSlides: 1,
                maxSlides: 144,
                nextText: '',
                prevText: ''
            });

            function close() {
                glossary.removeClass('expanded');
                $(document).off('click', close)
            }
            expand.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                var lnk = $(this);
                var a = $(this).attr('list');
                if (typeof($(this).attr('list')) == "undefined") {
                    location.href = lnk[0].childNodes[1].href
                }
                if ($(this).attr('class') == 'b-menu__item active' && $("." + a).css("display") == "block" && glossary.attr('class') == 'expanded') {
                    location.href = lnk[0].childNodes[1].href
                } else {
                    $(".b-menu__item").removeClass('active');
                    $(this).addClass('active');
                    $(".list").css("display", "none");
                    $("." + a).css("display", "block");
                    glossary.addClass('expanded');
                    $(document).on('click', close)
                }
            });
            glossary.mouseleave(function(e) {
                glossary.removeClass('expanded')
            });
            $('.b-header__main').mouseleave(function(e) {
                glossary.removeClass('expanded')
            });
            unexpand.click(function(e) {
                e.preventDefault();
                close()
            });
            glossary.click(function(e) {
                e.stopPropagation()
            })
        })()
    }
    
});

function page_change() {
        $.post("/bestprojects.php", {
            page: page.toString(),
            query: $("input[name=query]").val()
        }, function(data) {
            $(".block_proekts_img .best").html(data);
        }, "json").fail(function(xhr, status, error) {
        console.log(xhr);
        console.log(status);
        console.log(error);
    });}


function $tab_change(el) {
    $('.b-filter__view__list li').removeClass('active');
    cl = el.attr('class');
    $('.b-filter__row').css('display', 'none');
    $('div.' + cl).css('display', '');
    $('div.cm').css('display', '');
    el.addClass('active')
}


function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : !1
}

function $_change(x11) {
    $(".jq-selectbox__dropdown li").removeClass("selected sel").trigger('refresh');
    $("#x11 option[value='" + x11 + "']").attr("selected", "selected");
    $(".jq-selectbox__dropdown li").eq(Number(x11)).addClass("selected sel");
    n = $(".jq-selectbox__dropdown li").eq(Number(x11)).text();
    $("#x11-styler .jq-selectbox__select-text").html(n)
}

function $_change_x10(x10) {
    $(".jq-selectbox__dropdown li").removeClass("selected sel").trigger('refresh');
    h = $("#x10 option[value='" + x10 + "']").attr("selected", "selected");
    $(".jq-selectbox__dropdown li:contains(" + h.text() + ")").addClass("selected sel");
    n = $(".jq-selectbox__dropdown li:contains(" + h.text() + ")").text();
    $("#x10-styler .jq-selectbox__select-text").html(n)
}

function windowSize() {
    var wh = $(window).width();
    if (wh <= '890') {
        var mg = (wh - 270) / 2;
        if (wh / 2 < 270) {
            l = 0;
            var divsl = $('.js-catalog1 .content_projects');
            $('.js-catalog1 ').empty();
            $('.js-catalog1 ').css('margin-left', mg / 1.37);
            $(divsl).each(function() {
                var $newli = $('<li class="b-catalog__item"  style="overflow: hidden;"></li>').append(this);
                $('.js-catalog1 ').append($newli);
                l++
            })
        }
        if ((typeof(bx1) != "undefined") && (typeof(bx1.destroySlider) == "function")) {
            bx1.destroySlider()
        }
        if (typeof bx2 == "undefined") {
            bx2 = $('.js-catalog1').bxSlider({
                speed: 1400,
                responsive: !0,
                touchEnabled: !0,
                slideMargin: 21,
                infiniteLoop: !1,
                pager: !1,
                slideWidth: 270,
                slideMargin: mg,
                minSlides: 1,
                maxSlides: 24,
                hideControlOnEnd: !0,
                nextSelector: '.js-catalog_next1',
                prevSelector: '.js-catalog_prev1',
                nextText: '',
                prevText: ''
            })
        }
        var li = $('.projlist .b-catalog__item');
        var div = $('.projlist .b-project');
        var li1 = li[0];
        $(li1).append($(div));
        $('.projlist .bx-viewport').css('height', '100%');
        if (typeof bxpromob == "undefined") {
            bxpromob = $('.bxslider').bxSlider({
                pagerCustom: '#bx-pager',
                mode: "fade",
                captions: !0,
                responsive: !0,
                adaptiveHeight: !0,
                infiniteLoop: !1,
                touchEnabled: !0,
                slideWidth: 1170,
                nextText: '',
                prevText: '',
                controls: !0
            });
            pg = $('#bx-pager').bxSlider({
                speed: 700,
                auto: !1,
                pager: !1,
                responsive: !0,
                touchEnabled: !0,
                slideWidth: 117,
                slideMargin: 12,
                minSlides: 1,
                maxSlides: 3,
                moveSlides: 3,
                infiniteLoop: !1,
                hideControlOnEnd: !0,
                nextText: 'next',
                prevText: 'prev'
            });
            $(".slider").removeClass("loading_slider")
        }
    } else {
        if ((typeof(bx2) != "undefined") && (typeof(bx2.destroySlider) == "function")) {
            bx2.destroySlider()
        }
        if (typeof bx2 == "undefined") {
            bx1 = $('.js-catalog1').bxSlider({
                speed: 1400,
                auto: !1,
                pager: !1,
                slideWidth: 540,
                slideMargin: 42,
                minSlides: 2,
                maxSlides: 24,
                infiniteLoop: !1,
                hideControlOnEnd: !0,
                nextSelector: '.js-catalog_next1',
                prevSelector: '.js-catalog_prev1',
                nextText: '',
                prevText: ''
            })
        }
        if (typeof bxpro == "undefined") {
            bxpro = $('.bxslider').bxSlider({
                pagerCustom: '#bx-pager',
                responsive: !0,
                touchEnabled: !0,
                slideWidth: 1170,
                nextText: '',
                prevText: ''
            });
            pg = $('#bx-pager').bxSlider({
                speed: 700,
                auto: !1,
                pager: !1,
                responsive: !0,
                touchEnabled: !0,
                slideWidth: 117,
                slideMargin: 12,
                minSlides: 1,
                maxSlides: 5,
                moveSlides: 5,
                infiniteLoop: !1,
                hideControlOnEnd: !0,
                nextText: 'next',
                prevText: 'prev'
            });
            $(".slider").removeClass("loading_slider")
        }
    }
    $(".bxslider-project").parent().parent().find(".bx-controls").addClass("bxpro-controls");
}

function countfiltr() {
    
    var snd = $.post("cnt_pr.php", {
        sort: $(".myfiltr input[name=sort]").val(),
        proect_num: $(".myfiltr input[name=proect_num]").val(),
        proect_type: $(".myfiltr input[name=proect_type]").val(),
        proect_s0_min: $(".myfiltr input[name=proect_s0_min]").val(),
        proect_s0_max: $(".myfiltr input[name=proect_s0_max]").val(),
        proect_x: $(".myfiltr input[name=proect_x]").val(),
        proect_y: $(".myfiltr input[name=proect_y]").val(),
        x7: $(".myfiltr input[name=x7]").val(),
        x8: $(".myfiltr input[name=x8]").val(),
        x10: $(".myfiltr input[name=x10]").val(),
        x11: $(".myfiltr input[name=x11]").val(),
        x3: $(".myfiltr input[name=x3]:checked").val(),
        proect_et_3: $(".myfiltr input[name=proect_et_3]:checked").val(),
        proect_et_2: $(".myfiltr input[name=proect_et_2]:checked").val(),
        proect_et_1: $(".myfiltr input[name=proect_et_1]:checked").val(),
        x2: $(".myfiltr input[name=x2]:checked").val(),
        x15: $(".myfiltr input[name=x15]:checked").val(),
        x4: $(".myfiltr input[name=x4]:checked").val(),
        x1: $(".myfiltr input[name=x1]:checked").val(),
        x12: $(".myfiltr input[name=x12]:checked").val(),
        x13: $(".myfiltr input[name=x13]:checked").val(),
        x6: $(".myfiltr input[name=x6]:checked").val(),
        x5: $(".myfiltr input[name=x5]:checked").val(),
        x2no: $(".myfiltr input[name=x2no]:checked").val(),
        x15no: $(".myfiltr input[name=x15no]:checked").val(),
        x4no: $(".myfiltr input[name=x4no]:checked").val(),
        x1no: $(".myfiltr input[name=x1no]:checked").val(),
        x12no: $(".myfiltr input[name=x12no]:checked").val(),
        x13no: $(".myfiltr input[name=x13no]:checked").val(),
        x6no: $(".myfiltr input[name=x6no]:checked").val(),
        x5no: $(".myfiltr input[name=x5no]:checked").val(),
        is_done: $(".myfiltr input[name=is_done]").val(),
        sortinput: $(".myfiltr input[name=sortinput]").val(),
        archive: $(".myfiltr input[name=archive]").val(),
        query: $("input[name=query]").val()

    }, function(data) {
        if (data.success == "true") {
            //console.log(data);
            $(".filtrsub").text(data.count);
            if (data.count==0){$(".c-home_submit").attr("disabled", "")}
            else {$(".c-home_submit").removeAttr("disabled")};
            ln = data.lnk + ".html";
            $(".myfiltr").attr("action", "/"+ln);
            count = data.count;
            listroofs = data.roofs;
            chngroof(listroofs);
            leastcount = count - 6;
            $(".leastvalue").text(leastcount);
            //if (cntr==0){$(".c-home_submit").attr("disabled", "")};
        }
    }, "json");
    if (snd) {}
}(function() {
    var originalAddClassMethod = jQuery.fn.addClass;
    $.fn.addClass = function() {
        var result = originalAddClassMethod.apply(this, arguments);
        $(this).trigger('cssClassChanged');
        return result
    }
})();
function chng_region(rg) {
    var chng = $.post("select_region.php", {
        region: rg});
}
function delstat() {
   $('input[name=x8]').val(0);
   $('input[name=x7]').val(0);
   countfiltr();
    }
$(function() {
//    countfiltr();
    $(".myfiltr input").each( function() {
        $(this).on("change", delstat);
    });

    $(".myfiltr .roof_value").on("change", countfiltr);

    $(".myfiltr .style_value").on("change", countfiltr);
    
    $(".myfiltr .sort_value").on("change", countfiltr);
    
    $(".myfiltr #price1").on("change", countfiltr);
    
    $(".myfiltr #price2").on("change", countfiltr);

    $(".loader").css({
        "display": "none"
    });
    $(".page-wrapper").css({
        "filter": "none"
    });
});
$('.modal-btn').click(function(e) {
    e.preventDefault();
    $('.windows-container').css('display', 'block');
    $('.windows-container').css('top', '15%')
});
$('.step-btn_head').click(function() {
    var step = $(this).data('step');
    var h = $('.step-btn_step-' + step + ' .step-btn_body_item-1').height() + $('.step-btn_step-' + step + ' .step-btn_body_item-2').height() + $('.step-btn_step-' + step + ' .step-btn_body_item-3').height() + 50;
    if ($('.step-btn_step-' + step + ' .step-btn_body').height() < 50) {
        $('.step-btn_step-' + step + ' .step-btn_body').css('height', h);
        $('.step-btn_step-' + step + ' .step-btn_arrow').toggleClass('step-btn_arrow-active')
    } else {
        $('.step-btn_step-' + step + ' .step-btn_body').css('height', 0);
        $('.step-btn_step-' + step + ' .step-btn_arrow').toggleClass('step-btn_arrow-active')
    }
});
$('.step-btn_arrow').click(function() {
    var step = $(this).data('step');
    var h = $('.step-btn_step-' + step + ' .step-btn_body_item-1').height() + $('.step-btn_step-' + step + ' .step-btn_body_item-2').height() + $('.step-btn_step-' + step + ' .step-btn_body_item-3').height() + 50;
    if ($('.step-btn_step-' + step + ' .step-btn_body').height() < 50) {
        $('.step-btn_step-' + step + ' .step-btn_body').css('height', h);
        $('.step-btn_step-' + step + ' .step-btn_arrow').toggleClass('step-btn_arrow-active')
    } else {
        $('.step-btn_step-' + step + ' .step-btn_body').css('height', 0);
        $('.step-btn_step-' + step + ' .step-btn_arrow').toggleClass('step-btn_arrow-active')
    }
});
$('.corp_aside-btn').click(function() {
    $('.aside').toggleClass('aside-active')
});
$('.articles').click(function() {
    $('.aside').removeClass('aside-active')
});
$('.art').click(function() {
    $('.aside').removeClass('aside-active')
});
$('.h-btn').click(function() {
    $('.h-nav').toggleClass('h-nav--active');
});
$('.s-feature_arrow').click(function() {
    var f = $(this).data('feature');
    var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
    if ($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
        $(this).css('transform', 'rotate(180deg)')
    } else {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'hidden');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', 0);
        $(this).css('transform', 'rotate(0deg)')
    }
});
$('.s-feature_head').click(function() {
    var f = $(this).data('feature');
    var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
    if ($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
        $('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(180deg)')
    } else {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'hidden');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', 0);
        $('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(0deg)')
    }
});
$('.s-feature_arrow').click(function() {
    var f = $(this).data('feature');
    var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
    if ($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
        $(this).css('transform', 'rotate(180deg)')
    } else {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'hidden');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', 0);
        $(this).css('transform', 'rotate(0deg)')
    }
});
$('.s-feature_head').click(function() {
    var f = $(this).data('feature');
    var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
    if ($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
        $('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(180deg)')
    } else {
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'hidden');
        $('.s-feature-' + f + ' .s-feature_list-wrap').css('height', 0);
        $('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(0deg)')
    }
});
//*$('.s-comments_btn').click(function() {
//    $('.feedback').addClass('feedback--opened');
//    $('.s-modal-bg').addClass('s-modal-bg--opened')
//});
$('.s-modal-bg').click(function() {
    $('.s-modal-bg').removeClass('s-modal-bg--opened');
    $('.feedback').removeClass('feedback--opened')
});
var input = document.querySelector('.feedback_input--photo');
var preview = document.querySelector('.prev');
$(input).change(function() {
    var curFiles = input.files;
    for (var i = 0; i < curFiles.length; i++) {
        $(preview).text(curFiles[i].name)
    }
});
window.onload = (event) => {
  console.log('page is fully loaded');
  $('form').append('<input type="hidden" name="pgld" value=1>');
};

var minOffset = 50;
var off_cat = $('.catalog_list');
var h_header = $('header')[0].offsetHeight;
var cat_filtr = $('.catalog_filter');

window.onscroll = function() { 
  let has_class = document.body.classList.contains("is_scrolled");
  
  if (minOffset < document.documentElement.scrollTop ) {
    if (!has_class) {
        document.body.classList.add("is_scrolled");
    }
    if (cat_filtr.length>0) {
        if (off_cat[0].offsetTop < document.documentElement.scrollTop) {
            cat_filtr.css('position', 'fixed').css('top', h_header).css('width', off_cat[0].offsetWidth);
                
            }
        }
 
  } else if (has_class) {
    document.body.classList.remove("is_scrolled")

  } 
}