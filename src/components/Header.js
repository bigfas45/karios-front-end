import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import IMG from './logo-3_1_50.png';

const Header = ({ history }) => {
  return (
    <header
      id="header"
      className="full-header"
      data-sticky-logo-height="52"
      data-menu-padding="32"
    >
      <div id="header-wrap">
        <div className="container">
          <div className="header-row">
            <div id="logo">
              <a
                href="/"
                className="standard-logo"
                data-dark-logo={IMG}
              >
                <img src={IMG} alt="Canvas Logo" />
              </a>
              <a
                href="/"
                className="retina-logo"
                data-dark-logo={IMG}
              >
                <img src={IMG} alt="Canvas Logo" />
              </a>
            </div>

            <div id="primary-menu-trigger">
              <svg className="svg-trigger" viewBox="0 0 100 100">
                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                <path d="m 30,50 h 40"></path>
                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
              </svg>
            </div>

            <nav className="primary-menu sub-title">
              <ul className="menu-container">
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    <div>Home</div>
                    <span>Lets Start</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/about">
                    <div>ABOUT</div>
                    <span>Know More</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/services">
                    <div>Services</div>
                    <span>Know More</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/contactus">
                    <div>Contact</div>
                    <span>Know More</span>
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/trainings">
                    <div>Trainings</div>
                    <span>Know More</span>
                  </a>
                </li>
                {isAuthenticated() && (
                  <li className="menu-item">
                    <span
                      className="menu-link"
                      style={{ cursor: 'pointer' }}
                      onClick={() =>
                        signout(() => {
                          history.pushState('/');
                        })
                      }
                    >
                      <div>Signout</div>
                      <span>Know More</span>
                    </span>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-wrap-clone"></div>
    </header>
  );
};

export default withRouter(Header);
