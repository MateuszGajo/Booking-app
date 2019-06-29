import React from "react";

const AvailableRoom = () => {
  return (
    <>
      {true ? (
        <>
          <section className="container">
            <div className="photo">
              <img
                src="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_960_720.jpg"
                alt=""
                style={{ width: "480px", height: "270px" }}
              />
            </div>
            <section className="information">
              <div className="title">
                <h2>Nazwa</h2>
                <p>typ pokoju</p>
              </div>
              <div className="highline" />
              <div className="rooms-info">
                <p>Sypialnie: 2</p>
                <p>Pojedyncze łóżka: 2</p>
                <p>Podwójne łóżka :3</p>
              </div>
              <div className="highline" />
              <div className="prices">
                <p>Cena: 2018zł</p>
              </div>
            </section>
          </section>
          <section className="container second-card">
            <section className="information">
              <div className="prices">
                <p>Cena: 2018zł</p>
              </div>
              <div className="highline" />
              <div className="rooms-info">
                <p>Sypialnie: 2</p>
                <p>Pojedyncze łóżka: 2</p>
                <p>Podwójne łóżka :3</p>
              </div>
              <div className="highline" />
              <div className="title">
                <h2>Nazwa</h2>
                <p>typ pokoju</p>
              </div>
            </section>
            <div className="photo">
              <img
                src="https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774_960_720.jpg"
                alt=""
                style={{ width: "480px", height: "270px" }}
              />
            </div>
          </section>
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
  );
};

export default AvailableRoom;
