import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';
import {
  FaWandMagicSparkles,
  FaMapLocationDot,
  FaBullseye,
  FaLandmark,
  FaRocket,
  FaArrowTrendUp,
  FaCompass,
  FaLightbulb,
  FaChartSimple,
  FaTriangleExclamation,
  FaFileLines,
  FaRotate
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

const MainCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  
  ${media.mobile} {
    padding: 25px 20px;
  }
`;

const InputSection = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: wait;
    transform: none;
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const ResultsContainer = styled.div`
  margin-top: 40px;
`;

const VisionCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  color: white;
`;

const VisionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const VisionContent = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.95;
`;

const RoadmapSection = styled.div`
  margin-bottom: 30px;
`;

const HorizonCard = styled.div<{ horizon: 'now' | 'next' | 'later' }>`
  background: ${props => {
    switch (props.horizon) {
      case 'now': return 'linear-gradient(135deg, #00d4aa, #01a3a4)';
      case 'next': return 'linear-gradient(135deg, #667eea, #764ba2)';
      case 'later': return 'linear-gradient(135deg, #f093fb, #f5576c)';
      default: return '#f8f9fa';
    }
  }};
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 20px;
  color: white;
`;

const HorizonTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InitiativeList = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const InitiativeItem = styled.li`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 12px;
  backdrop-filter: blur(10px);
`;

const InitiativeName = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const InitiativeDescription = styled.div`
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const InitiativeRationale = styled.div`
  font-size: 0.9rem;
  opacity: 0.85;
  margin-top: 8px;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StrategicSection = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
`;

const StrategicTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InsightList = styled.ul`
  margin: 0;
  padding-left: 25px;
`;

const InsightItem = styled.li`
  margin-bottom: 12px;
  color: #555;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }
  ` : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #f8f9fa;
      transform: translateY(-2px);
    }
  `}
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.95rem;
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

interface Initiative {
  name: string;
  description: string;
  rationale: string;
}

interface RoadmapResult {
  productVision: string;
  now: Initiative[];
  next: Initiative[];
  later: Initiative[];
  strategicPillars: string[];
  riskConsiderations: string[];
  successMetrics: string[];
}

const AIRoadmapAdvisor: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeySet, setIsKeySet] = useState<boolean>(false);
  const [businessGoals, setBusinessGoals] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [resources, setResources] = useState('');
  const [constraints, setConstraints] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<RoadmapResult | null>(null);

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

  const handleGenerate = async () => {
    if (!businessGoals.trim() || !targetAudience.trim()) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: `You are a strategic product advisor helping create product roadmaps. Use the Now-Next-Later framework to suggest initiatives. Return a JSON object with:
              {
                "productVision": "Compelling 2-3 sentence product vision",
                "now": [
                  {
                    "name": "Initiative name",
                    "description": "What it is and what it does",
                    "rationale": "Why it should be prioritized now"
                  }
                ],
                "next": [similar structure with 2-3 initiatives],
                "later": [similar structure with 2-3 initiatives],
                "strategicPillars": ["pillar 1", "pillar 2", "pillar 3"],
                "riskConsiderations": ["risk 1", "risk 2"],
                "successMetrics": ["metric 1", "metric 2", "metric 3"]
              }
              
              NOW = 0-3 months (immediate priorities)
              NEXT = 3-6 months (medium term)
              LATER = 6-12 months (future exploration)
              
              Be specific, strategic, and realistic based on the provided constraints.`
            },
            {
              role: 'user',
              content: `Business Goals: ${businessGoals}

Target Audience: ${targetAudience}

Resources: ${resources || 'Not specified'}

Constraints: ${constraints || 'None specified'}

Create a strategic product roadmap with prioritized initiatives.`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate roadmap');
      }

      const data = await response.json();
      const content = data.choices[0].message.content;
      
      try {
        const parsedResult = JSON.parse(content);
        setResults(parsedResult);
      } catch (e) {
        throw new Error('Failed to parse AI response');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    if (!results) return;

    const content = `
PRODUCT ROADMAP
===============

Date: ${new Date().toLocaleDateString()}

PRODUCT VISION
--------------
${results.productVision}

STRATEGIC PILLARS
-----------------
${results.strategicPillars.map((p, i) => `${i + 1}. ${p}`).join('\n')}

NOW (0-3 MONTHS)
----------------
${results.now.map((init, i) => `
${i + 1}. ${init.name}
   Description: ${init.description}
   Rationale: ${init.rationale}
`).join('\n')}

NEXT (3-6 MONTHS)
-----------------
${results.next.map((init, i) => `
${i + 1}. ${init.name}
   Description: ${init.description}
   Rationale: ${init.rationale}
`).join('\n')}

LATER (6-12 MONTHS)
-------------------
${results.later.map((init, i) => `
${i + 1}. ${init.name}
   Description: ${init.description}
   Rationale: ${init.rationale}
`).join('\n')}

SUCCESS METRICS
---------------
${results.successMetrics.map((m, i) => `${i + 1}. ${m}`).join('\n')}

RISK CONSIDERATIONS
-------------------
${results.riskConsiderations.map((r, i) => `${i + 1}. ${r}`).join('\n')}

---
Generated with AI Roadmap Advisor
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `product-roadmap-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isKeySet) {
    return (
      <PageContainer>
        <ContentWrapper>
          <Header>
            <Title>AI Roadmap Advisor</Title>
            <Description>
              Get strategic roadmap suggestions based on your business goals, market position, and resources.
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
          <Title>AI Roadmap Advisor</Title>
          <Description>
            Build a compelling product roadmap with AI-powered strategic insights.
          </Description>
        </Header>

        <InfoBanner>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaWandMagicSparkles /> AI Model: GPT-4 • API Key stored locally
          </span>
          <ResetKeyButton onClick={handleKeyClear}>Change API Key</ResetKeyButton>
        </InfoBanner>

        <MainCard>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <InputSection>
            <Label>Business Goals *</Label>
            <TextArea
              placeholder="What are your key business objectives? e.g., Increase user engagement by 30%, Expand to enterprise market, Reduce churn..."
              value={businessGoals}
              onChange={(e) => setBusinessGoals(e.target.value)}
              autoFocus
            />
          </InputSection>

          <InputSection>
            <Label>Target Audience *</Label>
            <TextArea
              placeholder="Who are you building for? e.g., SMB marketing managers, Enterprise DevOps teams, Individual creators..."
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              style={{ minHeight: '100px' }}
            />
          </InputSection>

          <InputSection>
            <Label>Available Resources (Optional)</Label>
            <TextArea
              placeholder="What resources do you have? e.g., Team of 5 engineers, $500K budget, 6 month timeline..."
              value={resources}
              onChange={(e) => setResources(e.target.value)}
              style={{ minHeight: '100px' }}
            />
          </InputSection>

          <InputSection>
            <Label>Constraints & Context (Optional)</Label>
            <TextArea
              placeholder="Any constraints or additional context? e.g., Technical debt to address, Compliance requirements, Competitive pressure..."
              value={constraints}
              onChange={(e) => setConstraints(e.target.value)}
              style={{ minHeight: '100px' }}
            />
          </InputSection>

          <GenerateButton onClick={handleGenerate} disabled={isLoading || !businessGoals.trim() || !targetAudience.trim()}>
            {isLoading ? (
              <>
                <Spinner /> Generating Strategic Roadmap...
              </>
            ) : (
              <>
                <FaMapLocationDot /> Generate Roadmap
              </>
            )}
          </GenerateButton>

          {results && (
            <ResultsContainer>
              <VisionCard>
                <VisionTitle><FaBullseye /> Product Vision</VisionTitle>
                <VisionContent>{results.productVision}</VisionContent>
              </VisionCard>

              <StrategicSection>
                <StrategicTitle><FaLandmark /> Strategic Pillars</StrategicTitle>
                <InsightList>
                  {results.strategicPillars.map((pillar, index) => (
                    <InsightItem key={index}>{pillar}</InsightItem>
                  ))}
                </InsightList>
              </StrategicSection>

              <RoadmapSection>
                <HorizonCard horizon="now">
                  <HorizonTitle><FaRocket /> NOW (0-3 Months)</HorizonTitle>
                  <InitiativeList>
                    {results.now.map((init, index) => (
                      <InitiativeItem key={index}>
                        <InitiativeName>{init.name}</InitiativeName>
                        <InitiativeDescription>{init.description}</InitiativeDescription>
                        <InitiativeRationale><FaLightbulb /> {init.rationale}</InitiativeRationale>
                      </InitiativeItem>
                    ))}
                  </InitiativeList>
                </HorizonCard>

                <HorizonCard horizon="next">
                  <HorizonTitle><FaArrowTrendUp /> NEXT (3-6 Months)</HorizonTitle>
                  <InitiativeList>
                    {results.next.map((init, index) => (
                      <InitiativeItem key={index}>
                        <InitiativeName>{init.name}</InitiativeName>
                        <InitiativeDescription>{init.description}</InitiativeDescription>
                        <InitiativeRationale><FaLightbulb /> {init.rationale}</InitiativeRationale>
                      </InitiativeItem>
                    ))}
                  </InitiativeList>
                </HorizonCard>

                <HorizonCard horizon="later">
                  <HorizonTitle><FaCompass /> LATER (6-12 Months)</HorizonTitle>
                  <InitiativeList>
                    {results.later.map((init, index) => (
                      <InitiativeItem key={index}>
                        <InitiativeName>{init.name}</InitiativeName>
                        <InitiativeDescription>{init.description}</InitiativeDescription>
                        <InitiativeRationale><FaLightbulb /> {init.rationale}</InitiativeRationale>
                      </InitiativeItem>
                    ))}
                  </InitiativeList>
                </HorizonCard>
              </RoadmapSection>

              <StrategicSection>
                <StrategicTitle><FaChartSimple /> Success Metrics</StrategicTitle>
                <InsightList>
                  {results.successMetrics.map((metric, index) => (
                    <InsightItem key={index}>{metric}</InsightItem>
                  ))}
                </InsightList>
              </StrategicSection>

              <StrategicSection>
                <StrategicTitle><FaTriangleExclamation /> Risk Considerations</StrategicTitle>
                <InsightList>
                  {results.riskConsiderations.map((risk, index) => (
                    <InsightItem key={index}>{risk}</InsightItem>
                  ))}
                </InsightList>
              </StrategicSection>

              <ButtonGroup>
                <ActionButton variant="primary" onClick={handleExport}>
                  <FaFileLines /> Export Roadmap
                </ActionButton>
                <ActionButton variant="secondary" onClick={() => setResults(null)}>
                  <FaRotate /> Create New Roadmap
                </ActionButton>
              </ButtonGroup>
            </ResultsContainer>
          )}
        </MainCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AIRoadmapAdvisor;
