$(document).ready(function() {
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});


	//TYPEWRITE SCRIPT 
	$('#typewriteText').typewrite({
		actions: [
			{delay: 1000},
			{type: 'professional '},
			 {type: '<br>'},
			{type: 'website '},
			{type: '<br>'},
			{type: 'development'},
		],
		showCursor: false
	});	
});
