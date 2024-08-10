alert("Be careful to visit this site. It may be harmful so don't share your personal information. Message from 'Dark Wolf'");
    document.getElementById('get').innerHTML = "<p>So you decide to visit our site. Click on below Button to start.</p>";

    document.getElementById("btn").onclick =
     function() {
      document.getElementById("saqlain").innerHTML = "I feel like a man hung between life and death ☠️";
    };
//button JavaScript that changes body color 
    document.getElementById("toggleButton").onclick = function() {
      let bodyElement = document.body;
      let buttonElement = document.getElementById("toggleButton");
      if (bodyElement.style.backgroundColor === "white") {
        bodyElement.style.backgroundColor = "darkgrey";
        buttonElement.classList.remove("active");
      } else {
        bodyElement.style.backgroundColor = "white";
        buttonElement.classList.add("active");
      }
    };
 //Append Operation (add text operation):-
document.getElementById("appendBtn").onclick = function() {
  document.getElementById("appendText").innerHTML = "I am" + document.getElementById("appendText").innerHTML + "my world"
};
document.getElementById("horrible-content-btn").onclick = function() {
  document.getElementById("horrible-content").style.border = "8px solid red";
  document.getElementById("horrible-content").style.boxShadow = "0px 0px 40px blue";
  document.getElementById("horrible-content").style.backgroundColor = "#0ef";
};

//this is use to change content live:-
document.getElementById("change-Btn").onclick = function() {
  alert("You not write this for fun..... Keep in mind you write your fate in this 'Dark Net'");
  var changeText = "";
  changeText = document.getElementById("change-content").value;
  document.getElementById("show-here").innerHTML = changeText;
};
//this is circle code:-
document.getElementById("bloody1").onclick = function() {
   document.getElementById("bloody1").style.display = "none";
};
document.getElementById("bloody2").onclick = function() {
   document.getElementById("bloody2").style.display = "none";
};
document.getElementById("bloody3").onclick = function() {
   document.getElementById("bloody3").style.display = "none";
};
//ad to hide when click to close:-
document.getElementById("saqlqin1_btn").onclick = function() {
  document.getElementById("saqlain1").style.display = "none";
};
//Array in JAVASCRIPT:-
//first method otherwise several methods:-
var phishingSite = new Array();
   phishingSite[0] = "Muhammad Saqlain Shoukat"; 
   phishingSite[1] = "is Developer of";
   phishingSite[2] = "this";
   phishingSite[3] = "horrible site";
   alert(phishingSite);
  
document.getElementById("start").onclick = function() {
  document.getElementById("qsd").style.display = "inline";
};  
document.getElementById("ok").onclick = function() {
  document.getElementById("ok").style.display = "none";
  document.getElementById("qid").style.filter = "blur(0px)";
};  
  //use of if in javascript or website:-
 document.getElementById("qbtn1").onclick = function() {
     var answer = "Phishing Sea";
   var givenAnswer = document.getElementById("i1").value;
   if ( answer == givenAnswer) {
     alert("your answer is good move on second question.");
  document.getElementById("ans2").style.display = "inline";   
   } else {
     alert("WARNING!!! if you give wrong answers your data will damage.");
   }
 };
 document.getElementById("qbtn2").onclick = function() {
   var answer = "Muhammad Saqlain Shoukat";
   var givenAnswer = document.getElementById("i2").value;
   if (answer == givenAnswer) {
     alert("your answer is good move on second question.");
   document.getElementById("ans3").style.display = "inline";  
   } else {
     alert("WARNING!!! if you give wrong answers your data will damage.");
   }
 };
  document.getElementById("qbtn3").onclick = function() {
   var answer = "10000";
   var givenAnswer = document.getElementById("i3").value;
   if (answer == givenAnswer) {
     alert("your answer is good move on second question.");
     document.getElementById("ans4").style.display = "inline";
   } else {
     alert("WARNING!!! if you give wrong answers your data will damage.");
   }
 };
document.getElementById("qbtn4").onclick = function() {
  var guessNumber = Math.random();
  guessNumber = Math.floor(guessNumber * 10);
  var guessedAns = document.getElementById("i4").value;
  if (guessNumber == guessedAns) {
    alert("Congratulations! your guessed answer is CORRECT.......you save your data and life....");
  } else {
    alert("WARNING! your guessed number is wrong. Correct answer was " + guessNumber);
  }
};
// This is way to write "for loops" in javascrit:-
var Loops = ["Hi", "i love you", "and also Your DATA", "Let's Start Questions", "Mesage from devloper", "Muhammad Saqlain Soukat"];
var JavaScript = "Phishing Sea";
//sart from here:-
//this is for loop:-
for (var i = 0; i < Loops.length; i++) {
  JavaScript = JavaScript + "<p>"+ Loops[i] +"</p>";
}
document.getElementById("loops").innerHTML = JavaScript;
//this is while loop:-
var saki = ["hi","how are","you feeling"];
var angel = "I am Here";
i = 0;
while (i < saki.length) {
  angel = angel + "<p>"+ saki[i] + "</p>";
}
i++;
//functions in javascrit other than onclik functions:-
//function saqlain(a,b) {
  //alert(a+b);
//}
// alert(saqlain(20,30));