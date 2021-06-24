import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Service from "./components/Service";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
