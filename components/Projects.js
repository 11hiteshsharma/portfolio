import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const Project = [
    {
      id: "1",
      img: "/project/reviews1.png",
      name: "Movie Reviews Blog",
      technology: "React JS",
      pageLink: "/reviews",
    },
    {
      id: "2",
      name: "Random GIF Generator",
      technology: "Next JS Tailwind",
      pageLink: "/randomGIF",
      img: "/project/gif.png",
    },
  ];
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Project.map((data) => {
            return (
              <div key={data.id}>
                <ProjectItem project={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
