import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import ParticleNetworkBackground from '../components/ParticleNetworkBackground';

export const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col relative overflow-x-hidden">
      {/* Concept 2: Tech Network & Connected Particles animated background */}
      <ParticleNetworkBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenContact={() => setModalOpen(true)} />

        <main className="flex-grow pt-20">
          <HeroSection onOpenContact={() => setModalOpen(true)} />
          <ServicesSection />
          <ProjectsSection />
          <ProcessSection />
          <ContactSection />
          <CtaSection onOpenContact={() => setModalOpen(true)} />
        </main>

        <Footer />
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HomePage;
