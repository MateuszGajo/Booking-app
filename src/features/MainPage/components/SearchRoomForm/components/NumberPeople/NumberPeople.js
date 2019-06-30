import React, { useState } from "react";

const NumberPeople = props => {
  const [active, setactive] = useState(false);
  const [count, setCount] = useState({ adult: 2, child: 0 });
  const handleClickAmount = () => {
    setactive(false);
    props.getRoomPersonAmount(count);
  };
  return (
    <>
      <div className="input-with-icon">
        <input
          className="choose-field"
          type="text"
          placeholder={`${
            count.adult === 1
              ? count.adult + " Dorosły"
              : count.adult + " Dorosłych"
          } , ${
            count.child === 1
              ? count.child + " Dziecko"
              : count.child + " Dzieci"
          }`}
          onClick={() => setactive(!active)}
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
              className={count.adult > 0 ? "amount" : "amount disable"}
              onClick={() => {
                if (count.adult > 0)
                  setCount({ ...count, adult: count.adult - 1 });
              }}
            />

            <span className={count.adult > 0 ? null : "disable"}>
              {count.adult}
            </span>
            <input
              type="button"
              className="amount"
              value="+"
              onClick={() => {
                setCount({ ...count, adult: count.adult + 1 });
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
              className={count.child > 0 ? "amount" : "amount disable"}
              onClick={() => {
                if (count.child > 0)
                  setCount({ ...count, child: count.child - 1 });
              }}
            />
            <span className={count.child > 0 ? null : "disable"}>
              {count.child}
            </span>
            <input
              type="button"
              className="amount"
              value="+"
              onClick={() => {
                setCount({ ...count, child: count.child + 1 });
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
      </section>
    </>
  );
};

export default NumberPeople;
