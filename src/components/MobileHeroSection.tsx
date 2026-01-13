import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { media } from '../styles/GlobalStyles';

const MobileHeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 15px 30px;
  background: #FFFFFF;
  display: none;

  ${media.mobile} {
    display: flex;
  }
`;

const MobileHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 400px;
  gap: 30px;
`;

const MobileLottieContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .dotlottie-player {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }
  
  svg {
    max-width: 100%;
    max-height: 100%;
    width: auto !important;
    height: auto !important;
  }
`;

const MobileHeroText = styled.div`
  color: #333;
  width: 100%;
`;

const MobileHeroTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 15px;
  color: #333;
`;

const MobileTitleLine = styled.span`
  display: block;
`;

const MobileHighlight = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const MobileHeroSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 25px;
  line-height: 1.5;
  color: #666;
`;

const MobileAnimatedText = styled.span`
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

const MobileLocation = styled.span`
  color: #888;
  font-size: 0.95rem;
  display: block;
  margin-top: 8px;
`;

const MobileCTAButton = styled.button`
  background: #2A2A2A;
  border: none;
  color: white;
  padding: 14px 28px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 200px;
  touch-action: manipulation;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover, &:active {
    background: #000000;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileFloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const MobileFloatingCode = styled.div<{ className: string }>`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: rgba(102, 126, 234, 0.3);
  pointer-events: none;
  z-index: 1;

  &.mobile-code-1 {
    top: 15%;
    left: 10%;
    font-size: 1rem;
    animation: floatCode1 8s ease-in-out infinite;
  }

  &.mobile-code-2 {
    top: 25%;
    right: 15%;
    font-size: 0.9rem;
    animation: floatCode2 6s ease-in-out infinite;
  }

  &.mobile-code-3 {
    bottom: 30%;
    left: 15%;
    font-size: 1rem;
    animation: floatCode3 7s ease-in-out infinite;
  }

  &.mobile-code-4 {
    bottom: 20%;
    right: 10%;
    font-size: 0.9rem;
    animation: floatCode4 9s ease-in-out infinite;
  }
`;

const MobileGradientOrb = styled.div<{ delay: number; size: number; top?: string; left?: string; right?: string; bottom?: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.2;
  animation: float 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
`;

const MobileHeroSection: React.FC = () => {
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
          return setTimeout(() => {}, 1500);
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
    <MobileHeroContainer id="mobile-home">
      <MobileFloatingElements>
        <MobileGradientOrb delay={0} size={150} top="10%" left="5%" />
        <MobileGradientOrb delay={2} size={100} top="60%" right="10%" />
        <MobileGradientOrb delay={4} size={120} bottom="15%" left="15%" />

        <MobileFloatingCode className="mobile-code-1">{ }</MobileFloatingCode>
        <MobileFloatingCode className="mobile-code-2">&lt;/&gt;</MobileFloatingCode>
        <MobileFloatingCode className="mobile-code-3">( )</MobileFloatingCode>
        <MobileFloatingCode className="mobile-code-4">[ ]</MobileFloatingCode>
      </MobileFloatingElements>

      <MobileHeroContent>
        <MobileLottieContainer>
          <DotLottieReact
            src="https://lottie.host/fe3b9efa-3eb2-477b-adfc-953fcfb44e8c/GGN5kYmRPU.lottie"
            loop
            autoplay
            style={{
              width: '100%',
              height: '100%',
              background: '#FFFFFF',
              objectFit: 'contain'
            }}
          />
        </MobileLottieContainer>

        <MobileHeroText>
          <MobileHeroTitle>
            <MobileTitleLine>Hello.</MobileTitleLine>
            <MobileTitleLine>I'm <MobileHighlight>Kushal</MobileHighlight>.</MobileTitleLine>
          </MobileHeroTitle>
          <MobileHeroSubtitle>
            With 6+ years of experience across Product <MobileAnimatedText>{displayText}</MobileAnimatedText>.
            <MobileLocation>based in Nova Scotia, Canada</MobileLocation>
          </MobileHeroSubtitle>
          <MobileCTAButton onClick={() => scrollToSection('what-i-do')}>
            What I do
          </MobileCTAButton>
        </MobileHeroText>
      </MobileHeroContent>
    </MobileHeroContainer>
  );
};

export default MobileHeroSection; 