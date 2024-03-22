 //allowable time for test in minutes 
 //declaring the required variables throuhout the script
 var time = 4;
 var now = 0;
 var distance = 0;
 var position = 0;
 var correct = 0;
 var marks = 0;
 var choice = "Not answered"
 var test, test_condition, question, choice, choices, choiceA, choiceB, choiceC, choiceD, colour;
 var userChoice = ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
// Declaring the questions and answers of the quiz as elements of a array
 var questions = [
     ["1. What does EDM stand for?", "Electronic Dance Music", "Electric Dance Music", "Electric Disk Music", "Electronic Disk Music", "A"],
     ["2. Who is the guest artist featuring in Chainsmoker's 'closer' music cover?", "Taylor Swift", "Rihanna", "Hasley", "Miley Cyrus", "C"],
     ["3. What is the largest EDM music festival in the world?", "Creamfields", " Ultra Music Festival", "Electric Zoo","Tomorrowland", "B"],
     ["4. What is the name of the annual EDM music festival held in Miami, Florida?", "Rock in Rio", " Tomorrowland", " Sunburn", "Ultra Music Festival", "D"],
     ["5. Who is the Swedish EDM music producer who is known for his hits 'Levels' and 'Wake Me Up'?", " Martin Garrix", " Chainsmokers", "Avicci", "Alan Walker", "C"],
     ["6. What is the name of the annual EDM music festival held in Amsterdam, Netherlands?", "A M F", "U M F", "B M F", "E D C", "A"],
     ["7. What is the name of the American DJ and producer known for his hit songs 'Animals' and 'Wizard'?", " Alan walker", " Avicci", "Marshmello", "Martin Garrix", "D"],
     ["8. What is the name of the annual EDM music festival held in Belgium that is known for its elaborate stage designs and immersive experience?", "Ultra Music Festival", " Neverland", "Creamfields", "Tomorrowland", "D"],
     ["9. In which country does 'Sunburn Music Festival' takes place ?", "United States", "Belgium", "India", "Germany", "C"],
     ["10.What is the Stage name of EDM music artist Christopher Comstock?", "Tiesto", "Marshmello", "Zedd", "Diplo", "B"]
 ];
 var colour = ["red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "brown", "brown", "brown", "brown", "brown", "blue", "blue", "blue", "blue", "blue", "yellow", "yellow", "yellow", "yellow", " yellow", "green", "green", "green", "green", "green"]
//function to provide questions
 function questionProvider() {
     document.getElementById("answer").style.display = "none";
     test = document.getElementById("test");
     if (position >= questions.length) {    //checking the position of the element in the array
         document.getElementById("test").style.backgroundColor = colour[marks + 10];
         test.innerHTML = "<h2>Out of " + questions.length + " questions </h2>";
         test.innerHTML += "<h4>correct answers : " + correct + " </h4>";
         test.innerHTML += "<h4>wrong answers : " + (2 * correct - marks) + " </h4>";
         test.innerHTML += "<h4>No answers : " + (questions.length + marks - 3 * correct) + "</h3>";
         test.innerHTML += "<h2>You got " + marks + " Marks</h2>";
         test.innerHTML += "<button class = button onclick='backToQuiz()'> Try Again</button>";
         document.getElementById("test_condition").innerHTML = "Quiz completed";
         // resets the variable to allow users to restart the test 
         //position = 0; 
         //correct = 0; 
         // stops rest of questionProvider function running when test is completed 
         return false;
     }
     //task bar to promt how much questions user has taken
     document.getElementById("test_condition").innerHTML = "Question " + (position + 1) + " of " + questions.length;
     question = questions[position][0];
     choiceA = questions[position][1];
     choiceB = questions[position][2];
     choiceC = questions[position][3];
     choiceD = questions[position][4];

     test.innerHTML = "<h4>" + question + "</h4>";
     // the += appends to the data we started on the line above 
     test.innerHTML += "<input type='radio' name='choices' value='A'> " + choiceA + "<br>";
     test.innerHTML += "<input type='radio' name='choices' value='B'> " + choiceB + "<br>";
     test.innerHTML += "<input type='radio' name='choices' value='C'> " + choiceC + "<br>";
     test.innerHTML += "<input type='radio' name='choices' value='D'> " + choiceD + "<br><br>";

     test.innerHTML += "<button class = button_next onclick='answerChecker()'>Next Question</button>";
 }

 function answerChecker() {
     // use getElementsByName because we have an array which it will loop through 
     choices = document.getElementsByName("choices");
     for (var i = 0; i < choices.length; i++) {
         if (choices[i].checked) {
             choice = choices[i].value;
             userChoice[position] = choice;
         }
     }
     // checks if answer matches the correct choice 
     if (choice == questions[position][5]) {
         //each time there is a correct answer this value increases 
         correct++;
         marks = marks + 2;

     } else if (choice != "Not answered") {
         marks = marks - 1
     }
     choice = "Not answered"
         // choiceAnges position of which choiceAracter user is on 
     position++;

     // then the questionProvider function runs again to go to next question 
     questionProvider();
 }
//function for the timer
 function timeOver() {
     if (position < 10) {
         position = 10;
         alert('Time Out');
         questionProvider();
     }
 }
 var j = 0;



 function countDown() {
     // Set the time we're counting down to 
     var countDownTime = new Date().getTime() + time * 60 * 1000;

     // Update the count down every 1 second 
     var x = setInterval(function() {

         // Get todays date and time 
         now = new Date().getTime();

         // Find the distance between now an the count down date 
         distance = countDownTime - now;

         // Time calculations for days, hours, minutes and seconds     
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

         // Output the result      
         if (distance < 0) {
             minutes = 0;
             seconds = 0;
         }

         if (position == 10) {
             myStopFunction();
         }
         //getting the id names from html to set timer countdown from script
         document.getElementById("min").innerHTML = minutes;
         document.getElementById("sec").innerHTML = seconds;

     }, 1000);

 }

 function myStopFunction() {
     clearInterval(x);
 }
//funtion to display the timer clock
 function displayWatch(){
     document.getElementById("clockdiv").style.display="inline-block";
 }


const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  const box1 = document.getElementById('test');
  const button_start=document.getElementById('btn');

  box1.style.backgroundColor = '#9ab6ed';
  button_start.style.display='none';

  // optionally change text color
  // box.style.color = 'white';
  //removes the start button after clicking
});

function backToQuiz(){
    window.location.href="EDMquiz.html";
}
