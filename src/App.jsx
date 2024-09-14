// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {

  return (
    <>
      <Header />

      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
        </div>
      </main >

    </>
  );
}

export default App;
