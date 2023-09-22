function doQuiz() {
  let points = 0;

  let q_name = prompt("What is your name?");

  let confirmQuiz = confirm(
    `Hi ${q_name}, nice to meet you. Are you ready to do the quiz?`
  );

  if (confirmQuiz === true) {
    let q1 = prompt("Demie has worked before in archaeology. Yes/No?");

    if (q1.toLowerCase() == "n" || q1.toLowerCase() == "no") {
      alert("Correct! I've not worked in Archaeology before.");
      points += 1;
    } else {
      alert("Incorrect! I've not worked in Archaeology.");
    }

    let q2 = prompt("Demie is double-jointed. Yes/No?");

    if (q2.toLowerCase() == "y" || q2.toLowerCase() == "yes") {
      alert("Correct! I'm double jointed in my fingers!");
      points += 1;
    } else {
      alert("Incorrect! I'm double jointed in my fingers!");
    }

    let q3 = prompt("I like EDM music. Yes/No?");

    if (q3.toLowerCase() == "y" || q3.toLowerCase() == "yes") {
      alert(
        "Correct! Alan Walker, Avicii, and Gryffin are my fav EDM artists!"
      );
      points += 1;
    } else {
      alert("Incorrect! I DO like EDM music!");
    }

    let q4 = prompt("I unironically use Red theme on my VSCode. Yes/No?");

    if (q4.toLowerCase() == "y" || q4.toLowerCase() == "yes") {
      alert(
        "Correct! Red theme gives me very cool vibes. (Even though it's warm)"
      );
      points += 1;
    } else {
      alert("Incorrect! I use red theme. Muhahaha.");
    }

    let q5 = prompt("My favourite dish is Thai Green Curry. Yes/No?");

    if (q5.toLowerCase() == "y" || q5.toLowerCase() == "yes") {
      alert(
        "Correct! Thai Green Curry is spicy, sweet, and savoury, all in one!"
      );
      points += 1;
    } else {
      alert("Incorrect! I love Thai green curry!");
    }

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

        // swappedSongString = swappedSongString.replace(",", "");

        console.log("SSA", swappedSongArray);
        console.log(swappedSongString);

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
