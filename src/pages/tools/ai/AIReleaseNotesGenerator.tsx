import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';
import {
  FaWandMagicSparkles,
  FaRocket,
  FaBriefcase,
  FaWrench,
  FaPenToSquare,
  FaClipboard,
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

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 250px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ToneSelector = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ToneButton = styled.button<{ selected: boolean }>`
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.selected ? '#667eea' : '#e0e0e0'};
  background: ${props => props.selected ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.selected ? 'white' : '#666'};
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    transform: translateY(-2px);
    border-color: #667eea;
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

const ReleaseNotesCard = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 25px;
  border-left: 4px solid #667eea;
`;

const ReleaseNotesTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
`;

const ReleaseVersion = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ReleaseNotesContent = styled.div`
  color: #555;
  line-height: 1.8;
  font-size: 1.05rem;
  
  h3 {
    color: #333;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
  
  ul {
    margin: 10px 0;
    padding-left: 25px;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  p {
    margin-bottom: 15px;
  }
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

const HelperText = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-top: 5px;
`;

interface ReleaseNotes {
  title: string;
  version: string;
  summary: string;
  content: string;
}

const AIReleaseNotesGenerator: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isKeySet, setIsKeySet] = useState<boolean>(false);
  const [version, setVersion] = useState('');
  const [changelog, setChangelog] = useState('');
  const [tone, setTone] = useState<'exciting' | 'professional' | 'technical'>('professional');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<ReleaseNotes | null>(null);

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
    if (!changelog.trim()) return;
    
    setIsLoading(true);
    setError(null);

    const toneInstructions = {
      exciting: 'Use an exciting, enthusiastic tone that gets users pumped about new features. Use emojis occasionally.',
      professional: 'Use a clear, professional tone that is informative and user-focused.',
      technical: 'Use a detailed, technical tone for developer audiences with technical terminology.'
    };

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
              content: `You are a technical writer creating user-friendly release notes. Transform technical changelogs into release notes that customers will actually read and understand. ${toneInstructions[tone]}

Return a JSON object with:
{
  "title": "Catchy release title",
  "version": "Version number or name",
  "summary": "Brief 1-2 sentence summary",
  "content": "Full release notes in markdown format with sections like:\n### ✨ New Features\n### 🔧 Improvements\n### 🐛 Bug Fixes\n### ⚠️ Breaking Changes (if any)\n\nFocus on user benefits, not technical implementation details."`
            },
            {
              role: 'user',
              content: `Version: ${version || 'Auto-detect from changelog'}\n\nChangelog:\n${changelog}\n\nTransform this into customer-friendly release notes.`
            }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate release notes');
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

  const handleCopy = () => {
    if (!results) return;

    const content = `${results.title}
${results.version}

${results.summary}

${results.content}`;

    navigator.clipboard.writeText(content);
    alert('Release notes copied to clipboard!');
  };

  const handleExportMarkdown = () => {
    if (!results) return;

    const content = `# ${results.title}

**${results.version}**

${results.summary}

${results.content}

---
*Generated with AI Release Notes Generator*
`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `release-notes-${Date.now()}.md`;
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
            <Title>AI Release Notes Generator</Title>
            <Description>
              Transform technical changelogs into user-friendly release notes that customers will actually read.
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
          <Title>AI Release Notes Generator</Title>
          <Description>
            Turn technical jargon into compelling release notes your users will love.
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
            <Label>Version Number (Optional)</Label>
            <Input
              placeholder="e.g., v2.5.0, Winter 2024 Release"
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
            <HelperText>Leave blank to auto-detect from changelog</HelperText>
          </InputSection>

          <InputSection>
            <Label>Technical Changelog</Label>
            <TextArea
              placeholder="Paste your git log, JIRA tickets, or technical changelog here...

Example:
- Added user authentication with JWT
- Fixed bug in payment processing
- Refactored database queries for performance
- Updated API endpoints for v2"
              value={changelog}
              onChange={(e) => setChangelog(e.target.value)}
              autoFocus
            />
          </InputSection>

          <InputSection>
            <Label>Tone</Label>
            <ToneSelector>
              <ToneButton
                selected={tone === 'exciting'}
                onClick={() => setTone('exciting')}
              >
                <FaRocket /> Exciting
              </ToneButton>
              <ToneButton
                selected={tone === 'professional'}
                onClick={() => setTone('professional')}
              >
                <FaBriefcase /> Professional
              </ToneButton>
              <ToneButton
                selected={tone === 'technical'}
                onClick={() => setTone('technical')}
              >
                <FaWrench /> Technical
              </ToneButton>
            </ToneSelector>
          </InputSection>

          <GenerateButton onClick={handleGenerate} disabled={isLoading || !changelog.trim()}>
            {isLoading ? (
              <>
                <Spinner /> Generating Release Notes...
              </>
            ) : (
              <>
                <FaPenToSquare /> Generate Release Notes
              </>
            )}
          </GenerateButton>

          {results && (
            <ResultsContainer>
              <ReleaseNotesCard>
                <ReleaseNotesTitle>{results.title}</ReleaseNotesTitle>
                <ReleaseVersion>{results.version}</ReleaseVersion>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '20px', fontStyle: 'italic' }}>
                  {results.summary}
                </p>
                <ReleaseNotesContent
                  dangerouslySetInnerHTML={{
                    __html: results.content
                      .replace(/### (.*)/g, '<h3>$1</h3>')
                      .replace(/## (.*)/g, '<h3>$1</h3>')
                      .replace(/- (.*)/g, '<li>$1</li>')
                      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
                      .replace(/<\/ul>\s*<ul>/g, '')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '<p></p>')
                  }}
                />
              </ReleaseNotesCard>

              <ButtonGroup>
                <ActionButton variant="primary" onClick={handleCopy}>
                  <FaClipboard /> Copy to Clipboard
                </ActionButton>
                <ActionButton variant="secondary" onClick={handleExportMarkdown}>
                  <FaFileLines /> Export Markdown
                </ActionButton>
                <ActionButton variant="secondary" onClick={() => setResults(null)}>
                  <FaRotate /> Generate New
                </ActionButton>
              </ButtonGroup>
            </ResultsContainer>
          )}
        </MainCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AIReleaseNotesGenerator;
