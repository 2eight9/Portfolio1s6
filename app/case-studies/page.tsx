// app/case-studies/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
// Import data dan tipe ProjectCard dari components/ProjectsSection
import { projectsData, Project } from '@/data/projects'; 

export const metadata = {
  title: 'Case Studies | Apriliano Boimau',
  description: 'A comprehensive list of case studies and projects that combine full-stack development and data analysis.',
};

// Reusable Project Card Component (Dapat disalin dari ProjectsSection.tsx)
const CaseStudyCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-500 border border-gray-100">
      
      {/* Project Image Container */}
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title}
          fill={true} 
          className="transition duration-500 hover:opacity-90 object-cover" 
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
            <span>Project Link</span>
          </a>
          <Link 
            href={`/case-studies/${project.id}`}
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition duration-300 font-semibold text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            <span>see details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};


const CaseStudiesPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
                    All Projects & Case Studies
                </h1>
                <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
                   A comprehensive collection of projects that demonstrate my systems architecture and data analysis skills.
                </p>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectsData.map((project) => (
                        <CaseStudyCard key={project.id} project={project} />
                    ))}
                </div>
                
                <div className="text-center mt-16">
                    <Link 
                        href="/contact"
                        className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-xl"
                    >
                       Order My Solution
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CaseStudiesPage;