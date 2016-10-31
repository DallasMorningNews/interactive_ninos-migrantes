$(document).ready(function() {

	//custom scripting goes here

	$('.stories-btn').click(function() {
		$('.stories-nav-wrapper').fadeIn(600);
	});

	$('.close').click(function() {
		$('.stories-nav-wrapper').fadeOut(600);
	});

	// injecting current year into footer
	// DO NOT DELETE

	var d = new Date();
	var year = d.getFullYear();

	$('.copyright').text(year);


	// some code blocks require javascript to function, like slideshows, synopsis blocks, etc
	// you can find that code here: https://github.com/DallasMorningNews/generator-dmninteractives/wiki/Cookbook

});
