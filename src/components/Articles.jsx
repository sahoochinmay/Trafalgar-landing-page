import React from "react";
import articl1 from "../assets/article1.svg";
import articl2 from "../assets/article2.svg";
import articl3 from "../assets/article3.svg";
import dot2 from "../assets/testimonialDot2.svg";
import serviceBG from '../assets/serviceBG.svg'

const Articles = () => {
  return (
    <>  
    <h1 className="articleHeading" >Check out our latest article</h1>
    <hr className="drow" />
      <section className="article">
        <img src={dot2} alt="Article Dot" id="articleDot" />
        <img src={serviceBG} alt="SErvic3e Dot" id="articleBg" />
        <div className="articleBox">
          <div class="imgWrapper">
            <img src={articl2} alt="" />
          </div>

          <div>
            <h3>Disease detection, check up in the laboratory</h3>
            <p>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </p>
            <a href="">Read More</a>
          </div>
        </div>

        <div className="articleBox">
          <div class="imgWrapper">
            <img src={articl3} alt="" />
          </div>

          <div>
            <h3>Herbal medicines that are safe for consumption</h3>
            <p>
              Herbal medicine is very widely used at this time because of its
              very good for your health...
            </p>
            <a href="">Read More</a>
          </div>
        </div>

        <div className="articleBox">
          <div class="imgWrapper">
            <img src={articl1} alt="" />
          </div>
          <div>
            <h3>Natural care for healthy facial skin</h3>
            <p>
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </section>
      <section className="articleButton">
        <a href="#" className="button">
          View all
        </a>
      </section>
    </>
  );
};

export default Articles;
