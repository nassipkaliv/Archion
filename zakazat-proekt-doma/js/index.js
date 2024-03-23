$('.m-banner_wrap').slick({
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 1000,
	fade: true,
	cssEase: 'ease-in',
	prevArrow: false,
	nextArrow: false
  });
var articleBtnToggle = document.querySelectorAll('.about-article__btn');
articleBtnToggle.forEach(function (item) {
    item.addEventListener("click", btnToggle, false);

    function btnToggle() {
        this.parentNode.querySelector('.built-houses-text_open').classList.toggle('open-text');
        this.classList.toggle('open-text');

        if (this.classList.contains('open-text')) {
            this.textContent = "Свернуть";
            //   $(".about-article__btn").addClass("scrit");
            //   $(".about-article__btn_scrit").removeClass("scrit");
        } else {
            //   $(".about-article__btn").removeClass("scrit");
            this.textContent = "Узнать больше";
        }
    }

    ;
});

$('.built-houses_btn1').click(function () {
    $('.built-houses_btn1').addClass('built-houses_btn-hide');
    $('.built-houses_btn1').removeClass('built-houses_btn-show');
    $('.built-houses_open').addClass('built_open');
    $('.built-houses_btn2').addClass('built-houses_btn-show');

});
$('.built-houses_btn2').click(function () {
    $('.built-houses_btn2').addClass('built-houses_btn-hide');
    $('.built-houses_btn2').removeClass('built-houses_btn-show');
    $('.built-houses_btn3').addClass('built-houses_btn-show');
    $('.built-houses_open2').addClass('built_open');
});
$('.built-houses_btn3').click(function () {
    $('.built-houses_btn3').addClass('built-houses_btn-hide');
    $('.built-houses_btn3').removeClass('built-houses_btn-show');
    $('.built-houses_btn4').addClass('built-houses_btn-show');
    $('.built-houses_open3').addClass('built_open');
});
$('.built-houses_btn4').click(function () {
    $('.built-houses_btn4').addClass('built-houses_btn-hide');
    $('.built-houses_btn4').removeClass('built-houses_btn-show');
    $('.built-houses_btn1').removeClass('built-houses_btn-hide');
    $('.built-houses_btn1').addClass('built-houses_btn-show');
    $('.built-houses_open').removeClass('built_open');
    $('.built-houses_open2').removeClass('built_open');
    $('.built-houses_open3').removeClass('built_open');
});


function initMap() {
    // The location of Uluru
    const uluru = {
        lat: -25.344,
        lng: 131.031
    };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

$(window).on('scroll', function () {
    // console.log($(window).height());
    scroll_pos = $(window).scrollTop() + ($(window).height() / 1.55);
    price1 = $('#usluga--price1').offset().top + $('#usluga--price1').height();
    price2 = $('#usluga--price2').offset().top + $('#usluga--price2').height();
    price3 = $('#usluga--price3').offset().top + $('#usluga--price3').height();
    price4 = $('#usluga--price4').offset().top + $('#usluga--price4').height();
    price5 = $('#usluga--price5').offset().top + $('#usluga--price5').height();
    price6 = $('#usluga--price6').offset().top + $('#usluga--price6').height();
    price7 = $('#usluga--price7').offset().top + $('#usluga--price7').height();
    price8 = $('#usluga--price8').offset().top + $('#usluga--price8').height();

    if (scroll_pos < price1) {
        $('#usluga--price1').addClass('uslugi_usluga--price1');
        $('#usluga--price2').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price1').removeClass('uslugi_usluga--price1');
        $('#usluga--price2').addClass('uslugi_usluga--price1');
    };

    if (scroll_pos < price2) {
        $('#usluga--price2').addClass('uslugi_usluga--price1');
        $('#usluga--price3').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price2').removeClass('uslugi_usluga--price1');
        $('#usluga--price3').addClass('uslugi_usluga--price1');
    };
    if (scroll_pos < price3) {
        $('#usluga--price3').addClass('uslugi_usluga--price1');
        $('#usluga--price4').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price3').removeClass('uslugi_usluga--price1');
        $('#usluga--price4').addClass('uslugi_usluga--price1');
    };
    if (scroll_pos < price4) {
        $('#usluga--price4').addClass('uslugi_usluga--price1');
        $('#usluga--price5').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price4').removeClass('uslugi_usluga--price1');
        $('#usluga--price5').addClass('uslugi_usluga--price1');
    };
    if (scroll_pos < price5) {
        $('#usluga--price5').addClass('uslugi_usluga--price1');
        $('#usluga--price6').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price5').removeClass('uslugi_usluga--price1');
        $('#usluga--price6').addClass('uslugi_usluga--price1');
    };
    if (scroll_pos < price6) {
        $('#usluga--price6').addClass('uslugi_usluga--price1');
        $('#usluga--price7').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price6').removeClass('uslugi_usluga--price1');
        $('#usluga--price7').addClass('uslugi_usluga--price1');
    };
    if (scroll_pos < price7) {
        $('#usluga--price7').addClass('uslugi_usluga--price1');
        $('#usluga--price8').removeClass('uslugi_usluga--price1');
    } else {
        $('#usluga--price7').removeClass('uslugi_usluga--price1');
        $('#usluga--price8').addClass('uslugi_usluga--price1');
    };
});

$('.s-feature_arrow').click(function() {
	var f = $(this).data('feature');
	var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
	if($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
		$(this).css('transform', 'rotate(180deg)');
	} else {
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'hidden');
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('height', 0);
		$(this).css('transform', 'rotate(0deg)');
	}
});

$('.s-feature_head').click(function() {
	var f = $(this).data('feature');
	var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
	if($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
		$('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(180deg)');
	} else {
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'hidden');
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('height', 0);
		$('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(0deg)');
	}
});
$('.s-feature_head').mouseenter(function() {
	var f = $(this).data('feature');
	var h = $('.s-feature-' + f + ' .s-feature_list').height() + 10;
	if($('.s-feature-' + f + ' .s-feature_list-wrap').height() < 30) {
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('visibility', 'visible');
		$('.s-feature-' + f + ' .s-feature_list-wrap').css('height', h);
		$('.s-feature-' + f + ' .s-feature_arrow').css('transform', 'rotate(180deg)');
	}
});

$.validator.setDefaults( {
		submitHandler: function () {
			var formname = '#form-individual-design';
            $('#sp-form').modal('toggle');
            sendAjaxFeedbackForm('form-individual-design','../sendFeedback.php', 'Спасибо, заявка отправлена');
            $('#form-individual-design').trigger('reset');
		}
	});

$("#form-individual-design").validate({
        rules: {
            Name: {
                required: true,
                minlength: 2
            },
            Mail: {
                required: true,
                email: true
            },
            Phone: {
                required: true,
                minlength: 10,
		number: true
            },
            Text: "required",
            captcha_word: {
                required: true,
                minlength: 5,
                maxlength: 5
            },
        },
        messages: {
            Name: {
                required: "Укажите Ваше имя",
                minlength: "Не менее 2 символов"
            },
            Mail: "Укажите верный email адрес",
            Text: "Напишите Ваше сообщение",
            Phone: "Укажите номер телефона (Не менее 10 цифр)",
            captcha_word: {
                required: "Поле защита от автоматических сообщений обязательное для заполнения",
                minlength: "Не менее 5 символов",
                maxlength: "Не более 5 символов",
            },
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-success").removeClass("has-error");
        }
});

//---------------------------top form-----------------------

$('#topcons').click(function () {
    if($('#ConsName')[0].checkValidity()&&$('#ConsPhone')[0].checkValidity()){
	$('#cons-form').modal('toggle');
    sendAjaxFeedbackForm('consultform','../sendFeedback.php', 'Спасибо за заказ');
    $("#consultform").trigger('reset');
	return false}
});


$("#consultform").validate({
        rules: {
            ConsName: {
                required: true,
                minlength: 2
            },
            ConsPhone: {
                required: true,
                minlength: 10,
		number: true
            }
        },
        messages: {
            ConsName: {
                required: "Укажите Ваше имя",
                minlength: "Не менее 2 символов"
            },
            ConsPhone: "Укажите номер телефона (Не менее 10 цифр)"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-success").removeClass("has-error");
        }
});

//----------------------------------------------------------------------
//------------------order ind pro forme --------------------------------

$('#consIndPro').click(function () {
    if($('#IndName')[0].checkValidity()&&$('#IndPhone')[0].checkValidity()){
	$('#Ind-form').modal('toggle');
    sendAjaxFeedbackForm('consIndForm','../sendFeedback.php', 'Спасибо, заявка отправлена');
    $('#consIndForm').trigger('reset');
	return false}
});

$("#consIndForm").validate({
        rules: {
            IndName: {
                required: true,
                minlength: 2
            },
            IndPhone: {
                required: true,
                minlength: 10,
		number: true
            }
        },
        messages: {
            IndName: {
                required: "Укажите Ваше имя",
                minlength: "Не менее 2 символов"
            },
            IndPhone: "Укажите номер телефона (Не менее 10 цифр)"
        },
        errorElement: "em",
        errorPlacement: function(error, element) {
            // Add the `help-block` class to the error element
            error.addClass("help-block");
            if (element.prop("type") === "checkbox") {
                error.insertAfter(element.parent("label"));
            } else {
                error.insertAfter(element);
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parents(".form-group").addClass("has-success").removeClass("has-error");
        }
});

//----------------------------------------------------------------------
//-------------------------footer form----------------------------------

$('.subbot').on('click', function(event) {
    if ($('#prbot .prefooter_input--name')[0].checkValidity()&&$('#prbot .prefooter_input--phone')[0].checkValidity()){
        event.preventDefault();
        sendAjaxFeedbackForm('prbot','../sendFeedback.php', 'Спасибо, заявка отправлена');
        $('.prbot').trigger('reset');
        return false
    }
});

//-----------------------------------------------------------------------
//------------------------subzakaz form----------------------------------

$('.subzakaz').on('click', function(event) {
    if ($('#orderHomePro .prefooter_input--name')[0].checkValidity()&&$('#orderHomePro .prefooter_input--phone')[0].checkValidity()){
        event.preventDefault();
        sendAjaxFeedbackForm('orderHomePro','../sendFeedback.php', 'Спасибо, заявка отправлена');
        $('.zakaz').trigger('reset');
        return false
    }
});

//-----------------------------------------------------------------------

function sendAjaxFeedbackForm(ajax_form, url, msg) {
    $.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        contentType: 'application/x-www-form-urlencoded; charset = UTF-8',
        data: $("#"+ajax_form).serialize(),
        success: function(response) {
            yaCounter10648975.reachGoal('all_forms_submit');
            yaCounter10648975.reachGoal('zakaz_all_forms');
            //ym(10648975,'reachGoal','all_forms_submit');
            switch (ajax_form){
                case 'form-individual-design':
                    yaCounter10648975.reachGoal('raschet_indiv_send');
                    break;
                case 'orderHomePro':
                    yaCounter10648975.reachGoal('Proekt3');
                    break;
                case 'consIndForm':
                    yaCounter10648975.reachGoal('zakaz_proekt');
                    break;
                case 'prbot':
                    yaCounter10648975.reachGoal('zakaz_footer_form');
                    break;
                case 'consultform':
                    yaCounter10648975.reachGoal('zakaz_header_form');
            }
            $('.feedback_success-title').html(msg);
        	$('.feedback_success').addClass('feedback_success--opened');
        	setTimeout(function	(){
        		$('.feedback_success').removeClass('feedback_success--opened');
                $('.s-modal-bg').removeClass('s-modal-bg--opened');
        	}, 2000)
    	},
 	});
}

var input = document.querySelector('.feedback_input--photo');
var preview = document.querySelector('.prev');

$(input).change(function() {
	var curFiles = input.files;
	for(var i = 0; i < curFiles.length; i++) {
		$(preview).text(curFiles[i].name);
	}
});

var minOffset = 50;
window.onscroll = function() { 
  let has_class = document.body.classList.contains("is_scrolled");

  if (minOffset < document.documentElement.scrollTop ) {
    if (!has_class) {
        document.body.classList.add("is_scrolled");
    } 
  } else if (has_class) {
    document.body.classList.remove("is_scrolled")

  } 
}
