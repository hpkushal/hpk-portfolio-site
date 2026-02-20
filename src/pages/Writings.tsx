import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaRss } from 'react-icons/fa';
import { media } from '../styles/GlobalStyles';
import { articles } from '../data/articles';
import SEO from '../components/common/SEO';

// Animations
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
const WritingsContainer = styled.div`
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

const HeroTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
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
  max-width: 700px;
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

// Articles Grid
const ArticlesGrid = styled.div`
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

const ArticleCard = styled(Link)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  display: block;
  text-decoration: none;
  color: inherit;
  animation: ${fadeInUp} 0.8s ease-out;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ArticleImageBase = styled.div<{ backgroundImage: string; isLoaded: boolean }>`
  height: 250px;
  background: ${props => props.isLoaded
    ? `linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)), url(${props.backgroundImage})`
    : 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ArticleCard}:hover &::before {
    opacity: 1;
  }
`;

// Lazy loading wrapper component for article images
const LazyArticleImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Preload the image
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setCurrentSrc(src);
              setIsLoaded(true);
            };
            img.onerror = () => {
              setCurrentSrc(src);
              setIsLoaded(true);
            };
            observer.unobserve(element);
          }
        });
      },
      { rootMargin: '200px', threshold: 0 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [src]);

  return (
    <ArticleImageBase
      ref={elementRef}
      backgroundImage={currentSrc}
      isLoaded={isLoaded}
      role="img"
      aria-label={alt}
    />
  );
};

const ArticleContent = styled.div`
  padding: 30px;
  
  ${media.mobile} {
    padding: 20px;
  }
`;

const ArticleCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.3;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ArticleExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.85rem;
  color: #888;
`;

const ReadTime = styled.span`
  background: #f8f9fa;
  padding: 4px 8px;
  border-radius: 8px;
`;

const PublishDate = styled.span``;

const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background: #f8f9fa;
  color: #666;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const RssCTAContainer = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: linear-gradient(90deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  border: 1px solid #eee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  animation: ${fadeInUp} 0.8s ease-out;

  ${media.tablet} {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

const RssCTAText = styled.div`
  flex: 1;
`;

const RssCTATitle = styled.h4`
  font-size: 1.1rem;
  color: #333;
  margin: 0 0 5px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  ${media.tablet} {
    justify-content: center;
  }
`;

const RssCTAQuote = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
  margin: 0;
`;

const RssButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f26522;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #e35a1c;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(242, 101, 34, 0.3);
  }

  svg {
    font-size: 1.1rem;
  }
`;

const categories = ['All', 'AI & Technology', 'Business & Strategy', 'Industry Evolution', 'Society & Culture', 'Product Management'];

const Writings: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  // Sort articles by date (descending)
  const sortedArticles = [...filteredArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate dynamic stats
  const totalArticles = articles.length;
  const totalCategories = categories.length - 1; // Subtract 'All' category
  const estimatedWords = totalArticles * 4000; // Average 4k words per article
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SEO
        title="Writings"
        description="Insights on AI, Product Management, Business Strategy, and Technology. Explore articles on AI transformation, growth strategies, and the future of work by Kushal HP."
        url="/writings"
      />
      <WritingsContainer>
        <ContentWrapper>
          <HeroSection>
            <HeroTitleContainer>
              <HeroTitle>Writings</HeroTitle>
            </HeroTitleContainer>
            <HeroSubtitle>
              Thoughts on technology, business, and the forces shaping our digital future.
              Analysis, observations, and insights from the intersection of tech and society.
            </HeroSubtitle>

            <StatsGrid>
              <StatCard>
                <StatNumber>{totalArticles}</StatNumber>
                <StatLabel>Articles</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{totalCategories}</StatNumber>
                <StatLabel>Categories</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{Math.round(estimatedWords / 1000)}k+</StatNumber>
                <StatLabel>Words</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{currentYear}</StatNumber>
                <StatLabel>Active Year</StatLabel>
              </StatCard>
            </StatsGrid>
          </HeroSection>

          <FilterSection>
            <FilterTitle>Explore by Category</FilterTitle>
            <FilterButtons>
              {categories.map((category) => (
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

          <ArticlesGrid>
            {sortedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                to={`/writings/${article.id}`}
              >
                <LazyArticleImage src={article.image} alt={`Featured image for article: ${article.title}`} />
                <ArticleContent>
                  <ArticleCategory>{article.category}</ArticleCategory>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                  <ArticleMeta>
                    <PublishDate>{article.date}</PublishDate>
                    <ReadTime>{article.readTime}</ReadTime>
                  </ArticleMeta>
                  <ArticleTags>
                    {article.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ArticleTags>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>

          <RssCTAContainer>
            <RssCTAText>
              <RssCTATitle>
                <FaRss style={{ color: '#f26522' }} /> Subscribe via RSS
              </RssCTATitle>
              <RssCTAQuote>
                "For the refined digital minimalist who trusts valid XML more than a capricious algorithm."
              </RssCTAQuote>
            </RssCTAText>
            <RssButton
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get the Feed
            </RssButton>
          </RssCTAContainer>
        </ContentWrapper>
      </WritingsContainer>
    </>
  );
};

export default Writings;
