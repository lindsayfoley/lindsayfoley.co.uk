const pageDetails = {

	desktopBreakPoint: 813,
	
	windowWidth() {
		return $(window).width();
	},
		
	currentPage() {
		const pageName = window.location.pathname;
		return window.location.pathname.slice(1, pageName.length);
	}
}

const removeCssAnimationOnSmallScreens = width => {

	if(width < pageDetails.desktopBreakPoint ) {
		$('#animated-screen > div').replaceWith('<img src="/dist/images/skills_webdev.png" alt="my skills">');
	}
}

const showCompanyDesciption = () => {
		
	$('.companies section').click(function() {
		$(this).toggleClass('show-details');
		
		// Prevent clicks on portfolio links bubbling up
		$('.description a').click(function(e) {
			e.stopPropagation();  
		});
	}); 		
}

const slideDownSkillsPanel = () => {
	$('#skills-cta button').click(function() {
		$('#skills-section').slideToggle('slow');
	});
};


$(document).ready(function() {

	if(pageDetails.currentPage() === 'about') {
		slideDownSkillsPanel();
		removeCssAnimationOnSmallScreens(pageDetails.windowWidth());
	} else if(pageDetails.currentPage() === 'portfolio') {
		showCompanyDesciption();
	}
});

$(window).resize(function() {
	
	if(pageDetails.currentPage() === 'about') {
		removeCssAnimationOnSmallScreens(pageDetails.windowWidth());
	}	
});