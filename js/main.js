(function($){
	'use strict';

	// declare actors here
    var $transOne = 250,
        $delayOne = 200,
        $delayTwo = 300,
        $delayThree = 500,
        $delayFour = 525,
        $container = $('.container'),
        $transWrap = $('.trans-wrap'),
        $headerImg = $('header img'),
        $iconOne = $('.icon-one'),
        $greeting = $('.greeting'),
        $greetingP = $('.greeting p')
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
	
	// the GO function ...to kick things all off
	function go() {
		console.log('go ...');

		showContainer();
		showChat();
		messageOne();
	}

	go();
	

})(jQuery);


