import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import SkillsContent from './components/SkillsContent';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Welcome />
        </section>
        <div className="container">
          <section id="skills">
            <SkillsContent />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
