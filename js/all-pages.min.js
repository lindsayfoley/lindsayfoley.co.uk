const pageDetails = {

	desktopBreakPoint: 900,
	
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
		$('#animated-screen > div').replaceWith('<img src="/images/skills_webdev.png" alt="my skills">');
	}
}

const showCompanyDesciption = () => {
		
	$('.companies section').click(function() {
		$(this).find('div').toggleClass('overview-panel');
		
		// Prevent clicks on portfolio links bubbling up
		$('.overview-panel a').click(function(e) {
			e.stopPropagation();  
		});
	}); 		
}

const slideDownSkillsPanel = () => {
	$('#skills-cta').click(function() {
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