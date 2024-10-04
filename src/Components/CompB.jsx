import React, { useContext } from "react";
import { myContext } from "../App";
import CompC from "./CompC";

const CompB = () => {
  const [value, setValue] = useContext(myContext);
  const handleSubmit = () => {
    setValue((val) => val - 1);
  };

  return (
    <div>
      <h1>Component B </h1>
      <h2>Value : {value}</h2>
      <button onClick={handleSubmit}>Click</button>
      <CompC />
    </div>
  );
};

export default CompB;
