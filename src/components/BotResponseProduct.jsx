import styled from "styled-components";
import BotProduct from "./BotProduct";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
  display: flex;
  gap: 20px;
  flex-warp: wrap;
`;

export default function BotResponseProduct({ product, handleUpdateCart }) {
  return (
    <BotResponseMessagesContainer>
      {product.items.map((item, index) => {
        return (
          <BotProduct
            key={index}
            product={item}
            handleUpdateCart={handleUpdateCart}
          />
        );
      })}
    </BotResponseMessagesContainer>
  );
}
