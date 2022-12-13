import React from "react";
import clsx from "clsx";
import styles from "./HomeScreen.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import heroBg from "../../assets/img/img_homepage/hero-bg.svg";
import heroBanner1 from "../../assets/img/img_homepage/hero-banner-1.jpg";
import heroBanner2 from "../../assets/img/img_homepage/hero-banner-2.jpg";
import heroShape1 from "../../assets/img/img_homepage/hero-shape-1.svg";
import heroShape2 from "../../assets/img/img_homepage/hero-shape-2.png";
import svg1 from "../../assets/img/img_homepage/category-1.svg";
import svg2 from "../../assets/img/img_homepage/category-2.svg";
import svg3 from "../../assets/img/img_homepage/category-3.svg";
import svg4 from "../../assets/img/img_homepage/category-4.svg";
import aboutBanner from "../../assets/img/img_homepage/about-banner.jpg";
import aboutShape1 from "../../assets/img/img_homepage/about-shape-1.svg";
import aboutShape2 from "../../assets/img/img_homepage/about-shape-2.svg";
import aboutShape3 from "../../assets/img/img_homepage/about-shape-3.png";
import aboutShape4 from "../../assets/img/img_homepage/about-shape-4.svg";
import videoBg from "../../assets/img/img_homepage/video-bg.png";
import videoBanner from "../../assets/img/img_homepage/video-banner.jpg";
import videoShape1 from "../../assets/img/img_homepage/video-shape-1.png";
import videoShape2 from "../../assets/img/img_homepage/video-shape-2.png";
import blogBg from "../../assets/img/img_homepage/blog-bg.svg";
import blog1 from "../../assets/img/img_homepage/blog-1.jpg";
import blog2 from "../../assets/img/img_homepage/blog-2.jpg";
import blog3 from "../../assets/img/img_homepage/blog-3.jpg";
import blogShape from "../../assets/img/img_homepage/blog-shape.png";

// {clsx(styles.section)}
// src={heroBanner1}
// style={{ backgroundImage: `url(${heroBg})` }}
// style={{ width: "370", height: "370" }}

function HomeScreen() {
  return (
    <div>
      <Header></Header>
      <main>
        <article>
          <section
            className={clsx(styles.section, styles.hero, styles.hasBgImage)}
            id="home"
            aria-label="home"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className={clsx(styles.container)}>
              <div className={clsx(styles.heroContent)}>
                <h1 className={clsx(styles.h1, styles.sectionTitle)}>
                  The Best Program to{" "}
                  <span className={clsx(styles.span)}>Enroll</span> for Exchange
                </h1>

                <p className={clsx(styles.heroText)}>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                  qui officia deserunt mollit.
                </p>

                <a href="/#" className={clsx(styles.btn, styles.hasBefore)}>
                  <span className={clsx(styles.span)}>Find courses</span>
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>

              <figure className={clsx(styles.heroBanner)}>
                <div
                  className={clsx(styles.imgHolder, styles.one)}
                  style={{ width: "270px", height: "300px" }}
                >
                  <img
                    src={heroBanner1}
                    width="270px"
                    height="300px"
                    alt="hero banner"
                    className={clsx(styles.imgCover)}
                  ></img>
                </div>

                <div
                  className={clsx(styles.imgHolder, styles.two)}
                  style={{ width: "270px", height: "300px" }}
                >
                  <img
                    src={heroBanner2}
                    width="240"
                    height="370"
                    alt="hero banner"
                    className={clsx(styles.imgCover)}
                  ></img>
                </div>

                <img
                  src={heroShape1}
                  width="380"
                  height="190"
                  alt=""
                  className={clsx(styles.shape, styles.heroShape1)}
                ></img>

                <img
                  src={heroShape2}
                  width="622"
                  height="551"
                  alt=""
                  className={clsx(styles.shape, styles.heroShape2)}
                ></img>
              </figure>
            </div>
          </section>

          {/* Category */}
          <section
            className={clsx(styles.section, styles.category)}
            arial-label="category"
          >
            <div className={clsx(styles.container)}>
              <p className={clsx(styles.sectionSubtitle)}>Categories</p>

              <h2 className={clsx(styles.h2, styles.sectionTitle)}>
                Online <span className={clsx(styles.span)}>Classes</span> For
                Remote Learning.
              </h2>

              <p className={clsx(styles.sectionText)}>
                Consectetur adipiscing elit sed do eiusmod tempor.
              </p>

              <ul className={clsx(styles.gridList)}>
                <li>
                  <div
                    className={clsx(styles.categoryCard)}
                    style={{ backgroundColor: "#E8F8F5" }}
                    // style="--color: 170, 75%, 41%"=========================================================
                  >
                    <div className={clsx(styles.cardIcon)}>
                      <img
                        src={svg1}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Online Degree Programs"
                        className={clsx(styles.img)}
                      ></img>
                    </div>
                    <h3 className={clsx(styles.h3)}>
                      <a href="/#" className={clsx(styles.cardTitle)}>
                        Online Degree Programs
                      </a>
                    </h3>
                    <p className={clsx(styles.cardText)}>
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className={clsx(styles.cardBadge)}>7 Courses</span>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(styles.categoryCard)}
                    style={{ backgroundColor: "#FDECEF" }}
                  >
                    <div className={clsx(styles.cardIcon)}>
                      <img
                        src={svg2}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Non-Degree Programs"
                        className={clsx(styles.img)}
                      ></img>
                    </div>

                    <h3 className={clsx(styles.h3)}>
                      <a href="/#" className={clsx(styles.cardTitle)}>
                        Non-Degree Programs
                      </a>
                    </h3>
                    <p className={clsx(styles.cardText)}>
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className={clsx(styles.cardBadge)}>4 Courses</span>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(styles.categoryCard)}
                    // style="--color: 229, 75%, 58%"
                    style={{ backgroundColor: "#ECEFFC" }}
                  >
                    <div className={clsx(styles.cardIcon)}>
                      <img
                        src={svg3}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Off-Campus Programs"
                        className={clsx(styles.img)}
                      ></img>
                    </div>
                    <h3 className={clsx(styles.h3)}>
                      <a href="/#" className={clsx(styles.cardTitle)}>
                        Off-Campus Programs
                      </a>
                    </h3>
                    <p className={clsx(styles.cardText)}>
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className={clsx(styles.cardBadge)}>8 Courses</span>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(styles.categoryCard)}
                    // style="--color: 42, 94%, 55%"
                    style={{ backgroundColor: "#FEF8E8" }}
                  >
                    <div className={clsx(styles.cardIcon)}>
                      <img
                        src={svg4}
                        width="40"
                        height="40"
                        loading="lazy"
                        alt="Hybrid Distance Programs"
                        className={clsx(styles.img)}
                      ></img>
                    </div>

                    <h3 className={clsx(styles.h3)}>
                      <a href="/#" className={clsx(styles.cardTitle)}>
                        Hybrid Distance Programs
                      </a>
                    </h3>
                    <p className={clsx(styles.cardText)}>
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className={clsx(styles.cardBadge)}>8 Courses</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #ABOUT */}

          <section
            className={clsx(styles.section, styles.about)}
            id="about"
            aria-label="about"
          >
            <div className={clsx(styles.container)}>
              <figure className={clsx(styles.aboutBanner)}>
                <div
                  className={clsx(styles.imgHolder)}
                  // style="--width: 520; --height: 370;"
                  style={{ width: "520", height: "370" }}
                >
                  <img
                    src={aboutBanner}
                    width="520"
                    height="370"
                    loading="lazy"
                    alt="about banner"
                    className={clsx(styles.imgCover)}
                  ></img>
                </div>

                <img
                  src={aboutShape1}
                  width="360"
                  height="420"
                  loading="lazy"
                  alt=""
                  className={clsx(styles.shape, styles.aboutShape1)}
                ></img>

                <img
                  src={aboutShape2}
                  width="371"
                  height="220"
                  loading="lazy"
                  alt=""
                  className={clsx(styles.shape, styles.aboutShape2)}
                ></img>

                <img
                  src={aboutShape3}
                  width="722"
                  height="528"
                  loading="lazy"
                  alt=""
                  className={clsx(styles.shape, styles.aboutShape3)}
                ></img>
              </figure>

              <div className={clsx(styles.aboutContent)}>
                <p className={clsx(styles.sectionSubtitle)}>About Us</p>
                <h2 className={clsx(styles.h2, styles.sectionTitle)}>
                  Over 10 Years in{" "}
                  <span className={clsx(styles.span)}>Distant learning</span>{" "}
                  for Skill Development
                </h2>
                <p className={clsx(styles.sectionText)}>
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim ad
                  minim.
                </p>

                <ul className={clsx(styles.aboutList)}>
                  <li className={clsx(styles.aboutItem)}>
                    <ion-icon
                      name="checkmark-done-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <span className={clsx(styles.span)}>Expert Trainers</span>
                  </li>

                  <li className={clsx(styles.aboutItem)}>
                    <ion-icon
                      name="checkmark-done-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <span className={clsx(styles.span)}>
                      Online Remote Learning
                    </span>
                  </li>

                  <li className={clsx(styles.aboutItem)}>
                    <ion-icon
                      name="checkmark-done-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <span className={clsx(styles.span)}>Lifetime Access</span>
                  </li>
                </ul>

                <img
                  src={aboutShape4}
                  width="100"
                  height="100"
                  loading="lazy"
                  alt=""
                  className={clsx(styles.shape, styles.aboutShape4)}
                ></img>
              </div>
            </div>
          </section>

          {/* COURSE */}

          <section
            className={clsx(styles.section, styles.course)}
            id="courses"
            aria-label="course"
          >
            <div className={clsx(styles.container)}>
              <p className={clsx(styles.sectionSubtitle)}>Popular Courses</p>

              <h2 className={clsx(styles.h2, styles.sectionTitle)}>
                Pick A Course To Get Started
              </h2>

              <a href="/#" className={clsx(styles.btn, styles.hasBefore)}>
                <span className="span">Browse more courses</span>

                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </a>
            </div>
          </section>

          {/* VIDEO */}
          <section
            className={clsx(styles.video, styles.hasBgImage)}
            aria-label="video"
            style={{ backgroundImage: `url(${videoBg})` }}
          >
            <div className={clsx(styles.container)}>
              <div className={clsx(styles.videoCard)}>
                <div
                  className={clsx(
                    styles.videoBanner,
                    styles.imgHolder,
                    styles.hasAfter
                  )}
                  // style="--width: ; --height: ;"
                >
                  <img
                    src={videoBanner}
                    width="970"
                    height="550"
                    loading="lazy"
                    alt="video banner"
                    className={clsx(styles.imgCover)}
                  ></img>

                  <button
                    className={clsx(styles.playBtn)}
                    aria-label="play video"
                  >
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                  </button>
                </div>

                <img
                  src={videoShape1}
                  width="1089"
                  height="605"
                  loading="lazy"
                  alt=""
                  className={clsx(styles.shape, styles.videoShape1)}
                ></img>

                <img
                  src={videoShape2}
                  width="158"
                  height="174"
                  loading="lazy"
                  alt=""
                  className={clsx(styles.shape, styles.videoShape2)}
                ></img>
              </div>
            </div>
          </section>

          {/* stats */}
          <section
            className={clsx(styles.section, styles.stats)}
            aria-label="stats"
          >
            <div className={clsx(styles.container)}>
              <ul className={clsx(styles.gridList)}>
                <li>
                  <div
                    className={clsx(styles.statsCard)}
                    // style="--color: 170, 75%, 41%"
                    style={{ backgroundColor: "#FDECEF" }}
                  >
                    <h3 className={clsx(styles.cardTitle)}>29.3k</h3>

                    <p className={clsx(styles.cardText)}>Student Enrolled</p>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(styles.statsCard)}
                    // style="--color: 351, 83%, 61%"
                    style={{ backgroundColor: "#E8F8F5" }}
                  >
                    <h3 className={clsx(styles.cardTitle)}>32.4K</h3>

                    <p className={clsx(styles.cardText)}>Class Completed</p>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(styles.statsCard)}
                    // style="--color: 260, 100%, 67%"
                    style={{ backgroundColor: "#ECEFFC" }}
                  >
                    <h3 className={clsx(styles.cardTitle)}>100%</h3>

                    <p className={clsx(styles.cardText)}>Satisfaction Rate</p>
                  </div>
                </li>

                <li>
                  <div
                    className={clsx(styles.statsCard)}
                    // style="--color: 42, 94%, 55%"
                    style={{ backgroundColor: "#FEF8E8" }}
                  >
                    <h3 className={clsx(styles.cardTitle)}>354+</h3>

                    <p className={clsx(styles.cardText)}>Top Instructors</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section
            className={clsx(styles.section, styles.blog, styles.hasBgImage)}
            id="blog"
            aria-label="blog"
            style={{ backgroundImage: `url(${blogBg})` }}
          >
            <div className={clsx(styles.container)}>
              <p className={clsx(styles.sectionSubtitle)}>Latest Articles</p>

              <h2 className={clsx(styles.h2, styles.sectionTitle)}>
                Get News With Eduweb
              </h2>

              <ul className={clsx(styles.gridList)}>
                <li>
                  <div className={clsx(styles.blogCard)}>
                    <figure
                      className={clsx(
                        styles.cardBanner,
                        styles.imgHolder,
                        styles.hasAfter
                      )}
                      // style="--width: 370; --height: 370;"
                      style={{ width: "370", height: "370" }}
                    >
                      <img
                        src={blog1}
                        width="370"
                        height="370"
                        loading="lazy"
                        alt="Become A Better Blogger: Content Planning"
                        className={clsx(styles.imgCover)}
                      ></img>
                    </figure>

                    <div className={clsx(styles.cardContent)}>
                      <a
                        href="/#"
                        className={clsx(styles.cardBtn)}
                        aria-label="read more"
                      >
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </a>

                      <a href="/#" className={clsx(styles.cardSubtitle)}>
                        Online
                      </a>

                      <h3 className={clsx(styles.h3)}>
                        <a href="/#" className={clsx(styles.cardTitle)}>
                          Become A Better Blogger: Content Planning
                        </a>
                      </h3>

                      <ul className={clsx(styles.cardMetaList)}>
                        <li className={clsx(styles.cardMetaItem)}>
                          <ion-icon
                            name="calendar-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className={clsx(styles.span)}>
                            Dec 10, 2022
                          </span>
                        </li>

                        <li className={clsx(styles.cardMetaItem)}>
                          <ion-icon
                            name="chatbubbles-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className={clsx(styles.span)}>Com 09</span>
                        </li>
                      </ul>

                      <p className={clsx(styles.cardText)}>
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={clsx(styles.blogCard)}>
                    <figure
                      className={clsx(
                        styles.cardBanner,
                        styles.imgHolder,
                        styles.hasAfter
                      )}
                      // style="--width: 370; --height: 370;"
                      style={{ width: "370", height: "370" }}
                    >
                      <img
                        src={blog2}
                        width="370"
                        height="370"
                        loading="lazy"
                        alt="Become A Better Blogger: Content Planning"
                        className="img-cover"
                      ></img>
                    </figure>

                    <div className={clsx(styles.cardContent)}>
                      <a
                        href="/#"
                        className={clsx(styles.cardBtn)}
                        aria-label="read more"
                      >
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </a>

                      <a href="/#" className={clsx(styles.cardSubtitle)}>
                        Online
                      </a>

                      <h3 className={clsx(styles.h3)}>
                        <a href="/#" className={clsx(styles.cardTitle)}>
                          Become A Better Blogger: Content Planning
                        </a>
                      </h3>

                      <ul className={clsx(styles.cardMetaList)}>
                        <li className={clsx(styles.cardMetaItem)}>
                          <ion-icon
                            name="calendar-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className={clsx(styles.span)}>
                            Dec 10, 2022
                          </span>
                        </li>

                        <li className={clsx(styles.cardMetaItem)}>
                          <ion-icon
                            name="chatbubbles-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className={clsx(styles.span)}>Com 09</span>
                        </li>
                      </ul>

                      <p className={clsx(styles.cardText)}>
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className={clsx(styles.blogCard)}>
                    <figure
                      className={clsx(
                        styles.cardBanner,
                        styles.imgHolder,
                        styles.hasAfter
                      )}
                      // style="--width: 370; --height: 370;"
                      style={{ width: "370", height: "370" }}
                    >
                      <img
                        src={blog3}
                        width="370"
                        height="370"
                        loading="lazy"
                        alt="Become A Better Blogger: Content Planning"
                        className={clsx(styles.imgCover)}
                      ></img>
                    </figure>

                    <div className={clsx(styles.cardContent)}>
                      <a
                        href="/#"
                        className={clsx(styles.cardBtn)}
                        aria-label="read more"
                      >
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </a>

                      <a href="/#" className={clsx(styles.cardSubtitle)}>
                        Online
                      </a>

                      <h3 className={clsx(styles.h3)}>
                        <a href="/#" className={clsx(styles.cardTitle)}>
                          Become A Better Blogger: Content Planning
                        </a>
                      </h3>

                      <ul className={clsx(styles.cardMetaList)}>
                        <li className={clsx(styles.cardMetaItem)}>
                          <ion-icon
                            name="calendar-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className={clsx(styles.span)}>
                            Dec 10, 2022
                          </span>
                        </li>

                        <li className={clsx(styles.cardMetaItem)}>
                          <ion-icon
                            name="chatbubbles-outline"
                            aria-hidden="true"
                          ></ion-icon>

                          <span className={clsx(styles.span)}>Com 09</span>
                        </li>
                      </ul>

                      <p className={clsx(styles.cardText)}>
                        Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default HomeScreen;
