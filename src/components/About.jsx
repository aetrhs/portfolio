import profile from "../img/self.jpg";
import TypingEffect from './TypingEffect';

function About() {
  return (
    <div id='about-id' className='text-white flex flex-col justify-center m-auto text-center py-12 px-4 bg-gradient-to-b from-black/80 via-gray-900/60 to-gray-800/40'>
      <h2 className="font-bold text-3xl lg:text-4xl mb-8 text-[#FDF5AA]">
        About Me
      </h2>
      
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Profile Image */}
          <div className="w-64 h-64 flex-shrink-0 border-4 border-white/20 rounded-2xl p-1">
            <img 
              src={profile}
              alt="Profile" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          {/* About Text */}
          <p className="text-gray-300 leading-relaxed text-left flex-1">
            Hi, I'm <span style={{color: '#58A0C8'}}>Nurul Huda</span>, but my friends call me <span style={{color: '#58A0C8'}}>Huda</span>! 
            Right now, I'm finishing my final year in <span style={{color: '#58A0C8'}}>Software Design with AI at TUS Athlone</span>. 
            I'm genuinely passionate about full stack development 
            and machine learning, and I just wrapped up a web developer internship at <span style={{color: '#58A0C8'}}>Lendela</span>.
            <br /><br />
            My interests are all over the place, from astronomy, tech and AI news, to reading more into how machine learning shapes the way we use data every day. I think it's pretty amazing how much data 
            influences our choices and how much of it happens behind the scenes.
            <br /><br />
            In terms of my skills, I've got experience in full-stack dev and enjoy picking up new frameworks and technologies as the industry changes. People have said I pick things up fast, and 
            I like being part of teams where everyone gets to join in and learn together. Fortunately for me, my last internship had a great vibe like that.
            <br /><br />
            Outside of tech, you'll probably find me lost in a fantasy book or exploring local bakeries on the hunt for something sweet.
          </p>
        </div>
        
        {/* Find Me Section */}
        <div className="text-center">
          <h3 className="text-2xl lg:text-xl font-semibold mb-4 text-[#58A0C8]">Find me on</h3>
          <div className="flex gap-4 justify-center items-center">
            <a href="https://github.com/aetrhs" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border-2 border-white flex items-center justify-center transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a href="https://linkedin.com/in/huda-hussin" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border-2 border-white flex items-center justify-center transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="img/Huda Hussin CV.pdf" download 
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border-2 border-white flex items-center justify-center transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;