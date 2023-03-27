import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTempUrl, getPermUrl } from "./Reducer/userInputSlice";
import UserDataView from "./Action/userDataView";
import "./App.css";

function App() {
  const [number, setnumber] = useState(1);

  const onchange = (e) => {
    setnumber(Number(e.target.value));
  };

  const factorial=useMemo(()=>factotialof(number),[number]);

  return (
    <div className="App">
      factorial of
      <input value={number} onChange={onchange}/>
      is {factorial}
    </div>
  );
}

export default App;

function factotialof(n) {
  return n <= 0 ? 1 : n * factotialof(n - 1);
}
