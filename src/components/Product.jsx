import styled from "styled-components";
import ProductContent from "./ProductContent";

const ProductContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default function Product({ product, handleUpdateCart }) {
  return (
    <ProductContainer>
      <ProductContent product={product} handleUpdateCart={handleUpdateCart} />
    </ProductContainer>
  );
}
