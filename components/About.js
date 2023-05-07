import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid  grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className=" uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>

          <p className="py-2 text-gray-600">Software Developer</p>
          <p className="py-2 text-gray-600">
            Front End Developer with expertise in React and Next.js, I am
            currently working as a Software Developer Intern, where I am gaining
            valuable practical experience and developing my skills further. In
            this role, I am responsible for developing and maintaining web
            applications using front-end technologies like HTML, CSS, and
            JavaScript, as well as React and Next.js. M
          </p>
          <p className="py-2 text-gray-600">
            y experience as a Software Developer Intern has allowed me to work
            on real-world projects and collaborate with experienced developers,
            giving me a better understanding of the software development
            lifecycle and how to work effectively in a team. I have also had the
            opportunity to learn new technologies and tools, which has helped me
            to become a more versatile developer.
          </p>

          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest Projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl "
            src="https://media.licdn.com/dms/image/C4D03AQFYonKqpgOVbA/profile-displayphoto-shrink_800_800/0/1663903831400?e=1684368000&v=beta&t=_PboEV7NR2kvRG1V9VvJP64gG-SRLfWfh6bCazJReqg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
