import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
//import About from "./components/about";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled..", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled..", "success");
    }
  };
  return (
    <>
      <Navbar title="textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/*<About mode={mode} />*/}

        <Textform
          showAlert={showAlert}
          heading="Try Textutils: Play with texts."
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
