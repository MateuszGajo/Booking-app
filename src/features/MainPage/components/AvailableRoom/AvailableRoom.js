import React from "react";
import roomContext from "../../context/roomContext";

const AvailableRoom = () => {
  return (
    <roomContext.Consumer>
      {context => (
        <>
          {context.availableRoom ? (
            <>
              {context.availableRoom.map((item, index) => {
                console.log(item);
                if (index % 2 == 0)
                  return (
                    <section className="container">
                      <div className="photo">
                        <img src={item.image} alt="name" />
                      </div>
                      <section className="card">
                        <h2>{item.name}</h2>
                        <p>Typ: {item.roomType}</p>
                        <section className="information">
                          <div className="rooms-info">
                            <p>Sypialnie: {item.bedroomsCount}</p>
                            <p>Pojedyncze łóżka: {item.singleBedsCount}</p>
                            <p>Podwójne łóżka: {item.doubleBedsCount}</p>
                          </div>
                          <div className="highline" />
                          <div className="prices">
                            <p>Cena: {item.totalPrice}</p>
                          </div>
                        </section>
                      </section>
                    </section>
                  );
                else
                  return (
                    <section className="container second-card">
                      <section className="card">
                        <h2>{item.name}</h2>
                        <p>Typ: {item.roomType}</p>
                        <section className="information">
                          <div className="prices">
                            <p>Cena: {item.totalPrice}</p>
                          </div>
                          <div className="highline" />
                          <div className="rooms-info">
                            <p>Sypialnie: {item.bedroomsCount}</p>
                            <p>Pojedyncze łóżka: {item.singleBedsCount}</p>
                            <p>Podwójne łóżka: {item.doubleBedsCount}</p>
                          </div>
                        </section>
                      </section>
                      <div className="photo">
                        <img src={item.image} alt="name" />
                      </div>
                    </section>
                  );
              })}
            </>
          ) : (
            <div className="animation">
              <div class="ring">
                Ładowanie
                <span />
              </div>
            </div>
          )}
        </>
      )}
    </roomContext.Consumer>
  );
};

export default AvailableRoom;
