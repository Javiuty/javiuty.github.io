import React, { useState } from "react";
import { ReactComponent as IconAttachment } from "../images/SVG/attachment.svg";
import { ReactComponent as IconMessage } from "../images/SVG/message.svg";
import profile1 from "../images/perfil/perfil-1.jpg";
import profile2 from "../images/perfil/perfil-2.jpg";
import profile3 from "../images/perfil/perfil-3.jpg";
import CV from "../images/JEscuadra_CV.pdf";

const About = () => {
  const [image, setImage] = useState(profile1);

  return (
    <section className="about" id="about">
      <h3>About</h3>
      <div className="about__main__container">
        <article className="about__container__images">
          <img
            className="about__container__mainphoto"
            id="main-photo"
            src={image}
            alt="Foto de Javier Escuadra"
          />
          <div className="about__container__photos">
            <img
              src={profile1}
              alt="Foto de Javier Escuadra"
              onClick={() => setImage(profile1)}
            />
            <img
              src={profile2}
              alt="Foto de Javier Escuadra"
              onClick={() => setImage(profile2)}
            />
            <img
              src={profile3}
              alt="Foto de Javier Escuadra"
              onClick={() => setImage(profile3)}
            />
          </div>
        </article>
        <article className="about__container__descr">
          <h4 className="about__container__title">Hi Guys!</h4>
          <p className="about__container__paragraph">
            I'm a developer with a passion for building things with code. I live
            in Madrid, Spain. I love sports and aviation... I'm also a fan of
            traveling and veggie food. My friends say than I'm creative and have
            a great sense of humor.
          </p>
          <p className="about__container__paragraph">
            I've worked with companies like La Vanguardia, La Pajita, Cedrion,
            Wild Code School, ISDI...
          </p>
          <div className="about__container__buttons">
            <a href={CV} target="__blank" rel="noreferrer noopener" download="">
              <button className="btn">
                <IconAttachment />
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button className="btn">
                <IconMessage />
                Contact Me!
              </button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
