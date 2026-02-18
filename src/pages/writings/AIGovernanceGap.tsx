import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const SpeedMismatchTimeline: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Speed Mismatch I Keep Seeing</text>
    
    {/* AI Development timeline */}
    <text x="100" y="70" fill="#22c55e" fontSize="12" fontWeight="600">AI Development</text>
    <line x1="100" y1="90" x2="700" y2="90" stroke="#22c55e" strokeWidth="2" />
    
    {[
      { year: '2022', event: 'ChatGPT: 100M users', x: 150 },
      { year: '2023', event: 'GPT-4 multimodal', x: 300 },
      { year: '2024', event: 'Claude 3.5, Gemini 2.0', x: 450 },
      { year: '2025', event: 'GPT-5, AI agents', x: 600 },
    ].map((item, i) => (
      <g key={i}>
        <circle cx={item.x} cy="90" r="6" fill="#22c55e" />
        <text x={item.x} y="75" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">{item.year}</text>
        <text x={item.x} y="115" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">{item.event}</text>
      </g>
    ))}
    
    {/* Regulatory timeline */}
    <text x="100" y="170" fill="#ef4444" fontSize="12" fontWeight="600">Regulation</text>
    <line x1="100" y1="190" x2="700" y2="190" stroke="#ef4444" strokeWidth="2" />
    
    {[
      { year: '2023', event: 'Biden EO issued', x: 200 },
      { year: '2024', event: 'EU AI Act enters force', x: 350 },
      { year: '2025', event: 'Prohibition tier begins', x: 500 },
      { year: '2027', event: 'Full enforcement', x: 650 },
    ].map((item, i) => (
      <g key={i}>
        <circle cx={item.x} cy="190" r="6" fill="#ef4444" />
        <text x={item.x} y="175" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">{item.year}</text>
        <text x={item.x} y="215" fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">{item.event}</text>
      </g>
    ))}
    
    {/* Gap indicator */}
    <rect x="200" y="250" width="400" height="60" rx="8" fill="rgba(234, 179, 8, 0.1)" stroke="#eab308" strokeWidth="1" />
    <text x="400" y="275" fill="#eab308" fontSize="12" fontWeight="600" textAnchor="middle">The Governance Gap</text>
    <text x="400" y="295" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">AI advances every 6-12 months. Regulation takes 3-5 years.</text>
    
    <text x="400" y="335" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">By the time rules are enforced, the technology has evolved beyond recognition</text>
  </svg>
);

const WhyRegulationFailsDiagram: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Why Traditional Regulation Fails AI</text>
    
    {[
      { 
        title: 'Software Paradox', 
        icon: '🔄',
        problem: 'A single update changes everything',
        detail: 'Traditional regulation assumes static products',
        color: '#ef4444'
      },
      { 
        title: 'Capability Explosion', 
        icon: '💥',
        problem: 'Models develop unexpected abilities',
        detail: 'Can\'t regulate what doesn\'t exist yet',
        color: '#f97316'
      },
      { 
        title: 'Global Development', 
        icon: '🌍',
        problem: 'Built anywhere, deployed everywhere',
        detail: 'National rules create arbitrage',
        color: '#eab308'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 250} y="70" width="220" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={160 + i * 250} y="110" fill="white" fontSize="28" textAnchor="middle">{item.icon}</text>
        <text x={160 + i * 250} y="145" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{item.title}</text>
        <line x1={80 + i * 250} y1="165" x2={240 + i * 250} y2="165" stroke="rgba(255,255,255,0.1)" />
        <text x={160 + i * 250} y="195" fill={item.color} fontSize="11" textAnchor="middle">{item.problem}</text>
        <text x={160 + i * 250} y="230" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{item.detail}</text>
      </g>
    ))}
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Regulating AI with traditional tools is like regulating the internet with postal laws</text>
  </svg>
);

const GlobalApproachesComparison: React.FC = () => (
  <svg viewBox="0 0 800 380" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="380" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Three Regulatory Philosophies</text>
    
    {[
      { 
        region: 'European Union', 
        flag: '🇪🇺',
        philosophy: 'Safety First',
        approach: 'Comprehensive rules',
        pros: ['Strong citizen protection', 'Clear requirements'],
        cons: ['Innovation friction', 'Slow to adapt'],
        color: '#3b82f6'
      },
      { 
        region: 'United States', 
        flag: '🇺🇸',
        philosophy: 'Innovation + Guardrails',
        approach: 'Sector-specific, voluntary',
        pros: ['Fast deployment', 'Competitive edge'],
        cons: ['Gaps in coverage', 'Inconsistent'],
        color: '#22c55e'
      },
      { 
        region: 'China', 
        flag: '🇨🇳',
        philosophy: 'State Control',
        approach: 'Coordinated direction',
        pros: ['Rapid implementation', 'Clear priorities'],
        cons: ['Innovation diversity', 'Global friction'],
        color: '#ef4444'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 250} y="60" width="220" height="280" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={160 + i * 250} y="95" fill="white" fontSize="24" textAnchor="middle">{item.flag}</text>
        <text x={160 + i * 250} y="120" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.region}</text>
        <text x={160 + i * 250} y="145" fill={item.color} fontSize="11" textAnchor="middle">"{item.philosophy}"</text>
        <line x1={80 + i * 250} y1="160" x2={240 + i * 250} y2="160" stroke="rgba(255,255,255,0.1)" />
        <text x={160 + i * 250} y="185" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">{item.approach}</text>
        
        <text x={70 + i * 250} y="215" fill="#22c55e" fontSize="9">✓ {item.pros[0]}</text>
        <text x={70 + i * 250} y="235" fill="#22c55e" fontSize="9">✓ {item.pros[1]}</text>
        <text x={70 + i * 250} y="265" fill="#ef4444" fontSize="9">✗ {item.cons[0]}</text>
        <text x={70 + i * 250} y="285" fill="#ef4444" fontSize="9">✗ {item.cons[1]}</text>
      </g>
    ))}
    
    <text x="400" y="360" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">No approach is perfect. Each reflects different values and trade-offs.</text>
  </svg>
);

const InternalGovernanceFramework: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Building Your Own AI Governance</text>
    <text x="400" y="55" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">The framework I recommend to every company I advise</text>
    
    {/* Central hub */}
    <circle cx="400" cy="180" r="50" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2" />
    <text x="400" y="175" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">AI Ethics</text>
    <text x="400" y="190" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">Board</text>
    
    {/* Surrounding elements */}
    {[
      { label: 'Risk Assessment', desc: 'Evaluate before deploy', angle: 0, color: '#3b82f6' },
      { label: 'Dev Standards', desc: 'Guidelines for building', angle: 72, color: '#22c55e' },
      { label: 'Testing Protocols', desc: 'Validate behavior', angle: 144, color: '#eab308' },
      { label: 'Monitoring', desc: 'Ongoing oversight', angle: 216, color: '#f97316' },
      { label: 'Incident Response', desc: 'Handle failures', angle: 288, color: '#ef4444' },
    ].map((item, i) => {
      const x = 400 + Math.cos((item.angle - 90) * Math.PI / 180) * 150;
      const y = 180 + Math.sin((item.angle - 90) * Math.PI / 180) * 120;
      return (
        <g key={i}>
          <line x1="400" y1="180" x2={x} y2={y} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4" />
          <circle cx={x} cy={y} r="45" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
          <text x={x} y={y - 5} fill="white" fontSize="10" fontWeight="500" textAnchor="middle">{item.label}</text>
          <text x={x} y={y + 10} fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">{item.desc}</text>
        </g>
      );
    })}
    
    <text x="400" y="330" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Don't wait for regulation. Build these capabilities now.</text>
  </svg>
);

const CompetitiveAdvantageChart: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Governance as Competitive Advantage</text>
    
    {[
      { benefit: 'Regulatory Readiness', desc: 'Prepared when rules arrive', icon: '📋', color: '#3b82f6' },
      { benefit: 'Risk Mitigation', desc: 'Fewer AI incidents', icon: '🛡️', color: '#22c55e' },
      { benefit: 'Customer Trust', desc: 'Transparency builds confidence', icon: '🤝', color: '#8b5cf6' },
      { benefit: 'Talent Attraction', desc: 'Top researchers want ethics', icon: '🧲', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="24" textAnchor="middle">{item.icon}</text>
        <text x={132 + i * 185} y="140" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.benefit}</text>
        <text x={132 + i * 185} y="175" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc.split(' ').slice(0, 2).join(' ')}</text>
        <text x={132 + i * 185} y="190" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc.split(' ').slice(2).join(' ')}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">First movers in governance will have lasting advantages</text>
  </svg>
);

const AIGovernanceGap: React.FC = () => {
  return (
    <ArticleLayout
      category="AI & Technology"
      title="The AI Governance Gap: What I've Learned About Regulation That's Already Obsolete"
      subtitle="After watching governments struggle to keep up with AI, I've concluded that companies must build their own governance frameworks"
      author="Kushal Parameshwara"
      date="November 20, 2025"
      readTime="11 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
        alt: "Government buildings and digital networks representing AI governance"
      }}
      keyTakeaways={[
        "AI development outpaces regulation by design, not by accident. This gap is permanent.",
        "Traditional regulatory models assume static products and slow change. AI breaks both assumptions.",
        "Self-regulation and industry standards are emerging as more practical than waiting for government.",
        "Companies that build internal AI governance now will have massive competitive advantages.",
        "The question isn't whether regulation will catch up. It won't. The question is whether you're prepared."
      ]}
      tags={['AI Governance', 'Regulation', 'Policy', 'Risk Management', 'Strategy']}
      articleId="ai-governance-gap"
    >
      <p>
        I've watched the AI governance conversation closely for the past three years, and I've come to a conclusion 
        that might frustrate people who want neat regulatory solutions: <strong>by the time any AI regulation 
        becomes enforceable, the technology it targets will have evolved beyond recognition.</strong>
      </p>

      <p>
        This isn't a temporary problem that better policymaking will fix. It's a structural feature of how AI 
        develops versus how democratic governance works. Understanding this mismatch is crucial for anyone 
        trying to build or deploy AI responsibly.
      </p>

      <p>
        In this article, I want to share what I've learned about why traditional regulation fails AI, what 
        different jurisdictions are trying, and most importantly, what companies should actually do about it.
      </p>

      <h2>The Math Doesn't Work</h2>

      <p>
        Let me start with the basic arithmetic that makes AI governance so challenging:
      </p>

      <SpeedMismatchTimeline />

      <p>
        AI capabilities advance meaningfully every 6-12 months. We went from GPT-3 to GPT-4 to GPT-5 in about 
        three years, with each generation representing a quantum leap in capability. Meanwhile, comprehensive 
        regulation takes 3-5 years to draft, debate, pass, and implement.
      </p>

      <p>
        The EU AI Act, the most ambitious AI regulation to date, was drafted based on 2019-era understanding 
        of AI capabilities. By the time its full requirements take effect in 2027, it will be regulating 
        technology that's multiple generations behind current capabilities.
      </p>

      <p>
        This isn't a criticism of regulators. They're working within systems designed for slower-moving 
        technologies. But the result is a permanent governance gap that leaves businesses, consumers, and 
        society navigating an unregulated frontier.
      </p>

      <h2>Why Traditional Regulation Breaks Down</h2>

      <p>
        The speed mismatch is just the surface problem. Deeper structural issues make AI fundamentally 
        different from previous technologies we've regulated.
      </p>

      <WhyRegulationFailsDiagram />

      <h3>The Software Problem</h3>

      <p>
        Traditional product regulation assumes you can test a product, certify it, and then monitor it over 
        time. The product stays basically the same.
      </p>

      <p>
        AI doesn't work that way. A single software update can fundamentally change an AI system's capabilities, 
        behavior, and risk profile. The system you certified last month isn't the system running today. 
        Continuous deployment means continuous change.
      </p>

      <h3>Emergent Capabilities</h3>

      <p>
        AI systems regularly develop capabilities that weren't present during training and that no one anticipated. 
        GPT models spontaneously developed mathematical reasoning, chain-of-thought problem solving, and code 
        generation abilities that surprised their creators.
      </p>

      <p>
        How do you regulate capabilities that don't exist yet? By the time you've identified and addressed a 
        capability, three new ones have emerged.
      </p>

      <h3>Global Development</h3>

      <p>
        AI development happens simultaneously across dozens of countries with vastly different regulatory 
        approaches. A system banned in Europe can be developed in Asia, trained on data from Africa, and 
        deployed globally via the internet.
      </p>

      <p>
        National regulation of a global technology creates regulatory arbitrage opportunities that undermine 
        any single jurisdiction's oversight.
      </p>

      <blockquote>
        Trying to regulate AI with traditional approaches is like trying to regulate the internet with 
        postal service laws. The fundamental assumptions about how technology works are mismatched.
      </blockquote>

      <h2>What Different Regions Are Trying</h2>

      <p>
        Despite these challenges, governments are trying. Here's my assessment of the major approaches:
      </p>

      <GlobalApproachesComparison />

      <h3>The EU: Comprehensive but Already Dated</h3>

      <p>
        The EU AI Act is the most ambitious AI regulation to date. It establishes a risk-based framework 
        with different requirements based on how dangerous an AI application might be.
      </p>

      <p>
        What I appreciate about the EU approach: it takes AI risks seriously and creates clear accountability. 
        Companies know what's expected.
      </p>

      <p>
        What concerns me: the Act was designed for a different era of AI. The "foundation model" provisions 
        were added late and remain poorly defined. Several AI startups have already relocated outside the 
        EU to avoid compliance costs. The "Brussels Effect" (where EU regulation becomes a global standard) 
        seems limited in AI compared to other sectors.
      </p>

      <h3>The US: Innovation First, Safety Second</h3>

      <p>
        The American approach emphasizes voluntary guidelines, sector-specific regulation, and maintaining 
        competitiveness. No comprehensive AI legislation, but active regulatory agencies adapting existing 
        frameworks.
      </p>

      <p>
        What I appreciate: it allows for faster innovation and doesn't impose heavy compliance costs on 
        startups. American AI development has continued to lead.
      </p>

      <p>
        What concerns me: there are real gaps in coverage. Voluntary commitments are only as good as the 
        companies making them. And the patchwork of state laws creates its own complexity.
      </p>

      <h3>China: Coordinated Control</h3>

      <p>
        China has developed the most coherent approach, integrating AI governance into its broader technology 
        strategy with direct state involvement.
      </p>

      <p>
        What works: rapid implementation, clear priorities, strong coordination between development and 
        regulation.
      </p>

      <p>
        What doesn't translate: the approach reflects China's unique political system and raises questions 
        about innovation diversity and global coordination.
      </p>

      <h2>Self-Regulation Is Filling the Gap</h2>

      <p>
        In the absence of effective government regulation, tech companies are developing their own governance 
        frameworks. I've seen this evolve from PR exercises to genuine safety efforts at leading AI labs.
      </p>

      <p>
        <strong>OpenAI's approach:</strong> Staged deployment, capability evaluation, red-teaming before release. 
        They've genuinely delayed or modified releases based on safety concerns.
      </p>

      <p>
        <strong>Anthropic's Constitutional AI:</strong> Building ethical reasoning directly into model training. 
        This is technically sophisticated and represents real innovation in AI safety.
      </p>

      <p>
        <strong>Industry coordination:</strong> The Frontier Model Forum brings together leading AI companies 
        to coordinate on safety research. The Partnership on AI facilitates broader multi-stakeholder dialogue.
      </p>

      <p>
        Is self-regulation perfect? No. Companies have obvious conflicts of interest. But it's moving faster 
        than government regulation and is increasingly substantive.
      </p>

      <h2>What Companies Should Actually Do</h2>

      <p>
        Here's the practical advice I give to every company I work with: <strong>don't wait for regulation. 
        Build your own AI governance framework now.</strong>
      </p>

      <InternalGovernanceFramework />

      <h3>The Core Components</h3>

      <p>
        <strong>Risk Assessment:</strong> Before deploying any AI system, systematically evaluate its risks. 
        What could go wrong? Who could be harmed? What's the worst case?
      </p>

      <p>
        <strong>Development Standards:</strong> Create guidelines for how AI systems should be built. What 
        testing is required? What documentation? What oversight?
      </p>

      <p>
        <strong>Testing Protocols:</strong> Validate AI behavior before deployment. This includes both 
        technical testing (does it work?) and ethical testing (does it behave acceptably?).
      </p>

      <p>
        <strong>Ongoing Monitoring:</strong> Don't deploy and forget. Monitor AI systems continuously for 
        performance degradation, bias emergence, and unexpected behaviors.
      </p>

      <p>
        <strong>Incident Response:</strong> Have procedures ready for when things go wrong. How will you 
        detect problems? Who decides what to do? How will you communicate?
      </p>

      <h3>Organizational Structure</h3>

      <p>
        Governance needs clear ownership:
      </p>

      <ul>
        <li><strong>AI Ethics Board:</strong> Cross-functional committee with real authority to review and block deployments</li>
        <li><strong>AI Risk Officer:</strong> Dedicated role responsible for AI risk management</li>
        <li><strong>Technical Safety Team:</strong> Engineers focused specifically on AI safety</li>
        <li><strong>Policy and Compliance:</strong> Legal and regulatory expertise for navigating the evolving landscape</li>
      </ul>

      <h2>The Competitive Advantage</h2>

      <p>
        I want to be clear: this isn't just about avoiding risk. Companies that get AI governance right early 
        will have significant competitive advantages.
      </p>

      <CompetitiveAdvantageChart />

      <p>
        <strong>Regulatory readiness:</strong> When rules eventually emerge, you'll already be compliant. 
        Competitors will scramble to catch up.
      </p>

      <p>
        <strong>Risk mitigation:</strong> Fewer AI-related incidents means less crisis management, less 
        legal exposure, less reputation damage.
      </p>

      <p>
        <strong>Customer trust:</strong> Enterprise customers increasingly demand responsible AI. 
        Transparency and accountability become selling points.
      </p>

      <p>
        <strong>Talent attraction:</strong> Top AI researchers want to work at organizations that take 
        ethics seriously. Governance capabilities help you recruit.
      </p>

      <h2>Looking Forward</h2>

      <p>
        The AI governance gap isn't going away. If anything, it will widen as AI capabilities accelerate 
        while regulatory processes remain slow.
      </p>

      <p>
        I expect to see:
      </p>

      <ul>
        <li><strong>More sophisticated self-regulation:</strong> Industry standards becoming more detailed and enforceable</li>
        <li><strong>Technology-enabled governance:</strong> AI systems that help monitor and regulate other AI systems</li>
        <li><strong>International coordination:</strong> Gradual emergence of global frameworks, though this will be slow</li>
        <li><strong>Adaptive regulation:</strong> Some jurisdictions experimenting with more flexible regulatory approaches</li>
      </ul>

      <p>
        But none of this will close the fundamental gap. The companies and organizations that accept this 
        reality and build their own governance capabilities will be better positioned for whatever comes next.
      </p>

      <blockquote>
        The question isn't whether AI regulation will catch up to AI development. It won't. The question 
        is whether organizations will build the internal governance capabilities to thrive in an ungoverned space.
      </blockquote>

      <p>
        The future belongs to organizations that can govern themselves effectively. The AI governance gap 
        isn't a bug in the system. It's a feature of the new technological reality. The sooner businesses 
        accept this and adapt, the better positioned they'll be for the AI-driven future.
      </p>
    </ArticleLayout>
  );
};

export default AIGovernanceGap;
