// components/ProjectCard.tsx
import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64 text-wrap break-words flex flex-col items-center">
      <h2 className="text-black text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="flex gap-2 mt-4">
        {technologies.map((tech, index) => (
          <img key={index} src={tech} alt="Technology logo" className="h-8 w-8 ring-blue-500 object-contain" />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;