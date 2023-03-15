import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div>
      <div className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest">
              LET'S BUILD SOMETHING TOGETHER
            </p>

            <h1 className="py-4 text-grey-700">
              Hii, I'm <span className="text-[#5651e5]">Hitesh Sharma</span>
            </h1>
            <h1 className="py-2 text-grey-700">A Front-End Web Developer</h1>

            <p className="py-2 text-gray-600 max-w-[70%] m-auto">
              I'm a front-end web developer specilatizing in building
              exceptional digital experiences. Currently, I'm fouced on building
              responsive front-end web applications while learning latest
              frontend frameworks
            </p>

            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://www.linkedin.com/in/hiteshshrma11/">
                  {" "}
                  <FaLinkedin />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
