// variables
let userQuestion = "";
let eightBall = "";
let randomNum;
let tryAgain = true;
const answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

// repeat as long as tryAgain is truthy
while (tryAgain) {
  // generate randomNum value
  randomNum = Math.floor(Math.random() * answers.length);
  // ask for userQuestion
  userQuestion = prompt(`Please ask your (yes or no) question?`);

  // validating question - empty string input not valid
  while (!userQuestion) {
    userQuestion = prompt(`Please ask a real question.`);
  }

  // generate eightBall response based on randomNum
  eightBall = answers[randomNum];

  // return eightBall response
  alert(eightBall);

  // ask if user wants to try again
  tryAgain = confirm(`Do you want to ask another question?`);
}
