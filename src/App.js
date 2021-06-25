import React from "react";
import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <div className="app">
        <NavBar />
        <Home />
        <Service />
        <About />
        <Testimonial />
        <Articles />
      </div>
      <Footer />
    </>
  );
};

export default App;
