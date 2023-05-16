import styled from "styled-components";
import ProductContent from "./ProductContent";

const ProductContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default function BotProduct({ product }) {
  return (
    <ProductContainer>
      <ProductContent product={product} isBot={true} />
    </ProductContainer>
  );
}
