import styled from "styled-components";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
`;

const InfoItem = styled.div`
  margin: 10px 0;
`;

const Option = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0;
  background-color: white;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
`;

export default function BotInitialMessage({
  message,
  handleInteractButtonClick,
}) {
  return (
    <BotResponseMessagesContainer>
      <InfoItem>{message.title}</InfoItem>

      {message.buttons.map((button, index) => {
        return (
          <Option key={index} onClick={() => handleInteractButtonClick(button)}>
            {button}
          </Option>
        );
      })}
    </BotResponseMessagesContainer>
  );
}
