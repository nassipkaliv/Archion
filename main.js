  
var curBlock = 1;
var mainPage = $('.p-wrapper');
var blocksCount = mainPage.children().length - 1;
var mt = 0;
var logo = $('.logo-link');
var scrollArrow = $('.scroll-down');
var delay = false;
var isList = false;

$('.list').hover(function() {
	isList ? isList = false : isList = true;
});


logo.click(function(e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 400);    
		mt = 0;
	
		setTimeout(function() {
			logo.css('visibility', 'hidden');
			logo.css('opacity', '0');
		}, 50);
			
		mainPage.css('transition-duration', '1s');
	  	mainPage.css('margin-top', mt + 'vh');
	  	curBlock = 1;

	  	delay = true;
	  	var delayID = setTimeout(function() {
	  		delay = false;
	  		mainPage.css('transition-duration', '0s');
	  		}, 650);
});
$(document).scroll(function() {
	//if ($(window).width() < '1051') {
		if ($(window).scrollTop() > 630) {
			logo.css('visibility', 'visible');
			logo.css('opacity', '1');

		} else {
			logo.css('visibility', 'hidden');
			logo.css('opacity', '0');
		}
	//}
});

  $('.m-banner_wrap').slick({
  	autoplay: true,
  	autoplaySpeed: 3000,
  	dots: false,
		// arrows : false,
  	fade: true,
  	speed: 2000,
  	infinite: true,
  	cssEase: 'ease-in-out',
		loop:true,
		pauseOnFocus: false, 
    pauseOnHover: false,
  });

	$('.m-banner_wrap').on('touchstart', e => {
		$('.m-banner_wrap').slick('slickPlay');
	});


var step = 1;
var totalsteps = 4;
var qqbtn = $('.qq_btn');
var qqhead = $('.qq_head');
var progress = $('.progress_inner');

var stepcon = [['Вы желаете<br>построить дом?', 'img/main/wall-icon.png'],
		       ['У вас уже есть<br>участок?', 'img/main/point-icon.png'],
		       ['У вас разработан<br>проект дома?', 'img/main/house-icon.png'],
		       ['Вы подобрали для<br>себя проект?', 'img/main/wall-icon.png']];
               
var stepform = ['land', 'proj', 'mat', 'fin'];


var formcon = [['Получите<br>точный расчет', 'img/main/doc-icon.png', 'Точный расчет'],
			   ['Оставьте заявку<br>на подбор проекта', 'img/main/sign-icon.png', 'Подбор проекта']];
			   
var sidelink = '.qq_side--link';
function changeStep(e) {
	if (step < totalsteps) {
		var result;
		if ($(e).data('btn') != undefined) {
			if($(e).data('btn')) {
				result = "Да";
				$(sidelink + '[data-step="' + step + '"]').css('background-image', 'url("' + stepcon[step][1] + '")');
			} else {
				result = "Нет";
				$(sidelink + '[data-step="' + step + '"]').css('background-image', 'none');
			}
		} else {
			result = $('input[data-step="' + step + '"]').val();
		}
		$('input[data-step="' + step + '"]').val(result);
		
		qqhead.css('opacity', '0.5');
		var delayID = setTimeout(function() {
			qqhead.html(stepcon[step - 1][0]);
			qqhead.css('opacity', '1');
			$('.qq_step-current').text(step);
			qqhead.css('background-image', 'url("' + stepcon[step - 1][1] + '")');
			progress.css('width', (100 / totalsteps) * step + "%");
			}, 150);
        if (step == 1) {
            $('.land').removeClass('--hidden');
            $('.proj').addClass('--hidden');
            $('.fin').addClass('--hidden');
            $('.mat').addClass('--hidden');
            $('.qq_form').removeClass('--hidden');}
        if (step == 2) {
            $('.land').addClass('--hidden');
            $('.proj').removeClass('--hidden');}
        if (step == 3) {
            $('.proj').addClass('--hidden');
            $('.mat').removeClass('--hidden');
            }    
		
	} else if (step == totalsteps) {
		var form = 1;

		if($(e).data('btn')) {
			form = 0;
		}
		$('.qq_buttons').addClass('--hidden');
        $('.mat').addClass('--hidden');
        $('.fin').removeClass('--hidden');
		$('.qq_submit').removeClass('--hidden');
		qqhead.css('opacity', '0.5');
			qqhead.html(formcon[form][0]);
			qqhead.css('opacity', '1');
			$('.qq_step-current').text(step);
			qqhead.css('background-image', 'url("' + formcon[form][1] + '")');
			$('.qq_target').val(formcon[form][2]);
			progress.css('width', (100 / totalsteps) * step + "%");
	} 

}

$(sidelink).click(function() {
	step = $(this).data('step');
	$('.qq_buttons').removeClass('--hidden');
	$('.qq_form').addClass('--hidden');
	changeStep();
});
qqbtn.click(function() {
	changeStep(this);
	if (step < totalsteps)
		step++;
});

var filebtn = document.querySelector('.qq_input--file');
var preview = document.querySelector('.qq_filename');

$(filebtn).change(function() {
	var curFiles = filebtn.files;
	for(var i = 0; i < curFiles.length; i++) {
		$(preview).text(curFiles[i].name);
	}
});