import React, { useState } from "react";

function Textform(props) {
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleChange = (event) => {
    console.log("click changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("enter the text");

  return (
    <div>
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
      <button className="btn btn-primary" onClick={handleClick}>
        Convert to uppercase
      </button>
    </div>
  );
}

export default Textform;
