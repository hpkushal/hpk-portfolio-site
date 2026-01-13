import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';
import {
  FaWandMagicSparkles,
  FaChartSimple,
  FaBullseye,
  FaLightbulb,
  FaRegComments,
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
  margin-bottom: 30px;
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
  min-height: 300px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
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

const ThemeCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  border-left: 4px solid #667eea;
`;

const ThemeName = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const ThemeDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const Frequency = styled.span`
  background: #eef2ff;
  color: #667eea;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
`;

const SentimentBadge = styled.span<{ sentiment: string }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-right: 10px;
  
  ${props => {
    switch (props.sentiment.toLowerCase()) {
      case 'positive':
        return 'background: #d4f4dd; color: #00875a;';
      case 'negative':
        return 'background: #ffebe6; color: #de350b;';
      case 'neutral':
        return 'background: #e3e8f0; color: #5e6c84;';
      default:
        return 'background: #f4f5f7; color: #6b778c;';
    }
  }}
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

interface AnalysisResult {
  themes: Array<{
    name: string;
    description: string;
    frequency: string;
    sentiment: string;
  }>;
  overallSentiment: string;
  priorityInsights: string[];
  keyQuotes: string[];
}

const AIFeedbackAnalyzer: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeySet, setIsKeySet] = useState<boolean>(false);
  const [feedback, setFeedback] = useState('');
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
    if (!feedback.trim()) return;
    
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
              content: `You are a product manager analyzing customer feedback. Extract themes, sentiment, and actionable insights. Return a JSON object with:
              {
                "themes": [{"name": "theme name", "description": "detailed description", "frequency": "High/Medium/Low", "sentiment": "Positive/Negative/Neutral"}],
                "overallSentiment": "Positive/Negative/Mixed",
                "priorityInsights": ["insight 1", "insight 2", "insight 3"],
                "keyQuotes": ["relevant quote 1", "relevant quote 2"]
              }`
            },
            {
              role: 'user',
              content: `Analyze this customer feedback and extract themes, sentiment, and insights:\n\n${feedback}`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to analyze feedback');
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
CUSTOMER FEEDBACK ANALYSIS
==========================

Date: ${new Date().toLocaleDateString()}

OVERALL SENTIMENT: ${results.overallSentiment}

KEY THEMES:
${results.themes.map((theme, i) => `
${i + 1}. ${theme.name} (${theme.frequency}, ${theme.sentiment})
   ${theme.description}
`).join('\n')}

PRIORITY INSIGHTS:
${results.priorityInsights.map((insight, i) => `${i + 1}. ${insight}`).join('\n')}

KEY QUOTES:
${results.keyQuotes.map((quote, i) => `${i + 1}. "${quote}"`).join('\n')}

---
Generated with AI Feedback Analyzer
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback-analysis-${Date.now()}.txt`;
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
            <Title>AI Feedback Analyzer</Title>
            <Description>
              Extract themes, sentiment, and actionable insights from customer feedback using AI.
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
          <Title>AI Feedback Analyzer</Title>
          <Description>
            Paste customer feedback, reviews, or support tickets and let AI extract themes and insights.
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
            <Label>Paste Customer Feedback</Label>
            <TextArea
              placeholder="Paste multiple customer reviews, support tickets, survey responses, or feedback here. The more feedback you provide, the better the analysis..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              autoFocus
            />
          </InputSection>

          <AnalyzeButton onClick={handleAnalyze} disabled={isLoading || !feedback.trim()}>
            {isLoading ? (
              <>
                <Spinner /> Analyzing Feedback...
              </>
            ) : (
              <>
                <FaWandMagicSparkles /> Analyze Feedback
              </>
            )}
          </AnalyzeButton>

          {results && (
            <ResultsContainer>
              <ResultSection>
                <ResultTitle>
                  <FaChartSimple /> Overall Sentiment
                </ResultTitle>
                <SentimentBadge sentiment={results.overallSentiment}>
                  {results.overallSentiment}
                </SentimentBadge>
              </ResultSection>

              <ResultSection>
                <ResultTitle><FaBullseye /> Key Themes</ResultTitle>
                {results.themes.map((theme, index) => (
                  <ThemeCard key={index}>
                    <ThemeName>{theme.name}</ThemeName>
                    <div style={{ marginBottom: '10px' }}>
                      <Frequency>{theme.frequency}</Frequency>
                      <SentimentBadge sentiment={theme.sentiment}>{theme.sentiment}</SentimentBadge>
                    </div>
                    <ThemeDescription>{theme.description}</ThemeDescription>
                  </ThemeCard>
                ))}
              </ResultSection>

              <ResultSection>
                <ResultTitle><FaLightbulb /> Priority Insights</ResultTitle>
                <InsightList>
                  {results.priorityInsights.map((insight, index) => (
                    <InsightItem key={index}>{insight}</InsightItem>
                  ))}
                </InsightList>
              </ResultSection>

              {results.keyQuotes && results.keyQuotes.length > 0 && (
                <ResultSection>
                  <ResultTitle><FaRegComments /> Key Quotes</ResultTitle>
                  {results.keyQuotes.map((quote, index) => (
                    <ThemeDescription key={index} style={{ fontStyle: 'italic', marginBottom: '15px' }}>
                      "{quote}"
                    </ThemeDescription>
                  ))}
                </ResultSection>
              )}

              <div>
                <ExportButton onClick={handleExport}>
                  <FaFileLines /> Export Analysis
                </ExportButton>
                <ExportButton onClick={() => setResults(null)}>
                  <FaRotate /> Analyze New Feedback
                </ExportButton>
              </div>
            </ResultsContainer>
          )}
        </MainCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AIFeedbackAnalyzer;
