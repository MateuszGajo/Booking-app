import React, { useState } from "react";
import roomContext from "./roomContext";

const RoomContextProvider = props => {
  const [availableRoom, setAvailableRoom] = useState();
  const [loading, setLoading] = useState(false);
  const loadingRoom = type => {
    setLoading(type);
  };

  const findAvailableRoom = valueRoom => {
    const { arrivalDate, leaveDate, adults, children } = valueRoom;
    const url = `https://apiforrooms.herokuapp.com/api?date_from=${arrivalDate}&date_to=${leaveDate}&nb_adults=${adults}&nb_children=${children}`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        loadingRoom(false);
        setAvailableRoom(data);
      });
  };
  return (
    <roomContext.Provider
      value={{
        availableRoom,
        findAvailableRoom,
        loadingRoom,
        loading
      }}
    >
      {props.children}
    </roomContext.Provider>
  );
};

export default RoomContextProvider;
