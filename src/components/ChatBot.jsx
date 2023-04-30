// write a jsx compoenent
import styled from "styled-components";
import { useState } from "react";
import UserInputMessage from "./UserInputMessage";

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
  const [input, setInput] = useState("");
  return (
    <ChatBotContainer>
      <UserInputMessage message={input} />
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </ChatBotContainer>
  );
}
