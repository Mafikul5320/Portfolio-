'use client';

import React, { useState, useRef } from 'react';
import { Palette, Server, Settings, Zap } from 'lucide-react';
import {
  motion as m,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

// Fix React 19 type incompatibility with framer-motion v10
const motion = m as any;

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  color?: string;
  accent?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
}

// --- 3D Interactive & Animated Skill Card ---
const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position values for Spotlight & 3D Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Normalized values (-0.5 to 0.5) for 3D rotation
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const rotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    mouseX.set(localX);
    mouseY.set(localY);

    tiltX.set(localX / width - 0.5);
    tiltY.set(localY / height - 0.5);
  };

  const handleMouseLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const accentColor = skill.accent || '#a855f7';
  const spotlightBackground = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, ${accentColor}28, transparent 80%)`;
  const borderSpotlight = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, ${accentColor}90, transparent 100%)`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 220,
            damping: 20,
            delay: index * 0.06,
          },
        },
      }}
      style={{ perspective: 1000 }}
      className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)]"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group relative h-full bg-gray-50/80 dark:bg-gray-700/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-100/80 dark:hover:bg-gray-600/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-200/50 dark:border-gray-600/50 hover:border-purple-500/30"
      >
        {/* Dynamic Mouse-Tracking Border Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: borderSpotlight }}
        />

        {/* Cursor-Tracking Spotlight Overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-hidden"
          style={{ background: spotlightBackground }}
        />

        {/* Skill Content */}
        <div
          style={{ transform: 'translateZ(30px)' }}
          className="relative z-10 flex flex-col items-center text-center space-y-4 h-full justify-between"
        >
          {/* Icon Box with Continuous Levitation & Brand Aura Glow */}
          <div className="relative flex items-center justify-center my-1">
            {/* Pulsing Brand Backlight Glow (Visible around and over the icon box) */}
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.45, 0.85, 0.45],
              }}
              transition={{
                duration: 3 + (index % 3),
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="pointer-events-none absolute -inset-2 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-100"
              style={{ backgroundColor: accentColor }}
            />

            {/* Floating Icon Wrapper with Glassmorphism */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.2,
              }}
              style={{
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.2), 0 0 25px -2px ${accentColor}50, inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)`,
              }}
              className="relative z-10 w-20 h-20 p-2.5 bg-white/25 dark:bg-white/[0.08] backdrop-blur-xl border border-white/40 dark:border-white/25 group-hover:border-white/50 dark:group-hover:border-white/40 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-all duration-300"
            >
              {/* Subtle Glass Specular Reflection */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-white/[0.05] to-transparent opacity-80"
              />

              {/* Subtle Top Glow Overlay on Icon */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-25 group-hover:opacity-60 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${accentColor}60, transparent 70%)`,
                }}
              />
              <div className="relative z-10 w-full h-full flex items-center justify-center [&>img]:w-full [&>img]:h-full [&>img]:object-contain [&>svg]:w-full [&>svg]:h-full drop-shadow-sm">
                {skill.icon}
              </div>
            </motion.div>
          </div>

          {/* Skill Name & Description */}
          <div className="w-full">
            <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300 flex items-center justify-center gap-1.5">
              {skill.name}
              <span
                className="inline-block w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
              />
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Palette,
      description: 'Creating responsive and interactive user interfaces with modern frontend technologies',
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      description: 'Building secure APIs, server-side logic, and database-driven applications',
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Settings,
      description: 'Using modern development tools to write, test, and maintain quality code',
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: Zap,
      description: 'Deploying applications and managing development workflows efficiently',
    },
  ];

  const skillsData: Record<string, Skill[]> = {
    frontend: [
      {
        name: 'HTML5',
        icon: <img src="https://skillicons.dev/icons?i=html" height={75} width={75} alt="HTML" />,
        description: 'Semantic and accessible web structure',
        accent: '#E34F26',
      },
      {
        name: 'CSS3',
        icon: <img src="https://skillicons.dev/icons?i=css" height={75} width={75} alt="CSS" />,
        description: 'Modern styling and responsive layouts',
        accent: '#1572B6',
      },
      {
        name: 'JavaScript',
        icon: <img src="https://skillicons.dev/icons?i=js" height={75} width={75} alt="JavaScript" />,
        description: 'Modern ES6+ programming',
        accent: '#F7DF1E',
      },
      {
        name: 'TypeScript',
        icon: <img src="https://skillicons.dev/icons?i=typescript" height={75} width={75} alt="TypeScript" />,
        description: 'Type-safe JavaScript development',
        accent: '#3178C6',
      },
      {
        name: 'React.js',
        icon: <img src="https://skillicons.dev/icons?i=react" height={75} width={75} alt="React" />,
        description: 'Building interactive user interfaces',
        accent: '#61DAFB',
      },
      {
        name: 'Next.js',
        icon: <img src="https://skillicons.dev/icons?i=nextjs" height={75} width={75} alt="Next.js" />,
        description: 'Production-ready React framework',
        accent: '#A855F7',
      },
      {
        name: 'Tailwind CSS',
        icon: <img src="https://skillicons.dev/icons?i=tailwind" height={75} width={75} alt="Tailwind" />,
        description: 'Utility-first CSS framework',
        accent: '#38BDF8',
      },
      {
        name: 'Framer Motion',
        icon: (
          <svg width="100px" height="900px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9 20.3335H16V27.0002L9 20.3335Z" fill="#0055FF" />
            <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF" />
            <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
          </svg>
        ),
        description: 'Animation library for React',
        accent: '#00AAFF',
      },
    ],

    backend: [
      {
        name: 'Node.js',
        icon: <img src="https://skillicons.dev/icons?i=nodejs" height={75} width={75} alt="Node.js" />,
        description: 'JavaScript backend runtime',
        accent: '#5FA04E',
      },
      {
        name: 'Express.js',
        icon: <img src="https://skillicons.dev/icons?i=express" height={75} width={75} alt="Express" />,
        description: 'REST API development',
        accent: '#94A3B8',
      },
      {
        name: 'REST API',
        icon: <img src="https://skillicons.dev/icons?i=postman" height={75} width={75} alt="API" />,
        description: 'Designing backend services',
        accent: '#FF6C37',
      },
      {
        name: 'MongoDB',
        icon: <img src="https://skillicons.dev/icons?i=mongodb" height={75} width={75} alt="MongoDB" />,
        description: 'NoSQL database management',
        accent: '#47A248',
      },
      {
        name: 'PostgreSQL',
        icon: <img src="https://skillicons.dev/icons?i=postgres" height={75} width={75} alt="PostgreSQL" />,
        description: 'Relational database system',
        accent: '#4169E1',
      },
      {
        name: 'Prisma ORM',
        icon: <img src="https://skillicons.dev/icons?i=prisma" height={75} width={75} alt="Prisma" />,
        description: 'Database ORM and query management',
        accent: '#818CF8',
      },
      {
        name: 'Firebase',
        icon: <img src="https://skillicons.dev/icons?i=firebase" height={75} width={75} alt="Firebase" />,
        description: 'Authentication and backend services',
        accent: '#FFCA28',
      },
      {
        name: 'JWT',
        icon: <img src="https://i.ibb.co.com/gL7qXPg5/jwt.webp" height={75} width={75} alt="JWT" />,
        description: 'Secure authentication system',
        accent: '#FB015B',
      },
    ],

    tools: [
      {
        name: 'Git',
        icon: <img src="https://skillicons.dev/icons?i=git" height={75} width={75} alt="Git" />,
        description: 'Version control system',
        accent: '#F05032',
      },
      {
        name: 'GitHub',
        icon: <img src="https://skillicons.dev/icons?i=github" height={75} width={75} alt="GitHub" />,
        description: 'Code hosting and collaboration',
        accent: '#A855F7',
      },
      {
        name: 'VS Code',
        icon: <img src="https://skillicons.dev/icons?i=vscode" height={75} width={75} alt="VS Code" />,
        description: 'Primary development editor',
        accent: '#007ACC',
      },
      {
        name: 'Figma',
        icon: <img src="https://skillicons.dev/icons?i=figma" height={75} width={75} alt="Figma" />,
        description: 'UI design and prototyping',
        accent: '#F24E1E',
      },
      {
        name: 'Postman',
        icon: <img src="https://skillicons.dev/icons?i=postman" height={75} width={75} alt="Postman" />,
        description: 'API testing and debugging',
        accent: '#FF6C37',
      },
      {
        name: 'NPM',
        icon: <img src="https://skillicons.dev/icons?i=npm" height={75} width={75} alt="NPM" />,
        description: 'Package management',
        accent: '#CB3837',
      },
    ],

    devops: [
      {
        name: 'Vercel',
        icon: <img src="https://skillicons.dev/icons?i=vercel" height={75} width={75} alt="Vercel" />,
        description: 'Frontend deployment platform',
        accent: '#A855F7',
      },
      {
        name: 'Netlify',
        icon: <img src="https://skillicons.dev/icons?i=netlify" height={75} width={75} alt="Netlify" />,
        description: 'Web hosting and deployment',
        accent: '#00C7B7',
      },
      // {
      //   name: 'Docker',
      //   icon: <img src="https://skillicons.dev/icons?i=docker" height={75} width={75} alt="Docker" />,
      //   description: 'Containerization platform'
      // },
      // {
      //   name: 'Linux',
      //   icon: <img src="https://skillicons.dev/icons?i=linux" height={75} width={75} alt="Linux" />,
      //   description: 'Server environment'
      // },
      // {
      //   name: 'Environment Variables',
      //   icon: <img src="https://skillicons.dev/icons?i=dotenv" height={75} width={75} alt="Env" />,
      //   description: 'Secure configuration management'
      // },
      // {
      //   name: 'CI/CD',
      //   icon: <img src="https://skillicons.dev/icons?i=githubactions" height={75} width={75} alt="CI/CD" />,
      //   description: 'Automated deployment workflow'
      // }
    ],
  };

  const allSkills = Object.values(skillsData).flat();

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8  relative overflow-hidden">
      {/* Background Effects (Animated with 1st file's exact colors & classes) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-purple-200/50 dark:border-purple-500/30">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">My Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillCategory"
                    className="absolute inset-0 bg-purple-600 rounded-xl shadow-lg shadow-purple-500/25"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <CategoryIcon className="h-4 w-4 relative z-10" />
                <span className="text-sm relative z-10">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Title */}
        <div className="text-center mb-12 min-h-[84px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {skillCategories.find((cat) => cat.id === activeCategory)?.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {skillCategories.find((cat) => cat.id === activeCategory)?.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Skills Grid */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 15, transition: { duration: 0.15 } }}
              className="flex flex-wrap justify-center gap-6"
            >
              {skillsData[activeCategory]?.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Infinite Animated Tech Stack Marquee Ticker */}
        <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
          <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="animate-marquee flex flex-nowrap gap-4 min-w-max py-2">
              {[...allSkills, ...allSkills].map((item, idx) => (
                <div
                  key={idx}
                  className="group/pill flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 dark:bg-white/[0.05] border border-gray-200/70 dark:border-white/10 backdrop-blur-xl hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:bg-white dark:hover:bg-white/[0.1] hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer"
                >
                  <div className="w-6 h-6 flex items-center justify-center scale-90 group-hover/pill:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-gray-800 dark:text-gray-200 text-sm font-semibold whitespace-nowrap group-hover/pill:text-purple-600 dark:group-hover/pill:text-purple-300 transition-colors">
                    {item.name}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover/pill:scale-125"
                    style={{
                      backgroundColor: item.accent || '#a855f7',
                      boxShadow: `0 0 8px ${item.accent || '#a855f7'}`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;