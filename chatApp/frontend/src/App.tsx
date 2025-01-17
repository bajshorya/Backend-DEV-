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
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <header className="text-center p-4 text-xl font-semibold bg-gray-800 shadow-md">
        <h1>Chat Room</h1>
      </header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className="flex items-center">
            <span className="inline-block max-w-[80%] p-4 bg-gray-700 text-white rounded-lg shadow-md">
              {message}
            </span>
          </div>
        ))}
      </main>

      <footer className="flex items-center p-4 bg-gray-800 shadow-inner">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border-none focus:ring-2 focus:ring-purple-500"
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
          className="ml-4 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 transition-all"
        >
          Send
        </button>
      </footer>
    </div>
  );
}

export default App;
