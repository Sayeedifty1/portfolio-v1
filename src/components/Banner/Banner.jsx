/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import './Banner.css'
import {BiPlus} from 'react-icons/bi'

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
        <div className="hero min-h-screen flex w-full dark:bg-black">

            <div className="w-6/12 text-center">
                <h1 className="mb-5 text-5xl font-bold dark:text-yellow-300">Hi, It's Sayeed, <br /> {text}</h1>
            </div>

            <div className="h-80 w-44 rounded-full relative">
                <div className="absolute top-10 left-6 z-10 h-full w-full rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://i.ibb.co/YN8H6Jd/IMG-1044.jpg" alt="" />
                </div>
                <div className="absolute top-20 left-40 z-30 rounded-2xl w-60 bg-blue-50 dark:bg-gray-700 dark:text-yellow-500 pr-10 pl-4 py-4 flex gap-4 font-bold"><BiPlus className=" mt-1"></BiPlus><span>Attention To-Detail</span></div>
                <div className="absolute top-40 left-40 z-30 rounded-2xl w-60 bg-blue-50 dark:bg-gray-700 dark:text-yellow-500 pr-10 pl-4 py-4 flex gap-4 font-bold"><BiPlus className=" mt-1"></BiPlus><span>Attention To-Detail</span></div>
                <div className="absolute top-60 left-40 z-30 rounded-2xl w-60 bg-blue-50 dark:bg-gray-700 dark:text-yellow-500 pr-10 pl-4 py-4 flex gap-4 font-bold"><BiPlus className=" mt-1"></BiPlus><span>Attention To-Detail</span></div>
               
                
                <div className="absolute top-2 left-2 z-20 h-96 w-44 rounded-full border-8 border-white dark:border-black  border-transparent"></div>
            </div>



        </div>
    );
};

export default Banner;