import React from 'react';
import { BsGithub, BsTwitter, } from 'react-icons/bs';
import { FaDiscord} from 'react-icons/fa';
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="app__socials">
      <div>
        <a>
          <BsGithub />
        </a>
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaDiscord />
      </div>
    </div>
  );
}

export default SocialMedia;