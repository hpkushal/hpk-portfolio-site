import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';
import {
  FaWandMagicSparkles,
  FaBullseye,
  FaChartSimple,
  FaHandFist,
  FaMagnifyingGlass,
  FaLightbulb,
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

const HelperText = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-top: 5px;
`;

const AnalyzeButton = styled.button`
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

const ResultSection = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 25px;
`;

const ResultTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ComparisonTable = styled.div`
  overflow-x: auto;
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Th = styled.th`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  color: #555;
  line-height: 1.6;
`;

const Tr = styled.tr`
  &:hover {
    background: #f8f9fa;
  }
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

const StrengthBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  background: #d4f4dd;
  color: #00875a;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const WeaknessBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  background: #ffebe6;
  color: #de350b;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const OpportunityBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  background: #e3f2fd;
  color: #0052cc;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const ExportButton = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
  }
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

interface CompetitorFeature {
  competitor: string;
  features: string[];
  pricing: string;
  positioning: string;
}

interface AnalysisResult {
  competitors: CompetitorFeature[];
  marketGaps: string[];
  strategicRecommendations: string[];
  yourStrengths: string[];
  yourWeaknesses: string[];
  opportunities: string[];
}

const AICompetitiveAnalysis: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeySet, setIsKeySet] = useState<boolean>(false);
  const [productDescription, setProductDescription] = useState('');
  const [competitorsList, setCompetitorsList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<AnalysisResult | null>(null);

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

  const handleAnalyze = async () => {
    if (!productDescription.trim() || !competitorsList.trim()) return;
    
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
              content: `You are a competitive intelligence analyst helping product managers analyze their competitive landscape. Return a JSON object with:
              {
                "competitors": [
                  {
                    "competitor": "competitor name",
                    "features": ["feature 1", "feature 2", "feature 3"],
                    "pricing": "pricing strategy description",
                    "positioning": "market positioning description"
                  }
                ],
                "marketGaps": ["gap 1", "gap 2", "gap 3"],
                "strategicRecommendations": ["recommendation 1", "recommendation 2", "recommendation 3"],
                "yourStrengths": ["strength 1", "strength 2", "strength 3"],
                "yourWeaknesses": ["weakness 1", "weakness 2"],
                "opportunities": ["opportunity 1", "opportunity 2", "opportunity 3"]
              }
              Be specific, data-driven, and actionable.`
            },
            {
              role: 'user',
              content: `My Product: ${productDescription}\n\nCompetitors to analyze: ${competitorsList}\n\nProvide a comprehensive competitive analysis including features, pricing, positioning, market gaps, and strategic recommendations.`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to analyze competitors');
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
COMPETITIVE ANALYSIS REPORT
===========================

Date: ${new Date().toLocaleDateString()}
Product: ${productDescription}

COMPETITOR COMPARISON:
${results.competitors.map((comp, i) => `
${i + 1}. ${comp.competitor}
   Features: ${comp.features.join(', ')}
   Pricing: ${comp.pricing}
   Positioning: ${comp.positioning}
`).join('\n')}

YOUR STRENGTHS:
${results.yourStrengths.map((s, i) => `${i + 1}. ${s}`).join('\n')}

YOUR WEAKNESSES:
${results.yourWeaknesses.map((w, i) => `${i + 1}. ${w}`).join('\n')}

MARKET GAPS:
${results.marketGaps.map((gap, i) => `${i + 1}. ${gap}`).join('\n')}

OPPORTUNITIES:
${results.opportunities.map((opp, i) => `${i + 1}. ${opp}`).join('\n')}

STRATEGIC RECOMMENDATIONS:
${results.strategicRecommendations.map((rec, i) => `${i + 1}. ${rec}`).join('\n')}

---
Generated with AI Competitive Analysis
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `competitive-analysis-${Date.now()}.txt`;
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
            <Title>AI Competitive Analysis</Title>
            <Description>
              Analyze competitor products and extract features, positioning, pricing strategies, and identify market gaps.
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
          <Title>AI Competitive Analysis</Title>
          <Description>
            Get AI-powered competitive intelligence to inform your product strategy and positioning.
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
            <Label>Your Product Description</Label>
            <TextArea
              placeholder="Describe your product, its key features, target market, and unique value proposition..."
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              autoFocus
            />
          </InputSection>

          <InputSection>
            <Label>Competitors to Analyze</Label>
            <TextArea
              placeholder="List competitor names or URLs, separated by commas or new lines. e.g., Asana, Monday.com, Trello, ClickUp"
              value={competitorsList}
              onChange={(e) => setCompetitorsList(e.target.value)}
              style={{ minHeight: '100px' }}
            />
            <HelperText>Enter 2-5 competitors for best results</HelperText>
          </InputSection>

          <AnalyzeButton onClick={handleAnalyze} disabled={isLoading || !productDescription.trim() || !competitorsList.trim()}>
            {isLoading ? (
              <>
                <Spinner /> Analyzing Competitive Landscape...
              </>
            ) : (
              <>
                <FaBullseye /> Analyze Competitors
              </>
            )}
          </AnalyzeButton>

          {results && (
            <ResultsContainer>
              <ResultSection>
                <ResultTitle><FaChartSimple /> Competitive Comparison</ResultTitle>
                <ComparisonTable>
                  <Table>
                    <thead>
                      <tr>
                        <Th>Competitor</Th>
                        <Th>Key Features</Th>
                        <Th>Pricing Strategy</Th>
                        <Th>Market Positioning</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.competitors.map((comp, index) => (
                        <Tr key={index}>
                          <Td><strong>{comp.competitor}</strong></Td>
                          <Td>
                            <ul style={{ margin: 0, paddingLeft: '20px' }}>
                              {comp.features.map((feature, i) => (
                                <li key={i} style={{ marginBottom: '5px' }}>{feature}</li>
                              ))}
                            </ul>
                          </Td>
                          <Td>{comp.pricing}</Td>
                          <Td>{comp.positioning}</Td>
                        </Tr>
                      ))}
                    </tbody>
                  </Table>
                </ComparisonTable>
              </ResultSection>

              <ResultSection>
                <ResultTitle><FaHandFist /> Your Competitive Position</ResultTitle>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ marginBottom: '10px', color: '#333' }}>Strengths:</h4>
                  <div>
                    {results.yourStrengths.map((strength, index) => (
                      <StrengthBadge key={index}>{strength}</StrengthBadge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ marginBottom: '10px', color: '#333' }}>Weaknesses:</h4>
                  <div>
                    {results.yourWeaknesses.map((weakness, index) => (
                      <WeaknessBadge key={index}>{weakness}</WeaknessBadge>
                    ))}
                  </div>
                </div>
              </ResultSection>

              <ResultSection>
                <ResultTitle><FaMagnifyingGlass /> Market Gaps & Opportunities</ResultTitle>
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ marginBottom: '10px', color: '#333' }}>Identified Market Gaps:</h4>
                  <InsightList>
                    {results.marketGaps.map((gap, index) => (
                      <InsightItem key={index}>{gap}</InsightItem>
                    ))}
                  </InsightList>
                </div>
                <div>
                  <h4 style={{ marginBottom: '10px', color: '#333' }}>Opportunities:</h4>
                  <div>
                    {results.opportunities.map((opp, index) => (
                      <OpportunityBadge key={index}>{opp}</OpportunityBadge>
                    ))}
                  </div>
                </div>
              </ResultSection>

              <ResultSection>
                <ResultTitle><FaLightbulb /> Strategic Recommendations</ResultTitle>
                <InsightList>
                  {results.strategicRecommendations.map((rec, index) => (
                    <InsightItem key={index}>{rec}</InsightItem>
                  ))}
                </InsightList>
              </ResultSection>

              <div>
                <ExportButton onClick={handleExport}>
                  <FaFileLines /> Export Analysis
                </ExportButton>
                <ExportButton onClick={() => setResults(null)}>
                  <FaRotate /> New Analysis
                </ExportButton>
              </div>
            </ResultsContainer>
          )}
        </MainCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AICompetitiveAnalysis;
