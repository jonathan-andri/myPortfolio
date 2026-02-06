import { Download } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import NeuralBackground from '../components/NeuralBg';
import Statue from '../components/3dStatue';
import { useRef } from 'react';

function Hero() {
  const iconStyle = "p-2 w-12 h-12 text-primary border border-4 border-primary rounded-lg hover:bg-gray-100 transition-colors";
  const statueRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!statueRef.current) return;

    const rect = statueRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X inside section
    const y = e.clientY - rect.top;  // cursor Y inside section

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX; // -1 to 1
    const deltaY = (y - centerY) / centerY; // -1 to 1

    // subtle movement
    gsap.to(statueRef.current, {
      x: deltaX * 10,   // max 10px horizontal shift
      y: deltaY * 10,   // max 10px vertical shift
      rotationX: deltaY * 5, // max 5deg tilt
      rotationY: deltaX * 5, // max 5deg tilt
      ease: "power3.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    if (!statueRef.current) return;
    // return to normal
    gsap.to(statueRef.current, { x: 0, y: 0, rotationX: 0, rotationY: 0, duration: 0.5, ease: "power3.out" });
  };

  useGSAP(() => {
    gsap.from("#heroGauche", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#heroGauche",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  })

  return (
    <section 
    className='relative z-20 min-h-[80vh] md:overflow-hidden px-6 md:px-10 flex md:flex-row mt-12 justify-between items-center flex-col-reverse'>
      <NeuralBackground />
      <div id="heroGauche" className='h-screen w-full md:w-1/2 flex flex-col gap-10 justify-center md:justify-start md:mt-10'>
        <h2 className='text-5xl text-primary'><span className='font-semibold'>Full-Stack</span> Web and Mobile Developer.</h2>
        <h4 className='text-primary text-4xl relative'><span className='font-semibold relative z-20'>Creative</span> <div className=' relative z-10 -top-3 w-8 h-2.5 bg-red-500'></div>Web Designer.</h4>
        <div>
          <h6 className='text-primary text-2xl mb-2'>My socials:</h6>
          <div className='flex w-[10rem] justify-between'>
            {/* <a href="#">
            <FaFacebook size={30}/>
            </a> */}
            <a href="#" className={iconStyle} aria-label="Facebook">
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a href="#" className={iconStyle} aria-label="LinkedIn">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a href="#" className={iconStyle} aria-label="Github">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className='flex'>
          <button className='bg-black p-4 text-white text-2xl'>Let's work together</button>
          {/* <button className='border p-4 text-primary flex justify-between w-32 ml-4'><Download/> Resume</button> */}
        </div>
      </div>
        <div className='md:w-1/3 z-20 md:h-screen relative -top-20 overflow-hidden flex flex-col'
          ref={statueRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
            <Statue />
            {/* <div className='relative border w-56 p-2'>
              <h1 className="relative -top-28 text-2xl text-thin justify-center w-full">Jonathan <span className='font-bold'>Andria</span></h1>
            </div> */}
        </div>
        <div className='absolute z-10 md:top-56 top-64 border-b-2 border-black py-1 w-44 md:left-[62%]'>
          <p className='md:text-xl md:whitespace-nowrap text-thin'>Creativity</p>
        </div>
        <div className='absolute md:top-32 top-40 z-10 border-b-2 flex justify-end border-black py-1 w-28 md:w-44 md:left-[82%] left-[72%]'>
          <p className='md:text-xl md:whitespace-nowrap'>Imagination</p>
        </div>
    </section>
  )
}

export default Hero;