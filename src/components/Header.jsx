import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Blur Overlay */}
      <div className="sm:hidden fixed top-0 left-0 w-full h-12 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-md z-40"></div>
      
      <header className="z-50 fixed top-0 left-0 w-full">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-center p-4">
          <nav className='flex items-center justify-between gap-3 rounded-xl border-2 border-solid border-green-50 bg-white/10 py-4 px-6 backdrop-blur-lg'>
            <button onClick={() => scrollToSection('intro-id')} className='text-white hover:text-[#FDF5AA] transition-colors text-base'>Home</button>
            <div className='w-0.5 h-4 bg-white/30'></div>
            <button onClick={() => scrollToSection('about-id')} className='text-white hover:text-[#FDF5AA] transition-colors text-base'>About</button>
            <div className='w-0.5 h-4 bg-white/30'></div>
            <button onClick={() => scrollToSection('skill-id')} className="text-white hover:text-[#FDF5AA] transition-colors text-base">Skills</button>
            <div className='w-0.5 h-4 bg-white/30'></div>
            <button onClick={() => scrollToSection('project-id')} className="text-white hover:text-[#FDF5AA] transition-colors text-base">Projects</button>
            <div className='w-0.5 h-4 bg-white/30'></div>
            <button onClick={() => scrollToSection('experience-id')} className='text-white hover:text-[#FDF5AA] transition-colors text-base'>Experience</button>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <div className="sm:hidden p-2">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-1 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-10 left-0 w-full bg-black/20 backdrop-blur-lg">
              <div className="flex flex-col">
                <button onClick={() => scrollToSection('intro-id')} className='text-white hover:text-[#FDF5AA] transition-colors text-sm text-left py-4 px-4 border-b-2 border-white/50'>Home</button>
                <button onClick={() => scrollToSection('about-id')} className='text-white hover:text-[#FDF5AA] transition-colors text-sm text-left py-4 px-4 border-b-2 border-white/50'>About</button>
                <button onClick={() => scrollToSection('skill-id')} className="text-white hover:text-[#FDF5AA] transition-colors text-sm text-left py-4 px-4 border-b-2 border-white/50">Skills</button>
                <button onClick={() => scrollToSection('project-id')} className="text-white hover:text-[#FDF5AA] transition-colors text-sm text-left py-4 px-4 border-b-2 border-white/50">Projects</button>
                <button onClick={() => scrollToSection('experience-id')} className="text-white hover:text-[#FDF5AA] transition-colors text-sm text-left py-4 px-4">Experience</button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;