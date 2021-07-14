import React from "react";

export default function App() {
  return (
    <div className="app__wrapper">
      <div className="app__container">
        <div className="app__header">
          <div className="app__logo--container">
            <img
              src="./images/logo.svg"
              alt="company logo"
              width="40%"
              height="100%"
              className="app__logo"
            />
          </div>
          <div className="app__image--container">
            <img
              src="./images/hero-mobile.jpg"
              alt="female model touching hair"
              width="100%"
              height="100%"
              className="app__image"
            />
          </div>
        </div>
        <div className="app__title">
          <div className="app__title1">WE'RE</div>
          <div>COMING</div>
          <div>SOON</div>
        </div>
        <div className="app__paragraph">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
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
    </div>
  );
}
