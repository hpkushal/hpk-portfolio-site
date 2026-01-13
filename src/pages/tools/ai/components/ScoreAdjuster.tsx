import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../../styles/GlobalStyles';
import { FaGear } from 'react-icons/fa6';

const AdjusterContainer = styled.div`
  margin-top: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  
  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 0.85rem;
  color: #666;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

interface ScoreAdjusterProps {
  initialScores: {
    reach: number;
    impact: number;
    confidence: number;
    effort: number;
  };
  onUpdate: (newScores: any) => void;
}

const ScoreAdjuster: React.FC<ScoreAdjusterProps> = ({ initialScores, onUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scores, setScores] = useState(initialScores);

  const handleChange = (field: string, value: number) => {
    const newScores = { ...scores, [field]: value };
    setScores(newScores);
    
    // Recalculate total
    const total = Math.round(
      (newScores.reach * newScores.impact * (newScores.confidence / 100)) / newScores.effort
    );
    
    onUpdate({ ...newScores, total });
  };

  if (!isOpen) {
    return (
      <ToggleButton onClick={() => setIsOpen(true)}>
        <FaGear /> Adjust Scores Manually
      </ToggleButton>
    );
  }

  return (
    <AdjusterContainer>
      <ToggleButton onClick={() => setIsOpen(false)}>
        Hide Adjustments
      </ToggleButton>
      
      <ControlsGrid>
        <ControlGroup>
          <Label>Reach (users/quarter)</Label>
          <Input 
            type="number" 
            value={scores.reach}
            onChange={(e) => handleChange('reach', Number(e.target.value))}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Impact (0.25 - 3)</Label>
          <Input 
            type="number" 
            step="0.25"
            min="0.25"
            max="3"
            value={scores.impact}
            onChange={(e) => handleChange('impact', Number(e.target.value))}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Confidence (%)</Label>
          <Input 
            type="number" 
            min="0"
            max="100"
            value={scores.confidence}
            onChange={(e) => handleChange('confidence', Number(e.target.value))}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Effort (person-weeks)</Label>
          <Input 
            type="number" 
            min="0.5"
            step="0.5"
            value={scores.effort}
            onChange={(e) => handleChange('effort', Number(e.target.value))}
          />
        </ControlGroup>
      </ControlsGrid>
    </AdjusterContainer>
  );
};

export default ScoreAdjuster;
