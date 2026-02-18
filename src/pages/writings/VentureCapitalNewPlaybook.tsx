import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const ZIRPvsNowComparison: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The VC Mindset Shift I've Witnessed</text>
    
    {/* ZIRP Era */}
    <rect x="50" y="60" width="330" height="250" rx="10" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" />
    <text x="215" y="90" fill="#ef4444" fontSize="14" fontWeight="600" textAnchor="middle">2010-2022: ZIRP Era</text>
    <text x="215" y="115" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">"How fast can you grow?"</text>
    
    {[
      { label: 'Growth at all costs', icon: '🚀' },
      { label: 'Vanity metrics rule', icon: '📊' },
      { label: 'Burn to win market', icon: '🔥' },
      { label: 'Valuation = success', icon: '💰' },
      { label: 'Exit optimism', icon: '🎯' },
    ].map((item, i) => (
      <g key={i}>
        <text x="80" y={150 + i * 30} fill="rgba(255,255,255,0.7)" fontSize="12">{item.icon} {item.label}</text>
      </g>
    ))}
    
    {/* Current Era */}
    <rect x="420" y="60" width="330" height="250" rx="10" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
    <text x="585" y="90" fill="#22c55e" fontSize="14" fontWeight="600" textAnchor="middle">2023+: New Reality</text>
    <text x="585" y="115" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">"How long can you last?"</text>
    
    {[
      { label: 'Unit economics first', icon: '📈' },
      { label: 'Path to profitability', icon: '✅' },
      { label: 'Capital efficiency', icon: '⚡' },
      { label: 'Fundamentals matter', icon: '🏗️' },
      { label: 'Sustainable growth', icon: '🌱' },
    ].map((item, i) => (
      <g key={i}>
        <text x="450" y={150 + i * 30} fill="rgba(255,255,255,0.7)" fontSize="12">{item.icon} {item.label}</text>
      </g>
    ))}
    
    {/* Arrow */}
    <path d="M380 185 L420 185" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#vcArrow)" />
    <defs>
      <marker id="vcArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.4)" />
      </marker>
    </defs>
    
    <text x="400" y="330" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">This shift is permanent, not cyclical</text>
  </svg>
);

const ValuationCorrectionChart: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Valuation Corrections by Stage (from 2021 Peak)</text>
    
    {/* Chart bars */}
    {[
      { stage: 'Pre-seed/Seed', drop: 45, color: '#3b82f6' },
      { stage: 'Series A', drop: 50, color: '#6366f1' },
      { stage: 'Series B+', drop: 60, color: '#8b5cf6' },
      { stage: 'Late/Growth', drop: 70, color: '#a855f7' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={120 + i * 170} y={250 - item.drop * 2.5} width="120" height={item.drop * 2.5} rx="4" fill={item.color} opacity="0.8" />
        <text x={180 + i * 170} y={240 - item.drop * 2.5} fill="white" fontSize="14" fontWeight="600" textAnchor="middle">-{item.drop}%</text>
        <text x={180 + i * 170} y={280} fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">{item.stage}</text>
      </g>
    ))}
    
    {/* Baseline */}
    <line x1="100" y1="250" x2="750" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    <text x="80" y="254" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="end">0%</text>
    
    {/* AI Exception note */}
    <rect x="550" y="70" width="200" height="50" rx="6" fill="rgba(234, 179, 8, 0.1)" stroke="#eab308" strokeWidth="1" />
    <text x="650" y="92" fill="#eab308" fontSize="11" fontWeight="600" textAnchor="middle">⚠️ AI Exception</text>
    <text x="650" y="108" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">AI companies: +30-50% premium</text>
    
    <text x="400" y="305" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Source: My observations from pitch decks and market data, 2025</text>
  </svg>
);

const NewMetricsFramework: React.FC = () => (
  <svg viewBox="0 0 800 400" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="400" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The New VC Evaluation Framework</text>
    
    {/* Three pillars */}
    {[
      {
        title: 'Unit Economics',
        metrics: [
          'CAC payback < 12 months',
          'LTV:CAC ratio > 3:1',
          'Gross margins > 70%',
          'Positive contribution margin'
        ],
        color: '#22c55e',
        x: 50
      },
      {
        title: 'Capital Efficiency',
        metrics: [
          'Revenue per $ raised',
          'Burn multiple < 2x',
          'Growth per marketing $',
          'Clear profitability path'
        ],
        color: '#3b82f6',
        x: 290
      },
      {
        title: 'Sustainable Growth',
        metrics: [
          'Organic acquisition > 50%',
          'Net revenue retention > 120%',
          'Annual churn < 10%',
          'Expansion revenue growing'
        ],
        color: '#a855f7',
        x: 530
      }
    ].map((pillar, i) => (
      <g key={i}>
        <rect x={pillar.x} y="60" width="220" height="300" rx="10" fill="rgba(255,255,255,0.02)" stroke={pillar.color} strokeWidth="1" />
        <rect x={pillar.x} y="60" width="220" height="50" rx="10" fill={pillar.color} opacity="0.2" />
        <text x={pillar.x + 110} y="92" fill={pillar.color} fontSize="14" fontWeight="600" textAnchor="middle">{pillar.title}</text>
        {pillar.metrics.map((metric, j) => (
          <g key={j}>
            <circle cx={pillar.x + 25} cy={140 + j * 50} r="6" fill={pillar.color} opacity="0.5" />
            <text x={pillar.x + 40} y={145 + j * 50} fill="rgba(255,255,255,0.8)" fontSize="11">{metric}</text>
          </g>
        ))}
      </g>
    ))}
    
    <text x="400" y="385" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">VCs now dig into these metrics. Vanity numbers won't cut it anymore.</text>
  </svg>
);

const FundraisingTimeline: React.FC = () => (
  <svg viewBox="0 0 800 250" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="250" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Due Diligence: Then vs Now</text>
    
    {/* Before timeline */}
    <text x="100" y="80" fill="rgba(255,255,255,0.5)" fontSize="12">Before (2021)</text>
    <rect x="200" y="65" width="200" height="30" rx="6" fill="#ef4444" opacity="0.3" />
    <text x="300" y="85" fill="#ef4444" fontSize="12" fontWeight="500" textAnchor="middle">6-8 weeks</text>
    
    {/* After timeline */}
    <text x="100" y="130" fill="rgba(255,255,255,0.5)" fontSize="12">Now (2025)</text>
    <rect x="200" y="115" width="400" height="30" rx="6" fill="#22c55e" opacity="0.3" />
    <text x="400" y="135" fill="#22c55e" fontSize="12" fontWeight="500" textAnchor="middle">12-16 weeks</text>
    
    {/* What's added */}
    <text x="400" y="175" fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="middle">What's added to due diligence:</text>
    
    {[
      { label: '24+ month projections', x: 120 },
      { label: 'Scenario analysis', x: 280 },
      { label: 'Customer calls (5-10)', x: 460 },
      { label: 'Team resilience', x: 640 },
    ].map((item, i) => (
      <g key={i}>
        <rect x={item.x - 60} y="195" width="120" height="25" rx="4" fill="rgba(255,255,255,0.05)" />
        <text x={item.x} y="212" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">{item.label}</text>
      </g>
    ))}
  </svg>
);

const SuccessStoriesGrid: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Companies That Got It Right</text>
    
    {[
      { name: 'Notion', value: '$10B', metric: 'Minimal marketing spend', approach: 'Product-led growth', color: '#22c55e' },
      { name: 'Figma', value: '$20B exit', metric: '$333M total raised', approach: 'Capital efficient', color: '#3b82f6' },
      { name: 'Canva', value: 'Profitable', metric: 'Before growth capital', approach: 'Profitability first', color: '#a855f7' },
    ].map((company, i) => (
      <g key={i}>
        <rect x={60 + i * 240} y="60" width="200" height="180" rx="10" fill="rgba(255,255,255,0.02)" stroke={company.color} strokeWidth="1" />
        <text x={160 + i * 240} y="95" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">{company.name}</text>
        <text x={160 + i * 240} y="125" fill={company.color} fontSize="20" fontWeight="600" textAnchor="middle">{company.value}</text>
        <line x1={90 + i * 240} y1="145" x2={230 + i * 240} y2="145" stroke="rgba(255,255,255,0.1)" />
        <text x={160 + i * 240} y="175" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">{company.metric}</text>
        <rect x={90 + i * 240} y="195" width="140" height="25" rx="4" fill={company.color} opacity="0.2" />
        <text x={160 + i * 240} y="212" fill={company.color} fontSize="10" fontWeight="500" textAnchor="middle">{company.approach}</text>
      </g>
    ))}
    
    <text x="400" y="265" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">These companies prove sustainable growth beats blitzscaling</text>
  </svg>
);

const VentureCapitalNewPlaybook: React.FC = () => {
  return (
    <ArticleLayout
      category="Business & Strategy"
      title="The VC Playbook Has Changed Forever: What I've Learned"
      subtitle="After watching the 2022-2024 correction from the inside, here's what I know about how VCs actually evaluate startups now"
      author="Kushal Parameshwara"
      date="November 8, 2025"
      readTime="11 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
        alt: "Venture capital meeting with investors and entrepreneurs"
      }}
      keyTakeaways={[
        "The shift from growth-at-all-costs to sustainable scaling is permanent, not cyclical.",
        "VCs now prioritize unit economics, capital efficiency, and path to profitability over growth metrics.",
        "Due diligence has doubled from 6-8 weeks to 12-16 weeks with deeper financial scrutiny.",
        "Early-stage valuations have corrected 40-60% from 2021 peaks (except AI, which commands premiums).",
        "The companies winning now are those built on fundamentals, not those chasing vanity metrics."
      ]}
      tags={['Venture Capital', 'Startups', 'Funding', 'Business Strategy', 'Entrepreneurship']}
      articleId="venture-capital-new-playbook"
    >
      <p>
        In 2021, I watched startups raise massive rounds on decks with hockey-stick growth charts and no path 
        to profitability. "We'll figure out unit economics later," founders would say. VCs nodded along, writing 
        checks at eye-watering valuations.
      </p>

      <p>
        By 2023, many of those same startups were doing down rounds, laying off staff, or shutting down entirely. 
        The VCs who'd funded them were quietly marking down portfolios and having uncomfortable conversations 
        with LPs.
      </p>

      <p>
        I've spent the last two years watching this correction play out, talking to founders navigating the new 
        landscape, and observing how VC evaluation criteria have fundamentally shifted. What I've learned is that 
        <strong>this isn't just a market cycle. It's a permanent change in how venture capital works.</strong>
      </p>

      <h2>The ZIRP Hangover</h2>

      <p>
        To understand where we are, you need to understand where we came from. From 2010 to 2022, we lived in a 
        Zero Interest Rate Policy (ZIRP) world that created a unique set of conditions for startups:
      </p>

      <ul>
        <li><strong>Cheap capital everywhere:</strong> Institutional investors couldn't get returns from bonds, so they poured money into venture</li>
        <li><strong>Growth premiums:</strong> Markets rewarded growth over profitability at extreme ratios</li>
        <li><strong>Abundant liquidity:</strong> Companies could raise multiple rounds at increasing valuations regardless of fundamentals</li>
        <li><strong>Exit optimism:</strong> Everyone assumed IPOs or acquisitions would happen at premium multiples</li>
      </ul>

      <p>
        This environment gave us "blitzscaling," the strategy of growing as fast as possible and worrying about 
        profitability later. Uber, WeWork, DoorDash: they all exemplified this approach, burning billions while 
        capturing market share.
      </p>

      <p>
        Then the music stopped.
      </p>

      <ZIRPvsNowComparison />

      <h2>What Happened in 2022</h2>

      <p>
        Multiple factors converged to end the ZIRP era:
      </p>

      <p>
        <strong>Interest rates spiked.</strong> When the Fed raised rates from near-zero to 5%+, institutional 
        investors could suddenly get reasonable returns from government bonds. The risk-free alternative to 
        venture investing became actually attractive.
      </p>

      <p>
        <strong>Public markets crashed.</strong> Tech stocks lost 60-80% of their value. Meta, Netflix, Zoom: 
        all suffered massive declines. This reset expectations for private market valuations and made everyone 
        question exit multiples.
      </p>

      <p>
        <strong>LPs got selective.</strong> Limited partners (pension funds, endowments, family offices) faced 
        portfolio rebalancing pressures. They couldn't commit as much to venture, and they got pickier about 
        which funds they backed.
      </p>

      <p>
        <strong>Exits dried up.</strong> IPO markets effectively closed. Strategic acquisitions dropped 40%+. 
        VCs realized their portfolio companies would need to survive much longer before achieving liquidity.
      </p>

      <blockquote>
        "We went from asking 'How fast can you grow?' to 'How long can you last?' That fundamental shift 
        changed everything about how we evaluate investments."
      </blockquote>

      <p>
        That quote came from a managing partner at a top-tier fund. It captures the mindset shift perfectly.
      </p>

      <h2>The New Evaluation Framework</h2>

      <p>
        Based on my conversations with VCs and observations of what's actually getting funded, here's the 
        framework that matters now:
      </p>

      <NewMetricsFramework />

      <h3>Unit Economics First</h3>

      <p>
        This is the biggest change. VCs now demand clear evidence that your business model works at the unit level 
        before they'll consider funding scale:
      </p>

      <ul>
        <li><strong>CAC payback under 12 months:</strong> If it takes longer to recoup customer acquisition costs, you're probably burning unsustainably</li>
        <li><strong>LTV:CAC ratio above 3:1:</strong> Preferably 5:1 or higher. This shows you're creating real value per customer</li>
        <li><strong>Gross margins above 70% for SaaS:</strong> Below this, you don't have the margin structure to build a valuable company</li>
        <li><strong>Positive contribution margin:</strong> Every incremental customer should add to the bottom line, not subtract from it</li>
      </ul>

      <h3>Capital Efficiency Matters</h3>

      <p>
        VCs now scrutinize how effectively you convert capital into growth:
      </p>

      <ul>
        <li><strong>Burn multiple:</strong> Net burn divided by net new ARR. Under 2x is good; under 1x is excellent</li>
        <li><strong>Revenue per dollar raised:</strong> How much ARR have you generated for each dollar of funding?</li>
        <li><strong>Time to profitability:</strong> A clear timeline with specific milestones, not vague promises</li>
      </ul>

      <h3>Sustainable Growth Over Hypergrowth</h3>

      <p>
        The goal isn't maximum growth rate anymore. It's sustainable growth you can maintain without continuous 
        capital injection:
      </p>

      <ul>
        <li><strong>Organic acquisition:</strong> Word-of-mouth and product-led growth are valued over paid acquisition</li>
        <li><strong>High retention:</strong> Annual churn under 10% for B2B, under 5% for B2C subscription</li>
        <li><strong>Expansion revenue:</strong> Existing customers driving growth through upsells and cross-sells</li>
      </ul>

      <h2>How Due Diligence Has Changed</h2>

      <p>
        The change in what VCs look for has also changed how they look. Due diligence processes have transformed 
        dramatically.
      </p>

      <FundraisingTimeline />

      <p>
        In 2021, competitive deals closed in weeks. Hot companies had multiple term sheets before they finished 
        their pitch. VCs did surface-level diligence because they were afraid of losing deals.
      </p>

      <p>
        Now? Expect 12-16 weeks minimum. VCs will:
      </p>

      <ul>
        <li><strong>Build detailed financial models:</strong> 24+ month projections with multiple scenarios</li>
        <li><strong>Call your customers:</strong> Expect 5-10 customer reference calls, not 2-3</li>
        <li><strong>Stress-test assumptions:</strong> What happens if growth slows? If a key customer churns? If a competitor drops prices?</li>
        <li><strong>Assess team resilience:</strong> Can this team execute through hard times, not just good times?</li>
      </ul>

      <p>
        I've seen founders frustrated by this longer timeline. My advice: embrace it. The thoroughness protects 
        you too. You want investors who understand your business deeply, not ones who'll panic at the first sign 
        of trouble.
      </p>

      <h2>The Valuation Reality</h2>

      <p>
        Let's talk numbers. Valuations have corrected significantly from 2021 peaks, and they've stabilized 
        at these new levels:
      </p>

      <ValuationCorrectionChart />

      <p>
        The AI exception is real. AI-native companies are commanding 30-50% premiums over other sectors because 
        VCs believe they represent the next platform shift. Whether that's justified is a separate question, but 
        it's the current reality.
      </p>

      <p>
        For everyone else, expect:
      </p>

      <ul>
        <li><strong>Pre-seed/Seed:</strong> $500K-$2M for MVP and initial traction</li>
        <li><strong>Series A:</strong> $8-15M, requires $1M+ ARR and clear unit economics</li>
        <li><strong>Series B:</strong> $20-35M, requires profitability path and $5M+ ARR</li>
      </ul>

      <p>
        VCs also want larger ownership stakes now: 20-25% versus 15-20% previously. They're compensating for 
        higher risk and longer hold periods.
      </p>

      <h2>Success Stories: Companies That Got It Right</h2>

      <p>
        The new environment rewards different company-building approaches. Here are three I study:
      </p>

      <SuccessStoriesGrid />

      <p>
        <strong>Notion</strong> built a $10B company with minimal marketing spend. Their growth came from product 
        excellence and user-generated content. They didn't need to buy growth because users genuinely loved the 
        product and shared it.
      </p>

      <p>
        <strong>Figma</strong> achieved a $20B acquisition with just $333M in total funding. That's extraordinary 
        capital efficiency: roughly $60 of value created per dollar raised. They focused on building the best 
        product, not the biggest marketing budget.
      </p>

      <p>
        <strong>Canva</strong> reached profitability before taking growth capital. This gave them leverage in 
        negotiations and reduced execution risk. They could grow on their own terms.
      </p>

      <h2>What This Means If You're Raising</h2>

      <p>
        Based on everything I've observed, here's my practical advice for founders navigating this environment:
      </p>

      <h3>Before You Raise</h3>

      <ul>
        <li><strong>Get your unit economics tight:</strong> Know your CAC, LTV, payback period, and gross margins cold</li>
        <li><strong>Build a real financial model:</strong> 24-month projections with multiple scenarios, not just hockey sticks</li>
        <li><strong>Extend your runway mentally:</strong> Plan for 18-24 months between rounds, not 12-18</li>
        <li><strong>Document your path to profitability:</strong> Even if it's years away, show you understand how to get there</li>
      </ul>

      <h3>During the Raise</h3>

      <ul>
        <li><strong>Lead with fundamentals:</strong> Unit economics and capital efficiency before growth rate</li>
        <li><strong>Be realistic on valuation:</strong> Anchor to current market, not 2021 comps</li>
        <li><strong>Expect longer timelines:</strong> Build 4-6 months into your fundraising plan</li>
        <li><strong>Prepare your customers:</strong> Reference calls will happen; make sure customers are ready</li>
      </ul>

      <h3>Building for This Environment</h3>

      <ul>
        <li><strong>Prioritize organic growth:</strong> Product-led growth reduces CAC and creates sustainable acquisition</li>
        <li><strong>Obsess over retention:</strong> Keeping customers is more capital-efficient than acquiring new ones</li>
        <li><strong>Build operational excellence:</strong> Efficient, repeatable processes matter more than ever</li>
        <li><strong>Don't scale until PMF is clear:</strong> Premature scaling is more deadly now than it's ever been</li>
      </ul>

      <h2>Why This Change Is Permanent</h2>

      <p>
        Some founders hope we'll return to the ZIRP era. I don't think we will. Several structural changes 
        suggest this new reality is permanent:
      </p>

      <p>
        <strong>LPs have evolved.</strong> They've become more sophisticated about venture returns and more 
        demanding about fund performance. The easy money won't come back.
      </p>

      <p>
        <strong>Markets have matured.</strong> Many technology categories are now crowded and competitive. 
        Pure growth plays are less viable when customers have choices.
      </p>

      <p>
        <strong>Regulation has increased.</strong> Big tech faces more antitrust scrutiny, reducing acquisition 
        appetite. IPO requirements have tightened. Exit paths are narrower.
      </p>

      <p>
        <strong>Global uncertainty persists.</strong> Geopolitical tensions, inflation volatility, supply chain 
        complexity: these create an environment requiring defensive business strategies.
      </p>

      <h2>The Silver Lining</h2>

      <p>
        I actually think this environment is healthier for the ecosystem. The ZIRP era created enormous waste: 
        capital burned on unsustainable growth, talent allocated to companies that never should have scaled, 
        valuations disconnected from reality.
      </p>

      <p>
        The new playbook forces discipline. It rewards founders who build real businesses with real economics. 
        It filters out companies that only worked with unlimited cheap capital.
      </p>

      <p>
        Yes, it's harder to raise. Yes, valuations are lower. But the companies that succeed in this environment 
        will be stronger, more sustainable, and ultimately more valuable than the blitzscale casualties of the 
        ZIRP era.
      </p>

      <blockquote>
        The era of "fake it till you make it" is over. The era of "build it right the first time" has begun.
      </blockquote>

      <p>
        For founders willing to embrace fundamentals over hype, this is actually a great time to build. 
        Competition for funding is fiercer, but the founders who win are building better companies. That 
        seems like a good trade to me.
      </p>
    </ArticleLayout>
  );
};

export default VentureCapitalNewPlaybook; 