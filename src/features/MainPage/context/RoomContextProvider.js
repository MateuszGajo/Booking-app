import React, { useState } from "react";
import roomContext from "./roomContext";
import jsonp from "jsonp";

const RoomContextProvider = props => {
  const [availableRoom, setAvailableRoom] = useState();
  const [loading, setLoading] = useState(false);
  const loadingRoom = type => {
    setLoading(type);
  };

  const findAvailableRoom = valueRoom => {
    const { arrivalDate, leaveDate, adults, children } = valueRoom;
    const url = `http://testapi.itur.pl/api.php?date_from=${arrivalDate}&date_to=${leaveDate}&nb_adults=${adults}&nb_children=${children}`;
    jsonp(url, {}, (err, data) => {
      if (err) throw new Error("błąd w pobieraniu danych");
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
