import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../styles/GlobalStyles';
import { IconType } from 'react-icons';
import {
  FaFileLines,
  FaChartSimple,
  FaMapLocationDot,
  FaRegComments,
  FaUsers,
  FaBullseye,
  FaRocket,
  FaPenToSquare,
  FaBolt,
  FaPalette,
  FaArrowTrendUp,
  FaBrain,
  FaRobot,
  FaVideo,
  FaMagnifyingGlass,
  FaCamera,
  FaMicrophone,
  FaGlobe,
  FaGraduationCap,
  FaArrowUpRightFromSquare,
  FaTerminal,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaGithub
} from 'react-icons/fa6';

// Wrapper component to fix React 19 compatibility with react-icons
const Icon: React.FC<{ icon: IconType; className?: string }> = ({ icon: IconComponent, className }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return React.createElement(IconComponent as any, { className });
};

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

const ResourcesContainer = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 120px;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px;
`;

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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  
  ${media.mobile} {
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }

  ${media.mobile} {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  
  ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ResourceCard = styled.a<{ disabled?: boolean }>`
  display: block;
  text-decoration: none;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  position: relative;
  overflow: hidden;
  opacity: ${props => props.disabled ? 0.8 : 1};
  
  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translateY(-5px)'};
    box-shadow: ${props => props.disabled ? '0 10px 30px rgba(0, 0, 0, 0.05)' : '0 20px 40px rgba(0, 0, 0, 0.1)'};
    border-color: ${props => props.disabled ? '#f0f0f0' : '#667eea'};
    
    ${props => !props.disabled && `
      svg {
        transform: scale(1.1);
        color: #667eea;
      }
    `}
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #667eea;
  
  svg {
    transition: all 0.3s ease;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const DownloadLabel = styled.span<{ disabled?: boolean }>`
  color: ${props => props.disabled ? '#999' : '#667eea'};
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
    opacity: ${props => props.disabled ? 0 : 1};
  }
  
  ${ResourceCard}:hover &::after {
    transform: translateX(5px);
  }
`;

const BookGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 40px;
`;

const BookCard = styled.a`
  display: block;
  text-decoration: none;
  background: transparent;
  transition: all 0.3s ease;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const BookCover = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: #f5f7fa;
  
  ${BookCard}:hover & {
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    transform: translateY(-2px);
  }
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${BookCard}:hover & {
    transform: scale(1.05);
  }
`;

const BookTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 5px;
  line-height: 1.4;
`;

const BookAuthor = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ToolStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ToolItem = styled.div`
  background: white;
  border: 1px solid #f0f0f0;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    
    svg {
      color: #667eea;
      transform: scale(1.1);
    }
  }
`;

const ToolIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #666;
  
  svg {
    transition: all 0.3s ease;
  }
`;

const ToolInfo = styled.div`
  flex: 1;
`;

const ToolName = styled.h4`
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`;

const ToolCategory = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const LinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;

const LinkCard = styled.a`
  background: white;
  padding: 25px;
  border-radius: 15px;
  border: 1px solid #f0f0f0;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    
    h4 svg {
      transform: translate(2px, -2px);
      color: #667eea;
    }
  }
`;

const LinkTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  svg {
    font-size: 0.9rem;
    color: #999;
    transition: all 0.3s ease;
  }
`;

const LinkDesc = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Resources: React.FC = () => {
  return (
    <ResourcesContainer>
      <ContentWrapper>
        <HeroSection>
          <HeroTitle>Resources & Artifacts</HeroTitle>
          <HeroSubtitle>
            A curated library of templates, recommended reading, and tools that I use to build great products.
          </HeroSubtitle>
        </HeroSection>

        <Section>
          <SectionTitle>Downloadable Assets</SectionTitle>
          <Grid>
            <ResourceCard href="/KushalHP_CV_Product.pdf" download target="_blank">
              <CardIcon><Icon icon={FaFileLines} /></CardIcon>
              <CardTitle>My Resume</CardTitle>
              <CardDescription>
                The latest version of my professional resume, detailing my experience in product management and strategy.
              </CardDescription>
              <DownloadLabel>Download PDF</DownloadLabel>
            </ResourceCard>

            <ResourceCard href="/PRD_Template.md" download target="_blank">
              <CardIcon><Icon icon={FaChartSimple} /></CardIcon>
              <CardTitle>PRD Template</CardTitle>
              <CardDescription>
                A comprehensive Product Requirements Document template to define features, scope, and success metrics.
              </CardDescription>
              <DownloadLabel>Download Markdown</DownloadLabel>
            </ResourceCard>

            <ResourceCard href="/Roadmap_Framework.md" download target="_blank">
              <CardIcon><Icon icon={FaMapLocationDot} /></CardIcon>
              <CardTitle>Roadmap Framework</CardTitle>
              <CardDescription>
                A strategic roadmap template focusing on outcomes over outputs, suitable for quarterly planning.
              </CardDescription>
              <DownloadLabel>Download Markdown</DownloadLabel>
            </ResourceCard>
            
            <ResourceCard href="/User_Interview_Script.md" download target="_blank">
              <CardIcon><Icon icon={FaRegComments} /></CardIcon>
              <CardTitle>User Interview Script</CardTitle>
              <CardDescription>
                A structured guide for conducting user interviews to extract unbiased insights and pain points.
              </CardDescription>
              <DownloadLabel>Download Markdown</DownloadLabel>
            </ResourceCard>

            <ResourceCard href="/Stakeholder_Comm_Plan.md" download target="_blank">
              <CardIcon><Icon icon={FaUsers} /></CardIcon>
              <CardTitle>Stakeholder Communication Plan</CardTitle>
              <CardDescription>
                A template for managing stakeholder expectations, communication cadences, and status reporting.
              </CardDescription>
              <DownloadLabel>Download Markdown</DownloadLabel>
            </ResourceCard>

            <ResourceCard href="/Product_Vision_Board.md" download target="_blank">
              <CardIcon><Icon icon={FaBullseye} /></CardIcon>
              <CardTitle>Product Vision Board</CardTitle>
              <CardDescription>
                A framework for defining and communicating long-term product vision, goals, and success criteria.
              </CardDescription>
              <DownloadLabel>Download Markdown</DownloadLabel>
            </ResourceCard>

            <ResourceCard href="/GTM_Checklist.md" download target="_blank">
              <CardIcon><Icon icon={FaRocket} /></CardIcon>
              <CardTitle>Go-to-Market Checklist</CardTitle>
              <CardDescription>
                A comprehensive launch readiness checklist covering positioning, pricing, channels, and success metrics.
              </CardDescription>
              <DownloadLabel>Download Markdown</DownloadLabel>
            </ResourceCard>
          </Grid>
        </Section>

        <Section>
          <SectionTitle>The "Product Engineer" Stack</SectionTitle>
          <HeroSubtitle style={{ marginBottom: '40px' }}>
            The new wave of AI-native tools that allow PMs to build prototypes and analyze data without waiting for engineering.
          </HeroSubtitle>
          <ToolStackGrid>
            <ToolItem>
              <ToolIcon><Icon icon={FaTerminal} /></ToolIcon>
              <ToolInfo>
                <ToolName>Cursor</ToolName>
                <ToolCategory>AI-Native Code Editor</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaCode} /></ToolIcon>
              <ToolInfo>
                <ToolName>Claude Code</ToolName>
                <ToolCategory>Autonomous Agent</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaLaptopCode} /></ToolIcon>
              <ToolInfo>
                <ToolName>v0.dev</ToolName>
                <ToolCategory>Generative UI</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaBolt} /></ToolIcon>
              <ToolInfo>
                <ToolName>Bolt.new</ToolName>
                <ToolCategory>Full-Stack Builder</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaMagnifyingGlass} /></ToolIcon>
              <ToolInfo>
                <ToolName>Perplexity</ToolName>
                <ToolCategory>AI Research Assistant</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaDatabase} /></ToolIcon>
              <ToolInfo>
                <ToolName>Julius.ai</ToolName>
                <ToolCategory>AI Data Analyst</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaRobot} /></ToolIcon>
              <ToolInfo>
                <ToolName>ChatPRD</ToolName>
                <ToolCategory>AI PM Coach</ToolCategory>
              </ToolInfo>
            </ToolItem>
          </ToolStackGrid>
        </Section>

        <Section>
          <SectionTitle>My PM Tech Stack</SectionTitle>
          <ToolStackGrid>
            <ToolItem>
              <ToolIcon><Icon icon={FaPenToSquare} /></ToolIcon>
              <ToolInfo>
                <ToolName>Notion</ToolName>
                <ToolCategory>Documentation & Wiki</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaBolt} /></ToolIcon>
              <ToolInfo>
                <ToolName>Linear</ToolName>
                <ToolCategory>Issue Tracking</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaPalette} /></ToolIcon>
              <ToolInfo>
                <ToolName>Figma</ToolName>
                <ToolCategory>Design & Prototyping</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaArrowTrendUp} /></ToolIcon>
              <ToolInfo>
                <ToolName>Amplitude</ToolName>
                <ToolCategory>Product Analytics</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaBrain} /></ToolIcon>
              <ToolInfo>
                <ToolName>Miro</ToolName>
                <ToolCategory>Whiteboarding</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaRobot} /></ToolIcon>
              <ToolInfo>
                <ToolName>ChatGPT + API</ToolName>
                <ToolCategory>AI Assistant</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaVideo} /></ToolIcon>
              <ToolInfo>
                <ToolName>Loom</ToolName>
                <ToolCategory>Async Video Communication</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaMagnifyingGlass} /></ToolIcon>
              <ToolInfo>
                <ToolName>Dovetail</ToolName>
                <ToolCategory>User Research Repository</ToolCategory>
              </ToolInfo>
            </ToolItem>
            <ToolItem>
              <ToolIcon><Icon icon={FaChartSimple} /></ToolIcon>
              <ToolInfo>
                <ToolName>Mixpanel</ToolName>
                <ToolCategory>Product Analytics</ToolCategory>
              </ToolInfo>
            </ToolItem>
          </ToolStackGrid>
        </Section>

        <Section>
          <SectionTitle>Recommended Reading</SectionTitle>
          <BookGrid>
            <BookCard href="https://www.amazon.com/Inspired-Create-Tech-Products-Customers/dp/1119387507" target="_blank">
              <BookCover>
                <BookImage src="/images/books/inspired.jpg" alt="Inspired" />
              </BookCover>
              <BookTitle>Inspired</BookTitle>
              <BookAuthor>Marty Cagan</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239" target="_blank">
              <BookCover>
                <BookImage src="/images/books/good-strategy-bad-strategy.jpg" alt="Good Strategy Bad Strategy" />
              </BookCover>
              <BookTitle>Good Strategy Bad Strategy</BookTitle>
              <BookAuthor>Richard Rumelt</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/Continuous-Discovery-Habits-Discover-Products/dp/1736633309" target="_blank">
              <BookCover>
                <BookImage src="/images/books/continuous-discovery-habits.jpg" alt="Continuous Discovery Habits" />
              </BookCover>
              <BookTitle>Continuous Discovery Habits</BookTitle>
              <BookAuthor>Teresa Torres</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/Lean-Product-Playbook-Innovate-Products/dp/1118960874" target="_blank">
              <BookCover>
                <BookImage src="/images/books/lean-product-playbook.jpg" alt="The Lean Product Playbook" />
              </BookCover>
              <BookTitle>The Lean Product Playbook</BookTitle>
              <BookAuthor>Dan Olsen</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/Build-Unorthodox-Guide-Making-Things/dp/0063046067" target="_blank">
              <BookCover>
                <BookImage src="/images/books/build.jpg" alt="Build" />
              </BookCover>
              <BookTitle>Build</BookTitle>
              <BookAuthor>Tony Fadell</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/Escaping-Build-Trap-Effective-Management/dp/149197379X" target="_blank">
              <BookCover>
                <BookImage src="/images/books/escaping-build-trap.jpg" alt="Escaping the Build Trap" />
              </BookCover>
              <BookTitle>Escaping the Build Trap</BookTitle>
              <BookAuthor>Melissa Perri</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788" target="_blank">
              <BookCover>
                <BookImage src="/images/books/hooked.jpg" alt="Hooked" />
              </BookCover>
              <BookTitle>Hooked</BookTitle>
              <BookAuthor>Nir Eyal</BookAuthor>
            </BookCard>
            <BookCard href="https://www.amazon.com/EMPOWERED-Ordinary-People-Extraordinary-Products/dp/111969129X" target="_blank">
              <BookCover>
                <BookImage src="/images/books/empowered.jpg" alt="Empowered" />
              </BookCover>
              <BookTitle>Empowered</BookTitle>
              <BookAuthor>Marty Cagan</BookAuthor>
            </BookCard>
          </BookGrid>
        </Section>

        <Section>
          <SectionTitle>Essential Knowledge Sources</SectionTitle>
          <LinkList>
            <LinkCard href="https://www.lennysnewsletter.com/" target="_blank">
              <LinkTitle>
                Lenny's Newsletter <Icon icon={FaArrowUpRightFromSquare} />
              </LinkTitle>
              <LinkDesc>The #1 newsletter for product managers. Deep dives into growth, product strategy, and career advice.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://svpg.com/articles/" target="_blank">
              <LinkTitle>
                SVPG Insights <Icon icon={FaArrowUpRightFromSquare} />
              </LinkTitle>
              <LinkDesc>Marty Cagan and the SVPG team share the foundational principles of modern product management.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.reforge.com/blog" target="_blank">
              <LinkTitle>
                Reforge Blog <Icon icon={FaArrowUpRightFromSquare} />
              </LinkTitle>
              <LinkDesc>Advanced frameworks on growth, retention, and product strategy for experienced professionals.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://stratechery.com/" target="_blank">
              <LinkTitle>
                Stratechery <Icon icon={FaArrowUpRightFromSquare} />
              </LinkTitle>
              <LinkDesc>Ben Thompson's critical analysis of tech strategy and the business side of technology.</LinkDesc>
            </LinkCard>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Must-Listen Podcasts</SectionTitle>
          <LinkList>
            <LinkCard href="https://www.lennyspodcast.com/" target="_blank">
              <LinkTitle>
                Lenny's Podcast <Icon icon={FaMicrophone} />
              </LinkTitle>
              <LinkDesc>Interviews with world-class product leaders and growth experts.</LinkDesc>
            </LinkCard>
             <LinkCard href="https://www.acquired.fm/" target="_blank">
              <LinkTitle>
                Acquired <Icon icon={FaMicrophone} />
              </LinkTitle>
              <LinkDesc>Telling the stories of great companies. Essential for understanding business history and strategy.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.20vc.com/" target="_blank">
              <LinkTitle>
                20VC <Icon icon={FaMicrophone} />
              </LinkTitle>
              <LinkDesc>Harry Stebbings interviews VCs and founders, offering a glimpse into the investor mindset.</LinkDesc>
            </LinkCard>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Communities & Networks</SectionTitle>
          <LinkList>
            <LinkCard href="https://www.mindtheproduct.com/" target="_blank">
              <LinkTitle>
                Mind the Product <Icon icon={FaGlobe} />
              </LinkTitle>
              <LinkDesc>The world's largest product community with events, workshops, and a thriving global network of PMs.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.lennysnewsletter.com/community" target="_blank">
              <LinkTitle>
                Lenny's Community <Icon icon={FaGlobe} />
              </LinkTitle>
              <LinkDesc>A private Slack community for paid subscribers—thousands of PMs sharing insights and advice.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.womenpm.org/" target="_blank">
              <LinkTitle>
                Women in Product <Icon icon={FaGlobe} />
              </LinkTitle>
              <LinkDesc>A global community dedicated to advancing and supporting women in product management roles.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.productschool.com/slack-community" target="_blank">
              <LinkTitle>
                Product School Community <Icon icon={FaGlobe} />
              </LinkTitle>
              <LinkDesc>Join thousands of product managers exchanging ideas, job opportunities, and resources.</LinkDesc>
            </LinkCard>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Advanced Learning Platforms</SectionTitle>
          <LinkList>
            <LinkCard href="https://www.reforge.com/" target="_blank">
              <LinkTitle>
                Reforge <Icon icon={FaGraduationCap} />
              </LinkTitle>
              <LinkDesc>The gold standard for experienced professionals. In-depth programs on growth, product strategy, and leadership.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.gopractice.io/" target="_blank">
              <LinkTitle>
                GoPractice <Icon icon={FaGraduationCap} />
              </LinkTitle>
              <LinkDesc>Simulator-based learning for product managers and designers. Learn by doing, not just reading.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://www.productschool.com/" target="_blank">
              <LinkTitle>
                Product School <Icon icon={FaGraduationCap} />
              </LinkTitle>
              <LinkDesc>Comprehensive PM certifications taught by product leaders from top tech companies.</LinkDesc>
            </LinkCard>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Open Source & GitHub Repositories</SectionTitle>
          <LinkList>
            <LinkCard href="https://github.com/dend/awesome-product-management" target="_blank">
              <LinkTitle>
                Awesome Product Management <Icon icon={FaGithub} />
              </LinkTitle>
              <LinkDesc>A comprehensive curated list of resources, articles, and tools for product managers.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://github.com/ProductHired/open-product-management" target="_blank">
              <LinkTitle>
                Open Product Management <Icon icon={FaGithub} />
              </LinkTitle>
              <LinkDesc>A curated list of product management advice for technical people.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://github.com/dair-ai/Prompt-Engineering-Guide" target="_blank">
              <LinkTitle>
                Prompt Engineering Guide <Icon icon={FaGithub} />
              </LinkTitle>
              <LinkDesc>The go-to resource for learning how to effectively prompt LLMs, a critical skill for AI PMs.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://github.com/steven2358/awesome-generative-ai" target="_blank">
              <LinkTitle>
                Awesome Generative AI <Icon icon={FaGithub} />
              </LinkTitle>
              <LinkDesc>A vast collection of modern Generative AI projects, tools, and services to stay updated.</LinkDesc>
            </LinkCard>
            <LinkCard href="https://github.com/langchain-ai/langchain" target="_blank">
              <LinkTitle>
                LangChain <Icon icon={FaGithub} />
              </LinkTitle>
              <LinkDesc>Essential for understanding the framework behind many LLM applications.</LinkDesc>
            </LinkCard>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Media Kit</SectionTitle>
          <Grid>
            <ResourceCard href="/public/images/kushal-profile.jpg" download target="_blank">
              <CardIcon><Icon icon={FaCamera} /></CardIcon>
              <CardTitle>Headshot</CardTitle>
              <CardDescription>
                High-resolution professional headshot for conference talks, articles, or press releases.
              </CardDescription>
              <DownloadLabel>Download JPEG</DownloadLabel>
            </ResourceCard>
            
            <ResourceCard href="/Professional_Bio.md" download target="_blank">
              <CardIcon><Icon icon={FaPenToSquare} /></CardIcon>
              <CardTitle>Professional Bio</CardTitle>
              <CardDescription>
                Short, medium, and long versions of my professional biography for use in event descriptions.
              </CardDescription>
              <DownloadLabel>View Bios</DownloadLabel>
            </ResourceCard>
          </Grid>
        </Section>

      </ContentWrapper>
    </ResourcesContainer>
  );
};

export default Resources;
