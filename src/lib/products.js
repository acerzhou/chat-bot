export async function getProducts() {
  const userInfo = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/products/"
  );

  return userInfo.json();
}
