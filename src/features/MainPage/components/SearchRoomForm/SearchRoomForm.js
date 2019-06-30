import React, { useState, useContext } from "react";
import Calendar from "./components/Calendar/Calendar";
import NumberPeople from "./components/NumberPeople/NumberPeople";
import roomContext from "../../context/roomContext";

const SearchRoomForm = () => {
  const context = useContext(roomContext);
  const [roomValues, setRoomValues] = useState({});
  const getRoomDate = (value, name) => {
    setRoomValues({ ...roomValues, [name]: value });
  };
  const getRoomAmount = value => {
    setRoomValues({ ...roomValues, ...value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    context.findAvailableRoom(roomValues);
  };
  return (
    <section className="wrapper">
      <h1>Znajdz pokój dla siebie</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <Calendar
            placeholder="Data Przyjazdu"
            name="arrivalDate"
            getRoomDate={getRoomDate}
          />
        </div>
        <div className="input-field">
          <Calendar
            placeholder="Data wyjazdu"
            name="leaveDate"
            getRoomDate={getRoomDate}
          />
        </div>
        <div className="input-field relative">
          <NumberPeople getRoomPersonAmount={getRoomAmount} />
        </div>
        <button>Szukaj</button>
      </form>
    </section>
  );
};

export default SearchRoomForm;
