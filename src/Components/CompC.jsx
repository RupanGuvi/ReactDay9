import React, { useContext } from "react";
//import { myContext } from "../App";

const CompC = () => {
  const [value, setValue] = useContext(myContext);
  const handleSubmit = () => {
    setValue((val) => val + 10);
  };
  return (
    <div>
      <h1>Component C </h1>
      <h2>Value : {value}</h2>
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default CompC;
