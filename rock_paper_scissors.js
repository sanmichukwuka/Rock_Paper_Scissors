window.onload = function() 
{

var userScore = 0;
var computerScore = 0;
var playUntil = 5;
var counter = document.querySelector("#counter");
var userScore_span = document.querySelector("#user-score");
var computerScore_span = document.querySelector("#comp-score");
var result         = document.querySelector(".result > p");
var rock_div       = document.querySelector("#rock");
var paper_div      = document.querySelector("#paper");
var scissors_div   = document.querySelector("#scissors");


function getHand() 
{
    var hands = ["rock", "paper", "scissors"];
    return hands[Math.floor(Math.random() * 3)];
}

function convertWord(hand) 
{
    switch(hand) 
    {
      case "rock":
        return "Rock";
      case "paper":
        return "Paper";
      case "scissors":
        return "Scissors";
    }
}

function win(playerHand) 
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var playerHand_div = document.getElementById(playerHand);
    result.innerHTML       = convertWord(playerHand) + ": You won!";
    playerHand_div.classList.add("green-glow");
    setTimeout(function() {playerHand_div.classList.remove("green-glow");}, 800);
}

function lose(playerHand) 
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var playerHand_div = document.getElementById(playerHand);
    result.innerHTML       = convertWord(playerHand) + ": You lost!";
    playerHand_div.classList.add("red-glow");
    setTimeout(function() {playerHand_div.classList.remove("red-glow");}, 800);
}

function draw(playerHand) 
{
    var playerHand_div = document.getElementById(playerHand);
    result.innerHTML       = convertWord(playerHand) + ": It's a tie ";
    playerHand_div.classList.add("gray-glow");
    setTimeout(function() {playerHand_div.classList.remove("gray-glow");}, 800);
}

function game(playerHand) 
{
    var computerChoice = getHand();
    var s = playerHand + computerChoice;
    switch(s) 
    {
      case "rockscissors":
      case "paperrock":
      case "scissorspaper":
        win(playerHand);
        break;
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        lose(playerHand);
        break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        draw(playerHand);
        break;
    }
    if(playUntil > 0)
    {
        playUntil--;
        counter.innerHTML = playUntil;
    }else
    {
        playUntil = 5;
        counter.innerHTML = playUntil;
        if(userScore > computerScore)
        {
            alert("Game Over!\nYou have won the game with score: " + userScore);
        }else if(computerScore > userScore)
        {
            alert("Game Over!\nComputer has won the game with score: " + computerScore);
        }else
        {
            alert("Game Over!\nIt's a tie game: " + userScore);
        }
        alert("You can start all over");
        userScore = 0;
        computerScore = 0;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
    }
}

function main() 
{
    rock_div.addEventListener("click", function() 
    {
      game("rock");
    });

    paper_div.addEventListener("click", function() 
    {
      game("paper");
    });

    scissors_div.addEventListener("click", function() 
    {
      game("scissors");
    });
}
main();

};
