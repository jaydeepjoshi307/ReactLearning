import React, { useEffect, useState } from "react";
import Home from "./home";
import  {getUserList}  from "./services/userservice";

const Fetchdata = (props) => {
  const url = props.url;
  const [records, setRecords] = useState([]);
  // console.log("URL : " , url);

  useEffect(() => {
    getuserdata(url);
  }, []);

  const getuserdata = (url) => {
    getUserList(url).then((res)=>{
      if(res && res.data.length>0)
      setRecords(res.data);
      else setRecords([]);
      console.log(res);
    });
  };
  props.onCollectData(records);
  // console.log(records);

  return <div>{/* <Home userData={records}></Home> */}</div>;
};

export default Fetchdata;
