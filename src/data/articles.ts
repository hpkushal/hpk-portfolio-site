export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  date: string;
  tags: string[];
}

export const articles: Article[] = [
  // New articles (Latest)
  {
    id: 'from-growth-metrics-to-health-outcomes',
    title: "From Growth Metrics to Health Outcomes: Why I'm Moving into Healthcare Product Management",
    excerpt: "How moving from conversion dashboards to provider workflows is reshaping my definition of impact and what I'm bringing from growth to healthcare.",
    category: 'Product Management',
    image: '/images/resmed-office.jpg',
    readTime: '12 min read',
    date: 'Jan 12, 2026',
    tags: ['Healthcare', 'Product Management', 'Growth', 'Career', 'Outcomes']
  },
  {
    id: 'pm-os-2025',
    title: 'My PM Operating System for 2025: Working With AI as a True Partner',
    excerpt: 'After a year of experimenting, here\'s how I actually work with LLMs: the delegation framework, decision-making rituals, and hard lessons learned.',
    category: 'Product Management',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=400&fit=crop',
    readTime: '14 min read',
    date: 'Nov 26, 2025',
    tags: ['Product Management', 'AI Delegation', 'Data Storytelling', 'Strategy', 'Playbooks']
  },
  {
    id: 'great-ai-model-commoditization',
    title: 'The Great AI Model Commoditization: Why I Stopped Caring About GPT-5',
    excerpt: 'When every model performs within 5% of every other model, the real competition moves elsewhere. Here\'s where I\'m looking now.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 18, 2025',
    tags: ['AI Models', 'Commoditization', 'Strategy', 'Open Source', 'Infrastructure']
  },
  {
    id: 'ai-governance-gap',
    title: 'The AI Governance Gap: What I\'ve Learned About Regulation That\'s Already Obsolete',
    excerpt: 'After watching governments struggle to keep up with AI, I\'ve concluded that companies must build their own governance frameworks.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 20, 2025',
    tags: ['AI Governance', 'Regulation', 'Policy', 'Risk Management', 'Strategy']
  },
  {
    id: 'multimodal-ai-end-of-specialized-software',
    title: 'The Day I Realized Specialized Software Was Dying',
    excerpt: 'I spent 15 years mastering Photoshop, Premiere, and a dozen other tools. Then multimodal AI made most of that expertise optional.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 15, 2025',
    tags: ['Multimodal AI', 'Software Industry', 'Application Development', 'AI Integration', 'Technology Disruption']
  },
  {
    id: 'ai-infrastructure-wars',
    title: 'The AI Infrastructure Wars: Why I\'m Watching the Computing Layer More Than Models',
    excerpt: 'Everyone\'s talking about GPT-5 and Claude 4. But the real battle for AI\'s future is being fought at the infrastructure level.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    readTime: '13 min read',
    date: 'Nov 10, 2025',
    tags: ['AI Infrastructure', 'Cloud Computing', 'Semiconductors', 'Geopolitics', 'Strategy']
  },
  {
    id: 'platform-economics-unbundling-rebundling',
    title: 'The Pattern That Keeps Repeating: Unbundling and Rebundling',
    excerpt: 'After 15 years of watching platforms rise and fall, I\'ve learned to recognize the cycle. Here\'s how to spot where we are and where opportunity lies.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
    readTime: '14 min read',
    date: 'Nov 15, 2025',
    tags: ['Platform Economics', 'Business Strategy', 'Digital Transformation', 'Market Dynamics', 'Innovation']
  },
  {
    id: 'creator-economy-maturation',
    title: 'The Creator Economy Grows Up: What I\'ve Learned About Building a Sustainable Creator Business',
    excerpt: 'After watching hundreds of creators rise and fall, here\'s what separates those who last from those who burn out.',
    category: 'Industry Evolution',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 5, 2025',
    tags: ['Creator Economy', 'Digital Business', 'Content Strategy', 'Entrepreneurship', 'AI']
  },
  {
    id: 'attention-economy-backlash',
    title: 'The Attention Economy Backlash: Why I\'m Betting on Digital Minimalism',
    excerpt: 'After years of watching attention capture dominate tech, I\'m convinced the tide is turning. Here\'s why.',
    category: 'Society & Culture',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 12, 2025',
    tags: ['Digital Wellbeing', 'Technology Ethics', 'Consumer Behavior', 'Product Strategy', 'Minimalism']
  },
  {
    id: 'ai-alignment-control-problem',
    title: 'Why I Think About AI Alignment Differently Now',
    excerpt: 'After diving deep into this challenge, I\'ve realized the problem isn\'t just technical. It\'s philosophical, social, and deeply human.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 15, 2025',
    tags: ['AI Alignment', 'AI Safety', 'Ethics', 'Technology Policy', 'Philosophy']
  },
  {
    id: 'ai-regulation-innovation-balance',
    title: 'AI Regulation: My Take on the Innovation vs. Safety Debate',
    excerpt: 'After watching different jurisdictions try different approaches, here\'s what I think actually works.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 8, 2025',
    tags: ['AI Regulation', 'Policy', 'Innovation', 'Governance', 'Strategy']
  },
  {
    id: 'consulting-industry-ai-disruption',
    title: 'The Consulting Industry\'s AI Reckoning: What I\'m Seeing Inside the Firms',
    excerpt: '40% of consulting work can now be augmented or automated by AI. Here\'s what that means for the trillion-dollar industry.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 22, 2025',
    tags: ['Consulting', 'AI Transformation', 'Professional Services', 'Future of Work', 'Strategy']
  },
  {
    id: 'growth-hacking-maturation',
    title: 'From Growth Hacks to Growth Science: My Journey',
    excerpt: 'I spent years chasing viral tricks before realizing the real magic is in systematic, data-driven growth engines.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 28, 2025',
    tags: ['Growth Strategy', 'Marketing', 'Product-Led Growth', 'Data Science', 'Startups']
  },
  {
    id: 'pricing-psychology-revolution',
    title: 'What I Learned Rebuilding Our Entire Pricing Strategy',
    excerpt: 'We were leaving 40% of revenue on the table. Not because our product was wrong, but because our pricing psychology was stuck in 2015.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
    readTime: '13 min read',
    date: 'Nov 18, 2025',
    tags: ['Pricing Strategy', 'Behavioral Economics', 'AI', 'Business Models', 'Marketing']
  },
  // Original articles
  {
    id: 'ai-winter-that-never-came',
    title: 'The AI Winter That Never Came: Why I\'m Convinced This Time Is Different',
    excerpt: 'History predicted another bust. The fundamentals say otherwise. Here\'s what I\'m seeing that changes everything.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 15, 2025',
    tags: ['AI', 'Tech Trends', 'Innovation', 'History', 'Analysis']
  },
  {
    id: 'beyond-chatgpt-enterprise-ai',
    title: 'Beyond ChatGPT: What Enterprise AI Actually Looks Like',
    excerpt: 'The real AI revolution is happening in back offices and factory floors, not in demo videos. Here\'s what I\'m seeing.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 22, 2025',
    tags: ['Enterprise AI', 'Business Strategy', 'Implementation', 'AI Adoption', 'Digital Transformation']
  },
  {
    id: 'great-ai-talent-war',
    title: 'The Great AI Talent War: Why I\'m Watching Where People Go, Not What Models Release',
    excerpt: 'Talent flow predicts industry direction better than product announcements. Here\'s what the migration patterns reveal.',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    readTime: '10 min read',
    date: 'Nov 18, 2025',
    tags: ['Talent', 'Tech Industry', 'Career', 'AI', 'Workforce']
  },
  {
    id: 'venture-capital-new-playbook',
    title: 'The VC Playbook Has Changed Forever: What I\'ve Learned',
    excerpt: 'After watching the 2022-2024 correction from the inside, here\'s what I know about how VCs actually evaluate startups now.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 8, 2025',
    tags: ['Venture Capital', 'Startups', 'Funding', 'Business Strategy', 'Entrepreneurship']
  },
  {
    id: 'subscription-economy-next-chapter',
    title: 'What I Learned Building Subscription Businesses for a Decade',
    excerpt: 'The subscription economy has matured. The playbook that worked in 2015 doesn\'t work in 2025. Here\'s what actually drives retention and growth now.',
    category: 'Industry Evolution',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    readTime: '13 min read',
    date: 'Nov 14, 2025',
    tags: ['Business Models', 'SaaS', 'Subscription', 'Recurring Revenue', 'Customer Retention']
  },
  {
    id: 'remote-work-settlement',
    title: 'The Remote Work Settlement: What I Learned Managing Distributed Teams for 5 Years',
    excerpt: 'After the RTO wars, the hybrid model won. But making it work requires more intentionality than most leaders realize.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&h=400&fit=crop',
    readTime: '12 min read',
    date: 'Nov 25, 2025',
    tags: ['Remote Work', 'Future of Work', 'Productivity', 'Company Culture', 'Management']
  },
  {
    id: 'death-of-ten-year-business-plan',
    title: 'The Death of the 10-Year Business Plan: Why I Stopped Making Long-Term Predictions',
    excerpt: 'In a world where AI can disrupt industries in 12 months, rigid planning is a liability. Here\'s what I do instead.',
    category: 'Business & Strategy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
    readTime: '11 min read',
    date: 'Nov 12, 2025',
    tags: ['Strategy', 'Business Planning', 'Agility', 'Leadership', 'Innovation']
  }
];

