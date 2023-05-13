import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const ProductImage = styled.img`
  width: 380px;
`;

const ProductName = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const CartButton = styled.button`
  width: 300px;
  min-height: 50px;
`;

const BackHomeButton = styled(Link)`
  width: 300px;
  min-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export default function ProductPage() {
  const location = useLocation();
  const { product } = location.state;
  console.log(product.image);
  return (
    <Container>
      <ProductName>{product.name}</ProductName>
      <ProductName>{product.sku}</ProductName>
      <ProductImage src={product.image} alt={product.name} />
      <ProductPrice>PRICE: {product.price}</ProductPrice>
      <ProductName>{product.brand}</ProductName>
      <ProductName>{product.description}</ProductName>
      <CartButton>Add To Cart</CartButton>
      <BackHomeButton to="/">Back Home Page</BackHomeButton>
    </Container>
  );
}
