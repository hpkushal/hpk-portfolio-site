import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';
import FeatureInput from './components/FeatureInput';
import FeatureBacklog from './components/FeatureBacklog';
import ComparisonChart from './components/ComparisonChart';
import {
  FaWandMagicSparkles,
  FaPlus,
  FaClipboardList,
  FaChartSimple
} from 'react-icons/fa6';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 15px;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ active: boolean }>`
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
`;

const MainContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  min-height: 400px;
`;

const InfoBanner = styled.div`
  background: #f0f7ff;
  border: 1px solid #cce0ff;
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 30px;
  font-size: 0.95rem;
  color: #0052cc;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`;

const ResetKeyButton = styled.button`
  background: none;
  border: none;
  color: #0052cc;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  
  &:hover {
    color: #003d99;
  }
`;

const AIPrioritizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'input' | 'backlog' | 'compare'>('input');
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeySet, setIsKeySet] = useState<boolean>(false);

  useEffect(() => {
    const storedKey = localStorage.getItem('openai_api_key');
    if (storedKey) {
      setApiKey(storedKey);
      setIsKeySet(true);
    }
  }, []);

  const handleKeySave = (key: string) => {
    setApiKey(key);
    setIsKeySet(true);
    localStorage.setItem('openai_api_key', key);
  };

  const handleKeyClear = () => {
    if (window.confirm('Are you sure you want to remove your API key?')) {
      setApiKey('');
      setIsKeySet(false);
      localStorage.removeItem('openai_api_key');
    }
  };

  if (!isKeySet) {
    return (
      <PageContainer>
        <ContentWrapper>
          <Header>
            <Title>AI Prioritization Assistant</Title>
            <Description>
              Leverage GPT-4 to intelligently score features, identify risks, and build data-driven roadmaps.
            </Description>
          </Header>
          <APIKeySetup onSave={handleKeySave} />
        </ContentWrapper>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>AI Prioritization Assistant</Title>
          <Description>
            Describe your features in natural language and let AI help you prioritize with the RICE framework.
          </Description>
        </Header>

        <InfoBanner>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaWandMagicSparkles /> AI Model: GPT-4 • API Key stored locally
          </span>
          <ResetKeyButton onClick={handleKeyClear}>Change API Key</ResetKeyButton>
        </InfoBanner>

        <TabContainer>
          <Tab active={activeTab === 'input'} onClick={() => setActiveTab('input')}>
            <FaPlus /> Add Features
          </Tab>
          <Tab active={activeTab === 'backlog'} onClick={() => setActiveTab('backlog')}>
            <FaClipboardList /> Backlog
          </Tab>
          <Tab active={activeTab === 'compare'} onClick={() => setActiveTab('compare')}>
            <FaChartSimple /> Compare
          </Tab>
        </TabContainer>

        <MainContent>
          {activeTab === 'input' && <FeatureInput apiKey={apiKey} />}
          {activeTab === 'backlog' && <FeatureBacklog />}
          {activeTab === 'compare' && <ComparisonChart />}
        </MainContent>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AIPrioritizer;
