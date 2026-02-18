import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MobileHeroSection from '../components/home/MobileHeroSection';
import WhatIDoSection from '../components/home/WhatIDoSection';
import FeaturedToolsSection from '../components/home/FeaturedToolsSection';
import LatestContentSection from '../components/home/LatestContentSection';
import GetInTouchSection from '../components/home/GetInTouchSection';
import SEO from '../components/common/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Kushal HP - Product Manager with 6+ years of experience in Product Strategy, Marketing, and Delivery. Based in Nova Scotia, Canada. Explore my portfolio, case studies, and AI-powered PM tools."
        url="/"
      />
      <HeroSection />
      <MobileHeroSection />
      <WhatIDoSection />
      <FeaturedToolsSection />
      <LatestContentSection />
      <GetInTouchSection />
    </>
  );
};

export default Home; 