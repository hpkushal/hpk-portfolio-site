import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../../styles/GlobalStyles';
import { FaKey, FaLock } from 'react-icons/fa6';

const SetupContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  text-align: center;
  
  ${media.mobile} {
    padding: 25px 20px;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #667eea;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-family: monospace;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SecurityNote = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

interface APIKeySetupProps {
  onSave: (key: string) => void;
}

const APIKeySetup: React.FC<APIKeySetupProps> = ({ onSave }) => {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!key.trim()) {
      setError('Please enter an API key');
      return;
    }
    
    if (!key.startsWith('sk-')) {
      setError('Invalid key format. OpenAI keys usually start with "sk-"');
      return;
    }

    onSave(key.trim());
  };

  return (
    <SetupContainer>
      <Icon><FaKey /></Icon>
      <Title>Setup OpenAI API</Title>
      <Text>
        To use the AI Prioritization Assistant, you need to provide your OpenAI API key. 
        This key is stored locally on your device and never sent to our servers.
      </Text>
      
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>OpenAI API Key</Label>
          <Input 
            type="password" 
            placeholder="sk-..." 
            value={key}
            onChange={(e) => {
              setKey(e.target.value);
              setError('');
            }}
          />
          {error && <p style={{ color: 'red', fontSize: '0.85rem', marginTop: '5px' }}>{error}</p>}
        </InputGroup>
        
        <Button type="submit" disabled={!key}>Save & Continue</Button>
      </form>
      
      <SecurityNote>
        <FaLock /> Your key is encrypted and stored only in your browser's local storage.
      </SecurityNote>
    </SetupContainer>
  );
};

export default APIKeySetup;
