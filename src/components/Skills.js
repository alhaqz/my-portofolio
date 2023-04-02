import React, { Component, components } from 'react';
import frontend from '../image/frontend.png';
import ml from '../image/ml.png';
import video from '../image/video.png';

class Skills extends Component {
  SkillData() {
    const data = [
      {
        name: 'Frontend Development',
        desc: 'Experienced in front-end development and design, with the ability to create visually stunning web applications using React.js, I offer freelance services to help clients achieve their goals.',
        img: frontend,
      },
      {
        name: 'Machine Learning',
        desc: 'With experience in data preprocessing, analysis, and visualization, I am able to apply basic machine learning concepts using Python and TensorFlow. I have a solid foundation in Python programming and a keen eye for detail, allowing me to extract meaningful insights from complex data sets.',
        img: ml,
      },
      {
        name: 'Motion Graphic',
        desc: 'As a motion graphics artist, I have experience creating high-quality bumpers, animations, and other video content using industry-standard software such as After Effects and Premiere Pro. With a keen eye for detail and a passion for visual storytelling, I am able to bring ideas to life and create engaging visual experiences.',
        img: video,
      },
    ];
    return data;
  }
  SkillCard(props) {
    const { name, desc, img } = props;
    return (
      <div className="flex-1 flex flex-col p-4">
        <div className="flex  h-[50vh] my-auto items-center group">
          <img
            src={img}
            className=" w-full transition-all duration-1000 p-2 group-hover:scale-75 scale-[60%] object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="border-b-2 font-sans text-2xl  font-semibold mr-10">
            {name}
          </h1>
          <p className="font-sans mx-a">{desc}</p>
        </div>
      </div>
    );
  }
  render() {
    const data = this.SkillData();
    return (
      <div className="min-h-screen min-w-screen">
        <div>
          <h1 className="font-sans p-4 mt-5 mb-5 text-xl font-semibold ml-[10vw]">
            I can help you with ...
          </h1>
          <div className="flex p-4 w-[90vw]  mx-auto">
            {data.map((item, index) => (
              <div className="flex-1">{this.SkillCard(item)}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
