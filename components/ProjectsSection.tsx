// components/ProjectsSection.tsx
'use client'; 
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

// FIX: Menggunakan alias root @/ dan ekstensi .ts
import { projectsData, Project } from '@/data/projects'; 

// FIX: Memberikan tipe eksplisit pada 'project'
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-500 border border-gray-100">
      
      {/* Project Image Container */}
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title}
          fill={true} // FIX: Mengganti legacy prop layout
          className="transition duration-500 hover:opacity-90 object-cover" // FIX: Mengganti legacy prop objectFit
          priority
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* FIX: Memberikan tipe eksplisit pada 'tech' */}
          {project.technologies.map((tech: string) => ( 
            <span 
              key={tech} 
              className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 pt-2">
          <a 
            href={project.link} 
            target="_blank" 
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition duration-300 font-semibold text-sm"
          >
            <Github className="h-4 w-4" />
            <span>GitHub / Live App</span>
          </a>
          <Link 
            href={`/case-studies/${project.id}`}
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition duration-300 font-semibold text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Case Study</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Main Projects Section Component
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 font-sans">
            Featured Case Studies
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            These projects validate my market value, combining Full-Stack development with Data Analysis, demonstrating scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/case-studies"
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition duration-300 border border-gray-200"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;