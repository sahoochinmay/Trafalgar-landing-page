import React,{useState , useEffect} from "react";
import t1 from "../assets/t1.png";
import dot1 from '../assets/testimonialDot1.svg'
import dot2 from '../assets/testimonialDot2.svg'
import {testimonialData} from '../data/testimonial'


const Testimonial = () => {
  const [Tindex,setTIndex] = useState(0)
  const handlePrev = () =>{
    if (Tindex > 0) {
      setTIndex(Tindex-1);
    }
  }
  const handleNext = () =>{
    if (Tindex < testimonialData.length-1 ) {
      setTIndex(Tindex+1);
    }
  }
  setTimeout(() => {
    if (Tindex < testimonialData.length-1 ) {
      setTIndex(Tindex+1);
    }else{
      setTIndex(0)
    }
  }, 2000);
  return (
    <section className="testimonialMain" >
      <section className="testimonial" id="T">
        <img src={dot1} alt="testDot1"  id="testDot1" />
        <img src={dot2} alt="testDot2" id="testDot2" />
        <h1>What our customer are saying</h1>
        <hr />
        <section className="customer">
          <div className="left">
            <img src={t1} alt="" className="imgCircle" />
            <div className="details">
              <h3>{testimonialData[Tindex]?.name}</h3>
              <p>{testimonialData[Tindex]?.position}</p>
            </div>
          </div>
          <div className="comment">
            <p>
              “{testimonialData[Tindex]?.comment}”
            </p>
          </div>
        </section>
      </section>

      <section className="testimonialFooter">
        <i class="fa fa-long-arrow-left" aria-hidden="true" id="prev" onClick={handlePrev}></i>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-circle-thin" aria-hidden="true"  id="tc1"  ></i>&nbsp;
        <i class="fa fa-circle" aria-hidden="true" id="tc2"></i>&nbsp;
        <i class="fa fa-circle-thin" aria-hidden="true" id="tc3"></i>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-long-arrow-right" aria-hidden="true" id="next" onClick={handleNext} ></i>
      </section>
    </section>
  );
};

export default Testimonial;
