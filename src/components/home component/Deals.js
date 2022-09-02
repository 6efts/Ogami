import React from "react";
import "./Deals.scss";
import Timer from "./Timer";

const Deals = () => {
  return (
    <div className="Deals">
      <div className="Deals__content">
        <h2>Deal Of The Week</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          reprehenderit ut.
        </p>

        <div className="Deals__content--timer">
          <Timer />
        </div>

        <button>Shop Now</button>

      </div>
      <div className="Deals__image">
        <img
          src="https://ogami-react.vercel.app/assets/images/sections/dale-of-week/two/1.png"
          alt="deals"
        />


      </div>
    </div>
  );
};

export default Deals;
