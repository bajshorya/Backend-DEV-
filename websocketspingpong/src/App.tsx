import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  function sendMessage() {
    console.log("Message sent!");
    const msg = inputRef.current?.value;
    if (msg !== undefined) {
      socket?.send(msg);
    }
  }
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (message) => {
      alert(message.data);
    };
  }, []);
  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="Message...." />
        <button onClick={sendMessage}>Send</button>{" "}
      </div>
    </>
  );
}

export default App;
