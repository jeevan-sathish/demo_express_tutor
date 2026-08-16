import { useState } from "react";

const App = () => {
  const [userOpn, setUserOpn] = useState("");
  const [botOpn, setBotOpn] = useState("");
  const [result, setResult] = useState("");
  const [botScore, setBotScore] = useState(0);
  const [userScore, setUserScore] = useState(0);

  function handleUserOption(opn) {
    const options = ["🪨rock", "📜paper", "✂️scissor"];
    const botChoice = options[Math.floor(Math.random() * options.length)];

    setUserOpn(opn);
    setBotOpn(botChoice);

    handleResult(opn, botChoice);
  }
  function handleResult(user, bot) {
    if (user === bot) {
      setResult("Draw");
      return;
    }

    if (
      (user === "🪨rock" && bot === "✂️scissor") ||
      (user === "✂️scissor" && bot === "📜paper") ||
      (user === "📜paper" && bot === "🪨rock")
    ) {
      setUserScore((prev) => prev + 1);
      setResult("User Wins");
    } else {
      setBotScore((prev) => prev + 1);
      setResult("Bot Wins");
    }
  }

  function handleQuit() {
    if (userScore > botScore) {
      setResult("User win🎉");
    } else {
      setResult("bot win🎉");
    }
  }

  function handleReset() {
    setBotOpn("");
    setUserOpn("");
    setBotScore(0);
    setUserScore(0);
    setResult("Start the game");
  }
  return (
    <div className="w-full h-screen flex gap-0 flex-col justify-center items-center bg-black text-white">
      <p>Rock Paper Scissor </p>
      <div className="w-full h-auto justify-center items-center p-3 flex flex-row gap-2 text-red-500">
        <p>Bot-Score:{botScore}</p>
        <p>User_scor:{userScore}</p>
      </div>
      <div className="w-full h-auto p-1 flex flex-row gap-1 justify-center items-center text-yellow-200">
        <p>Bot: {botOpn}</p>
        <p>You: {userOpn}</p>
      </div>

      <div className="w-full h-auto flex flex-row gap-2 justify-center items-center bg-transparent ">
        <div className="w-[95px] h-[75px] font-extrabold flex justify-center items-center text-black text-[20px] rounded-2xl bg-pink-300">
          {botOpn}
        </div>
        <p className="animate-ping">🔥</p>
        <div className="w-[95px] h-[75px] flex font-extrabold justify-center items-center text-black text-[20px] rounded-2xl bg-pink-300">
          {userOpn}
        </div>
      </div>
      <p>result: {result}</p>

      <div className="w-full justify-center items-center p-3 text-[15px] flex flex-row gap-2">
        <button
          className="bg-blue-400 text-[12px] p-2 rounded-2xl"
          onClick={() => handleUserOption("🪨rock")}
        >
          Rock
        </button>
        <button
          className="bg-blue-400 text-[12px] p-2 rounded-2xl"
          onClick={() => handleUserOption("📜paper")}
        >
          Paper
        </button>
        <button
          className="bg-blue-400 text-[12px] p-2 rounded-2xl"
          onClick={() => handleUserOption("✂️scissor")}
        >
          Scissor
        </button>
      </div>

      <div className="flex flex-row gap-4">
        <button
          className=" p-2 bg-red-400 rounded-2xl text-white"
          onClick={handleQuit}
        >
          quit
        </button>
        <button className="bg-green-500 p-2 rounded-2xl" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default App;
