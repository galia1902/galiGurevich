import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Main from "./Main";
import Main1 from "./Main1"
const ENDPOINT = "http://127.0.0.1:4001";


function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("tick", (data) => {
      setResponse(data);
    });
  }, []);

  // console.log(response);


  let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
  let itemList=[];
  items.forEach((item,index)=>{
    itemList.push( <li key={index}> {item} </li> )
  })


  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Tradair Coding Assignment</h1>
        <Main
        items={items}
        />
      </div>

    </>
  );
}

export default App;
