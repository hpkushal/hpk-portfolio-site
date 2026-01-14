import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';
import { tools, categories, Tool } from '../data/tools';
import LazyLottie from './LazyLottie';
import { FaRobot, FaMagnifyingGlass } from 'react-icons/fa6';
import SEO from './SEO';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ToolsContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px 60px;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  
  ${media.mobile} {
    margin-bottom: 60px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${media.tablet} {
    font-size: 2.8rem;
  }
  
  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  display: inline-block;
`;

const LottieContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 40px;
  
  ${media.mobile} {
    width: 150px;
    height: 150px;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 60px;
  
  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

const FilterTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  
  ${media.mobile} {
    gap: 10px;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e0e0e0'};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
  }
  
  ${media.mobile} {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  
  ${media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
  }
  
  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ToolCard = styled.div<{ comingSoon?: boolean }>`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  cursor: ${props => props.comingSoon ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.comingSoon ? 0.7 : 1};
  position: relative;
  
  &:hover {
    transform: ${props => props.comingSoon ? 'none' : 'translateY(-10px)'};
    box-shadow: ${props => props.comingSoon ? '0 10px 30px rgba(0, 0, 0, 0.1)' : '0 25px 50px rgba(0, 0, 0, 0.15)'};
  }
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ComingSoonBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #ff6b9d, #ff8a9b);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
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
  
  ${media.mobile} {
    font-size: 1.3rem;
  }
`;

const ToolCategory = styled.span`
  display: inline-block;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ToolDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ToolFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const TryButton = styled.button<{ disabled?: boolean }>`
  flex: 1;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  border: none;
  background: ${props => props.disabled ? '#e0e0e0' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: ${props => props.disabled ? '#999' : 'white'};
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.disabled ? 'none' : '0 5px 15px rgba(102, 126, 234, 0.4)'};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;
`;

const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
`;

const EmptyStateText = styled.p`
  font-size: 1.2rem;
  color: #999;
`;

const Tools: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTools = selectedCategory === 'all'
    ? tools
    : selectedCategory === 'active'
    ? tools.filter(tool => !tool.comingSoon)
    : tools.filter(tool => tool.comingSoon);

  const handleToolClick = (tool: Tool) => {
    if (!tool.comingSoon) {
      navigate(tool.route);
    }
  };

  return (
    <>
      <SEO
        title="PM Tools"
        description="Free AI-powered Product Management tools: Feature Prioritizer, Feedback Analyzer, User Story Generator, Competitive Analysis, and more. Built by Kushal HP."
        url="/tools"
      />
      <ToolsContainer>
        <ContentWrapper>
          <HeroSection>
          <LottieContainer>
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
          </LottieContainer>
          <Badge>AI Powered</Badge>
          <HeroTitle>Product Manager Toolkit</HeroTitle>
          <HeroSubtitle>
            A suite of intelligent, AI-powered tools designed to supercharge your product workflow. 
            Bring your own API key for unlimited access to GPT-4 powered insights.
          </HeroSubtitle>
        </HeroSection>

        <FilterSection>
          <FilterTitle>Filter by Category</FilterTitle>
          <FilterButtons>
            <FilterButton
              active={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
            >
              <span><FaRobot /></span>
              <span>All AI Tools</span>
            </FilterButton>
            {Object.entries(categories).map(([key, category]) => (
              <FilterButton
                key={key}
                active={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </FilterButton>
            ))}
          </FilterButtons>
        </FilterSection>

        {filteredTools.length === 0 ? (
          <EmptyState>
            <EmptyStateIcon><FaMagnifyingGlass /></EmptyStateIcon>
            <EmptyStateText>No tools found in this category</EmptyStateText>
          </EmptyState>
        ) : (
          <ToolsGrid>
            {filteredTools.map(tool => (
              <ToolCard
                key={tool.id}
                onClick={() => handleToolClick(tool)}
                comingSoon={tool.comingSoon}
              >
                {tool.comingSoon && <ComingSoonBadge>Coming Soon</ComingSoonBadge>}
                <ToolHeader>
                  <ToolIcon color={tool.color}>
                    {tool.icon}
                  </ToolIcon>
                  <ToolHeaderText>
                    <ToolTitle>{tool.title}</ToolTitle>
                    <ToolCategory>{categories[tool.category].name}</ToolCategory>
                  </ToolHeaderText>
                </ToolHeader>
                <ToolDescription>{tool.description}</ToolDescription>
                <ToolFooter>
                  <TryButton disabled={tool.comingSoon}>
                    {tool.comingSoon ? 'In Development' : 'Try Tool →'}
                  </TryButton>
                </ToolFooter>
              </ToolCard>
            ))}
          </ToolsGrid>
        )}
        </ContentWrapper>
      </ToolsContainer>
    </>
  );
};

export default Tools;
