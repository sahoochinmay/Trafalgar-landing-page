import React from "react";
import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";
import dot from '../assets/element.svg'

const About = () => {
  return (
    <section className="about" id="U">
      <section>
        <div>
          <img src={about1} alt="Leading Healthcare Providers" />
        </div>
        <div>
          <h1>
            Leading healthcare <br /> providers
          </h1>
          <hr />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <a className="button" href="#">
            Learn more
          </a>
        </div>
      </section>
      <img src={dot} alt="dot" id="aboutDot" />
      <section className="secondRow" id="A">
        <div className="text">
          <h1>
            Download our <br /> mobile apps
          </h1>
          <hr />
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <a href="#" className="button">
            Download&nbsp;&nbsp;&nbsp;
            <i class="fa fa-download" aria-hidden="true"></i>
          </a>
        </div>
        <div className="secondImg">
          <img src={about2} alt="Download our mobile app" />
        </div>
      </section>
    </section>
  );
};

export default About;
