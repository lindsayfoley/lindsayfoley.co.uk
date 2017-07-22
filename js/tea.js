var teaDrinkers = [];
	
var TeaRound = {
		
	registerAddButtonForClick: function() {
		$("#drinker-info > button:not(#remove)").click(function() {
			TeaRound.verifyNameIsValidAfterAddIsClicked($("textarea").val().toLowerCase());
		});
	},
	
	registerRemoveButtonForClick: function() {
		$("#remove").click(function() {
			TeaRound.removeNameIfInRound($("textarea").val().toLowerCase());
		});
	},
	
	registerResultButtonForClick: function() {
		$("#result button").click(function() {
			TeaRound.pickATeaMaker();
		});
	},	
	
	displayMessage: function(element, message, elemClass) {
		
		if(elemClass != "") {
			elemClass = "class='" + elemClass + "'";
		} 
				
		$(element + " > p").replaceWith("<p " + elemClass + ">" + message + "</p>");
	},
	
	resetNameField: function() {
		$("textarea").val("");
	},
	
	verifyNameIsValidAfterAddIsClicked: function(name) {
								
		if(name.length === 0) {
			TeaRound.displayMessage("#drinker-info", "Enter a name", "error");
		} 
		else {
			TeaRound.addNameIfNotInRound(name);		
			TeaRound.resetNameField();	
		}
	},
	
	addNameIfNotInRound: function(name) {
						
		for(var i = 0; i < teaDrinkers.length; i++) {
						
			if(teaDrinkers[i] === name) {
				TeaRound.displayMessage("#drinker-info", "Name already exists in round", "error");
				return;
			}
		}
		
		teaDrinkers.push(name);
		TeaRound.displayMessage("#drinker-info", teaDrinkers + " has been added!", "");
	},

	removeNameIfInRound: function(name) {
						
		if(name.length === 0 || teaDrinkers.length === 0) {
			TeaRound.displayMessage("#drinker-info", "Enter a name to remove", "error");
			return;
		}
				
		for(var i = 0; i < teaDrinkers.length; i++) {

			if(teaDrinkers[i] === name) {
				teaDrinkers.splice(i, 1);
				TeaRound.displayMessage("#drinker-info", name + " has been deleted. The round consists of " + teaDrinkers, "");
			} else {
				TeaRound.displayMessage("#drinker-info", name +  " isn't in this round!", "error");
			}
		}

		TeaRound.resetNameField();
	},
	
	pickATeaMaker: function() {
		
		var randomValue = Math.floor((Math.random() * teaDrinkers.length) + 1);

		if(teaDrinkers.length === 0) {
			TeaRound.displayMessage("#result", "Enter name(s) above in the tea round field", "error");
		} else {
			TeaRound.displayMessage("#result", teaDrinkers[randomValue - 1] + " should make the next round!", "");
			TeaRound.resetTeaArrayAfterPersonSelected();
		}
	},
	
	resetTeaArrayAfterPersonSelected: function() {
		teaDrinkers = [];
		TeaRound.displayMessage("#drinker-info", "", "");
	},
	
	run: function() {
		TeaRound.registerAddButtonForClick();
		TeaRound.registerRemoveButtonForClick();
		TeaRound.registerResultButtonForClick();
	}
};

TeaRound.run();
