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
      <div className="input-with-icon">
        <input
          className="choose-field"
          type="text"
          placeholder={`${
            adults === 1 ? adults + " Dorosły" : adults + " Dorosłych"
          }, ${children === 1 ? children + " Dziecko" : children + " Dzieci"}`}
          onClick={() => {
            setactive(true);
            props.isActive(true);
          }}
        />
        <i className="fas fa-user" />
      </div>
      <section className={active ? "persons active" : "persons "}>
        <div className="person-box">
          <div className="person-type">
            <span>Dorośli</span>
          </div>
          <div className="count">
            <input
              type="button"
              value="-"
              className={adults > 0 ? "amount" : "amount disable"}
              onClick={() => {
                if (adults > 0) setAdults(adults - 1);
              }}
            />

            <span className={adults > 0 ? null : "disable"}>{adults}</span>
            <input
              type="button"
              className="amount"
              value="+"
              onClick={() => {
                setAdults(adults + 1);
              }}
            />
          </div>
        </div>
        <div className="person-box">
          <div className="person-type">
            <span>Dzieci</span>
          </div>
          <div className="count">
            <input
              type="button"
              value="-"
              className={children > 0 ? "amount" : "amount disable"}
              onClick={() => {
                if (children > 0) setChildren(children - 1);
              }}
            />
            <span className={children > 0 ? null : "disable"}>{children}</span>
            <input
              type="button"
              className="amount"
              value="+"
              onClick={() => {
                setChildren(children + 1);
              }}
            />
          </div>
        </div>
        <div className="amount">
          <input
            type="button"
            className="btn-amount"
            value="Wybierz"
            onClick={handleClickAmount}
          />
        </div>
        <div className="error">
          <span>
            {props.activeWindowError ? props.activeWindowError : null}
          </span>
        </div>
      </section>
    </>
  );
};

export default NumberPeople;
