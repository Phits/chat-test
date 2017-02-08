(function($){
	'use strict';

	// declare actors here
    var $transOne = 250,
        $delayOne = 200,
        $delayTwo = 300,
        $delayThree = 500,
        $delayFour = 525,
        $delayFive = 600,
        $container = $('.container'),
        $transWrap = $('.trans-wrap'),
        $headerImg = $('header img'),
        $iconOne = $('.icon-one'),
        $iconTwo = $('.icon-two'),
        $greeting = $('.greeting'),
        $greetingP = $('.greeting p'),
        $question = $('.feed .message.question'),
        $circles = $('.circles'),
        $circle = $('.circle'),
        $circleOne = $('.circle-one'),
        $circleTwo = $('.circle-two'),
        $circleThree = $('.circle-three')
        ;

	// clear stage 
    function showContainer() {
   	    $container.css('display', 'block');
    }

    function showChat() {
    	$transWrap.animate({
		  	"top": "0",
		  	"opacity": "1"
		}, $transOne);

    	$headerImg.delay($delayOne).animate({
		  	"opacity": "1"
		  }, $transOne);
    }

    function messageOne() {
    	$iconOne.delay($delayTwo).animate({
		  	"opacity": "1",
		  	"height": "46",
		  	"width": "48",
		  	"padding": "0px 0px"
		}, $transOne);

		$greeting.delay($delayThree).animate({
		  	"opacity": "1",
		  	"width": "150px"
		}, $transOne);

		$greetingP.delay($delayFour).animate({
		  	"opacity": "1",
		  	"width": "150px"
		}, $transOne);

    }

    function question() {
    	$question.delay($delayFive).animate({
		  	"opacity": "1",
		  	"width": "95%"
		}, $transOne);

    }

    function questionInput() {
    	$('input').on('click focusin', function() {
		    this.value = '';
		});

		$( "input" ).keypress(function(e) {
		    if(e.which == 13) {
		        serverResponse();
		    }
		});
    }

    function serverResponse() {
    	var nIntervId;

    	$iconTwo.animate({
		  	"opacity": "1",
		  	"height": "46",
		  	"width": "48",
		  	"padding": "0px 0px"
		}, $transOne);

		$circles.delay($delayTwo).animate({
		  	"opacity": "1",
		  	"width": "60px"
		}, $transOne, function() {
			// console.log('loop');
            nIntervId = setInterval(circlesLoop, 250);
		});

		$circles.delay(3000).animate({
		  	"opacity": "0"
		}, $transOne, function() {
			clearInterval(nIntervId);
		});




    }

    function circlesLoop() {

		    $circleOne.delay(250).animate({
			  	"opacity": "0.5"
			}, $transOne, function() {

				$circleOne.animate({
				  	"opacity": "1"
				}, $transOne);

				$circleTwo.animate({
				  	"opacity": "0.5"
				}, $transOne, function() {
					$circleTwo.animate({
					  	"opacity": "1"
					}, $transOne);

					$circleThree.animate({
					  	"opacity": "0.5"
					}, $transOne, function() {
						$circleThree.animate({
						  	"opacity": "1"
						}, $transOne);
					});

				});
			});	

    }
 

	
	// the GO function ...to kick things all off
	function go() {
		// console.log('go ...');

		showContainer();
		showChat();
		messageOne();
        question(); 
        questionInput();



        // clearInterval(refreshIntervalId);

	}

	go();
	

})(jQuery);


