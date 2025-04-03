import ProjectCard from "./components/ProjectCard";
import Particles from "./components/Particles";
import Image from "next/image";

export const metadata = {
  title: 'Brendan Kelly',
  description: 'A simple portfolio page built with Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-t from-black to-gray-800 ">
      <Particles count={80} />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-row ">
          <div className="text-left mr-[120px] items-center pt-8 pb-8">
            <header>
              <h1 className="text-5xl font-bold text-white-900">
                Brendan Kelly
              </h1>
              <p className="text-xl text-gray-300">Software Engineer</p>
            </header>

            <section className="mt-6 max-w-2xl text-center">
              <p className="text-white-700 text-left text-md/8">
                Currently a sophomore at Montana State University studying
                Computer Science.
              </p>
            </section>
          </div>
          <div className="flex items-center">
            <Image src="/globe.svg" alt="globe" width={400} height={400} />
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-8 justify-center items-center justify-evenly">
        <p className="font-bold text-[40px]">Projects</p>
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
      </section>

      <footer className="mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
