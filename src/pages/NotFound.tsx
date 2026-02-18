import React from 'react';
import LazyLottie from '../components/common/LazyLottie';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 1000;
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <LazyLottie
        src="https://lottie.host/fb18ad94-b1a7-4a2b-97b5-a672de5ab3db/tpwDV2CGs2.lottie"
        loop
        autoplay
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100vw',
          maxHeight: '100vh'
        }}
      />
    </NotFoundContainer>
  );
};

export default NotFound; 