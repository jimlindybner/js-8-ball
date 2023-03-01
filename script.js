// variables
let userQuestion = "";
let eightBall = "";
let randomNum;
let tryAgain = true;

// repeat as long as tryAgain is truthy
while (tryAgain) {
  // generate randomNum value
  randomNum = Math.floor(Math.random() * 20);
  // ask for userQuestion
  userQuestion = prompt(`What is your question?`);

  // validating question
  while (!userQuestion) {
    userQuestion = prompt(`Please ask a question.`);
  }

  // generate eightBall response based on randomNum
  switch (randomNum) {
    case 0:
      eightBall = "It is certain.";
      break;
    case 1:
      eightBall = "It is decidedly so.";
      break;
    case 2:
      eightBall = "Without a doubt.";
      break;
    case 3:
      eightBall = "Yes definitely.";
      break;
    case 4:
      eightBall = "You may rely on it.";
      break;
    case 5:
      eightBall = "As I see it, yes.";
      break;
    case 6:
      eightBall = "Most likely.";
      break;
    case 7:
      eightBall = "Outlook good.";
      break;
    case 8:
      eightBall = "Yes.";
      break;
    case 9:
      eightBall = "Signs point to yes.";
      break;
    case 10:
      eightBall = "Reply hazy, try again.";
      break;
    case 11:
      eightBall = "Ask again later.";
      break;
    case 12:
      eightBall = "Better not tell you now.";
      break;
    case 13:
      eightBall = "Cannot predict now.";
      break;
    case 14:
      eightBall = "Concentrate and ask again.";
      break;
    case 15:
      eightBall = "Don't count on it.";
      break;
    case 16:
      eightBall = "My reply is no.";
      break;
    case 17:
      eightBall = "My sources say no.";
      break;
    case 18:
      eightBall = "Outlook not so good.";
      break;
    default:
      eightBall = "Very doubtful.";
      break;
  }

  // return eightBall response
  alert(eightBall);

  // ask if user wants to try again
  tryAgain = confirm(`Try again?`);
}
