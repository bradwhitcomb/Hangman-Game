	console.log("is anybody home?");
	


	$(document).ready(function() {
		var wins = 0;
		var guessRemaining = 10;
		$("#scoreboard").append(wins);
		$("#scoreboard").append(guessRemaining);
		var splitWord = 0;
		var winner = [];
		$("#wordGenerator").on("click", function() {
			
			//List of words for the game
			var wordList=["hiker","trail","mountain","valley","peak","shelter","bear"];

			//Randomly choose word from and split it
			var wordGenerator = 0;
			winner = [];
			console.log("The winner list is "+ winner);
			wordGenerator=Math.floor(Math.random() * (wordList.length));
			var selectedWord=wordList[wordGenerator];
			splitWord=selectedWord.split("");
			console.log("Splitword is " + splitWord);
			//console.log(splitWord[1]);

			//create missing letter table for the game 
			for(var letters = 0; letters<splitWord.length; letters++){

				var letterBtn = $("<buttons>");
				letterBtn.addClass("letter-button letter letter-button-color");
				letterBtn.attr("data-letter", splitWord[letters]);
				letterBtn.text(splitWord[letters]);
				$(".wordBox").append(letterBtn);

				//var dash = "____ "
				//$("#hiddenLetters").append(dash);
				//console.log(letters);

				//console.log(splitWord);
		}
			
		

     })
			console.log("checking in");
			document.onkeyup = function(event){
			var userGuess = event.key;
			alert(userGuess);
			$("#letterGuess").append(userGuess);
			guessRemaining = guessRemaining - 1;
			console.log("user Guess is " + userGuess + "guessRemaining is "+guessRemaining);



			for(var letters = 0; letters<splitWord.length; letters ++){
				var gameLetter = splitWord[letters];
				console.log("game letter is " + gameLetter);
					if (userGuess === gameLetter){
						console.log("it's a match");
						winner.push(userGuess);
						console.log(winner);
					
						
						if (winner.length === splitWord.length){
						wins = wins + 1;
						console.log("WINS " + wins);

				}
				}

					
			


			else {console.log("NO MATCH");}

		}		

		

		}


		

	 }) 
	