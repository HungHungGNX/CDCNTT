import React from "react";
import clsx from "clsx";
import styles from "./Footer.module.css";
import logoLight from "../../assets/img/img_homepage/logo-light.svg";
import footerbBgr from "../../assets/img/img_homepage/footer-bg.png";
function Footer() {
  return (
    <div>
      <footer
        className={clsx(styles.footer)}
        style={{ backgroundImage: `url(${footerbBgr})` }}
      >
        <div className={clsx(styles.footerTop, styles.section)}>
          <div className={clsx(styles.container, styles.gridList)}>
            <div className={clsx(styles.footerBrand)}>
              <a href="/#" className={clsx(styles.logo)}>
                <img
                  src={logoLight}
                  width="162"
                  height="50"
                  alt="EduWeb logo"
                ></img>
              </a>
              <p className={clsx(styles.footerBrandText)}>
                Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm
                tempor incidid unt labore dolore.
              </p>
              <div className={clsx(styles.wrapper)}>
                <span className={clsx(styles.span)}>Add:</span>
                <address className={clsx(styles.address)}>
                  70-80 Upper St Norwich NR2
                </address>
              </div>
              <div className={clsx(styles.wrapper)}>
                <span className={clsx(styles.span)}>Call:</span>
                <a href="tel:+011234567890" className={clsx(styles.footerLink)}>
                  +01 123 4567 890
                </a>
              </div>
              <div className={clsx(styles.wrapper)}>
                <span className={clsx(styles.span)}>Email:</span>

                <a
                  href="mailto:info@eduweb.com"
                  className={clsx(styles.footerLink)}
                >
                  info@eduweb.com
                </a>
              </div>
            </div>

            <ul className={clsx(styles.footerList)}>
              <li>
                <p className={clsx(styles.footerListTitle)}>Online Platform</p>
              </li>

              <li>
                <a
                  href="/#"
                  className={clsx(styles.footerLink)}
                  style={{ color: "inherit" }}
                >
                  About
                </a>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Courses
                </a>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Instructor
                </a>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Events
                </a>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Instructor Profile
                </a>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Purchase Guide
                </a>
              </li>
            </ul>

            <ul className={clsx(styles.footerList)}>
              <li>
                <p className={clsx(styles.footerListTitle)}>Links more </p>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Contact Us
                </a>
              </li>

              {/* <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Gallery
                </a>
              </li> */}

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  News & Articles
                </a>
              </li>

              {/* <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  FAQ's
                </a>
              </li> */}

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Sign In/Registration
                </a>
              </li>

              <li>
                <a href="/#" className={clsx(styles.footerLink)}>
                  Coming Soon
                </a>
              </li>
            </ul>

            <div className={clsx(styles.footerList)}>
              <p className={clsx(styles.footerListTitle)}>Contacts</p>

              <p className={clsx(styles.footerListText)}>
                Enter your email address to register to our newsletter
                subscription
              </p>

              <form action="" className={clsx(styles.newsletterForm)}>
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  required
                  className={clsx(styles.inputField)}
                ></input>

                <button
                  type="submit"
                  className={clsx(styles.btn, styles.HasBefore)}
                >
                  <span className={clsx(styles.span)}>Subscribe</span>
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </button>
              </form>

              <ul className={clsx(styles.SocialList)}>
                <li>
                  <a href="/#" className={clsx(styles.socialLink)}>
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className={clsx(styles.socialLink)}>
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className={clsx(styles.socialLink)}>
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className={clsx(styles.socialLink)}>
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="/#" className={clsx(styles.socialLink)}>
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className={clsx(styles.footerBottom)}>
          <div className={clsx(styles.container)}>
            <p className={clsx(styles.copyright)}>
              Copyright 2022 All Rights Reserved by{" "}
              <a href="/#" className={clsx(styles.copyrightLink)}>
                CD CNTT 19N14
              </a>
            </p>
          </div>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
