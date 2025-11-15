import BlurText from "./BlurText.jsx";
import ShinyText from "./ShinyText.jsx";
import DarkVeil from './DarkVeil.jsx';

function Intro() {
  return (
    <div id='intro-id' className='z-40 w-full min-h-screen flex items-center justify-center m-auto flex-col pt-20 px-4 relative'>
      <div className='absolute inset-0 z-0'>
        <DarkVeil />
      </div>
      
      <div className="text-center max-w-4xl mx-auto">
        <BlurText
          text="Hey! I'm Huda Hussin."
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-3xl sm:text-4xl text-white !text-center font-bold tracking-wider lg:text-6xl z-10 relative mb-2 px-4"
        />

        <ShinyText
          text="SWE Student | Full Stack Developer"
          disabled={false}
          speed={3}
          className='font-medium text-left z-10 relative lg:text-center'
        />
      </div>
    </div>
  );
}

export default Intro;