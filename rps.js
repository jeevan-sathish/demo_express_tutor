// const user = prompt("enter Rock Paper Scissor:").trim().toLowerCase();
const user = "rock";
console.log(user);
const options = ["paper", "rock", "scissor"];
const bot = options[Math.floor(Math.random() * options.length)];
console.log(bot);
if (user === bot) {
  console.log("draw");
} else if (
  (user === "rock" && bot === "paper") |
  (user === "paper" && bot === "scissor") |
  (user === "scissor" && bot === "rock")
) {
  console.log("bot win");
} else if (
  user === "paper" &&
  (bot === "rock") | (user === "scissor") &&
  (bot === "paper") | (user === "rock") &&
  bot === "scissor"
) {
  console.log("user win");
}
