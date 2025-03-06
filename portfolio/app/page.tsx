import Head from "next/head";
import ProjectCard from "./components/ProjectCard";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-t from-black to-gray-800 ">
      <Particles count={80} />
      <Head>
        <title>Brendan Kelly</title>
        <meta
          name="description"
          content="A simple portfolio page built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <img src="globe.svg" alt="placeholder" className="h-[400px] w-[400px]" />
          </div>
        </div>
      </div>


      <section className="flex flex-col gap-8 justify-center items-center justify-evenly">
        <p className="font-bold text-[40px]">Projects</p>
        <ProjectCard
          title="Placeholder"
          description="A brief description of this project."
          technologies={["images/react_logo.png", "next.svg"]}
        />
        <ProjectCard
          title="Placeholder"
          description="A brief description of this project."
          technologies={["images/typescript.png", "next.svg"]}
        />
        <ProjectCard
          title="Placeholder"
          description="A brief description of this project."
          technologies={["images/unitylogo.png", "images/Csharp_Logo.png"]}
        />
      </section>

      <footer className="mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
