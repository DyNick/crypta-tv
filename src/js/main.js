$(document).ready(function() {
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('.nav').toggleClass('active-nav');
	});


	//TYPEWRITE SCRIPT
	$('#typewriteText').typewrite({
		actions: [
			{delay: 500},
			{type: 'Crypta '},
			 {type: '<br>'},
			{type: 'TV '},
			{type: '<br>'},
			{type: 'Education'},
		],
		showCursor: false
	});
});
