import React from "react";
const Child = () => {
  console.log("rerenderd");
  return <p>hello</p>;
};

export default React.memo(Child);
