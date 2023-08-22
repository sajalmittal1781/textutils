import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupclick = () => {
    setText(text.toUpperCase());
    text.length > 0
      ? props.showalert("Converted to UpperCase", "success")
      : props.showalert("enter text first", "danger");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handledownclick = () => {
    setText(text.toLowerCase());
    text.length > 0
      ? props.showalert("Converted to LowerCase! ", "success")
      : props.showalert("enter text first", "danger");
  };
  const handleclearclick = () => {
    setText("");

    text.length > 0
      ? props.showalert("Text Cleared!", "success")
      : props.showalert("enter text first", "danger");
  };
  const handlereverseclick = () => {
    setText(text.split("").reverse().join(""));
    text.length > 0
      ? props.showalert("Reverse paragraph", "success")
      : props.showalert("enter text first", "danger");
  };
  const handlecopy = () => {
    var data = document.getElementById("exampleFormControlTextarea1");
    data.select();
    navigator.clipboard.writeText(data.value);

    text.length > 0
      ? props.showalert("copy text", "success")
      : props.showalert("enter text first", "danger");
  };

  return (
    <div>
      <div
        className="my-3 container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#383838" : "white",
        }}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>

        <textarea
          className="form-control"
          value={text}
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#383838" : "white",
          }}
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>

        <button className="btn btn-primary my-2  mx-2" onClick={handleupclick}>
          {" "}
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handledownclick}>
          Convert to LowerCase{" "}
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handlereverseclick}
        >
          {" "}
          Reverse
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handlecopy}>
          {" "}
          Copy
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleclearclick}
        >
          {" "}
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "#383838" : "white",
        }}
      >
        <h1> Your Text Summary</h1>
        <p>
          {" "}
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} minutes required</p>
        <p> {text.split(".").length} word per sentence</p>

        <h1>Preview</h1>
        <p> {text.length > 0 ? text : "Enter Somethig to Preview it here"} </p>
      </div>
    </div>
  );
}
