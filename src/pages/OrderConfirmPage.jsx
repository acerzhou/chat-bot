import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
`;

const OrderConfirmMessage = styled.h1`
  width: 50%;
`;

const HomePageButton = styled(Link)`
  width: 300px;
  min-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default function OrderConfirmPage() {
  return (
    <Container>
      <OrderConfirmMessage>
        Congrats! Your order has been confirmed. We will contact you for pickup
        / delivery.
      </OrderConfirmMessage>
      <HomePageButton to={"/"}>Go To Home Page</HomePageButton>
    </Container>
  );
}
