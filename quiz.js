// Okay this is a cheeky global variable, but I don't know how to work around it.
let points = 0;

function askQuestion(question, answer, msgIfCorrect = "", msgIfWrong = "") {
  let userInput = prompt(`${question}`).toLowerCase();
  let answeredCorrectly = false;

  let isAnswerArray = Array.isArray(answer);

  if (isAnswerArray) {
    for (i = 0; i < answer.length; i++) {
      answer[i] = answer[i].toLowerCase();
    }
  } else {
    answer = answer.toLowerCase();
  }

  // if the answer is an array..
  if (isAnswerArray) {
    // if the userInput is in the array of answers.. (it's correct)
    if (answer.indexOf(`${userInput}`) != -1) {
      answeredCorrectly = true;
      alert(`Correct! ${msgIfCorrect}`);
      // this return either true or false.
      points++;
      return answeredCorrectly;
    } else {
      alert(`Incorrect! ${msgIfWrong}`);
      // returns false
      return answeredCorrectly;
    }
  } else {
    if (answer === userInput) {
      answeredCorrectly = true;
      points++;
      alert(`Correct! ${msgIfCorrect}`);
      return answeredCorrectly;
    } else {
      alert(`Incorrect! ${msgIfWrong}`);

      // returns false
      return answeredCorrectly;
    }
  }
}

function doQuiz() {
  points = 0;

  let q_name = prompt("What is your name?");

  let confirmQuiz = confirm(
    `Hi ${q_name}, nice to meet you. Are you ready to do the quiz?`
  );

  if (confirmQuiz === true) {
    let q1 = askQuestion("Demie has worked before in archaeology. Yes/No?", [
      "no",
      "n",
    ]);

    let q2 = askQuestion("Demie is double-jointed. Yes/No?", ["yes", "y"]);

    let q3 = askQuestion("I like EDM music. Yes/No?", ["yes", "y"]);

    let q4 = askQuestion("I unironically use Red theme on my VSCode. Yes/No?", [
      "yes",
      "y",
    ]);

    let q5 = askQuestion("My favourite dish is Thai Green Curry. Yes/No?", [
      "yes",
      "y",
    ]);

    alert(`You got ${points}/5 questions correct!`);

    promptGuessingGame = confirm(
      "Would you like to do a number guessing game??"
    );

    if (promptGuessingGame === true) {
      numberGame = doNumberGuessingGame();
    }

    if (numberGame == true) {
      points += 1;
    }

    let q7 = prompt(
      "Last question: Name one of Demie's favourite Top 10 Songs, including the artist."
    );

    // Gets the values from my top 10 song list, (li elements).
    let top10songs = document.getElementById("top-ten-songs").childNodes;

    let q7_answersList = [];

    // swapped answers mean, the artist and the song name switch places.
    let q7_answersList_swapped = [];

    // and adds them to my answer list!
    for (i = 0; i < top10songs.length; i++) {
      // removes any undefined HTML elements, isolating the li text.
      if (top10songs[i].innerHTML != undefined) {
        q7_answersList.push(top10songs[i].innerHTML.toLowerCase());

        // get the song's artist and song name. returns two elements.
        let swappedSongArray = top10songs[i].innerHTML.split(" - ");

        // temporarily store the first element, to prepare for the swap.
        let swappedSongArray_store = swappedSongArray[0];

        // swap the positions of the artist and song name.
        swappedSongArray[0] = swappedSongArray[1];
        swappedSongArray[1] = swappedSongArray_store;

        // add the ' - ' between the artist and song name.
        swappedSongArray.splice(1, 0, " - ");

        swappedSongString = swappedSongArray.join("");

        swappedSongString = swappedSongString.toLowerCase();

        q7_answersList_swapped.push(swappedSongString);
      } else {
        // do nothing
      }
    }

    // if answer is on the list (-1 is false; not on the list.)
    //
    if (
      q7_answersList.indexOf(`${q7.toLowerCase()}`) != -1 ||
      q7_answersList_swapped.indexOf(`${q7.toLowerCase()}`) != -1
    ) {
      points += 1;
      alert("Congratulations! You got one of the songs on my list!");
    } else {
      alert("Incorrect!");
    }

    alert(`GRAND TOTAL: You got ${points}/7 questions correct!`);
  } else {
    alert(`Okay ${q_name}, No need to do the quiz if you don't want to.`);
  }
}

function doNumberGuessingGame() {
  alert(
    "Now, let's do a number guessing game. I will generate a random number between 1 to 10. Ready?"
  );

  // added +1 to ensure the number generated is between 1 to 10.
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let guessingAttempts = 4;
  let wonGame = false;

  while (guessingAttempts > 0 && wonGame === false) {
    let numberGuess = parseInt(prompt("Guess the number from 1 to 10"));

    if (numberGuess > randomNumber) {
      guessingAttempts -= 1;
      alert(
        `Your guess is too high. You have ${guessingAttempts} attempts left.`
      );
    } else if (numberGuess < randomNumber) {
      guessingAttempts -= 1;
      alert(
        `Your guess is too low. You have ${guessingAttempts} attempts left.`
      );
    } else if (parseInt(numberGuess) == NaN) {
      alert("Please put a number.");
    } else if (numberGuess === randomNumber) {
      wonGame = true;
    }
  }

  if (guessingAttempts == 0) {
    alert(`The number is: ${randomNumber}. Better luck next time.`);
  }

  if (wonGame === true) {
    alert(`You guessed correctly! The number is: ${randomNumber}!`);
  }

  return wonGame;
}
