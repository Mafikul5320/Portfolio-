import React, { useState } from 'react';
import { ExternalLink, Github, X, Code, Globe, Zap, AlertCircle, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [

    {
      id: 1,
      title: 'LibraryLoop – Smart Library Management System ',
      shortDescription: 'LibraryLoop is a full-stack online library platform with AI-powered summaries, personalized recommendations, and book borrowing/return management.',
      image: 'https://i.ibb.co.com/sdpds1db/image.png',
      tags: ['React', 'Firebase', 'Node.js', 'JWT', "Tailwind CSS", "Express.js"],
      category: ' Full-Stack',
      tech: ['React', 'Firebase', 'Node.js', 'JWT'],
      description: 'LibraryLoop is a full-stack web application designed for seamless library operations in educational institutions. Built with modern web technologies, the platform enables admins and users to manage books, track borrow/return activity, and explore categorized book collections efficiently. With a clean and responsive UI, JWT-secured routes, and animated user experience, LibraryLoop brings library management into the digital era.',
      liveUrl: 'https://assignment-11-8f2e3.web.app',
      githubUrl: 'https://github.com/Mafikul5320/LibraryLoop-Client',
      challenges: [
        'Implementing real-time video calling functionality',
        'Building a robust scheduling system',
        'Creating an interactive whiteboard feature',
        'Handling different time zones for global users'
      ],
      improvements: [
        'Add AI-powered tutor matching',
        'Implement group tutoring sessions',
        'Add mobile app for better accessibility',
        'Create assessment and quiz features'
      ]
    },
    {
      id: 2,
      title: 'NewsWeek – News & Articles Platform',
      shortDescription: "NewsWeek is a full-stack news platform with article publishing, premium subscriptions, role-based access, and admin analytics dashboards.",
      image: 'https://i.ibb.co.com/d0jntyg6/Screenshot-2025-08-25-202532.png',
      tags: ["React.js", "Tailwind CSS", "React-Select", "React-Google-Charts", "Swiper.js", "Node.js", "Express.js", "MongoDB", "JWT Authenticatio"],
      category: ' Full-Stack',
      tech: ["React.js", "Tailwind CSS", "React-Select", "React-Google-Charts", "Swiper.js", "Node.js", "Express.js", "MongoDB", "JWT Authenticatio"],
      description: 'A modern full-stack digital newspaper platform built with React, Node.js, Express, MongoDB, and Firebase. The project offers role-based access, premium content, article management, and subscription features to create a professional online news experience.',
      liveUrl: 'https://newsweek-pro.web.app',
      githubUrl: 'https://github.com/Mafikul5320/NewsWeek-Client',
      challenges: [
        'Role-based Authentication – Managing access for Admin, Editors, and Subscribers',
        'Premium Content Restriction – Securely showing premium articles only to paid users',
        'Article Approval Workflow – Ensuring only approved articles go live',
        'Performance Optimization – Handling large datasets and fast article search',
        'Responsive UI – Making sure the news portal works seamlessly across all devices'
      ],
      improvements: [
        'Advanced Analytics – Add detailed readership and engagement statistics for Admin',
        'AI-powered Recommendations – Suggest articles based on reader interests',
        'Live News Updates – Auto-refresh for breaking news without page reload',
        'Comment & Discussion System – Allow readers to comment and interact',
        'Push Notifications – Notify users of trending and breaking news instantly'
      ]
    },
    {
      id: 3,
      title: 'BookClub – A Social Platform for Hobby-Based Communities',
      shortDescription: 'BookClub is a hobby-based social platform where users can create, join, and manage interest-driven community groups.',
      image: 'https://i.ibb.co/JRynpyxz/Screenshot-2025-06-30-004435.jpg',
      tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB',],
      category: ' Full-Stack',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      description: 'BookClub is a full-stack web application built for hobbyists and enthusiasts to connect, discover, and create local interest-based groups such as book clubs, art circles, or hiking teams. This project encourages meaningful community engagement around shared passions through a modern, responsive, and secure platform.',
      liveUrl: 'https://assignment-10-6f52b.web.app',
      githubUrl: 'https://github.com/Mafikul5320/BookClub-Client',
      challenges: [
        ' Preventing Duplicate Book Borrowing',
        ' Real-Time Quantity Management',
        'Dynamic Toggle & Filter System',
        ' Implementing JWT with Firebase Auth'
      ],
      improvements: [
        'Admin Roles & Permissions – Add role-based access for better permission control.',
        ' Email Reminders – Notify users about upcoming return deadlines.',
        ' Discussion Board – Allow readers to discuss books or reviews.',
        ' Email Notifications &  User Profile Customization'
      ]
    },
    {
      id: 4,
      title: 'SwiftShop – Modern E-commerce Platform',
      shortDescription: 'SwiftShop is a full-stack e-commerce platform featuring product management, secure authentication, cart & checkout system, and admin dashboard with analytics.',
      image: 'https://i.ibb.co.com/rGgRStXZ/Screenshot-2025-09-06-155642.png',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Express.js'],
      category: 'Full-Stack',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
      description: 'SwiftShop is a complete e-commerce solution where users can browse products, add items to cart, and securely checkout. It includes an admin dashboard for managing products, orders, and users.JWT Authentication and protected routes, while MongoDB ensures scalable product and order storage. With a clean UI and responsive design, SwiftShop provides a smooth online shopping experience.',
      liveUrl: 'https://swiftshop-client.web.app',
      githubUrl: 'https://github.com/Mafikul5320/SwiftShop-Client',
      challenges: [
        'Building a secure cart and checkout flow',
        'Integrating JWT authentication ',
        'Handling product CRUD operations with admin privileges',
        'Managing real-time stock updates and order tracking'
      ],
      improvements: [
        'Add AI-powered product recommendations',
        'Implement multiple payment gateway options',
        'Introduce wishlist & product review features',
        'Add sales analytics with charts and insights'
      ]
    }

    // {
    //   id: 3,
    //   title: 'FrostBox',
    //   shortDescription: 'Digital FrostBox with advanced search and recommendations',
    //   image: 'https://i.ibb.co/bgmC69vZ/Screenshot-2025-06-30-013437.jpg',
    //   tags: ['React', ],
    //   category: 'FontEnd',
    //   tech: ['React', 'Node.js'],
    //   description: 'A comprehensive online bookstore featuring advanced search capabilities, personalized recommendations, user reviews, wishlist functionality, and secure checkout process. Includes both physical and digital book sales.',
    //   liveUrl: 'https://assigment-9-eb6e9.web.app',
    //   githubUrl: 'https://github.com/Mafikul5320/Pool-Cleaning-Solutions',
    //   challenges: [
    //     'Implementing advanced search with filters',
    //     'Building recommendation algorithm',
    //     'Managing large book database efficiently',
    //     'Handling both digital and physical book orders'
    //   ],
    //   improvements: [
    //     'Add social reading features',
    //     'Implement book preview functionality',
    //     'Create reading progress tracking',
    //     'Add author profiles and events'
    //   ]
    // }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full border border-gray-200 dark:border-gray-700">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-80 object-cover rounded-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-purple-500" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <a target='_blank'
                  href={project.liveUrl}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Globe className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                Challenges Faced
              </h4>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                Future Improvements
              </h4>
              <ul className="space-y-2">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {improvement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100/50 dark:bg-gray-800/30 relative">
      <div className="w-11/12 mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-purple-200/50 dark:border-purple-500/30">
            <Code className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">My Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Explore my highlighted projects showcasing my latest work
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 shadow-lg h-full flex flex-col"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons (always at bottom) */}
                <div className="flex space-x-3 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm"
                  >
                    View Details
                  </button>
                  <a
                    href={project.githubUrl}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white p-2 rounded-lg transition-all duration-200"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    target="_blank"
                    href={project.liveUrl}
                    className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white p-2 rounded-lg transition-all duration-200"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;