import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../styles/GlobalStyles';
import { FaFileLines, FaClipboard, FaFileCode } from 'react-icons/fa6';

const ExportContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  
  ${media.mobile} {
    flex-direction: column;
  }
`;

const ExportButton = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background: white;
  color: #555;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: #f8f9fa;
    border-color: #ccc;
    transform: translateY(-2px);
  }
`;

const ExportOptions: React.FC = () => {
  const getFeatures = () => {
    return JSON.parse(localStorage.getItem('feature_backlog') || '[]');
  };

  const handleExportCSV = () => {
    const features = getFeatures();
    if (features.length === 0) {
      alert('No features to export');
      return;
    }

    const headers = ['Feature', 'Reach', 'Impact', 'Confidence', 'Effort', 'RICE Score', 'Date'];
    const csvContent = [
      headers.join(','),
      ...features.map((f: any) => [
        `"${f.feature.replace(/"/g, '""')}"`,
        f.score.reach,
        f.score.impact,
        f.score.confidence,
        f.score.effort,
        f.score.total,
        `"${new Date(f.date).toLocaleDateString()}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'feature_backlog.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportJSON = () => {
    const features = getFeatures();
    if (features.length === 0) {
      alert('No features to export');
      return;
    }

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(features, null, 2));
    const link = document.createElement('a');
    link.setAttribute("href", dataStr);
    link.setAttribute("download", "feature_backlog.json");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleCopyClipboard = () => {
    const features = getFeatures();
    if (features.length === 0) {
      alert('No features to copy');
      return;
    }

    const text = features.map((f: any) => 
      `${f.feature}\nRICE Score: ${f.score.total} (R:${f.score.reach} I:${f.score.impact} C:${f.score.confidence}% E:${f.score.effort})\n`
    ).join('\n');

    navigator.clipboard.writeText(text);
    alert('Backlog copied to clipboard!');
  };

  return (
    <ExportContainer>
      <ExportButton onClick={handleExportCSV}>
        <FaFileLines /> Export CSV
      </ExportButton>
      <ExportButton onClick={handleExportJSON}>
        <FaFileCode /> Export JSON
      </ExportButton>
      <ExportButton onClick={handleCopyClipboard}>
        <FaClipboard /> Copy to Clipboard
      </ExportButton>
    </ExportContainer>
  );
};

export default ExportOptions;
