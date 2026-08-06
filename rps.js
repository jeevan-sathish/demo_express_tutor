var state = true;

while (state) {
  const user = prompt("Enter Rock Paper Scissor:").trim().toLowerCase();

  const options = ["paper", "rock", "scissor"];
  const bot = options[Math.floor(Math.random() * options.length)];

  console.log("Bot:", bot);
  if (user === bot) {
    console.log("Draw");
  }
  if (user === "quit") {
    state = false;
  } else if (!options.includes(user)) {
    console.log("invalid input");
  } else if (
    (user === "rock" && bot === "paper") ||
    (user === "paper" && bot === "scissor") ||
    (user === "scissor" && bot === "rock")
  ) {
    console.log("Bot Wins");
  } else {
    console.log("user win");
  }
}
