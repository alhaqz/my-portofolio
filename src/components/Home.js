import React, { Component, components } from 'react';
import alhaq from '../image/alhaq.png';
import './Home.css';

class Home extends Component {
  name() {
    return (
      <div class=" w-screen  overflow-hidden">
        <p class="inline-block w-[400vw] text-[20rem] font-sans  font-bold text-white animate-marquee">
          Elham Al Haq Elham Al Haq Elham Al Haq
        </p>
      </div>
    );
  }

  image() {
    return <img src={alhaq} className="absolute bottom-0 h-screen  " />;
  }

  desc() {
    return (
      <div className="flex flex-col absolute right-[20%] font-sans text-5xl text-white">
        <h1>Freelance</h1>
        <h1>Developer</h1>
      </div>
    );
  }
  render() {
    return (
      <div className="relative flex flex-col h-screen w-screen items-center justify-center bg-slate-300">
        {this.image()}
        {this.desc()}
        <div className="absolute bottom-0">{this.name()}</div>
      </div>
    );
  }
}

export default Home;
