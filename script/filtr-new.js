$(document).ready(function() {
	$('.style_list li').click(function() {
		$('.style_value').text($(this).text());
		$('input[name=x10]').val($(this).data('id'));
        if ($(this).data('id')> 0) {
            $('.style_value').addClass('frmon');
            } else {$('.style_value ').removeClass('frmon');}
        $('input[name=x8]').val(0);
        $('input[name=x7]').val(0);
		countfiltr();
	});
	$('.roof_list li').click(function() {
		$('.roof_value').text($(this).text());
		$('input[name=x11]').val($(this).data('id'));
        if ($(this).data('id')> 0) {
            $('.roof_value').addClass('frmon');
            } else {$('.roof_value').removeClass('frmon');}
        $('input[name=x8]').val(0);
        $('input[name=x7]').val(0);
		countfiltr();
	});
	$('.type_list li').click(function() {
		$('.type_value').text($(this).text());
		$('input[name=proect_type]').val($(this).data('id'));
        if ($(this).data('id')> 0) {
            $('.type_value').addClass('frmon');
            } else {$('.type_value').removeClass('frmon');}
        $('input[name=x8]').val(0);
        $('input[name=x7]').val(0);
		countfiltr();
	});
    $('.radio-green').change(function() {
        if ($(this).data('move')== 'left' && $(this).prop('checked')==false) {
            //alert();
            lbl = $(this).next().next();
            no = $(this).next();
            //$(this).attr('data-move', 'left');
            //ckyes.removeAttr('checked');;
            lbl.attr('for', no[0].id);
        }
        if ($(this).data('move')== 'right' && $(this).prop('checked')==false) {
            lbl = $(this).next();
            yes = $(this).prev();
            lbl.attr('for', yes[0].id);
            //alert();
            //$(this).attr('data-move', 'right');
            //ckno.removeAttr('checked');;
            //$(this).attr('for', ckyes[0].id);
        }
	});
	$('.archive_list li').click(function() {
		$('.c-home_archive .list-btn').text($(this).text());
		$('input[name=archive]').val($(this).data('id'));
        if($(this).data('id')>0) {
            $('.arch_value').addClass('frmon');
            } else {$('.arch_value').removeClass('frmon');}
        $('input[name=x8]').val(0);
        $('input[name=x7]').val(0);
		countfiltr(1);
	});
    $('.prosort').click(function() {
		//$('.c-home_sort .list-btn').text($(this).data('sort'));
		$('input[name=sortinput]').val($(this).data('id'));
		$('input[name=page]').val(1);
		$('.prosort').removeClass('active');
		$(this).addClass('active');
		$('input[name=x8]').val(0);
		$('input[name=x7]').val(0);
		//countfiltr(1);
	});
    $('.bl-sizes').bind('change keyup input click', function() {
        vl = $(this).val();
        if (vl > 0) {
            $(this).addClass('frmon');
            } else {$(this).removeClass('frmon');}
        countfiltr();
	});
	var li = true;
	$('.list, .list-btn').hover(function() {
		li ? li = !li : li = !li;
	});
	$('.list-btn').click(function() {
		$(".c-home_body ul").not($(this).siblings("ul")).removeClass("list-active");
		$(this).siblings("ul").toggleClass("list-active");
	});
    
	$(document).click(function() {
		if (li) {
			$(".c-home_body ul").removeClass("list-active");
		}
		
	});
	window.onwheel = function() {
		if (li) {
			$(".c-home_body ul").removeClass("list-active");
		}
	}
	$('.c-home ul li').click(function() {
		$(".c-home_body ul").removeClass("list-active");
	});
    
    $('.c-home_project').bind('change keyup input click', function(){
        var abc = $('.c-home_project').val();
        if (abc) {
            $(this).addClass('frmon');
            } else {$(this).removeClass('frmon');}
    $('.c-home_project').val(urlRusLat(abc))
});
    $('.invert').click(function() {
        $('.style_value').text('Стиль');
		$('input[name=x10]').val('');
        $('input[name=proect_num]').val('');
		$('input[name=page]').val(1);
        $('.roof_value').text('Вид кровли');
		$('input[name=x11]').val('');
		$('.type_value').text('Тип строения');
		$('input[name=proect_type]').val('');
        $('.sort_value').text('По новизне');
		$('input[name=sortinput]').val('1');
        $('.list-btn').val('');
        $('.c-home_project').val('');
        $('input:checked').prop('checked', false);
        $('.frmon').removeClass('frmon');
        var sldr = $('.ui-slider-handle');
        sldr.eq(0).css('left', '2%');
        sldr.eq(1).css('left', '100%');
        $('.ui-slider-range').css('left', '2%').css('width', '98%');
        countfiltr(1);
        $(".myfiltr").attr("action", "/proektyi.html");

    });
	$('.formsubmit').click(function() {
		$('input[name=page]').val(1);
    });

});

var a=[],b;

function urlRusLat(str) {
      var cyr2latChars = new Array(
              ['а', 'a'], ['в', 'b'],  ['е', 'e'], ['к', 'k'], ['м', 'm'],  ['н', 'h'], ['о', 'o'], ['р', 'p'],
              ['т', 't'], ['у', 'y'], ['х', 'x'],  ['с', 'c'], ['А', 'A'], ['В', 'B'], ['Е', 'E'], ['К', 'K'], 
              ['М', 'M'], ['Н', 'H'], ['О', 'O'], ['Р', 'R'], ['С', 'C'], ['Т', 'T'],  ['У', 'Y'], ['Х', 'X']
  );
  var newStr = new String();
  for (var i = 0; i < str.length; i++) {
      ch = str.charAt(i);
      var newCh = '';
      for (var j = 0; j < cyr2latChars.length; j++) {
          if (ch == cyr2latChars[j][0]) {
              newCh = cyr2latChars[j][1];
          }
      }
      // Если найдено совпадение, то добавляется соответствие, если нет - пустая строка
      if (newCh == '') newCh = ch;
      newStr += newCh;
  }
  // Удаляем повторяющие знаки - Именно на них заменяются пробелы.
  // Так же удаляем символы перевода строки, но это наверное уже лишнее
  return newStr.replace(/[_]{2,}/gim, '_').replace(/\n/gim, '');
};
function chngroof (arr) {
    roof = $('.roof_list li');
    if (arr.length > 0){
        for (var i = 0; i < roof.length; i++){
            if ($.inArray(String(roof.eq(i).data('id')), arr)== -1) {
                roof.eq(i).css('display', 'none');
            } else {roof.eq(i).css('display', 'inherit');}
            
        }
    }
};