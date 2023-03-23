import React, { useEffect, useState } from 'react'
import Home from './home';

const Fetchdata = (props) => {
  
    const url = props.url;
    const [records,setRecords] = useState([]);
    // console.log("URL : " , url);

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(error => console.log(error))
    },[])

    props.onCollectData(records);
    // console.log(records);

    return (
    <div>
      {/* <Home userData={records}></Home> */}

    </div>
  )
}

export default Fetchdata;
