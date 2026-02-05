import { Download } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Hero() {
  const iconStyle = "p-2 w-12 h-12 text-primary border border-4 border-primary rounded-lg hover:bg-gray-100 transition-colors";

  return (
    <section className='min-h-screen px-6 md:px-10 flex md:flex-row mt-20 justify-between flex-col'>
      <div id="heroGauche" className='min-h-screen w-full flex flex-col justify-between'>
        <h3 className='text-primary text-3xl'>Hey! I’m <span className='font-bold'>Jonathan </span> ANDRIANANTENAINA.</h3>
        <div className='flex'>
          <button className='bg-black p-4 text-white text-2xl'>Let's work together</button>
          <button className='border p-4 text-primary flex justify-between w-32 ml-4'><Download/> Resume</button>
        </div>
        <h2 className='text-5xl text-primary'><span className='font-semibold'>Full-Stack</span> Web and Mobile Developer.</h2>
        <h4 className='text-primary text-4xl'><span className='font-semibold'>Creative</span> Web Designer.</h4>
        <div>
          <h6 className='text-primary'>My socials:</h6>
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
      </div>
    </section>
  )
}

export default Hero;