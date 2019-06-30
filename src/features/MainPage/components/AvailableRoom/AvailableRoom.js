import React, { useContext } from "react";
import roomContext from "../../context/roomContext";
import Cards from "./components/Cards/Cards";

const AvailableRoom = () => {
  const context = useContext(roomContext);
  return (
    <>
      {context.loading ? (
        <div className="animation">
          <div class="ring">
            Ładowanie
            <span />
          </div>
        </div>
      ) : (
        <>
          {context.availableRoom ? (
            <>
              {context.availableRoom.map((item, index) => (
                <Cards item={item} index={index} />
              ))}
            </>
          ) : context.availableRoom !== undefined ? (
            "Nie znaleziono pokoji"
          ) : null}
        </>
      )}
    </>
  );
};

export default AvailableRoom;
