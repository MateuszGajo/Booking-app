import React from "react";

const Cards = ({ item, index }) => {
  return index % 2 == 0 ? (
    <section className="container" key={item.id}>
      <div className="photo">
        <img src={item.image} alt="name" />
      </div>
      <div className="card">
        <h2>{item.name}</h2>
        <p>Typ: {item.roomType}</p>
        <div className="information">
          <div className="rooms-info">
            <p>Sypialnie: {item.bedroomsCount}</p>
            <p>Pojedyncze łóżka: {item.singleBedsCount}</p>
            <p>Podwójne łóżka: {item.doubleBedsCount}</p>
          </div>
          <div className="highline" />
          <div className="prices">
            <p>Cena: {item.totalPrice} zł</p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section className="container second-card" key={item.id}>
      <div className="card">
        <h2>{item.name}</h2>
        <p>Typ: {item.roomType}</p>
        <div className="information">
          <div className="prices">
            <p>Cena: {item.totalPrice} zł</p>
          </div>
          <div className="highline" />
          <div className="rooms-info">
            <p>Sypialnie: {item.bedroomsCount}</p>
            <p>Pojedyncze łóżka: {item.singleBedsCount}</p>
            <p>Podwójne łóżka: {item.doubleBedsCount}</p>
          </div>
        </div>
      </div>
      <div className="photo">
        <img src={item.image} alt="name" />
      </div>
    </section>
  );
};

export default Cards;
