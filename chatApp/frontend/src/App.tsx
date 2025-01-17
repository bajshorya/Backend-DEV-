import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(["hi there"]);
  const wsRef = useRef<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        })
      );
    };
    return () => {
      ws.close();
    };
  }, []);
  return (
    <div className="">
      <div className="h-screen bg-black  ">
        <br />
        <br />
        <br />
        <div className="h-[80vh]">
          {messages.map((message, index) => (
            <div className="m-4">
              <span key={index} className="p-4 bg-white  rounded-md text-black">
                {message}
              </span>
            </div>
          ))}
        </div>

        <div className="h-[20vh] w-full bg-slate flex p-4">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 border border-black bg-slate-500"
          />
          <button
            onClick={() => {
              const message = inputRef.current?.value;
              wsRef.current?.send(
                JSON.stringify({
                  type: "chat",
                  payload: {
                    message: message,
                  },
                })
              );
            }}
            className="bg-black text-white p-4 rounded-md hover:cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
