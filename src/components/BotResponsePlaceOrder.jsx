import styled from "styled-components";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
`;

const InfoItem = styled.div`
  margin: 10px 0;
`;
export default function BotResponsePlaceOrder() {
  return (
    <BotResponseMessagesContainer>
      <InfoItem>Order Placed Successfully</InfoItem>
    </BotResponseMessagesContainer>
  );
}
