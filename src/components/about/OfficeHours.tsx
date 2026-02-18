import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const OfficeHoursSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 80px 20px;
  border-radius: 20px;
  margin: 60px 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const ContentArea = styled.div`
  color: white;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: #a8b3ff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
  opacity: 0.9;
  max-width: 500px;
`;

const HighlightText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 15px;
  font-weight: 600;
`;

const SimpleText = styled.p`
  font-size: 1rem;
  margin-bottom: 30px;
  opacity: 0.8;
`;

const CTAButton = styled(motion.button)`
  background: #4f46e5;
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3730a3;
    transform: translateY(-2px);
  }
`;

const ItalicText = styled.p`
  font-style: italic;
  margin-top: 30px;
  opacity: 0.8;
  font-size: 1rem;
`;

const IllustrationArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const FloatingElement = styled(motion.div)<{ delay: number }>`
  position: absolute;
  opacity: 0.7;
`;

const PersonIllustration = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  &::before {
    content: '👨‍💻';
    font-size: 4rem;
  }
`;

const ChatBubble = styled(motion.div)`
  background: #4f46e5;
  color: white;
  padding: 12px 16px;
  border-radius: 20px;
  position: relative;
  max-width: 150px;
  font-size: 0.9rem;
  line-height: 1.4;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 20px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #4f46e5;
  }
`;

const TechIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
`;

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const OfficeHours: React.FC = () => {
  return (
    <OfficeHoursSection>
      <Container>
        <ContentArea>
          <Title>Office Hours</Title>
          <Subtitle>Stuck on your product idea? Let's fix that.</Subtitle>
          
          <Description>
            Whether you need help validating a concept, mapping your MVP, or launching without code, I'll help you cut through the noise and get moving.
          </Description>
          
          <HighlightText>
            I've guided <strong>50+ projects</strong> from idea to execution.
          </HighlightText>
          
          <SimpleText>
            You don't need a perfect plan. Just a starting point.
          </SimpleText>
          
          <CTAButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('mailto:hello@kushalparameshwara.com?subject=Office Hours - Product Strategy Session', '_blank')}
          >
            Send me an email
          </CTAButton>
          
          <ItalicText>
            let's make your product real.
          </ItalicText>
        </ContentArea>
        
        <IllustrationArea>
          <PersonIllustration />
          
          <FloatingElement 
            delay={0}
            style={{ top: '20px', right: '40px' }}
            animate={floatingAnimation}
          >
            <ChatBubble>
              Strategy & Growth
            </ChatBubble>
          </FloatingElement>
          
          <FloatingElement 
            delay={1}
            style={{ bottom: '60px', left: '20px' }}
            animate={floatingAnimation}
          >
            <TechIcon>💡</TechIcon>
          </FloatingElement>
          
          <FloatingElement 
            delay={2}
            style={{ top: '80px', left: '60px' }}
            animate={floatingAnimation}
          >
            <TechIcon>🚀</TechIcon>
          </FloatingElement>
          
          <FloatingElement 
            delay={0.5}
            style={{ bottom: '20px', right: '80px' }}
            animate={floatingAnimation}
          >
            <TechIcon>📊</TechIcon>
          </FloatingElement>
          
          <FloatingElement 
            delay={1.5}
            style={{ top: '140px', right: '120px' }}
            animate={floatingAnimation}
          >
            <ChatBubble>
              AI & Automation
            </ChatBubble>
          </FloatingElement>
        </IllustrationArea>
      </Container>
    </OfficeHoursSection>
  );
};

export default OfficeHours; 