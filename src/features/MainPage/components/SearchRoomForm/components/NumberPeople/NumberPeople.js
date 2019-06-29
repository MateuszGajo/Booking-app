import React from "react";

const NumberPeople = () => {
  return (
    <>
      <div className="input-with-icon">
        <input type="text" placeholder="1" />
        <i class="fas fa-user" />
      </div>
      <section className="persons ">
        <div className="person-box">
          <div className="person-type">
            <span>Dorośli</span>
          </div>
          <div className="count">
            <button>
              <span>-</span>
            </button>
            <span>0</span>
            <button>
              <span>+</span>
            </button>
          </div>
        </div>
        <div className="person-box">
          <div className="person-type">
            <span>Dzieci</span>
          </div>
          <div className="count">
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NumberPeople;
