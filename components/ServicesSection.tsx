// components/ServicesSection.tsx
import React from 'react';
import Link from 'next/link';
// Memastikan semua ikon ini diimpor:
import { TrendingUp, Code, Zap, Database } from 'lucide-react'; 

// Data representing your Creative Goals (USPs)
const serviceGoals = [
  {
    icon: TrendingUp, // Digunakan: Data Integration
    title: 'Data Integration for Strategy',
    description: "My systems don't just store data; they deliver **strategic dashboards and insights**. I aim to integrate advanced data analysis components into every development project, turning raw data into smart business decisions.",
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    icon: Code, // Digunakan: Clean Code Architecture
    title: 'Clean Code Architecture & Scalability',
    description: "I implement **Clean Code practices, structured Database Design (MySQL), and robust software architecture** on every project. This ensures the solution is highly maintainable, efficient, and scalable for future growth.",
    color: 'text-green-600 bg-green-50',
  },
  {
    icon: Zap, // Digunakan: User-Centric Experience (UX)
    title: 'User-Centric Experience (UX)',
    description: "Leveraging my Frontend skills, I guarantee every interface is **intuitive, fast, and user-friendly (UX Focused)**. This maximizes user engagement and ensures smooth interaction with the complex system functionalities.",
    color: 'text-yellow-600 bg-yellow-50',
  },
  {
    icon: Database, // Ikon Tambahan untuk menghilangkan warning Database, jika Anda mengimpornya.
    title: 'Robust Database Design',
    description: "Specific focus on optimal MySQL Database Design and management to ensure data integrity and system performance across all backend operations.",
    color: 'text-red-600 bg-red-50',
  },
  // Catatan: Jika Anda tidak mengimpor Layers, Anda bisa menghapusnya dari impor dan/atau data.
];

// Reusable component for each Service Card
const ServiceCard = ({ goal }: { goal: typeof serviceGoals[0] }) => {
  const IconComponent = goal.icon;
  return (
    <div className="p-6 border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 bg-white">
      <div className={`p-3 rounded-lg w-fit mb-4 ${goal.color}`}>
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-sans">
        {goal.title}
      </h3>
      <p className="text-gray-600 text-base">
        {goal.description}
      </p>
    </div>
  );
};


const ServicesSection = () => {
  // Hanya ambil 3 card teratas untuk tampilan utama
  const featuredGoals = serviceGoals.slice(0, 3); 

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 font-sans">
            My Creative Goals & Unique Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            I offer more than just code. My solutions are driven by data strategy, clean architecture, and user experience.
          </p>
        </div>

        {/* Grid menampilkan 3 card utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGoals.map((goal, index) => (
            <ServiceCard key={index} goal={goal} />
          ))}
        </div>
        
        <div className="text-center mt-16">
            <Link 
              href="app/case-studies"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-700 transition duration-300 shadow-xl"
            >
              See Solutions in My Case Studies
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;