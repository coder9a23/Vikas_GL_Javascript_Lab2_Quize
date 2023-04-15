// creat the question here 

function Quiz(question){
    this.score = 0;
    this.question = question;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionByIndex = function(){
    return this.question[this.questionIndex];
}

Quiz.prototype.chekOptionWithAnswer = function(answers){
    if(this.getQuestionByIndex().isCorrectAnswer(answers)){
        this.score++
    }
    this.questionIndex++;
}

Quiz.prototype.isEded = function(){
    return this.questionIndex === this.question.length;
}

function Question(text, choices, answers){
    this.text = text;
    this.choices = choices;
    this.answers = answers;
}

Question.prototype.isCorrectAnswer = function(choices){
    return this.answers === choices;
}

let question = [
    new Question("Javascript supports",["Functions","XTHML","CSS","HTML"],"Functions"),
    new Question("Which language is used for design",["HTML","Javascript","CSS","XML"],"CSS"),
    new Question("Which is not JavaScript Framework",["NodeJS","Django","Python Script","Jaquary"],"Django"),
    new Question("Which is used for connect to DataBase",["PHP","HTML","JS","all "],"PHP"),
    new Question("Javascript is",["Language","Programming Language","Development","All of the above"],"Programming Language")
];

function loadQuestions(){
    if(quiz.isEded()){
        showScore()
    }
    else{
        // show question
        let element = document.getElementById("questions");
        element.innerText = quiz.getQuestionByIndex().text;

        // show options
        let choices = quiz.getQuestionByIndex().choices;
        for(let i=0; i<choices.length; i++){
            var choice = document.getElementById("choice" + i);
            choice.innerHTML = choices[i];
            handleOptionByButton("btn" + i, choices[i]);
        }
        showProgress();
    }
    
}

function showScore(){
    var gameOverHtml = "<h1>Result</h1>"

    gameOverHtml += "<h2 id='score'> Your score  is " + quiz.score + " And Percentage is " + (quiz.score/question.length * 100) + "%" +"</h2>"; 
    var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
}

function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.getElementById("progress");
    element.innerText = "Question" +" "+ currentQuestionNumber +" " + "of" +" "+ quiz.question.length;
}
function handleOptionByButton(id, choice){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.chekOptionWithAnswer(choice);
        loadQuestions();
    }
}
// create Quize 
let  quiz = new Quiz(question)

// LoadingQuestions
loadQuestions();