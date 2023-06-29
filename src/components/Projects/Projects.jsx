
import { Swiper, SwiperSlide } from "swiper/react";
import projectImg1 from "../../assets/projectImg1.png"
import projectImg2 from "../../assets/projectImg2.png"
import projectImg3 from "../../assets/projectImg3.png"
import projectImg4 from "../../assets/projectImg4.png"
import projectImg5 from "../../assets/projectImg5.png"
import "swiper/css"
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Container from "../Container";
import {AiFillEye, AiFillGithub} from "react-icons/ai"
const Projects = () => {
  const Project = [
    {
      id: 1,
      name: "Melody Master",
      info: "A Full stack website with Admin, Instructor and user dashboard. Also use mongodb crud operation.Several packages are used, one of them is framer motion.",
      img: projectImg1,
      link: "https://github.com/Sayeedifty1/Melody-Master-Client",
      github: "https://github.com/Sayeedifty1/Melody-Master-Client"
    },
    {
      id: 2,
      name: "MCQueen Toys",
      info: "A Full stack toy selling website with mongodb crud operation.Used react tabs to fetch data category wise.",
      img: projectImg2,
      link: "https://toy-e-commerce.web.app",
      github: "https://github.com/Sayeedifty1/McQueen-toys-client"
    },
    {
      id: 3,
      name: "Next Page",
      info: "React base book selling website. Used lottiefiles for animated svgs to make the site more attractive.",
      img: projectImg3,
      link: "https://unadvised-giraffe.surge.sh",
      github: "https://github.com/Sayeedifty1/next-page"
    },
    {
      id: 4,
      name: "AI Sumz",
      info: "Article Summarizer with Chat GPT-4 API using React, Redux toolkit and Rapid api.",
      img: projectImg4,
      link: "https://649892b015317c37c5be25f0--bucolic-alpaca-17c710.netlify.app",
      github: "https://github.com/Sayeedifty1/ai-summarizer"
    },
    {
      id: 5,
      name: "AI hub",
      info: "This site is created Html CSS and JavaScript.Data is fetch from API call, and error handled using JavaScript conditions",
      img: projectImg5,
      link: "https://singular-fox-852611.netlify.app",
      github: "https://github.com/Sayeedifty1/AI-universe-hub"
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
                    <div className="flex">
                    <a href={item.link} className="projects__card-details-btn">
                      <AiFillEye></AiFillEye>
                    </a>
                    <a href={item.github} className="projects__card-details-btn">
                       <AiFillGithub></AiFillGithub>
                    </a>
                    </div>
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