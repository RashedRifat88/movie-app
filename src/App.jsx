// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { MovieContext, ThemeContext } from "./context";
import { useReducer, useState } from "react";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const[state, dispatch]  = useReducer(cartReducer, initialState);

  return (
    <div>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        {/* <MovieContext.Provider value={{ cartData, setCartData }}> */}
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer position="bottom-right" />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
