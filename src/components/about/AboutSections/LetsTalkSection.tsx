import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { media } from '../../../styles/GlobalStyles';

const Section = styled(motion.section)`
  margin-bottom: 0;
`;

const ContactContainer = styled(motion.div)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.03) 0%, transparent 70%);
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  ${media.tablet} {
    padding: 50px 35px;
    border-radius: 25px;
  }

  ${media.mobile} {
    padding: 40px 25px;
    border-radius: 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;

  ${media.tablet} {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  ${media.mobile} {
    font-size: 1.8rem;
    margin-bottom: 18px;
  }
`;

const ContactText = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;

  ${media.tablet} {
    font-size: 1.2rem;
    margin-bottom: 35px;
  }

  ${media.mobile} {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 18px 40px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    background: linear-gradient(135deg, #5a6fd8, #6a4190);
  }

  &::before {
    content: '💬';
    margin-right: 10px;
    font-size: 1.2rem;
  }

  ${media.tablet} {
    padding: 15px 35px;
    font-size: 1rem;
  }

  ${media.mobile} {
    padding: 12px 30px;
    font-size: 0.95rem;
    
    &::before {
      font-size: 1.1rem;
      margin-right: 8px;
    }
  }
`;

const DecorativeElements = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  opacity: 0.3;
  z-index: 0;

  &::before {
    content: '🚀';
    position: absolute;
    top: 0;
    right: 0;
  }

  &::after {
    content: '✨';
    position: absolute;
    top: 40px;
    right: -20px;
    font-size: 1.5rem;
  }

  ${media.mobile} {
    top: 15px;
    right: 20px;
    font-size: 1.5rem;
    
    &::after {
      top: 30px;
      right: -15px;
      font-size: 1.2rem;
    }
  }
`;

interface LetsTalkSectionProps {
  variants: any;
}

const LetsTalkSection: React.FC<LetsTalkSectionProps> = ({ variants }) => {
  const scrollToContact = () => {
    // Navigate to home page and then scroll to contact section
    window.location.href = '/#get-in-touch';
  };

  return (
    <Section variants={variants}>
      <ContactContainer
        variants={variants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <DecorativeElements />
        <SectionTitle variants={variants}>Let's Talk</SectionTitle>
        <ContactText variants={variants}>
          If you're building something that blends tech, product, and momentum (or just want to riff on what AI means for the future of work) I'd love to connect.
        </ContactText>
        <ContactButton
          href="#get-in-touch"
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </ContactButton>
      </ContactContainer>
    </Section>
  );
};

export default LetsTalkSection; 