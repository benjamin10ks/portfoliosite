'use client'
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
    <div className="w-full max-w-md bg-gradient-to-br from-zinc-800 to-black rounded-lg p-6 text-wrap break-words flex flex-col items-center border border-zinc-700 shadow-lg">
      <h2 className="text-gray-100 text-xl font-semibold mb-4">{title}</h2>
      <div className="w-full flex justify-center overflow-hidden mb-4">
        <Image
          src="/file.svg"
          alt="Project thumbnail"
          width={150}
          height={100}
          className="h-[200px] max-h-[100px] w-[150px] object-cover rounded-md"
        />
      </div>

      <p className="text-gray-300 text-center mb-4">{description}</p>
      <div className="flex gap-4 mt-4">
        {technologies.map((tech, index) => (
          <Image
            key={index}
            src={tech}
            alt="Technology logo"
            width={32}
            height={32}
            className="h-8 w-8 ring-2 ring-blue-500/50 rounded-full object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
