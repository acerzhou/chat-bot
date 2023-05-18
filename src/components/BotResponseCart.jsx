import styled from "styled-components";
import CartItem from "./CartItem";
import { useState } from "react";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  flex-warp: wrap;
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
  ) : (
    <div>Cart is empty</div>
  );
}
