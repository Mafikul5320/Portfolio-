import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    // {
    //   title: 'Senior Full Stack Developer',
    //   company: 'TechCorp Solutions',
    //   location: 'San Francisco, CA',
    //   duration: '2022 - Present',
    //   type: 'Full-time',
    //   description: 'Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud-native solutions.',
    //   achievements: [
    //     'Led a team of 5 developers in building a microservices architecture',
    //     'Improved application performance by 40% through optimization',
    //     'Implemented CI/CD pipelines reducing deployment time by 60%'
    //   ],
    //   technologies: ['React', 'Next.js', 'Node.js', 'AWS', 'PostgreSQL'],
    //   color: 'from-blue-500 to-cyan-500'
    // },
    // {
    //   title: 'Frontend Developer',
    //   company: 'StartupXYZ',
    //   location: 'Remote',
    //   duration: '2025',
    //   type: 'Full-time',
    //   description: 'Developed responsive user interfaces and improved application performance. Collaborated with design teams to implement pixel-perfect designs.',
    //   achievements: [
    //     'Built 15+ responsive web applications from scratch',
    //     'Reduced bundle size by 35% through code splitting',
    //     'Mentored 3 junior developers in modern React practices'
    //   ],
    //   technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    //   color: 'from-green-500 to-teal-500'
    // },
    // {
    //   title: 'Junior Web Developer',
    //   company: 'WebStudio Inc',
    //   location: 'New York, NY',
    //   duration: '2020 - 2021',
    //   type: 'Full-time',
    //   description: 'Built and maintained client websites using modern web technologies. Gained experience in full-stack development and agile methodologies.',
    //   achievements: [
    //     'Delivered 20+ client projects on time and within budget',
    //     'Learned and implemented modern JavaScript frameworks',
    //     'Collaborated with cross-functional teams using Agile methodology'
    //   ],
    //   technologies: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL'],
    //   color: 'from-purple-500 to-pink-500'
    // }
    {
  title: 'Junior Frontend Developer (Personal Projects)',
  company: 'Self-Learning',
  location: 'Remote',
  duration: '2025 - Present',
  type: 'Project-based',
  description: 'Built several web applications as part of personal learning. Focused on responsive design, component reuse, and performance.',
  achievements: [
    'Created 5+ fully functional React apps using public APIs',
    'Improved Lighthouse performance scores to 90+ in all projects',
    'Wrote clean and reusable code following modern React standards'
  ],
  technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Git'],
  color: 'from-blue-500 to-indigo-500'
},

  ];

  const education = [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      institution: 'Northern University of Bangladesh',
      location: 'Uttra, Dhaka',
      duration: '2025 - 2028',
      gpa: 'continue with study',
      description: 'Focused on software engineering, data structures, algorithms, and web development.',
      achievements: [
        'President of Programming Club for 7 month',
      ],
      coursework: ['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );

  const ExperienceCard = ({ exp, index }) => (
    <div className="bg-white dark:bg-gray-800 relative rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
      <div
          className='opacity-0 absolute dark:opacity-20 inset-0 z-0'
            style={{
              backgroundColor: "#0f1117",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23a855f7' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          >
          </div>
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center`}>
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
              <p className="text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
            </div>
          </div>
        </div>
        <div className="text-right text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1 mb-1">
            <Calendar className="h-4 w-4" />
            <span>{exp.duration}</span>
          </div>

          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{exp.location}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
          <Award className="h-4 w-4 mr-2 text-yellow-500" />
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {exp.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const EducationCard = ({ edu, index }) => (
    <div className="bg-white dark:bg-gray-800 relative rounded-2xl p-8 shadow-xl border border-gray-400 dark:border-[#4b4b8b] hover:shadow-2xl transition-all duration-300">
      <div
          className='opacity-0 absolute dark:opacity-20 inset-0 z-0'
            style={{
              backgroundColor: "#0f1117",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23a855f7' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          >
          </div>
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">

            <div className='space-y-2'>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
              <div className="flex items-center text-sm gap-2 text-gray-400">
                <GraduationCap className="w-4 h-4" />
                <span><p className="text-gray-600 dark:text-gray-400 font-semibold">{edu.institution}</p></span>
              </div>
            </div>
          </div>
        </div>
        <div className=" gap-1 dark:bg-[#2f2f5f]  px-2 space-y-1 py-1 rounded text-sm">
          <div className='flex  items-center'>
            <Calendar className="w-4 h-4" />
          <span>{edu.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{edu.location}</span>
          </div>
        </div>
        
      </div>

      {edu.gpa && (
        <div className="mb-4">
          <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
            GPA: {edu.gpa}
          </span>
        </div>
      )}

      <p className="text-gray-600 font-semibold font-mono dark:text-gray-300 mb-6 leading-relaxed">{edu.description}</p>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
          <Award className="h-4 w-4 mr-2 text-yellow-500" />
          Achievements
        </h4>
        <ul className="space-y-2">
          {edu.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <TrendingUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {edu.coursework.map((course, courseIndex) => (
          <span
            key={courseIndex}
            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
            <Briefcase className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">My Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            A timeline of my professional growth and educational foundation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex space-x-2">
              <TabButton
                id="experience"
                label="Experience"
                icon={Briefcase}
                isActive={activeTab === 'experience'}
                onClick={setActiveTab}
              />
              <TabButton
                id="education"
                label="Education"
                icon={GraduationCap}
                isActive={activeTab === 'education'}
                onClick={setActiveTab}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} exp={exp} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationCard key={index} edu={edu} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;