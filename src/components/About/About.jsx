import Container from "../Container";


const About = () => {
  return (
    <section className="about dark:bg-black dark:text-white" id="about">
      <Container>
        <div className="about__wrapper ">
          <div className="about__heading">
            <h4 >WHO AM I ?</h4>
            <h2 className=" dark:text-yellow-500">ABOUT ME</h2>
            <hr  className=" dark:text-yellow-500"/>
          </div>
          <div className="about__content">
            <h3>👋 Hi ! I am Sayeed Ifty.</h3>
            <p>
              I'm a Frontend Developer with expertise of 3 years of professional
              work experience.
              <br /> I Strive to create original, Highly Enhance Websites and
              impactful user experiences.
              <br /> I’m quietly confident, naturally curious, and prepetually
              working on improving my chops one <br /> design problem at a time.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;