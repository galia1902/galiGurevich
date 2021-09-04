import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Main from "./Main";
import Response from "./response"
const ENDPOINT = "http://127.0.0.1:4001";


function App() {
  const [response, setResponse] = useState([]);


  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("tick", (data) => {
      setResponse(data);
    });
  }, []);

  console.log(response);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Tradair Coding Assignment</h1>
        <Main
         responseCurrency = {response.map(memb => <div>{memb.currencyPairName}</div>)}
        />
      </div>
    </>
  );
}

export default App;




