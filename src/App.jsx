import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Education from "./components/Education";
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
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
