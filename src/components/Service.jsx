import React from "react";
import { serviceData } from "../data/service";

const Service = () => {
  return (
    <section className="service">
      <h1 className="title">Our Services</h1>
      <hr />
      <p className="description">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment <br /> with our highly
        qualified doctors you can consult with us which type of service is
        suitable for your health
      </p>
      <section className="serviceContainer">
        {serviceData?.map((data) => {
          return (
            <section className="serviceCard">
              <img src={data?.image} alt="" srcset="" />
              <h3>{data?.title}</h3>
              <p>{data?.description}</p>
            </section>
          );
        })}
      </section>
      <a href="#">Learn more</a>
    </section>
  );
};

export default Service;
