import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Education from './components/Education';
import EmergencyContact from './components/EmergencyContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Certifications />
      <Education />
      <EmergencyContact />
      <Footer />
    </div>
  );
}