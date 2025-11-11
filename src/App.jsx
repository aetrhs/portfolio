import './App.css';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

export default function App() {
  return (
    <main className='bg-[#213448] bg-blend-normal relative'>
      <Header />
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </main>
  );
}
