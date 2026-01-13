import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../styles/GlobalStyles';
import { FaTriangleExclamation, FaCircleCheck } from 'react-icons/fa6';

const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 25px;
  border-bottom: 1px solid #e0e0e0;
`;

const FeatureName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

const TotalScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 15px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const ScoreLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
`;

const ScoreValue = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: #667eea;
`;

const Content = styled.div`
  padding: 25px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
  
  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const MetricBox = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
`;

const MetricHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const MetricTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #333;
`;

const MetricValue = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
`;

const Reasoning = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin: 0;
`;

const Section = styled.div`
  margin-bottom: 25px;
`;

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 8px;
  color: #555;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  padding-top: 25px;
  border-top: 1px solid #e0e0e0;
  
  ${media.mobile} {
    flex-direction: column;
  }
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
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

interface AIAnalysisCardProps {
  result: any;
  featureName: string;
  onReset: () => void;
}

const AIAnalysisCard: React.FC<AIAnalysisCardProps> = ({ result, featureName, onReset }) => {
  const { riceScore, reasoning, risks, acceptanceCriteria } = result;

  const handleSave = () => {
    // In a real app, this would save to a database or context
    const backlogItem = {
      id: Date.now().toString(),
      feature: featureName,
      score: riceScore,
      date: new Date().toISOString()
    };
    
    const existingBacklog = JSON.parse(localStorage.getItem('feature_backlog') || '[]');
    localStorage.setItem('feature_backlog', JSON.stringify([...existingBacklog, backlogItem]));
    
    alert('Feature saved to backlog!');
    onReset();
  };

  return (
    <Card>
      <Header>
        <FeatureName>{featureName}</FeatureName>
        <TotalScore>
          <ScoreLabel>RICE Score</ScoreLabel>
          <ScoreValue>{riceScore.total}</ScoreValue>
        </TotalScore>
      </Header>

      <Content>
        <Grid>
          <MetricBox>
            <MetricHeader>
              <MetricTitle>Reach</MetricTitle>
              <MetricValue>{riceScore.reach}</MetricValue>
            </MetricHeader>
            <Reasoning>{reasoning.reach}</Reasoning>
          </MetricBox>

          <MetricBox>
            <MetricHeader>
              <MetricTitle>Impact</MetricTitle>
              <MetricValue>{riceScore.impact}</MetricValue>
            </MetricHeader>
            <Reasoning>{reasoning.impact}</Reasoning>
          </MetricBox>

          <MetricBox>
            <MetricHeader>
              <MetricTitle>Confidence</MetricTitle>
              <MetricValue>{riceScore.confidence}%</MetricValue>
            </MetricHeader>
            <Reasoning>{reasoning.confidence}</Reasoning>
          </MetricBox>

          <MetricBox>
            <MetricHeader>
              <MetricTitle>Effort</MetricTitle>
              <MetricValue>{riceScore.effort} wks</MetricValue>
            </MetricHeader>
            <Reasoning>{reasoning.effort}</Reasoning>
          </MetricBox>
        </Grid>

        {risks && risks.length > 0 && (
          <Section>
            <SectionTitle><FaTriangleExclamation /> Risks & Dependencies</SectionTitle>
            <List>
              {risks.map((risk: string, index: number) => (
                <ListItem key={index}>{risk}</ListItem>
              ))}
            </List>
          </Section>
        )}

        {acceptanceCriteria && acceptanceCriteria.length > 0 && (
          <Section>
            <SectionTitle><FaCircleCheck /> Suggested Acceptance Criteria</SectionTitle>
            <List>
              {acceptanceCriteria.map((criteria: string, index: number) => (
                <ListItem key={index}>{criteria}</ListItem>
              ))}
            </List>
          </Section>
        )}

        <ActionButtons>
          <Button variant="primary" onClick={handleSave}>
            Save to Backlog
          </Button>
          <Button variant="secondary" onClick={onReset}>
            Analyze Another
          </Button>
        </ActionButtons>
      </Content>
    </Card>
  );
};

export default AIAnalysisCard;
