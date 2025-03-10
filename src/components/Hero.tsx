
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          'Hi, I\'m Thisara Navod Bandara',
          'I\'m a Full-Stack Developer',
          'I build modern web applications'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden opacity-80">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-accent/10 filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 filter blur-[100px] animate-pulse-slow animation-delay-200"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-blue-accent text-lg md:text-xl font-medium mb-4 animate-fade-in opacity-0">
            Welcome to my portfolio
          </h2>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white-off leading-tight mb-6 animate-fade-in opacity-0 animate-delay-200">
            <span ref={typedRef} className="text-white-off"></span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in opacity-0 animate-delay-300">
            I create elegant solutions to complex problems using modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0 animate-delay-400">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-accent text-white-off rounded-md hover:bg-blue-accent/90 transition-all duration-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me
            </a>
            
            <a
              href="/CV_Thisara.pdf"
              className="px-8 py-3 bg-secondary/70 text-white-off rounded-md hover:bg-secondary transition-all duration-300 font-medium flex items-center gap-2 backdrop-blur-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white-off hover:text-blue-accent transition-all duration-300 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
