import React from "react";
import SearchRoomForm from "./components/SearchRoomForm/SearchRoomForm";
import AvailableRoom from "./components/AvailableRoom/AvailableRoom";
const MainPage = () => {
  return (
    <>
      <header className="banner">
        <SearchRoomForm />
      </header>
      <main className="rooms">
        <AvailableRoom />
      </main>
    </>
  );
};

export default MainPage;
