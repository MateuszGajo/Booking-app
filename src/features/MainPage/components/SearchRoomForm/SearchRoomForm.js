import React, { useState } from "react";
import Calendar from "./components/Calendar/Calendar";
import NumberPeople from "./components/NumberPeople/NumberPeople";

const SearchRoomForm = () => {
  return (
    <section className="wrapper">
      <h1>Znajdz pokój dla siebie</h1>
      <form>
        <div className="input-field">
          <Calendar placeholder="Data Przyjazdu" />
        </div>
        <div className="input-field">
          <Calendar placeholder="Data wyjazdu" />
        </div>
        <div className="input-field relative">
          <NumberPeople />
        </div>
        <button>Szukaj</button>
      </form>
    </section>
  );
};

export default SearchRoomForm;
