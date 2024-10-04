import React, { useContext } from "react";
import { myContext } from "../App";

const CompA = () => {
  const [value, setValue] = useContext(myContext);

  const handleSubmit = () => {
    setValue((val) => val + 1);
  };

  return (
    <div>
      <h1>Component A </h1>
      <h2>Value : {value}</h2>
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
};

export default CompA;
