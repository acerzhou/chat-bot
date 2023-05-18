import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getUserInfo } from "../lib/userInfo";
import { getCart } from "../lib/cart";
import CartItem from "../components/CartItem";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const OrderConfirmButton = styled(Link)`
  width: 300px;
  min-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

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

function Cart({ cart }) {
  return (
    <div>
      {cart.items.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
    </div>
  );
}

export default function CheckoutPage() {
  const [cart, setCart] = useState({ items: [] });
  console.log(cart);
  useEffect(() => {
    async function CallCartApi() {
      const cart = await getCart();
      console.log("cart", cart);
      setCart(cart);
    }

    CallCartApi();
  }, []);

  return (
    <Container>
      <h1>Checkout Page</h1>
      <div>User info</div>
      <UserInfo />

      <Cart cart={cart} />
      <div>Delivery Options</div>
      <DeliveryOptions />
      <div>Payment Info</div>
      <Payment />
      <OrderConfirmButton to={"/order-confirm"}>
        Confirm Order
      </OrderConfirmButton>
    </Container>
  );
}
