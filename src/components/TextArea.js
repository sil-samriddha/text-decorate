import React, {useState} from 'react'


export default function TextArea(prop) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const onclickSpeak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const onclickSDownload = () => {
      const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase()
      setText(newText)
    }
    const handleClear = () => {
      let newText = ""
      setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const[text, setText] = useState('')

    const [btnStyle, setBtnStyle] = useState("primary");
    
  return (
    <div className={`card-group`}>
      <div
        className={`card bg-${prop.mode} my-2 p-3 text-${
          prop.mode === "light" ? "dark" : "light"
        } border-light`}
      >
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{prop.heading}</h3>
        </label>
        <textarea
          className={`form-control bg-${prop.mode === "light"? "light" : btnStyle} text-${
            prop.mode === "light" ? "dark" : "light"
          } border-${prop.mode === "light" ? "dark" : "light"}`}
          id="exampleFormControlTextarea1"
          rows="18"
          placeholder="Write here something ..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="card-group my-3">
          <div className={`card text-center rounded mx-2  bg-${prop.mode} border border-${btnStyle}`} style={{width: "18rem"}}>
            <div className="card-body">
              <div className="btn btn-primary mx-1" onClick={()=>{setBtnStyle("primary")}} style={{height:"30px", width:"30px"}}></div>
              <div className="btn btn-danger mx-1" onClick={()=>{setBtnStyle("danger")}} style={{height:"30px", width:"30px"}}></div> 
              <div className="btn btn-warning mx-1" onClick={()=>{setBtnStyle("warning")}} style={{height:"30px", width:"30px"}}></div>
              <div className="btn btn-success mx-1" onClick={()=>{setBtnStyle("success")}} style={{height:"30px", width:"30px"}}></div>
              <div className="btn btn-info mx-1" onClick={()=>{setBtnStyle("info")}} style={{height:"30px", width:"30px"}}></div>
            </div>
          </div>
          <button
            type="button"
            className={`btn btn${
              prop.mode === "dark" ? "-outline" : ""
            }-${btnStyle} mx-1`}
            onClick={handleUpClick}
          >
            Uppercase
          </button>
          <button
            type="button"
            className={`btn btn${
              prop.mode === "dark" ? "-outline" : ""
            }-${btnStyle} mx-1`}
            onClick={handleLoClick}
          >
            Lowercase
          </button>
          <button
            type="button"
            className={`btn btn${
              prop.mode === "dark" ? "-outline" : ""
            }-${btnStyle} mx-1`}
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            type="button"
            className={`btn btn${
              prop.mode === "dark" ? "-outline" : ""
            }-${btnStyle} mx-1`}
            onClick={onclickSpeak}
          >
            Speak
          </button>
        </div>
        <button
          type="button"
          className={`btn btn${
            prop.mode === "dark" ? "-outline" : ""
          }-${btnStyle} mx-1`}
          onClick={onclickSDownload}
        >
          Download as Text file
        </button>
      </div>

      <div
        className={`card bg-${prop.mode} my-2 p-3 text-${
          prop.mode === "light" ? "dark" : btnStyle
        } border-light`}
      >
        <h3>Your text summary</h3>
        <div
          className="container border rounded border-light"
          style={{ fontFamily: "Lucida Console" }}
        >
          <p>
            {
              text.split(" ").filter((a) => {
                return a.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>
          <p>
            Read Time :{" "}
            {0.08 *
              text.split(" ").filter((a) => {
                return a.length !== 0;
              }).length}{" "}
            Minutes
          </p>
        </div>
        <h4>Preview</h4>
        <div
          className={`container border rounded border-${
            prop.mode === "light" ? "dark" : "light"
          }`}
          style={{ fontFamily: "Lucida Console", height: "100%" }}
        >
          {text.length === 0 ? "Nothing to preview" : text}
        </div>
      </div>
    </div>
  );
}
