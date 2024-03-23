
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

///------------------top consult form--------------------
$('#topcons').click(function () {
    if($('#ConsName')[0].checkValidity()&&$('#ConsPhone')[0].checkValidity()){
    $('#cons-form').modal('toggle');    
	sendAjaxFeedbackForm('consultform','../sendFeedback.php', 'Спасибо за заказ');
    $('#consultform').trigger('reset');
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
                minlength: 10
            }
        },
        messages: {
            ConsName: {
                required: "Укажите Ваше имя",
                minlength: "Не менее 2 символов"
            },
            ConsPhone: "Укажите номер телефона"
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

///------------------top consult form--------------------
///------------------foot consult form-------------------

$('.prefooter_btn').click(function () {
        //event.preventDefault();
        //form = $("#prefooter_form").checkValidity();
        if($("#prefooter_form input[name*='Name']")[0].checkValidity() && $("#prefooter_form input[name*='Phone']")[0].checkValidity()){
        sendAjaxFeedbackForm('prefooter_form','../sendFeedback.php', 'Спасибо, заявка отправлена');
        $('#prefooter_form').trigger('reset');}
        return false
});

$("#prefooter_form").validate({
        rules: {
            Name: {
                required: true,
                minlength: 2
            },
            Phone: {
                required: true,
                minlength: 11
            }
        },
        messages: {
            Name: {
                required: "Укажите Ваше имя",
                minlength: "Не менее 2 символов"
            },
            Phone: "Укажите номер телефона"
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

///------------------foot consult form-------------------


function sendAjaxFeedbackForm(ajax_form, url, msg) {
    $.ajax({
        url:     url,
        type:     "POST",
        dataType: "html",
        contentType: 'application/x-www-form-urlencoded; charset=windows-1251',
        data: $("#"+ajax_form).serialize(),
        success: function(response) {
            yaCounter10648975.reachGoal('all_forms_submit');
            //ym(10648975,'reachGoal','all_forms_submit');
        	switch (ajax_form){
                case 'prbot':
                    yaCounter10648975.reachGoal('footer_consult');
                    break;
                case 'consultform':
                    yaCounter10648975.reachGoal('header_consult');
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
