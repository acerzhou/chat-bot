import "./App.css";
import ChatBot from "./components/ChatBot";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

function App() {
  const [isChatBotShow, setIsChatBotShow] = useState(false);

  return (
    <Container>
      this is home page
      <div>
        <button onClick={() => setIsChatBotShow(!isChatBotShow)}>
          chat bot{" "}
        </button>
      </div>
      {isChatBotShow && <ChatBot />}
    </Container>
  );
}

export default App;
