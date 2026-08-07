import { useState } from "react";

const App = () => {
  const [userOpn, setUserOpn] = useState("");
  const [botOpn, setBotOpn] = useState("");
  function botTime() {
    const options = ["rock", "paper", "scissor"];
    const value = options[Math.floor(Math.random() * options.length)];
    setBotOpn(value);
  }
  function handleUserOption(opn) {
    setUserOpn(opn);
    botTime();
  }
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white">
      <p>Rock Paper Scissor </p>
      <div className="w-full h-auto p-3 flex flex-row gap-2 text-red-500">
        <p>Bot-Score:0</p>
        <p>User_scor:0</p>
      </div>
      <div className="w-full h-auto p-3 flex flex-row gap-2 justify-center items-center text-yellow-200">
        <p>Bot: {botOpn}</p>
        <p>User: {userOpn}</p>
      </div>

      <div className="w-full h-auto flex flex-row gap-2 justify-center items-center bg-gray-800 ">
        <div className="w-[300px] h-[100px] flex justify-center items-center text-black text-[30px] rounded-2xl bg-pink-300">
          {botOpn}
        </div>
        <div className="w-[300px] h-[100px] flex justify-center items-center text-black text-[30px] rounded-2xl bg-pink-300">
          {userOpn}
        </div>
      </div>

      <div className="w-full justify-center items-center p-3 flex flex-row gap-2">
        <button
          className="bg-blue-300"
          onClick={() => handleUserOption("rock")}
        >
          Rock
        </button>
        <button
          className="bg-blue-300"
          onClick={() => handleUserOption("paper")}
        >
          Paper
        </button>
        <button
          className="bg-blue-300"
          onClick={() => handleUserOption("scissor")}
        >
          Scissor
        </button>
      </div>
    </div>
  );
};

export default App;
