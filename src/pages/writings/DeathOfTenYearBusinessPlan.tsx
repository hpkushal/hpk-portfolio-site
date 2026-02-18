import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const PlanningAssumptions: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Assumptions That No Longer Hold</text>
    
    {/* Traditional assumptions */}
    <rect x="50" y="70" width="330" height="200" rx="10" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" />
    <text x="215" y="100" fill="#ef4444" fontSize="12" fontWeight="600" textAnchor="middle">Traditional Planning Assumed</text>
    
    {[
      'Predictable markets with gradual change',
      'Stable competition (years to scale)',
      'Linear growth patterns',
      'Long-term resource commitments',
    ].map((item, i) => (
      <text key={i} x="70" y={135 + i * 35} fill="rgba(255,255,255,0.6)" fontSize="10">✗ {item}</text>
    ))}
    
    {/* Current reality */}
    <rect x="420" y="70" width="330" height="200" rx="10" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
    <text x="585" y="100" fill="#22c55e" fontSize="12" fontWeight="600" textAnchor="middle">Today's Reality</text>
    
    {[
      'Exponential change (AI in 12 months)',
      'New competitors appear overnight',
      'Network effects and power laws',
      'Flexible, on-demand resources',
    ].map((item, i) => (
      <text key={i} x="440" y={135 + i * 35} fill="rgba(255,255,255,0.6)" fontSize="10">✓ {item}</text>
    ))}
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The assumptions that made 10-year plans sensible have completely collapsed</text>
  </svg>
);

const AccelerationTimelines: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Acceleration of Everything</text>
    
    {[
      { domain: 'Tech Cycles', before: 'Years', now: 'Weeks', example: 'Deploy in days', color: '#22c55e' },
      { domain: 'Market Feedback', before: 'Months', now: 'Hours', example: 'Real-time response', color: '#3b82f6' },
      { domain: 'Capital Required', before: 'Millions', now: 'Thousands', example: 'Cloud reduces costs 100x', color: '#8b5cf6' },
      { domain: 'Competitive Edge', before: 'Years', now: 'Months', example: 'AI copied instantly', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="100" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">{item.domain}</text>
        
        <text x={132 + i * 185} y="130" fill="#ef4444" fontSize="12" textAnchor="middle">{item.before}</text>
        <text x={132 + i * 185} y="145" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">→</text>
        <text x={132 + i * 185} y="160" fill="#22c55e" fontSize="12" textAnchor="middle">{item.now}</text>
        
        <text x={132 + i * 185} y="195" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.example}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Planning for 10 years when things change in 10 months doesn't make sense</text>
  </svg>
);

const AgileFramework: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The New Planning Framework</text>
    
    {[
      { 
        approach: 'Hypothesis-Driven', 
        desc: 'Test before you commit',
        practice: 'Formulate testable bets',
        example: '30-day experiments',
        color: '#22c55e'
      },
      { 
        approach: 'Rolling Forecasts', 
        desc: 'Update continuously',
        practice: 'Monthly reforecasting',
        example: 'Quarterly pivots',
        color: '#3b82f6'
      },
      { 
        approach: 'Option-Based', 
        desc: 'Small bets, many options',
        practice: 'Preserve optionality',
        example: 'Stage investments',
        color: '#8b5cf6'
      },
      { 
        approach: 'OKR-Driven', 
        desc: 'Goals not plans',
        practice: 'Outcomes over outputs',
        example: 'Quarterly reset',
        color: '#f97316'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="230" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="100" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">{item.approach}</text>
        <text x={132 + i * 185} y="125" fill={item.color} fontSize="10" textAnchor="middle">{item.desc}</text>
        
        <line x1={70 + i * 185} y1="145" x2={195 + i * 185} y2="145" stroke="rgba(255,255,255,0.1)" />
        
        <text x={132 + i * 185} y="175" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">Practice:</text>
        <text x={132 + i * 185} y="195" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">{item.practice}</text>
        
        <text x={132 + i * 185} y="230" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">Example:</text>
        <text x={132 + i * 185} y="250" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">{item.example}</text>
      </g>
    ))}
    
    <text x="400" y="330" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Replace rigid plans with adaptive systems</text>
  </svg>
);

const ThreeHorizonModel: React.FC = () => (
  <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="300" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The 3-Horizon Model</text>
    
    {[
      { 
        horizon: 'Horizon 1', 
        timeframe: '0-12 months',
        focus: 'Core Business',
        detail: 'Detailed plans for execution',
        certainty: 'High',
        color: '#22c55e'
      },
      { 
        horizon: 'Horizon 2', 
        timeframe: '1-3 years',
        focus: 'Strategic Initiatives',
        detail: 'Directional bets, flexible approach',
        certainty: 'Medium',
        color: '#eab308'
      },
      { 
        horizon: 'Horizon 3', 
        timeframe: '3+ years',
        focus: 'Transformational',
        detail: 'Experimental options, learning focus',
        certainty: 'Low',
        color: '#ef4444'
      },
    ].map((item, i) => (
      <g key={i}>
        <rect x={75 + i * 240} y="70" width="190" height="180" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="2" />
        <text x={170 + i * 240} y="100" fill={item.color} fontSize="13" fontWeight="600" textAnchor="middle">{item.horizon}</text>
        <text x={170 + i * 240} y="120" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{item.timeframe}</text>
        
        <text x={170 + i * 240} y="155" fill="white" fontSize="12" fontWeight="500" textAnchor="middle">{item.focus}</text>
        <text x={170 + i * 240} y="180" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">{item.detail}</text>
        
        <text x={170 + i * 240} y="215" fill={item.color} fontSize="10" textAnchor="middle">Certainty: {item.certainty}</text>
      </g>
    ))}
    
    <text x="400" y="280" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Different time horizons need different planning approaches</text>
  </svg>
);

const OrganizationalChanges: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Organizational Requirements for Agility</text>
    
    {[
      { change: 'Flatter Hierarchies', icon: '📊', desc: 'Fewer approval layers', color: '#22c55e' },
      { change: 'Cross-Functional Teams', icon: '🔄', desc: 'Independent decision units', color: '#3b82f6' },
      { change: 'Learning Culture', icon: '📚', desc: 'Embrace experimentation', color: '#8b5cf6' },
      { change: 'Data-Driven', icon: '📈', desc: 'Fast feedback loops', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="24" textAnchor="middle">{item.icon}</text>
        <text x={132 + i * 185} y="140" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">{item.change}</text>
        <text x={132 + i * 185} y="170" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Agile strategy requires organizational structures that can actually adapt</text>
  </svg>
);

const DeathOfTenYearBusinessPlan: React.FC = () => {
  return (
    <ArticleLayout
      category="Business & Strategy"
      title="The Death of the 10-Year Business Plan: Why I Stopped Making Long-Term Predictions"
      subtitle="In a world where AI can disrupt industries in 12 months, rigid planning is a liability. Here's what I do instead."
      author="Kushal Parameshwara"
      date="November 12, 2025"
      readTime="10 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
        alt: "Business strategy meeting with charts and planning documents"
      }}
      keyTakeaways={[
        "Traditional long-term planning assumes predictability that no longer exists.",
        "The half-life of business strategies is shrinking: what worked last year may be irrelevant next year.",
        "Replace 10-year plans with hypothesis-driven experiments, rolling forecasts, and option-based thinking.",
        "Use the 3-horizon model: detailed plans for 0-12 months, directional bets for 1-3 years, experimental options beyond.",
        "Agile strategy requires organizational change: flatter hierarchies, cross-functional teams, learning culture."
      ]}
      tags={['Strategy', 'Business Planning', 'Agility', 'Innovation', 'Management']}
      articleId="death-of-ten-year-business-plan"
    >
      <p>
        For decades, the 10-year business plan was the gold standard of corporate strategy. Companies 
        spent months crafting detailed projections, market analyses, and strategic roadmaps. MBAs were 
        trained to build these plans. Boards demanded them. Investors expected them.
      </p>

      <p>
        I used to build them too.
      </p>

      <p>
        Then I watched the plans I'd carefully constructed become obsolete within months. COVID 
        invalidated three years of planning in three weeks. ChatGPT made 18-month AI roadmaps 
        irrelevant overnight. Entire industries I'd projected to grow steadily began declining.
      </p>

      <p>
        Now I think differently about planning. <strong>In a world where AI can disrupt entire 
        industries in 12 months, the 10-year business plan isn't just outdated. It's actively harmful.</strong>
      </p>

      <h2>The Assumptions That Broke</h2>

      <p>
        Traditional business planning was built for a different era, one where certain assumptions held:
      </p>

      <PlanningAssumptions />

      <h3>What We Assumed</h3>

      <p>
        <strong>Predictable markets:</strong> Customer needs and preferences changed slowly. You could 
        project demand curves with reasonable accuracy.
      </p>

      <p>
        <strong>Stable competition:</strong> New entrants were rare and took years to scale. You knew 
        your competitive landscape.
      </p>

      <p>
        <strong>Linear growth:</strong> Success followed predictable patterns. More investment led 
        to proportionally more returns.
      </p>

      <p>
        <strong>Resource scarcity:</strong> Major initiatives required significant capital commitments, 
        so you had to plan carefully.
      </p>

      <h3>What Actually Happened</h3>

      <p>
        These assumptions collapsed. Markets now shift exponentially, not linearly. ChatGPT went 
        from zero to 100 million users in two months. TikTok came from nowhere to dominate social 
        media. AI can now code, write, and create in ways nobody predicted five years ago.
      </p>

      <p>
        Competition appears overnight. A startup with 10 people can now do what required hundreds. 
        Network effects create winner-take-all dynamics that traditional planning never accounted for.
      </p>

      <blockquote>
        "The half-life of business strategies is shrinking. What worked last year might be 
        completely irrelevant next year. Companies that cling to long-term plans are planning 
        their own obsolescence."
      </blockquote>

      <h2>The Acceleration of Everything</h2>

      <p>
        Consider how the pace of change has accelerated across every dimension of business:
      </p>

      <AccelerationTimelines />

      <h3>Technology Cycles</h3>

      <p>
        Software development cycles have compressed from years to weeks. Companies can now build, 
        test, and deploy new features in days. This means competitive advantages from technology 
        innovations last months, not years.
      </p>

      <h3>Market Feedback</h3>

      <p>
        Social media and digital platforms provide instant market feedback. You can gauge customer 
        response to new products within hours of launch. Long-term predictions become irrelevant 
        when you can get real data immediately.
      </p>

      <h3>Capital Efficiency</h3>

      <p>
        Cloud computing and digital tools have reduced the capital required to start and scale 
        businesses by 100x. What previously required millions in infrastructure investment now 
        costs thousands in monthly cloud services.
      </p>

      <h3>Competitive Advantage Duration</h3>

      <p>
        AI innovations are copied within weeks, not years. The time to exploit a competitive 
        advantage has compressed dramatically. By the time you finish executing a 10-year plan, 
        you're competing against companies that didn't exist when you wrote it.
      </p>

      <h2>What I Do Instead</h2>

      <p>
        I've replaced rigid long-term planning with adaptive methodologies that emphasize rapid 
        iteration, continuous learning, and preserved optionality:
      </p>

      <AgileFramework />

      <h3>Hypothesis-Driven Planning</h3>

      <p>
        Instead of creating detailed predictions, I formulate testable hypotheses about market 
        opportunities and customer needs. Then I design 30-day experiments to validate or 
        invalidate them with real market data.
      </p>

      <p>
        <strong>Example:</strong> "We believe customers will pay $50/month for feature X" becomes 
        a 30-day landing page test, not a 6-month development project.
      </p>

      <h3>Rolling Forecasts</h3>

      <p>
        Rather than annual budgeting cycles, I use rolling forecasts updated monthly or quarterly 
        based on current market conditions. This allows for responsive resource allocation and 
        strategic pivots.
      </p>

      <p>
        <strong>Practice:</strong> Every month, update the 12-month forecast based on what you've 
        learned. Don't treat last year's plan as sacred.
      </p>

      <h3>Option-Based Thinking</h3>

      <p>
        Modern strategic planning focuses on creating options rather than making binding commitments. 
        Invest in multiple small bets rather than single large investments. Preserve the ability 
        to scale successes and abandon failures quickly.
      </p>

      <p>
        <strong>Rule:</strong> If an initiative requires an irreversible commitment before you can 
        learn anything, find a way to stage the investment.
      </p>

      <h3>OKRs Over Plans</h3>

      <p>
        Quarterly goal-setting that aligns teams around measurable outcomes while preserving 
        flexibility in execution methods. Define where you want to be, not exactly how to get there.
      </p>

      <h2>The 3-Horizon Model</h2>

      <p>
        I still think about different time horizons, but with very different approaches for each:
      </p>

      <ThreeHorizonModel />

      <h3>Horizon 1: The Next 12 Months</h3>

      <p>
        This is the only horizon where detailed planning makes sense. You know enough about 
        your current business, customers, and market to make specific commitments. Execute 
        with discipline.
      </p>

      <h3>Horizon 2: 1-3 Years</h3>

      <p>
        Directional bets and strategic initiatives. You know roughly where the market is going, 
        but not exactly how you'll get there. Stay flexible on execution while maintaining 
        strategic direction.
      </p>

      <h3>Horizon 3: 3+ Years</h3>

      <p>
        Experimental options and transformational opportunities. You're not planning; you're 
        learning. Run small experiments to understand emerging trends. Be prepared to be 
        completely wrong about what this horizon looks like.
      </p>

      <h2>What This Requires Organizationally</h2>

      <p>
        Agile strategy requires fundamental organizational changes:
      </p>

      <OrganizationalChanges />

      <h3>Flatter Hierarchies</h3>

      <p>
        Rapid decision-making requires flatter structures that can respond quickly without 
        layers of approval. If every pivot requires board approval, you can't pivot fast enough.
      </p>

      <h3>Cross-Functional Teams</h3>

      <p>
        Teams that can operate independently and make decisions quickly. Break down silos. 
        Give teams the authority to adapt without waiting for coordination across departments.
      </p>

      <h3>Continuous Learning Culture</h3>

      <p>
        Organizations must embrace experimentation, tolerate failure, and learn rapidly from 
        both successes and mistakes. "We tried and learned" should be celebrated, not punished.
      </p>

      <h3>Data-Driven Feedback</h3>

      <p>
        Fast feedback loops that tell you what's working and what isn't. You can't adapt if 
        you don't know how you're doing.
      </p>

      <h2>The Psychological Shift</h2>

      <p>
        Perhaps the most significant shift is psychological: accepting that uncertainty is 
        the new normal.
      </p>

      <p>
        The 10-year business plan provided a comforting illusion of control and predictability. 
        It felt safe. You had a roadmap.
      </p>

      <p>
        Agile strategy requires leaders to be comfortable with ambiguity and make decisions 
        with incomplete information. That's uncomfortable. But it's honest about the world 
        we actually live in.
      </p>

      <p>
        This doesn't mean abandoning vision or direction. Successful companies still need 
        clear missions, values, and long-term aspirations. But they achieve these goals 
        through continuous adaptation rather than rigid adherence to predetermined plans.
      </p>

      <h2>The Agile Advantage</h2>

      <p>
        Companies that embrace agile strategy will have significant advantages in the coming years:
      </p>

      <ul>
        <li><strong>Faster market response:</strong> Ability to capitalize on opportunities quickly</li>
        <li><strong>Reduced risk:</strong> Smaller, reversible bets rather than large commitments</li>
        <li><strong>Improved innovation:</strong> Culture of experimentation drives breakthrough thinking</li>
        <li><strong>Employee engagement:</strong> Teams feel empowered to drive change rather than execute plans</li>
        <li><strong>Competitive positioning:</strong> Ability to respond to disruption instead of being disrupted</li>
      </ul>

      <h2>The Bottom Line</h2>

      <p>
        The death of the 10-year business plan isn't a loss. It's a liberation. It frees 
        companies from the constraints of outdated assumptions and opens up possibilities 
        for more dynamic, responsive, and ultimately successful strategies.
      </p>

      <blockquote>
        Strategy is not about predicting the future. It's about being prepared for multiple 
        futures. The companies that survive are those that can adapt fastest to whatever 
        future actually emerges.
      </blockquote>

      <p>
        In a world where change is the only constant, the ability to change quickly becomes 
        the ultimate competitive advantage. The future belongs to the agile, not the prescient.
      </p>

      <p>
        Stop trying to predict the future. Start building the capability to respond to it.
      </p>
    </ArticleLayout>
  );
};

export default DeathOfTenYearBusinessPlan;
