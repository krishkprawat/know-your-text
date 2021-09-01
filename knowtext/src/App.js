import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
//import About from "./components/about";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="Know-your-Text" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter your text" mode={mode} />
      </div>
    </>
  );
}

export default App;
