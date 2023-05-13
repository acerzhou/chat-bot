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

const ChatBotMessagesContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  position: fixed;
  bottom: 10px;
`;

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      type: "botResponse",
      message: {
        content: "Hello, how can I help you?",
        contentType: "plainText",
      },
    },
  ]);
  const [input, setInput] = useState("");
  const [slots, setSlots] = useState(null);

  async function handleKeyPress(event) {
    if (event.key === "Enter") {
      setMessages((messages) => [
        ...messages,
        { message: { content: input, type: "plainText" }, type: "userInput" },
      ]);

      const data = await sendText(input, slots);
      setInput("");

      console.log(data);
      setSlots(data.sessionState.intent.slots);

      if (data.messages) {
        setMessages((messages) => [
          ...messages,
          { message: data.messages[0], type: "botResponse" },
        ]);
      }
    }
  }

  return (
    <ChatBotContainer>
      <ChatBotMessagesContainer>
        {messages.map((message, index) => {
          if (message.type === "userInput") {
            return (
              <UserInputMessage key={index} message={message.message.content} />
            );
          } else {
            return (
              <BotResponseMessages
                key={index}
                message={message.message.content}
                type={message.message.contentType}
              />
            );
          }
        })}
      </ChatBotMessagesContainer>

      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </ChatBotContainer>
  );
}
