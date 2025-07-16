import React from 'react';
import { Download, Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Mafikul5320', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  return (
    <section id="home" className="mt-24 md:mt-52 md:mb-20 flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-sm font-semibold px-4 py-2 rounded-full border border-purple-500/20">
                   Frontend Developer
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Hi, I am Mafikul - Web
Developer
                </span>
              </h1>
              
              <p className="dark:text-gray-300 text-gray-600  text-lg sm:text-xl max-w-2xl leading-relaxed">
                I’m a <span className='font-extrabold'>Frontend</span> Developer passionate about crafting beautiful, responsive, and user-friendly web interfaces. I specialize in turning design concepts into pixel-perfect websites using React, Tailwind CSS, and modern web technologies.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/Resume.pdf" download='MAFIKUL_ISLAM' className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2'>
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
              
              <button className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>View CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="dark:bg-gray-800/50 hover:bg-purple-500/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 border border-gray-700/50 hover:border-purple-500/50"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-purple-400 transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Status Indicators */}
            <div className="flex items-center space-x-8 text-sm text-gray-400 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>View my work →</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                <div className="w-full h-full rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1 bg-gradient-to-r from-purple-500 to-pink-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                    <img 
                      src="https://i.ibb.co/MyKb4qqH/Chat-GPT-Image-Jun-25-2025-05-00-10-PM-1.png" 
                      alt="Developer Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating Stats */}
                {/* <div className="absolute top-8 -right-8 bg-gray-800/90 backdrop-blur-sm border border-purple-500/20 rounded-lg p-3 animate-bounce-slow">
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-lg">3+</div>
                    <div className="text-xs text-gray-400">Years of Experience</div>
                  </div>
                </div> */}
                
                <div className="absolute bottom-8 -left-8 bg-gray-800/90 backdrop-blur-sm border border-pink-500/20 rounded-lg p-3 animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <div className="text-center">
                    <div className="text-pink-400 font-bold text-lg">10+</div>
                    <div className="text-xs text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;