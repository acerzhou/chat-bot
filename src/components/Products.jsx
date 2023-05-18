import styled from "styled-components";
import Product from "./Product";

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  gap: 60px;
  justify-content: center;
`;

export default function Products({ products, handleUpdateCart }) {
  return (
    <ProductsContainer>
      {products.items.map((product, index) => {
        return (
          <Product
            product={product}
            key={index}
            handleUpdateCart={handleUpdateCart}
          />
        );
      })}
    </ProductsContainer>
  );
}
