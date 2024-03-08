import React, { useState } from "react";
import styles from "./Chatbar.module.css";
interface ChatbarProps {
  onSendMessage: (message: string) => void;
}

const Chatbar: React.FC<ChatbarProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <>
      <form className={styles.chatbar} onSubmit={handleSubmit}>
        <input
          className={styles.chatInput}
          type="text"
          placeholder="Ask something"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={styles.sendButton} type="submit">
          Send
        </button>
      </form>
      <p className={styles.footnote}>
        AI may produce inaccurate or incomplete responses. It uses GPT-3.5-turbo
      </p>
    </>
  );
};

export default Chatbar;
