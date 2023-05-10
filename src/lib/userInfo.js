export async function getUserInfo() {
  const userInfo = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/user-info/"
  );

  return userInfo.json();
}

export async function updateUserInfo(userInfo) {
  const response = await fetch(
    "https://il3b62aiu5.execute-api.ap-southeast-2.amazonaws.com/Prod/user-info/",
    {
      method: "POST",
      body: JSON.stringify(userInfo),
    }
  );

  return response.json();
}
