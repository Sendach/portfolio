import React from 'react';
import { BsGithub, BsTwitter, } from 'react-icons/bs';
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className="app__socials">
      <a href="https://github.com/sendach" target="_blank" rel="noreferrer">
        <div><BsGithub /></div>
      </a>
      <a href="https://twitter.com/sendach" target="_blank" rel="noreferrer">
        <div><BsTwitter /></div>
      </a>
    </div>
  );
}

export default SocialMedia;