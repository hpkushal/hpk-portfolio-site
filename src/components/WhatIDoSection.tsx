import React from 'react';
import styled from 'styled-components';
import { FaCogs, FaCode, FaChartBar, FaRocket, FaUsers, FaPaintBrush } from 'react-icons/fa';
import { media } from '../styles/GlobalStyles';

const WhatIDoContainer = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }

  ${media.tablet} {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: left;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  ${media.tablet} {
    font-size: 2.2rem;
  }

  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 550px;
  margin: 0;
  line-height: 1.5;

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 25px 20px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

    &::before {
      transform: scaleX(1);
    }
  }

  ${media.tablet} {
    padding: 20px 18px;
  }

  ${media.mobile} {
    padding: 18px 15px;
  }
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  i {
    font-size: 24px;
    color: white;
  }

  ${media.mobile} {
    width: 45px;
    height: 45px;

    i {
      font-size: 20px;
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
`;

const WhatIDoFooter = styled.div`
  text-align: center;
  margin-top: 50px;

  ${media.tablet} {
    margin-top: 40px;
  }
`;

const StuckLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 25px;
  background: rgba(102, 126, 234, 0.05);
  border: 2px solid rgba(102, 126, 234, 0.1);

  &::after {
    content: '→';
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #764ba2;
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);

    &::after {
      transform: translateX(4px);
    }
  }

  ${media.tablet} {
    font-size: 1.1rem;
    padding: 12px 25px;
  }

  ${media.mobile} {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const FloatingShape = styled.div<{ className: string }>`
  position: absolute;
  pointer-events: none;
  opacity: 0.08;

  &.shape-1 {
    top: 15%;
    left: 8%;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    animation: floatShape1 8s ease-in-out infinite;
  }

  &.shape-2 {
    top: 25%;
    right: 12%;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: rotate(45deg);
    animation: floatShape2 6s ease-in-out infinite;
  }

  &.shape-3 {
    bottom: 20%;
    left: 12%;
    width: 35px;
    height: 35px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: floatShape3 7s ease-in-out infinite;
  }

  @keyframes floatShape1 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  @keyframes floatShape2 {
    0%, 100% { transform: translateY(0px) rotate(45deg); }
    50% { transform: translateY(-15px) rotate(225deg); }
  }

  @keyframes floatShape3 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(120deg); }
  }
`;

const services = [
  {
    icon: FaCogs,
    title: 'Product Management',
    description: 'I combine business, tech, and design in order to discover products that are valuable, feasible, and usable.',
  },
  {
    icon: FaCode,
    title: 'No Code',
    description: 'I specialise in creating digital products and businesses without code in a fraction of the time and cost compared to traditional methods.',
  },
  {
    icon: FaChartBar,
    title: 'Product Strategy',
    description: 'I help teams and founders create and maintain a clear and defined product and go to market strategy.',
  },
  {
    icon: FaRocket,
    title: 'MVPs',
    description: 'I create lean, highly effective MVP experiments. Testing with real people against actual problems.',
  },
  {
    icon: FaUsers,
    title: 'Customer Development',
    description: 'I help identify the right problems to solve so that you build something that your customers will love.',
  },
  {
    icon: FaPaintBrush,
    title: 'Website Design',
    description: 'I create stunning websites using Webflow. Using my background in UX to create a user centric site that converts.',
  },
];

const WhatIDoSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <WhatIDoContainer id="what-i-do">
      <FloatingShape className="shape-1" />
      <FloatingShape className="shape-2" />
      <FloatingShape className="shape-3" />

      <Container>
        <SectionHeader>
          <SectionTitle>What I Do</SectionTitle>
          <SectionSubtitle>
            I help teams go from idea to product–market fit with speed and precision.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ServiceCard key={index}>
                <ServiceIcon>
                  <IconComponent />
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            );
          })}
        </ServicesGrid>

        <WhatIDoFooter>
          <StuckLink 
            href="#get-in-touch"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('get-in-touch');
            }}
          >
            Stuck on your product idea?
          </StuckLink>
        </WhatIDoFooter>
      </Container>
    </WhatIDoContainer>
  );
};

export default WhatIDoSection; 