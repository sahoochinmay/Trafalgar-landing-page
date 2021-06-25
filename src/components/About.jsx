import React from "react";
import about1 from "../assets/about1.svg";
import about2 from "../assets/about2.svg";

const About = () => {
  return (
    <section className="about">
      <section>
        <div>
          <img src={about1} alt="Leading Healthcare Providers" />
        </div>
        <div>
          <h1>Leading healthcare <br /> providers</h1>
          <hr />
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <a>Learn more</a>
        </div>
      </section>
      <section>
        <div>
          <h1>Download our mobile apps</h1>
          <hr />
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <a href="#">Download</a>
        </div>
        <div>
          <img src={about2} alt="Download our mobile app" />
        </div>
      </section>
    </section>
  );
};

export default About;