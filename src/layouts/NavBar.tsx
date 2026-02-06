import { useState, useRef } from "react";
import Logo from "../components/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Changed to false
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useRef<GSAPTimeline | null>(null);
  const linkRef1 = useRef<HTMLAnchorElement>(null);
  const linkRef2 = useRef<HTMLAnchorElement>(null);
  

  useGSAP(() => {
    gsap.set(menuRef.current, { y: "-100%" });
    gsap.set([linkRef1.current,linkRef2.current], {
      autoAlpha: 0,
      x: -20,
    });

    t.current = gsap
      .timeline({ paused: true })
      .to(menuRef.current, {
        y: 0,
        duration: 1,
        ease: "power4.inOut",
      })
      .to(linkRef1.current, {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      },
      "<+0.7"
      )
      .to(linkRef2.current, {
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out"
      },
      "<+0.2"
      )
  })

  const toggleMenu = () => {
    if (t.current) {
      if (isOpen) {
        t.current.reverse();
      } else {
        t.current.play();
      }
    }
    setIsOpen(!isOpen);
  }

  return (
    <header className="block relative top-0 min-w-screen h-fit z-50 bg-background/80 backdrop-blur border-b">
      <nav className="z-40 fixed w-full flex flex-row justify-between items-center p-6">
        <Logo />
        {/* Burger menu */}
        <button 
          className="relative z-50 flex flex-col gap-1.5 cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
           className={`w-8 h-1 transition-all duration-1000 ${
            isOpen ? 'rotate-45 translate-y-2.5 bg-white' : 'bg-black'
          }`}></div>
           <div className={`w-8 h-1 transition-all duration-1000 ${
            isOpen ? '-rotate-45 bg-white' : 'bg-black'
          }`}></div>
        </button>
        
        {/* mobile menu */}
        <div 
          className="absolute top-0 left-0 min-h-screen w-screen bg-black text-6xl flex flex-col gap-7 font-thin items-center justify-center"
          ref={menuRef}
          onClick={toggleMenu}
        >
          <a 
            ref={linkRef1}
            href="#projects" 
            className="hover:text-white text-gray-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            ref={linkRef2}
            href="#contact" 
            className="hover:text-white text-gray-400 transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}