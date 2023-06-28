
import { Swiper, SwiperSlide } from "swiper/react";
import projectImg1 from "../../assets/projectImg1.png"
import projectImg2 from "../../assets/projectImg2.png"
import projectImg3 from "../../assets/projectImg3.png"
import "swiper/css"
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Container from "../Container";

const Projects = () => {
  const Project = [
    {
      id: 1,
      name: "Trading Website",
      info: "Trade The Markets with Fast Direct Execution and Support in 30+ Languages at XM. Licensed and Regulated Broker, Multi Awarded Platforms Available On Any Device & 24/7 Help. Free trading signals.",
      img: projectImg1,
      link: "https://www.google.com",
    },
    {
      id: 2,
      name: "Resturent Website",
      info: `A great restaurant website supports all of your restaurant
          marketing activities: it can attract new customers, maintain loyal
          ones, and raise the overall profile of the establishment outside
          of the physical location. It's a crucial aspect of running a
          successful business.`,
      img: projectImg2,
      link: "https://www.google.com",
    },
    {
      id: 3,
      name: "Ikea Clone Website",
      info: "Trade The Markets with Fast Direct Execution and Support in 30+ Languages at XM. Licensed and Regulated Broker, Multi Awarded Platforms Available On Any Device & 24/7 Help. Free trading signals.",
      img: projectImg3,
      link: "https://www.google.com",
    },
    {
      id: 4,
      name: "Ikea Clone Website",
      info: "Trade The Markets with Fast Direct Execution and Support in 30+ Languages at XM. Licensed and Regulated Broker, Multi Awarded Platforms Available On Any Device & 24/7 Help. Free trading signals.",
      img: projectImg2,
      link: "https://www.google.com",
    },
    {
      id: 5,
      name: "Ikea Clone Website",
      info: "Trade The Markets with Fast Direct Execution and Support in 30+ Languages at XM. Licensed and Regulated Broker, Multi Awarded Platforms Available On Any Device & 24/7 Help. Free trading signals.",
      img: projectImg1,
      link: "https://www.google.com",
    },

  ];

  return (
    <section className="projects dark:bg-black" id="projects">
      <Container>
        <div className="projects__heading">
          <h2 className="dark:text-yellow-500">Featured Projects</h2>
          <p className="dark:text-white">Here are a few projects I&#39;ve worked on.</p>
        </div>
        <div className="projects__slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              1: {
                slidesPerView: 1,
                spaceBetween: 0
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30
              }

            }}
            modules={[Autoplay]}
          >
            {Project.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="projects__card" >
                  <img
                    src={item.img}
                    alt="projectImg"
                    className="projects__card-img"
                  />
                  <div className="projects__card-details">
                    <h3>{item.name}</h3>
                    <p>{item.info}</p>
                    <a href={item.link} className="projects__card-details-btn">
                      Visit Website
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Projects;