'use client';

import React from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
  Heart, ArrowUp, Code, ExternalLink
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mafikulislam/', label: 'LinkedIn', hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/Mafikul5320', label: 'GitHub', hoverColor: 'hover:bg-gray-500/20 hover:border-gray-400/40 hover:text-gray-300' },
    { icon: Facebook, href: 'https://www.facebook.com/mdmafikul.islam.3388', label: 'Facebook', hoverColor: 'hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-blue-500' },
    { icon: Mail, href: 'mailto:mdmafikul.islam53@gmail.com', label: 'Email', hoverColor: 'hover:bg-red-500/20 hover:border-red-500/40 hover:text-red-400' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      {/* Main Footer */}
      <div className="bg-gray-50/50 dark:bg-[#0a0f2e]/80 backdrop-blur-xl relative">
        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-32 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 right-1/4 w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Mafikul Islam</h2>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-medium uppercase tracking-wider pt-2">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                Passionate developer creating innovative web solutions with modern technologies.
                Let&apos;s build something amazing together!
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 text-sm transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-purple-500 group-hover:w-4 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-pink-500 group-hover:w-4 transition-all duration-300"></span>
                    <span className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 cursor-default">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a href="mailto:mdmafikul.islam53@gmail.com" className="flex items-start gap-3 group">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-purple-400 transition-colors break-all">
                      mdmafikul.islam53@gmail.com
                    </p>
                  </div>
                </a>
                <a href="tel:+8801905830727" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/40 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-400 transition-colors">
                    +880 1905-830727
                  </p>
                </a>
                <a href="tel:+8801796048427" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/40 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-400 transition-colors" />
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-green-400 transition-colors">
                    +880 1796-048427
                  </p>
                </a>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  </span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Uttara, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-xs flex items-center gap-1.5 flex-wrap justify-center">
              © {new Date().getFullYear()} Mafikul Islam
            </p>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200"
            >
              <span>Back to top</span>
              <span className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800/60 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center group-hover:border-purple-500/40 group-hover:-translate-y-0.5 transition-all duration-300">
                <ArrowUp className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
