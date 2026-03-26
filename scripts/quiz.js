color = "red";
var correct = 0;
var attempt = 0;
var wrong = 0;
	document.getElementById("correct").innerHTML=correct;
	document.getElementById("attempt").innerHTML=attempt;
	document.getElementById("wrong").innerHTML=wrong;
	

function AlertBox1(){
	correct = correct + 1;
	attempt = attempt + 1;
	document.getElementById("correct").innerHTML=correct;
	document.getElementById("attempt").innerHTML=attempt;
	alert("Correct.");
}

function AlertBox2(){
	attempt = attempt + 1;
	wrong = wrong + 1;
	document.getElementById("attempt").innerHTML=attempt;
	document.getElementById("wrong").innerHTML=wrong;
	alert("Sorry, try again");
}

function AlertBox3(){
	alert("ANSWER NOT PROGRAMMED YET");
}



function resetScore() {
    var con=confirm("Are you sure you want to reset the quiz?");

    if (con==true) {

	attempt=0;
    	correct=0;
    	wrong=0;
    	document.getElementById("correct").innerHTML=correct;
	document.getElementById("attempt").innerHTML=attempt;
	document.getElementById("wrong").innerHTML=wrong;
	location.reload();
    };
}