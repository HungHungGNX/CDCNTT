import React from "react";
import clsx from "clsx";
import styles from "./HomeScreen.module.css";
import Header from "../../components/Header";
import heroBg from "../../assets/img/img_homepage/hero-bg.svg";
import heroBanner1 from "../../assets/img/img_homepage/hero-banner-1.jpg";
import heroBanner2 from "../../assets/img/img_homepage/hero-banner-2.jpg";
import heroShape1 from "../../assets/img/img_homepage/hero-shape-1.svg";
import heroShape2 from "../../assets/img/img_homepage/hero-shape-2.png";

function HomeScreen() {

  return (
      <div>
        <Header></Header>
        <main>
          <article>
          {/* Hero */}
              <section className={clsx(styles.section,styles.hero,styles.hasBgImage)} id="home" aria-label="home"
                    style={{backgroundImage: `url(${heroBg})`}}>
                    <div className= {clsx(styles.container)}>

                      <div className={clsx(styles.heroContent)}>

                        <h1 className= {clsx(styles.h1,styles.sectionTitle)}>
                          The Best Program to <span className={clsx(styles.span)}>Enroll</span> for Exchange
                        </h1>

                        <p className= {clsx(styles.heroText)}>
                          Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                        </p>

                        <a href="#" className= {clsx(styles.btn,styles.hasBefore)}>
                          <span className= {clsx(styles.span)}>Find courses</span>
                          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>

                      </div>

                      <figure className= {clsx(styles.heroBanner)}>

                        <div className= {clsx(styles.imgHolder,styles.one)} style={{width:'270px',height:'300px'}}>
                          <img src={heroBanner1} width="270px" height="300px" alt="hero banner"  className={clsx(styles.imgCover)}></img>
                        </div>

                        <div  className= {clsx(styles.imgHolder,styles.two)} style={{width:'270px',height:'300px'}}>
                          <img src={heroBanner2} width="240" height="370" alt="hero banner"  className={clsx(styles.imgCover)}></img>
                        </div>

                       <img src={heroShape1} width="380" height="190" alt=""  className={clsx(styles.shape,styles.heroShape1)}></img> 

                       <img src={heroShape2} width="622" height="551" alt="" className={clsx(styles.shape,styles.heroShape2)}></img> 

                      </figure>

                    </div>
          </section>

          </article>
        </main>
        <div style={{height:'1000px'}}></div>
      </div>
  );
}

export default HomeScreen;
