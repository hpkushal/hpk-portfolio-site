import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles/GlobalStyles';
import { getArticleRelationships } from '../../data/contentRelationships';

const RelatedArticlesContainer = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 80px 20px;
  border-radius: 20px;
  margin: 60px 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: #1f2937;
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  
  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ArticleCard = styled(Link)`
  background: white;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #667eea;
  }
`;

const ArticleCategory = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  line-height: 1.4;
  
  ${media.mobile} {
    font-size: 1.2rem;
  }
`;

const ArticleExcerpt = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #9ca3af;
`;

const ReadTime = styled.span`
  background: #f3f4f6;
  padding: 4px 8px;
  border-radius: 8px;
`;

const PublishDate = styled.span``;

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

interface RelatedArticlesProps {
  currentArticleId?: string;
}

// All available articles - synced with individual article pages
const allArticles: Article[] = [
  {
    id: 'marketplaces-vs-agents',
    title: 'Marketplaces vs Agents: Who Owns Distribution When the Interface Is a Chat?',
    excerpt: 'As chat becomes the default UI, marketplaces risk becoming inventory providers—unless they win the routing layer. Here’s what distribution means in an agent-first world.',
    category: 'Business & Strategy',
    readTime: '12 min read',
    date: 'Jan 14, 2026'
  },
  {
    id: 'pm-os-2025',
    title: 'My PM Operating System for 2025: Working With AI as a True Partner',
    excerpt: 'After a year of experimenting, here\'s how I actually work with LLMs: the delegation framework, decision-making rituals, and hard lessons learned.',
    category: 'Product Management',
    readTime: '14 min read',
    date: 'Nov 26, 2025'
  },
  {
    id: 'great-ai-model-commoditization',
    title: 'The Great AI Model Commoditization: Why I Stopped Caring About GPT-5',
    excerpt: 'When every model performs within 5% of every other model, the real competition moves elsewhere. Here\'s where I\'m looking now.',
    category: 'AI & Technology',
    readTime: '11 min read',
    date: 'Nov 18, 2025'
  },
  {
    id: 'ai-governance-gap',
    title: 'The AI Governance Gap: What I\'ve Learned About Regulation That\'s Already Obsolete',
    excerpt: 'After watching governments struggle to keep up with AI, I\'ve concluded that companies must build their own governance frameworks.',
    category: 'AI & Technology',
    readTime: '11 min read',
    date: 'Nov 20, 2025'
  },
  {
    id: 'multimodal-ai-end-of-specialized-software',
    title: 'The Day I Realized Specialized Software Was Dying',
    excerpt: 'I spent 15 years mastering Photoshop, Premiere, and a dozen other tools. Then multimodal AI made most of that expertise optional.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'Nov 15, 2025'
  },
  {
    id: 'ai-infrastructure-wars',
    title: 'The AI Infrastructure Wars: Why I\'m Watching the Computing Layer More Than Models',
    excerpt: 'Everyone\'s talking about GPT-5 and Claude 4. But the real battle for AI\'s future is being fought at the infrastructure level.',
    category: 'AI & Technology',
    readTime: '13 min read',
    date: 'Nov 10, 2025'
  },
  {
    id: 'platform-economics-unbundling-rebundling',
    title: 'The Pattern That Keeps Repeating: Unbundling and Rebundling',
    excerpt: 'After 15 years of watching platforms rise and fall, I\'ve learned to recognize the cycle. Here\'s how to spot where we are and where opportunity lies.',
    category: 'Business & Strategy',
    readTime: '14 min read',
    date: 'Nov 15, 2025'
  },
  {
    id: 'creator-economy-maturation',
    title: 'The Creator Economy Grows Up: What I\'ve Learned About Building a Sustainable Creator Business',
    excerpt: 'After watching hundreds of creators rise and fall, here\'s what separates those who last from those who burn out.',
    category: 'Industry Evolution',
    readTime: '11 min read',
    date: 'Nov 5, 2025'
  },
  {
    id: 'attention-economy-backlash',
    title: 'The Attention Economy Backlash: Why I\'m Betting on Digital Minimalism',
    excerpt: 'After years of watching attention capture dominate tech, I\'m convinced the tide is turning. Here\'s why.',
    category: 'Society & Culture',
    readTime: '10 min read',
    date: 'Nov 12, 2025'
  },
  {
    id: 'ai-alignment-control-problem',
    title: 'Why I Think About AI Alignment Differently Now',
    excerpt: 'After diving deep into this challenge, I\'ve realized the problem isn\'t just technical. It\'s philosophical, social, and deeply human.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'Nov 15, 2025'
  },
  {
    id: 'ai-regulation-innovation-balance',
    title: 'AI Regulation: My Take on the Innovation vs. Safety Debate',
    excerpt: 'After watching different jurisdictions try different approaches, here\'s what I think actually works.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'Nov 8, 2025'
  },
  {
    id: 'consulting-industry-ai-disruption',
    title: 'The Consulting Industry\'s AI Reckoning: What I\'m Seeing Inside the Firms',
    excerpt: '40% of consulting work can now be augmented or automated by AI. Here\'s what that means for the trillion-dollar industry.',
    category: 'Business & Strategy',
    readTime: '12 min read',
    date: 'Nov 22, 2025'
  },
  {
    id: 'growth-hacking-maturation',
    title: 'From Growth Hacks to Growth Science: My Journey',
    excerpt: 'I spent years chasing viral tricks before realizing the real magic is in systematic, data-driven growth engines.',
    category: 'Business & Strategy',
    readTime: '10 min read',
    date: 'Nov 28, 2025'
  },
  {
    id: 'pricing-psychology-revolution',
    title: 'What I Learned Rebuilding Our Entire Pricing Strategy',
    excerpt: 'We were leaving 40% of revenue on the table. Not because our product was wrong, but because our pricing psychology was stuck in 2015.',
    category: 'Business & Strategy',
    readTime: '13 min read',
    date: 'Nov 18, 2025'
  },
  {
    id: 'ai-winter-that-never-came',
    title: 'The AI Winter That Never Came: Why I\'m Convinced This Time Is Different',
    excerpt: 'History predicted another bust. The fundamentals say otherwise. Here\'s what I\'m seeing that changes everything.',
    category: 'AI & Technology',
    readTime: '10 min read',
    date: 'Nov 15, 2025'
  },
  {
    id: 'beyond-chatgpt-enterprise-ai',
    title: 'Beyond ChatGPT: What Enterprise AI Actually Looks Like',
    excerpt: 'The real AI revolution is happening in back offices and factory floors, not in demo videos. Here\'s what I\'m seeing.',
    category: 'AI & Technology',
    readTime: '12 min read',
    date: 'Nov 22, 2025'
  },
  {
    id: 'great-ai-talent-war',
    title: 'The Great AI Talent War: Why I\'m Watching Where People Go, Not What Models Release',
    excerpt: 'Talent flow predicts industry direction better than product announcements. Here\'s what the migration patterns reveal.',
    category: 'AI & Technology',
    readTime: '10 min read',
    date: 'Nov 18, 2025'
  },
  {
    id: 'venture-capital-new-playbook',
    title: 'The VC Playbook Has Changed Forever: What I\'ve Learned',
    excerpt: 'After watching the 2022-2024 correction from the inside, here\'s what I know about how VCs actually evaluate startups now.',
    category: 'Business & Strategy',
    readTime: '11 min read',
    date: 'Nov 8, 2025'
  },
  {
    id: 'subscription-economy-next-chapter',
    title: 'What I Learned Building Subscription Businesses for a Decade',
    excerpt: 'The subscription economy has matured. The playbook that worked in 2015 doesn\'t work in 2025. Here\'s what actually drives retention and growth now.',
    category: 'Industry Evolution',
    readTime: '13 min read',
    date: 'Nov 14, 2025'
  },
  {
    id: 'remote-work-settlement',
    title: 'The Remote Work Settlement: What I Learned Managing Distributed Teams for 5 Years',
    excerpt: 'After the RTO wars, the hybrid model won. But making it work requires more intentionality than most leaders realize.',
    category: 'Business & Strategy',
    readTime: '12 min read',
    date: 'Nov 25, 2025'
  },
  {
    id: 'death-of-ten-year-business-plan',
    title: 'The Death of the 10-Year Business Plan: Why I Stopped Making Long-Term Predictions',
    excerpt: 'In a world where AI can disrupt industries in 12 months, rigid planning is a liability. Here\'s what I do instead.',
    category: 'Business & Strategy',
    readTime: '11 min read',
    date: 'Nov 12, 2025'
  },







];

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentArticleId }) => {
  // Get semantically related articles based on content relationships
  const getRelatedArticles = (): Article[] => {
    if (!currentArticleId) {
      // Fallback to random if no current article
      const shuffled = [...allArticles].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 3);
    }

    // Get semantic relationships for this article
    const relationships = getArticleRelationships(currentArticleId);

    if (relationships?.relatedArticles && relationships.relatedArticles.length > 0) {
      // Get articles that match the semantic relationships
      const semanticRelated = relationships.relatedArticles
        .map(id => allArticles.find(a => a.id === id))
        .filter((a): a is Article => a !== undefined);

      if (semanticRelated.length >= 3) {
        return semanticRelated.slice(0, 3);
      }

      // If we have some semantic matches but not enough, fill with others
      const otherArticles = allArticles.filter(
        article => article.id !== currentArticleId &&
          !relationships.relatedArticles?.includes(article.id)
      );
      const shuffledOthers = [...otherArticles].sort(() => Math.random() - 0.5);
      return [...semanticRelated, ...shuffledOthers].slice(0, 3);
    }

    // Fallback to filtering out current and returning random
    const otherArticles = allArticles.filter(article => article.id !== currentArticleId);
    const shuffled = [...otherArticles].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  return (
    <RelatedArticlesContainer>
      <Container>
        <SectionHeader>
          <SectionTitle>Related Articles</SectionTitle>
          <SectionSubtitle>
            Continue exploring insights on technology, business, and innovation
          </SectionSubtitle>
        </SectionHeader>

        <ArticlesGrid>
          {relatedArticles.map((article) => (
            <ArticleCard key={article.id} to={`/writings/${article.id}`}>
              <ArticleCategory>{article.category}</ArticleCategory>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ArticleMeta>
                <PublishDate>{article.date}</PublishDate>
                <ReadTime>{article.readTime}</ReadTime>
              </ArticleMeta>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </Container>
    </RelatedArticlesContainer>
  );
};

export default RelatedArticles; 