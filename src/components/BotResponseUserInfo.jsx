import styled from "styled-components";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
`;

const InfoItem = styled.div`
  margin: 10px 0;
`;
export default function BotResponseUserInfo({ userInfo }) {
  return (
    <BotResponseMessagesContainer>
      <InfoItem>User Name : {userInfo.name}</InfoItem>
      <InfoItem>Phone Number: {userInfo.phoneNumber}</InfoItem>
      <InfoItem>Address: {userInfo.address}</InfoItem>
    </BotResponseMessagesContainer>
  );
}
