import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import LazyLottie from '../common/LazyLottie';
import { media } from '../../styles/GlobalStyles';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 20px 50px;
  background: #FFFFFF !important;
  background-color: #FFFFFF !important;

  ${media.mobile} {
    display: none;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const GradientOrb = styled.div<{ delay: number; size: number; top?: string; left?: string; right?: string; bottom?: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`;

const FloatingCode = styled.div<{ className: string }>`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: rgba(102, 126, 234, 0.4);
  pointer-events: none;
  z-index: 10;

  &.code-1 {
    top: 15%;
    left: 5%;
    font-size: 1.5rem;
    animation: floatCode1 8s ease-in-out infinite;
  }

  &.code-2 {
    top: 25%;
    right: 8%;
    font-size: 1.2rem;
    animation: floatCode2 6s ease-in-out infinite;
  }

  &.code-3 {
    bottom: 30%;
    left: 8%;
    font-size: 1.3rem;
    animation: floatCode3 7s ease-in-out infinite;
  }

  &.code-4 {
    bottom: 15%;
    right: 12%;
    font-size: 1.4rem;
    animation: floatCode4 9s ease-in-out infinite;
  }

  ${media.mobile} {
    font-size: 1rem !important;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: #333;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #333;

  ${media.tablet} {
    font-size: 2.5rem;
  }

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const TitleLine = styled.span`
  display: block;
`;

const Highlight = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #666;

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const AnimatedText = styled.span`
  display: inline;
  color: #667eea;
  font-weight: 600;
  position: relative;

  &::after {
    content: '|';
    color: #667eea;
    animation: blink-caret 1s step-end infinite;
    margin-left: 2px;
  }
`;

const Location = styled.span`
  color: #888;
  font-size: 1.1rem;
`;

const CTAButton = styled.button`
  background: #2A2A2A;
  border: none;
  color: white;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #000000;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LottieContainer = styled.div`
  position: relative;
  width: 550px;
  height: 550px;
  background: #FFFFFF !important;
  background-color: #FFFFFF !important;

  ${media.tablet} {
    width: 385px;
    height: 385px;
  }

  ${media.mobile} {
    width: 308px;
    height: 308px;
  }

  .dotlottie-player {
    width: 100% !important;
    height: 100% !important;
    background: #FFFFFF !important;
    background-color: #FFFFFF !important;
  }
`;

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => ['Strategy', 'Marketing', 'Delivery'], []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);

        if (currentCharIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);

        if (currentCharIndex === currentWord.length) {
          setIsDeleting(true);
          return setTimeout(() => { }, 1500);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, currentCharIndex, isDeleting, words]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <HeroBackground>
        <GradientOrb delay={0} size={300} top="10%" left="10%" />
        <GradientOrb delay={2} size={200} top="60%" right="15%" />
        <GradientOrb delay={4} size={250} bottom="20%" left="20%" />
      </HeroBackground>

      <FloatingCode className="code-1">{ }</FloatingCode>
      <FloatingCode className="code-2">&lt;/&gt;</FloatingCode>
      <FloatingCode className="code-3">( )</FloatingCode>
      <FloatingCode className="code-4">[ ]</FloatingCode>

      <HeroContent>
        <HeroText>
          <HeroTitle>
            <TitleLine>Hello.</TitleLine>
            <TitleLine>I'm <Highlight>Kushal</Highlight>.</TitleLine>
          </HeroTitle>
          <HeroSubtitle>
            With 6+ years of experience across Product <AnimatedText>{displayText}</AnimatedText>.<br />
            <Location>based in Nova Scotia, Canada</Location>
          </HeroSubtitle>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <CTAButton onClick={() => scrollToSection('what-i-do')}>
              What I do
            </CTAButton>
          </div>
        </HeroText>

        <HeroVisual>
          <LottieContainer>
            <LazyLottie
              src="https://lottie.host/fe3b9efa-3eb2-477b-adfc-953fcfb44e8c/GGN5kYmRPU.lottie"
              loop
              autoplay
              style={{
                width: '100%',
                height: '100%',
                background: '#FFFFFF'
              }}
            />
          </LottieContainer>
        </HeroVisual>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection; 