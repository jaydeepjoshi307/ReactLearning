import './App.css';import React, { useState } from "react";
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function App() {
  
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="App">
      <div>
        <CakeContainer/>
        <IceCreamContainer/>  
        <UserContainer url={url}/>
         
      </div>
    </div>
  );
}

export default App;
