
// const Skills = () => {
//     return (
//         <div className="py-12 dark:bg-black">
//             <h2 className="text-5xl text-center font-bold">Skills and Tools</h2>
//             <div className="flex justify-center items-center space-x-10 w-5/6 mx-auto ">
//                 <img className="w-48 h-40" src="https://i.ibb.co/3stWtXy/html5-logo-31813.png" alt="" />
//                 <img className="w-48 h-40 bg-white" src="https://i.ibb.co/HYtQPTW/pngegg-1.png" alt="" />

//                 <img className="w-48" src="https://i.ibb.co/M1frk1Y/mongo.png" alt="" />
//                 <img className="w-48" src="https://i.ibb.co/LhVHHLB/express.png" alt="" />
//                 <img className="w-48 animate-spin-slow" src="https://i.ibb.co/c8t2WJK/react.png" alt="" />
//                 <img className="w-48" src="https://i.ibb.co/Dbh6b41/node.png" alt="" />
//                 <img className="w-48 h-40" src="https://i.ibb.co/7rXJ6Zt/pngegg.png" alt="" />

//                 <img className="w-48 h-40" src="https://i.ibb.co/zQMQQ6y/pngegg-2.png" alt="" />
//             </div>
//         </div>
//     );
// };

// export default Skills;
// import content

// import modal package

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
        <section className="min-h-fit bg-bg_light_primary " id="skills">
            
            <h2 className="text-4xl font-bold text-center mb-36">Skills and Tools</h2>

            
            <div className=" flex gap-24 justify-center">

                <div className=" grid grid-cols-4 gap-8 justify-center">
                    {skills.map((skill,index) => 
                    <div key={index} >
                        <div className="text-center h-32 w-32 px-10 pt-6 bg-gray-100 rounded-full hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mx-auto">
                        <img className="w-12 mb-2" src={skill.picture} alt="" />
                        
                        <p className="inline-flex text-2xl font-semibold"><Odometer score={skill.score}></Odometer>%</p>
                        </div>
                        <p className="text-center mt-4 text-xl font font-semibold">{skill.name}</p>
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