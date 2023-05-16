import styled from "styled-components";
import { Link } from "react-router-dom";
const ProductImage = styled.img`
  width: ${(props) => (props.isBot ? "100px" : "340px")};
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  dispaly: flex;
  justify-content: center;
`;

export default function ProductContent({ product, isBot = false }) {
  async function UpdateCart() {}

  return (
    <>
      <StyledLink to={`/product/${product.id}`} state={{ product: product }}>
        <ProductImage src={product.image} alt={product.name} isBot={isBot} />

        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductInfo>
      </StyledLink>
      <CartButton isBot={isBot}>Add To Cart</CartButton>
    </>
  );
}
