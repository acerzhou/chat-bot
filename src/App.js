import "./App.css";
import ChatBot from "./components/ChatBot";
import styled from "styled-components";
import { useEffect, useState } from "react";
import UserIcon from "./components/UserIcon";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import { getUserInfo } from "./lib/userInfo";
import UserInfo from "./components/UserInfo";
import { getProducts } from "./lib/products";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { getCart, updateCart } from "./lib/cart";

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
  const [messages, setMessages] = useState([
    {
      type: "botResponse",
      message: {
        content: "Hello, how can I help you?",
        contentType: "PlainText",
      },
    },
  ]);

  const [isChatBotShow, setIsChatBotShow] = useState(false);
  const [isUserInfoShow, setIsUserInfoShow] = useState(false);
  const [products, setProducts] = useState({ items: [] });
  const [userInfo, setUserInfo] = useState(null);
  const [cart, setCart] = useState({ type: "cart", items: [] });

  useEffect(() => {
    async function callUserInfo() {
      const userInfo = await getUserInfo();
      setUserInfo(userInfo);
    }

    async function callProductApi() {
      const products = await getProducts();
      setProducts(products);
      console.log(products);
    }

    async function CallCartApi() {
      const cart = await getCart();
      setCart(cart);
      console.log(cart);
    }

    CallCartApi();
    callUserInfo();
    callProductApi();
  }, []);

  function handleUserInfoClick() {
    setIsUserInfoShow(!isUserInfoShow);
  }

  async function handleUpdateCart(product) {
    console.log("add cart button click", product);
    const newCart = { ...cart };
    const newItems = [...newCart.items];
    const foundIndex = newItems.findIndex((item) => item.id === product.id);
    if (foundIndex >= 0) {
      newItems[foundIndex].quantity += 1;
    } else {
      newItems.push({ ...product, quantity: 1 });
    }

    console.log("new cart", newCart);
    newCart.items = newItems;
    setCart(newCart);

    await updateCart(newCart);
  }

  async function handleCartItemDelete(product) {
    console.log("delet button click", product);
    const newCart = { ...cart };
    const newItems = cart.items.filter((item) => item.id !== product.id);

    newCart.items = newItems;
    console.log("new cart", newCart);
    setCart(newCart);

    await updateCart(newCart);
  }

  return (
    <Container>
      <UserIcon handleUserIcnoClick={handleUserInfoClick} />
      <Cart cart={cart} />
      <Navigation />
      <Carousel />
      <SideButton
        onClick={() => setIsChatBotShow(!isChatBotShow)}
        isChatBotShow={isChatBotShow}
      >
        Chat Bot
      </SideButton>
      {isChatBotShow && (
        <ChatBot
          messages={messages}
          setMessages={setMessages}
          handleCartItemDelete={handleCartItemDelete}
        />
      )}
      {isUserInfoShow && (
        <UserInfo
          userInfo={userInfo}
          handleUserInfoClick={handleUserInfoClick}
        />
      )}
      <Products products={products} handleUpdateCart={handleUpdateCart} />
    </Container>
  );
}

export default App;
