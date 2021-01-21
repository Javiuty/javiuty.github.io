import React from "react";
import { ReactComponent as ArrowUp } from "../images/SVG/chevron-up.svg";
import { ReactComponent as IconMain } from "../images/SVG/mail.svg";
import { ReactComponent as IconLinkedin } from "../images/SVG/linkedin.svg";
import { ReactComponent as IconGithub } from "../images/SVG/github.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  //   arreglar SVG flechas

  return (
    <footer className="footer">
      <a className="footer__link" href="#home">
        <ArrowUp className="arrow-up animate__animated animate__fadeOut" />
        <ArrowUp className="arrow-up animate__animated animate__fadeOut" />
      </a>
      <div className="footer__container">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a
              className="link"
              href="mailto:javiiescuadra@gmail.com"
              target="__blank"
            >
              <IconMain />
            </a>
          </li>
          <li className="footer__menu-item">
            <a
              className="link"
              href="https://www.linkedin.com/in/javierescuadra/"
              target="__blank"
            >
              <IconLinkedin />
            </a>
          </li>
          <li className="footer__menu-item">
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
      <h4 className="footer__name">
        Javier Escuadra{" "}
        <span style={{ color: "var(--color-primary)" }}>&copy;</span>{" "}
        <span className="footer__copy">{year}</span>
      </h4>
    </footer>
  );
};

export default Footer;
