function doQuiz() {
  let points = 0;

  let q_name = prompt("What is your name?");

  let q1 = prompt("Demie has worked before in archaeology. Yes/No?");

  if (q1.toLowerCase() == "n" || q1.toLowerCase() == "no") {
    // console.log("Correct! I've not worked in Archaeology before.");
    alert("Correct! I've not worked in Archaeology before.");
    points += 1;
  } else {
    // console.log("Incorrect! I've not worked in Archaeology.");
    alert("Incorrect! I've not worked in Archaeology.");
  }

  let q2 = prompt("Demie is double-jointed. Yes/No?");

  if (q2.toLowerCase() == "y" || q2.toLowerCase() == "yes") {
    // console.log("Correct! I'm double jointed in my fingers!");
    alert("Correct! I'm double jointed in my fingers!");
    points += 1;
  } else {
    // console.log("Incorrect! I'm double jointed in my fingers!");
    alert("Incorrect! I'm double jointed in my fingers!");
  }

  let q3 = prompt("I like EDM music. Yes/No?");

  if (q3.toLowerCase() == "y" || q3.toLowerCase() == "yes") {
    // console.log(
    //   "Correct! Alan Walker, Avicii, and Gryffin are my fav EDM artists!"
    // );
    alert("Correct! Alan Walker, Avicii, and Gryffin are my fav EDM artists!");
    points += 1;
  } else {
    // console.log("Incorrect! I DO like EDM music!");
    alert("Incorrect! I DO like EDM music!");
  }

  let q4 = prompt("I unironically use Red theme on my VSCode. Yes/No?");

  if (q4.toLowerCase() == "y" || q4.toLowerCase() == "yes") {
    // console.log(
    //   "Correct! Red theme gives me very cool vibes. (Even though it's warm)"
    // );
    alert(
      "Correct! Red theme gives me very cool vibes. (Even though it's warm)"
    );
    points += 1;
  } else {
    // console.log("Incorrect! I use red theme. Muhahaha.");
    alert("Incorrect! I use red theme. Muhahaha.");
  }

  let q5 = prompt("My favourite dish is Thai Green Curry. Yes/No?");

  if (q5.toLowerCase() == "y" || q5.toLowerCase() == "yes") {
    // console.log(
    //   "Correct! Thai Green Curry is spicy, sweet, and savoury, all in one!"
    // );
    alert(
      "Correct! Thai Green Curry is spicy, sweet, and savoury, all in one!"
    );
    points += 1;
  } else {
    // console.log("Incorrect! I love Thai green curry!");
    alert("Incorrect! I love Thai green curry!");
  }

  alert(`You got ${points}/5 questions correct!`);
}
