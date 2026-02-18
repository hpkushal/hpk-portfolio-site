import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';
import { projectsData, projectCategories, Project } from '../data/projects';
import SEO from '../components/common/SEO';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main Container
const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Hero Section
const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 80px;
  
  ${media.mobile} {
    margin-bottom: 60px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  ${media.tablet} {
    font-size: 2.8rem;
  }
  
  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  
  ${media.mobile} {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const StatCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 10px;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Filter Section
const FilterSection = styled.div`
  margin-bottom: 60px;
  
  ${media.mobile} {
    margin-bottom: 40px;
  }
`;

const FilterTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  
  ${media.mobile} {
    gap: 10px;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e0e0e0'};
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    border-color: #667eea;
  }
  
  ${media.mobile} {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

// Projects Grid
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
  
  ${media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
  }
  
  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 60px;
  }
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectHeader = styled.div`
  padding: 30px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectContent = styled.div`
  padding: 30px;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
  font-size: 0.95rem;
`;

const ProjectMetrics = styled.div`
  margin-bottom: 25px;
`;

const MetricItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 10px;
`;

const MetricLabel = styled.span`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`;

const MetricValue = styled.span`
  color: #667eea;
  font-weight: 700;
  font-size: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
`;

const TechTag = styled.span`
  background: #e3f2fd;
  color: #1976d2;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 15px;
`;

const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  ${props => props.variant === 'primary' ? `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  ` : `
    background: white;
    color: #667eea;
    border: 2px solid #667eea;
    
    &:hover {
      background: #667eea;
      color: white;
    }
  `}
`;

// Modal for detailed case studies
const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  animation: ${scaleIn} 0.3s ease-out;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const ModalHeader = styled.div`
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  
  ${media.mobile} {
    font-size: 1.5rem;
  }
`;

const ModalBody = styled.div`
  padding: 30px;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ModalSectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #333;
  margin: 25px 0 15px;
  display: flex;
  align-items: center;
  
  &:first-child {
    margin-top: 0;
  }
  
  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin-right: 10px;
    border-radius: 2px;
  }
`;

const ModalText = styled.p`
  color: #555;
  line-height: 1.7;
  margin-bottom: 15px;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 20;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(90deg);
  }
  
  ${media.mobile} {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    font-size: 1.2rem;
  }
`;

// Project data removed - imported from src/data/projects.ts

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    revenue: 0,
    conversions: 0,
    efficiency: 0
  });

  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate stats
          let progress = 0;
          const timer = setInterval(() => {
            progress += 1;
            setAnimatedStats({
              projects: Math.floor(50 * (progress / 100)),
              revenue: Math.floor(2 * (progress / 100)),
              conversions: Math.floor(35 * (progress / 100)),
              efficiency: Math.floor(50 * (progress / 100))
            });

            if (progress >= 100) {
              clearInterval(timer);
            }
          }, 20);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === "All Projects"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateToCaseStudy = (url: string) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    navigate(url);
  };

  return (
    <>
      <SEO
        title="Projects"
        description="Case studies and project portfolio showcasing Product Management, AI implementation, Marketing Automation, and Digital Transformation initiatives by Kushal HP."
        url="/projects"
      />
      <ProjectsContainer>
        <ContentWrapper>
          <HeroSection>
            <HeroTitle>Project Portfolio</HeroTitle>
            <HeroSubtitle>
              A showcase of product strategy, digital transformation, and growth optimization projects that have driven measurable business impact.
            </HeroSubtitle>

            <StatsGrid ref={statsRef}>
              <StatCard>
                <StatNumber>{animatedStats.projects}+</StatNumber>
                <StatLabel>Projects Delivered</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>${animatedStats.revenue}M+</StatNumber>
                <StatLabel>Revenue Generated</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{animatedStats.conversions}%</StatNumber>
                <StatLabel>Avg Conversion Improvement</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{animatedStats.efficiency}%</StatNumber>
                <StatLabel>Process Efficiency Gains</StatLabel>
              </StatCard>
            </StatsGrid>
          </HeroSection>

          <FilterSection>
            <FilterTitle>Filter by Category</FilterTitle>
            <FilterButtons>
              {projectCategories.map(category => (
                <FilterButton
                  key={category}
                  active={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </FilterButton>
              ))}
            </FilterButtons>
          </FilterSection>

          <ProjectsGrid>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id}>
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectCategory>{project.category}</ProjectCategory>
                </ProjectHeader>

                <ProjectContent>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <ProjectMetrics>
                    {project.metrics.map((metric, index) => (
                      <MetricItem key={index}>
                        <MetricLabel>{metric.label}</MetricLabel>
                        <MetricValue>{metric.value}</MetricValue>
                      </MetricItem>
                    ))}
                  </ProjectMetrics>

                  <TechStack>
                    {project.techStack.map((tech, index) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </TechStack>

                  <ProjectActions>
                    {project.caseStudyUrl ? (
                      <ActionButton
                        variant="primary"
                        onClick={() => navigateToCaseStudy(project.caseStudyUrl)}
                      >
                        View Case Study
                      </ActionButton>
                    ) : (
                      <ActionButton
                        variant="primary"
                        onClick={() => openModal(project)}
                      >
                        View Details
                      </ActionButton>
                    )}
                    <ActionButton
                      variant="secondary"
                      onClick={() => openModal(project)}
                    >
                      Quick View
                    </ActionButton>
                  </ProjectActions>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </ContentWrapper>


        <Modal isOpen={!!selectedProject} onClick={closeModal}>
          {selectedProject && (
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>×</CloseButton>
              <ModalHeader>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ProjectCategory>{selectedProject.category}</ProjectCategory>
              </ModalHeader>
              <ModalBody>
                <ModalSectionTitle>Challenge</ModalSectionTitle>
                <ModalText>{selectedProject.caseStudy.challenge}</ModalText>

                <ModalSectionTitle>Solution</ModalSectionTitle>
                <ModalText>{selectedProject.caseStudy.solution}</ModalText>

                <ModalSectionTitle>Results</ModalSectionTitle>
                <ModalText>{selectedProject.caseStudy.results}</ModalText>

                <ModalSectionTitle>Key Metrics</ModalSectionTitle>
                <ProjectMetrics>
                  {selectedProject.metrics.map((metric, index) => (
                    <MetricItem key={index}>
                      <MetricLabel>{metric.label}</MetricLabel>
                      <MetricValue>{metric.value}</MetricValue>
                    </MetricItem>
                  ))}
                </ProjectMetrics>

                <ModalSectionTitle>Technology Stack</ModalSectionTitle>
                <TechStack>
                  {selectedProject.techStack.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ModalBody>
            </ModalContent>
          )}
        </Modal>
      </ProjectsContainer>
    </>
  );
};

export default Projects; 