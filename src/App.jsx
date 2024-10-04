import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

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
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
};

export default App;
