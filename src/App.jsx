import './App.css';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import SkillCards from './components/SkillCards.jsx';
import Footer from './components/Footer.jsx';
import StarField from './components/StarField.jsx';

export default function App() {
  return (
    <main className='bg-black bg-blend-normal relative'>
      <StarField />
      <div className='relative z-10'>
        <Header />
        <Intro />
        <About />
        <SkillCards />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
