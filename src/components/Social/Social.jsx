import {BsFacebook} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';

import {MdContactMail} from 'react-icons/md';

const Social = () => {
    return (
        <div className="absolute bottom-16 left-20">
            <a  href="https://github.com/Sayeedifty1"> <BsGithub className='mb-6 text-xl'></BsGithub> </a>
            <a href="https://www.linkedin.com/in/md-abu-sayeed-ifty-8b047b1a6/"><ImLinkedin className='mb-6 text-xl'></ImLinkedin></a>
            <a href="https://www.facebook.com/sayeed.ifty/"><BsFacebook className='mb-6 text-xl'></BsFacebook></a>
            <a href=""><MdContactMail className='mb-6 text-xl'></MdContactMail></a>
        </div>
    );
};

export default Social;