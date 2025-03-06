import Head from 'next/head';
import ProjectCard from './components/ProjectCard';
import Particles from './components/Particles'

export default function Home() {
  return (
    <div className="border relative min-h-screen bg-gradient-to-t from-black to-zinc-800 flex flex-col items-center justify-center p-4">
      <Particles count={80}/>
      <Head>
        <title>Brendan Kelly</title>
        <meta name="description" content="A simple portfolio page built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <h1 className="text-4xl font-bold text-white-900">Brendan Kelly</h1>
        <p className="text-lg text-gray-300">Software Engineer</p>
      </header>
      
      <section className="mt-6 max-w-2xl text-center border">
        <p className="text-white-700">
          Currently a sophomore at Montana State University studying Computer Science
        </p>
      </section>
      
      <section className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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


