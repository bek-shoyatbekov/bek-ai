import React, { useEffect, useRef } from "react";

import "./MessageList.module.css";

export interface Message {
  sender: string; // Name of the sender (you/other user)
  content: string; // Content of the message
  isSent: boolean; // Flag indicating if the message was sent by you
}

const MessageList: React.FC<{ messages: Message[] }> = ({ messages }) => {
  const messageListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Scroll to the bottom of the message list whenever messages change
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <ul className="message-list" ref={messageListRef}>
      {messages.map((message) => (
        <li
          key={message.content} // Use unique key for each message
          className={message.isSent ? "sent-message" : "received-message"}
        >
          <p>{message.content}</p>
          {message.sender && <span className="sender">{message.sender}</span>}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
