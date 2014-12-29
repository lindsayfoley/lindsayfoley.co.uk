var showSkillSection = function() {
	$('#skillsLink').click(function() {
		$('#skillsSection').slideToggle('slow', function() {
			if($('#skillsSection').is( ":visible" )) {
				$('#skillsLink').html('my skills &#9660;');
			} else {
				$('#skillsLink').html('my skills &#9658;');
			} 
		});
	});
};

var highlightProjectLink = function() {
	if(ResponsiveHelper.widthOfWindow() > ResponsiveHelper.tabletWidth) {
		$('#viewProjectLink').addClass('boxedLink nav_button');
		$('#skillsLink').addClass('boxedLink nav_button');
	}   
};

var ResponsiveHelper = {
	
	widthOfWindow : function() {	
		return $(window).width();
	},
	
	tabletWidth : 769,
	mobileWidth : 625,
	desktopWidth : 900,

	turnOffBoxedLinksHoverState : function() {
		if(ResponsiveHelper.widthOfWindow() > ResponsiveHelper.tabletWidth) {
			return;
		};
		
		$('#viewProjectLink').addClass('boxedLink nav_button highlight_links');
		$('#skillsLink').addClass('boxedLink nav_button highlight_links');
	},
	
	removeHightlightedlink : function() {
		if(ResponsiveHelper.widthOfWindow() < ResponsiveHelper.mobileWidth)  {
			$('#skillsLink').removeClass('highlight_links');
		};
	},
	
	swapAnimatingScreenForStaticImg : function() {
		if(ResponsiveHelper.widthOfWindow() > ResponsiveHelper.desktopWidth) {
			return;
		}
		
		var screenDiv = $('#skills_animated_screen div');
			
		$(screenDiv).empty();
		$(screenDiv).css('margin-top', '20px');
		$(screenDiv).html('<img src="/images/skills_webdev.png" />');
	},
	
	spotlightDivUpdater: function() {
		
		$('.companies').click(function() {
			$(this).find('details').toggle();									   
		});
	}
}

var MobileSocialIconsChanger  = {
	
	showMobileSocial: function() {
		
		if(ResponsiveHelper.widthOfWindow() > ResponsiveHelper.mobileWidth)  {
			return;
		}
		
		$('footer h5').html('SOCIAL <span>&#9658;</span>');
		
		$('footer h5').click(function() {
			$('#socialIcons').slideToggle('slow', function() {    
			
				if($('#socialIcons').is( ":visible" )) {
					$('footer h5 span').html('&#9660;');
				} else {
					$('footer h5 span').html('&#9658;');
				}
			});
		});
	}
}

var PortfolioCompanyTextDisplayer = {
	
	showCompanyDescriptionOnClick: function() {
		
		$('.companies').click(function() {
			$(this).find('.companyTitle').toggleClass('titleAnimation');
			$(this).find('.companyDescription').toggleClass('showDescription');
			
			if($(this).find('div').hasClass('titleAnimation')) {
				$(this).find('.companyTitle h4').hide();
			} 
		}); 
	}
}

$(document).ready(function() {
	showSkillSection();
	highlightProjectLink();
	ResponsiveHelper.turnOffBoxedLinksHoverState();
	ResponsiveHelper.removeHightlightedlink();
	ResponsiveHelper.swapAnimatingScreenForStaticImg();
	ResponsiveHelper.spotlightDivUpdater();
	MobileSocialIconsChanger.showMobileSocial();
	PortfolioCompanyTextDisplayer.showCompanyDescriptionOnClick();
});

$(window).resize(function() {
	highlightProjectLink();
	ResponsiveHelper.turnOffBoxedLinksHoverState();
	ResponsiveHelper.removeHightlightedlink();
	ResponsiveHelper.swapAnimatingScreenForStaticImg();
	ResponsiveHelper.spotlightDivUpdater();
});