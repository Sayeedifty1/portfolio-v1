
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
import { createElement, useState } from "react";
import { content } from "./Content";
// import modal package
import Modal from "react-modal";
import TextShpere from "./Sphere/TextSphere";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "23rem",
        width: "90%",
    },
    overlay: {
        padding: "2rem",
    },
};
Modal.setAppElement("#root");

const Skills = () => {
    const { skills } = content;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectSkill, setSelectSkill] = useState(null);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="min-h-fit bg-bg_light_primary " id="skills">
            {/* modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="flex items-center gap-2">
                    <img className="h-10" src={selectSkill?.logo} alt="..." />
                    <h6>{selectSkill?.name}</h6>
                </div>
                <br />
                <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit, ame.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>
                        Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
                    </li>
                    <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
                        beatae quos rem.
                    </li>
                </ul>
                <br />
                <div className="flex justify-end">
                    <button onClick={closeModal} className="btn">
                        Close
                    </button>
                </div>
            </Modal>

            {/* content */}
            <div className=" flex  gap-4 justify-center">

                <div className=" grid grid-cols-2 gap-4 justify-center">
                    {skills.skills_content.map((skill, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 400}
                            className="bg-white sm:cursor-pointer relative group flex items-center gap-5 p-5  rounded-md border-2 border-slate-200" >
                            <div>
                                <img
                                    src={skill.logo}
                                    alt="..."
                                    className="w-20 group-hover:scale-125 duration-200"
                                />
                                <h6>{skill.name}</h6>
                                <p className="italic">{skill.para}</p>
                                <div
                                    onClick={() => {
                                        setSelectSkill(skill);
                                        openModal();
                                    }}
                                    className="text-xl absolute top-3 right-3"
                                >
                                    {createElement(skills.icon)}
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <TextShpere></TextShpere>
                </div>
            </div>
        </section>
    );
};

export default Skills;