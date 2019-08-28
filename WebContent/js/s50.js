/**
 * s50.js
 * 
 * Slide 50
 */
$(function() {
    $('#colorOn').click(function() {
        $('#msg1').addClass('red');
    });

    $('#colorOff').click(function() {
        $('#msg1').removeClass('red');
    });

    $('#swapColor').click(function() {
        $('#msg2').toggleClass('red');
	    });
	$('#pulsantered').click(function() {
		let cur = $('#msg3');
		cur.removeClass('yellow');
		cur.addClass('red');
	});

	$('#pulsanteyellow').click(function() {
		let cur = $('#msg3');

		cur.removeClass('red');
		cur.addClass('yellow');
	});

	$('swap3').click(function() {
		let cur = $('msg3');
		if (cur.hasClass('red')) {
			cur.removeClass('red');
			cur.addClass('yellow');
		} else if (cur.hasClass('yellow')) {
			cur.removeClass('yellow');

		} else {
			cur.addClass('red');
		}
	});
});
