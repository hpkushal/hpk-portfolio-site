import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../../styles/GlobalStyles';

const Section = styled(motion.section)`
  margin-bottom: 80px;

  ${media.tablet} {
    margin-bottom: 60px;
  }

  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 30px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  ${media.tablet} {
    font-size: 2rem;
    margin-bottom: 25px;
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${media.mobile} {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const BeliefsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
  }

  ${media.mobile} {
    gap: 15px;
    margin-top: 25px;
  }
`;

const BeliefCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 20px;
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    opacity: 0.7;
  }

  ${media.tablet} {
    padding: 25px;
  }

  ${media.mobile} {
    padding: 20px;
    border-radius: 15px;
  }
`;

const BeliefText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
  margin: 0;
  font-weight: 500;

  ${media.tablet} {
    font-size: 1rem;
  }

  ${media.mobile} {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const BeliefIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.2rem;

  ${media.mobile} {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

interface WhatIBelieveSectionProps {
  variants: any;
}

const WhatIBelieveSection: React.FC<WhatIBelieveSectionProps> = ({ variants }) => {
  const beliefs = [
    {
      text: "AI won't replace builders, it will supercharge them.",
      icon: "🤖"
    },
    {
      text: "Speed is strategy. A rough idea launched fast > a perfect idea trapped in planning.",
      icon: "⚡"
    },
    {
      text: "Being technical makes you dangerous (in a good way). I use TypeScript, React, and modern tools to prototype alongside engineers.",
      icon: "⚔️"
    },
    {
      text: "Great teams talk like humans, not handoffs.",
      icon: "💬"
    }
  ];

  return (
    <Section variants={variants}>
      <SectionTitle variants={variants}>What I Believe</SectionTitle>
      <BeliefsGrid>
        {beliefs.map((belief, index) => (
          <BeliefCard
            key={index}
            variants={variants}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <BeliefIcon>{belief.icon}</BeliefIcon>
            <BeliefText>{belief.text}</BeliefText>
          </BeliefCard>
        ))}
      </BeliefsGrid>
    </Section>
  );
};

export default WhatIBelieveSection; 