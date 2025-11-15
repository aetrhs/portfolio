import TypingEffect from './TypingEffect';
import SkillCards from './SkillCards.jsx';
import { useState, useEffect } from 'react';

function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const skillCategories = [
    {
      title: "Backend",
      skills: ["Java", "JavaScript", "Python", "PHP", "C", "Assembly", "SQL", "Express.js", "Node.js", "Spring Boot"],
      bgColor: "bg-blue-900/40",
      size: "h-auto"
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Vue.js", "React.js", "Tailwind CSS", "Thymeleaf"],
      bgColor: "bg-green-900/40",
      size: "h-auto"
    },
    {
      title: "ML & AI",
      skills: ["Scikit-learn", "Pandas", "Matplotlib", "Plotly", "Jupyter Notebook"],
      bgColor: "bg-purple-900/40",
      size: "h-auto"
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Linux Ubuntu", "Cisco", "Postman", "Visual Studio", "NetBeans", "Eclipse", "PyCharm", "MySQL Workbench"],
      bgColor: "bg-orange-900/40",
      size: "h-auto"
    }
  ];

  return (
    <div id="skill-id" className="text-white flex flex-col justify-center m-auto text-center py-6 px-4">
      <p className="text-lg text-gray-500">Tech Stack</p>
      <h2 className="text-[#FDF5AA] font-semibold text-3xl lg:text-4xl mb-12">
        <TypingEffect text="My Skills" speed={100} delay={500} className='font-bold'/>
      </h2>
      
      <div className='flex justify-center mx-auto'>
        <SkillCards
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="148, 180, 193"
        />
      </div>
    </div>
  );
}

export default Skills;