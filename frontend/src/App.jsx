import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(latitude);
      console.log(longitude);
    });
  }, []);
  return <div>App</div>;
};

export default App;
