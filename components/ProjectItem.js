import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProjectItem = ({ project }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={project.img}
          alt={project.name}
          width={700}
          height={500}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {project.name}
          </h3>
          <p className="text-center py-3 text-white">{project.technology}</p>
          <Link href={project.pageLink}>
            <p className="pb-4 pt-2 text-gray-700 rounded-lg bg-white text-center font-bold">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
