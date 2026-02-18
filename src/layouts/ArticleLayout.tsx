import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import RelatedArticles from '../components/blog/RelatedArticles';
import SEO from '../components/common/SEO';
import { media } from '../styles/GlobalStyles';

const ArticleContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 20px 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.8;
  color: #1f2937;

  ${media.mobile} {
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
  text-align: center;
`;

const Category = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1f2937;
  margin-bottom: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  ${media.tablet} {
    font-size: 2.4rem;
  }
  
  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #6b7280;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  ${media.mobile} {
    font-size: 1.1rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  font-size: 14px;
  color: #6b7280;
  
  ${media.mobile} {
    flex-direction: column;
    gap: 15px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const AuthorName = styled.span`
  font-weight: 600;
  color: #1f2937;
`;

const ReadTime = styled.span`
  background: #f3f4f6;
  padding: 6px 12px;
  border-radius: 12px;
  font-weight: 500;
`;

const PublishDate = styled.span`
  font-weight: 500;
`;

const HeroImageSection = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 80px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

  ${media.tablet} {
    height: 350px;
    margin-bottom: 60px;
  }
  
  ${media.mobile} {
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

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;
  
  ${media.mobile} {
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 60px 0 30px 0;
    color: #1f2937;
    
    ${media.mobile} {
      font-size: 1.6rem;
      margin: 40px 0 20px 0;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 40px 0 20px 0;
    color: #1f2937;
    
    ${media.mobile} {
      font-size: 1.3rem;
      margin: 30px 0 15px 0;
    }
  }

  p {
    margin-bottom: 24px;
  }

  blockquote {
    border-left: 4px solid #667eea;
    padding-left: 24px;
    margin: 40px 0;
    font-style: italic;
    color: #6b7280;
    background: #f8fafc;
    padding: 20px 24px;
    border-radius: 8px;
    
    ${media.mobile} {
      margin: 30px 0;
      padding: 16px 20px;
    }
  }

  ul, ol {
    margin: 24px 0;
    padding-left: 24px;
  }

  li {
    margin-bottom: 12px;
  }

  code {
    background: #f3f4f6;
    padding: 3px 6px;
    border-radius: 4px;
    font-family: 'SF Mono', Monaco, monospace;
    font-size: 0.9em;
  }

  pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 24px;
    border-radius: 12px;
    overflow-x: auto;
    margin: 32px 0;
    
    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 40px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const KeyTakeaways = styled.div`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
  margin: 60px 0;
  
  ${media.mobile} {
    padding: 24px;
    margin: 40px 0;
  }
`;

const TakeawaysTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '💡';
    font-size: 1.2rem;
  }
`;

const TakeawaysList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TakeawayItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
  font-weight: 500;
  color: #374151;
  
  &::before {
    content: '✓';
    color: #059669;
    font-weight: 700;
    margin-top: 2px;
  }
`;

const TagsSection = styled.div`
  margin: 60px 0;
  padding: 30px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  
  ${media.mobile} {
    margin: 40px 0;
    padding: 20px 0;
  }
`;

const TagsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  background: #f3f4f6;
  color: #374151;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
`;

const ShareSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 60px 0;
  padding: 30px;
  background: #f8fafc;
  border-radius: 16px;
  
  ${media.mobile} {
    flex-direction: column;
    gap: 15px;
    margin: 40px 0;
    padding: 20px;
  }
`;

const ShareTitle = styled.span`
  font-weight: 600;
  color: #374151;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 15px;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #667eea;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a67d8;
    transform: translateY(-2px);
  }
`;

interface ArticleLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: {
    src: string;
    alt: string;
  };
  keyTakeaways?: string[];
  tags: string[];
  articleId?: string;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  category,
  title,
  subtitle,
  author,
  date,
  readTime,
  heroImage,
  keyTakeaways,
  tags,
  articleId,
  children
}) => {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${title} - ${subtitle}`;

  return (
    <>
      <SEO
        title={title}
        description={subtitle}
        image={heroImage.src}
        url={articleId ? `/writings/${articleId}` : '/writings'}
        type="article"
        article={{
          publishedTime: date,
          author: author,
          tags: tags,
        }}
      />
      <ArticleContainer>
        <Breadcrumb>
          <Link to="/">Home</Link>
          {' > '}
          <Link to="/writings">Writings</Link>
          {' > '}
          <span>{title}</span>
        </Breadcrumb>

        <Header>
          <Category>{category}</Category>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>

          <ArticleMeta>
            <AuthorInfo>
              <AuthorAvatar>K</AuthorAvatar>
              <AuthorName>{author}</AuthorName>
            </AuthorInfo>
            <PublishDate>{date}</PublishDate>
            <ReadTime>{readTime}</ReadTime>
          </ArticleMeta>
        </Header>

        <HeroImageSection>
          <HeroImage src={heroImage.src} alt={heroImage.alt} loading="lazy" width={900} height={500} />
        </HeroImageSection>

        <Content>
          {children}
        </Content>

        {keyTakeaways && keyTakeaways.length > 0 && (
          <KeyTakeaways>
            <TakeawaysTitle>Key Takeaways</TakeawaysTitle>
            <TakeawaysList>
              {keyTakeaways.map((takeaway, index) => (
                <TakeawayItem key={index}>{takeaway}</TakeawayItem>
              ))}
            </TakeawaysList>
          </KeyTakeaways>
        )}

        <TagsSection>
          <TagsTitle>Topics</TagsTitle>
          <TagsList>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsList>
        </TagsSection>

        <ShareSection>
          <ShareTitle>Share this article</ShareTitle>
          <ShareButtons>
            <ShareButton
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Twitter"
            >
              <FaTwitter />
            </ShareButton>
            <ShareButton
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin />
            </ShareButton>
            <ShareButton
              href={`mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}`}
              aria-label="Share via Email"
            >
              <FaEnvelope />
            </ShareButton>
          </ShareButtons>
        </ShareSection>

        <RelatedArticles currentArticleId={articleId} />
      </ArticleContainer>
    </>
  );
};

export default ArticleLayout; 