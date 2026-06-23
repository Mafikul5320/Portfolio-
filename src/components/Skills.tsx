'use client';

import React, { useState } from 'react';
import { Code, Palette, Server, Settings, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  color?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Palette,
      description: "Creating responsive and interactive user interfaces with modern frontend technologies"
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      description: "Building secure APIs, server-side logic, and database-driven applications"

    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Settings,
      description: "Using modern development tools to write, test, and maintain quality code"
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: Zap,
      description: "Deploying applications and managing development workflows efficiently"
    }
  ];

const skillsData: Record<string, Skill[]> = {

  frontend: [
    {
      name: 'HTML5',
      icon: <img src="https://skillicons.dev/icons?i=html" height={75} width={75} alt="HTML" />,
      description: 'Semantic and accessible web structure'
    },
    {
      name: 'CSS3',
      icon: <img src="https://skillicons.dev/icons?i=css" height={75} width={75} alt="CSS" />,
      description: 'Modern styling and responsive layouts'
    },
    {
      name: 'JavaScript',
      icon: <img src="https://skillicons.dev/icons?i=js" height={75} width={75} alt="JavaScript" />,
      description: 'Modern ES6+ programming'
    },
    {
      name: 'TypeScript',
      icon: <img src="https://skillicons.dev/icons?i=typescript" height={75} width={75} alt="TypeScript" />,
      description: 'Type-safe JavaScript development'
    },
    {
      name: 'React.js',
      icon: <img src="https://skillicons.dev/icons?i=react" height={75} width={75} alt="React" />,
      description: 'Building interactive user interfaces'
    },
    {
      name: 'Next.js',
      icon: <img src="https://skillicons.dev/icons?i=nextjs" height={75} width={75} alt="Next.js" />,
      description: 'Production-ready React framework'
    },
    {
      name: 'Tailwind CSS',
      icon: <img src="https://skillicons.dev/icons?i=tailwind" height={75} width={75} alt="Tailwind" />,
      description: 'Utility-first CSS framework'
    },
      {
        name: 'Framer Motion',
        icon: <svg width="100px" height="900px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M9 20.3335H16V27.0002L9 20.3335Z" fill="#0055FF" />
          <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF" />
          <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
        </svg>,
        description: 'Animation library for React'
      }
  ],


  backend: [
    {
      name: 'Node.js',
      icon: <img src="https://skillicons.dev/icons?i=nodejs" height={75} width={75} alt="Node.js" />,
      description: 'JavaScript backend runtime'
    },
    {
      name: 'Express.js',
      icon: <img src="https://skillicons.dev/icons?i=express" height={75} width={75} alt="Express" />,
      description: 'REST API development'
    },
    {
      name: 'REST API',
      icon: <img src="https://skillicons.dev/icons?i=postman" height={75} width={75} alt="API" />,
      description: 'Designing backend services'
    },
    {
      name: 'MongoDB',
      icon: <img src="https://skillicons.dev/icons?i=mongodb" height={75} width={75} alt="MongoDB" />,
      description: 'NoSQL database management'
    },
    {
      name: 'PostgreSQL',
      icon: <img src="https://skillicons.dev/icons?i=postgres" height={75} width={75} alt="PostgreSQL" />,
      description: 'Relational database system'
    },
    {
      name: 'Prisma ORM',
      icon: <img src="https://skillicons.dev/icons?i=prisma" height={75} width={75} alt="Prisma" />,
      description: 'Database ORM and query management'
    },
    {
      name: 'Firebase',
      icon: <img src="https://skillicons.dev/icons?i=firebase" height={75} width={75} alt="Firebase" />,
      description: 'Authentication and backend services'
    },
    {
      name: 'JWT',
      icon: <img src="https://i.ibb.co.com/gL7qXPg5/jwt.webp" height={75} width={75} alt="JWT" />,
      description: 'Secure authentication system'
    }
  ],



  tools: [
    {
      name: 'Git',
      icon: <img src="https://skillicons.dev/icons?i=git" height={75} width={75} alt="Git" />,
      description: 'Version control system'
    },
    {
      name: 'GitHub',
      icon: <img src="https://skillicons.dev/icons?i=github" height={75} width={75} alt="GitHub" />,
      description: 'Code hosting and collaboration'
    },
    {
      name: 'VS Code',
      icon: <img src="https://skillicons.dev/icons?i=vscode" height={75} width={75} alt="VS Code" />,
      description: 'Primary development editor'
    },
    {
      name: 'Figma',
      icon: <img src="https://skillicons.dev/icons?i=figma" height={75} width={75} alt="Figma" />,
      description: 'UI design and prototyping'
    },
    {
      name: 'Postman',
      icon: <img src="https://skillicons.dev/icons?i=postman" height={75} width={75} alt="Postman" />,
      description: 'API testing and debugging'
    },
    {
      name: 'NPM',
      icon: <img src="https://skillicons.dev/icons?i=npm" height={75} width={75} alt="NPM" />,
      description: 'Package management'
    }
  ],



  devops: [
    {
      name: 'Vercel',
      icon: <img src="https://skillicons.dev/icons?i=vercel" height={75} width={75} alt="Vercel" />,
      description: 'Frontend deployment platform'
    },
    {
      name: 'Netlify',
      icon: <img src="https://skillicons.dev/icons?i=netlify" height={75} width={75} alt="Netlify" />,
      description: 'Web hosting and deployment'
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
  ]

};

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8  relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-purple-200/50 dark:border-purple-500/30">
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">My Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm'
                  }`}
              >
                <CategoryIcon className="h-4 w-4" />
                <span className="text-sm">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {skillCategories.find(cat => cat.id === activeCategory)?.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {skillCategories.find(cat => cat.id === activeCategory)?.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
          <div className="flex flex-wrap justify-center gap-6">
            {skillsData[activeCategory]?.map((skill, index) => (
              <div
                key={index}
                className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(16.666%-20px)] group relative bg-gray-50/80 dark:bg-gray-700/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-100/80 dark:hover:bg-gray-600/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-200/50 dark:border-gray-600/50 hover:border-purple-500/30"
              >
                {/* Skill Icon */}
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {skill.icon}
                  </div>

                  {/* Skill Name */}
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-sm mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
