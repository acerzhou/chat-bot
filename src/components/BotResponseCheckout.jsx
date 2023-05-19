import styled from "styled-components";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import { getUserInfo } from "../lib/userInfo";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  flex-warp: wrap;
`;

const CheckoutButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

const PaymentContainer = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Payment() {
  return (
    <PaymentContainer>
      <div>Payment</div>
    </PaymentContainer>
  );
}

const UserInfoContainer = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function UserInfo() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function callUserInfo() {
      const userInfo = await getUserInfo();
      setUserInfo(userInfo);
    }

    callUserInfo();
  }, []);

  return (
    <UserInfoContainer>
      <div>UserName: {userInfo.name}</div>
      <div>Phone Number: {userInfo.phoneNumber}</div>
      <div>Address: {userInfo.address}</div>
    </UserInfoContainer>
  );
}

const DeliveryOptionsContainer = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function DeliveryOptions() {
  return (
    <DeliveryOptionsContainer>
      <div>Delivery - 10.0</div>
      <div>Click & Collect - 0.0</div>
    </DeliveryOptionsContainer>
  );
}

export default function BotResponseCheckout({ cart, handleCartItemDelete }) {
  const [localCart, setLocalCart] = useState(cart);

  function handleCartUpdate(product) {
    const newCart = { ...cart };
    const newItems = cart.items.filter((item) => item.id !== product.id);

    newCart.items = newItems;
    setLocalCart(newCart);
    handleCartItemDelete(product);
  }

  return localCart.items.length > 0 ? (
    <div>
      <BotResponseMessagesContainer>
        <UserInfo />
        {localCart.items.map((item, index) => {
          return (
            <CartItem
              key={index}
              item={item}
              handleCartUpdate={handleCartUpdate}
            />
          );
        })}
      </BotResponseMessagesContainer>
      <div>Delivery Options</div>
      <DeliveryOptions />
      <div>Payment Info</div>
      <Payment />
      <CheckoutButton>Place the order</CheckoutButton>
    </div>
  ) : (
    <div>Cart is empty</div>
  );
}
