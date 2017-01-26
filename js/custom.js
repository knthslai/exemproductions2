var CURRENT_VIDEO_ID, CURRENT_VIDEO_SOURCE, CURRENT_VIDEO_URL;

$(document).ready(function(){


	//Parallax effect
		if(
			(device.iphone() === false) &&
			(device.ipod() === false) &&
			(device.ipad() === false) &&
			(device.android() === false) &&
			(device.androidPhone() === false) &&
			(device.androidTablet() === false) &&
			(device.blackberry() === false) &&
			(device.blackberryPhone() === false) &&
			(device.blackberryTablet() === false) &&
			(device.windowsPhone() === false) &&
			(device.windowsTablet() === false) &&
			(device.fxos() === false) &&
			(device.fxosPhone() === false) &&
			(device.fxosTablet() === false) &&
			(device.mobile() === false) &&
			(device.tablet() === false)
		){
			$('#skills').parallax("50%", 0.1);
			$('#whoiam').parallax("50%", 0.1);
			$('#contact').parallax("50%", 0.1);
		}
	//Parallax effect


	//Start video adaptation
		//Set main video
			window.MAIN_VIDEO_URL = '<iframe id="video" src="https://player.vimeo.com/video/47911018" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			$('header').html( window.MAIN_VIDEO_URL );

		//Get video container width
			window.CURRENT_VIDEO_ID = '47911018';
			window.CURRENT_VIDEO_SOURCE = 'vimeo';


			if( window.CURRENT_VIDEO_SOURCE=='vimeo' ){
				window.CURRENT_VIDEO_URL = 'https://player.vimeo.com/video/' + window.CURRENT_VIDEO_ID; }
			else if( window.CURRENT_VIDEO_SOURCE=='youtube' ){
				window.CURRENT_VIDEO_URL = 'https://www.youtube.com/embed/' + window.CURRENT_VIDEO_ID; }

			//$( "#video" ).contents().find( "button.fullscreen" ).css( "display", "none" );

			resizeVideo();
	//Start video adaptation



	//For thumbnails
		$('body .videos').on('click', '.col-md-3', function(){
			
			$('.videos .row .col-md-3').removeClass('active');
			$(this).addClass('active');


			window.CURRENT_VIDEO_ID = $(this).attr('data-id');
			window.CURRENT_VIDEO_SOURCE = $(this).attr('data-source');


			if( window.CURRENT_VIDEO_SOURCE=='vimeo' ){
				window.CURRENT_VIDEO_URL = 'https://player.vimeo.com/video/'+$(this).attr('data-id')+'?autoplay=1';

				$('body header iframe').attr( 'src', 'https://player.vimeo.com/video/'+$(this).attr('data-id')+'?api=1&player_id=player&autoplay=1' );
				$('html,body').animate({ scrollTop: 80 }, 'slow');
			}
			else if( window.CURRENT_VIDEO_SOURCE=='youtube' ){
				window.CURRENT_VIDEO_URL = 'https://www.youtube.com/embed/'+$(this).attr('data-id')+'?autoplay=1';

				$('body header iframe').attr( 'src', 'https://www.youtube.com/embed/'+$(this).attr('data-id')+'?autoplay=1' );
				$('html,body').animate({ scrollTop: 80 }, 'slow');
			}

			resizeVideo();
		});
	//For thumbnails



	//Carousel
		//Handlers
		$('body').on('click', '.mycarousel .control.control-right', function(){
			var carousel = $(this).attr('data-for');
			var count = parseInt($('.mycarousel#'+carousel).attr('data-count'));
			var current = parseInt($('.mycarousel#'+carousel).attr('data-current'));

			if( current + 1 > count ){ var next = 1; }
			else{ var next = current + 1; }

			if( current - 1 <= 0 ){ var prev = count; }
			else{ var prev = current - 1; }

			if( current + 2 == count + 1 ){ var newnext = 1; }
			else if( current + 2 > count + 1 ){ var newnext = 2; }
			else{ var newnext = current + 2; }


			console.log( ' current: ' + current + ' next: ' + next + ' prev: ' + prev + ' newnext: ' + newnext );

			//Transition next off
			$('.mycarousel#'+carousel).find('div.item[data-marker="'+newnext+'"]').css({
				'transition': 'none',
				'-webkit-transition': 'none',
				'transform': 'translateX(500%)',
				'-webkit-transform': 'translateX(500%)'
			});

			$('.mycarousel#'+carousel).find('div.item[data-marker="'+prev+'"]').css({
				'transition': 'all 1s',
				'-webkit-transition': 'all 1s',
				'transform': 'translateX(-150%)',
				'-webkit-transform': 'translateX(-150%)'
			});

			setTimeout(function(){
				//Move next--------------------------------------------------
					if( $(window).width()>=992 ){
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+next+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(200%)',
							'-webkit-transform': 'translateX(200%)'
						});
					}
					else{
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+next+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(0%)',
							'-webkit-transform': 'translateX(0%)'
						});
					}
				//Move next--------------------------------------------------


				//Move current-----------------------------------------------
					if( $(window).width()>=992 ){
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+current+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(80%)',
							'-webkit-transform': 'translateX(80%)'
						});
					}
					else{
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+current+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(-100%)',
							'-webkit-transform': 'translateX(-100%)'
						});
					}
				//Move current-----------------------------------------------

				//Move next--------------------------------------------------
					if( $(window).width()>=992 ){
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+newnext+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(320%)',
							'-webkit-transform': 'translateX(320%)'
						});
					}
					else{
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+newnext+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(100%)',
							'-webkit-transform': 'translateX(100%)'
						});
					}
				//Move next--------------------------------------------------

				$('.mycarousel#'+carousel).find('div.item[data-marker="'+prev+'"]').removeClass('prev');
				$('.mycarousel#'+carousel).find('div.item[data-marker="'+next+'"]').removeClass('next').addClass('active');
				$('.mycarousel#'+carousel).find('div.item[data-marker="'+current+'"]').removeClass('active').addClass('prev');
				$('.mycarousel#'+carousel).find('div.item[data-marker="'+newnext+'"]').removeClass('prev').addClass('next');

				//Markers
				$('.mycarousel#'+carousel).find('div.marker').removeClass('active');
				$('.mycarousel#'+carousel).find('div.marker[data-marker="'+next+'"]').addClass('active');
			},100);
			//Move current-----------------------------------------------


			$('.mycarousel#'+carousel).attr('data-current',next);
		});

		$('body').on('click', '.mycarousel .control.control-left', function(){
			var carousel = $(this).attr('data-for');
			var count = parseInt($('.mycarousel#'+carousel).attr('data-count'));
			var current = parseInt($('.mycarousel#'+carousel).attr('data-current'));


			if( current + 1 > count ){ var next = 1; }
			else{ var next = current + 1; }

			if( current - 1 <= 0 ){ var prev = count; }
			else{ var prev = current - 1; }

			if( current - 2 == 0 ){ var newprev = count; }
			else if( current - 2 < 0 ){ var newprev = count-1; }
			else{ var newprev = current - 2; }


			$('.mycarousel#'+carousel).find('div.item[data-marker="'+newprev+'"]').css({
				'transition': 'none',
				'-webkit-transition': 'none',
				'transform': 'translateX(-100%)',
				'-webkit-transform': 'translateX(-100%)'
			});

			$('.mycarousel#'+carousel).find('div.item[data-marker="'+next+'"]').css({
				'transition': 'all 1s',
				'-webkit-transition': 'all 1s',
				'transform': 'translateX(500%)',
				'-webkit-transform': 'translateX(500%)'
			});

			setTimeout(function(){
				//Move prev--------------------------------------------------
					if( $(window).width()>=992 ){
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+prev+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(200%)',
							'-webkit-transform': 'translateX(200%)'
						});
					}
					else{
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+prev+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(0%)',
							'-webkit-transform': 'translateX(0%)'
						});
					}
				//Move prev--------------------------------------------------

				//Move current-----------------------------------------------
					if( $(window).width()>=992 ){
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+current+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(320%)',
							'-webkit-transform': 'translateX(320%)'
						});
					}
					else{
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+current+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(100%)',
							'-webkit-transform': 'translateX(100%)'
						});
					}
				//Move current-----------------------------------------------


				//Move next--------------------------------------------------
					if( $(window).width()>=992 ){
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+newprev+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(80%)',
							'-webkit-transform': 'translateX(80%)'
						});
					}
					else{
						$('.mycarousel#'+carousel).find('div.item[data-marker="'+newprev+'"]').css({
							'transition': 'all 1s',
							'-webkit-transition': 'all 1s',
							'transform': 'translateX(-100%)',
							'-webkit-transform': 'translateX(-100%)'
						});
					}
				//Move next--------------------------------------------------

				$('.mycarousel#'+carousel).find('div.item[data-marker="'+prev+'"]').removeClass('prev').addClass('active');
				$('.mycarousel#'+carousel).find('div.item[data-marker="'+current+'"]').removeClass('active').addClass('next');
				$('.mycarousel#'+carousel).find('div.item[data-marker="'+newprev+'"]').removeClass('next').addClass('prev');

				//Markers
				$('.mycarousel#'+carousel).find('div.marker').removeClass('active');
				$('.mycarousel#'+carousel).find('div.marker[data-marker="'+prev+'"]').addClass('active');

			},100);
			//Move current-----------------------------------------------

			$('.mycarousel#'+carousel).attr('data-current',prev);
		});
	//Carousel


	//Listen resize event
		window.onresize = function(event) { resizeVideo(); };
	//Listen resize event
});




function resizeVideo(){
	if( window.CURRENT_VIDEO_SOURCE=='vimeo' ){
	  	$.post('http://sunrise.ru.com/_cdn/video/iframe-responsive/about-video.php', {TYPE: 'VIMEO', ID:window.CURRENT_VIDEO_ID}, function(data){
			
			var eWidth = parseInt($('header').css('width') );
			var eHeight = eWidth / data.coef;

		    //Resize header video-------------------------
			$('header').css('height', eHeight+'px' );
		    $('header iframe').css('height', eHeight+'px' );
		    
		    //setTimeout(function(){ $('header iframe').attr( 'src', window.CURRENT_VIDEO_URL ); },777);
		    //Resize header video-------------------------
		},'json');
	} // vimeo adaptation---------------------------------------
	else if( window.CURRENT_VIDEO_SOURCE=='youtube' ){

		$.post('http://sunrise.ru.com/_cdn/video/iframe-responsive/about-video.php', {TYPE: 'YOUTUBE', ID:window.CURRENT_VIDEO_ID}, function(data){
			
			var eWidth = parseInt($('header').css('width') );
			var eHeight = eWidth / data.coef;

		    //Resize header video-------------------------
			$('header').css('height', eHeight+'px' );
		    $('header iframe').css('height', eHeight+'px' );
		    
		    //setTimeout(function(){ $('header iframe').attr( 'src', window.CURRENT_VIDEO_URL ); },777);
		    //Resize header video-------------------------
		},'json');

	} // youtube adaptation---------------------------------------
}// .resizeHeaderVideo