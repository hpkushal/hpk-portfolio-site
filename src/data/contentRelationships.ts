/**
 * Content Relationships Map
 * 
 * This file defines semantic relationships between articles, projects, and tools
 * for strategic internal linking (SEO benefit + better user navigation)
 */

export interface ContentRelationship {
  id: string;
  type: 'article' | 'project' | 'tool';
  relatedArticles?: string[];
  relatedProjects?: string[];
  relatedTools?: string[];
}

// Article relationships
export const articleRelationships: Record<string, ContentRelationship> = {
  'pm-os-2025': {
    id: 'pm-os-2025',
    type: 'article',
    relatedArticles: ['death-of-ten-year-business-plan', 'beyond-chatgpt-enterprise-ai', 'great-ai-model-commoditization'],
    relatedProjects: ['ai-prototyping-framework'],
    relatedTools: ['ai-prioritizer', 'ai-roadmap-advisor', 'ai-user-story-generator']
  },
  'growth-hacking-maturation': {
    id: 'growth-hacking-maturation',
    type: 'article',
    relatedArticles: ['pricing-psychology-revolution', 'subscription-economy-next-chapter', 'death-of-ten-year-business-plan'],
    relatedProjects: ['ab-testing-framework', 'performance-marketing-optimization'],
    relatedTools: ['ai-feedback-analyzer', 'ai-competitive-analysis']
  },
  'from-growth-metrics-to-health-outcomes': {
    id: 'from-growth-metrics-to-health-outcomes',
    type: 'article',
    relatedArticles: ['pm-os-2025', 'growth-hacking-maturation', 'subscription-economy-next-chapter'],
    relatedProjects: ['healthcare-platform'],
    relatedTools: ['ai-prioritizer', 'ai-feedback-analyzer']
  },
  'pricing-psychology-revolution': {
    id: 'pricing-psychology-revolution',
    type: 'article',
    relatedArticles: ['growth-hacking-maturation', 'subscription-economy-next-chapter', 'venture-capital-new-playbook'],
    relatedProjects: ['ab-testing-framework', 'loyalty-program-platform'],
    relatedTools: ['ai-competitive-analysis']
  },
  'subscription-economy-next-chapter': {
    id: 'subscription-economy-next-chapter',
    type: 'article',
    relatedArticles: ['pricing-psychology-revolution', 'growth-hacking-maturation', 'creator-economy-maturation'],
    relatedProjects: ['loyalty-program-platform', 'marketing-automation'],
    relatedTools: ['ai-feedback-analyzer']
  },
  'beyond-chatgpt-enterprise-ai': {
    id: 'beyond-chatgpt-enterprise-ai',
    type: 'article',
    relatedArticles: ['pm-os-2025', 'great-ai-model-commoditization', 'consulting-industry-ai-disruption'],
    relatedProjects: ['ai-prototyping-framework', 'api-integration-suite'],
    relatedTools: ['ai-prioritizer', 'ai-user-story-generator']
  },
  'death-of-ten-year-business-plan': {
    id: 'death-of-ten-year-business-plan',
    type: 'article',
    relatedArticles: ['pm-os-2025', 'venture-capital-new-playbook', 'platform-economics-unbundling-rebundling'],
    relatedProjects: ['api-integration-suite', 'multi-brand-launch'],
    relatedTools: ['ai-roadmap-advisor']
  },
  'great-ai-model-commoditization': {
    id: 'great-ai-model-commoditization',
    type: 'article',
    relatedArticles: ['ai-infrastructure-wars', 'beyond-chatgpt-enterprise-ai', 'ai-winter-that-never-came'],
    relatedProjects: ['ai-prototyping-framework'],
    relatedTools: ['ai-prioritizer', 'ai-competitive-analysis']
  },
  'ai-infrastructure-wars': {
    id: 'ai-infrastructure-wars',
    type: 'article',
    relatedArticles: ['great-ai-model-commoditization', 'great-ai-talent-war', 'ai-winter-that-never-came'],
    relatedProjects: ['ai-prototyping-framework'],
    relatedTools: []
  },
  'consulting-industry-ai-disruption': {
    id: 'consulting-industry-ai-disruption',
    type: 'article',
    relatedArticles: ['beyond-chatgpt-enterprise-ai', 'great-ai-talent-war', 'remote-work-settlement'],
    relatedProjects: ['ai-prototyping-framework'],
    relatedTools: ['ai-competitive-analysis']
  },
  'platform-economics-unbundling-rebundling': {
    id: 'platform-economics-unbundling-rebundling',
    type: 'article',
    relatedArticles: ['death-of-ten-year-business-plan', 'venture-capital-new-playbook', 'creator-economy-maturation'],
    relatedProjects: ['multi-brand-launch', 'api-integration-suite'],
    relatedTools: ['ai-roadmap-advisor']
  },
  'venture-capital-new-playbook': {
    id: 'venture-capital-new-playbook',
    type: 'article',
    relatedArticles: ['death-of-ten-year-business-plan', 'pricing-psychology-revolution', 'platform-economics-unbundling-rebundling'],
    relatedProjects: ['multi-brand-launch', 'performance-marketing-optimization'],
    relatedTools: ['ai-competitive-analysis', 'ai-roadmap-advisor']
  },
  'creator-economy-maturation': {
    id: 'creator-economy-maturation',
    type: 'article',
    relatedArticles: ['subscription-economy-next-chapter', 'attention-economy-backlash', 'platform-economics-unbundling-rebundling'],
    relatedProjects: ['loyalty-program-platform', 'marketing-automation'],
    relatedTools: ['ai-feedback-analyzer']
  },
  'attention-economy-backlash': {
    id: 'attention-economy-backlash',
    type: 'article',
    relatedArticles: ['creator-economy-maturation', 'ai-alignment-control-problem', 'ai-governance-gap'],
    relatedProjects: [],
    relatedTools: []
  },
  'ai-governance-gap': {
    id: 'ai-governance-gap',
    type: 'article',
    relatedArticles: ['ai-regulation-innovation-balance', 'ai-alignment-control-problem', 'great-ai-model-commoditization'],
    relatedProjects: [],
    relatedTools: []
  },
  'ai-regulation-innovation-balance': {
    id: 'ai-regulation-innovation-balance',
    type: 'article',
    relatedArticles: ['ai-governance-gap', 'ai-alignment-control-problem', 'beyond-chatgpt-enterprise-ai'],
    relatedProjects: [],
    relatedTools: []
  },
  'ai-alignment-control-problem': {
    id: 'ai-alignment-control-problem',
    type: 'article',
    relatedArticles: ['ai-governance-gap', 'ai-regulation-innovation-balance', 'attention-economy-backlash'],
    relatedProjects: [],
    relatedTools: []
  },
  'multimodal-ai-end-of-specialized-software': {
    id: 'multimodal-ai-end-of-specialized-software',
    type: 'article',
    relatedArticles: ['great-ai-model-commoditization', 'beyond-chatgpt-enterprise-ai', 'ai-winter-that-never-came'],
    relatedProjects: ['ai-prototyping-framework'],
    relatedTools: ['ai-user-story-generator', 'ai-release-notes']
  },
  'great-ai-talent-war': {
    id: 'great-ai-talent-war',
    type: 'article',
    relatedArticles: ['ai-infrastructure-wars', 'remote-work-settlement', 'consulting-industry-ai-disruption'],
    relatedProjects: [],
    relatedTools: []
  },
  'remote-work-settlement': {
    id: 'remote-work-settlement',
    type: 'article',
    relatedArticles: ['great-ai-talent-war', 'consulting-industry-ai-disruption', 'death-of-ten-year-business-plan'],
    relatedProjects: ['marketing-automation'],
    relatedTools: []
  },
  'ai-winter-that-never-came': {
    id: 'ai-winter-that-never-came',
    type: 'article',
    relatedArticles: ['great-ai-model-commoditization', 'ai-infrastructure-wars', 'beyond-chatgpt-enterprise-ai'],
    relatedProjects: ['ai-prototyping-framework'],
    relatedTools: []
  }
};

// Project relationships
export const projectRelationships: Record<string, ContentRelationship> = {
  'ai-prototyping-framework': {
    id: 'ai-prototyping-framework',
    type: 'project',
    relatedArticles: ['pm-os-2025', 'beyond-chatgpt-enterprise-ai', 'great-ai-model-commoditization'],
    relatedProjects: ['ab-testing-framework', 'api-integration-suite'],
    relatedTools: ['ai-prioritizer', 'ai-user-story-generator', 'ai-roadmap-advisor']
  },
  'multi-brand-launch': {
    id: 'multi-brand-launch',
    type: 'project',
    relatedArticles: ['platform-economics-unbundling-rebundling', 'death-of-ten-year-business-plan', 'venture-capital-new-playbook'],
    relatedProjects: ['marketing-automation', 'loyalty-program-platform'],
    relatedTools: ['ai-roadmap-advisor', 'ai-competitive-analysis']
  },
  'loyalty-program-platform': {
    id: 'loyalty-program-platform',
    type: 'project',
    relatedArticles: ['subscription-economy-next-chapter', 'pricing-psychology-revolution', 'growth-hacking-maturation'],
    relatedProjects: ['marketing-automation', 'multi-brand-launch'],
    relatedTools: ['ai-feedback-analyzer']
  },
  'ab-testing-framework': {
    id: 'ab-testing-framework',
    type: 'project',
    relatedArticles: ['growth-hacking-maturation', 'pricing-psychology-revolution', 'pm-os-2025'],
    relatedProjects: ['performance-marketing-optimization', 'ai-prototyping-framework'],
    relatedTools: ['ai-feedback-analyzer', 'ai-prioritizer']
  },
  'healthcare-platform': {
    id: 'healthcare-platform',
    type: 'project',
    relatedArticles: ['from-growth-metrics-to-health-outcomes', 'pm-os-2025', 'subscription-economy-next-chapter'],
    relatedProjects: ['api-integration-suite'],
    relatedTools: ['ai-feedback-analyzer', 'ai-user-story-generator']
  },
  'performance-marketing-optimization': {
    id: 'performance-marketing-optimization',
    type: 'project',
    relatedArticles: ['growth-hacking-maturation', 'pricing-psychology-revolution', 'venture-capital-new-playbook'],
    relatedProjects: ['ab-testing-framework', 'marketing-automation'],
    relatedTools: ['ai-competitive-analysis', 'ai-feedback-analyzer']
  },
  'marketing-automation': {
    id: 'marketing-automation',
    type: 'project',
    relatedArticles: ['growth-hacking-maturation', 'subscription-economy-next-chapter', 'creator-economy-maturation'],
    relatedProjects: ['loyalty-program-platform', 'performance-marketing-optimization'],
    relatedTools: ['ai-release-notes', 'ai-feedback-analyzer']
  },
  'api-integration-suite': {
    id: 'api-integration-suite',
    type: 'project',
    relatedArticles: ['death-of-ten-year-business-plan', 'beyond-chatgpt-enterprise-ai', 'platform-economics-unbundling-rebundling'],
    relatedProjects: ['ai-prototyping-framework', 'healthcare-platform'],
    relatedTools: ['ai-user-story-generator', 'ai-release-notes']
  }
};

// Tool relationships
export const toolRelationships: Record<string, ContentRelationship> = {
  'ai-prioritizer': {
    id: 'ai-prioritizer',
    type: 'tool',
    relatedArticles: ['pm-os-2025', 'death-of-ten-year-business-plan', 'growth-hacking-maturation'],
    relatedProjects: ['ai-prototyping-framework', 'ab-testing-framework'],
    relatedTools: ['ai-roadmap-advisor', 'ai-user-story-generator']
  },
  'ai-feedback-analyzer': {
    id: 'ai-feedback-analyzer',
    type: 'tool',
    relatedArticles: ['growth-hacking-maturation', 'pm-os-2025', 'subscription-economy-next-chapter'],
    relatedProjects: ['ab-testing-framework', 'loyalty-program-platform', 'healthcare-platform'],
    relatedTools: ['ai-prioritizer', 'ai-competitive-analysis']
  },
  'ai-user-story-generator': {
    id: 'ai-user-story-generator',
    type: 'tool',
    relatedArticles: ['pm-os-2025', 'beyond-chatgpt-enterprise-ai', 'death-of-ten-year-business-plan'],
    relatedProjects: ['ai-prototyping-framework', 'api-integration-suite'],
    relatedTools: ['ai-prioritizer', 'ai-release-notes']
  },
  'ai-competitive-analysis': {
    id: 'ai-competitive-analysis',
    type: 'tool',
    relatedArticles: ['growth-hacking-maturation', 'venture-capital-new-playbook', 'pricing-psychology-revolution'],
    relatedProjects: ['performance-marketing-optimization', 'multi-brand-launch'],
    relatedTools: ['ai-feedback-analyzer', 'ai-roadmap-advisor']
  },
  'ai-release-notes': {
    id: 'ai-release-notes',
    type: 'tool',
    relatedArticles: ['pm-os-2025', 'beyond-chatgpt-enterprise-ai', 'multimodal-ai-end-of-specialized-software'],
    relatedProjects: ['marketing-automation', 'api-integration-suite'],
    relatedTools: ['ai-user-story-generator', 'ai-roadmap-advisor']
  },
  'ai-roadmap-advisor': {
    id: 'ai-roadmap-advisor',
    type: 'tool',
    relatedArticles: ['pm-os-2025', 'death-of-ten-year-business-plan', 'platform-economics-unbundling-rebundling'],
    relatedProjects: ['ai-prototyping-framework', 'multi-brand-launch'],
    relatedTools: ['ai-prioritizer', 'ai-competitive-analysis']
  }
};

// Helper functions
export const getRelatedContent = (id: string, type: 'article' | 'project' | 'tool'): ContentRelationship | undefined => {
  switch (type) {
    case 'article':
      return articleRelationships[id];
    case 'project':
      return projectRelationships[id];
    case 'tool':
      return toolRelationships[id];
  }
};

export const getArticleRelationships = (articleId: string) => articleRelationships[articleId];
export const getProjectRelationships = (projectId: string) => projectRelationships[projectId];
export const getToolRelationships = (toolId: string) => toolRelationships[toolId];
