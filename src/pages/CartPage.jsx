import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { useLocation } from "react-router-dom";
import { updateCart } from "../lib/cart";
import { useEffect, useState } from "react";

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
  const location = useLocation();
  const { cart } = location.state;
  const [localCart, setCart] = useState(cart);

  async function handleCartUpdate(product) {
    cart.items = cart.items.filter((item) => item.id !== product.id);

    setCart((prev) => ({ ...prev, items: cart.items }));

    await updateCart(cart);
  }

  return (
    <Container>
      <h1>CartPage</h1>
      {localCart.items.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            handleCartUpdate={handleCartUpdate}
          />
        );
      })}
      <CheckoutButton to={"/checkout"}>Checkout</CheckoutButton>
    </Container>
  );
}
