import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const RegulatoryTrilemma: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Regulatory Trilemma</text>
    <text x="400" y="55" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">Pick any two. You can't have all three.</text>
    
    {/* Triangle */}
    <polygon points="400,90 200,280 600,280" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    
    {/* Vertices */}
    <circle cx="400" cy="90" r="45" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
    <text x="400" y="85" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">Safety</text>
    <text x="400" y="100" fill="#22c55e" fontSize="9" textAnchor="middle">Protect users</text>
    
    <circle cx="200" cy="280" r="45" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
    <text x="200" y="275" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">Innovation</text>
    <text x="200" y="290" fill="#3b82f6" fontSize="9" textAnchor="middle">Move fast</text>
    
    <circle cx="600" cy="280" r="45" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" strokeWidth="2" />
    <text x="600" y="275" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">Coordination</text>
    <text x="600" y="290" fill="#a855f7" fontSize="9" textAnchor="middle">Global standards</text>
    
    {/* Region labels */}
    <text x="300" y="200" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">EU Choice</text>
    <text x="500" y="200" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">US Choice</text>
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">China Choice</text>
    
    <text x="400" y="335" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Every jurisdiction must make trade-offs. There's no perfect solution.</text>
  </svg>
);

const RegionalApproaches: React.FC = () => (
  <svg viewBox="0 0 800 400" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="400" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Three Philosophies, Three Trade-offs</text>
    
    {[
      { 
        region: 'European Union', 
        flag: '🇪🇺',
        approach: 'Safety First',
        priority: ['Citizen protection', 'Fundamental rights', 'Transparency'],
        sacrifice: 'Innovation speed',
        status: 'EU AI Act enforcing',
        color: '#3b82f6'
      },
      { 
        region: 'United States', 
        flag: '🇺🇸',
        approach: 'Innovation + Guardrails',
        priority: ['Market competition', 'Sectoral regulation', 'Voluntary standards'],
        sacrifice: 'Comprehensive coverage',
        status: 'State-level patchwork',
        color: '#22c55e'
      },
      { 
        region: 'China', 
        flag: '🇨🇳',
        approach: 'State Coordination',
        priority: ['Rapid deployment', 'Strategic alignment', 'Clear direction'],
        sacrifice: 'Innovation diversity',
        status: 'Full implementation',
        color: '#ef4444'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 250} y="70" width="220" height="290" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={160 + i * 250} y="105" fill="white" fontSize="28" textAnchor="middle">{item.flag}</text>
        <text x={160 + i * 250} y="130" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{item.region}</text>
        <text x={160 + i * 250} y="155" fill={item.color} fontSize="11" textAnchor="middle">"{item.approach}"</text>
        
        <text x={70 + i * 250} y="185" fill="rgba(255,255,255,0.5)" fontSize="10">Prioritizes:</text>
        {item.priority.map((p, j) => (
          <text key={j} x={70 + i * 250} y={205 + j * 18} fill="rgba(255,255,255,0.7)" fontSize="10">• {p}</text>
        ))}
        
        <text x={70 + i * 250} y={275} fill="rgba(255,255,255,0.5)" fontSize="10">Sacrifices:</text>
        <text x={70 + i * 250} y={295} fill="#ef4444" fontSize="10">⚠ {item.sacrifice}</text>
        
        <rect x={70 + i * 250} y={315} width="180" height="25" rx="4" fill={item.color} opacity="0.2" />
        <text x={160 + i * 250} y={332} fill={item.color} fontSize="9" textAnchor="middle">{item.status}</text>
      </g>
    ))}
    
    <text x="400" y="385" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Each approach reflects different values and acceptable trade-offs</text>
  </svg>
);

const InnovationImpactChart: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Early Evidence: How Regulation Affects Innovation</text>
    
    {/* Positive effects */}
    <rect x="50" y="70" width="330" height="200" rx="10" fill="rgba(34, 197, 94, 0.05)" stroke="#22c55e" strokeWidth="1" />
    <text x="215" y="100" fill="#22c55e" fontSize="13" fontWeight="600" textAnchor="middle">Positive Innovation Effects</text>
    
    {[
      'Increased AI safety R&D investment',
      'Growth in governance tech sector',
      'Better coordination with domain experts',
      'Standardization enabling trust'
    ].map((item, i) => (
      <text key={i} x="70" y={135 + i * 30} fill="rgba(255,255,255,0.7)" fontSize="11">✓ {item}</text>
    ))}
    
    {/* Negative effects */}
    <rect x="420" y="70" width="330" height="200" rx="10" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="1" />
    <text x="585" y="100" fill="#ef4444" fontSize="13" fontWeight="600" textAnchor="middle">Negative Innovation Effects</text>
    
    {[
      'Compliance costs hurt smaller players',
      'Delayed deployment of beneficial AI',
      'Brain drain to less regulated areas',
      'Reduced experimentation'
    ].map((item, i) => (
      <text key={i} x="440" y={135 + i * 30} fill="rgba(255,255,255,0.7)" fontSize="11">✗ {item}</text>
    ))}
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The real question: does safer innovation outweigh reduced experimentation?</text>
  </svg>
);

const BestPracticesFramework: React.FC = () => (
  <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="300" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">What's Actually Working: Emerging Best Practices</text>
    
    {[
      { 
        practice: 'Adaptive Regulation', 
        icon: '🔄',
        desc: 'Rules that evolve with tech',
        example: 'Regular review cycles',
        color: '#22c55e'
      },
      { 
        practice: 'Risk-Proportionate', 
        icon: '⚖️',
        desc: 'More oversight for higher risk',
        example: 'Tiered requirements',
        color: '#3b82f6'
      },
      { 
        practice: 'Multi-Stakeholder', 
        icon: '🤝',
        desc: 'Industry + civil society input',
        example: 'Advisory boards',
        color: '#8b5cf6'
      },
      { 
        practice: 'Outcome-Focused', 
        icon: '🎯',
        desc: 'Results over methods',
        example: 'Performance standards',
        color: '#f97316'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="180" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="24" textAnchor="middle">{item.icon}</text>
        <text x={132 + i * 185} y="135" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.practice}</text>
        <text x={132 + i * 185} y="165" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc}</text>
        <rect x={72 + i * 185} y="185" width="120" height="22" rx="4" fill={item.color} opacity="0.2" />
        <text x={132 + i * 185} y="200" fill={item.color} fontSize="9" textAnchor="middle">{item.example}</text>
      </g>
    ))}
    
    <text x="400" y="280" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The jurisdictions getting this right will lead the next AI wave</text>
  </svg>
);

const CoordinationChallenges: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Global Coordination Problem</text>
    
    {/* Current efforts */}
    <rect x="50" y="60" width="700" height="80" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <text x="400" y="85" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">Current Coordination Efforts</text>
    
    {[
      { name: 'G7 Principles', status: '📝' },
      { name: 'OECD Guidelines', status: '📋' },
      { name: 'UN Advisory', status: '🌐' },
      { name: 'Partnership on AI', status: '🤝' },
    ].map((item, i) => (
      <g key={i}>
        <text x={120 + i * 170} y={120} fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">{item.status} {item.name}</text>
      </g>
    ))}
    
    {/* The gap */}
    <rect x="50" y="160" width="700" height="80" rx="8" fill="rgba(234, 179, 8, 0.1)" stroke="#eab308" strokeWidth="1" />
    <text x="400" y="190" fill="#eab308" fontSize="12" fontWeight="600" textAnchor="middle">The Gap: Dialogue Without Binding Agreements</text>
    <text x="400" y="215" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">AI doesn't respect borders, but regulation does. The mismatch creates arbitrage.</text>
    
    <text x="400" y="265" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">International coordination remains the weakest link in AI governance</text>
  </svg>
);

const AIRegulationInnovationBalance: React.FC = () => {
  return (
    <ArticleLayout
      category="AI & Technology"
      title="AI Regulation: My Take on the Innovation vs. Safety Debate"
      subtitle="After watching different jurisdictions try different approaches, here's what I think actually works"
      author="Kushal Parameshwara"
      date="November 8, 2025"
      readTime="12 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop",
        alt: "Government buildings and digital technology representing AI regulation"
      }}
      keyTakeaways={[
        "AI regulation faces a fundamental trilemma: safety, innovation speed, and global coordination. You can optimize for two, not all three.",
        "The EU prioritizes safety, the US prioritizes innovation, China prioritizes coordination. Each approach has trade-offs.",
        "Early evidence shows regulation both helps (more safety R&D) and hurts (compliance costs, delayed deployment).",
        "Risk-proportionate and adaptive regulation is proving more effective than blanket rules.",
        "International coordination is the weakest link. AI doesn't respect borders, but regulation does."
      ]}
      tags={['AI Regulation', 'Policy', 'Innovation', 'Governance', 'Strategy']}
      articleId="ai-regulation-innovation-balance"
    >
      <p>
        I've been following the AI regulation debate intensely for the past two years, watching different 
        jurisdictions experiment with different approaches. The EU AI Act is now enforcing its prohibition 
        tier. China has fully implemented comprehensive regulations. The US continues its patchwork of 
        state laws and executive actions.
      </p>

      <p>
        Everyone has strong opinions about who's getting it right. But after studying what's actually 
        happening on the ground, I've come to a more nuanced view: <strong>there's no perfect approach, 
        only trade-offs that reflect different values.</strong>
      </p>

      <p>
        Let me share what I've learned about this balance between innovation and safety, and what I 
        think actually works.
      </p>

      <h2>The Fundamental Trade-off</h2>

      <p>
        At its core, AI regulation faces what I call the "regulatory trilemma." Policymakers want three 
        things simultaneously:
      </p>

      <ul>
        <li><strong>Comprehensive Safety:</strong> Protecting people from AI harms</li>
        <li><strong>Innovation Velocity:</strong> Maintaining rapid AI progress</li>
        <li><strong>Global Coordination:</strong> Consistent international standards</li>
      </ul>

      <p>
        Here's the uncomfortable truth: you can optimize for any two of these, but not all three.
      </p>

      <RegulatoryTrilemma />

      <p>
        This framework helps explain why different jurisdictions have made different choices. They're 
        not necessarily wrong; they're prioritizing different values.
      </p>

      <h2>How Different Regions Are Choosing</h2>

      <p>
        Let me walk through how each major region is navigating this trilemma:
      </p>

      <RegionalApproaches />

      <h3>The European Approach</h3>

      <p>
        The EU has chosen safety and (attempted) coordination, accepting slower innovation as the trade-off.
      </p>

      <p>
        The AI Act establishes a risk-based framework with different requirements based on how dangerous 
        an AI application might be. Prohibited practices include social scoring and certain biometric 
        systems. High-risk applications require extensive compliance.
      </p>

      <p>
        What I appreciate about this approach: it takes AI risks seriously and creates clear accountability. 
        Companies know what's expected.
      </p>

      <p>
        What concerns me: the Act was designed based on 2019-era understanding of AI. Several startups 
        have relocated outside the EU. Some companies are delaying EU launches of new AI features. The 
        "Brussels Effect" seems limited in AI compared to other sectors.
      </p>

      <h3>The American Approach</h3>

      <p>
        The US has chosen innovation and (partial) safety, accepting limited coordination as the trade-off.
      </p>

      <p>
        The American approach relies on voluntary guidelines, sector-specific regulation (FDA, FTC, NHTSA), 
        and executive orders without strong enforcement mechanisms. It assumes that innovation itself 
        contributes to safety by keeping US companies at the frontier.
      </p>

      <p>
        What I appreciate: it allows for faster experimentation and doesn't impose heavy compliance costs 
        on startups. American AI development continues to lead.
      </p>

      <p>
        What concerns me: there are real gaps in coverage. Voluntary commitments are only as good as 
        the companies making them. And the patchwork of state laws creates its own complexity.
      </p>

      <h3>The Chinese Approach</h3>

      <p>
        China has chosen coordination (internally) and innovation, with a different conception of safety 
        focused on social stability rather than individual rights.
      </p>

      <p>
        The Chinese approach integrates AI governance directly into state planning, with comprehensive 
        requirements for algorithmic transparency and data governance. The state plays a direct role 
        in coordinating development priorities.
      </p>

      <p>
        What works: rapid implementation, clear priorities, strong coordination between development 
        and regulation.
      </p>

      <p>
        What doesn't translate: the approach reflects China's unique political system and raises 
        questions about innovation diversity and global interoperability.
      </p>

      <h2>What the Early Evidence Shows</h2>

      <p>
        We now have about two years of data on how major AI regulation affects innovation. The picture 
        is mixed:
      </p>

      <InnovationImpactChart />

      <h3>The Positive Story</h3>

      <p>
        Regulation has driven increased investment in AI safety research. The governance and compliance 
        technology sector is growing rapidly. There's better coordination between AI developers and 
        domain experts (healthcare, finance, etc.). And standardization is building trust that enables 
        broader adoption.
      </p>

      <h3>The Negative Story</h3>

      <p>
        Compliance costs are disproportionately hitting smaller companies. Some beneficial AI applications 
        are being delayed. There's evidence of brain drain from heavily regulated to less regulated 
        jurisdictions. And overall experimentation with novel approaches seems to have decreased in 
        regulated areas.
      </p>

      <blockquote>
        The question isn't whether regulation affects innovation. It clearly does. The question is 
        whether the innovation it encourages (safer, more robust systems) outweighs the innovation 
        it discourages (rapid deployment and experimentation).
      </blockquote>

      <h2>What I Think Actually Works</h2>

      <p>
        After studying different approaches, some patterns are emerging about what makes AI regulation 
        effective:
      </p>

      <BestPracticesFramework />

      <h3>Adaptive Regulation</h3>

      <p>
        The most successful approaches are those designed to evolve with the technology. This includes 
        regular review and updating of requirements, stakeholder engagement processes, sandbox 
        environments for testing new approaches, and performance-based rather than prescriptive rules.
      </p>

      <p>
        Static regulation written for today's AI will be obsolete by the time it's fully implemented. 
        The regulatory framework needs built-in mechanisms for evolution.
      </p>

      <h3>Risk-Proportionate Requirements</h3>

      <p>
        Regulations that scale requirements with risk levels are proving more effective than blanket 
        rules. Light-touch oversight for low-risk applications, graduated requirements based on 
        capability and deployment context, special attention to high-stakes domains.
      </p>

      <p>
        This approach lets innovation flourish in lower-risk areas while applying appropriate scrutiny 
        to genuinely dangerous applications.
      </p>

      <h3>Multi-Stakeholder Governance</h3>

      <p>
        The most effective AI governance involves multiple stakeholders: technical experts informing 
        policy development, civil society groups representing affected communities, industry input 
        on implementation feasibility.
      </p>

      <p>
        Regulators who try to do this alone usually get it wrong. The technology is too complex and 
        fast-moving for any single group to understand fully.
      </p>

      <h3>Outcome-Focused Standards</h3>

      <p>
        Regulations should specify desired outcomes (safety, fairness, transparency) rather than 
        prescribing specific technical approaches. This allows for innovation in how outcomes are 
        achieved while maintaining clear accountability.
      </p>

      <h2>The Coordination Problem</h2>

      <p>
        The biggest challenge in AI regulation isn't any single jurisdiction's approach. It's the 
        lack of effective international coordination.
      </p>

      <CoordinationChallenges />

      <p>
        AI systems don't respect borders. A model banned in Europe can be developed in Asia and 
        accessed globally via the internet. Regulatory fragmentation creates opportunities for 
        arbitrage and races to the bottom.
      </p>

      <p>
        We have dialogue (G7 principles, OECD guidelines, UN advisory bodies) but not binding 
        international agreements. This is probably the weakest link in global AI governance.
      </p>

      <h2>What This Means for Companies</h2>

      <p>
        For organizations developing or deploying AI, here's my practical advice:
      </p>

      <p>
        <strong>Build compliance as competitive advantage.</strong> Don't view regulation as pure 
        cost. Companies that get AI governance right early will be better positioned when rules 
        tighten everywhere.
      </p>

      <p>
        <strong>Engage proactively with regulators.</strong> The rules are still being written. 
        Constructive engagement can shape outcomes that work for both safety and innovation.
      </p>

      <p>
        <strong>Design for global requirements from the start.</strong> If you're building AI 
        products, design for the most stringent regulatory environment you might face. Retrofitting 
        compliance is much harder than building it in.
      </p>

      <p>
        <strong>Invest in AI safety as a differentiator.</strong> As users and enterprises become 
        more sophisticated about AI risks, responsible development becomes a competitive advantage.
      </p>

      <h2>Looking Forward</h2>

      <p>
        The balance between AI innovation and safety will remain a central policy challenge for 
        years. Success will require continued experimentation, international cooperation, and 
        willingness to adapt as both AI capabilities and our understanding of risks evolve.
      </p>

      <p>
        The jurisdictions that get this balance right will likely emerge as leaders in the next 
        phase of the AI revolution. Those that get it wrong risk either stifling their AI sectors 
        or unleashing dangerous systems without adequate safeguards.
      </p>

      <p>
        Ultimately, effective AI regulation isn't about choosing between innovation and safety. 
        It's about creating frameworks that enable both. The challenge is complex, but the stakes 
        make it one of the most important policy puzzles of our time.
      </p>

      <blockquote>
        The goal of AI regulation should not be to prevent all possible harms, but to create 
        systems robust enough to identify, respond to, and learn from the harms that do occur 
        while preserving the benefits that AI can provide.
      </blockquote>

      <p>
        I don't think any jurisdiction has figured this out yet. But I'm watching closely to see 
        which approaches actually work in practice, not just in theory. That's where the real 
        learning happens.
      </p>
    </ArticleLayout>
  );
};

export default AIRegulationInnovationBalance;
