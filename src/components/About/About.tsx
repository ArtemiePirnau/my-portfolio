import img from "./me.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h3 className="about__title">Who am i?</h3>
        <p className="about__text">A little description</p>
        <div className="about__inner">
          <div className="about-box">
            <h6 className="about-box__title">ABOUT ME</h6>
            <p className="about-box__text">
              I am a person focused on details and solving the things that are
              most important.
            </p>
            <p className="about-box__text">
              I love to study something new every day and do everything I can to
              become a professional and creative. Understandably, I love to
              solve problems and work with nice people.
            </p>
          </div>
          <img className="about-box__img" src={img} alt="myself" />
          <div className="about__info">
            <h6 className="about__info-title">Personal Information</h6>
            <ul className="about__info-list">
              <li className="about__info-item">
                <span className="about__info-item--label">Full Name</span>
                Pîrnău Artemie
              </li>
              <li className="about__info-item">
                <span className="about__info-item--label">Date of birth</span>
                06.07.2004
              </li>
              <li className="about__info-item">
                <span className="about__info-item--label">E-mail</span>
                <a
                  className="about__info-link"
                  href="mailto:artemiepirnau@gmail.com"
                >
                  artemiepirnau@gmail.com
                </a>
              </li>
              <li className="about__info-item">
                <span className="about__info-item--label">Telegram</span>
                <a href="https://telegram.me/artemiee">@artemiee</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
