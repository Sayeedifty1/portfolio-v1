/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import './Banner.css'


const Banner = () => {
   
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 1000);
    const toRotate = ["Web developer", "UI/UX Designer", "Full Stack Developer"];
    const period = 2000;


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setDelta(period);
            setIsDeleting(true);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [delta, text, tick])



    return (
        <div className="hero min-h-screen relative">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-5xl font-bold">Hi, It's Sayeed, <br /> {text}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;