import React, { useState } from "react";

function Textform(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase.", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase.", "success");
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra spaces removed..", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared..", "success");
  };

  const handleChange = (event) => {
    //onchange fucntion is use for handle text value
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
        >
          Convert to Lowerrcase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2> your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              //for remove, by default space which is showing in text summary//
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters here
        </p>
        <h3> preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textbox"}</p>
      </div>
    </>
  );
}

export default Textform;
