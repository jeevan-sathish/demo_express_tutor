var state = true;
var userScore =0;
var botScore =0;
let freq ={}
let ikey =



while (state) {
    console.log(freq)
  const user = prompt("Enter Rock Paper Scissor:").trim().toLowerCase();
  if(freq[user]){
      
      freq[user]++
      
  }else{
      freq[user]=1
      
  }
  for( var keys in freq){
      console.log(freq[keys])
  }
 
  
  

  const options = ["paper", "rock", "scissor"];
  const bot = options[Math.floor(Math.random() * options.length)];

  console.log("Bot:", bot);
  if (user === bot) {
    console.log("Draw");
    
  }
  if (user === "quit") {
      console.log(`Bot-Score:${botScore}| user-score:${userScore}`)
      if(botScore>userScore){
          console.log("bot is winner")
          state=false
      }
      else{
          console.log("user is winner")
          state=false
      }
    
    
  } else if (!options.includes(user)) {
    console.log("invalid input");
  } else if (
    (user === "rock" && bot === "paper") ||
    (user === "paper" && bot === "scissor") ||
    (user === "scissor" && bot === "rock")
  ) {
    console.log("Bot Wins");
    botScore+=1
  } else  {
    console.log("user win");
    userScore+=1
  }
}
