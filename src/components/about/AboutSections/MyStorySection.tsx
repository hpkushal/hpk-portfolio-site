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

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  margin: 0;

  ${media.tablet} {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  ${media.mobile} {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const HighlightBox = styled(motion.div)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 20px;
  padding: 30px;
  position: relative;

  &::before {
    content: '🚀';
    position: absolute;
    top: 20px;
    right: 25px;
    font-size: 1.5rem;
    opacity: 0.7;
  }

  ${media.tablet} {
    padding: 25px;
  }

  ${media.mobile} {
    padding: 20px;
  }
`;

const HighlightTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 15px;

  ${media.tablet} {
    font-size: 1.3rem;
  }

  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const HighlightText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
  margin: 0;

  ${media.tablet} {
    font-size: 1rem;
  }

  ${media.mobile} {
    font-size: 0.95rem;
  }
`;

const QuestionBox = styled(motion.div)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 20px;
  padding: 30px;
  color: white;
  text-align: center;
  margin-top: 30px;

  ${media.tablet} {
    padding: 25px;
    margin-top: 25px;
  }

  ${media.mobile} {
    padding: 20px;
    margin-top: 20px;
  }
`;

const QuestionText = styled.p`
  font-size: 1.3rem;
  line-height: 1.6;
  font-style: italic;
  margin: 0;
  font-weight: 500;

  ${media.tablet} {
    font-size: 1.2rem;
  }

  ${media.mobile} {
    font-size: 1.1rem;
  }
`;

interface MyStorySectionProps {
  variants: any;
}

const MyStorySection: React.FC<MyStorySectionProps> = ({ variants }) => {
  return (
    <Section variants={variants}>
      <SectionTitle variants={variants}>My Story</SectionTitle>
      <StoryGrid>
        <StoryContent>
          <Paragraph variants={variants}>
            I've always been obsessed with systems: how they work, where they break, and what makes them scale. That mindset pulled me into product management, where I found a sweet spot: translating big vision into outcomes that ship.
          </Paragraph>
          <Paragraph variants={variants}>
            Today, I work as a <strong>Digital Product Strategist at Resulta</strong>, leading initiatives that blend AI, martech, and performance-driven product thinking. My focus? Helping teams go from "backlog" to "launched" with clarity and speed.
          </Paragraph>
        </StoryContent>

        <HighlightBox
          variants={variants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <HighlightTitle>My Philosophy</HighlightTitle>
          <HighlightText>
            I'm not just pushing pixels or writing specs. I'm passionate about empowering product teams to move fast, experiment often, and embrace tools that amplify their potential.
          </HighlightText>
        </HighlightBox>
      </StoryGrid>

      <QuestionBox
        variants={variants}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <QuestionText>
          If something's manual, repetitive, or slow, I'm asking:<br />
          "Can we automate this? Prototype it today? Make it better with AI?"
        </QuestionText>
      </QuestionBox>
    </Section>
  );
};

export default MyStorySection; 