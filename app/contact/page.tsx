// app/contact/page.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact | Apriliano Boimau',
  description: 'Contact Apriliano Boimau for Full-Stack project and Data Analysis consultation.',
};

// DATA KONTAK UTAMA (GANTI DENGAN DATA ASLI ANDA)
const CONTACT_INFO = {
    email: "apriliano23@students.amikom.ac.id",
    phone_wa: "+62 8133 9656 799",
    location: "Sleman, Yogyakarta"
};

// FIX: Nama komponen dan export default harus konsisten (ContactPage)
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 font-sans">
          Start Collaborating
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          I`m ready to turn data into smart business decisions. Lets discuss your project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          
          {/* Kolom Kiri: Formulir Kontak */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Direct Messages</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Project Details</label>
                <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" required></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              >
              Send
              </button>
              <p className="text-xs text-center text-gray-500 pt-2">
                *Formulir ini masih dummy dan memerlukan konfigurasi Backend
              </p>
            </form>
          </div>

          {/* Kolom Kanan: Info Kontak */}
          <div className="space-y-6 md:space-y-8 p-8 md:p-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 hidden md:block">Other Contact Information</h2>
            
            {/* Kartu Email */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
              <Mail className="h-6 w-6 text-indigo-600 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">{CONTACT_INFO.email}</p>
                
              </div>
            </div>
            
            {/* Kartu Telepon */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
              <Phone className="h-6 w-6 text-indigo-600 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Call/WhatsApp</h3>
                <p className="text-gray-600">{CONTACT_INFO.phone_wa}</p>
              </div>
            </div>
            
            {/* Kartu Lokasi */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg border border-gray-100">
              <MapPin className="h-6 w-6 text-indigo-600 shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">{CONTACT_INFO.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
             <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

// FIX: Export default harus sesuai dengan nama komponen di atas
export default ContactPage;