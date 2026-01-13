import React from 'react';
import HeroSection from './HeroSection';
import MobileHeroSection from './MobileHeroSection';
import WhatIDoSection from './WhatIDoSection';
import FeaturedToolsSection from './FeaturedToolsSection';
import LatestContentSection from './LatestContentSection';
import GetInTouchSection from './GetInTouchSection';
import SEO from './SEO';

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