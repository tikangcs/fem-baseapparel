import React from "react";

export default function App2() {
  return (
    <div className="app__wrapper">
      <div className="app__background"></div>
      <div className="app__logo">
        <img src="./images/logo.svg" />
      </div>
      <div className="app__image--container">
        <img
          src="./images/hero-mobile.jpg"
          alt="model"
          className="app__image"
        />
      </div>
      <div className="app__text">
        <div className="app__title">
          WE'RE <br />
          COMING <br />
          SOON
        </div>
        <div className="app__paragraph">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </div>
      </div>
      <div className="app__input--container">
        <input
          className="app__input"
          type="email"
          placeholder="Email Address"
          style={{ border: "2px solid hsla(0, 36%, 70%, 0.3)" }}
        />
        <button className="app__input--button" type="submit">
          <img src="./images/icon-arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}
