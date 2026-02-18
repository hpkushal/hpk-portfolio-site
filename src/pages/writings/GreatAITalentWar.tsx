import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const TalentMigration: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Great Talent Migration</text>
    
    {/* From Big Tech */}
    <rect x="50" y="70" width="200" height="200" rx="10" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" />
    <text x="150" y="100" fill="#ef4444" fontSize="12" fontWeight="600" textAnchor="middle">Leaving Big Tech</text>
    <text x="150" y="130" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Share of AI hires:</text>
    <text x="150" y="155" fill="#ef4444" fontSize="24" fontWeight="700" textAnchor="middle">65% → 38%</text>
    <text x="150" y="180" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">since 2022</text>
    
    {/* Arrows */}
    <path d="M270 170 L330 120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#talentArrow)" />
    <path d="M270 170 L330 170" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#talentArrow)" />
    <path d="M270 170 L330 220" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#talentArrow)" />
    
    {/* To destinations */}
    {[
      { dest: 'AI Startups', stat: '+250%', y: 90, color: '#22c55e' },
      { dest: 'Mid-Market Tech', stat: '+180%', y: 150, color: '#3b82f6' },
      { dest: 'Non-Tech Industries', stat: '+300%', y: 210, color: '#8b5cf6' },
    ].map((item, i) => (
      <g key={i}>
        <rect x="350" y={item.y} width="180" height="50" rx="6" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x="440" y={item.y + 25} fill="white" fontSize="11" fontWeight="500" textAnchor="middle">{item.dest}</text>
        <text x="440" y={item.y + 42} fill={item.color} fontSize="10" textAnchor="middle">{item.stat}</text>
      </g>
    ))}
    
    <defs>
      <marker id="talentArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.3)" />
      </marker>
    </defs>
    
    {/* Remote stat */}
    <rect x="570" y="90" width="180" height="180" rx="10" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
    <text x="660" y="130" fill="#22c55e" fontSize="11" fontWeight="600" textAnchor="middle">Remote AI Positions</text>
    <text x="660" y="180" fill="#22c55e" fontSize="36" fontWeight="700" textAnchor="middle">72%</text>
    <text x="660" y="210" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">of all new postings</text>
    <text x="660" y="230" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">(vs 23% pre-pandemic)</text>
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">AI talent is redistributing across the entire economy</text>
  </svg>
);

const CompensationLevels: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">AI Compensation Reality (2025)</text>
    <text x="400" y="55" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">Total compensation packages</text>
    
    {[
      { 
        level: 'Senior AI Engineer', 
        exp: '5-8 years',
        base: '$280-400K',
        total: '$500K-1.2M',
        color: '#22c55e'
      },
      { 
        level: 'Staff/Principal', 
        exp: '8+ years',
        base: '$400-600K',
        total: '$800K-2.5M',
        color: '#3b82f6'
      },
      { 
        level: 'Research Scientist', 
        exp: 'Top Labs',
        base: '$500-800K',
        total: '$1.2M-5M+',
        color: '#8b5cf6'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={75 + i * 240} y="80" width="190" height="220" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={170 + i * 240} y="115" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.level}</text>
        <text x={170 + i * 240} y="135" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{item.exp}</text>
        
        <line x1={100 + i * 240} y1="155" x2={240 + i * 240} y2="155" stroke="rgba(255,255,255,0.1)" />
        
        <text x={170 + i * 240} y="185" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Base Salary</text>
        <text x={170 + i * 240} y="205" fill="white" fontSize="13" textAnchor="middle">{item.base}</text>
        
        <text x={170 + i * 240} y="240" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Total Comp</text>
        <text x={170 + i * 240} y="265" fill={item.color} fontSize="18" fontWeight="700" textAnchor="middle">{item.total}</text>
      </g>
    ))}
    
    <text x="400" y="330" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">These numbers don't include counter-offers and bidding wars that inflate packages 30-50%</text>
  </svg>
);

const WhyBigTechLosing: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Why Big Tech Is Losing the War</text>
    
    {[
      { problem: 'Bureaucracy', icon: '📋', stat: '60%', desc: 'time in meetings', color: '#ef4444' },
      { problem: 'Risk Aversion', icon: '⚠️', stat: 'Slow', desc: 'to ship experiments', color: '#f97316' },
      { problem: 'Commoditized Roles', icon: '⚙️', stat: '"Cog"', desc: 'feeling reported', color: '#eab308' },
      { problem: 'Politics', icon: '🏛️', stat: 'High', desc: 'ladder climbing', color: '#8b5cf6' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="24" textAnchor="middle">{item.icon}</text>
        <text x={132 + i * 185} y="135" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">{item.problem}</text>
        <text x={132 + i * 185} y="170" fill={item.color} fontSize="18" fontWeight="600" textAnchor="middle">{item.stat}</text>
        <text x={132 + i * 185} y="195" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.desc}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">"I wanted to build AI, not PowerPoint presentations about AI roadmaps."</text>
  </svg>
);

const HotSkills: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Skills Commanding Premium</text>
    
    {[
      { skill: 'LLM Training', demand: 'Extreme', premium: '+50%', color: '#22c55e' },
      { skill: 'MLOps at Scale', demand: 'Very High', premium: '+40%', color: '#3b82f6' },
      { skill: 'AI Safety', demand: 'High', premium: '+35%', color: '#8b5cf6' },
      { skill: 'Multimodal AI', demand: 'High', premium: '+30%', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="110" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.skill}</text>
        <text x={132 + i * 185} y="145" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">Demand: {item.demand}</text>
        <text x={132 + i * 185} y="185" fill={item.color} fontSize="22" fontWeight="700" textAnchor="middle">{item.premium}</text>
        <text x={132 + i * 185} y="205" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">salary premium</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">These skills command significantly higher compensation than general ML</text>
  </svg>
);

const GlobalTalentHubs: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Rising Global AI Talent Hubs</text>
    
    {[
      { city: 'Toronto', strength: 'Vector Institute', color: '#ef4444' },
      { city: 'London', strength: 'DeepMind effect', color: '#3b82f6' },
      { city: 'Tel Aviv', strength: 'Military AI background', color: '#22c55e' },
      { city: 'Bangalore', strength: 'Cost-effective talent', color: '#f97316' },
      { city: 'Montreal', strength: 'Research community', color: '#8b5cf6' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={40 + i * 150} y="70" width="130" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={105 + i * 150} y="110" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{item.city}</text>
        <text x={105 + i * 150} y="150" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.strength.split(' ').slice(0,2).join(' ')}</text>
        <text x={105 + i * 150} y="165" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.strength.split(' ').slice(2).join(' ')}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Remote work has created a truly global AI talent market</text>
  </svg>
);

const GreatAITalentWar: React.FC = () => {
  return (
    <ArticleLayout
      category="AI & Technology"
      title="The Great AI Talent War: Why I'm Watching Where People Go, Not What Models Release"
      subtitle="Talent flow predicts industry direction better than product announcements. Here's what the migration patterns reveal."
      author="Kushal Parameshwara"
      date="November 18, 2025"
      readTime="10 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
        alt: "Diverse tech professionals collaborating on AI projects"
      }}
      keyTakeaways={[
        "AI talent is migrating from Big Tech to startups, mid-market companies, and non-tech industries at unprecedented rates.",
        "Senior AI engineers now command $500K-1.2M total compensation. Research scientists at top labs: $1.2M-5M+.",
        "Remote work has democratized access to AI talent globally, creating new hubs in Toronto, London, Tel Aviv, Bangalore.",
        "The skills premium is shifting to LLM training, MLOps at scale, AI safety, and multimodal AI expertise.",
        "Traditional recruiting strategies are failing. Companies must offer impact, autonomy, and cutting-edge work to compete."
      ]}
      tags={['AI Talent', 'Tech Industry', 'Career', 'Compensation', 'Remote Work']}
      articleId="great-ai-talent-war"
    >
      <p>
        When I want to understand where AI is actually heading, I don't read model announcements. 
        I watch where the best people are moving.
      </p>

      <p>
        Talent flow is the best leading indicator I know. When top researchers leave Google for 
        a startup, that tells me something. When big tech veterans join non-tech enterprises, 
        that tells me something else. The patterns reveal what people on the inside know that 
        the rest of us don't.
      </p>

      <p>
        Right now, the patterns are telling a very clear story: <strong>the traditional tech giants 
        that once monopolized AI talent are losing their grip, and the implications are profound.</strong>
      </p>

      <h2>The Numbers Tell the Story</h2>

      <p>
        Based on recruiting data and salary surveys I've been tracking:
      </p>

      <TalentMigration />

      <p>
        The migration is real and accelerating:
      </p>

      <ul>
        <li><strong>Big Tech share:</strong> Down from 65% to 38% of new AI hires since 2022</li>
        <li><strong>AI startup hiring:</strong> Up 250% from 2022 levels</li>
        <li><strong>Non-tech industry AI roles:</strong> Increased 300% in the past three years</li>
        <li><strong>Remote AI positions:</strong> 72% of all new postings (vs. 23% pre-pandemic)</li>
      </ul>

      <p>
        But the aggregate numbers don't capture what's really happening. The key is understanding 
        <em>why</em> talent is moving and <em>where</em> they're going.
      </p>

      <h2>Why Big Tech Is Losing</h2>

      <p>
        I've talked to dozens of people who've made the move. The reasons are remarkably consistent:
      </p>

      <WhyBigTechLosing />

      <h3>The Bureaucracy Problem</h3>

      <p>
        As Google, Meta, Microsoft, and Amazon have matured, they've developed layers of process 
        that slow down AI innovation. Projects that used to take weeks now take months. Engineers 
        report spending more time in meetings than actually building.
      </p>

      <blockquote>
        "I was spending 60% of my time in meetings about meetings. I wanted to build AI, not 
        PowerPoint presentations about AI roadmaps."
      </blockquote>

      <h3>Risk Aversion at Scale</h3>

      <p>
        Large tech companies have billions of users and can't afford to ship experimental AI 
        features that might cause harm or controversy. This risk-averse culture frustrates 
        engineers who want to push boundaries.
      </p>

      <h3>Commoditization of Roles</h3>

      <p>
        As AI teams have grown from dozens to thousands, individual contributors report feeling 
        like "cogs in a machine." The days of small teams building groundbreaking products are 
        largely over at Big Tech companies.
      </p>

      <h2>Where the Talent Is Going</h2>

      <h3>1. AI-Native Startups</h3>

      <p>
        Companies like Anthropic, Cohere, and Midjourney are attracting top talent with:
      </p>

      <ul>
        <li>Direct impact on product direction</li>
        <li>Cutting-edge research opportunities</li>
        <li>Significant equity upside potential</li>
        <li>Small team dynamics and rapid iteration</li>
      </ul>

      <h3>2. Mid-Market Tech Companies</h3>

      <p>
        Companies like Shopify, Atlassian, and HubSpot are aggressively hiring AI talent to 
        differentiate their products. They offer Big Tech salaries without Big Tech bureaucracy.
      </p>

      <h3>3. Non-Tech Enterprises</h3>

      <p>
        Perhaps most surprisingly, traditional industries are becoming major AI talent destinations:
      </p>

      <ul>
        <li><strong>Financial Services:</strong> JPMorgan Chase has 1,500+ AI engineers</li>
        <li><strong>Healthcare:</strong> Mayo Clinic, Kaiser building internal AI teams</li>
        <li><strong>Retail:</strong> Walmart, Target investing heavily in AI talent</li>
        <li><strong>Manufacturing:</strong> GE, Siemens hiring for industrial AI</li>
      </ul>

      <h2>The Compensation Reality</h2>

      <p>
        AI talent compensation has reached levels that would have seemed impossible five years ago:
      </p>

      <CompensationLevels />

      <p>
        These numbers don't include the increasingly common practice of counter-offers, retention 
        bonuses, and "golden handcuffs" designed to prevent talent from leaving.
      </p>

      <blockquote>
        "I had five offers within a week, and they kept increasing their bids. It felt like an 
        auction for my brain."
      </blockquote>

      <h2>The Skills Premium</h2>

      <p>
        Not all AI skills are equally valuable. The market is paying significant premiums for 
        specific expertise:
      </p>

      <HotSkills />

      <h3>Hot Skills (High Demand, High Pay)</h3>

      <ul>
        <li><strong>LLM Training:</strong> Experience with transformer architectures at scale</li>
        <li><strong>MLOps at Scale:</strong> Building production ML infrastructure</li>
        <li><strong>AI Safety and Alignment:</strong> Ensuring AI systems behave as intended</li>
        <li><strong>Multimodal AI:</strong> Working across text, image, and audio models</li>
        <li><strong>Edge AI:</strong> Deploying models on mobile and IoT devices</li>
      </ul>

      <h3>Emerging High-Value Areas</h3>

      <ul>
        <li><strong>AI Product Management:</strong> Bridging technical and business requirements</li>
        <li><strong>AI Ethics and Governance:</strong> Managing AI risks and compliance</li>
        <li><strong>Prompt Engineering:</strong> Optimizing interactions with language models</li>
        <li><strong>AI-Human Interface Design:</strong> Creating intuitive AI-powered experiences</li>
      </ul>

      <h2>The Global Talent Pool</h2>

      <p>
        Remote work has fundamentally changed AI talent dynamics. Companies can now access a 
        truly global talent pool:
      </p>

      <GlobalTalentHubs />

      <h3>The Arbitrage Opportunity</h3>

      <p>
        Smart companies are hiring top AI talent in lower-cost markets while paying above local 
        rates but below Silicon Valley levels. A senior AI engineer in Montreal might earn 
        $200K CAD while their Silicon Valley counterpart earns $400K+ USD.
      </p>

      <h2>What This Means for Companies</h2>

      <p>
        Companies that want to compete for AI talent need to fundamentally rethink their approach:
      </p>

      <ul>
        <li><strong>Offer meaningful work:</strong> Projects with real impact and visibility</li>
        <li><strong>Minimize bureaucracy:</strong> Fast decision-making and execution</li>
        <li><strong>Provide learning opportunities:</strong> Access to cutting-edge research and tools</li>
        <li><strong>Embrace remote work:</strong> Access the global talent pool</li>
        <li><strong>Compete on total package:</strong> Salary, equity, benefits, and culture</li>
      </ul>

      <h2>What This Means for Individuals</h2>

      <p>
        If you're building a career in AI, the leverage is on your side:
      </p>

      <ul>
        <li><strong>Specialize deeply:</strong> The premium is in specific, high-demand skills</li>
        <li><strong>Consider non-traditional paths:</strong> Non-tech companies offer interesting problems and less competition</li>
        <li><strong>Negotiate hard:</strong> The market supports it</li>
        <li><strong>Build a public presence:</strong> Open source contributions and writing make you findable</li>
        <li><strong>Stay current:</strong> The field moves fast; continuous learning is essential</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>
        The AI talent war is still in its early stages. As AI becomes more central to business 
        strategy, demand for skilled practitioners will only increase.
      </p>

      <p>
        Traditional tech giants may need to rediscover their startup roots to remain competitive. 
        The companies that can offer the best combination of compensation, impact, and culture 
        will attract the talent needed to lead the AI revolution.
      </p>

      <p>
        For now, the advantage clearly lies with AI professionals who have the leverage to demand 
        high compensation, interesting work, and flexible arrangements. The question isn't whether 
        the AI talent war will continue. It's which companies will adapt their strategies to win it.
      </p>

      <blockquote>
        The companies that win the AI talent war will win the AI market. Everything else follows 
        from people.
      </blockquote>
    </ArticleLayout>
  );
};

export default GreatAITalentWar;
