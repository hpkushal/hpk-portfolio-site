import React from 'react';
import styled from 'styled-components';
import LazyLottie from './LazyLottie';
import { media } from '../styles/GlobalStyles';

const GetInTouchContainer = styled.section`
  padding: 100px 20px;
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
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain2" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="%23ffffff" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain2)"/></svg>');
    pointer-events: none;
  }

  ${media.tablet} {
    padding: 80px 20px;
  }

  ${media.mobile} {
    padding: 60px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TouchContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  position: relative;
  z-index: 2;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 50px;
    text-align: center;
  }

  ${media.mobile} {
    gap: 40px;
  }
`;

const TouchText = styled.div`
  padding-right: 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 0;
    bottom: 0;
    width: 6px;
    background: linear-gradient(180deg, 
      transparent 0%, 
      #667eea 30%, 
      #764ba2 70%, 
      transparent 100%);
    border-radius: 3px;
    opacity: 0.8;
  }

  ${media.tablet} {
    padding-right: 0;

    &::before {
      display: none;
    }
  }
`;

const TouchTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  line-height: 1.1;
  letter-spacing: -0.02em;

  ${media.tablet} {
    font-size: 2.8rem;
  }

  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const TouchSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 30px;
  line-height: 1.3;
  letter-spacing: -0.01em;

  ${media.tablet} {
    font-size: 1.5rem;
  }

  ${media.mobile} {
    font-size: 1.3rem;
  }
`;

const TouchDescription = styled.p`
  font-size: 1.25rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 35px;
  font-weight: 400;

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const TouchStats = styled.div`
  margin-bottom: 35px;
`;

const StatsLine = styled.div`
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 15px;
  line-height: 1.6;
  font-weight: 500;

  ${media.tablet} {
    font-size: 1.05rem;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const StatsHighlight = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 1.2rem;

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1.05rem;
  }
`;

const TouchButtons = styled.div`
  margin-bottom: 30px;
`;

const EmailBtn = styled.a`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 18px 36px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  display: inline-block;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 16px 32px rgba(102, 126, 234, 0.3),
      0 8px 16px rgba(118, 75, 162, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  ${media.tablet} {
    padding: 16px 32px;
    font-size: 1.05rem;
  }

  ${media.mobile} {
    padding: 15px 30px;
    font-size: 1rem;
  }
`;

const TouchFooter = styled.p`
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
  font-weight: 400;
  letter-spacing: 0.01em;

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const TouchVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 140%;
    height: 140%;
    background: radial-gradient(circle, 
      rgba(102, 126, 234, 0.08) 0%, 
      rgba(118, 75, 162, 0.05) 50%, 
      transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const LottieTouchContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;

  ${media.tablet} {
    width: 400px;
    height: 400px;
  }

  ${media.mobile} {
    width: 320px;
    height: 320px;
  }
`;

const FloatingDot = styled.div<{ className: string }>`
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  animation: floatDot 6s ease-in-out infinite;

  &.dot-1 {
    width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    top: 10%;
    left: 5%;
    animation-delay: 0s;
  }

  &.dot-2 {
    width: 15px;
    height: 15px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    top: 20%;
    right: 8%;
    animation-delay: 2s;
  }

  &.dot-3 {
    width: 25px;
    height: 25px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    bottom: 15%;
    left: 8%;
    animation-delay: 4s;
  }

  &.dot-4 {
    width: 18px;
    height: 18px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    bottom: 25%;
    right: 12%;
    animation-delay: 1s;
  }

  @keyframes floatDot {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-15px) scale(1.1); }
  }
`;

const GetInTouchSection: React.FC = () => {
  return (
    <GetInTouchContainer id="get-in-touch">
      <FloatingDot className="dot-1" />
      <FloatingDot className="dot-2" />
      <FloatingDot className="dot-3" />
      <FloatingDot className="dot-4" />

      <Container>
        <TouchContent>
          <TouchText>
            <TouchTitle>Office Hours</TouchTitle>
            <TouchSubtitle>Stuck on your product idea? Let's fix that.</TouchSubtitle>
            <TouchDescription>
              Whether you need help validating a concept, mapping your MVP, or launching without code, I'll help you cut through the noise and get moving.
            </TouchDescription>
            <TouchStats>
              <StatsLine>I've guided <StatsHighlight>50+ projects</StatsHighlight> from idea to execution.</StatsLine>
              <StatsLine>You don't need a perfect plan. Just a starting point.</StatsLine>
            </TouchStats>
            <TouchButtons>
              <EmailBtn href="mailto:your-email@example.com">Send me an email</EmailBtn>
            </TouchButtons>
            <TouchFooter>let's make your product real.</TouchFooter>
          </TouchText>

          <TouchVisual>
            <LottieTouchContainer>
              <LazyLottie
                src="https://lottie.host/f4147008-d192-469c-8009-40dd59cc4f40/nqthxw0pNK.lottie"
                loop
                autoplay
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent'
                }}
              />
            </LottieTouchContainer>
          </TouchVisual>
        </TouchContent>
      </Container>
    </GetInTouchContainer>
  );
};

export default GetInTouchSection; 