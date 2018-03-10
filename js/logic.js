//define variables
var ansCorrect = 0;
var asnIncorrect = 0;
var unanswered = 0;
var timer = 120;


$(document).ready(function(){
    //Click events

    //By clicking start, it will show questions div and hide start div
    //It also starts the timer count down
    $("#startBtn").on("click", function(){
        startTimer();
        $("#questionsDiv").show(); 
        $("#startDiv").hide();
    })

    //Clicking on finished button executes the endGame function
    $("#finished").on("click", function(){
        timer = 0; 
    })
    
    
    //Game Functions
    function startTimer() {
        intervalTime = setInterval(count, 1000)
    }    

    //Count function displays the count to end user
    //when count is <0, it executes the endGame function
    function count() {
        timer--;
        $('#time_span').html(timer + " Seconds");
        if(timer === -1){
            endGame();
        }
    }    
    
    /////////////End Game
    function endGame(){

        //Show/Hide respective divs
        $("#questionsDiv").hide();   
        $("#gamesummaryDiv").show(); 

        //Get values of clicked radio buttons
        var q1 = $('input[name=rbtnQ1]:checked').val();
        var q2 = $('input[name=rbtnQ2]:checked').val();
        var q3 = $('input[name=rbtnQ3]:checked').val();
        var q4 = $('input[name=rbtnQ4]:checked').val();
        var q5 = $('input[name=rbtnQ5]:checked').val();
    
        //Pass values to the questionAnalyzer function along with hard coded correct response
        questionAnalyzer(q1,"B");
        questionAnalyzer(q2,"D");
        questionAnalyzer(q3,"A");
        questionAnalyzer(q4,"D");
        questionAnalyzer(q5,"C");
        
        //Finally, log responses to the screen
        $("#correct").html(ansCorrect);
        $("#incorrect").html(asnIncorrect);
        $("#unanswered").html(unanswered);
    }
    
    //Resusable function to analyze correct responses
    //and increment appropriate counters
    function questionAnalyzer(q, answer){
        if(q == undefined){
            unanswered++;
            console.log("if block");
        }else if(q == answer){
            ansCorrect++;
            console.log("else if block");
        }else{asnIncorrect++;
            console.log("else block");
        }
    }
    
    
});

