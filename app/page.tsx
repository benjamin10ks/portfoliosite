import ProjectCard from "./components/ProjectCard";
import Particles from "./components/Particles";
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
              <p className="text-xl text-gray-300 mb-4">Software Engineer</p>
              <div className="text-gray-300 text-sm space-y-1">
                <p>brendan.kelly8333@gmail.com</p>
                <p>
                  <a href="https://www.linkedin.com/in/brendan-kelly-7a8263260/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    linkedin.com/in/brendan-kelly
                  </a> | 
                  <a href="https://github.com/benjamin10ks" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    github.com/benjamin10k
                  </a>
                </p>
              </div>
            </header>

            <section className="mt-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Montana State University</h3>
                <p className="text-gray-300">Bozeman, MT</p>
                <p className="text-gray-300">Computer Science</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                </ul>
              </div>
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
            title="Figma Clone"
            description="Engineered a real-time collaborative vision board application using React/Next.js, implementing state management with TypeScript, and achieving sub-second latency for concurrent users."
            technologies={["/images/react_logo.png", "/images/typescript.png", "/next.svg"]}
            details={[
              "Integrated Liveblocks for seamless real-time updates, handling complex data synchronization and conflict resolution.",
              "Developed a custom Node.js server using Socket.io to manage persistent user connections and facilitate efficient data transfer, optimizing for scalability.",
              "Deployed and maintained the full-stack application on Vercel (frontend) and Render (backend), implementing CI/CD pipelines for rapid iteration."
            ]}
          />
          <ProjectCard
            title="MS Paint Clone"
            description="Developed a feature-rich MS Paint clone using JavaFX, implementing custom drawing tools and event handling to achieve a responsive and intuitive user interface."
            technologies={["Java", "JavaFX"]}
            details={[
              "Implemented robust data structures and algorithms to optimize image manipulation performance, resulting in efficient drawing and editing capabilities.",
              "Designed and implemented a modular architecture for the application, enabling easy extension with new tools and functionalities."
            ]}
          />
          <ProjectCard
            title="Unity Narrative Game"
            description="Developed a narrative-driven game in Unity, implementing procedural landscape generation using C# to create dynamic and varied environments."
            technologies={["/images/unitylogo.png", "/images/Csharp_Logo.png"]}
            details={[
              "Architected a scalable dialogue and story progression system, utilizing state machines and data-driven design to manage complex narrative branches.",
              "Engineered custom HLSL shaders to achieve visually compelling effects, enhancing the game's atmosphere and player immersion."
            ]}
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
            <p className="text-gray-300">Java, Python, C/C++, JavaScript, R, SQL (Postgres)</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
            <p className="text-gray-300">Next.js, React, HTML/CSS, Socket.io</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Backend & Game Dev</h3>
            <p className="text-gray-300">Go, Springboot, Node.js, Unity, C#, HLSL</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Tools & Libraries</h3>
            <p className="text-gray-300">Git, VS Code, Visual Studio, Eclipse, NumPy, Matplotlib, Liveblocks</p>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Brendan Kelly. All rights reserved.</p>
      </footer>
    </main>
  );
}
