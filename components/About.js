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

          <p className="py-2 text-gray-600">tagline goes here</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos ab
            dolorem rerum explicabo repudiandae! Ad, eligendi corrupti cumque
            saepe temporibus illo architecto praesentium maxime. Nisi veritatis
            alias nulla adipisci quaerat, beatae facere omnis quod iste a
            laudantium eligendi harum autem. Maiores delectus beatae distinctio
            corrupti!
          </p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            quibusdam qui quidem sequi. Voluptates, blanditiis. Autem, vitae!
            Molestias dolor commodi quisquam sequi sit, in maxime, suscipit
            numquam dolorum consectetur rerum.
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
