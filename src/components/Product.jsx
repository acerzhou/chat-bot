import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
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

const CartButton = styled.button`
  width: 80%;
  min-height: 50px;
`;

export default function Product({ product }) {
  return (
    <ProductContainer>
      <Link to={`/product/${product.id}`} state={{ product: product }}>
        <ProductImage src={product.image} alt={product.name} />

        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductInfo>
      </Link>
      <CartButton>Add To Cart</CartButton>
    </ProductContainer>
  );
}
