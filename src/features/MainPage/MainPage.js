import React from "react";
import SearchRoomForm from "./components/SearchRoomForm/SearchRoomForm";
import AvailableRoom from "./components/AvailableRoom/AvailableRoom";
const MainPage = () => {
  return (
    <>
      <header>
        <SearchRoomForm />
      </header>
      <main>
        <AvailableRoom />
      </main>
    </>
  );
};

export default MainPage;
