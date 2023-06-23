

import { useEffect, useState } from "react";

import Odometer from "./OdoMeter";
import TextShpere from "./Sphere/TextSphere";

const Skills = () => {
    
    const [skills, setSkills] = useState([])
    useEffect(() => {
        fetch('/skill.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <section className="min-h-fit bg-bg_light_primary dark:bg-black" id="skills">
            
            <h2 className="text-4xl font-bold text-center mb-36 dark:text-yellow-400">Skills and Tools</h2>

           
            <div className=" flex gap-24 justify-center">

                <div className=" grid grid-cols-4 gap-8 justify-center">
                    {skills.map((skill,index) => 
                    <div key={index} >
                        <div className="text-center h-32 w-32 px-10 pt-6 bg-gray-100 dark:bg-gray-950 rounded-full hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mx-auto">
                        <img className="w-12 mb-2" src={skill.picture} alt="" />
                        
                        <p className="inline-flex text-2xl font-semibold dark:text-white"><Odometer score={skill.score}></Odometer>%</p>
                        </div>
                        <p className="text-center mt-4 text-xl font font-semibold dark:text-yellow-400">{skill.name}</p>
                    </div>
                    )}
                
                </div>
               
                <div>
                    <TextShpere></TextShpere>
                </div>
            </div>
        </section>
    );
};

export default Skills;