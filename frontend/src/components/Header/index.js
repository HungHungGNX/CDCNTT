import React from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import logo from "../../assets/img/img_homepage/logo.svg";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <header className={clsx(styles.header)} data-header style={{position: "fixed"}}>
        <div className={clsx(styles.container)}>
          <Link to="/" className={clsx(styles.logo)}>
            <img src={logo} width="162" height="50" alt="EduWeb logo"></img>
          </Link>

          <nav className={clsx(styles.navbar)} data-navbar>
            <div className={clsx(styles.wrapper)}>
              <Link to="/" className={clsx(styles.logo)}>
                <img src={logo} width="162" height="50" alt="EduWeb logo"></img>
              </Link>

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
                <Link
                  to="/teacher"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  Teacher
                </Link>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <Link to="/job" className={clsx(styles.navbarLink)} data-nav-link>
                  Job
                </Link>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <Link
                  to="/mycv"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  MyCv
                </Link>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <Link
                  to="/about"
                  className={clsx(styles.navbarLink)}
                  data-nav-link
                >
                  About
                </Link>
              </li>

              <li className={clsx(styles.navbarItem)}>
                <Link to="/contact" className={clsx(styles.navbarLink)} data-nav-link>
                  Contact
                </Link>
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
             <Link to="/cart"><ion-icon name="cart-outline" aria-hidden="true"></ion-icon></Link> 
            </button>

            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username" style={{fontSize:'16px'}}>
                <LinkContainer to="/profile" style={{fontSize:'12px'}}>
                  <NavDropdown.Item >Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler} style={{fontSize:'12px'}}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login" className={clsx(styles.btn, styles.hasBefore)}>
              <span className={clsx(styles.span)} >Login</span>

              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </Link>
            )}

            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='💎' id='adminmenue' style={{fontSize:'12px'}}>
                                    <LinkContainer to='/admin/userlist' style={{fontSize:'12px'}}>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist' style={{fontSize:'12px'}}>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist' style={{fontSize:'12px'}}>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/joblist' style={{fontSize:'12px'}}>
                                        <NavDropdown.Item>Jobs</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}


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
