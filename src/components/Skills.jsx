import React, { useState } from 'react';
import { Code, Palette, Server, Database, Settings, Zap } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Palette,
      description: 'Building modern, responsive user interfaces with cutting-edge technologies'
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      description: 'Creating robust server-side applications and APIs'
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: Settings,
      description: 'Development tools and platforms for efficient workflow'
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: Zap,
      description: 'Deployment, monitoring, and infrastructure management'
    }
  ];

  const skillsData = {
    frontend: [
      {
        name: 'TailwindCSS',
        icon: <img src="https://skillicons.dev/icons?i=tailwind" height={75} width={75} />,
        description: 'Utility-first CSS framework'
      },
      {
        name: 'ReactJS',
        icon: <img src="https://skillicons.dev/icons?i=react" height={75} width={75} />,
        description: 'JavaScript library for building UIs'
      },
      {
        name: 'NextJS',
        icon: <img src="https://skillicons.dev/icons?i=nextjs" height={75} width={75} />,
        description: 'React framework for production'
      },
      {
        name: 'CSS',
        icon: <img src="https://skillicons.dev/icons?i=css" height={75} width={75} />,
        description: 'Cascading Style Sheets'
      },
      {
        name: 'Framer Motion',
        icon: <img src="https://skillicons.dev/icons?i=html" height={75} width={75} />,
        description: 'Animation library for React'
      },
      {
        name: 'Framer Motion',
        icon: <svg width="100px" height="900px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 20.3335H16V27.0002L9 20.3335Z" fill="#0055FF" />
          <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF" />
          <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
        </svg>,
        description: 'Animation library for React'
      }
    ],
    backend: [
      {
        name: 'Node.js',
        icon: <img src="https://skillicons.dev/icons?i=nodejs" height={75} width={75} />,
        description: 'JavaScript runtime environment'
      },
      {
        name: 'Express.js',
        icon: <img src="https://skillicons.dev/icons?i=expressjs" height={75} width={75} />,
        description: 'Web framework for Node.js'
      },
      {
        name: 'MongoDB',
        icon: <img src="https://skillicons.dev/icons?i=mongodb" height={75} width={75} />,
        description: 'NoSQL database'
      },
      {
        name: 'PostgreSQL',
        icon: <img src="https://skillicons.dev/icons?i=firebase" height={75} width={75} />,
        description: 'Relational database'
      },
    ],
    tools: [
      {
        name: 'Git',
        icon: <img src="https://skillicons.dev/icons?i=git" height={75} width={75} />,
        description: 'Version control system'
      },
      {
        name: 'VS Code',
        icon: <img src="https://skillicons.dev/icons?i=vscode" height={75} width={75} />,
        description: 'Code editor'
      },
      {
        name: 'Figma',
        icon: <img src="https://skillicons.dev/icons?i=figma" height={75} width={75} />,
        description: 'Design and prototyping tool'
      },
      {
        name: 'NPM',
        icon: <img src="https://skillicons.dev/icons?i=npm" height={75} width={75} />,
        description: 'Package manager'
      }
    ],
    devops: [
      {
        name: 'Vercel',
        icon: <img src="https://skillicons.dev/icons?i=vercel" height={75} width={75} />,
        description: 'Deployment platform'
      },
      {
        name: 'Netlify',
        icon: <img src="https://skillicons.dev/icons?i=netlify" height={75} width={75} />,
        description: 'Web hosting service'
      },
      {
        name: 'Firebase',
        icon: <img src="https://skillicons.dev/icons?i=firebase" height={75} width={75} />,
        description: 'Backend-as-a-Service platform'
      },
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skillsData[activeCategory]?.map((skill, index) => (
              <div
                key={index}
                className="group  relative bg-gray-50/80 dark:bg-gray-700/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-100/80 dark:hover:bg-gray-600/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-200/50 dark:border-gray-600/50 hover:border-purple-500/30"
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

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '15+', label: 'Technologies', icon: Code },
            { number: '50+', label: 'Projects', icon: Zap },
            { number: '3+', label: 'Years Exp', icon: Settings },
            { number: '30+', label: 'Happy Clients', icon: Database }
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;