'use client'
// components/ProjectCard.tsx
import React, { useState } from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  details?: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  details = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle missing images
  const renderTechnologyIcon = (tech: string, index: number) => {
    // Check if the image exists in the public directory
    const imageExists = [
      "/images/react_logo.png",
      "/images/typescript.png",
      "/next.svg",
      "/images/unitylogo.png",
      "/images/Csharp_Logo.png"
    ].includes(tech);

    if (imageExists) {
      return (
        <Image
          key={index}
          src={tech}
          alt="Technology logo"
          width={32}
          height={32}
          className="h-8 w-8 ring-2 ring-blue-500/50 rounded-full object-contain"
        />
      );
    } else {
      // For missing images, show a text placeholder
      const techName = tech.split('/').pop()?.split('.')[0] || 'Tech';
      return (
        <div 
          key={index}
          className="h-8 w-8 ring-2 ring-blue-500/50 rounded-full flex items-center justify-center bg-gray-700 text-xs text-white"
        >
          {techName.charAt(0).toUpperCase()}
        </div>
      );
    }
  };

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
      
      {details.length > 0 && (
        <div className="w-full mb-4">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
          
          {isExpanded && (
            <ul className="list-disc list-inside text-gray-300 text-sm mt-2 space-y-1">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      
      <div className="flex gap-4 mt-4">
        {technologies.map((tech, index) => renderTechnologyIcon(tech, index))}
      </div>
    </div>
  );
};

export default ProjectCard;
