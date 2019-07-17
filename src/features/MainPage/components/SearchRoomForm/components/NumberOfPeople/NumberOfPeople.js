import React, { useState } from "react";

const NumberPeople = props => {
  const [active, setactive] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const handleClickAmount = () => {
    setactive(false);
    props.isActive(false);
    props.getRoomPersonAmount({ adults, children });
  };
  return (
    <>
      <div className="input-with-icon ">
        <input
          className="input-with-icon__input"
          type="text"
          placeholder={`${
            adults === 1 ? adults + " Dorosły" : adults + " Dorosłych"
          }, ${children === 1 ? children + " Dziecko" : children + " Dzieci"}`}
          onClick={() => {
            setactive(true);
            props.isActive(true);
          }}
        />
        <i className="input-with-icon__icon fas fa-user" />
      </div>
      <section
        className={
          active
            ? "number-of-people__persons number-of-people__persons--active"
            : "number-of-people__persons "
        }
      >
        <div className="number-of-people__person-box">
          <div className="number-of-people__person-type">
            <span className="number-of-people__persont-title">Dorośli</span>
          </div>
          <div className="number-of-people__count">
            <input
              type="button"
              value="-"
              className={
                adults > 0 ? "btn-circle" : "btn-circle btn-circle--disable"
              }
              onClick={() => {
                if (adults > 0) setAdults(adults - 1);
              }}
            />

            <span
              className={
                adults > 0
                  ? "number-of-people__amount"
                  : " number-of-people__amount number-of-people__amount--amount-disable"
              }
            >
              {adults}
            </span>
            <input
              type="button"
              className="btn-circle"
              value="+"
              onClick={() => {
                setAdults(adults + 1);
              }}
            />
          </div>
        </div>
        <div className="number-of-people__person-box">
          <div className="number-of-people__person-type">
            <span>Dzieci</span>
          </div>
          <div className="number-of-people__count">
            <input
              type="button"
              value="-"
              className={
                children > 0 ? "btn-circle" : "btn-circle btn-circle--disable"
              }
              onClick={() => {
                if (children > 0) setChildren(children - 1);
              }}
            />
            <span
              className={
                children > 0
                  ? "number-of-people__amount"
                  : " number-of-people__amount number-of-people__amount--amount-disable"
              }
            >
              {children}
            </span>
            <input
              type="button"
              className="btn-circle"
              value="+"
              onClick={() => {
                setChildren(children + 1);
              }}
            />
          </div>
        </div>
        <div className="number-of-people__amount">
          <input
            type="button"
            className="number-of-people__btn-confirm"
            value="Wybierz"
            onClick={handleClickAmount}
          />
        </div>
        <div className="number-of-people__error number-of-people__error--person">
          <span>
            {props.activeWindowError ? props.activeWindowError : null}
          </span>
        </div>
      </section>
    </>
  );
};

export default NumberPeople;
