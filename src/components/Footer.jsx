import React from 'react';
import {
  Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram, X
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white py-12 px-4 md:px-16 font-mono">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm">

        {/* Profile Section */}
        <div>
          <h2 className="text-lg font-bold text-purple-500">Md Mafikul islam</h2>
          <p className="text-xs mt-1">MERN Stack Developer</p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            I am a passionate developer creating innovative web solutions with modern technologies.
            Let’s build something amazing together!
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#"><Linkedin className="w-5 h-5 text-blue-500 hover:scale-110" /></a>
            <a href="#"><Github className="w-5 h-5 hover:scale-110" /></a>
            <a href="#"><Facebook className="w-5 h-5 text-blue-600 hover:scale-110" /></a>
            <a href="#"><Instagram className="w-5 h-5 text-red-500 hover:scale-110" /></a>
            <a href="#"><X className="w-5 h-5 hover:scale-110" /></a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>➤ Web Development</li>
            <li>➤ Frontend Development</li>
            <li>➤ Backend Development</li>
            <li>➤ Full Stack Development</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        {/* <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>➤ Home</li>
            <li>➤ Projects</li>
            <li>➤ Blogs</li>
            <li>➤ Contact</li>
            <li>➤ Dashboard</li>
          </ul>
        </div> */}

        {/* Contact Section */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <div className="space-y-3 text-gray-300 text-sm">
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> mdmafikulislam5320@gmail.com</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +880 1905-830727</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +880 1796-048427</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Uttra, Dhaka, Bangladesh</p>
          </div>
          <div className="mt-4 flex items-center bg-gray-800 px-2 py-1 rounded">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white text-sm flex-1 outline-none"
            />
            <button className="bg-purple-500 hover:bg-purple-600 p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                <path d="M1 8h14M9 3l6 5-6 5" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
        © 2025 MD MAFIKUL ISLAM. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
