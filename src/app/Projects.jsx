'use client'

import React, { useState, useEffect } from 'react';

// Custom CSS styles as a component
const AnimationStyles = () => {
  return (
    <style jsx global>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.7s ease-out forwards;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
      
      .animate-pulse {
        animation: pulse 2s infinite;
      }
    `}</style>
  );
};

const Projects = () => {
  // Sample project data
  const projectsData = [
    {
      id: 1,
      name: "Car Keys M25 Clone",
      techStack: ["HTML", "CSS","JS","Bootstrap"],
      preview: "https://carkeysm25.netlify.app/",
      image: "/assets/imgs/carkeysm25.webp",
      type: "web"
    },
    {
      id:2,
      name: "Financial Calculator",
      techStack: ["React", "HTML", "CSS","JS","Tailwindcss"],
      preview: "https://calcunomics.netlify.app/",
      image: "/assets/imgs/moneyinn.webp",
      type: "web"
    },
    {
      id: 3,
      name: "Silva Cases Clone",
      techStack: ["React", "Bootstrap"],
      preview: "https://silvacases.netlify.app/",
      image: "/assets/imgs/silvacases.webp",
      type: "web"
    },
    {
      id: 4,
      name: "Meditation App",
      techStack: ["React native", "React"],
      preview: "https://play.google.com/store/apps/details?id=com.silvamethod&hl=en_IN",
      image: "/assets/imgs/silvaapp.webp",
      type: "app"
    },
  ];

  // States for animation and filtering
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  // Initialize with animation
  useEffect(() => {
    setFilteredProjects(projectsData);
    setTimeout(() => setInitialLoad(false), 100);
  }, []);

  // Handle filter change with staggered animations
  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    
    setIsFiltering(true);
    setActiveFilter(filter);
    
    setTimeout(() => {
      if (filter === 'all') {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(project => project.type === filter));
      }
      setTimeout(() => setIsFiltering(false), 100);
    }, 400);
  };

  return (
    <div className="container mx-auto p-8 md:p-12 py-5">
      {/* Include the CSS animations */}
      <AnimationStyles />
      
      <div className="max-w-6xl mx-auto">
        {/* Animated heading with underline effect */}
        <div className="relative mb-4 text-center">
        <p className='text-red-500'>My Projects</p>
        <p className="text-4xl font-bold">Works So far...</p>
        </div>
        
        
        {/* Animated Filter Buttons */}
        <div className="flex justify-center space-x-6 mb-16" id='projects'>
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-3 py-2 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 relative overflow-hidden shadow-md ${
              activeFilter === 'all' 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700'
            }`}
          >
            <span className="relative z-10 cursor-pointer">All Projects</span>
            {activeFilter === 'all' && (
              <span className="absolute inset-0 bg-red-500 transform scale-x-0 origin-left transition-transform duration-500 animate-pulse"></span>
            )}
          </button>
          
          <button
            onClick={() => handleFilterChange('web')}
            className={`px-3 py-2 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 relative overflow-hidden shadow-md ${
              activeFilter === 'web' 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700'
            }`}
          >
            <span className="relative z-10 cursor-pointer">Web</span>
            {activeFilter === 'web' && (
              <span className="absolute inset-0 bg-red-500 transform scale-x-0 origin-left transition-transform duration-500 animate-pulse"></span>
            )}
          </button>
          
          <button
            onClick={() => handleFilterChange('app')}
            className={`px-3 py-2 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-1 relative overflow-hidden shadow-md ${
              activeFilter === 'app' 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700'
            }`}
          >
            <span className="relative z-10 cursor-pointer">App</span>
            {activeFilter === 'app' && (
              <span className="absolute inset-0 bg-red-500 transform scale-x-0 origin-left transition-transform duration-500 animate-pulse"></span>
            )}
          </button>
        </div>
        
        {/* Projects Grid with enhanced animations */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
          isFiltering ? 'opacity-0 scale-95' : initialLoad ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-[#ffffff17] rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform 
                ${hoveredId === project.id ? 'scale-105 -translate-y-2 rotate-1 shadow-xl z-10' : 'scale-100 translate-y-0 rotate-0'} 
                ${initialLoad ? '' : 'animate-fadeIn'}`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: isFiltering ? '0ms' : `${index * 50}ms`
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 filter group-hover:brightness-75"
                />
                
                {/* Animated overlay with gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Animated button with bounce */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                  <a 
                    href={project.preview} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-red-500 text-white rounded-md shadow-lg transform transition-all duration-500 hover:scale-110 hover:bg-red-700 hover:shadow-xl"
                  >
                    View Project
                  </a>
                </div>
                
                {/* Animated type badge */}
                <div className="absolute top-3 right-3 bg-gray-900 text-white px-3 py-1 rounded-full text-sm shadow-lg transform transition-all duration-500 rotate-3 hover:rotate-0 hover:scale-110">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6">
                {/* Animated project title */}
                <h3 className="text-2xl font-bold mb-3 transition-all duration-300 group-hover:text-red-600 transform group-hover:translate-x-1">
                  {project.name}
                </h3>
                
                {/* Animated tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full transition-all duration-300 hover:bg-red-100 hover:text-red-700 hover:scale-110 transform hover:-rotate-3"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state with animation */}
        {filteredProjects.length === 0 && !isFiltering && (
          <div className="text-center py-16 transition-all duration-500 animate-pulse">
            <p className="text-gray-500 text-xl">No projects found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;