// write a jsx compoenent
import styled from "styled-components";
import { useState } from "react";
import UserInputMessage from "./UserInputMessage";
import BotResponseMessages from "./BotResponseMessages";
import sendText from "../lib/lex";

const ChatBotContainer = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  border: 1px solid black;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  position: fixed;
  bottom: 10px;
`;

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setMessages((messages) => [
        ...messages,
        { message: input, type: "userInput" },
      ]);

      const data = sendText(input);
      setInput("");

      if (data.messages) {
        setMessages((messages) => [
          ...messages,
          { message: data.messages[0].value, type: "botResponse" },
        ]);
      }
    }
  }

  return (
    <ChatBotContainer>
      {messages.map((message, index) => {
        if (message.type === "userInput") {
          return <UserInputMessage key={index} message={message.message} />;
        } else {
          return <BotResponseMessages key={index} message={message.message} />;
        }
      })}

      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </ChatBotContainer>
  );
}
