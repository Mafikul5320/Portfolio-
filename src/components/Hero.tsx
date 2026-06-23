'use client';

import React, { useState, useEffect } from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Typewriter = ({ words }: { words: string[] }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 70;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    const currentWord = words[wordIndex];

    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="inline-flex items-center min-h-[1.5em]">
      <span className="bg-gradient-to-r from-[#a430ce] via-[#a430ce] to-[#a430ce] bg-clip-text text-transparent">
        {text}
      </span>
      <span className="w-[3px] h-[1em] bg-purple-500 ml-1 animate-[pulse_1s_ease-in-out_infinite]"></span>
    </span>
  );
};

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Mafikul5320', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mafikulislam', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mdmafikul.islam53@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="mt-24 md:mt-52 md:mb-20 flex items-center justify-center  px-4 sm:px-6 lg:px-8">
      <div className="w-8/10 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className={` 'animate-slide-up' : 'opacity-0'}`}>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></span>
                    </span>
                    <span className="text-[13px] uppercase dark:text-[#a430ce]">
                      Available for Work
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight min-h-[120px] sm:min-h-[140px] flex flex-col justify-center">
                <span className="block text-gray-900 dark:text-white pb-2">
                  Hi, I'm Mafikul Islam
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-5xl mt-2 text-gray-800 dark:text-gray-200 font-extrabold">
                  <Typewriter words={['Full-Stack Developer', 'Frontend Developer', 'MERN Stack Developer']} />
                </span>
              </h1>
              <p className="dark:text-gray-300 text-black text-lg sm:text-xl max-w-2xl leading-relaxed">
                I’m a CSE student who loves coding and building web applications. I enjoy
                transforming ideas into functional websites and solving problems through
                programming. I’m constantly learning new technologies and improving myself
                as a developer.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/MAFIKUL_ISLAM _(Frontend Developer_Resume).pdf" download='MAFIKUL ISLAM (Frontend Developer_Resume)' className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2'>
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
                <span>Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>View my work →</span>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[32rem] sm:max-w-[36rem] lg:max-w-[40rem] mx-auto lg:mx-0">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>

              {/* Profile Image Container */}
              <div className="relative aspect-square w-full rounded-full border-4 border-gradient-to-r from-purple-500 to-pink-500 p-1 bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/portfolioprofile.png"
                    alt="Developer Profile"
                    width={800}
                    height={800}
                    className="w-full h-full object-contain"
                    priority={true}
                    unoptimized
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-sm border border-pink-500/20 rounded-lg p-3 animate-bounce-slow" style={{ animationDelay: '1s' }}>
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
