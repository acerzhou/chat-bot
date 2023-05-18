export async function getCart() {
  const userInfo = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/cart/"
  );

  return userInfo.json();
}

export async function updateCart(userInfo) {
  const response = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/cart/",
    {
      method: "POST",
      body: JSON.stringify(userInfo),
    }
  );

  console.log("update cart response", response);
}
