import React, { useState } from 'react';
import styled from 'styled-components';
import { useOpenAI } from '../hooks/useOpenAI';
import AIAnalysisCard from './AIAnalysisCard';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
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

const ErrorMessage = styled.div`
  color: #e74c3c;
  background: rgba(231, 76, 60, 0.1);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

interface FeatureInputProps {
  apiKey: string;
}

const FeatureInput: React.FC<FeatureInputProps> = ({ apiKey }) => {
  const [feature, setFeature] = useState('');
  const [context, setContext] = useState('');
  const [result, setResult] = useState<any>(null);
  
  const { analyzeFeature, isLoading, error } = useOpenAI();

  const handleAnalyze = async () => {
    if (!feature.trim()) return;
    
    const analysisResult = await analyzeFeature(feature, context, apiKey);
    if (analysisResult) {
      setResult(analysisResult);
    }
  };

  const handleReset = () => {
    setFeature('');
    setContext('');
    setResult(null);
  };

  if (result) {
    return (
      <Container>
        <AIAnalysisCard 
          result={result} 
          featureName={feature} 
          onReset={handleReset} 
        />
      </Container>
    );
  }

  return (
    <Container>
      <FormTitle>Describe Your Feature</FormTitle>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <FormGroup>
        <Label>Feature Description</Label>
        <TextArea
          placeholder="e.g., Add dark mode toggle to the settings page. It should follow system preferences by default."
          value={feature}
          onChange={(e) => setFeature(e.target.value)}
          autoFocus
        />
      </FormGroup>
      
      <FormGroup>
        <Label>Additional Context (Optional)</Label>
        <TextArea
          placeholder="e.g., We have about 5,000 active users. Most requests come from developers who work at night. Engineering team is familiar with the styling system."
          value={context}
          onChange={(e) => setContext(e.target.value)}
          style={{ minHeight: '80px' }}
        />
      </FormGroup>
      
      <AnalyzeButton 
        onClick={handleAnalyze} 
        disabled={isLoading || !feature.trim()}
      >
        {isLoading ? (
          <>
            <Spinner /> Analyzing Feature...
          </>
        ) : (
          <>
            <FaWandMagicSparkles /> Analyze Priority
          </>
        )}
      </AnalyzeButton>
    </Container>
  );
};

export default FeatureInput;
