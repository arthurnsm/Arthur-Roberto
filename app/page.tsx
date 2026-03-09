import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/projects";
export default function Home() {
  return (
    <main className="flex w-full flex-col h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
    </main>
    
  );
}
