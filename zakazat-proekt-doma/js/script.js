$(document).ready(function() {
	// работа форм
	function get_r_str(string_length)
	{
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcde...";
		var r_str = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			r_str += chars.substring(rnum,rnum+1);
		}
		return r_str;
	}
	function change_line(some_line)
	{
		var new_line = "";
		new_line += some_line.substring(4,5);
		new_line += some_line.substring(1,4);
		new_line += some_line.substring(1,2);
		new_line += some_line.substring(5,6);
		return new_line;
	}
	function init_vals(sc)
	{
	    $("form").each(function(){
	    	if (typeof $(this).attr("id") == "undefined") {
	    	} else {
	    		$('#'+$(this).attr("id")+' input').each(
	    	    function(index){  
	    				var input = $(this);
	    				var w_str = "";
	    				w_str += get_r_str(8);
	    				if(input.attr('type')=='hidden' && input.attr('name')=='capS1') {
	    					input.val(w_str);
	    				}
	    				if(input.attr('type')=='hidden' && input.attr('name')=='capS2') {
	    					input.val(w_str);
	    				}
	    			}
	    		);		
	    	}
	    });
		window.setTimeout("init_vals();",1000*60*60);
	}
	init_vals();
	// работа форм
	// Форма заказать проект start
  var valBuyProject = $("#sendBuyProject").validate({
    rules: {
      NAME: { required: true, minlength: 2 },
      PHONE: { required: true, minlength: 2 },
    },
    messages: {
      NAME: { required: "Поле 'Ваше имя' обязательно для заполнения", minlength: "Не менее 2 символов" },
      PHONE: { required: "Поле 'Ваш телефон' обязательно для заполнения", minlength: "Не менее 2 символов" },
    },
    errorElement: "em",
    errorPlacement: function ( error, element ) {
			error.addClass( "help-block" );
			error.insertAfter( element );
    },
    highlight: function ( element, errorClass, validClass ) {
      $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
    },
    unhighlight: function (element, errorClass, validClass) {
      $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
    },
    submitHandler: function ()
    {
  		var formname = '#sendBuyProject';
		// соло клик 
		$(formname +' button').prop('disabled', true);
  		$.ajax({
  			type: 'POST',
  			url: '/ajax_form_buy.php',
  			data: $(formname).serialize(),
  			success: function(data) {
  				var res = JSON.parse(data);
  				if(data == "true") {
  					$(formname).fadeOut("fast", function(){
							$("#buyproject .info").empty().append('<p><strong>Спасибо!<br>Ваше сообщение отправлено!</strong></p>');
							yaCounter24269488.reachGoal('zakaz_ok');
							setTimeout(function () {  $('#buyproject').modal('hide'); }, 5000);
  					});
  				} else {
  					switch (res.error) {
  					  case "1":
  					    error = "Поле 'Ваше имя' обязательно для заполнения";
								element = "#inputName";
  					    break
  					  case "2":
  					    error = "Поле 'Ваш e-mail' обязательно для заполнения";
								element = "#inputEmail";
  					    break
  					  case "3":
  					    error = "Пожалуйста, введите действительный адрес электронной почты";
								element = "#inputEmail";
  					    break
  					  case "4":
  					    error = "Поле 'Ваш телефон' обязательно для заполнения";
								element = "#inputPhone";
  					    break
  					  case "66":
  					    error = "tt";
								element = "#inputText";
  					    break
  					}
						var getNext = $(formname+" "+element).next();
						if(getNext.is('em') && res.error=="") {
							$(formname+" "+element).parents(".form-group").removeClass("has-error").addClass('has-success');
							getNext.next().remove();
						} else {
							$(formname+" "+element).parents(".form-group").removeClass('has-success').addClass("has-error")
							$(formname+" "+element).after('<em class="error help-block">'+error+'</em>');
						}
					}
        }
	    });
	    return false;
    }
  });
	// Форма заказать проект end


	//Форма Для архитектора
	var valFormArc = $("#formFormArc").validate({
		rules: {
			NAME: {required: true, minlength: 2 },
			MESSAGE: { required: true, },
		},
		messages: {
			NAME: { required: "Поле 'Как к Вам обращаться?' обязательно для заполнения", minlength: "Не менее 2 символов" },
			MESSAGE: { required: "Пожалуйста добавьте сообщение", },
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			error.addClass( "help-block" );
			error.insertAfter( element );
		},
		highlight: function ( element, errorClass, validClass ) {
			$(element).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$(element).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
		},
		submitHandler: function ()
		{
	  		var formname = '#formFormArc';
			// соло клик 
			$(formname +' button').prop('disabled', true);
	  		$.ajax({
	  			type: 'POST',
	  			url: '/ajax_form_arc.php',
	  			data: $(formname).serialize(),
  				success: function(data) {
	  				var res = JSON.parse(data);
	  				if(data == "true") {
						var findId = $(formname).parent().closest('div[id]').attr('id');
  						$(formname).fadeOut("fast", function()
						{
							$("#"+findId+" .info").empty().append('<p><strong>Спасибо!<br>Ваше сообщение отправлено!</strong></p>');
							yaCounter24269488.reachGoal('arch-plans-ok');
							if(findId=='sp-form-arc')
							{
								setTimeout(function () {  $('#sp-form-arc').modal('hide'); }, 5000);
							} else {
								//$("#"+findId+" .info").empty().append('<p><strong>Спасибо!<br>Ваше сообщение отправлено!</strong></p>');
							}
	  					});
					} else {
						switch (res.error) {
							case "1":
		  					    error = "Поле 'Сообщение' обязательно для заполнения";
								element = "message";
  							    break
							case "2":
								error = "Поле 'Ваше имя' обязательно для заполнения";
								element = "#arc-name";
								break
							case "3":
								error = "Поле 'Ваш e-mail' обязательно для заполнения";
								element = "#arc-email";
								break
							case "4":
								error = "Пожалуйста, введите действительный адрес электронной почты";
								element = "#arc-email";
								break
						}
						var getNext = $(formname+" "+element).next();
						if(getNext.is('em') && res.error=="") {
							$(formname+" "+element).parents(".form-group").removeClass("has-error");
							getNext.next().remove();
						} else {
							$(formname+" "+element).parents(".form-group").addClass("has-error")
							$(formname+" "+element).after('<em class="error help-block">'+error+'</em>');
						}
					}
				}
			});
		}
	});
	//Форма для архитектора END
});
// Генерация мобального окна
function doModal(heading, formContent) {
	html =  '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
  html += '<div class="modal-dialog">';
  html += '<div class="modal-content">';
  html += '<div class="modal-header">';
  html += '<button type="button" class="close" data-dismiss="modal" aria-label="Закрыть"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>';
  html += '<div class="modal-title">'+heading+'</div>'
  html += '</div>';
  html += '<div class="modal-body text-center">';
  html += formContent;
  html += '</div>';
  html += '</div>';  // modalWindow
  $('body').append(html);
  $("#dynamicModal").modal();
  $("#dynamicModal").modal('show');
  $('#dynamicModal').on('hidden.bs.modal', function (e) {
  	$(this).remove();
	});
}

/**
 * Форматирование числа.
 * @author Andrey Mishchenko (http://www.msav.ru/)
 * @param val - Значение для форматирования
 * @param thSep - Разделитель разрядов
 * @param dcSep - Десятичный разделитель
 * @returns string
 */
function numeric_format(val, thSep, dcSep) {
	// Проверка указания разделителя разрядов
  if (!thSep) thSep = ' ';
  // Проверка указания десятичного разделителя
  if (!dcSep) dcSep = ',';
  var res = val.toString();
  var lZero = (val < 0); // Признак отрицательного числа
  // Определение длины форматируемой части
  var fLen = res.lastIndexOf('.'); // До десятичной точки
  fLen = (fLen > -1) ? fLen : res.length;
  // Выделение временного буфера
  var tmpRes = res.substring(fLen);
  var cnt = -1;
  for (var ind = fLen; ind > 0; ind--) {
  	// Формируем временный буфер
    cnt++;
    if (((cnt % 3) === 0) && (ind !== fLen) && (!lZero || (ind > 1))) {
    	tmpRes = thSep + tmpRes;
		}
		tmpRes = res.charAt(ind - 1) + tmpRes;
	}
	return tmpRes.replace('.', dcSep);
}
