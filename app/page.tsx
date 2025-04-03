import ProjectCard from "./components/ProjectCard";
import Particles from "./components/Particles";
import TestComponent from "./components/TestComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Particles count={80} />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-2xl">
            <header>
              <h1 className="text-5xl font-bold text-white mb-4">
                Brendan Kelly
              </h1>
              <p className="text-xl text-gray-300">Software Engineer</p>
            </header>

            <section className="mt-6">
              <p className="text-gray-300 text-lg">
                Currently a sophomore at Montana State University studying
                Computer Science.
              </p>
            </section>
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="/globe.svg" 
              alt="globe" 
              width={400} 
              height={400}
              priority
              className="w-full max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Placeholder"
            description="A brief description of this project."
            technologies={["/images/react_logo.png", "/next.svg"]}
          />
          <ProjectCard
            title="Placeholder"
            description="A brief description of this project."
            technologies={["/images/typescript.png", "/next.svg"]}
          />
          <ProjectCard
            title="Placeholder"
            description="A brief description of this project."
            technologies={["/images/unitylogo.png", "/images/Csharp_Logo.png"]}
          />
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Brendan Kelly. All rights reserved.</p>
      </footer>
    </main>
  );
}
