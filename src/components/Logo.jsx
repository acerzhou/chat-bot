import styled from "styled-components";

const CartContainer = styled.h1`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Logo() {
  return <CartContainer>Good HIFI</CartContainer>;
}
