import "./App.css";
import ChatBot from "./components/ChatBot";
import styled from "styled-components";
import { useEffect, useState } from "react";
import UserIcon from "./components/UserIcon";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import { getUserInfo } from "./lib/userInfo";
import UserInfo from "./components/UserInfo";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  padding-top: 100px;
`;

const SideButton = styled.div`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.isChatBotShow ? "80%" : "0")};
  height: 100px;
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  z-index: 1000;
`;

function App() {
  const [isChatBotShow, setIsChatBotShow] = useState(false);
  const [isUserInfoShow, setIsUserInfoShow] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function callUserInfo() {
      const userInfo = await getUserInfo();
      setUserInfo(userInfo);
    }
    callUserInfo();
  }, []);

  function handleUserInfoClick() {
    setIsUserInfoShow(!isUserInfoShow);
  }

  return (
    <Container>
      <UserIcon handleUserIcnoClick={handleUserInfoClick} />
      <Navigation />
      <Carousel />
      <SideButton
        onClick={() => setIsChatBotShow(!isChatBotShow)}
        isChatBotShow={isChatBotShow}
      >
        Chat Bot
      </SideButton>
      {isChatBotShow && <ChatBot />}
      {isUserInfoShow && (
        <UserInfo
          userInfo={userInfo}
          handleUserInfoClick={handleUserInfoClick}
        />
      )}
    </Container>
  );
}

export default App;
