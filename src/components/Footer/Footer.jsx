import Container from "../Container";
import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';
import {MdContactMail} from 'react-icons/md';
const Footer = () => {
    return (
        <div className="dark:bg-black dark:text-white">
            <hr />
            <Container>
                <footer className="flex justify-between p-10 ">
                    <div>
                        <h2 className="font-serif normal-case text-2xl dark:text-yellow-500">Sayeed</h2>
                        <p className="pt-6 pb-2 text-xl">Md. Abu Sayeed Ifty</p>
                        <p>MERN Stack Developer.</p>
                    </div>
                    <div>
                        <span className="text-xl font-bold dark:text-yellow-500">Social</span>
                        <div className="grid grid-flow-col gap-4 mt-6">
                            <a href="https://github.com/Sayeedifty1"> <BsGithub className='mb-6 text-xl hover:text-violet-500'></BsGithub> </a>
                            <a href="https://www.linkedin.com/in/md-abu-sayeed-ifty-8b047b1a6/"><ImLinkedin className='mb-6 text-xl hover:text-blue-500'></ImLinkedin></a>
                            <a href="https://www.facebook.com/sayeed.ifty/"><BsFacebook className='mb-6 text-xl hover:text-blue-600'></BsFacebook></a>
                            <a href=""><MdContactMail className='mb-6 text-xl hover:text-red-500'></MdContactMail></a>
                        </div>
                    </div>

                </footer>
                <footer className="footer footer-center pb-4 ">
                    <div>
                        <p>Copyright © 2023 - All right reserved by Md. Abu Sayeed</p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;