import React from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import logo from "../../assets/img/img_homepage/logo.svg";
import {Link} from 'react-router-dom'

function Header() {
 

  return (
    <div>
      <header className={clsx(styles.header)} data-header style={{position: "fixed"}}>
        <div className={clsx(styles.container)}>
          <a href="#" className={clsx(styles.logo)}>
            <img src={logo} width="162" height="50" alt="EduWeb logo"></img>
          </a>

          <nav className={clsx(styles.navbar)} data-navbar>
            <div className={clsx(styles.wrapper)}>
              <a href="#" className={clsx(styles.logo)}>
                <img src={logo} width="162" height="50" alt="EduWeb logo"></img>
              </a>

              <button
                className={clsx(styles.navCloseBtn)}
                aria-label="close menu"
                data-nav-toggler
              >
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <ul className={clsx(styles.navbarList)}>
              <li className={clsx(styles.navbarItem)}>
                <Link
                  to="/"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  Home
                </Link>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <Link
                  to="/course"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  Course
                </Link>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <a
                  href="/teacher"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  Teacher
                </a>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <a
                  href="#blog"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  Blog
                </a>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <a
                  href="#about"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  About
                </a>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <a href="#" className={clsx(styles.navbarLink)} data-nav-link>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className={clsx(styles.headerActions)}>
            <button
              className={clsx(styles.headerActionBtn)}
              aria-label="toggle search"
              title="Search"
            >
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>

            <button
              className={clsx(styles.headerActionBtn)}
              aria-label="cart"
              title="Cart"
            >
              <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>

              <span className={clsx(styles.btnBadge)}>0</span>
            </button>

            <a href="#" className={clsx(styles.btn, styles.hasBefore)}>
              <span className={clsx(styles.span)}>Try for free</span>

              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>

            <button
              className={clsx(styles.headerActionBtn)}
              aria-label="open menu"
              data-nav-toggler
            >
              <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <div
            className={clsx(styles.overlay)}
            data-nav-toggler
            data-overlay
          ></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
