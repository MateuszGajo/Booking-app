import React, { useState } from "react";
import roomContext from "./roomContext";
import jsonp from "jsonp";

const GlobalState = props => {
  const [availableRoom, setAvailableRoom] = useState();

  const findAvailableRoom = valueRoom => {
    const { arrivalDate, leaveDate, adult, child } = valueRoom;
    console.log(arrivalDate, leaveDate, adult, child);
    const url = `http://testapi.itur.pl/api.php?date_from=${arrivalDate}&date_to=${leaveDate}&nb_adults=${adult}&nb_children=${child}`;
    console.log(url);
    jsonp(url, {}, (err, data) => {
      if (err) throw new Error("błąd w pobieraniu danych");
      setAvailableRoom(data);
    });
  };
  return (
    <roomContext.Provider
      value={{
        availableRoom,
        findAvailableRoom
      }}
    >
      {props.children}
    </roomContext.Provider>
  );
};

export default GlobalState;
