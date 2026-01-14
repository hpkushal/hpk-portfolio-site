import React from 'react';
import styled from 'styled-components';
import LazyLottie from './LazyLottie';
import { media } from '../styles/GlobalStyles';
import { getFeaturedTools } from '../data/tools';
import { useNavigate } from 'react-router-dom';

const FeaturedToolsContainer = styled.section`
  padding: 100px 20px;
  background: linear-gradient(180deg, #FFFFFF 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="toolsGrain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23667eea" opacity="0.05"/><circle cx="75" cy="75" r="1" fill="%23764ba2" opacity="0.05"/><circle cx="50" cy="10" r="0.5" fill="%23667eea" opacity="0.03"/></pattern></defs><rect width="100" height="100" fill="url(%23toolsGrain)"/></svg>');
    pointer-events: none;
    z-index: 0;
  }

  ${media.tablet} {
    padding: 80px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  ${media.tablet} {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
`;

const HeaderText = styled.div`
  flex: 1;
  text-align: left;

  ${media.tablet} {
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 2px;
  }

  ${media.tablet} {
    font-size: 2.5rem;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  ${media.mobile} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 500px;
  line-height: 1.6;
  margin-top: 20px;

  ${media.tablet} {
    font-size: 1.1rem;
    max-width: 100%;
  }

  ${media.mobile} {
    font-size: 1rem;
  }
`;

const HeaderVisual = styled.div`
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
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, 
      rgba(102, 126, 234, 0.08) 0%, 
      rgba(118, 75, 162, 0.05) 50%, 
      transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const LottieToolsContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  ${media.tablet} {
    width: 150px;
    height: 150px;
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;

  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ToolCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 35px 30px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 4px 16px rgba(102, 126, 234, 0.05);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.12),
      0 8px 32px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  ${media.tablet} {
    padding: 30px 25px;
  }

  ${media.mobile} {
    padding: 25px 20px;
  }
`;

const ToolHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const ToolIcon = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  ${props => {
    switch (props.color) {
      case 'pink':
        return 'background: linear-gradient(135deg, #ff6b9d, #ff8a9b);';
      case 'blue':
        return 'background: linear-gradient(135deg, #667eea, #764ba2);';
      case 'green':
        return 'background: linear-gradient(135deg, #00d4aa, #01a3a4);';
      case 'purple':
        return 'background: linear-gradient(135deg, #764ba2, #667eea);';
      case 'orange':
        return 'background: linear-gradient(135deg, #f093fb, #f5576c);';
      default:
        return 'background: linear-gradient(135deg, #667eea, #764ba2);';
    }
  }}

  ${ToolCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ToolHeaderText = styled.div`
  flex: 1;
`;

const ToolTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
  transition: color 0.3s ease;

  ${ToolCard}:hover & {
    color: #667eea;
  }

  ${media.mobile} {
    font-size: 1.3rem;
  }
`;

const ToolCategory = styled.span`
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  ${ToolCard}:hover & {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border-color: transparent;
  }
`;

const ToolDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  flex: 1;

  ${media.mobile} {
    font-size: 0.95rem;
  }
`;

const TryButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);

    &::after {
      transform: translateX(4px);
    }
  }
`;

const SectionFooter = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const ViewAllButton = styled.button`
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgba(102, 126, 234, 0.05);
    transform: translateY(-2px);
  }
`;

const FeaturedToolsSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredTools = getFeaturedTools();

  const handleToolClick = (route: string) => {
    navigate(route);
  };

  const handleViewAll = () => {
    navigate('/tools');
  };

  return (
    <FeaturedToolsContainer id="featured-tools">
      <Container>
        <SectionHeader>
          <HeaderText>
            <SectionTitle>AI-Powered PM Suite</SectionTitle>
            <SectionSubtitle>
              Supercharge your product workflow with intelligent tools powered by GPT-4. 
              Bring your own API key for unlimited access.
            </SectionSubtitle>
          </HeaderText>
          <HeaderVisual>
            <LottieToolsContainer>
              <LazyLottie
                src="https://lottie.host/c8f6d5b0-9e8a-4c4f-8f3d-5e8b4a7c9e1a/3tQKXzYvfK.lottie"
                loop
                autoplay
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'transparent'
                }}
              />
            </LottieToolsContainer>
          </HeaderVisual>
        </SectionHeader>

        <ToolsGrid>
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} onClick={() => handleToolClick(tool.route)}>
              <ToolHeader>
                <ToolIcon color={tool.color}>
                  {tool.icon}
                </ToolIcon>
                <ToolHeaderText>
                  <ToolTitle>{tool.title}</ToolTitle>
                  <ToolCategory>{tool.category === 'ai-tool' ? 'AI Powered' : 'Tool'}</ToolCategory>
                </ToolHeaderText>
              </ToolHeader>
              <ToolDescription>{tool.shortDescription}</ToolDescription>
              <TryButton onClick={(e) => { e.stopPropagation(); handleToolClick(tool.route); }}>
                Try {tool.title}
              </TryButton>
            </ToolCard>
          ))}
        </ToolsGrid>

        <SectionFooter>
          <ViewAllButton onClick={handleViewAll}>View All Tools →</ViewAllButton>
        </SectionFooter>
      </Container>
    </FeaturedToolsContainer>
  );
};

export default FeaturedToolsSection;
