let questionElement = document.getElementById('question');
let answerA = document.getElementById('a');
let answerB = document.getElementById('b');
let answerC = document.getElementById('c');
let answerD = document.getElementById('d');
let database;
let counter = 0;

// GET JSON FILE
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        database = JSON.parse(this.responseText);        
      }
    };
    xhttp.open("GET", "questions.json");
    xhttp.send();
// GET JSON FILE

window.addEventListener('load', function () {

    // EVENT LISTENERS
    // SUBMIT BUTTON
    document.getElementById('submit').addEventListener('click', submitAnswer);
    
    // EVENT LISTENERS
    
startGame();

function startGame(){
    displayQuestion();
    displayAnswerOptions();
}

function displayQuestion(){
    questionElement.innerHTML = database[counter].question;
}

function displayAnswerOptions(){
    // A option
    for (const child of answerA.children) {
        child.innerHTML = database[counter].answer1.replace(/ /g, '&nbsp;');
      }
    // B option
    for (const child of answerB.children) {
        child.innerHTML = database[counter].answer2.replace(/ /g, '&nbsp;');
      }
    // C option
    for (const child of answerC.children) {
        child.innerHTML = database[counter].answer3.replace(/ /g, '&nbsp;');
      }
    // D option
    for (const child of answerD.children) {
        child.innerHTML = database[counter].answer4.replace(/ /g, '&nbsp;');
      }
}

function submitAnswer(){
    console.log(counter);
    counter++;
    if(database[counter] < database.length)
    displayQuestion();
    displayAnswerOptions();
}



})