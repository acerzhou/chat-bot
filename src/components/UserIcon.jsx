import styled from "styled-components";

const UserIconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
  position: absolute;
  top: 20px;
  right: 30px;
`;

export default function UserIcon({ handleUserIcnoClick }) {
  return <UserIconContainer onClick={handleUserIcnoClick}></UserIconContainer>;
}
