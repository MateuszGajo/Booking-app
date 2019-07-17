import React, { useState, useContext } from "react";
import Calendar from "./components/Calendar/Calendar";
import NumberOfPeople from "./components/NumberOfPeople/NumberOfPeople";
import roomContext from "../../context/roomContext";

const SearchRoomForm = () => {
  const context = useContext(roomContext);
  const [roomValues, setRoomValues] = useState({});
  const [activeNumberOfPeople, setActiveOfPeople] = useState(false);
  const [errors, setErrors] = useState({});
  const getRoomDate = (value, name) => {
    setRoomValues({ ...roomValues, [name]: value });
  };
  const getRoomAmountPeople = value => {
    setRoomValues({ ...roomValues, ...value });
  };
  const isActive = value => {
    setActiveOfPeople(value);
    if (!value) setErrors({ activeNumberOfPeople: "" });
  };
  const validation = () => {
    const { arrivalDate, leaveDate, children, adults } = roomValues;
    if (activeNumberOfPeople)
      return setErrors({ activeNumberOfPeople: "Potwierdź swój wybor" });
    else if (!arrivalDate)
      return setErrors({
        arrivalDateError: "Nie wybrałeś daty przyjazdu"
      });
    else if (!leaveDate)
      return setErrors({
        leaveDateError: "Nie wybrałeś daty wyjazdu"
      });
    else if (arrivalDate >= leaveDate)
      return setErrors({
        leaveDateError: "Data wyjazdu musi być późniejsza od momentu przyjazdu"
      });
    else if ((children === 0 && adults === 0) || children === undefined)
      return setErrors({
        amountOfPersonError: "Nie wybrałeś liczby osób"
      });
    else if (adults === 0)
      return setErrors({
        amountOfPersonError: "Dzieci nie mogą same podrózować"
      });
    setErrors({});
    return true;
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validation()) {
      context.loadingRoom(true);
      context.findAvailableRoom(roomValues);
    }
  };
  return (
    <section className="banner__wrapper">
      <h1 className="banner__title">Znajdz pokój dla siebie</h1>
      <form onSubmit={handleSubmit} className="banner__form">
        <div className="banner__input-field">
          <Calendar
            placeholder="Data Przyjazdu"
            name="arrivalDate"
            getRoomDate={getRoomDate}
          />

          <div className="banner__error">
            <span className="banner__error-text">
              {errors.arrivalDateError ? errors.arrivalDateError : null}
            </span>
          </div>
        </div>
        <div className="banner__input-field">
          <Calendar
            placeholder="Data wyjazdu"
            name="leaveDate"
            getRoomDate={getRoomDate}
          />
          <div className="banner__error">
            <span className="banner__error-text">
              {errors.leaveDateError ? errors.leaveDateError : null}
            </span>
          </div>
        </div>
        <div className="number-of-people banner__input-field banner__input-field--relative">
          <NumberOfPeople
            getRoomPersonAmount={getRoomAmountPeople}
            isActive={isActive}
            activeWindowError={errors.activeNumberOfPeople}
          />
          <div className="banner__error">
            <span className="banner__error-text">
              {errors.amountOfPersonError ? errors.amountOfPersonError : null}
            </span>
          </div>
        </div>
        <button className="banner__form-btn">Szukaj</button>
      </form>
    </section>
  );
};

export default SearchRoomForm;
