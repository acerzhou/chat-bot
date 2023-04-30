import styled from "styled-components";

const BotResponseMessagesContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export default function BotResponseMessages({ message }) {
  return <BotResponseMessagesContainer>{message}</BotResponseMessagesContainer>;
}
