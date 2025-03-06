// components/ProjectCard.tsx
'use client'
import React, { useState, useEffect } from "react";

function getRelativeCoordinates(event: React.MouseEvent, referenceElement: HTMLElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
  };

  let reference = referenceElement.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
  };
}

interface ProjectCardProps {
  // Any props you may want to pass to the ProjectCard component
}

const Example: React.FC<ProjectCardProps> = () => {
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    const cardElement = event.currentTarget as HTMLElement;
    const { x, y } = getRelativeCoordinates(event, cardElement);
    setCoordinates({ x, y });
    console.log("x"+x,"y"+y)
  };

  return (
    <div
      className="bg-zinc-800 rounded-lg p-4 w-64 text-wrap break-words flex flex-col items-center"
      onMouseMove={handleMouseMove}
    >
      <img
        src="vercel.svg"
        alt="ksljdfghjk"
        className={`transform rotate-x-[${coordinates.x}deg] rotate-y-[${coordinates.y}deg]`}
      />
    </div>
  );
};

export default Example;
