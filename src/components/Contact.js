import React, { Component, components } from 'react';
import mail from '../image/mail.png';

class Conatact extends Component {
  render() {
    return (
      <div className="font-sans h-screen w-screen bg-[#313335]">
        <h1 className="text-2xl p-4 text-center text-white font-semibold">
          Contact Me
        </h1>
        <div className="flex">
          <img className="flex-1 p-2 scale-50" src={mail} />
          <p className="flex-1 p-2 mr-[10vw] my-auto text-white">
            With a strong foundation in front-end and back-end development, I am
            passionate about using technology to create innovative solutions. As
            a creative professional with experience in video production and
            motion graphics, I am able to bring a unique perspective to every
            project. Additionally, my growing interest in machine learning has
            fueled my desire to apply data-driven insights to complex problems.
            With a collaborative mindset and a commitment to delivering quality
            work, I am excited to explore new opportunities at the intersection
            of technology and creativity.
          </p>
        </div>
      </div>
    );
  }
}

export default Conatact;
