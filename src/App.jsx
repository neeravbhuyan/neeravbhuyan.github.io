import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="content">
        <Hero />
        <Projects />
        <Languages />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
