import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';
import { getProjectRelationships, getToolRelationships } from '../data/contentRelationships';
import { articles } from '../data/articles';
import { projectsData } from '../data/projects';
import { tools } from '../data/tools';

const RelatedContentContainer = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 60px 20px;
  border-radius: 20px;
  margin: 40px 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: #1f2937;
  
  ${media.mobile} {
    font-size: 1.6rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.div`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContentSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #374151;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  
  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const ContentCard = styled(Link)`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    border-color: #667eea;
  }
`;

const CardType = styled.span<{ variant: 'article' | 'project' | 'tool' }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => {
    switch (props.variant) {
      case 'article':
        return `
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        `;
      case 'project':
        return `
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: white;
        `;
      case 'tool':
        return `
          background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%);
          color: white;
        `;
    }
  }}
`;

const CardTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const CardExcerpt = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: #9ca3af;
  margin-top: 12px;
`;

interface RelatedContentProps {
  projectId?: string;
  toolId?: string;
}

const RelatedContent: React.FC<RelatedContentProps> = ({ projectId, toolId }) => {
  // Get relationships based on whether it's a project or tool
  const relationships = projectId 
    ? getProjectRelationships(projectId)
    : toolId 
    ? getToolRelationships(toolId)
    : null;

  if (!relationships) {
    return null;
  }

  // Get related articles
  const relatedArticles = (relationships.relatedArticles || [])
    .map(id => articles.find(a => a.id === id))
    .filter(Boolean)
    .slice(0, 3);

  // Get related projects
  const relatedProjects = (relationships.relatedProjects || [])
    .map(id => {
      const projectSlugMap: Record<string, number> = {
        'ai-prototyping-framework': 1,
        'multi-brand-launch': 2,
        'loyalty-program-platform': 3,
        'ab-testing-framework': 4,
        'healthcare-platform': 5,
        'performance-marketing-optimization': 6,
        'marketing-automation': 7,
        'api-integration-suite': 8
      };
      const projectIndex = projectSlugMap[id];
      return projectsData.find(p => p.id === projectIndex);
    })
    .filter(Boolean)
    .slice(0, 2);

  // Get related tools
  const relatedTools = (relationships.relatedTools || [])
    .map(id => tools.find(t => t.id === id))
    .filter(Boolean)
    .slice(0, 3);

  const hasContent = relatedArticles.length > 0 || relatedProjects.length > 0 || relatedTools.length > 0;

  if (!hasContent) {
    return null;
  }

  return (
    <RelatedContentContainer>
      <SectionHeader>
        <SectionTitle>Related Content</SectionTitle>
        <SectionSubtitle>
          Explore more insights, case studies, and tools related to this work
        </SectionSubtitle>
      </SectionHeader>

      {relatedArticles.length > 0 && (
        <ContentSection>
          <ContentSectionTitle>Related Articles</ContentSectionTitle>
          <ContentGrid>
            {relatedArticles.map((article: any) => (
              <ContentCard key={article.id} to={`/writings/${article.id}`}>
                <CardType variant="article">{article.category}</CardType>
                <CardTitle>{article.title}</CardTitle>
                <CardExcerpt>{article.excerpt}</CardExcerpt>
                <CardMeta>
                  <span>{article.readTime}</span>
                </CardMeta>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      )}

      {relatedProjects.length > 0 && (
        <ContentSection>
          <ContentSectionTitle>Related Case Studies</ContentSectionTitle>
          <ContentGrid>
            {relatedProjects.map((project: any) => {
              const projectSlugReverseMap: Record<number, string> = {
                1: 'ai-prototyping-framework',
                2: 'multi-brand-launch',
                3: 'loyalty-program-platform',
                4: 'ab-testing-framework',
                5: 'healthcare-platform',
                6: 'performance-marketing-optimization',
                7: 'marketing-automation',
                8: 'api-integration-suite'
              };
              const slug = projectSlugReverseMap[project.id];
              return (
                <ContentCard key={project.id} to={`/projects/${slug}`}>
                  <CardType variant="project">{project.category}</CardType>
                  <CardTitle>{project.title}</CardTitle>
                  <CardExcerpt>{project.description}</CardExcerpt>
                  <CardMeta>
                    <span>{project.impact}</span>
                  </CardMeta>
                </ContentCard>
              );
            })}
          </ContentGrid>
        </ContentSection>
      )}

      {relatedTools.length > 0 && (
        <ContentSection>
          <ContentSectionTitle>Try These Tools</ContentSectionTitle>
          <ContentGrid>
            {relatedTools.map((tool: any) => (
              <ContentCard key={tool.id} to={tool.route}>
                <CardType variant="tool">AI Tool</CardType>
                <CardTitle>{tool.title}</CardTitle>
                <CardExcerpt>{tool.description}</CardExcerpt>
              </ContentCard>
            ))}
          </ContentGrid>
        </ContentSection>
      )}
    </RelatedContentContainer>
  );
};

export default RelatedContent;
