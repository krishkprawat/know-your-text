import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("enter the text");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary"> Convert to uppercase</button>
    </div>
  );
}

export default Textform;
