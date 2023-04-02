import React, { Component, components } from 'react';
import karyakala from '../image/karyakala.jpeg';
import karyakala2 from '../image/karyakala2.jpeg';
import psaf from '../image/psaf1.jpeg';
import psaf2 from '../image/psaf2.jpeg';
import bumper from '../Video/bumper.webm';
import natal from '../Video/natal.webm';

class Experience extends Component {
  alhaq() {
    const data = [
      {
        name: 'Frontend Developer',
        company: 'karyakala',
        job: 'Part-time',
        date: 'Feb 2023 - Present',
        location: 'Depok, West Java',
        desc: [
          `Designed and built responsive website karyakala.com from
                scratch, utilizing React JS and Tailwind CSSDesigned and built
                responsive website karyakala.com from scratch, utilizing React
                JS and Tailwind CSS`,
        ],
        image1: karyakala,
        image2: karyakala2,
      },
      {
        name: 'Web Designer',
        company: 'PSAF MIPA UI 2021',
        job: 'Contract',
        date: 'Jun 2021 - Sep 2021',
        location: 'Depok, West Java',
        desc: [
          ` Built a PSAF MIPA UI 2021 web app using fundamental Javascript.`,
          `
            Created 5 interesting and innovative video content for social media.`,
          `Drafted ideas, designed, and create merch design.
            Handling all post-production videos including trimming, compiling, coloring, and animating.`,
        ],
        image1: psaf,
        image2: psaf2,
      },
      {
        name: 'Video Editor',
        company: 'PT Bank BTPN Tbk',
        job: 'Internship',
        date: 'May 2022 - Dec 2022',
        location: 'Jakarta, DKI Jakarta',
        desc: [
          `Created and Initiated 50+ original video content for social media such as podcasts, motion graphics, bumper, etc.`,
          `Invented ideas, designed, concept, and create materials for daya.id by making motion graphics and social media commercials.`,

          `Handled end-to-end editing including scripting, filming, to post-production.`,
        ],
        image1: bumper,
        image2: natal,
      },
    ];
    return data;
  }
  card(props) {
    const { name, company, job, date, location, desc, image1, image2 } = props;

    const isImage = image1.split('.').pop() === 'jpeg';
    return (
      <div className="flex border group transition-all duration-500 hover:scale-105 hover:bg-slate-100">
        <div className="flex-1 flex h-[30vh] ml-[5vw] w-[40vw] mx-auto items-center justify-center">
          {isImage ? (
            <>
              <img
                className="p-1 object-cover w-[20vw] hover:w-[22vw] transition-all duration-500"
                src={image1}
              />
              <img
                className="p-1 object-cover w-[20vw] hover:w-[22vw] transition-all duration-500"
                src={image2}
              />
            </>
          ) : (
            <div className="flex">
              <video className="p-1 w-[20vw] " src={image1} muted autoPlay />
              <video className="p-1 w-[20vw]" src={image2} muted autoPlay />
            </div>
          )}
        </div>
        <div className="flex-1 p-3 w-[40vw] mt-5 flex font-sans flex-col">
          <h1 className="font-bold text-2xl">{name}</h1>
          <div className="flex flex-row">
            <h2 className="font-semibold mr-2">{company}</h2>
            <h2 className="italic">{job}</h2>
          </div>
          <h3 className="text-black">{date}</h3>
          <h3 className="text-black">{location}</h3>
          <div className="my-2">
            <ul className="list-disc mr-[7vw] ml-5">
              {desc.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const data = this.alhaq();
    return (
      <div className="min-h-screen min-w-screen">
        <div className="text-4xl font-bold font-sans p-4 mt-[2vw] mb-[2vw]">
          Experience
        </div>
        {data.map((item, index) => (
          <div>{this.card(item)}</div>
        ))}
      </div>
    );
  }
}

export default Experience;
