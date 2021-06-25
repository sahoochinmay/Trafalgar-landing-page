import React from "react";
import t1 from "../assets/t1.png";
import dot1 from '../assets/testimonialDot1.svg'
import dot2 from '../assets/testimonialDot2.svg'

const Testimonial = () => {
  return (
    <>
      <section className="testimonial" id="T">
        <img src={dot1} alt="testDot1"  id="testDot1" />
        <img src={dot2} alt="testDot2" id="testDot2" />
        <h1>What our customer are saying</h1>
        <hr />
        <section className="customer">
          <div className="left">
            <img src={t1} alt="" className="imgCircle" />
            <div className="details">
              <h3>Edward Newgate</h3>
              <p>Founder Circle</p>
            </div>
          </div>
          <div className="comment">
            <p>
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </section>
      </section>

      <section className="testimonialFooter">
        <i class="fa fa-long-arrow-left" aria-hidden="true" id="prev"></i>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-circle-thin" aria-hidden="true"  id="tc1" ></i>&nbsp;
        <i class="fa fa-circle" aria-hidden="true" id="tc2"></i>&nbsp;
        <i class="fa fa-circle-thin" aria-hidden="true" id="tc3"></i>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-long-arrow-right" aria-hidden="true" id="next"></i>
      </section>
    </>
  );
};

export default Testimonial;
