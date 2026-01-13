# Kushal HP Portfolio 

A modern, responsive portfolio website built with React 19, TypeScript, and styled-components. This project showcases professional product management experience, thought leadership through writings, comprehensive case studies with real business impact metrics, and an AI-powered PM toolkit.



---

## Table of Contents

### For Users
- [Features Overview](#-features-overview)
- [Navigation Guide](#-navigation-guide)
- [Content Sections](#-content-sections)
- [AI-Powered PM Toolkit](#-ai-powered-pm-toolkit)

### For Developers
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Component Reference](#-component-reference)
- [Styling System](#-styling-system)
- [Adding Content](#-adding-content)
- [Adding AI Tools](#-adding-ai-tools)
- [Deployment](#-deployment)

### Project History
- [Commit History](#-commit-history)
- [Version Changelog](#-version-changelog)

---

## 🎯 Features Overview

### Core Features
| Feature | Description |
|---------|-------------|
| **Multi-Page Routing** | Seamless navigation between Home, About, Resume, Projects, Tools, and Writings |
| **AI-Powered PM Toolkit** | Suite of GPT-4 powered tools for product managers (BYOK: Bring Your Own Key) |
| **Interactive Chat Interface** | AI-style conversation on About page for engaging user experience |
| **Comprehensive Writings Hub** | 20 in-depth articles on AI, technology, and business strategy |
| **Projects Portfolio** | 8 detailed case studies with $5M+ combined business impact |
| **Professional Resume** | Interactive sidebar navigation with downloadable PDF |
| **Responsive Design** | Mobile-first approach with optimized breakpoints |
| **Lottie Animations** | Professional animations throughout the site |
| **Related Articles System** | Dynamic article recommendations |

### AI Tools Suite
| Tool | Description | Status |
|------|-------------|--------|
| **AI Prioritizer** | RICE scoring with AI-generated reasoning, risks, and acceptance criteria | ✅ Active |
| **AI Feedback Analyzer** | Extract themes, sentiment, and insights from customer feedback | ✅ Active |
| **AI User Story Generator** | Generate user stories with acceptance criteria from feature descriptions | ✅ Active |
| **AI Competitive Analysis** | Analyze competitors and identify market opportunities | 🔜 Coming Soon |
| **AI Roadmap Advisor** | Get strategic recommendations for your product roadmap | 🔜 Coming Soon |
| **AI Metrics Dashboard** | Generate KPI suggestions and metric frameworks | 🔜 Coming Soon |

### Visual & UX Elements
- **Brand Gradient**: `#667eea` → `#764ba2` (Purple gradient theme)
- **Typography**: Inter (body) + Dancing Script (accents)
- **Glassmorphism Effects**: Modern card designs with blur effects
- **Smooth Scroll**: Anchor-based navigation with animations
- **Hover Interactions**: Cards, buttons, and images with transform effects

---

## 🧭 Navigation Guide

### Main Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero section, services, featured tools, latest content, contact |
| `/about` | About Me | Interactive chat interface with profile |
| `/resume` | Resume | Professional experience with sidebar navigation |
| `/projects` | Projects | Portfolio overview with 8 case studies |
| `/tools` | Tools | AI-powered PM toolkit hub |
| `/writings` | Writings | Article hub with category filters |

### AI Tools Routes

| Route | Tool |
|-------|------|
| `/tools/ai-prioritizer` | AI Prioritization Assistant |
| `/tools/ai-feedback-analyzer` | AI Feedback Analyzer |
| `/tools/ai-user-story-generator` | AI User Story Generator |

### Project Case Studies

| Route | Project |
|-------|---------|
| `/projects/ai-prototyping-framework` | AI-Powered Prototyping Framework |
| `/projects/multi-brand-launch` | Multi-Brand Digital Platform Launch |
| `/projects/performance-marketing-optimization` | Performance Marketing Optimization |
| `/projects/loyalty-program-platform` | Loyalty Program Platform |
| `/projects/ab-testing-framework` | A/B Testing Framework |
| `/projects/healthcare-platform` | Healthcare Professionals Platform |
| `/projects/marketing-automation` | Marketing Automation Infrastructure |
| `/projects/api-integration-suite` | API Integration Suite |

### Writing Articles (20 Total)

**AI & Technology** (10 articles)
- `/writings/pm-os-2025` - The PM OS 2025
- `/writings/ai-winter-that-never-came` - The AI Winter That Never Came
- `/writings/beyond-chatgpt-enterprise-ai` - Beyond ChatGPT: Enterprise AI
- `/writings/great-ai-talent-war` - The Great AI Talent War
- `/writings/great-ai-model-commoditization` - AI Model Commoditization
- `/writings/ai-governance-gap` - The AI Governance Gap
- `/writings/multimodal-ai-end-of-specialized-software` - Multimodal AI
- `/writings/ai-infrastructure-wars` - AI Infrastructure Wars
- `/writings/ai-alignment-control-problem` - AI Alignment Problem
- `/writings/ai-regulation-innovation-balance` - AI Regulation Balance

**Business & Strategy** (7 articles)
- `/writings/death-of-ten-year-business-plan` - Death of 10-Year Business Plan
- `/writings/venture-capital-new-playbook` - VC's New Playbook
- `/writings/remote-work-settlement` - Remote Work Settlement
- `/writings/platform-economics-unbundling-rebundling` - Platform Economics
- `/writings/consulting-industry-ai-disruption` - Consulting Industry Disruption
- `/writings/growth-hacking-maturation` - Growth Hacking Maturation
- `/writings/pricing-psychology-revolution` - Pricing Psychology Revolution

**Industry Evolution** (2 articles)
- `/writings/subscription-economy-next-chapter` - Subscription Economy
- `/writings/creator-economy-maturation` - Creator Economy Maturation

**Society & Culture** (1 article)
- `/writings/attention-economy-backlash` - Attention Economy Backlash

---

## 📚 Content Sections

### Projects Portfolio Impact

**Total Combined Impact: $5M+ in revenue and cost savings**

| Project | Primary Impact | Key Metrics |
|---------|----------------|-------------|
| AI Prototyping Framework | $2M+ cost savings | 50% dev time reduction |
| Multi-Brand Platform | $2M+ ARR | 5 brands, 300% growth |
| Performance Marketing | $1M+ attributed revenue | 40% ROAS improvement |
| Loyalty Program | 35% engagement boost | 25% retention improvement |
| A/B Testing Framework | 10% conversion improvement | 25% faster testing |
| Healthcare Platform | 45% engagement increase | 97.5% function improvement |
| Marketing Automation | 20% conversion improvement | 60% lead qualification |
| API Integration Suite | 15% retention improvement | 10+ integrations |

### Writings Statistics
- **21** Total Articles
- **5** Categories (AI & Technology, Business & Strategy, Industry Evolution, Society & Culture, Product Management)
- **85k+** Estimated Words
- **2025-2026** Publication Range

---

## 🤖 AI-Powered PM Toolkit

The portfolio includes a suite of AI-powered tools designed specifically for product managers. All tools use the **BYOK (Bring Your Own Key)** model, where users provide their own OpenAI API key for GPT-4 access.

### How It Works

1. **API Key Setup**: Users enter their OpenAI API key (stored securely in browser localStorage)
2. **Tool Selection**: Choose from available AI tools on the `/tools` page
3. **AI-Powered Analysis**: Get intelligent insights powered by GPT-4
4. **Export & Share**: Download results in various formats (CSV, JSON, Markdown)

### Available Tools

#### AI Prioritization Assistant (`/tools/ai-prioritizer`)
A comprehensive feature prioritization tool using the RICE framework:
- **AI-Generated RICE Scores**: Reach, Impact, Confidence, Effort scoring with reasoning
- **Risk Identification**: Automated risk analysis for each feature
- **Acceptance Criteria**: AI-generated acceptance criteria
- **Score Adjustment**: Manual override capability with slider controls
- **Feature Backlog**: Save and manage multiple features
- **Comparison Chart**: Visual impact vs. effort matrix
- **Export Options**: CSV, JSON, Markdown, and clipboard

#### AI Feedback Analyzer (`/tools/ai-feedback-analyzer`)
Extract insights from customer feedback:
- **Theme Extraction**: Identify key themes and topics
- **Sentiment Analysis**: Positive, negative, neutral, or mixed sentiment
- **Pain Point Identification**: Specific areas for improvement
- **Feature Requests**: Potential feature suggestions from feedback

#### AI User Story Generator (`/tools/ai-user-story-generator`)
Generate user stories from feature descriptions:
- **User Story Format**: "As a... I want... So that..." structure
- **Acceptance Criteria**: 3-5 detailed criteria per story
- **Multiple Stories**: Generate multiple stories per feature

### Security & Privacy
- API keys are stored only in browser localStorage
- Keys never leave the user's device (direct OpenAI API calls)
- No server-side storage of sensitive data

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.1.0 | UI Framework |
| TypeScript | 4.9.5 | Type Safety |
| React Router DOM | 7.6.1 | Client-side Routing |
| Styled Components | 6.1.18 | CSS-in-JS Styling |
| Framer Motion | 12.15.0 | Animations |
| @lottiefiles/dotlottie-react | 0.13.5 | Lottie Animations |

### AI Integration

| Technology | Purpose |
|------------|---------|
| OpenAI API (GPT-4) | AI-powered tool functionality |
| Browser localStorage | Secure API key storage |

### Development Tools

| Tool | Purpose |
|------|---------|
| Create React App | Build tooling |
| ESLint | Code linting |
| Jest | Testing framework |
| Web Vitals | Performance monitoring |

### Dependencies (package.json)

```json
{
  "dependencies": {
    "@lottiefiles/dotlottie-react": "^0.13.5",
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^13.5.0",
    "framer-motion": "^12.15.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.1",
    "styled-components": "^6.1.18",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  }
}
```

---

## 📁 Project Architecture

```
hpk-CursorExperiments/
├── public/
│   ├── index.html                    # HTML template with meta tags
│   ├── manifest.json                 # PWA manifest
│   ├── robots.txt                    # SEO robots file
│   ├── favicon.ico                   # Browser favicon
│   ├── kushal-hp-favicon.svg         # Custom favicon
│   ├── kushal-hp-logo.svg            # Brand logo
│   ├── ShipwithKushal Logo.png       # Main brand logo
│   ├── shipwithkushal Favicon.png    # Brand favicon
│   ├── KushalHP_CV_Product.pdf       # Downloadable resume
│   ├── logo192.png                   # PWA icon (small)
│   ├── logo512.png                   # PWA icon (large)
│   └── images/
│       ├── kushal-profile.jpg        # Profile photo
│       └── kushal-profile.svg        # Profile vector
│
├── src/
│   ├── App.tsx                       # Main app with routing
│   ├── index.tsx                     # React entry point
│   ├── index.css                     # Base CSS reset
│   ├── react-app-env.d.ts            # TypeScript environment
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── Navigation.tsx            # Desktop floating navigation
│   │   ├── MobileNavigation.tsx      # Mobile hamburger menu
│   │   ├── Footer.tsx                # Desktop footer
│   │   ├── MobileFooter.tsx          # Mobile footer
│   │   ├── ScrollToTop.tsx           # Scroll restoration
│   │   │
│   │   ├── Home.tsx                  # Home page container
│   │   ├── HeroSection.tsx           # Hero with typewriter + Lottie
│   │   ├── MobileHeroSection.tsx     # Mobile-optimized hero
│   │   ├── WhatIDoSection.tsx        # Services showcase
│   │   ├── FeaturedToolsSection.tsx  # AI tools preview on homepage
│   │   ├── LatestContentSection.tsx  # Articles preview + Lottie
│   │   ├── GetInTouchSection.tsx     # Contact section + Lottie
│   │   │
│   │   ├── AboutMe.tsx               # Interactive chat interface
│   │   ├── Resume.tsx                # Professional resume
│   │   ├── Projects.tsx              # Projects overview
│   │   ├── Tools.tsx                 # AI tools hub page
│   │   ├── Writings.tsx              # Article hub with filters
│   │   │
│   │   ├── CaseStudyLayout.tsx       # Reusable case study template
│   │   ├── ArticleLayout.tsx         # Reusable article template
│   │   ├── RelatedArticles.tsx       # Dynamic article recommendations
│   │   │
│   │   ├── OfficeHours.tsx           # Office hours component
│   │   ├── OfficeHoursButton.tsx     # Lottie button component
│   │   ├── NotFound.tsx              # 404 page
│   │   │
│   │   └── AboutSections/            # About page subsections
│   │       ├── LetsTalkSection.tsx
│   │       ├── MyStorySection.tsx
│   │       ├── OutsideRoadmapSection.tsx
│   │       └── WhatIBelieveSection.tsx
│   │
│   ├── data/
│   │   ├── articles.ts               # Article metadata
│   │   ├── projects.ts               # Project metadata
│   │   └── tools.ts                  # AI tools metadata & configuration
│   │
│   ├── pages/
│   │   ├── projects/                 # Case study pages (8 files)
│   │   │   ├── AIPrototypingFramework.tsx
│   │   │   ├── MultiBrandLaunch.tsx
│   │   │   ├── PerformanceMarketingOptimization.tsx
│   │   │   ├── LoyaltyProgramPlatform.tsx
│   │   │   ├── ABTestingFramework.tsx
│   │   │   ├── HealthcarePlatform.tsx
│   │   │   ├── MarketingAutomation.tsx
│   │   │   └── APIIntegrationSuite.tsx
│   │   │
│   │   ├── tools/                    # AI-powered tools
│   │   │   └── ai/                   # AI tool implementations
│   │   │       ├── AIPrioritizer.tsx           # Main prioritization tool
│   │   │       ├── AIFeedbackAnalyzer.tsx      # Feedback analysis tool
│   │   │       ├── AIUserStoryGenerator.tsx   # User story generator
│   │   │       │
│   │   │       ├── components/       # Shared AI tool components
│   │   │       │   ├── APIKeySetup.tsx         # API key input/storage
│   │   │       │   ├── AIAnalysisCard.tsx      # Analysis result display
│   │   │       │   ├── FeatureInput.tsx        # Feature input form
│   │   │       │   ├── ScoreAdjuster.tsx       # RICE score sliders
│   │   │       │   ├── FeatureBacklog.tsx      # Backlog management
│   │   │       │   ├── ComparisonChart.tsx     # Impact/Effort matrix
│   │   │       │   └── ExportOptions.tsx       # Export functionality
│   │   │       │
│   │   │       ├── hooks/
│   │   │       │   └── useOpenAI.ts            # OpenAI API hook
│   │   │       │
│   │   │       └── utils/
│   │   │           └── prompts.ts              # AI prompt templates
│   │   │
│   │   └── writings/                 # Article pages (20 files)
│   │       ├── PMSkillStack2025.tsx
│   │       ├── AIWinterThatNeverCame.tsx
│   │       └── ... (18 more articles)
│   │
│   └── styles/
│       └── GlobalStyles.ts           # Global styles + breakpoints
│
├── package.json                      # Dependencies and scripts
├── package-lock.json                 # Dependency lock file
├── tsconfig.json                     # TypeScript configuration
├── .cursorules                       # Cursor AI style guide
├── KushalHP_CV_Product.pdf           # Resume source file
└── README.md                         # This documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher (or yarn)
- **OpenAI API Key**: Required for AI tools functionality

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hpk-CursorExperiments

# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server with hot reload |
| `npm run build` | Build production bundle to `build/` |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (irreversible) |

### Environment Setup

No environment variables required for basic setup. For production deployment, configure:

```env
# Optional: Analytics
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Optional: Contact form endpoint
REACT_APP_CONTACT_ENDPOINT=https://api.example.com/contact
```

**Note**: OpenAI API keys are managed client-side via the AI tools interface, not environment variables.

---

## 🧩 Component Reference

### Layout Components

#### `Navigation.tsx`
Desktop floating navigation with logo and menu items.
- Sticky positioning with scroll-based opacity
- Brand logo integration
- Tools link in navigation menu
- Responsive breakpoint at 768px

#### `MobileNavigation.tsx`
Mobile hamburger menu with slide-out drawer.
- Full-screen overlay menu
- Tools link included
- Animated hamburger icon
- Touch-optimized interactions

#### `Footer.tsx` / `MobileFooter.tsx`
Site footer with navigation links and social media.
- Quick links to all main sections including Tools
- Contact information
- Social media icons

### Page Components

#### `Home.tsx`
Main landing page container assembling:
- HeroSection (typewriter + Lottie)
- WhatIDoSection (services)
- **FeaturedToolsSection** (AI tools preview)
- LatestContentSection (articles preview)
- GetInTouchSection (contact CTA)

#### `Tools.tsx`
AI tools hub page featuring:
- Hero section with AI-powered branding
- Category filter buttons (All, Active, Coming Soon)
- Tool cards with descriptions and status
- Navigation to individual tools

#### `AboutMe.tsx`
Interactive chat interface featuring:
- Framer Motion animations
- Progressive conversation flow
- Profile image with hover effects
- Office Hours CTA integration

#### `Resume.tsx`
Professional resume with:
- Sidebar navigation with anchor links
- Expandable experience cards
- Skills with proficiency levels
- PDF download functionality

#### `Projects.tsx`
Portfolio overview with:
- Grid layout of case study cards
- Impact metrics preview
- Navigation to individual case studies

#### `Writings.tsx`
Article hub featuring:
- Category filter buttons
- Article cards with images
- Dynamic stats (article count, word count)
- Date-sorted display

### AI Tool Components

#### `AIPrioritizer.tsx`
Main prioritization tool orchestrating:
- API key setup
- Feature input with context
- AI analysis display
- Score adjustment sliders
- Backlog management
- Comparison chart
- Export options

#### `AIFeedbackAnalyzer.tsx`
Feedback analysis tool with:
- Text area for feedback input
- Theme extraction
- Sentiment analysis
- Pain point identification

#### `AIUserStoryGenerator.tsx`
User story generator with:
- Feature description input
- Multiple story generation
- Acceptance criteria output

#### `useOpenAI.ts` (Hook)
Custom React hook for OpenAI integration:
- API key management (localStorage)
- API call handling
- Error management
- Loading states

### Template Components

#### `CaseStudyLayout.tsx`
Reusable case study template with sections:
1. Hero (title, subtitle, date, image)
2. TL;DR (key results, metrics table)
3. Customer (client background)
4. Problem (challenges, stakeholder quotes)
5. Solution (approach, features, quotes)
6. Impact (results, business outcomes)
7. GetInTouchSection (lead generation)

#### `ArticleLayout.tsx`
Reusable article template with:
- Breadcrumb navigation
- Hero image section
- Key takeaways box
- Tags section
- Social share buttons
- Related articles integration

---

## 🎨 Styling System

### Responsive Breakpoints

```typescript
// src/styles/GlobalStyles.ts
export const breakpoints = {
  mobile: '768px',    // ≤768px: Mobile devices
  tablet: '1024px',   // ≤1024px: Tablets
  desktop: '1024px',  // ≤1024px: Small desktops
  large: '1200px',    // ≤1200px: Large screens
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  large: `@media (max-width: ${breakpoints.large})`,
};
```

### Usage in Components

```typescript
import { media } from '../styles/GlobalStyles';

const Container = styled.div`
  padding: 40px;
  
  ${media.tablet} {
    padding: 30px;
  }
  
  ${media.mobile} {
    padding: 20px;
  }
`;
```

### Brand Colors

```css
/* Primary Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text Colors */
--text-primary: #333;
--text-secondary: #666;
--text-muted: #888;

/* Background Colors */
--bg-white: #FFFFFF;
--bg-light: #f8f9fa;
--bg-gradient: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

/* Tool Category Colors */
--tool-purple: #667eea;
--tool-green: #28a745;
--tool-orange: #fd7e14;
--tool-blue: #007bff;
```

### Animation Keyframes

Available global animations in `GlobalStyles.ts`:
- `float` - Floating element animation
- `floatCode1-4` - Code snippet floating effects
- `blink-caret` - Typewriter cursor blink
- `ripple` - Button click ripple
- `pulse` - Subtle scale pulse

---

## 📝 Adding Content

### Adding a New Article

1. **Create the article component** in `src/pages/writings/`:

```typescript
// src/pages/writings/NewArticle.tsx
import React from 'react';
import ArticleLayout from '../../components/ArticleLayout';

const NewArticle: React.FC = () => {
  return (
    <ArticleLayout
      category="AI & Technology"
      title="Your Article Title"
      subtitle="A brief description of the article"
      author="Kushal Parameshwara"
      date="Nov 26, 2025"
      readTime="10 min read"
      heroImage={{
        src: 'https://source.unsplash.com/800x400/?ai,technology',
        alt: 'Article hero image'
      }}
      keyTakeaways={[
        'First key takeaway',
        'Second key takeaway',
        'Third key takeaway'
      ]}
      tags={['AI', 'Technology', 'Innovation']}
      articleId="new-article-slug"
    >
      <h2>Introduction</h2>
      <p>Your article content here...</p>
      
      <h2>Main Section</h2>
      <p>More content...</p>
    </ArticleLayout>
  );
};

export default NewArticle;
```

2. **Add to `App.tsx`** routes:

```typescript
import NewArticle from './pages/writings/NewArticle';

// In Routes
<Route path="/writings/new-article-slug" element={<NewArticle />} />
```

3. **Add to `Writings.tsx`** articles array.

4. **Add to `RelatedArticles.tsx`** allArticles array with same structure.

### Adding a New Case Study

1. **Create case study component** in `src/pages/projects/`
2. **Add route in `App.tsx`**
3. **Add card in `Projects.tsx`**

---

## 🤖 Adding AI Tools

### Creating a New AI Tool

1. **Create the tool component** in `src/pages/tools/ai/`:

```typescript
// src/pages/tools/ai/NewAITool.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../../../styles/GlobalStyles';
import APIKeySetup from './components/APIKeySetup';
import { useOpenAI } from './hooks/useOpenAI';

const ToolContainer = styled.div`
  padding: 120px 20px 80px;
  min-height: 100vh;
  background: #FFFFFF;
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const NewAITool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const { apiKey, getAIResponse, isLoading, error } = useOpenAI();

  const handleAnalyze = async () => {
    const prompt = `Your custom prompt here: "${inputText}"`;
    const response = await getAIResponse(prompt);
    setResult(response);
  };

  return (
    <ToolContainer>
      {/* Your tool UI */}
      <APIKeySetup />
      {apiKey && (
        // Tool functionality
      )}
    </ToolContainer>
  );
};

export default NewAITool;
```

2. **Add to `src/data/tools.ts`**:

```typescript
{
  id: 'new-ai-tool',
  title: 'New AI Tool',
  category: 'AI Mini-App',
  shortDescription: 'Brief description of what this tool does.',
  longDescription: 'Detailed description with use cases and benefits.',
  route: '/tools/new-ai-tool',
  icon: '🔮',
  color: 'purple',
  comingSoon: false,
}
```

3. **Add route in `App.tsx`**:

```typescript
import NewAITool from './pages/tools/ai/NewAITool';

// In Routes
<Route path="/tools/new-ai-tool" element={<NewAITool />} />
```

### Using the OpenAI Hook

```typescript
const { apiKey, getAIResponse, isLoading, error, setApiKey } = useOpenAI();

// Check if API key is set
if (!apiKey) {
  return <APIKeySetup />;
}

// Make AI request
const response = await getAIResponse('Your prompt here');
```

---

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `build/` folder to Netlify
3. Configure redirects for SPA routing:

```
# public/_redirects
/*    /index.html   200
```

### Vercel

1. Connect GitHub repository
2. Vercel auto-detects Create React App
3. Zero configuration deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

---

## 📜 Commit History

### Recent Commits (Latest First)

| Hash | Date | Description |
|------|------|-------------|
| `82642c2` | Dec 2025 | Add AI-powered PM toolkit: AI Prioritizer, Feedback Analyzer, and User Story Generator |
| `1758f06` | Nov 2025 | Standardize unique contextual images for all articles; update PM OS article hero |
| `a907bc3` | Nov 2025 | Add PM OS 2025 article; update route to /writings/pm-os-2025 |
| `23deaaf` | Nov 2025 | Increase logo size and add overflow effect in navbar and footer |
| `db9e35d` | Nov 2025 | Update navigation breakpoints: mobile to 768px, tablet to 1024px |
| `d9801b6` | Nov 2025 | Major portfolio updates: Enhanced UI, new writings section, improved branding |
| `37e43c3` | Nov 2025 | Update README with comprehensive projects portfolio documentation |
| `7b95c96` | Nov 2025 | Complete comprehensive projects portfolio with 8 detailed case studies |
| `271d9dd` | Nov 2025 | Update footer navigation to match top navigation menu items |
| `82fc7c4` | Nov 2025 | Update footer navigation with proper routing and real links |
| `15d9ca0` | Nov 2025 | Add Office Hours Lottie animation button to resume page |
| `3716da3` | Nov 2025 | Update README with ShipwithKushal branding and new features |
| `8ac411e` | Nov 2025 | Major portfolio updates: new branding, logo integration, resume layout redesign |
| `ff00c32` | Nov 2025 | Complete About Me page redesign with interactive chat interface |
| `92fef16` | Nov 2025 | Complete React Portfolio Migration with Lottie Integration |
| `53b81dc` | Nov 2025 | Initial commit: Add interactive portfolio with README |

---

## 📋 Version Changelog

### v3.1.0 (Current) - January 2026
**Healthcare PM Journey & Resources Update**

#### New Features
- ✅ **New Article**: "From Growth Metrics to Health Outcomes" - Career transition story
- ✅ **Resources Page**: Comprehensive PM resources, templates, and tool recommendations
- ✅ **Updated Templates**: All downloadable templates modernized for AI-era PM work
- ✅ **Professional Bio**: Complete professional bio in short, medium, and long formats

#### Content Updates
- ✅ 21 total articles (added Healthcare/Product Management category)
- ✅ Updated all downloadable resources with 2026 best practices
- ✅ Added AI considerations to all PM templates

---

### v3.0.0 - December 2025
**AI-Powered PM Toolkit Release**

#### New Features
- ✅ **AI Prioritization Assistant**: GPT-4 powered RICE scoring with reasoning, risks, and acceptance criteria
- ✅ **AI Feedback Analyzer**: Extract themes, sentiment, and insights from customer feedback
- ✅ **AI User Story Generator**: Generate user stories with acceptance criteria
- ✅ **Tools Hub Page**: Central navigation for all AI tools with category filters
- ✅ **Featured Tools Section**: Homepage integration with tool previews
- ✅ **BYOK Model**: Bring Your Own Key architecture for secure API usage
- ✅ **Export Options**: CSV, JSON, Markdown, and clipboard export for AI results

#### Technical Additions
- ✅ `useOpenAI` custom hook for API integration
- ✅ Shared AI component library (APIKeySetup, AIAnalysisCard, etc.)
- ✅ Tools data configuration (`src/data/tools.ts`)
- ✅ Navigation updated with Tools link

### v2.0.0 - November 2025
**Major Feature Release**

#### New Features
- ✅ **Writings Hub**: 20 in-depth articles with category filtering
- ✅ **Article Layout**: Reusable template with hero images, key takeaways, social sharing
- ✅ **Related Articles**: Dynamic recommendations system
- ✅ **PM OS 2025 Article**: Latest flagship article on AI-powered product management
- ✅ **Enhanced Branding**: Larger logo, overflow effects, consistent gradients

#### Improvements
- ✅ Navigation breakpoints optimized (mobile: 768px, tablet: 1024px)
- ✅ Standardized unique contextual images across all articles
- ✅ Footer navigation matches header navigation
- ✅ Improved responsive design across all pages

### v1.5.0 - November 2025
**Projects Portfolio Release**

#### New Features
- ✅ **8 Complete Case Studies** with $5M+ combined impact
- ✅ **CaseStudyLayout Component**: Reusable template with Customer→Problem→Solution→Impact flow
- ✅ **Projects Overview Page**: Central navigation hub
- ✅ **Hero Images**: Contextual images for all case studies
- ✅ **Lead Generation**: GetInTouchSection integration

### v1.0.0 - November 2025
**Initial Release**

#### Core Features
- ✅ **ShipwithKushal Branding**: Complete brand identity
- ✅ **Interactive About Page**: Chat interface with conversation flow
- ✅ **Professional Resume**: Sidebar navigation, expandable cards, PDF download
- ✅ **Home Page**: Hero with typewriter, services, contact sections
- ✅ **Lottie Animations**: 3 integrated animations
- ✅ **Responsive Design**: Mobile-first with optimized breakpoints
- ✅ **React 19 + TypeScript**: Modern tech stack

---

## 🤝 Contributing

This is a personal portfolio project. For questions or collaboration opportunities:

- **Email**: hp.kushal95@outlook.com
- **Phone**: (+1) 902-403-3023
- **LinkedIn**: [linkedin.com/in/kushal-hp-09121995](https://linkedin.com/in/kushal-hp-09121995)

---

## 📄 License

© 2026 Kushal Horabylu Parameshwara -  All rights reserved.

---

**Built with ❤️ using React, TypeScript, OpenAI GPT-4, and Cursor AI**
