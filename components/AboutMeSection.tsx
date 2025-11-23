// components/AboutMeSection.tsx
import React from 'react';
import Link from 'next/link';
import { Briefcase, User, CheckCircle } from 'lucide-react'; 

const AboutMeSection = () => {
    // Your Concise Biography for the main block
    const biography = "I am Apriliano Ernando Benyamin Boimau, a Freelance Developer . I specialize in Full-Stack Information System Development, reinforced by Comprehensive Data Analysis capabilities. I excel at building systems from the ground up—from responsive Frontend design and robust Backend logic (PHP) to optimized Database architecture (MySQL). My distinct value is offering technology solutions that are complete, efficient, and possess high analytical value.";
    
    // Core Skills (Used in the Right Column)
    const keySkills = [
        "Full-Stack Development (PHP/MySQL)",
        "Data Analysis & Predictive Modeling",
        "Structured Database Design",
        "Clean Code & Scalable Architecture",
        "Frontend Development (UX/Tailwind)",
        "Information System Development",
    ];
    
    // Technology Stack (Used in the Left Column)
    const techStack = [
        { name: 'Backend & Database', items: ['PHP', 'Laravel', 'MySQL'] },
        { name: 'Frontend', items: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'] },
        { name: 'Data & Tools', items: ['Python', 'Pandas', 'Jupyter', 'Git/GitHub'] },
    ];

    // Adapted Gandalf Quote
    const motivationQuote = "The only crucial decision is how we optimize every clock cycle, every line of code, and every data point given to us.";
    const quoteSource = "Gandalf";

    return (
        <section id="about-me" className="py-16 md:py-24 bg-white"> 
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. MOTIVATIONAL QUOTE SECTION (Top Element) */}
                <div className="bg-indigo-50 p-6 rounded-xl shadow-inner mb-16 max-w-4xl mx-auto border-l-4 border-indigo-500">
                    <h3 className="text-xl font-serif italic text-gray-700 leading-relaxed">
                        &quot;{motivationQuote}&quot;
                    </h3>
                    <p className="text-sm font-semibold text-right text-gray-500 mt-2">— {quoteSource}</p>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
                    About Me
                </h1>
                <p className="text-xl text-indigo-600 mb-12 text-center max-w-3xl mx-auto font-medium">
                    A Full-Stack System Developer Reinforced by Comprehensive Data Analysis.
                </p>

                {/* 2. TWO-COLUMN CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    {/* Left Column (2/3): Biography & Tech Stack */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Biography Block */}
                        <div className="bg-gray-50 p-6 rounded-xl shadow-2xl border-l-4 border-indigo-600">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                                <User className="h-6 w-6 mr-3 text-indigo-600"/> Who I Am
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed indent-6 text-justify">
                                {biography}
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed indent-6 text-justify mt-4 font-semibold">
                                My vision is to bridge business needs with technology solutions that are not only functional but also data-driven, ensuring the systems I build have high analytical value and are ready for the future.
                            </p>
                        </div>

                        {/* Detail Tech Stack */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            {techStack.map((stack, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-100">
                                    <h4 className="text-md font-bold text-indigo-600 mb-2">{stack.name}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {stack.items.map((item, i) => (
                                            <span key={i} className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right Column (1/3): Core Skills Checklist */}
                    <div className="lg:col-span-1 p-6 bg-white rounded-xl shadow-2xl sticky top-20">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <Briefcase className="h-6 w-6 mr-2 text-green-600"/> Core Expertise
                        </h3>
                         <ul className="space-y-3">
                            {keySkills.map((skill, index) => (
                                <li key={index} className="flex items-start text-base text-gray-700">
                                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-2 mt-1 shrink-0" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-8">
                            <Link 
                                href="/case-studies" 
                                className="w-full inline-flex justify-center items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                            >
                                View Proof of Work →
                            </Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>
    );
};

export default AboutMeSection;

// Fix: Added a new line