import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
  category?: string;
};

type SkillCategory = {
  title: string;
  skills: string[];
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const skills: Skill[] = [
    // Programming Languages
    {
      name: 'JavaScript',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      color: '#F7DF1E',
      category: 'language'
    },
    {
      name: 'TypeScript',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: '#3178C6',
      category: 'language'
    },
    {
      name: 'Java',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      color: '#ED8B00',
      category: 'language'
    },
    {
      name: 'PHP',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      color: '#777BB4',
      category: 'language'
    },
    {
      name: 'Python',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB',
      category: 'language'
    },
    // Frameworks
    {
      name: 'React.js',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB',
      category: 'framework'
    },
    {
      name: 'Spring Boot',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      color: '#6DB33F',
      category: 'framework'
    },
    {
      name: 'Laravel',
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      color: '#FF2D20',
      category: 'framework'
    },
    {
      name: 'Node.js',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933',
      category: 'framework'
    },
    {
      name: 'Next.js',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: '#ffffff',
      category: 'framework'
    },
    {
      name: 'Flask',
      level: 65,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      color: '#000000',
      category: 'framework'
    },
    // Databases
    {
      name: 'MySQL',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      color: '#4479A1',
      category: 'database'
    },
    {
      name: 'MongoDB',
      level: 70,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: '#47A248',
      category: 'database'
    },
    // Tools
    {
      name: 'Git',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      color: '#F05032',
      category: 'tool'
    },
    {
      name: 'VS Code',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      color: '#007ACC',
      category: 'tool'
    },
    {
      name: 'Figma',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      color: '#F24E1E',
      category: 'tool'
    }
  ];

  // Define skill categories and their display titles
  const categories: SkillCategory[] = [
    { title: 'Programming Languages', skills: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python'] },
    { title: 'Frameworks & Libraries', skills: ['React.js', 'Spring Boot', 'Laravel', 'Node.js', 'Next.js', 'Flask'] },
    { title: 'Databases', skills: ['MySQL', 'MongoDB'] },
    { title: 'Tools & Platforms', skills: ['Git', 'VS Code', 'Figma'] }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 md:py-32 relative opacity-0 transition-opacity duration-1000"
      style={{ backgroundColor: '#1A2526' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white-off animate-fade-in animate-delay-100">Technical Competencies</h2>
            <div className="w-20 h-1 bg-blue-accent mx-auto mt-4 mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies I've worked with and my areas of expertise.
            </p>
          </div>
          
          {/* Display skills by category */}
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-xl md:text-2xl font-semibold text-white-off mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => category.skills.includes(skill.name))
                  .map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 transition-all duration-300 hover:scale-[1.05] opacity-0 animate-fade-in"
                      style={{ 
                        animationDelay: `${index * 100 + 200}ms`, 
                        animationFillMode: 'forwards' 
                      }}
                    >
                      <div className="relative mb-4 transition-transform duration-300 hover:scale-110">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="w-14 h-14 transition-all duration-300"
                          style={{ 
                            filter: 'drop-shadow(0 0 0 rgba(255,255,255,0))',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.filter = `drop-shadow(0 0 8px ${skill.color})`;
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.filter = 'drop-shadow(0 0 0 rgba(255,255,255,0))';
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-medium text-white-off text-center">{skill.name}</h3>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
