window.onload = function () {
    console.log("Document Finished Loading!")
    $("#start").on("click", start);

    var myQuestions = [
        {
            question: "What is 1",
            answers: {
                a: '11',
                b: '12',
                c: '13'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is 2",
            answers: {
                a: '12',
                b: '22',
                c: '32'
            },
            correctAnswer: 'c'
        },
        {
            question: "What is 3",
            answers: {
                a: '31',
                b: '32',
                c: '33'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is 4",
            answers: {
                a: '41',
                b: '42',
                c: '43'
            },
            correctAnswer: 'b'
        },
    ];

    var quizQuestion = document.getElementById('quiz');

    makeQuiz(myQuestions);
    checkQuiz(myQuestions);

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
                '<div class="question">' + questionPass[i].question + '</div>' + '<div class="answers">' + tempAnswers.join('') + '</div>'
            );
        }

        $("#quiz").append(tempHolder);

    }

    function checkQuiz(questionPast) {
        // gather answer containers from our quiz
        var answerContainers = quizQuestion.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;
        var numWrong = 0;

        // for each question...
        for (var i = 0; i < questionPast.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questionPast[i].correctAnswer) {
                numCorrect++;
            }
            else {
                numWrong++;
            }
        }
        console.log(numCorrect + " " + numWrong);
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
        if (time <= 110) {
            console.log("Game Ended");
            $("#displayTime").text("-----");
            stop();
            checkQuiz(myQuestions);
            
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function reset() {
        time = 120;
        gameRun = false;
    }

    function setUp() {
        $(".gameOPT").css("visibility", "visible");
        $(".start").css("visibility", "hidden");
        $(".banner").css("background-image", "url('./assets/images/Adventure-Time_Banner_1600x.jpg')");
        $(".banner").css("height", "100px");
    }
};
