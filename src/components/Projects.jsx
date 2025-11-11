import sleepDemo from '../img/sleep-demo.png';
import expenseDemo from '../img/expense-demo.png';
import readingDemo from '../img/reading-demo.png';
import TypingEffect from './TypingEffect';

function Projects(){
  const projects = [
    {
      image: readingDemo,
      title: "Personal Library and Reading Tracker",
      description: "An end to end web application to help users log their books and their reading activity, built using PHP and MySQL as the database.",
      technologies: ["MySQL", "PHP", "Postman", "Bootstrap"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      image: sleepDemo,
      title: "Sleep Disorder Predictor Model",
      description: "A prediction model built utilizing Pandas Dataframes, to identify the possibility of a sleep disorder for the user.",
      technologies: ["Python", "Pandas", "Tkinter", "Scikit-learn"],
      demoLink: "#",
      githubLink: "https://github.com/aetrhs/sleep-disorder-model"
    },
    {
      image: expenseDemo,
      title: "Expense Tracker",
      description: "A full-stack web application built using the MERN stack, equipped with charts for user financial analysis.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <div id="project-id" className="flex flex-col justify-center m-auto gap-6 py-6 px-4">
      <h2 className="text-3xl font-bold text-center lg:mb-12 lg:text-4xl text-[#FDF5AA]">
        <TypingEffect text="Showcase of My Projects" speed={100} delay={1000} className='font-bold'/>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:bg-gray-700/40 transition-colors overflow-hidden">
            <div className="relative w-full h-80 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
              />
              <img 
                src={project.image} 
                alt={project.title}
                className="relative w-full h-full object-contain z-10"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold lg:text-2xl text-white mb-3">{project.title}</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-row flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-white text-sm bg-gray-500/45 rounded-lg px-2 py-1 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-row gap-4 items-center justify-center">
                <a href={project.demoLink} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a href={project.githubLink} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <span>Code</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
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