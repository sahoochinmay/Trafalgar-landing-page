import React from "react";
import home1 from "../assets/home1.svg";

const Home = () => {
  return (
    <section className="home">
      <div className="leftHome">
        <div>
          <h2>
            Virtual healthcare
            <br />
            for you
          </h2>
          <p>
            Trafalgar provides progressive, and affordable <br /> healthcare,
            accessible on mobile and online <br /> for everyone
          </p>
          <a href="#">Consult Today</a>
        </div>
      </div>
      <div className="rightRight">
        <img src={home1} alt="HomeImg1" />
      </div>
    </section>
  );
};

export default Home;
