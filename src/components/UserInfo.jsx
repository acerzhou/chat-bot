import styled from "styled-components";
import { useState } from "react";
import { updateUserInfo } from "../lib/userInfo";

const UserInfoContainer = styled.div`
  min-width: 300px;
  padding: 40px;
  background-color: lightgray;
  position: absolute;
  top: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const ButtonCotnainer = styled.div`
  display: flex;
  gap: 20px;
`;

function ShowUserInfo({ userInfo, handleUserInfoClick, handleEditClick }) {
  return (
    <>
      <div>{userInfo.name}</div>
      <div>{userInfo.email}</div>
      <div>{userInfo.phoneNumber}</div>
      <div>{userInfo.address}</div>
      <ButtonCotnainer>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleUserInfoClick}>Cancel</button>
      </ButtonCotnainer>
    </>
  );
}

function EditUserInfo({ userInfo, handleUserInfoClick, handleSaveClick }) {
  const [localUserInfo, setLocalUserInfo] = useState(userInfo);
  function handleValueChange(e) {
    const { name, value } = e.target;
    setLocalUserInfo((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <input
        name="name"
        value={localUserInfo.name}
        onChange={(e) => handleValueChange(e)}
      />
      <input
        name="email"
        value={localUserInfo.email}
        onChange={handleValueChange}
      />
      <input
        name="phoneNumber"
        value={localUserInfo.phoneNumber}
        onChange={handleValueChange}
      />
      <input
        name="address"
        value={localUserInfo.address}
        onChange={handleValueChange}
      />
      <ButtonCotnainer>
        <button onClick={() => handleSaveClick(localUserInfo)}>Save</button>
        <button onClick={handleUserInfoClick}>Cancel</button>
      </ButtonCotnainer>
    </>
  );
}

function SuccessInfo({ handleUserInfoClick }) {
  return (
    <>
      <h2>Success update</h2>
      <button onClick={handleUserInfoClick}>Close</button>
    </>
  );
}

export default function UserInfo({ userInfo, handleUserInfoClick }) {
  const [state, setState] = useState("show");
  function handleEditClick() {
    setState("edit");
  }

  async function handleSaveClick(userInfo) {
    console.log("save click");
    console.log(userInfo);
    await updateUserInfo(userInfo);
    setState("success");
  }
  return (
    <UserInfoContainer>
      <h2>Edit User Info</h2>
      {state === "show" && (
        <ShowUserInfo
          userInfo={userInfo}
          handleUserInfoClick={handleUserInfoClick}
          handleEditClick={handleEditClick}
        />
      )}
      {state === "edit" && (
        <EditUserInfo
          userInfo={userInfo}
          handleSaveClick={handleSaveClick}
          handleUserInfoClick={handleUserInfoClick}
        />
      )}
      {state === "success" && (
        <SuccessInfo handleUserInfoClick={handleUserInfoClick} />
      )}
    </UserInfoContainer>
  );
}
