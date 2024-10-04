import React, { createContext, useState } from "react";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";


//export const myContext = createContext("");

const App = () => {
  //const [value, setValue] = useState(0);

  return (
    <div>
      {/* <h1>The value in App Component: {value}</h1>

      <myContext.Provider value={[value, setValue]}>
        <CompA />
        <CompB />
      </myContext.Provider> */}
    </div>
  );
};

export default App;
