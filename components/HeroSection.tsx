// components/HeroSection.tsx
'use client'; 
import React from 'react'; 
import Link from 'next/link';
import Image from 'next/image'; 
import { TrendingUp, Database, Code, Zap } from 'lucide-react'; 
import { motion } from 'framer-motion';

const HeroSection = () => {
  const name = "Apriliano Ernando Benyamin Boimau";
  const role = "Full-Stack System Developer | Data Analyst";
  const shortBio = "A specialist in Full-Stack Information System Development (PHP/MySQL) backed by Comprehensive Data Analysis capabilities. I deliver efficient, analytical, and high-value technology solutions.";

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, 
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.3 } }, 
  };

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-40 bg-linear-to-br from-white to-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        <motion.div 
          className="md:w-3/5 text-center md:text-left mb-10 md:mb-0 z-10"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          
          <p className="text-xl text-indigo-700 font-medium mb-4 flex items-center justify-center md:justify-start">
            <Zap className="h-5 w-5 mr-2" />
            {role}
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 font-geist-sans">
            I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">Apriliano Boimau</span>, 
            <br className="hidden md:inline"/> The Developer Who <br className="hidden md:inline"/> Analyzes Data.
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0">
            {shortBio}
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
            <span className="flex items-center text-sm font-semibold text-white bg-indigo-600 px-3 py-1 rounded-full shadow-md"><Code className="h-4 w-4 mr-1"/> Full-Stack Dev (PHP)</span>
            <span className="flex items-center text-sm font-semibold text-gray-800 bg-yellow-300 px-3 py-1 rounded-full shadow-md"><Database className="h-4 w-4 mr-1"/> Data Modeling (MySQL)</span>
            <span className="flex items-center text-sm font-semibold text-gray-800 bg-green-200 px-3 py-1 rounded-full shadow-md"><TrendingUp className="h-4 w-4 mr-1"/> Data Analysis</span>
          </div>

          <div className="flex justify-center md:justify-start space-x-4">
            <Link 
              href="/case-studies" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              View Data-Driven Solutions 🚀
            </Link>
            <Link 
              href="/contact" 
              className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Start a Consultation
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="md:w-2/5 flex justify-center md:justify-end relative z-10"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative rounded-full overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition duration-500 ease-in-out">
            <Image 
              src="/profile-image.jpg" 
              alt={`Profile Picture of ${name}`}
              fill={true} // FIX: Mengganti legacy prop layout
              className="object-cover" // FIX: Mengganti legacy prop objectFit
              priority 
            />
          </div>
        </motion.div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-52 h-52 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;