import styled from "styled-components";

const UserInputMessageContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export default function UserInputMessage({ message }) {
  return <UserInputMessageContainer>{message}</UserInputMessageContainer>;
}
