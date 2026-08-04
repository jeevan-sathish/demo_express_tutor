import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          name: name,
        },
        {
          withCredentials: true,
        },
      );
      const result = await response.data.message;
      setMessage(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function getData() {
    try {
      const response = await axios.get(
        "http://localhost:3000/profile",

        {
          withCredentials: true,
        },
      );
      const result = await response.data.message;
      setMessage(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    try {
      const response = await axios.get("http://localhost:3000/logout", {
        withCredentials: true,
      });
      const result = response.data.message;
      setMessage(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input type="text" onChange={handleChange} name="name" value={name} />
      <button onClick={handleSubmit}>submit</button>

      <h1>{message}</h1>
      <button onClick={getData}>getData</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default App;
