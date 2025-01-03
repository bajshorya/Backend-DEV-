import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [socket, setSocket] = useState();
  function sendMessage() {
    console.log("Message sent!");
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (message) => {
      alert(message.data);
    };
  }, []);
  return (
    <>
      <div>
        <input type="text" placeholder="Message...." />
        <button onClick={sendMessage}>Send</button>{" "}
      </div>
    </>
  );
}

export default App;
