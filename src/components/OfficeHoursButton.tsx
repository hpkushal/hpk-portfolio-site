import React from 'react';
import LazyLottie from './LazyLottie';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';

const ClickableLottie = styled.div`
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  ${media.tablet} {
    width: 150px;
    height: 150px;
  }
  
  ${media.mobile} {
    width: 120px;
    height: 120px;
  }
`;

const OfficeHoursButtonComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to home page and scroll to Office Hours section
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('get-in-touch');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <ClickableLottie onClick={handleClick}>
      <LazyLottie
        src="https://lottie.host/5f8f2462-c5d8-47e8-bce9-8d2044bd08de/xBeKYEWieo.lottie"
        loop
        autoplay
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </ClickableLottie>
  );
};

export default OfficeHoursButtonComponent; 