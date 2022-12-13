import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AboutScreen = () => {
  return (
    <div>
      <Header />
      <section id="page-header">
 
      </section>

      <section id="about-head" className="section-p1">
        <img src={require("../../assets/img/about/a6.jpg")} alt=""></img>
        <div>
          <h2 className="who-we-are">Who We Are?</h2>
          <p>
          You have studied English for a long time, yet you are still not satisfied with your speaking skills. You have tried many ways and still make same mistakes in expressing your thoughts. You have learnt
          </p>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>
          Education
        </h1>
        <div className="video">
          <video
            autoPlay
            muted
            loop
            src={require("../../assets/img/about/1.mp4")}
          ></video>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={require("../../assets/img/features/f1.png")} alt=""></img>
          <h6></h6>
        </div>
        <div className="fe-box">
          <img src={require("../../assets/img/features/f2.png")} alt=""></img>
          <h6></h6>
        </div>
        <div className="fe-box">
          <img src={require("../../assets/img/features/f3.png")} alt=""></img>
          <h6></h6>
        </div>
        <div className="fe-box">
          <img src={require("../../assets/img/features/f4.png")} alt=""></img>
          <h6></h6>
        </div>
        <div className="fe-box">
          <img src={require("../../assets/img/features/f5.png")} alt=""></img>
          <h6></h6>
        </div>
        <div className="fe-box">
          <img src={require("../../assets/img/features/f6.png")} alt=""></img>
          <h6></h6>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutScreen;
