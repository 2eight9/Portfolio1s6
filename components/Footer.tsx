// components/Footer.tsx
import { Github, Linkedin, Mail, Phone, Instagram } from 'lucide-react'; // Hanya mengimpor ikon

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = "Apriliano Ernando Benyamin Boimau";

  // DATA KONTAK UTAMA (PASTIKAN ANDA GANTI DENGAN DATA ASLI ANDA)
  const CONTACT_LINKS = {
    github: "https://github.com/2eight9",
    linkedin: "https://www.linkedin.com/in/2eight9/",
    instagram: "https://www.instagram.com/2eight9_d1?igsh=bDlyaXoxY3ByeTAx",
    whatsapp: "https://wa.me/6281339656799", 
    email: "apriliano23@students.amikom.ac.id" 
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Nama Website & Copyright */}
        <h3 className="text-xl font-bold mb-4">
          {'2eight9'}
        </h3>
        
        {/* Link Sosial Media & Kontak (Menggunakan tag <a> untuk link eksternal) */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* GitHub */}
          <a href={CONTACT_LINKS.github} target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-300" aria-label="GitHub Profile">
            <Github className="h-6 w-6" />
          </a>
          {/* LinkedIn */}
          <a href={CONTACT_LINKS.linkedin} target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-300" aria-label="LinkedIn Profile">
            <Linkedin className="h-6 w-6" />
          </a>
          {/* Instagram */}
          <a href={CONTACT_LINKS.instagram} target="_blank" className="text-gray-400 hover:text-indigo-400 transition duration-300" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </a>
          {/* WhatsApp */}
          <a href={CONTACT_LINKS.whatsapp} target="_blank" className="text-gray-400 hover:text-green-400 transition duration-300" aria-label="WhatsApp">
            <Phone className="h-6 w-6" />
          </a>
          {/* Email */}
          <a href={`mailto:${CONTACT_LINKS.email}`} className="text-gray-400 hover:text-red-400 transition duration-300" aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        {/* Informasi Copyright */}
        <p className="text-sm text-gray-400 mt-4">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
              </div>
    </footer>
  );
};
export default Footer;