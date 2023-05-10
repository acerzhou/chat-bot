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

const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function UserInputMessage({ message }) {
  return (
    <UserInputMessageContainer>
      <UserAvatar>U</UserAvatar>
      {message}
    </UserInputMessageContainer>
  );
}
