import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExportOptions from './ExportOptions';
import { FaTrash } from 'react-icons/fa6';

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;

const SearchInput = styled.input`
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  min-width: 300px;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SortSelect = styled.select`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Th = styled.th`
  text-align: left;
  padding: 15px;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 600;
  color: #333;
`;

const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #f0f0f0;
  color: #555;
`;

const ScoreBadge = styled.span`
  background: #eef2ff;
  color: #667eea;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 700;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #ff6b6b;
  cursor: pointer;
  padding: 5px;
  
  &:hover {
    background: #fff5f5;
    border-radius: 4px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #999;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px dashed #e0e0e0;
`;

const FeatureBacklog: React.FC = () => {
  const [features, setFeatures] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('score-desc');

  useEffect(() => {
    const storedFeatures = JSON.parse(localStorage.getItem('feature_backlog') || '[]');
    setFeatures(storedFeatures);
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feature?')) {
      const updatedFeatures = features.filter(f => f.id !== id);
      setFeatures(updatedFeatures);
      localStorage.setItem('feature_backlog', JSON.stringify(updatedFeatures));
    }
  };

  const filteredFeatures = features
    .filter(f => f.feature.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      switch (sortBy) {
        case 'score-desc':
          return b.score.total - a.score.total;
        case 'score-asc':
          return a.score.total - b.score.total;
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        default:
          return 0;
      }
    });

  if (features.length === 0) {
    return (
      <EmptyState>
        <h3>Your backlog is empty</h3>
        <p>Use the "Add Features" tab to analyze and save features.</p>
      </EmptyState>
    );
  }

  return (
    <Container>
      <Toolbar>
        <SearchInput 
          placeholder="Search features..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SortSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="score-desc">Highest Score</option>
          <option value="score-asc">Lowest Score</option>
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
        </SortSelect>
      </Toolbar>

      <div style={{ overflowX: 'auto' }}>
        <Table>
          <thead>
            <tr>
              <Th>Feature Name</Th>
              <Th>Reach</Th>
              <Th>Impact</Th>
              <Th>Confidence</Th>
              <Th>Effort</Th>
              <Th>RICE Score</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredFeatures.map(feature => (
              <tr key={feature.id}>
                <Td style={{ fontWeight: 500 }}>{feature.feature}</Td>
                <Td>{feature.score.reach}</Td>
                <Td>{feature.score.impact}</Td>
                <Td>{feature.score.confidence}%</Td>
                <Td>{feature.score.effort} wks</Td>
                <Td><ScoreBadge>{feature.score.total}</ScoreBadge></Td>
                <Td>
                  <DeleteButton onClick={() => handleDelete(feature.id)}>
                    <FaTrash />
                  </DeleteButton>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
         <ExportOptions />
      </div>
    </Container>
  );
};

export default FeatureBacklog;
