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

const IntroText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 40px;
  text-align: center;

  ${media.tablet} {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }

  ${media.mobile} {
    font-size: 1rem;
    margin-bottom: 25px;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  ${media.mobile} {
    gap: 12px;
  }
`;

const ActivityCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03));
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 15px;
  padding: 25px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateX(10px);
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08));
    border-color: rgba(102, 126, 234, 0.2);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 0 2px 2px 0;
  }

  ${media.tablet} {
    padding: 20px;
  }

  ${media.mobile} {
    padding: 18px;
    border-radius: 12px;
  }
`;

const ActivityIcon = styled.div`
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 1rem;

  ${media.mobile} {
    width: 30px;
    height: 30px;
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

const ActivityText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
  font-weight: 500;

  ${media.tablet} {
    font-size: 1rem;
  }

  ${media.mobile} {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

interface OutsideRoadmapSectionProps {
  variants: any;
}

const OutsideRoadmapSection: React.FC<OutsideRoadmapSectionProps> = ({ variants }) => {
  const activities = [
    {
      text: "Geeking out on game design and behavioral psychology",
      icon: "🎮"
    },
    {
      text: "Reading business case studies and weird internet rabbit holes",
      icon: "📚"
    },
    {
      text: "Mentoring junior PMs to think bigger, ship sooner, and own their process",
      icon: "🎯"
    },
    {
      text: "Trying out every new tool that merges code, creativity, and speed",
      icon: "🛠️"
    }
  ];

  return (
    <Section variants={variants}>
      <SectionTitle variants={variants}>Outside the Roadmap</SectionTitle>
      <IntroText variants={variants}>
        When I'm not deep in a sprint or obsessing over product velocity, you'll probably find me:
      </IntroText>
      <ActivitiesGrid>
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            variants={variants}
            whileHover={{
              x: 10,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <ActivityIcon>{activity.icon}</ActivityIcon>
            <ActivityText>{activity.text}</ActivityText>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
    </Section>
  );
};

export default OutsideRoadmapSection; 