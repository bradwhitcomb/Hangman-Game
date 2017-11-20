	
	


	$(document).ready(function() {
		var wins = 0;
		var guessRemaining = 10;
		var splitWord = 0;
		var winner = [];

		$("#wordGenerator").on("click", function() {
			//document.onkeyup = function(event){
			//List of words for the game
			var wordList=["hiker","trail","mountain","valley","peak","shelter","bear"];

			//Randomly choose word from and split it
			var wordGenerator = 0;
			winner = [];
			wordGenerator=Math.floor(Math.random() * (wordList.length));
			var selectedWord=wordList[wordGenerator];
			splitWord=selectedWord.split("");
		

			//create missing letter table for the game 
			for(var letters = 0; letters<splitWord.length; letters++){

				var letterBtn = $("<buttons>");
				letterBtn.addClass("letter-button letter letter-button-color");
				letterBtn.attr("data-letter", splitWord[letters]);
				letterBtn.text(splitWord[letters]);
				$(".wordBox").append(letterBtn);

		}		
		
			
		
			})
     
		
			document.onkeyup = function(event){
			var userGuess = event.key;
			$("#letterGuess").append(userGuess);
			guessRemaining = guessRemaining - 1;
			$("#scoreboard1").text(guessRemaining);


			for(var letters = 0; letters<splitWord.length; letters ++){
				var gameLetter = splitWord[letters];

			
					if (userGuess === gameLetter){					
						winner.push(userGuess);
							
						
						if (winner.length === splitWord.length){
						wins = wins + 1;
						$("#scoreboard").text(wins);

				}
				}

					
			


			else {console.log("NO MATCH");}

		}		

		

		}


		

	 }) 
	