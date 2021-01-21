import React from "react";
import { ReactComponent as IconMail } from "../images/SVG/mail.svg";
import { ReactComponent as IconLinkedin } from "../images/SVG/linkedin.svg";
import { ReactComponent as IconGithub } from "../images/SVG/github.svg";
import { ReactComponent as ArrowRight } from "../images/SVG/arrow-bold-right.svg";

const Header = () => {
  return (
    <header className="header" id="home">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <a href="#home">Home</a>
          </li>
          <li className="header__list-item">
            <a href="#about">About</a>
          </li>
          <li className="header__list-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="header__list-item">
            <a href="#contact">Contact me!</a>
          </li>
        </ul>
      </nav>
      <section className="header__container">
        <h1 className="header__title animate__animated animate__bounceInLeft">
          <span className="hi">Hi! This is </span>
          <span className="name">Javier Escuadra</span>
        </h1>
        <h2 className="header__subtitle animate__animated animate__bounceInRight">
          Front-end Web Developer
        </h2>
        <div className="header__social">
          <ul className="header__social-list animate__animated animate__bounceInRight">
            <li className="header__social-list-item">
              <a
                className="link"
                href="mailto:javiiescuadra@gmail.com"
                target="_top"
              >
                <IconMail />
              </a>
            </li>

            <li className="header__social-list-item">
              <a
                className="link"
                href="https://www.linkedin.com/in/javierescuadra/"
                target="__blank"
              >
                <IconLinkedin />
              </a>
            </li>
            <li className="header__social-list-item">
              <a
                className="link"
                href="https://www.github.com/javiuty"
                target="__blank"
              >
                <IconGithub />
              </a>
            </li>
          </ul>
        </div>
        <a href="#projects">
          <button className="btn animate__animated animate__fadeIn">
            View my work
            <ArrowRight style={{ marginLeft: "1rem" }} />
          </button>
        </a>
      </section>
    </header>
  );
};

export default Header;
