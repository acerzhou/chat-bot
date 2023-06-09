import styled from "styled-components";

const ItemContainer = styled.div`
  width: 600px;
  min-height: 100px;
  border: 1px solid black;
  display: flex;
  gap: 10px;
  padding: 20px;
  gap: 20px;
  juestify-content: space-between;
`;

const ProductImage = styled.img`
  width: 200px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RemoveButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
`;

export default function CartItem({ item, handleCartUpdate }) {
  return (
    <ItemContainer>
      <ProductImage src={item.image} alt={item.name} />
      <ProductInfo>
        <div>{item.sku}</div>
        <div>{item.name}</div>
        <div>$ {item.price}</div>
      </ProductInfo>
      <QuantityContainer>
        <div>{item.quantity}</div>
        <RemoveButton onClick={() => handleCartUpdate(item)}>
          Remove
        </RemoveButton>
      </QuantityContainer>
    </ItemContainer>
  );
}
