import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";   
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;