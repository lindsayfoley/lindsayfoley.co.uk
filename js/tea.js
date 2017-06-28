var teaDrinkers = [];
	
var TeaRound = {
	
	nameEntered: null,
	
	addPersonToRound: function() {
		
		TeaRound.nameEntered = $('textarea').val();

		if(TeaRound.nameEntered.length === 0) {
			$('section > p').replaceWith("<p class='error'>You need to enter a name above.</p>");
		} 
		else {			
			teaDrinkers.push(TeaRound.nameEntered);
			$('textarea').val('');
			$('section > p').text(teaDrinkers + ' has been added!').removeClass();
		}

	},
	
	registerAddButtonForClick: function() {
		$('section > button:not(#remove)').click(function() {
			TeaRound.addPersonToRound();
		});
	},
	
	registerRemoveButtonForClick: function() {
	
		$('#remove').click(function() {
			TeaRound.removeNameFromRound();
		});
	},

	removeNameFromRound: function() {
		
		TeaRound.nameEntered = $('textarea').val();
		var indexToRemove = teaDrinkers.indexOf(TeaRound.nameEntered);
		
		if(indexToRemove != -1) {
			teaDrinkers.splice(indexToRemove, 1);
			$('section > p').text(TeaRound.nameEntered + ' has been deleted. The round consists of ' + teaDrinkers).removeClass();
		} else {
			$('section > p').replaceWith("<p class='error'>" + TeaRound.nameEntered +  " isn't in this round!</p>");
		}
	},
	
	selectNextPersonToMakeTea: function() {
		
		var randomPerson = Math.floor((Math.random() * teaDrinkers.length) + 1);

		if(teaDrinkers.length === 0) {
			$('#result p').replaceWith("<p class='error'>You need to enter name(s) above in the tea round.</p>");
		} else {
			$('#result p').replaceWith("<p>" + teaDrinkers[randomPerson - 1] + " has been chosen to make the next round!</p>");	
		}
	},
	
	registerResultButtonForClick: function() {
		$('#result button').click(function() {
			TeaRound.selectNextPersonToMakeTea();
		});
	}	
};

TeaRound.registerAddButtonForClick();
TeaRound.registerRemoveButtonForClick();
TeaRound.registerResultButtonForClick();