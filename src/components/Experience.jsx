import TypingEffect from './TypingEffect';
import { useState, useEffect, useRef } from 'react';

function Experience() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);
  
  const experiences = [
    {
      company: "Lendela",
      position: "Web Developer Intern",
      duration: "Apr 2025 - Aug 2025",
      description: "• Developed public facing websites (blogs/press) and increased customer traffic to application form by 10%.\n• Built a debt consolidation calculator and landing page to help users understand their financial options better",
      technologies: ["Vue.js", "Tailwind CSS", "Statamic CMS", "Antlers", "JavaScript", "Figma"]
    },
    {
      company: "NASA Space Apps Challenge 2024",
      position: "Participant",
      duration: "October 2024",
      description: "Developed a teaching platform with interactive quizzes and 3D visualization of near earth objects using live NASA data. Built within 48 hours as part of a collaborative team effort.",
      technologies: ["Three.js", "React", "NASA API", "JavaScript", "CSS"]
    },
    {
      company: "Technological University of the Shannon: Midlands Midwest",
      position: "Bachelors (Hons) in Software Design with AI for Cloud Computing",
      duration: "Sep 2024 - June 2026",
      description: "• On track for First Class Honours, current grade is 92.33.\n• Recipient of the Dean's Honours List Award for 2024/2025\n• Relevant courses: Databases, Networks, Data Mining and Machine Learning, Data Visualization, Software Development for Cloud",
      technologies: ["PHP", "Java", "SQL", "MongoDB", "Cisco", "Python", "Scikit-learn"]
    },
    {
      company: "Revotek",
      position: "IT Intern",
      duration: "Nov 2023 - Jan 2024",
      description: "• Implemented a save as draft feature in the admin dashboard, learning soft state management principles.\n• Developed a language switch feature from English to Malay using Spring Boot i18n internationalization.\n• Collaborated with the design team to implement UI/UX fixes and improvements.",
      technologies: ["Spring Boot", "JavaScript", "CSS", "HTML", "Figma"]
    },
    {
      company: "Tunku Abdul Rahman University of Management and Technology",
      position: "Diploma in Information Technology",
      duration: "July 2022 - June 2024",
      description: "• Graduated with a 3.99/4.0 GPA\n• Recipient of the Book Prize Award Winner 23/24\n• Relevant modules: Operating Systems, Computer Systems Architecture, Object Oriented Programming, Discrete Mathematics, Database Development, Cloud Computing",
      technologies: ["Java", "C", "Assembly", "PHP", "Linux", "Ubuntu", "SQL"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id='experience-id' className='text-white flex flex-col justify-center m-auto py-12 px-4 pb-20 bg-gradient-to-b from-gray-800/40 via-gray-900/60 to-black/80'>
      <h2 className="font-bold text-3xl lg:text-4xl mb-12 text-[#FDF5AA] text-center">
        <TypingEffect text="Experience & Education" speed={100} className='font-bold ' />
      </h2>
      
      <div className="max-w-4xl mx-auto">
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#58A0C8] hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                ref={el => cardRefs.current[index] = el}
                data-index={index}
                className={`relative flex items-start transition-all duration-700 ${
                  visibleCards.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-[#58A0C8] rounded-full border-4 border-gray-800 flex-shrink-0 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content card */}
                <div className="w-full md:ml-8">
                  <div className="bg-gray-900/95 backdrop-blur-md border border-gray-600/70 rounded-lg p-6 hover:bg-gray-800/95 hover:border-[#58A0C8]/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#58A0C8]/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-bold text-[#58A0C8] text-left">{exp.company}</h3>
                      <span className="text-sm text-gray-300 text-left mt-1 sm:mt-0">{exp.duration}</span>
                    </div>
                    
                    <h4 className="text-lg text-gray-200 mb-3 text-left">{exp.position}</h4>
                    
                    <div className="text-gray-300 mb-4 text-left">
                      {exp.description.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className="mb-1">{line}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20" style={{backgroundColor: '#34699A66'}}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;