import React, { useState, useContext } from "react";
import Calendar from "./components/Calendar/Calendar";
import NumberPeople from "./components/NumberOfPeople/NumberOfPeople";
import roomContext from "../../context/roomContext";

const SearchRoomForm = () => {
  const context = useContext(roomContext);
  const [roomValues, setRoomValues] = useState({});
  const [errors, setErrors] = useState({});
  const getRoomDate = (value, name) => {
    setRoomValues({ ...roomValues, [name]: value });
  };
  const getRoomAmount = value => {
    setRoomValues({ ...roomValues, ...value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (!roomValues.arrivalDate)
      return setErrors({
        arrivalDateError: "Nie wybrałeś daty przyjazdu"
      });
    if (!roomValues.leaveDate)
      return setErrors({
        leaveDateError: "Nie wybrałeś daty wyjazdu"
      });
    if (
      (roomValues.children === 0 && roomValues.adults === 0) ||
      roomValues.children === undefined
    )
      return setErrors({
        amountOfPersonError: "Nie wybrałeś liczby osób"
      });
    if (roomValues.adults === 0)
      return setErrors({
        amountOfPersonError: "Dzieci nie mogą same podrózować"
      });
    setErrors({});
    context.loadingRoom(true);
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

          <div className="error">
            <span>
              {errors.arrivalDateError ? errors.arrivalDateError : null}
            </span>
          </div>
        </div>
        <div className="input-field">
          <Calendar
            placeholder="Data wyjazdu"
            name="leaveDate"
            getRoomDate={getRoomDate}
          />
          <div className="error">
            <span>{errors.leaveDateError ? errors.leaveDateError : null}</span>
          </div>
        </div>
        <div className="input-field relative">
          <NumberPeople getRoomPersonAmount={getRoomAmount} />
          <div className="error">
            <span>
              {errors.amountOfPersonError ? errors.amountOfPersonError : null}
            </span>
          </div>
        </div>
        <button>Szukaj</button>
      </form>
    </section>
  );
};

export default SearchRoomForm;
