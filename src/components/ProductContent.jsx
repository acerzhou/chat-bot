import styled from "styled-components";
import { Link } from "react-router-dom";
const ProductImage = styled.img`
  width: ${(props) => (props.isBot ? "100px" : "340px")};
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const DisabledProductPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-decoration: line-through;
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

export default function ProductContent({
  product,
  isBot = false,
  handleUpdateCart,
}) {
  return (
    <>
      <StyledLink to={`/product/${product.id}`} state={{ product: product }}>
        <ProductImage src={product.image} alt={product.name} isBot={isBot} />

        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          {product.prmotionPrice ? (
            <DisabledProductPrice>{product.price}</DisabledProductPrice>
          ) : (
            <ProductPrice>{product.price}</ProductPrice>
          )}
          {product.promotionPrice && (
            <ProductPrice>{product.promotionPrice}</ProductPrice>
          )}
        </ProductInfo>
      </StyledLink>
      <CartButton isBot={isBot} onClick={() => handleUpdateCart(product)}>
        Add To Cart
      </CartButton>
    </>
  );
}
