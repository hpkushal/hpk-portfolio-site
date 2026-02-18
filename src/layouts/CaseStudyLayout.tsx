import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GetInTouchSection from '../components/home/GetInTouchSection';
import RelatedContent from '../components/blog/RelatedContent';
import SEO from '../components/common/SEO';

const CaseStudyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
  color: #1f2937;

  @media (max-width: 768px) {
    padding: 100px 20px 40px;
  }
`;

const Breadcrumb = styled.nav`
  margin-bottom: 40px;
  font-size: 14px;
  color: #6b7280;
  
  a {
    color: #6366f1;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 60px;
`;

const Category = styled.span`
  display: inline-block;
  background: #f3f4f6;
  color: #6b7280;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 30px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
`;

const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const AuthorDetails = styled.div`
  font-size: 14px;
  color: #6b7280;
`;

const HeroImageSection = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 60px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
    margin-bottom: 40px;
    border-radius: 15px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentBreakImage = styled.div`
  width: 100%;
  height: 280px;
  margin: 50px 0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    height: 200px;
    margin: 40px 0;
    border-radius: 12px;
  }
`;

const ImageCaption = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: #9ca3af;
  margin-top: -40px;
  margin-bottom: 50px;
  font-style: italic;
`;

const TLDRSection = styled(motion.div)`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 50px;
`;

const TLDRTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1f2937;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const KeyResults = styled.div`
  margin-bottom: 25px;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

const ResultBullet = styled.span`
  width: 6px;
  height: 6px;
  background: #6366f1;
  border-radius: 50%;
  flex-shrink: 0;
`;

const MetricsTable = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const MetricCard = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 18px;
`;

const MetricLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
`;

const MetricRow = styled.div<{ variant: 'before' | 'after' }>`
  color: ${props => props.variant === 'before' ? '#dc2626' : '#059669'};
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  margin-bottom: ${props => props.variant === 'before' ? '6px' : '0'};
  font-weight: ${props => props.variant === 'after' ? '600' : '400'};

  &::before {
    content: '${props => props.variant === 'before' ? '✕' : '✓'}';
    font-size: 0.75rem;
  }
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1f2937;
`;

const SectionContent = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #374151;

  p {
    margin-bottom: 16px;
  }

  strong {
    color: #1f2937;
    font-weight: 600;
  }

  ul {
    margin: 16px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
    }
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1f2937;
    margin: 28px 0 10px;
  }
`;

const Quote = styled.blockquote`
  border-left: 3px solid #6366f1;
  margin: 30px 0;
  font-style: italic;
  font-size: 1.05rem;
  color: #4b5563;
  background: #f9fafb;
  padding: 20px 24px;
  border-radius: 0 8px 8px 0;
`;

const QuoteAuthor = styled.div`
  margin-top: 12px;
  font-weight: 600;
  color: #1f2937;
  font-style: normal;
  font-size: 0.9rem;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;
`;

const Tag = styled.span`
  background: #f3f4f6;
  color: #4b5563;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
`;

// My Role Section
const MyRoleSection = styled(motion.div)`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 50px;
`;

const MyRoleTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1f2937;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MyRoleContent = styled.div`
  font-size: 0.95rem;
  line-height: 1.7;
  color: #374151;

  p {
    margin-bottom: 12px;
  }

  ul {
    margin: 12px 0;
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
    }
  }
`;

// Timeline Section
const TimelineSection = styled(motion.div)`
  margin-bottom: 50px;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 24px;

  &::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: #e5e7eb;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 24px;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: -22px;
    top: 6px;
    width: 10px;
    height: 10px;
    background: white;
    border: 2px solid #6366f1;
    border-radius: 50%;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelinePhase = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #6366f1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TimelineTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 4px 0;
`;

const TimelineDescription = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const TimelineDuration = styled.span`
  font-size: 0.8rem;
  color: #9ca3af;
`;

// Learnings Section
const LearningsSection = styled(motion.div)`
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 50px;
`;

const LearningsTitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #92400e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LearningsGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LearningCard = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  padding: 16px;
`;

const LearningNumber = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #f59e0b;
  color: white;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  line-height: 24px;
  margin-bottom: 10px;
`;

const LearningText = styled.p`
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.6;
`;

// Features Grid
const FeaturesGrid = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 24px;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #f9fafb;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #374151;
`;

const FeatureCheck = styled.span`
  color: #059669;
  font-weight: 600;
  flex-shrink: 0;
`;

interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  duration?: string;
}

interface Learning {
  text: string;
}

interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudyLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  heroImage: {
    src: string;
    alt: string;
  };
  tldr: {
    keyResults: string[];
    metrics: Array<{
      label: string;
      before: string;
      after: string;
    }>;
  };
  myRole?: {
    title: string;
    content: React.ReactNode;
  };
  timeline?: {
    title: string;
    steps: TimelineStep[];
  };
  customer: {
    title: string;
    content: React.ReactNode;
  };
  problemImage?: ContentImage;
  problem: {
    title: string;
    content: React.ReactNode;
    quote?: {
      text: string;
      author: string;
    };
  };
  solutionImage?: ContentImage;
  solution: {
    title: string;
    content: React.ReactNode;
    features?: string[];
    quote?: {
      text: string;
      author: string;
    };
  };
  impactImage?: ContentImage;
  impact: {
    title: string;
    content: React.ReactNode;
    quote?: {
      text: string;
      author: string;
    };
  };
  learnings?: {
    title: string;
    items: Learning[];
  };
  tags: string[];
  projectId?: string;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  category,
  title,
  subtitle,
  date,
  heroImage,
  tldr,
  myRole,
  timeline,
  customer,
  problemImage,
  problem,
  solutionImage,
  solution,
  impactImage,
  impact,
  learnings,
  tags,
  projectId
}) => {
  return (
    <>
      <SEO
        title={title}
        description={subtitle}
        image={heroImage.src}
        url={projectId ? `/projects/${projectId}` : '/projects'}
        type="article"
        article={{
          publishedTime: date,
          author: 'Kushal Parameshwara',
          tags: tags,
        }}
      />
      <CaseStudyContainer>
        <Breadcrumb>
          <Link
            to="/projects"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'
              });
            }}
          >
            ← Back to Projects
          </Link>
        </Breadcrumb>

        <Header>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>

          <AuthorInfo>
            <AuthorAvatar>KP</AuthorAvatar>
            <AuthorDetails>
              <div><strong>Kushal Parameshwara</strong></div>
              <div>{date}</div>
            </AuthorDetails>
          </AuthorInfo>
        </Header>

        <HeroImageSection>
          <HeroImage src={heroImage.src} alt={heroImage.alt} loading="lazy" width={800} height={400} />
        </HeroImageSection>

        <TLDRSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TLDRTitle>Summary</TLDRTitle>

          <KeyResults>
            {tldr.keyResults.map((result, index) => (
              <ResultItem key={index}>
                <ResultBullet />
                <span dangerouslySetInnerHTML={{ __html: result }} />
              </ResultItem>
            ))}
          </KeyResults>

          <MetricsTable>
            {tldr.metrics.map((metric, index) => (
              <MetricCard key={index}>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricRow variant="before">{metric.before}</MetricRow>
                <MetricRow variant="after">{metric.after}</MetricRow>
              </MetricCard>
            ))}
          </MetricsTable>
        </TLDRSection>

        {myRole && (
          <MyRoleSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MyRoleTitle>{myRole.title}</MyRoleTitle>
            <MyRoleContent>{myRole.content}</MyRoleContent>
          </MyRoleSection>
        )}

        {timeline && (
          <TimelineSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <SectionTitle>{timeline.title}</SectionTitle>
            <TimelineContainer>
              {timeline.steps.map((step, index) => (
                <TimelineItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <TimelinePhase>{step.phase}</TimelinePhase>
                  <TimelineTitle>{step.title}</TimelineTitle>
                  <TimelineDescription>{step.description}</TimelineDescription>
                  {step.duration && <TimelineDuration>{step.duration}</TimelineDuration>}
                </TimelineItem>
              ))}
            </TimelineContainer>
          </TimelineSection>
        )}

        <Section>
          <SectionTitle>{customer.title}</SectionTitle>
          <SectionContent>{customer.content}</SectionContent>
        </Section>

        {problemImage && (
          <>
            <ContentBreakImage>
              <img src={problemImage.src} alt={problemImage.alt} loading="lazy" width={800} height={280} />
            </ContentBreakImage>
            {problemImage.caption && <ImageCaption>{problemImage.caption}</ImageCaption>}
          </>
        )}

        <Section>
          <SectionTitle>{problem.title}</SectionTitle>
          <SectionContent>{problem.content}</SectionContent>
          {problem.quote && (
            <Quote>
              "{problem.quote.text}"
              <QuoteAuthor>- {problem.quote.author}</QuoteAuthor>
            </Quote>
          )}
        </Section>

        {solutionImage && (
          <>
            <ContentBreakImage>
              <img src={solutionImage.src} alt={solutionImage.alt} loading="lazy" width={800} height={280} />
            </ContentBreakImage>
            {solutionImage.caption && <ImageCaption>{solutionImage.caption}</ImageCaption>}
          </>
        )}

        <Section>
          <SectionTitle>{solution.title}</SectionTitle>
          <SectionContent>{solution.content}</SectionContent>
          {solution.features && (
            <FeaturesGrid>
              {solution.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureCheck>✓</FeatureCheck>
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeaturesGrid>
          )}
          {solution.quote && (
            <Quote>
              "{solution.quote.text}"
              <QuoteAuthor>- {solution.quote.author}</QuoteAuthor>
            </Quote>
          )}
        </Section>

        {impactImage && (
          <>
            <ContentBreakImage>
              <img src={impactImage.src} alt={impactImage.alt} loading="lazy" width={800} height={280} />
            </ContentBreakImage>
            {impactImage.caption && <ImageCaption>{impactImage.caption}</ImageCaption>}
          </>
        )}

        <Section>
          <SectionTitle>{impact.title}</SectionTitle>
          <SectionContent>{impact.content}</SectionContent>
          {impact.quote && (
            <Quote>
              "{impact.quote.text}"
              <QuoteAuthor>- {impact.quote.author}</QuoteAuthor>
            </Quote>
          )}
        </Section>

        {learnings && (
          <LearningsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LearningsTitle>{learnings.title}</LearningsTitle>
            <LearningsGrid>
              {learnings.items.map((learning, index) => (
                <LearningCard key={index}>
                  <LearningNumber>{index + 1}</LearningNumber>
                  <LearningText>{learning.text}</LearningText>
                </LearningCard>
              ))}
            </LearningsGrid>
          </LearningsSection>
        )}

        <TagList>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagList>

        {projectId && <RelatedContent projectId={projectId} />}
      </CaseStudyContainer>

      <GetInTouchSection />
    </>
  );
};

export default CaseStudyLayout;
