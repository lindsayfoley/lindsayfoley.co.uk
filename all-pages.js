var ResponsiveHelper = {
	
	windowWidth : function() {	
		return $(window).width();
	},
	
	tabletWidth : 769,
	mobileWidth : 628,
	desktopWidth : 900,

	swapAnimatingScreenForStatic: function() {
		if(ResponsiveHelper.windowWidth() > ResponsiveHelper.desktopWidth) {
			return;
		}
		$('#animated-screen > div').empty().html('<img src="/images/skills_webdev.png" alt="my skills">');
	}
}

// Portfolio page toggle panel	
showJobDesciption = function() {
	$('.companies section').click(function() {
		$(this).children('div').toggleClass('overview-panel');
		// Stop clicks to portfolio links from toggling panel
		$('.overview-panel a').click(function(e) {
			e.stopPropagation();  
		});
	}); 
}

// About page sliding panel
var openSkillsPanel = function() {
	$('#skills-cta').click(function() {
		$('#skills-section').slideToggle('slow');
	});
};

$(document).ready(function() {
	ResponsiveHelper.swapAnimatingScreenForStatic();
	showJobDesciption();
	openSkillsPanel();
});

$(window).resize(function() {
	ResponsiveHelper.swapAnimatingScreenForStatic();
});