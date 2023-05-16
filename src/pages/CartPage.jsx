import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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

const CheckoutButton = styled(Link)`
  width: 300px;
  min-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 20px;
`;

export default function CartPage() {
  const [cart, setCart] = useState({ items: [] });
  useEffect(() => {
    async function CallCartApi() {
      const cart = await getCart();
      setCart(cart);
      console.log(cart);
    }

    CallCartApi();
  }, []);

  return (
    <Container>
      <h1>CartPage</h1>
      {cart.items.map((item, index) => {
        return <CartItem key={index} item={item} />;
      })}
      <CheckoutButton to={"/checkout"}>Checkout</CheckoutButton>
    </Container>
  );
}
