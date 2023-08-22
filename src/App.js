import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#383838";
      showalert("dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        abouttitle="About us"
        mode={mode}
        toggle={toggle}
      />

      <Alert alert={alert} />
      <TextForm heading="Enter Your Text" mode={mode} showalert={showalert} />
    </>
  );
}

export default App;
