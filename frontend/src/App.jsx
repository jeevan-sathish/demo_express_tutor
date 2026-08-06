import { useRef, useState } from "react";

const App = () => {
  const inputRef = useRef();
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => (
          setText(e.target.value),
          console.log(text, "rerendered")
        )}
      />

      <input
        type="text"
        ref={inputRef}
        onChange={() => console.log(inputRef.current.value)}
      />
    </div>
  );
};

export default App;
