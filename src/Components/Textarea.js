import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-success mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        {/* <button className="btn btn-success mx-2" onClick={handleInClick}>
          Convert to InverseCase
        </button> */}
      </div>
      <div className="container">
              <h1>Your text summary</h1>
              <p>{text.split(" ").length} words and {text.length} characters</p>
              <p>{text.split(" ").length * 0.008}  minutes to read</p>
              <h1>Preview</h1>
              <p> {text} </p>
      </div>
    </>
  );
}
