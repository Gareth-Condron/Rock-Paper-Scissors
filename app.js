let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-Score");
const computerScore_span = document.getElementById("computer-Score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".resultMessage");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function GetComputerChoice () 
{
    const choices = ["r","p","s"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber];
}

function ConvertToWord (inputWord) 
{
    if (inputWord == "r") 
    {
        return "Rock";
    }
    else if (inputWord == "s") 
    {
        return "Scissors";
    }
    else if (inputWord == "p") 
    {
        return "Paper";
    }
}


function Game (playerChoice) 
{
    const computerChoice = GetComputerChoice();
    console.log ("The computer picked " + computerChoice);
    console.log ("You picked " + playerChoice);

    switch (playerChoice + computerChoice) 
    {
        case "rs":
        case "sp":
        case "pr":
            console.log("The player wins!");
            playerScore ++;
            playerScore_span.innerHTML = playerScore;
            result_div.innerHTML = "The player picked  " + ConvertToWord(playerChoice) + " which defeats  " + ConvertToWord(computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("The computer wins!");
            computerScore ++;
            computerScore_span.innerHTML = computerScore;
            result_div.innerHTML = "The player picked  " + ConvertToWord(playerChoice) + " which is defeated by  " + ConvertToWord(computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            console.log ("It is a draw.");
            result_div.innerHTML = "The player picked  " + ConvertToWord(playerChoice) + "  which draws with  " + ConvertToWord(computerChoice);
            break;
        
    }

}


function Main () 
{
    rock_div.addEventListener 
    ("click", function () 
        {
            Game ("r");
        }
    )
    paper_div.addEventListener ("click", function ()
        {   
            Game ("p");
        } 
    )

    scissors_div.addEventListener 
    ( "click", function ()
        {
            Game ("s");
        }

    )
}

Main ();