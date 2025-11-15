import sleepDemo from '../img/sleep-demo.png';
import expenseDemo from '../img/expense-demo.png';

import readingDemo from '../img/reading-demo.png';
import read1 from '../img/read1.jpg';
import read2 from '../img/read2.jpg';
import read3 from '../img/read3.jpg';
import read4 from '../img/read4.jpg';
import read5 from '../img/read5.jpg';

import gr1 from '../img/grocer1.png';
import gr2 from '../img/grocer2.png';
import gr3 from '../img/grocer3.png';
import gr4 from '../img/grocer4.png';
import gr5 from '../img/grocer5.png';

import { useState, useEffect, useRef } from 'react';

function Projects(){
  const projects = [
    {
      images: [readingDemo, read1, read2, read3, read4, read5],
      title: "Personal Library and Reading Tracker",
      description: "An end to end web application to help users log their books and their reading activity, built using PHP and MySQL as the database.",
      technologies: ["MySQL", "PHP", "Postman", "HTML/CSS", "Bootstrap"],
      githubLink: "https://github.com/aetrhs/personal-library"
    },
    {
      images: [expenseDemo],
      title: "Expense Tracker",
      description: "A full-stack web application built using the MERN stack, equipped with charts for user financial analysis.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      githubLink: "https://github.com/aetrhs/finance-tracker"
    },
    {
      images: [gr1, gr2, gr3, gr4, gr5],
      title: "E-Commerce Grocery Store",
      description: "An e-commerce web application for a grocery store, featuring product browsing, shopping cart, and checkout functionalities.",
      technologies: ["Java", "Javascript", "MySQL", "Bootstrap", "HTML/CSS"],
      githubLink: "https://github.com/aetrhs/greenery-mart"
    },
    {
      images: [sleepDemo],
      title: "Sleep Disorder Predictor",
      description: "A prediction model built utilizing Pandas Dataframes, to identify the possibility of a sleep disorder for the user.",
      technologies: ["Python", "Pandas", "Tkinter", "Scikit-learn"],
      githubLink: "https://github.com/aetrhs/sleep-disorder-model"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const nextImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % projects[projectIndex].images.length
    }));
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length
    }));
  };

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
    <div id="project-id" className="flex flex-col justify-center m-auto gap-6 py-12 px-4 bg-gradient-to-b from-gray-600/40 via-gray-700/60 to-gray-800/40">
      <h2 className="text-3xl font-bold text-center lg:mb-12 lg:text-4xl text-[#FDF5AA]">
        Showcase of My Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index} 
            ref={el => cardRefs.current[index] = el}
            data-index={index}
            className={`rounded-lg border border-gray-600/50 overflow-hidden bg-gray-900/80 backdrop-blur-sm transition-all duration-700 ${
              visibleCards.has(index) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-full h-[300px] overflow-hidden group">
              <img 
                src={project.images[currentImageIndex[index] || 0]} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
              />
              <img 
                src={project.images[currentImageIndex[index] || 0]} 
                alt={project.title}
                className="relative w-full h-full object-contain z-10"
              />
              
              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button 
                    onClick={() => prevImage(index)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={() => nextImage(index)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {project.images.map((_, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      (currentImageIndex[index] || 0) === imgIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold lg:text-2xl text-[#58A0C8] mb-3">{project.title}</h2>
              <p className="text-gray-100 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-row flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-white text-sm bg-[#FDF5AA]/20 rounded-lg px-2 py-1 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-center self-end">
                <a href={project.githubLink} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-[#58A0C8]/20 hover:bg-[#58A0C8]/40 border border-[#58A0C8]/50 hover:border-[#58A0C8] rounded-lg text-white hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#58A0C8]/30">
                  <span>View Code</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;