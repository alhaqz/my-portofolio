import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navigation = (props) => {
  const [nav, setNav] = useState(false);

  const navHandler = () => setNav(!nav);

  useEffect(() => {
    setNav(false);
  }, []);

  return (
    <div className="fixed bg-transparent ml-[90vw] w-[10vw] top-0 right-0 z-50">
      <div className="flex justify-end right-0 p-4 mr-2 bg-transparent">
        <div onClick={navHandler}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      <div
        className={
          nav
            ? 'fixed right-0 top-0 w-[30%] h-full bg-white border-r ease-in-out duration-500'
            : 'fixed right-[-100%]'
        }
      >
        <div className="flex justify-end p-4 mr-2 bg-transparent">
          <div onClick={navHandler}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
        <ul className={'text-lg p-4'}>
          <li className="p-4 border-b border-gray-dark font-sans opacity-[60%] hover:opacity-[100%]">
            <Link to="/" onClick={navHandler}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-dark font-sans opacity-[60%] hover:opacity-[100%]">
            <Link to="/experience" onClick={navHandler}>
              Experience
            </Link>
          </li>
          <li className="p-4 border-b border-gray-dark font-sans opacity-[60%] hover:opacity-[100%]">
            <Link to="/skill" onClick={navHandler}>
              Skill
            </Link>
          </li>
          <li className="p-4 border-b border-gray-dark font-sans opacity-[60%] hover:opacity-[100%]">
            <Link to="/interest" onClick={navHandler}>
              Interest
            </Link>
          </li>
          <li className="p-4 border-b border-gray-dark font-sans opacity-[60%] hover:opacity-[100%]">
            <Link to="/about" onClick={navHandler}>
              About Me
            </Link>
          </li>
          <li className="p-4 border-b border-gray-dark font-sans opacity-[60%] hover:opacity-[100%]">
            <Link to="/contact" onClick={navHandler}>
              Conatct Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
