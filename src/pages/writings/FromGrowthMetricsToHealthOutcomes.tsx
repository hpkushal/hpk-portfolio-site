import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../components/ArticleLayout';
import { FaClock, FaArrowTrendUp, FaShieldHalved, FaBolt } from 'react-icons/fa6';

// SVG Components for visuals
const MetricsTranslationDiagram: React.FC = () => (
  <svg viewBox="0 0 800 400" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="400" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="40" fill="white" fontSize="18" fontWeight="600" textAnchor="middle">Translating the Product Mindset</text>
    <text x="400" y="65" fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="middle">From Growth Optimization to Provider Enablement</text>

    {/* Headers */}
    <text x="200" y="100" fill="#3b82f6" fontSize="14" fontWeight="700" textAnchor="middle">GROWTH WORLD</text>
    <text x="600" y="100" fill="#22c55e" fontSize="14" fontWeight="700" textAnchor="middle">HEALTHCARE WORLD</text>
    
    {/* Divider */}
    <line x1="400" y1="90" x2="400" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />

    {/* Comparison Rows */}
    {[
      { y: 140, growth: 'Time on Site', health: 'Time to Care', icon: <FaClock /> },
      { y: 200, growth: 'Conversion Rate', health: 'Adherence / Completion', icon: <FaArrowTrendUp /> },
      { y: 260, growth: 'Friction Removal', health: 'Safety Guardrails', icon: <FaShieldHalved /> },
      { y: 320, growth: 'Engagement', health: 'Provider Efficiency', icon: <FaBolt /> },
    ].map((row, i) => (
      <g key={i}>
        {/* Left Side */}
        <rect x="50" y={row.y - 20} width="300" height="40" rx="6" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
        <text x="200" y={row.y + 5} fill="#93c5fd" fontSize="13" textAnchor="middle" fontWeight="500">{row.growth}</text>
        
        {/* Arrow & Icon */}
        <circle cx="400" cy={row.y} r="20" fill="#1e1e1e" stroke="rgba(255,255,255,0.2)" />
        <foreignObject x="390" y={row.y - 10} width="20" height="20">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'white', fontSize: '14px' }}>
            {row.icon}
          </div>
        </foreignObject>
        
        {/* Right Side */}
        <rect x="450" y={row.y - 20} width="300" height="40" rx="6" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3" />
        <text x="600" y={row.y + 5} fill="#86efac" fontSize="13" textAnchor="middle" fontWeight="500">{row.health}</text>
      </g>
    ))}

    <text x="400" y="385" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The metric changes, but the rigorous approach to optimization remains.</text>
  </svg>
);

const OutcomeHierarchyDiagram: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="40" fill="white" fontSize="18" fontWeight="600" textAnchor="middle">The Hierarchy of Healthcare Product Value</text>
    
    {/* Pyramid */}
    <g transform="translate(0, 20)">
      {/* Base Layer */}
      <path d="M150 280 L650 280 L550 190 L250 190 Z" fill="url(#baseGrad)" opacity="0.9" />
      <text x="400" y="245" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">RELIABILITY & TRUST</text>
      <text x="400" y="265" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Accurate data • Compliance • Audit trails • Uptime</text>

      {/* Middle Layer */}
      <path d="M250 190 L550 190 L480 110 L320 110 Z" fill="url(#midGrad)" opacity="0.9" />
      <text x="400" y="155" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">PROVIDER EFFICIENCY</text>
      <text x="400" y="175" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Cognitive load reduction • Workflow speed • Automation</text>

      {/* Top Layer */}
      <path d="M320 110 L480 110 L400 40 Z" fill="url(#topGrad)" opacity="0.9" />
      <text x="400" y="85" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">CLINICAL OUTCOME</text>
      <text x="400" y="100" fill="rgba(255,255,255,0.9)" fontSize="10" textAnchor="middle">Better Health</text>
    </g>

    <defs>
      <linearGradient id="baseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="midGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#d946ef" />
      </linearGradient>
      <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f43f5e" />
        <stop offset="100%" stopColor="#fb7185" />
      </linearGradient>
    </defs>
    
    <text x="400" y="325" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">We must secure the foundation (Trust) before we can optimize for the summit (Outcomes).</text>
  </svg>
);

const FromGrowthMetricsToHealthOutcomes: React.FC = () => {
  return (
    <ArticleLayout
      category="Product Management"
      title="From Growth Metrics to Health Outcomes: Why I'm Moving into Healthcare Product Management"
      subtitle="How a career built on conversion rates and experiment velocity pushed me toward provider workflows where the metrics map directly to real-world outcomes."
      author="Kushal Parameshwara"
      date="January 12, 2026"
      readTime="12 min read"
      heroImage={{
        src: '/images/resmed-office.webp',
        alt: 'ResMed office reception with logo and celebratory flowers'
      }}
      keyTakeaways={[
        'Growth metrics sharpen execution, but they can hide downstream costs when not connected to real-world outcomes.',
        'Healthcare metrics sit closer to human stakes; reducing friction can mean safer workflows, not just faster funnels.',
        'Provider solutions reward clarity, defaults, and guardrails - the same growth tools, but in service of reliability and care.',
        'Shifting from time-to-conversion to time-to-care reframes what speed and success should mean.',
        'Joining ResMed lets me apply evidence-driven habits to problems where impact is measured in better care, not just better charts.'
      ]}
      tags={['Healthcare', 'Product Management', 'Growth', 'Career Shift', 'Outcomes']}
      articleId="from-growth-metrics-to-health-outcomes"
    >
      <p>
        I have spent a big part of my product journey living inside growth dashboards. Click-through rate, conversion
        rate, cost per lead, activation, retention, experiment win rate - none of these are vanity metrics when you do the
        work properly. They tell a story, create momentum, and keep teams honest.
      </p>

      <p>
        Over time, I started asking a different question: not just "did this move the metric?" but "if the metric moved,
        what changed in someone's life?" That question is why I'm moving into healthcare product management and why I'm
        excited to join ResMed's Provider Solutions team.
      </p>

      <h2>What Growth Metrics Taught Me</h2>

      <p>
        Growth work teaches humility and speed because users vote with clicks and churn. One early lesson came from a
        landing page that looked perfect on paper but underperformed in reality. We did the boring, useful things:
      </p>

      <ul>
        <li>Pulled heatmaps and session recordings to see where people hesitated.</li>
        <li>Watched real users scroll, pause, and bounce across devices.</li>
        <li>Tested a version with fewer choices and one clear call to action.</li>
        <li>Rewrote the language from marketing speak to plain language.</li>
      </ul>

      <p>
        The conversion rate climbed back, support inquiries dropped, and the team relearned a familiar truth: clarity
        beats cleverness, and small moments add up. The same pattern showed up elsewhere—removing fields from a form,
        reducing clicks to a report, automating a manual handoff. None of it was glamorous; all of it mattered.
      </p>

      <h2>Where Metrics Started Feeling Incomplete</h2>

      <p>
        Hitting a goal sometimes felt hollow when the downstream experience did not keep up. A smoother sign-up flow
        increased conversions but also increased support because new users arrived with less context. A shiny feature
        boosted engagement time without improving real outcomes. Shipping faster felt like motion for the sake of
        motion when the "why" was thin.
      </p>

      <blockquote>
        "Those moments reframed what a win should be: a metric improvement that does not create a hidden cost."
      </blockquote>

      <h2>Why Healthcare Pulls Me</h2>

      <p>
        Healthcare product management still depends on measurement, iteration, and trade-offs - but the metrics sit closer
        to human outcomes:
      </p>
      
      <MetricsTranslationDiagram />

      <ul>
        <li>Did a provider complete a workflow with fewer errors?</li>
        <li>Did we reduce the time it takes to get a patient set up on therapy?</li>
        <li>Did we reduce claim denials or rework?</li>
        <li>Did we improve adherence or follow-up rates?</li>
        <li>Did we reduce the burden on clinical staff?</li>
      </ul>

      <p>
        Even operational metrics map to human stakes. That mapping is exactly what makes the work feel like the right
        next chapter.
      </p>

      <h2>What Health Outcomes Mean in Product Terms</h2>
      
      <OutcomeHierarchyDiagram />

      <h3>Reducing cognitive load for providers</h3>
      <p>
        In growth products you optimize for attention; in provider workflows attention is expensive. Prefilling known
        information, designing defaults that match common scenarios, and making status visible without extra clicks
        reduce risk as much as they reduce friction.
      </p>

      <h3>Improving time-to-care instead of time-to-conversion</h3>
      <p>
        The analog to faster funnels is faster therapy starts. Better task routing, clearer queues, and lighter
        documentation overhead can move a patient from referral to setup sooner, which changes real outcomes.
      </p>

      <h3>Building trust through reliability</h3>
      <p>
        In martech a bug is an apology and a patch; in healthcare reliability is the product. Accurate statuses, stable
        workflows, and clear audit trails build the trust that drives adoption.
      </p>

      <h3>Measuring success beyond the dashboard</h3>
      <p>
        Success looks like fewer drop-offs in a multi-step setup, fewer manual interventions, higher completion rates
        for critical tasks, and provider satisfaction because the product respects their time.
      </p>

      <h2>Why Provider Solutions Is the Right Fit</h2>

      <p>
        Provider-facing products sit at the intersection of urgency, accuracy, and trust. You build for users who are
        trying to do the right thing under time pressure; adoption is driven by reliability, not persuasion. My growth
        experience translates directly:
      </p>

      <ul>
        <li>Mapping end-to-end journeys to find friction points.</li>
        <li>Instrumenting workflows and learning from real usage.</li>
        <li>Running experiments responsibly with the right guardrails.</li>
        <li>Reducing cycle time without sacrificing clarity.</li>
      </ul>

      <h2>What I'm Excited to Learn Next</h2>

      <p>
        This move is also about leveling up fast in areas that matter to healthcare:
      </p>

      <ul>
        <li>The real-world provider workflows behind the screens.</li>
        <li>How clinical and operational constraints shape product decisions.</li>
        <li>How compliance and privacy considerations influence design and data.</li>
        <li>How to balance speed, safety, automation, and control.</li>
      </ul>

      <h2>What I'm Bringing From Growth</h2>

      <p>
        I'm not leaving growth behind; I'm repurposing it. A bias for evidence over opinion. A love for clear problem
        framing. Respect for iteration and the belief that big problems are solved in small steps. An obsession with the
        tiny moments that compound into trust.
      </p>

      <h2>Closing Thought</h2>

      <p>
        Growth metrics taught me how to move fast, measure honestly, and obsess over user journeys. Healthcare outcomes
        remind me what I want those skills to serve. Time saved for a provider. Fewer errors. Faster access to care. A
        smoother experience for people doing high-pressure work. That is the kind of impact I want to build toward.
      </p>

      <h2>Related Work</h2>

      <p>
        If you're curious about the growth mindset I'm bringing to healthcare, read about{' '}
        <Link to="/writings/pm-os-2025" style={{ color: '#667eea', fontWeight: 600 }}>my PM Operating System for 2025</Link>{' '}
        and how I work with AI as a true partner. For a deeper dive into systematic growth thinking, see{' '}
        <Link to="/writings/growth-hacking-maturation" style={{ color: '#667eea', fontWeight: 600 }}>my journey from growth hacks to growth science</Link>. 
        And for an example of healthcare-focused product work, check out my{' '}
        <Link to="/projects/healthcare-platform" style={{ color: '#667eea', fontWeight: 600 }}>Healthcare Professionals Platform</Link>{' '}
        case study.
      </p>
    </ArticleLayout>
  );
};

export default FromGrowthMetricsToHealthOutcomes;
