import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTempUrl,getPermUrl } from "./userInputSlice";
import { useState } from "react";
import "./App.css";



function App() {


  // const [tmpurl, settmpurl] = useState("https://jsonplaceholder.typicode.com/users");
  // const handlebtnchange = (e) => {
  //   settmpurl(e.target.value);
  // };

  const url = useSelector((state)=> state.userInput.permUrl)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <input placeholder="Please Enter URL to get Data"  onChange={(event) => dispatch(getTempUrl(event.target.value))} ></input>
      <button onClick={() => dispatch(getPermUrl())}>Submit</button>
      <h1>User Link : {url}</h1>
    </div>
  );
}

export default App;
