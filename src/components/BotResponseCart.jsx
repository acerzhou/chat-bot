import styled from "styled-components";
import CartItem from "./CartItem";
import { useState } from "react";

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

export default function BotResponseCart({ cart, handleCartItemDelete }) {
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
      <CheckoutButton>Checkout</CheckoutButton>
    </div>
  ) : (
    <div>Cart is empty</div>
  );
}
