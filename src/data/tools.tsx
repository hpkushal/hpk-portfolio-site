import React from 'react';
import { 
  FaRobot, 
  FaComments, 
  FaBookOpen, 
  FaChartLine, 
  FaPenToSquare, 
  FaMapLocationDot,
  FaWandMagicSparkles
} from 'react-icons/fa6';

export interface Tool {
  id: string;
  title: string;
  category: 'ai-tool';
  description: string;
  shortDescription: string;
  icon: React.ReactNode;
  color: 'pink' | 'blue' | 'green' | 'purple' | 'orange';
  route: string;
  featured: boolean;
  comingSoon?: boolean;
}

export const tools: Tool[] = [
  // Phase 1: Active AI Tools
  {
    id: 'ai-prioritizer',
    title: 'AI Prioritizer',
    category: 'ai-tool',
    description: 'Leverage AI to prioritize features using the RICE framework. Get intelligent scoring suggestions, detailed reasoning, risk analysis, and acceptance criteria.',
    shortDescription: 'AI-powered feature prioritization & scoring',
    icon: <FaRobot />,
    color: 'purple',
    route: '/tools/ai-prioritizer',
    featured: true,
  },
  {
    id: 'ai-feedback-analyzer',
    title: 'AI Feedback Analyzer',
    category: 'ai-tool',
    description: 'Paste customer feedback, reviews, or support tickets and let AI extract key themes, sentiment analysis, and prioritized insights to inform your product decisions.',
    shortDescription: 'Extract themes & insights from customer feedback',
    icon: <FaComments />,
    color: 'blue',
    route: '/tools/ai-feedback-analyzer',
    featured: true,
  },
  {
    id: 'ai-user-story-generator',
    title: 'AI User Story Generator',
    category: 'ai-tool',
    description: 'Describe a feature briefly and generate complete user stories with acceptance criteria. Perfect for sprint planning and backlog grooming.',
    shortDescription: 'Generate user stories with acceptance criteria',
    icon: <FaBookOpen />,
    color: 'green',
    route: '/tools/ai-user-story-generator',
    featured: true,
  },

  // Phase 2: Additional AI Tools
  {
    id: 'ai-competitive-analysis',
    title: 'AI Competitive Analysis',
    category: 'ai-tool',
    description: 'Analyze competitor products and extract features, positioning, pricing strategies, and identify market gaps.',
    shortDescription: 'Competitive intelligence & gap analysis',
    icon: <FaChartLine />,
    color: 'orange',
    route: '/tools/ai-competitive-analysis',
    featured: true,
  },
  {
    id: 'ai-release-notes',
    title: 'AI Release Notes Generator',
    category: 'ai-tool',
    description: 'Transform technical changelogs and JIRA tickets into user-friendly release notes that customers will actually read.',
    shortDescription: 'User-friendly release notes from changelogs',
    icon: <FaPenToSquare />,
    color: 'pink',
    route: '/tools/ai-release-notes',
    featured: true,
  },
  {
    id: 'ai-roadmap-advisor',
    title: 'AI Roadmap Advisor',
    category: 'ai-tool',
    description: 'Get strategic roadmap suggestions based on your business goals, market position, and resources. AI helps you build a compelling product vision.',
    shortDescription: 'Strategic roadmap planning & prioritization',
    icon: <FaMapLocationDot />,
    color: 'purple',
    route: '/tools/ai-roadmap-advisor',
    featured: true,
  },
];

export const categories = {
  'ai-tool': {
    name: 'AI-Powered Tools',
    description: 'Intelligent tools leveraging GPT-4',
    icon: <FaWandMagicSparkles />,
  },
};

export const getFeaturedTools = () => tools.filter(tool => tool.featured);
export const getActiveTools = () => tools.filter(tool => !tool.comingSoon);
export const getComingSoonTools = () => tools.filter(tool => tool.comingSoon);
export const getToolsByCategory = (category: string) => 
  tools.filter(tool => tool.category === category);
export const getToolById = (id: string) => tools.find(tool => tool.id === id);
