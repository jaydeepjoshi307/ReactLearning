import logo from "./logo.svg";
// import "./App.css";
import Home from "./home";
import Fetchdata from "./fetchdata";
import React, { useState, useEffect, useRef } from "react";

function App() {
 
  //fetch the data from api using fetch and pass to child component
  //send the data from child to parent component

  // Question 1 : how to take url as input from user and pass it fetchdata api ??
      
  const url = "https://jsonplaceholder.typicode.com/users";

  const [records,setRecords] = useState([]);

  const onSaveData = (collectData) => {
    setRecords(collectData); 
    console.log("From App.js");
    // console.log(data);
  }
  
  return (
    <div className="App">
      <Fetchdata onCollectData={onSaveData} url={url}/>
      <Home userData={records}></Home>
    </div>
  );
}

export default App;
