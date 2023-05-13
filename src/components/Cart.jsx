import styled from "styled-components";
import { Link } from "react-router-dom";

const CartContainer = styled(Link)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  right: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Cart() {
  return <CartContainer to={"/cart"}>Cart</CartContainer>;
}
