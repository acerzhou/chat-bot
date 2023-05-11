import styled from "styled-components";

const ProductContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 380px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default function Product({ product }) {
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />

      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductInfo>
    </ProductContainer>
  );
}
