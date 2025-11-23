// app/page.tsx

import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection'; 
import ProjectsSection from '@/components/ProjectsSection'; 
// FIX: Mengimpor AboutMeSection yang baru dan benar dari components
import AboutMeSection from '@/components/AboutMeSection'; 

export default function Home() {
  return (
    <> 
      <HeroSection />
      
      {/* 1. About Me Section (Posisi Kedua) */}
      <AboutMeSection /> 
      
      {/* 2. Services Section */}
      <ServicesSection /> 
      
      {/* 3. Projects Section */}
      <ProjectsSection />
    </>
  );
}