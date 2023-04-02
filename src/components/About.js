import React, { Component, components } from 'react';
import alhaq from '../image/alhaq.png';
import joystick from '../image/joystick.png';
import ball from '../image/ball.png';

class About extends Component {
  image() {
    return (
      <div className="flex w-[30vw] mx-auto rounded-full bg-slate-100">
        <img src={alhaq} className="h-[60vh] rounded-full mx-auto my-auto" />
      </div>
    );
  }

  desc() {
    return (
      <p className="p-4 text-xl mr-[15rem] text-white font-sans border-b-2">
        A front-end engineer with experience in developing and maintaining web
        applications using React JS and React Native. Familiar with JavaScript
        and SQL, with a basic understanding of multimedia production and editing
        using Adobe Premiere Pro, After Effects, and Illustrator. Also,
        knowledgeable in Python and machine learning.
      </p>
    );
  }

  render() {
    return (
      <div className="flex w-screen h-screen items-center bg-[#313335]">
        <div className="flex-1 items-center justify-center mx-auto">
          {this.image()}
        </div>
        <div className="flex h-full items-center flex-col flex-1">
          <img className=" relative mt-[18vh] mr-[-5vw]" src={joystick} />
          <div className=" my-auto mt-[3vh]">{this.desc()}</div>
          <img className=" relative mb-[15vh] mr-[20vw]" src={ball} />
        </div>
      </div>
    );
  }
}

export default About;
