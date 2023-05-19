import styled from "styled-components";
import BotResponseUserInfo from "./BotResponseUserInfo";
import BotResponseProduct from "./BotResponseProduct";
import BotResponseCart from "./BotResponseCart";
import BotResponseCheckout from "./BotResponseCheckout";
import BotResponsePlaceOrder from "./BotResponsePlaceOrder";
import BotInitialMessage from "./BotInitialMessage";
import BotResponseUpdateUserName from "./BotResponseUpdateUserName";

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

export default function BotResponseMessages({
  message,
  type,
  handleCartItemDelete,
  handleUpdateCart,
  handleInteractButtonClick,
  userInfo,
  handleUserNameUpdate,
}) {
  console.log("BotResponseMessages", message, type);
  return (
    <BotResponseMessagesContainer>
      <BotAvatar>B</BotAvatar>
      {type === "CustomPayload" && JSON.parse(message).type === "userInfo" && (
        <BotResponseUserInfo userInfo={JSON.parse(message)} />
      )}
      {type === "CustomPayload" && JSON.parse(message).type === "product" && (
        <BotResponseProduct
          product={JSON.parse(message)}
          handleUpdateCart={handleUpdateCart}
        />
      )}
      {type === "CustomPayload" && JSON.parse(message).type === "cart" && (
        <BotResponseCart
          cart={JSON.parse(message)}
          handleCartItemDelete={handleCartItemDelete}
        />
      )}
      {type === "CustomPayload" && JSON.parse(message).type === "checkout" && (
        <BotResponseCheckout
          cart={JSON.parse(message)}
          handleCartItemDelete={handleCartItemDelete}
          handleInteractButtonClick={handleInteractButtonClick}
        />
      )}
      {type === "CustomPayload" &&
        JSON.parse(message).type === "updateUserInfo" && (
          <BotResponseUpdateUserName
            userInfo={userInfo}
            handleUserNameUpdate={handleUserNameUpdate}
          />
        )}
      {type === "CustomPayload" &&
        JSON.parse(message).type === "placeOrder" && <BotResponsePlaceOrder />}
      {type === "CustomPayload" && JSON.parse(message).type === "initial" && (
        <BotInitialMessage
          message={JSON.parse(message)}
          handleInteractButtonClick={handleInteractButtonClick}
        />
      )}
      {type === "PlainText" && message}
    </BotResponseMessagesContainer>
  );
}
