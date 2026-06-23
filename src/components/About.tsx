'use client';

import React, { useEffect, useState } from 'react';
import { User, Code, Mail, MapPin, Calendar, Award } from 'lucide-react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const About = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Animation - 1751220047237.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center">

          <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-purple-200/50 dark:border-purple-500/30">
            <User className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">
              About Me
            </span>
          </div>


          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Building

          </h2>


          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            I’m Mafikul Islam, a Computer Science student and Full Stack Developer
            who enjoys building web applications, solving problems through code,
            and continuously improving my skills with modern technologies.
          </p>

        </div>



        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">


          {/* Left Side */}
          <div className="relative">

            <div className="relative z-10">


              {/* Animation */}
              <div className="relative w-80 h-80 mx-auto mb-8">

                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl">
                </div>


                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 dark:border-white/20 backdrop-blur-sm">

                  {animationData && (
                    <Lottie
                      animationData={animationData}
                      loop={true}
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent">
                  </div>

                </div>



                {/* Available badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-4 shadow-xl">

                  <div className="flex items-center space-x-2">

                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Available for work
                    </span>

                  </div>

                </div>


              </div>




              {/* Info Card */}
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">


                <div className="space-y-4">


                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Dhaka, Bangladesh
                    </span>
                  </div>



                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      mdmafikul.islam53@gmail.com
                    </span>
                  </div>



                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5 text-purple-500" />

                    <strong className="text-gray-700 dark:text-gray-300">
                      Full Stack Developer
                    </strong>

                  </div>


                </div>


              </div>


            </div>


          </div>





          {/* Right Side */}

          <div className="space-y-8">


            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">


              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h3>


              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">


                <p>
                  My journey into programming started with curiosity about how
                  websites and applications are built. That curiosity gradually
                  became a passion for creating useful digital experiences.
                </p>



                <p>
                  I work with modern technologies like React, Next.js, Node.js,
                  Express.js, and databases to build complete web applications.
                  I enjoy working on both frontend interfaces and backend logic.
                </p>



                <p>
                  I’m continuously learning new technologies, improving my
                  problem-solving skills, and building projects that help me
                  become a better developer.
                </p>


              </div>


            </div>


            {/* Button */}

            <div className="flex">

              <a
                href="mailto:mdmafikul.islam53@gmail.com?subject=Job Opportunity"
                className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >

                <Mail className="h-5 w-5" />

                Get In Touch

              </a>


            </div>


          </div>


        </div>


      </div>

    </section>
  );
};

export default About;