import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCart } from "../lib/cart";

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
`;

const ItemContainer = styled.div`
  width: 600px;
  min-height: 100px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function CheckoutItem() {
  return (
    <ItemContainer>
      <div>Image</div>
      <div>Product Name</div>
      <div>Product Price</div>
      <div>Quantity</div>
      <div>Remove</div>
      <div>Sku</div>
    </ItemContainer>
  );
}
export default function CartPage() {
  const [cart, setCart] = useState({});
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
      <h1>CartPage</h1>
      <CheckoutItem />
      <CheckoutButton to={"/checkout"}>Checkout</CheckoutButton>
    </Container>
  );
}
