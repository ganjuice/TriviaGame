//GLOBAL VARIABLES
//=================================================================================
var time = 60
var totalCorrect = 0;
var totalWrong = 0;
var totalUnanswered = 0;
var response1
var response2 
var response3 
var response4 
var response5 

//FUNCTIONS (blocks of code I will call upon when needed)
//==================================================================================

function shotclock(){if (time>0) {
	time--;
	$("#timeLeft").html(time + " Seconds")
	}
}

function record(){
	response1 = $('input:radio[name="q1"]:checked').val();
	response2 = $('input:radio[name="q2"]:checked').val();
	response3 = $('input:radio[name="q3"]:checked').val();
	response4 = $('input:radio[name="q4"]:checked').val();
	response5 = $('input:radio[name="q5"]:checked').val();
}
function check(){
	if(response1 == undefined){
		totalUnanswered++;
	}
	else if (response1 == "right"){
		totalCorrect++;
	}
	else{
		totalWrong++;
	}

	if(response2 == undefined){
		totalUnanswered++;
	}
	else if (response2 == "right"){
		totalCorrect++;
	}
	else{
		totalWrong++;
	}

	if(response3 == undefined){
		totalUnanswered++;
	}
	else if (response3 == "right"){
		totalCorrect++;
	}
	else{
		totalWrong++;
	}

	if(response4 == undefined){
		totalUnanswered++;
	}
	else if (response4 == "right"){
		totalCorrect++;
	}
	else{
		totalWrong++;
	}

	if(response5 == undefined){
		totalUnanswered++;
	}
	else if (response5 == "right"){
		totalCorrect++;
	}
	else{
		totalWrong++;
	}
}
function grade(){
	$("#numberCorrect").html(totalCorrect)
	$("#numberIncorrect").html(totalWrong)
	$("#numberUnanswered").html(totalUnanswered)
}
//MAIN PROCESS
//====================================================================================================

$(document).ready(function(){
	$("form").hide();
	$("#scoreBoard").hide();
});

$("#startButton").click(function(){
	$("#startButton").hide();
	$("form").show();
	setInterval(shotclock,1000)
});
$("#doneButton").click(function(){
	event.preventDefault()
	record();
	check();
	grade();
	$("form").hide();
	$("#scoreBoard").show();
});
if(time == 0){
	record();
	check();
	grade();
	$("form").hide();
	$("#scoreBoard").show();
	};
