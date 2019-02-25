//------------------INIT------------INIT---------------INIT-------------------------------
//--------------------------------------true or false game-----------------------------------------
//create array of questions and answers
var myQuestions = [
{
	q:"valueOf() method does what?",
	a:"returns the primitive value of a string"
},
{
	q:"substring() does what?",
	a:"extracts characters from a string between two specified #'s and returns it as a new string."
},
{
	q:"split() method does what?",
	a:"splits a string into an array of substring and returns the new array"
},
{
	q:"slice() method does what?",
	a:"extracts a part of a string and returns the extracted part in a new string"
},
{
	q:"indexOf() method does what?",
	a:"returns the position of the first found occurrence of a specified value in a string"
},
{
	q:"concat() method does what?",
	a:"joins 2 or more strings then returns a copy."
},
{
	q:"what is an array?",
	a:"an object used to store multiple values in a single variable."
},
{
	q:"pop() does what?",
	a:"removes the last element of an array and returns it [alters original]"
},
{
	q:"unshift() method does what?",
	a:"adds new elements to the beginning of an array and returns new length"
},
{
	q:"push() method does what?",
	a:"adds new elements to an array [alters original]"
},
{
	q:"shift() method does what?",
	a:"removes the first elements in an array and returns it [alters original]"
},
{
	q:"parseInt() does what?",
	a:"gets a number from a string [not part of the math object]"
},
{
	q:"what does ceil() method do?",
	a:"rounds a number upwards to the nearest interger and returns the result"
},
{
	q:"what does floor() method do?",
	a:"rounds a number to down to the nearest interger"
},
{
		q: "When a click event fires on a <p> element; hide the current <p> element",
		a: "$('xxx').focus(function(){$xxx;;}"
	},
	{
		q: "The function is executed when the form field gets focus",
		a: "$('p').click(function(){ $(this).hide();}"
	},	
	{
		q: "When a click event fires on a <p> element; hide the current <p> element",
		a: "$('xxx').focus(function(){$xxx;}"
	},
	{
		q: "The function is executed when the form field loses focus:",
		a: "$('xxx').blur(function(){$xxx;}"
	},	
	{
		q: "When a double click event fires on a <p> element; hide the current <p> element",
		a: "$('p').dblclick(function(){$(this).hide();});"
	},		
	{
		q: "An alert saying 'enter' is executed when the mouse pointer enters the HTML element",
		a: "$('xxx').mouseenter(function(){alert('enter');});"
	},	
	{
		q: "An alert saying 'Mouse up over' is executed, when the left mouse button is released, while the mouse is over the HTML element",
		a: "$('xxx').mouseup(function(){alert('Mouse up over');});"
	},
	{
		q: "On Click, hide 'p' elements in 1000 milliseconds",
		a: "$('xxx').click(function(){$('p').hide(1000);});"
	},	
	{
		q: "On Click, show 'p' elements in 1000 milliseconds",
		a: "$('xxx').click(function(){$('p').show(1000);});"
	},		
	{
		q: "On Click, toggle visibility of 'p' elements",
		a: "$('xxx').click(function(){$('p').toggle();});"
	},	
	{
		q: "On click, fade in 'p' elements, slowly.",
		a: "$('xxx').click(function(){$('p').fadeIn('slow')});"
	},		
	{
		q: "When the 'button' element, run a function that hides the 'p' element slowly and has a callback function that is an alert that says 'hidden'.",
		a: "$('button').click(function(){$('p').hide('slow', function(){alert('hidden');});"
	},
	{
		q: "When the 'button' element is clicked run a function chaining 3 actions: First change text color to red. Second, make element slide up in 2000 ms. Third, make the element slide down in 2000 ms.",
		a: "$('button').click(function(){$('p').css('color', 'red').slideUp(2000).slideDown(2000);});"
	},	
	{
		q: "When the 'button' element is clicked run a function that is an alert saying whatever text is in an element with the id of 'xxx'",
		a: "$('button').click(function(){alert($('#xxx').text());});"
	},	
	{
		q: "Append some text saying 'xxx' to a 'p' element",
		a: "$('p').prepend('xxx')"
	},		
	{
		q: "Remove an element with an id of 'xxx'",
		a: "$('#xxx').remove();"
	},	
	{
		q: "Remove child elements of an parent element with an id of 'xxx'",
		a: "$('#xxx').empty();"
	},	
	{
		q: "Remove all <p> elements with class='test':",
		a: "$('p').remove('.test');"
	},		
	{
		q: "Removes all <p> elements with class='test' and class='demo'",
		a: "('p').remove('.test, .demo');"
	},								
	{
		q: "When the 'button' element is clicked remove a css class of 'blue' to the 'p' element",
		a: "$('button').click(function(){$('p').removeClass('blue');});"
	},		
	{
		q: "When the 'button' element is clicked set the background-color css value for 'p' elements to 'yellow'",
		a: "$('button').click(function(){$('p').css('background-color', 'yellow');});"
	},	
	{
		q: "When the 'button' element is clicked set the background-color css value for 'p' elements to 'yellow' and the font-size css value to '200%'",
		a: "$('button').click(function(){$('p').css({'background-color': 'yellow', 'font-size': '200%'});});"
	}];

//-----------------------shuffle function----------------------------------------------------------------
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};	
//shuffle array for question and answer

var answer = 0;
var guesses = 0;
var gameAnswer = 0
var correct = 0;
var questions = 0;

//pick question function shuffles guesses and assigns questions and answers to buttons

function pickQuestion(){

	var question =  myQuestions[5].q;
	answer =  myQuestions[5].a;
	guesses = [myQuestions[7].a, myQuestions[8].a, myQuestions[9].a, myQuestions[5].a];
	shuffle(guesses);
	alert(question);
	$("#li1 span").text(" " + guesses[0]);
	$("#li2 span").text(" " + guesses[1]);
	$("#li3 span").text(" " + guesses[2]);
	$("#li4 span").text(" " + guesses[3]);

};	

//shuffle pick shuffles all of the questions before running the pick questions app and incrementing the step counter variable

function shufflePick(){
	questions++;
	shuffle(myQuestions);
	pickQuestion();
};
//
//-------------------------------------check answer function-------------------------------------------------------------------------
//returns a 1 if the player answer correct and 2 if player answers incorrect

function checkAnswer(){
	if (answer === playerPick){			
		correct++;
		gameAnswer++;
		console.log("game answer=" + gameAnswer);	alert("you guessed correct");
	} else {		
		gameAnswer+=2;
		console.log("game answer=" + gameAnswer);	alert("you guessed wrong");
	};
};

//---------------------------------functions for switching videos---------------------------------
//these functions are used to toggle the display property on the videos on the page
function vidOn(vid1){
	$(vid1).toggleClass("display");	
}

function vidOff(vid1){
	$(vid1).addClass("display");	
}

function vidSwitch(vid1, vid2){
	$(vid1).addClass("display");
	$(vid2).toggleClass("display");
};

//----------------------------drop functions for moving through events-------------------
//drop functions allow the player to move along different paths in the array depending on their score and track
function dropOne(pos){
	pos.shift();
};

function dropTwo(pos){
	pos.splice(0, 2);
};

function dropThree(pos){
	pos.splice(0, 3);
};

function dropFour(pos){
	pos.splice(0, 4);
};

function dropFive(pos){
	pos.splice(0, 5);
};
//--------------------------------------------button event listeners

$("#li1 button").on("click", function(){
	playerPick = guesses[0];
	$(this).toggleClass ("completed");
	vidOff("#li2");
	vidOff("#li3");
	vidOff("#li4");
	checkAnswer();
	$("#aDisplay").text(correct);
	$("#qDisplay").text(questions);		
	gameLogic();
});
$("#li2 button").on("click", function(){
	playerPick = guesses[1];
	$(this).toggleClass ("completed");
	vidOff("#li1");
	vidOff("#li3");
	vidOff("#li4");	
	checkAnswer();
	$("#aDisplay").text(correct);
	$("#qDisplay").text(questions);		
	gameLogic();

});
$("#li3 button").on("click", function(){
	playerPick = guesses[2];
	$(this).toggleClass ("completed");
	vidOff("#li1");
	vidOff("#li2");
	vidOff("#li4");		
	checkAnswer();
	$("#aDisplay").text(correct);
	$("#qDisplay").text(questions);		
	gameLogic();

});
$("#li4 button").on("click", function(){
	playerPick = guesses[3];
	$(this).toggleClass ("completed");
	vidOff("#li1");
	vidOff("#li2");
	vidOff("#li3");		
	checkAnswer();	
	$("#aDisplay").text(correct);
	$("#qDisplay").text(questions);	
	gameLogic();

});




//----------------------------------------next button for resetting answer check function and refreshing new questions--------------------------
//primary functionality of the game. The next button gives a player new trivia questions and resets the display property on the buttons

$("#next").on("click", function(){
	gameAnswer = 0;
	shufflePick();
	vidOff(".choices");
	vidOn(".choices");
	
	$("button").removeClass ("completed");	
});

vidOff("#next");

//------------------------------------start button initializes the game-------------------------------------
$("#start").on("click", function(){
		alert("Welcome to the Javascript masters!! Control Tiger Woods front 9 at Augusta by answering some tricky Javascript trivia!!");
		vidOff("#head");
		vidOn("#scoreKeep");		
		vidOn("#next");		
		shufflePick();
		vidOff("#start");
});



//-------------------------game logic function-------------------------
//---------------------------all my hole tracks------------------------

var currentStep = 0;

function gameLogic(){
if (currentStep === 0){
	vidOn("#1hole");
	vidOn("#18-1-1");	
	firstShot[0].job();
} else if (currentStep === 1){
	_Hole_1[0].job();
} else if (currentStep === 2){
	_Hole_2[0].job();
} else if (currentStep === 3){	
	firstShot_3[0].job();
} else if (currentStep === 4){
	_Hole_3[0].job();
} else if (currentStep === 5){
	_4Decider[0].job();
} else if (currentStep === 6){
	_Hole_4[0].job();	
} else if (currentStep === 7){
	_5Decider[0].job();
} else if (currentStep === 8){
	_Hole_5[0].job();
} else if (currentStep === 9){		
	_6Decider[0].job();
} else if (currentStep === 10){
	_Hole_6[0].job();
} else if (currentStep === 11){
	_7Decider[0].job();
} else if (currentStep === 12){
	_Hole_7[0].job();	
} else if (currentStep === 13){		
	_8Decider[0].job();	
} else if (currentStep === 14){
	_Hole_8[0].job();
} else if (currentStep === 15){		
	_9Decider[0].job();
} else if (currentStep === 16){
	_Hole_9[0].job();
} else if (currentStep === 17){
	_GameOver[0].job();								
} else {
	console.log("error in game logic");
}
};


//arrays of hole options


//the first shot is a mulligan and does not effect the players trajectory
var firstShot = [{

	job: function(){
		currentStep++;		
		if(correct === 1){
			dropOne(_Hole_1);
		} else if (correct === 0){			
		} else {
			console.log("first shot messed up")
		}
	}
}];
// based on your answer to the second question you are placed on a specific track in the hole one array
var _Hole_1 = [{
	job: function(){
		vidSwitch("#18-1-1", "#97-1-2");
		console.log("connected");
		dropTwo(_Hole_1);
	}

},
{
	job: function(){
		vidSwitch("#18-1-1", "#18-1-2");
		dropTwo(_Hole_1);
	}
},

{
	job: function(){
		vidSwitch("#97-1-2", "#97-1-3");
		dropTwo(_Hole_1);
	}
},
{
	job: function(){
		currentStep++;
		vidSwitch("#18-1-2", "#18-1-3_4");
		alert("you made a par!!!")
		$("#1score span").append("4");		
	}
},
{
	job: function(){
		currentStep++;				
		vidSwitch("#97-1-3", "#97-1-4_5");
		alert("you made a bogey!!!")
		$("#1score span").append("5");
		$("#1score").css("color", "blue");			
		dropOne(_Hole_2);
			
	}
}];

//position in hole 2 array is decided by last shot on hole 1
var _Hole_2 = [

{
	job: function(){
		vidSwitch("#1hole", "#2hole");
		vidSwitch("#18-1-3_4", "#06-2-1");
		dropTwo(_Hole_2);
	}
},
{
	job: function(){
		vidSwitch("#1hole", "#2hole");	
		vidSwitch("#97-1-4_5", "#18-2-1");
		dropTwo(_Hole_2);
	}
},
{
	job: function(){
		vidSwitch("#06-2-1", "#06-2-2");
		dropTwo(_Hole_2);
	}
},

{
	job: function(){
		vidSwitch("#18-2-1", "#18-2-2");
		dropTwo(_Hole_2);
	}
},



{
	job: function(){
		currentStep++;
		vidSwitch("#06-2-2", "#06-2-3_4");
		alert("you made a birdie!!!")
		$("#2score").text("4");
		$("#2score").css("color", "red");			
	}
},


{
	job: function(){
		currentStep++;
		vidSwitch("#18-2-2", "#18-2-3_4");
		alert("you made a birdie!!")
		$("#2score").text("4");
		$("#2score").css("color", "red");				
	}
}];

//three has a decider function that puts lets you make a birdie if you have answered more then 6 questions correctly
var firstShot_3 = [{
	job: function(){	
		currentStep++;
		vidSwitch("#2hole", "#3hole");
		vidOff("#18-2-3_4");		
		vidOff("#06-2-3_4");	
		vidOn("#06-3-1");			
		if(correct >= 6){
			dropOne(_Hole_3);
		} else if (correct < 6){				
		} else {
			console.log("first shot third hole messed up")
		}
	}
}];


var _Hole_3 = [{

	job: function(){
		vidSwitch("#06-3-1", "#05-3-2");		
		dropTwo(_Hole_3);
	}
},
{
	job: function(){
		vidSwitch("#06-3-1", "#11-3-2");		
		dropTwo(_Hole_3);
	}
},
{

	job: function(){
		currentStep++;
		vidSwitch("#05-3-2", "#05-3-3_4");
		alert("you made a par!!");
		$("#3score").text("4");		

	}
},

{
	job: function(){
		currentStep++;
		vidSwitch("#11-3-2", "#11-3-3");
		alert("you made a birdie!!");
		$("#3score").text("3");	
		$("#3score").css("color", "red");					
	}

}];

//hole 4 decider works the same way
var _4Decider = [{
	job: function(){
		currentStep++;	
		vidSwitch("#3hole", "#4hole");
		vidOff("#05-3-3_4");		
		vidOff("#11-3-3");	
		if(correct >= 7){
			vidOn("#18-4-1");		
			dropOne(_Hole_4);
		} else if (correct < 7){				
			vidOn("#06-4-1");				
		} else {
			console.log("first shot third hole messed up");
		}		
	}
}];


var _Hole_4 = [{
	job: function(){
		vidSwitch("#06-4-1", "#06-4-2_3");
		alert("you made a par!!");
		$("#4score").text("3");					
		currentStep++;			
	}


},
{

	job: function(){
		vidSwitch("#18-4-1", "#18-4-2");
		alert("you made a birdie!!");	
		$("#4score").text("2");	
		$("#4score").css("color", "red");						
		currentStep++;
	}

}];


var _5Decider = [{
	job: function(){
		currentStep++;
		vidSwitch("#4hole", "#5hole");		
		vidOff("#18-4-2");		
		vidOff("#06-4-2_3");
		if(correct >= 8){	
			vidOn("#18-5-1");		
			dropOne(_Hole_5);
		} else if (correct < 8){				
			vidOn("#05-5-1");				
		} else {
			console.log("first shot fifth hole messed up");
		}		
	}
}];


var _Hole_5 = [{
	job: function(){
		vidSwitch("#05-5-1", "#05-5-2");
		dropTwo(_Hole_5);
	}
},
{
	job: function(){
		vidSwitch("#18-5-1", "#18-5-2");
		dropTwo(_Hole_5);
	}	
},
{
	job: function(){
		currentStep++;
		vidSwitch("#05-5-2", "#05-5-3_4_5");
		alert("you made a bogey!!");
		$("#5score").text("5");
		$("#5score").css("color", "blue");				
	}	

},
{

	job: function(){
		currentStep++;
		vidSwitch("#18-5-2", "#18-5-3_4");
		alert("you made a par!!");
		$("#5score").text("4");				
	}	


}];

var _6Decider = [{
	job: function(){
		currentStep++;
		vidSwitch("#5hole", "#6hole");
		vidOff("#18-5-3_4");		
		vidOff("#05-5-3_4_5");
		if(correct >= 13){	
			vidOn("#11-6-1");		
			dropTwo(_Hole_6);
		} else if (correct >= 10 && correct < 13){				
			vidOn("#18-6-1");
			dropOne(_Hole_6);
		} else if (correct < 10){				
			vidOn("#06-6-1");								
		} else {
			console.log("sixth hole decider messed up");
		}		
	}
}];

var _Hole_6 = [{

	job: function(){
		currentStep++;
		vidSwitch("#06-6-1", "#06-6-2_3_4");
		alert("you made a bogey!!");
		$("#6score").text("4");	
		$("#6score").css("color", "blue");			

	}	

},
{
	job: function(){
		currentStep++;
		vidSwitch("#18-6-1", "#18-6-2_3");
		alert("you made a par!!");
		$("#6score").text("3");				
	}	


},
{

	job: function(){
		currentStep++;
		vidSwitch("#11-6-1", "#11-6-2");
		alert("you made a birdie!!");
		$("#6score").text("2");	
		$("#6score").css("color", "red");					
	}	

}];

//hole 7 decider is the coolest piece of game logic. It has 5 potential video sequences depending on the player score!
var _7Decider = [{

	job: function(){
		currentStep++;
		vidSwitch("#6hole", "#7hole");		
		vidOff("#11-6-2");		
		vidOff("#18-6-2_3");
		vidOff("#06-6-2_3_4");
		if(correct >= 16){	
			vidOn("#05-7-1");		
		} else if (correct < 16 && correct >= 14){				
			vidOn("#18-7-1");
			dropOne(_Hole_7);
		} else if (correct < 14 && correct >= 12){				
			vidOn("#18-7-1");
			dropTwo(_Hole_7);
		} else if (correct < 12 && correct >= 10){				
			vidOn("#05-7-1");
			dropThree(_Hole_7);						
		} else if (correct < 10){				
			vidOn("#05-7-1");
			dropFour(_Hole_7);								
		} else {
			console.log("seventh hole decider messed up");
		}		
	}
}];


var _Hole_7 = [{

	job: function(){
		vidSwitch("#05-7-1", "#11-7-2");
		dropFive(_Hole_7);
	}

},
{
	job: function(){
		vidSwitch("#18-7-1", "#18-7-2");
		dropFive(_Hole_7);
	}	
},
{
	job: function(){
		vidSwitch("#18-7-1", "#18-7-2");
		dropFive(_Hole_7);
	}		
},
{
	job: function(){
		vidSwitch("#05-7-1", "#11-7-2");
		dropFive(_Hole_7);
	}	
},
{
	job: function(){
		vidSwitch("#05-7-1", "#11-7-2");
		dropFive(_Hole_7);
	}
},
{
	job: function(){
		currentStep++;
		vidSwitch("#11-7-2", "#11-7-3");
		alert("you made a birdie!!");
		$("#7score").text("3");
		$("#7score").css("color", "red");						
	}

},
{
	job: function(){
		currentStep++;
		vidSwitch("#18-7-2", "#11-7-3");
		alert("you made a birdie!!");
		$("#7score").text("3");		
		$("#7score").css("color", "red");				
	}	
},
{
	job: function(){
		currentStep++;
		vidSwitch("#18-7-2", "#11-7-3");
		alert("you made a birdie!!");
		$("#7score").text("3");	
		$("#7score").css("color", "red");							
	}		
},
{
	job: function(){
		currentStep++;
		vidSwitch("#11-7-2", "#18-7-3_4_5");
		alert("you made a bogey!!");
		$("#7score").text("5");
		$("#7score").css("color", "blue");								
	}		
},
{
	job: function(){
		currentStep++;
		vidSwitch("#11-7-2", "#18-7-3_4_5");
		alert("you made a bogey!!");
		$("#7score").text("5");	
		$("#7score").css("color", "blue");							
	}		
},
{
	job: function(){
		currentStep++;
		vidSwitch("#05-7-2", "#05-7-3_4");
		alert("you made a par!!");
		$("#7score").text("4");				
	}	
}];


var _8Decider = [{
	job: function(){
		currentStep++;
		vidSwitch("#7hole", "#8hole");		
		vidOff("#11-7-3");		
		vidOff("#18-7-3_4_5");
		vidOff("#05-7-3_4");
		vidOn("#11-8-1");
		if(correct >= 16){		
			dropTwo(_Hole_8);		
		} else if (correct < 16 && correct >= 14){				
			dropOne(_Hole_8);		
		} else if (correct < 14){				
} else { console.log("something messed up in 8 decider")
	}
}
}];



var _Hole_8 = [{
	job: function(){
		vidSwitch("#11-8-1", "#97-8-2");
		dropThree(_Hole_8);	
}
},
{
	job: function(){
		vidSwitch("#11-8-1", "#11-8-2");
		dropThree(_Hole_8);		
}
},
{
	job: function(){
		vidSwitch("#11-8-1", "#11-8-2");
		dropThree(_Hole_8);		
	}
},
{
	job: function(){
		vidSwitch("#97-8-2", "#97-8-3");
		dropThree(_Hole_8);			
}
},
{
	job:function(){
		currentStep++;
		vidSwitch("#05-7-2", "#06-8-3_4");
		alert("you made a birdie!!");
		$("#8score").text("4");
		$("#8score").css("color", "red");					
	}

},
{
	job:function(){
		currentStep++;
		vidSwitch("#11-8-2", "#11-8-3");
		alert("you made an eagle!!");
		$("#8score").text("3");	
		$("#8score").css("color", "red");				
	}	
},
{
	job:function(){
		currentStep++;
		vidSwitch("#97-8-3", "#97-8-4");
		alert("you made a birdie!!");
		$("#8score").text("4");	
		$("#8score").css("color", "red");				
	}	
}];


var _9Decider = [{
	job: function(){
		currentStep++;
		vidSwitch("#8hole", "#9hole");		
		vidOff("#97-8-4");		
		vidOff("#11-8-3");
		vidOff("#06-8-3_4");
		if(correct >= 19){	
		vidOn("#11-9-1");		
		} else if (correct < 19){				
			dropOne(_Hole_9);
			vidOn("#05-9-1");	
		} else { 
			console.log("something messed up in 9 decider");
	}
}
}];


var _Hole_9 = [
{
	job: function(){
		vidSwitch("#11-9-1", "#11-9-2");
		dropTwo(_Hole_9);		
}
},
{
	job: function(){
		vidSwitch("#05-9-1", "#06-9-2");
		dropTwo(_Hole_9);	
}
},
{
	job: function(){
		vidSwitch("#11-9-2", "#11-9-3");
		dropTwo(_Hole_9);	
}
},
{
	job:function(){
		currentStep++;
		vidSwitch("#06-9-2", "#06-9-3_4");
		alert("you made a par!!");
		$("#9score").text("4");			
	}		
},
{
	job:function(){
		currentStep++;
		vidSwitch("#11-9-3", "#11-9-4");
		alert("you made a par!!");
		$("#9score").text("4");			
	}		
}];


var _GameOver = [{
	job: function(){
		alert("You won the game!!");
	}
}];


