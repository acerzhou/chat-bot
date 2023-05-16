import styled from "styled-components";
import BotResponseUserInfo from "./BotResponseUserInfo";
import BotResponseProduct from "./BotResponseProduct";
import CartItem from "./CartItem";

const BotResponseMessagesContainer = styled.div`
  width: 100%;
  min-height: 40px;
  padding: 20px;
  background-color: lightblue;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const BotAvatar = styled.div`
  width: 30px;
  height: 30px;
  background-color: yellow;
  border-radius: 50%;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

export default function BotResponseMessages({ message, type }) {
  return (
    <BotResponseMessagesContainer>
      <BotAvatar>B</BotAvatar>
      {type === "CustomPayload" && JSON.parse(message).type === "userInfo" && (
        <BotResponseUserInfo userInfo={JSON.parse(message)} />
      )}
      {type === "CustomPayload" && JSON.parse(message).type === "product" && (
        <BotResponseProduct product={JSON.parse(message)} />
      )}
      {type === "CustomPayload" &&
        JSON.parse(message).type === "cart" &&
        JSON.parse(message).items.map((item, index) => {
          return <CartItem key={index} item={item} />;
        })}
      {type === "PlainText" && message}
    </BotResponseMessagesContainer>
  );
}
