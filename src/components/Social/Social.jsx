import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';
import {MdContactMail} from 'react-icons/md';

const Social = () => {
    return (
        <div className="absolute bottom-16 left-10 dark:text-white">
            <a  href="https://github.com/Sayeedifty1"> <BsGithub className='mb-6 text-xl hover:text-violet-500'></BsGithub> </a>
            <a href="https://www.linkedin.com/in/md-abu-sayeed-ifty-8b047b1a6/"><ImLinkedin className='mb-6 text-xl hover:text-blue-500'></ImLinkedin></a>
            <a href="https://www.facebook.com/sayeed.ifty/"><BsFacebook className='mb-6 text-xl hover:text-blue-600'></BsFacebook></a>
            <a href=""><MdContactMail className='mb-6 text-xl hover:text-red-500'></MdContactMail></a>
        </div>
    );
};

export default Social;