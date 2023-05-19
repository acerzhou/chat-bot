import styled from "styled-components";
import { useState } from "react";

const BotResponseMessagesContainer = styled.div`
  padding: 20px 0;
`;

export default function BotResponseUpdateUserName({
  userInfo,
  handleUserNameUpdate,
}) {
  const [userName, setUserName] = useState("");
  return (
    <BotResponseMessagesContainer>
      <div>What's your new user name</div>
      <div>Current username is - {userInfo.name}</div>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button onClick={() => handleUserNameUpdate(userName)}>Submit</button>
    </BotResponseMessagesContainer>
  );
}
