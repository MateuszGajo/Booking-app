import React from "react";

const Cards = ({ item, index }) => {
  return index % 2 === 0 ? (
    <section className="room">
      <div className="room__photo">
        <img src={item.image} alt="name" className="room__image" />
      </div>
      <div className="room__card">
        <h2 className="room__title">{item.name}</h2>
        <p className="room__text-info room__text-info--grey">
          {" "}
          Typ: {item.type}
        </p>
        <div className="room__information">
          <div className="room__room-info">
            <p className="room__text-info">Sypialnie: {item.bedrooms}</p>
            <p className="room__text-info">
              Pojedyncze łóżka: {item.singleBeds}
            </p>
            <p className="room__text-info">Podwójne łóżka: {item.doubleBeds}</p>
          </div>
          <div className="highline" />
          <div className="room__prices">
            <p className="room__text-info">Cena: {item.totalPrice} zł</p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="room room--second-card">
      <div className="room__card">
        <h2 className="room__title">{item.name}</h2>
        <p className="room__text-info room__text-info--grey">
          Typ: {item.type}
        </p>
        <div className="room__information">
          <div className="room__prices">
            <p>Cena: {item.totalPrice} zł</p>
          </div>
          <div className="highline" />
          <div className="room__room-info">
            <p className="room__text-info">Sypialnie: {item.bedrooms}</p>
            <p className="room__text-info">
              Pojedyncze łóżka: {item.singleBeds}
            </p>
            <p className="room__text-info">Podwójne łóżka: {item.doubleBeds}</p>
          </div>
        </div>
      </div>
      <div className="room__photo">
        <img src={item.image} alt="name" className="room__image" />
      </div>
    </section>
  );
};

export default Cards;
