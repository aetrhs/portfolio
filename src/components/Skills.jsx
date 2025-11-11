import TypingEffect from './TypingEffect';
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
      
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {skillCategories.map((category, categoryIndex) => {
            const handleMouseEnter = (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = mousePosition.x - rect.left;
              const y = mousePosition.y - rect.top;
              e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
            };

            return (
              <div 
                key={categoryIndex} 
                className={`group break-inside-avoid ${category.bgColor} ${category.size} backdrop-blur-sm border border-gray-600/50 rounded-lg p-6 hover:brightness-110 transition-all duration-300 relative overflow-hidden cursor-pointer mb-6`}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseEnter}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div 
                    className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 bg-white/10 rounded-full blur-2xl"
                    style={{
                      left: 'var(--mouse-x, 50%)',
                      top: 'var(--mouse-y, 50%)'
                    }}
                  />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-[#58A0C8] relative z-10">{category.title}</h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-white hover:bg-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;