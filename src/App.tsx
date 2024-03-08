import { useState } from "react";

import "./App.css";
import Chatbar from "./components/Chatbar";
import Header from "./components/Header";
import MessageList, { Message } from "./components/MessageList";

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      content: "Hello, how are you?",
      isSent: true,
    },
    {
      sender: "user",
      content: "I'm doing well, thank you!",
      isSent: false,
    },
  ]);
  function handleSendMessage(message: string) {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: "You",
        content: message,
        isSent: true,
      },
    ]);
  }

  return (
    <>
      <Header title="Bek AI" />
      <div className="chat-container">
        <MessageList messages={messages} />
        <Chatbar onSendMessage={handleSendMessage} />
      </div>
    </>
  );
}

export default App;
