import React, { useState } from "react";

function Textform(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const handleChange = (event) => {
    //onchange fucntion is use for handle text value
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowerrcase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleSpaces}>
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h2> your text summary</h2>
        <p>
          {" "}
          Total words {text.length}, {text.split(" ").length} characters here
        </p>
        <h3> preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
