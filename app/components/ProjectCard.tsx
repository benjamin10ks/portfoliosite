// components/ProjectCard.tsx
import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <div className="size-18 bg-gradient-radial from-zinc-800 to-black rounded-lg p-4 text-wrap break-words flex flex-col items-center border">
      <h2 className="text-gray-300 text-xl font-semibold">{title}</h2>
      <div className="w-full flex justify-center overflow-y-hidden">
        <Image
          src="/file.svg"
          alt="Project thumbnail"
          width={150}
          height={100}
          className="h-[200px] max-h-[100px] w-[150px] object-top object-cover"
        />
      </div>

      <p className="text-gray-300 text-center">{description}</p>
      <div className="flex gap-2 mt-4">
        {technologies.map((tech, index) => (
          <Image
            key={index}
            src={tech}
            alt="Technology logo"
            width={32}
            height={32}
            className="h-8 w-8 ring-2 inset-ring-blue-500 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
