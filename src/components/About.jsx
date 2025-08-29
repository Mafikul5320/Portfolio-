import React from 'react';
import { User, Code, Coffee, Heart, Download, Mail, MapPin, Calendar, Award } from 'lucide-react';
import animation from '../public/Animation - 1751220047237.json'
import Lottie from 'lottie-react';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Projects Done', icon: Code, color: 'from-green-500 to-emerald-500' },
    { number: '30+', label: 'Happy Clients', icon: Heart, color: 'from-pink-500 to-rose-500' },
    { number: '15+', label: 'Technologies', icon: Award, color: 'from-purple-500 to-indigo-500' }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Specialized in React, Next.js, and Node.js with 3+ years of experience building scalable web applications.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Coffee,
      title: 'Problem Solver',
      description: 'Passionate about turning complex challenges into elegant solutions that drive business growth.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Committed to creating exceptional user experiences that combine beautiful design with seamless functionality.',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="about" className=" px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-purple-200/50 dark:border-purple-500/30">
            <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Hi! I'm Mafikul Islam, a passionate MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. I love turning complex problems into clean, scalable solutions.
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Profile */}
          <div className="relative">
            <div className="relative z-10">
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 dark:border-white/20 backdrop-blur-sm">
                  <Lottie animationData={animation}  loop={true} />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">Uttara, Dhaka</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">mdmafikul.islam53@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-purple-500" />
                    <strong className="text-gray-700 dark:text-gray-300">MERN Stack Developer</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  My programming journey began during college when I discovered the incredible power 
                  of code to solve real-world problems. What started as curiosity quickly transformed 
                  into a deep passion for creating digital solutions.
                </p>
                <p>
                  I specialize in full-stack development with expertise in React, Next.js, and Node.js. 
                  I'm fascinated by the entire development lifecycle - from conceptualizing user 
                  experiences to architecting scalable backend systems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while planning my next project.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:mdmafikul.islam53@gmail.com?subject=Job Opportunity&body=Hello Mafikul, I saw your portfolio and would like to discuss a job opportunity." className="bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-700/80 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;