import axios from "axios";
const App = () => {
  async function sendData() {
    try {
      const response = await axios.post("http://localhost:3000/data", {
        name: "jeevan",
      });
      const result = response.data.message;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={sendData}>send</button>
    </div>
  );
};

export default App;
