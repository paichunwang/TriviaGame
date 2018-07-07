window.onload = function () {
    console.log("Document Finished Loading!")
    $("#start").on("click", start);

    var advQuestions = [
        {//Question 1
            question: "What is Jake?",
            answers: {
                A: 'Minotaur',
                B: 'Fish',
                C: 'Dog'
            },
            correctAnswer: 'C'
        },
        {//Question 2
            question: "What is Finn?",
            answers: {
                A: 'Fish',
                B: 'Human',
                C: 'Vampire'
            },
            correctAnswer: 'B'
        },
        {//Question 3
            question: "When Marceline moved into Finn and Jake's tree house who moved in with her?",
            answers: {
                A: 'Her Dad',
                B: 'Ice King',
                C: 'Ash'
            },
            correctAnswer: 'C'
        },
        {//Question 4
            question: "Who is Finn's Best Friend?",
            answers: {
                A: 'Jake',
                B: 'Gunter',
                C: 'Marelline'
            },
            correctAnswer: 'A'
        },
        {//Question 5
            question: "What is Jakes' ability?",
            answers: {
                A: 'Barking',
                B: 'Stretching',
                C: 'Walking'
            },
            correctAnswer: 'B'
        },
        {//Question 6
            question: "Which is the lyrics intro for 'What am i to you'?",
            answers: {
                A: 'How do you see me?',
                B: 'Do you think im a joke?',
                C: 'Am i joke, your knight or your brother?'
            },
            correctAnswer: 'C'
        },
        {//Question 7
            question: "Does Marceline have parents?",
            answers: {
                A: 'Mom',
                B: 'Dad',
                C: 'Orphan'
            },
            correctAnswer: 'B'
        },
        {//Question 8
            question: "What does Jake like to eat?",
            answers: {
                A: 'Pickles and Sandwiches',
                B: 'Ham',
                C: 'Egg'
            },
            correctAnswer: 'A'
        },
        {//Question 9
            question: "What is Marcelines' Weapon?",
            answers: {
                A: 'Base Axe',
                B: 'Sword',
                C: 'Knife'
            },
            correctAnswer: 'A'
        },
        {//Question 10
            question: "What does Princess Bubblegum like to do?",
            answers: {
                A: 'Sport',
                B: 'Kidnapping Teardrop Candy',
                C: 'Science'
            },
            correctAnswer: 'C'
        },
    ];

    var quizQuestion = document.getElementById('quiz');

    makeQuiz(advQuestions);

    var time = 120;
    var gameRun = false;

    function makeQuiz(questionPass) {

        var tempHolder = [];
        var tempAnswers = [];

        for (var i = 0; i < questionPass.length; i++) {
            //in reiteration, remove all answer in the temp answer array to accept new answer
            tempAnswers = [];
            for (letter in questionPass[i].answers) {
                //every available answer in the array is pushed to a temp holder
                tempAnswers.push(
                    '<label>' + '<input type="radio" name="question' + i + '" value="' + letter + '">&nbsp&nbsp'
                    + letter + ': ' + questionPass[i].answers[letter] + '</label> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
                );
            }
            //combine both the question and answer ready to be display on the HTML
            tempHolder.push(
                '<div class="question">' + questionPass[i].question + '</div>' + '<div class="answers">' + tempAnswers.join('') + '</div><br><br>'
            );
        }

        $("#quiz").append(tempHolder);

    }

    function checkQuiz(questionPast) {
        //create temp holder for comp user choice v correct answer
        var answerContainers = quizQuestion.querySelectorAll('.answers');

        //place holder for correct answer pull from advQuestions
        var userAns = '';
        var numCorrect = 0;
        var numWrong = 0;

        for (var i = 0; i < questionPast.length; i++) {

            userAns = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAns === questionPast[i].correctAnswer) {
                numCorrect++;
            }
            else {
                numWrong++;
            }
        }
        $(".end").html(`<h1>Correct Answer:</h1> ${numCorrect} <br> <h1>Wrong Answer:</h1> ${numWrong}`);
    }

    function start() {
        if (gameRun == false) {
            intervalId = setInterval(count, 1000);
            gameRun = true;
            console.log("Game Started");
            setUp();
        }
    }

    function count() {
        time--;
        console.log("Time Remaining: " + time);
        $("#displayTime").text('Time Remaining: ' + time);
        if (time <= 0) {
            console.log("Game Ended");
            stop();
            checkQuiz(advQuestions);
            $(".gameOPT").css("visibility", "hidden");
            $(".end").css("visibility", "visible");
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    //Didn't get to reset
    function reset() {
        time = 120;
        gameRun = false;
    }

    function setUp() {
        $(".start").css("visibility", "hidden");
        $(".gameOPT").css("visibility", "visible");
        $(".banner").css("background-image", "url('./assets/images/Adventure-Time_Banner_1600x.jpg')");
        $(".banner").css("height", "100px");
        $(".quiz").css("top", "150px");
    }
};
