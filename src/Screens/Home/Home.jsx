import React from "react";
import FeaturedProperties from "../../Components/FeaturedProperties/FeaturedProperties";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

import "./Home.css";

const Home = () => {
  return (
    <div>
      
      <Navbar />
      <Header />
      <div className="homeContainer">
        <br />
        <FeaturedProperties />
      
        <Footer />
      </div>
    </div>
  );
};

export default Home;
