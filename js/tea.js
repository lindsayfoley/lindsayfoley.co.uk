var teaDrinkers = [];
	
var TeaRound = {
		
	registerAddButtonForClick: function() {
		$("section > button:not(#remove)").click(function() {
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
	
	displayMessage: function(message, elemClass) {
		
		if(elemClass != "") {
			elemClass = "class='" + elemClass + "'";
		} 
		
		$("section > p").replaceWith("<p " + elemClass + ">" + message + "</p>");
	},
	
	displayResult: function(message, elemClass) {
		
		if(elemClass != "") {
			elemClass = "class='" + elemClass + "'";
		} 
		
		$("#result > p").replaceWith("<p " + elemClass + ">" + message + "</p>");	
	},
	
	resetNameField: function() {
		$("textarea").val("");
	},
	
	verifyNameIsValidAfterAddIsClicked: function(name) {
								
		if(name.length === 0) {
			TeaRound.displayMessage("Enter a name", "error");
		} 
		else {
			TeaRound.addNameIfNotInRound(name);		
			TeaRound.resetNameField();	
		}
	},
	
	addNameIfNotInRound: function(name) {
						
		for(var i = 0; i < teaDrinkers.length; i++) {
						
			if(teaDrinkers[i] === name) {
				TeaRound.displayMessage("Name already exists in round", "error");
				return;
			}
		}
		
		teaDrinkers.push(name);
		$("section > p").text(teaDrinkers + " has been added!").removeClass();
	},

	removeNameIfInRound: function(name) {
						
		if(name.length === 0 || teaDrinkers.length === 0) {
			TeaRound.displayMessage("Enter a name to remove", "error");
			return;
		}
				
		for(var i = 0; i < teaDrinkers.length; i++) {

			if(teaDrinkers[i] === name) {
				teaDrinkers.splice(i, 1);
				TeaRound.displayMessage(name + " has been deleted. The round consists of " + teaDrinkers, "");
			} else {
				TeaRound.displayMessage(name +  " isn't in this round!", "error");
			}
		}

		TeaRound.resetNameField();
	},
	
	pickATeaMaker: function() {
		
		var randomValue = Math.floor((Math.random() * teaDrinkers.length) + 1);

		if(teaDrinkers.length === 0) {
			TeaRound.displayResult("Enter name(s) above in the tea round field", "error");
		} else {
			TeaRound.displayResult(teaDrinkers[randomValue - 1] + " should make the next round!", "");
			TeaRound.resetTeaArrayAfterPersonSelected();
		}
	},
	
	resetTeaArrayAfterPersonSelected: function() {
		teaDrinkers = [];
		TeaRound.displayMessage("", "");
	},
	
	run: function() {
		TeaRound.registerAddButtonForClick();
		TeaRound.registerRemoveButtonForClick();
		TeaRound.registerResultButtonForClick();
	}
};

TeaRound.run();
