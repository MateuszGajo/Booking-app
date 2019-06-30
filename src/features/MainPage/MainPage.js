import React from "react";
import SearchRoomForm from "./components/SearchRoomForm/SearchRoomForm";
import AvailableRoom from "./components/AvailableRoom/AvailableRoom";
import GlobalState from "./context/GlobalState";
const MainPage = () => {
  return (
    <GlobalState>
      <header>
        <SearchRoomForm />
      </header>
      <main>
        <AvailableRoom />
      </main>
    </GlobalState>
  );
};

export default MainPage;
