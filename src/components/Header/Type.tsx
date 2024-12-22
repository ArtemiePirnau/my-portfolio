import TypeIt from "typeit-react";

const Type = () => {
  return (
    <TypeIt
      className="header__about-title"
      getBeforeInit={(instance) => {
        instance
          .type("Hi, <br> I'm Artemie, <br>")
          .pause(750)
          .type("Front End Developer");
        return instance;
      }}
    />
  );
};
export default Type;
