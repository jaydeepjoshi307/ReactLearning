
// import "./App.css";
import Home from "./home";
import Fetchdata from "./fetchdata";
import React, { useState, useEffect, useRef } from "react";

function App() {
  //fetch the data from api using fetch and pass to child component
  //send the data from child to parent component

  // Question 1 : how to take url as input from user and pass it fetchdata api ??

  //const url = "https://jsonplaceholder.typicode.com/users";


  //task 24/march/2023
//setup redux in your application
//install  neccesory packages
//use redux thunk as middleware
//use constant for actions, do not hardcode actions name
//create different folder for actions/reducer/store
//New branch is created !! reduxStore

  const [records, setRecords] = useState([]);
  const [url, seturl] = useState(null);
  const [tmpurl, settmpurl] = useState("https://jsonplaceholder.typicode.com/users");


  const onSaveData = (collectData) => {
    setRecords(collectData);
    console.log("From App.js");
    // console.log(data);
  };
  const handlebtnchange = (e) => {
    settmpurl(e.target.value);
  };
  const handlebtnClick=()=>{
    seturl(tmpurl);
  }
  return (
    <div className="App">
      <input
        placeholder="Enter the URL"
        value={url}
        onChange={handlebtnchange}
      ></input>
      <button onClick={handlebtnClick}>Submit</button>
      {url && <Fetchdata onCollectData={onSaveData} url={url} />}
      <Home userData={records}></Home>
    </div>
  );
}

export default App;
