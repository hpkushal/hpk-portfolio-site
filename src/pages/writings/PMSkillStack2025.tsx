import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../components/ArticleLayout';

// SVG Components for visuals
const DelegationFlowDiagram: React.FC = () => (
  <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <defs>
      <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.15" />
      </filter>
    </defs>
    
    {/* Background */}
    <rect width="800" height="300" fill="#0f0f0f" rx="12" />
    
    {/* Flow boxes */}
    {[
      { x: 40, label: 'Context', sub: 'Role + Goal', color: '#3b82f6' },
      { x: 180, label: 'Inputs', sub: 'Data + Quotes', color: '#6366f1' },
      { x: 320, label: 'Constraints', sub: 'Scope + Rules', color: '#8b5cf6' },
      { x: 460, label: 'Draft', sub: 'AI Output', color: '#a855f7' },
      { x: 600, label: 'Verify', sub: 'Human QA', color: '#d946ef' },
      { x: 700, label: 'Ship', sub: 'Final', color: '#22c55e' },
    ].map((item, i) => (
      <g key={i} filter="url(#shadow)">
        <rect x={item.x} y="100" width="90" height="80" rx="8" fill={item.color} opacity="0.9" />
        <text x={item.x + 45} y="135" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{item.label}</text>
        <text x={item.x + 45} y="158" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">{item.sub}</text>
      </g>
    ))}
    
    {/* Arrows */}
    {[130, 270, 410, 550, 690].map((x, i) => (
      <path key={i} d={`M${x} 140 L${x + 40} 140`} stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrowhead)" />
    ))}
    
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.4)" />
      </marker>
    </defs>
    
    {/* Title */}
    <text x="400" y="45" fill="white" fontSize="18" fontWeight="600" textAnchor="middle">My AI Delegation Workflow</text>
    <text x="400" y="70" fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="middle">How I structure every AI task request</text>
    
    {/* Labels */}
    <text x="400" y="230" fill="rgba(255,255,255,0.3)" fontSize="11" textAnchor="middle">💡 The key insight: Verification happens BEFORE shipping, not after</text>
  </svg>
);

const DecisionStoryArc: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    {/* Arc path */}
    <path
      d="M 80 280 Q 200 280, 250 200 Q 300 120, 400 80 Q 500 120, 550 200 Q 600 280, 720 280"
      fill="none"
      stroke="url(#arcGrad)"
      strokeWidth="4"
      strokeLinecap="round"
    />
    
    <defs>
      <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
    </defs>
    
    {/* Story points */}
    {[
      { x: 80, y: 280, label: 'Hook', desc: '"Users are churning"', color: '#f97316' },
      { x: 250, y: 200, label: 'Insight', desc: '+9pt retention lift', color: '#f59e0b' },
      { x: 400, y: 80, label: 'Choice', desc: 'Ship to SMB now', color: '#eab308' },
      { x: 550, y: 200, label: 'Risk', desc: '< 5% error threshold', color: '#84cc16' },
      { x: 720, y: 280, label: 'Next Step', desc: 'Rollout Monday', color: '#22c55e' },
    ].map((point, i) => (
      <g key={i}>
        <circle cx={point.x} cy={point.y} r="12" fill={point.color} />
        <circle cx={point.x} cy={point.y} r="6" fill="white" />
        <text x={point.x} y={point.y - 25} fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{point.label}</text>
        <text x={point.x} y={point.y + 35} fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{point.desc}</text>
      </g>
    ))}
    
    <text x="400" y="330" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Every decision story I tell follows this arc</text>
  </svg>
);

const TimeAllocationChart: React.FC = () => (
  <svg viewBox="0 0 800 400" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="400" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="40" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">How My Time Allocation Changed With AI</text>
    
    {/* Before/After comparison */}
    <text x="200" y="80" fill="rgba(255,255,255,0.6)" fontSize="13" textAnchor="middle">Before AI Partner</text>
    <text x="600" y="80" fill="rgba(255,255,255,0.6)" fontSize="13" textAnchor="middle">After AI Partner</text>
    
    {/* Before bars */}
    {[
      { label: 'Research & Synthesis', value: 35, color: '#ef4444' },
      { label: 'Writing & Docs', value: 30, color: '#f97316' },
      { label: 'Stakeholder Alignment', value: 20, color: '#eab308' },
      { label: 'Strategic Thinking', value: 10, color: '#22c55e' },
      { label: 'Verification & QA', value: 5, color: '#3b82f6' },
    ].map((item, i) => (
      <g key={`before-${i}`}>
        <rect x="50" y={100 + i * 55} width={item.value * 3} height="30" rx="4" fill={item.color} opacity="0.8" />
        <text x="55" y={120 + i * 55} fill="white" fontSize="11" fontWeight="500">{item.value}%</text>
        <text x="50" y={145 + i * 55} fill="rgba(255,255,255,0.5)" fontSize="10">{item.label}</text>
      </g>
    ))}
    
    {/* After bars */}
    {[
      { label: 'Research & Synthesis', value: 10, color: '#ef4444' },
      { label: 'Writing & Docs', value: 10, color: '#f97316' },
      { label: 'Stakeholder Alignment', value: 25, color: '#eab308' },
      { label: 'Strategic Thinking', value: 35, color: '#22c55e' },
      { label: 'Verification & QA', value: 20, color: '#3b82f6' },
    ].map((item, i) => (
      <g key={`after-${i}`}>
        <rect x="450" y={100 + i * 55} width={item.value * 3} height="30" rx="4" fill={item.color} opacity="0.8" />
        <text x="455" y={120 + i * 55} fill="white" fontSize="11" fontWeight="500">{item.value}%</text>
        <text x="450" y={145 + i * 55} fill="rgba(255,255,255,0.5)" fontSize="10">{item.label}</text>
      </g>
    ))}
    
    {/* Arrow */}
    <path d="M350 200 L380 200" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrow2)" />
    <defs>
      <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.3)" />
      </marker>
    </defs>
    
    <text x="400" y="380" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Strategic thinking time increased 3.5x • Verification became a real job</text>
  </svg>
);

const BuildBuyPartnerMatrix: React.FC = () => (
  <svg viewBox="0 0 800 380" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="380" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">My Build vs Buy vs Partner Framework</text>
    
    {/* Matrix headers */}
    <text x="200" y="80" fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="middle">SPEED</text>
    <text x="400" y="80" fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="middle">CONTROL</text>
    <text x="600" y="80" fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="middle">MOAT</text>
    
    {/* Build row */}
    <rect x="50" y="100" width="700" height="70" rx="8" fill="#22c55e" opacity="0.15" />
    <text x="100" y="140" fill="#22c55e" fontSize="14" fontWeight="600">BUILD</text>
    <circle cx="200" cy="135" r="10" fill="#22c55e" opacity="0.3" />
    <circle cx="400" cy="135" r="25" fill="#22c55e" />
    <circle cx="600" cy="135" r="25" fill="#22c55e" />
    <text x="720" y="140" fill="rgba(255,255,255,0.5)" fontSize="10">Data moat</text>
    
    {/* Buy row */}
    <rect x="50" y="180" width="700" height="70" rx="8" fill="#3b82f6" opacity="0.15" />
    <text x="100" y="220" fill="#3b82f6" fontSize="14" fontWeight="600">BUY</text>
    <circle cx="200" cy="215" r="25" fill="#3b82f6" />
    <circle cx="400" cy="215" r="10" fill="#3b82f6" opacity="0.3" />
    <circle cx="600" cy="215" r="10" fill="#3b82f6" opacity="0.3" />
    <text x="720" y="220" fill="rgba(255,255,255,0.5)" fontSize="10">Lock-in risk</text>
    
    {/* Partner row */}
    <rect x="50" y="260" width="700" height="70" rx="8" fill="#a855f7" opacity="0.15" />
    <text x="100" y="300" fill="#a855f7" fontSize="14" fontWeight="600">PARTNER</text>
    <circle cx="200" cy="295" r="18" fill="#a855f7" />
    <circle cx="400" cy="295" r="15" fill="#a855f7" opacity="0.6" />
    <circle cx="600" cy="295" r="15" fill="#a855f7" opacity="0.6" />
    <text x="720" y="300" fill="rgba(255,255,255,0.5)" fontSize="10">Exit ramps</text>
    
    <text x="400" y="360" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Circle size = relative strength in that dimension</text>
  </svg>
);

const WeeklyRhythmTimeline: React.FC = () => (
  <svg viewBox="0 0 800 250" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="250" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">My Weekly PM Rhythm</text>
    
    {/* Timeline */}
    <line x1="60" y1="120" x2="740" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    
    {/* Days */}
    {[
      { day: 'Mon', task: 'Backlog Triage', desc: 'AI clusters + I prioritize', color: '#3b82f6', x: 100 },
      { day: 'Tue', task: 'Deep Work', desc: 'PRDs + Strategy docs', color: '#6366f1', x: 230 },
      { day: 'Wed', task: 'Stakeholders', desc: 'Alignment + decisions', color: '#8b5cf6', x: 360 },
      { day: 'Thu', task: 'Risk Review', desc: 'What could break?', color: '#a855f7', x: 490 },
      { day: 'Fri', task: 'Bets Review', desc: 'What shipped + learned', color: '#22c55e', x: 620 },
    ].map((item, i) => (
      <g key={i}>
        <circle cx={item.x} cy="120" r="8" fill={item.color} />
        <text x={item.x} y="95" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.day}</text>
        <text x={item.x} y="155" fill={item.color} fontSize="11" fontWeight="500" textAnchor="middle">{item.task}</text>
        <text x={item.x} y="175" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.desc}</text>
      </g>
    ))}
    
    {/* Daily ritual note */}
    <rect x="200" y="200" width="400" height="35" rx="6" fill="rgba(255,255,255,0.05)" />
    <text x="400" y="222" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">📝 Daily: 15min delegation log + decision journal before EOD</text>
  </svg>
);

const FailureModeRadar: React.FC = () => (
  <svg viewBox="0 0 800 400" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="400" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">AI Failure Modes I Watch For</text>
    
    {/* Failure cards */}
    {[
      { title: '🎭 Hallucinations', risk: 'HIGH', fix: 'Require citations & data binding', color: '#ef4444', x: 50, y: 70 },
      { title: '😤 Overconfidence', risk: 'MED', fix: 'Force self-critique + patch notes', color: '#f97316', x: 420, y: 70 },
      { title: '🐙 Scope Creep', risk: 'MED', fix: 'One goal per prompt, period', color: '#eab308', x: 50, y: 200 },
      { title: '⚖️ Compliance Gaps', risk: 'HIGH', fix: 'Supply rules + red-team output', color: '#ef4444', x: 420, y: 200 },
    ].map((item, i) => (
      <g key={i}>
        <rect x={item.x} y={item.y} width="330" height="110" rx="10" fill="rgba(255,255,255,0.03)" stroke={item.color} strokeWidth="1" opacity="0.8" />
        <text x={item.x + 20} y={item.y + 35} fill="white" fontSize="14" fontWeight="600">{item.title}</text>
        <rect x={item.x + 250} y={item.y + 18} width="60" height="24" rx="4" fill={item.color} opacity="0.2" />
        <text x={item.x + 280} y={item.y + 35} fill={item.color} fontSize="11" fontWeight="600" textAnchor="middle">{item.risk}</text>
        <text x={item.x + 20} y={item.y + 65} fill="rgba(255,255,255,0.5)" fontSize="11">My fix:</text>
        <text x={item.x + 20} y={item.y + 85} fill="rgba(255,255,255,0.8)" fontSize="12">{item.fix}</text>
      </g>
    ))}
    
    <text x="400" y="380" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">I've been burned by all of these. Now I build defenses upfront.</text>
  </svg>
);

const PMSkillStack2025: React.FC = () => {
  return (
    <ArticleLayout
      category="Business & Strategy"
      title="My PM Operating System for 2025: Working With AI as a True Partner"
      subtitle="After a year of experimenting, here's how I actually work with LLMs: the delegation framework, decision-making rituals, and hard lessons learned"
      author="Kushal Parameshwara"
      date="November 26, 2025"
      readTime="12 min read"
      heroImage={{
        src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=600&fit=crop',
        alt: 'Modern product workspace with collaborative tools'
      }}
      keyTakeaways={[
        'Treat AI like a talented junior teammate who needs clear context, constraints, and verification, not a search engine.',
        'Every decision I communicate follows the same arc: Hook → Insight (with magnitude) → Choice → Risk threshold → Next step.',
        'Strategy in 2025 is about managing options and preserving reversibility, not making bold predictions.',
        'The biggest shift: I now spend 3.5x more time on strategic thinking because AI handles synthesis.',
        'Build defenses against AI failure modes upfront: hallucinations, overconfidence, scope creep, and compliance gaps.'
      ]}
      tags={[
        'Product Management',
        'AI Collaboration',
        'Decision Making',
        'Strategy',
        'Operating Systems'
      ]}
      articleId="pm-os-2025"
    >
      <p>
        A year ago, I was using ChatGPT like everyone else, throwing questions at it and hoping for magic. The results were... 
        fine. Occasionally impressive, often generic, and sometimes completely wrong. I was treating a powerful tool like a 
        search engine with attitude.
      </p>

      <p>
        Then something clicked. I stopped asking AI to give me answers and started <em>managing</em> it like I'd manage a new 
        team member. I defined roles. Set constraints. Required intermediate artifacts. Built in verification steps. 
        The difference was night and day.
      </p>

      <p>
        This article is my attempt to document what I've learned: the frameworks, rituals, and hard lessons that now form 
        my PM operating system. If you're a PM trying to figure out how AI fits into your workflow, I hope this saves you 
        some of the trial and error I went through.
      </p>

      <h2>The Mindset Shift: From Query to Delegation</h2>
      
      <p>
        Here's the mental model that changed everything for me: <strong>AI is like a fast junior PM with infinite energy, 
        decent synthesis skills, and zero context about your specific situation.</strong>
      </p>

      <p>
        Think about how you'd work with a talented new hire. You wouldn't just say "write me a PRD" and walk away. You'd 
        explain the context, share relevant documents, define what success looks like, and set up checkpoints to review 
        their work. That's exactly how I approach AI now.
      </p>

      <p>
        The biggest difference? <strong>Verification isn't optional.</strong> A junior PM might make mistakes, but they 
        usually know what they don't know. AI will confidently present hallucinations as facts. My job is to catch those 
        before they ship.
      </p>

      <DelegationFlowDiagram />

      <h2>My Delegation Framework</h2>

      <p>
        Every substantial task I delegate to AI now follows this structure. It took me weeks of iteration to land on this, 
        and it's been remarkably consistent across different types of work.
      </p>

      <h3>The Eight Elements</h3>

      <p><strong>1. Role Definition</strong></p>
      <p>
        I always start by telling the AI who it is. "You are a senior B2B SaaS PM with UX writing experience" works 
        way better than just asking for help. This sets the voice, the level of detail, and the assumed audience.
      </p>

      <p><strong>2. Single Goal</strong></p>
      <p>
        One outcome per request. Always. When I try to squeeze multiple goals into a single prompt, the quality drops 
        across the board. If I need three things, I make three requests.
      </p>

      <p><strong>3. Concrete Inputs</strong></p>
      <p>
        Links, data, user quotes, prior decisions. Anything that grounds the work in reality. The more specific I am 
        about inputs, the less the AI has to guess (and potentially hallucinate).
      </p>

      <p><strong>4. Explicit Constraints</strong></p>
      <p>
        Non-goals are as important as goals. I specify what to exclude, the tone I want, length limits, and any 
        compliance requirements. This prevents the AI from going off on tangents.
      </p>

      <p><strong>5. Staged Process</strong></p>
      <p>
        I don't ask for the final output immediately. My standard process: outline → draft → self-critique → patch 
        notes → final. This catches issues early and gives me checkpoints to course-correct.
      </p>

      <p><strong>6. Acceptance Criteria</strong></p>
      <p>
        Measurable bullets that the output must satisfy. "The PRD includes success metrics for each user story" is 
        better than "make it good."
      </p>

      <p><strong>7. Verification Method</strong></p>
      <p>
        How will I check this? If it involves facts, I need citations. If it involves data, I need to see the 
        calculations. If it involves code, I need to run it. I specify this upfront so the AI includes the 
        supporting information.
      </p>

      <p><strong>8. Hand-off Format</strong></p>
      <p>
        Markdown one-pager, table, JSON, slide outline. Whatever format I actually need for the next step. 
        This prevents the "great content, wrong format" problem.
      </p>

      <blockquote>
        Here's what I've learned the hard way: if you don't tell AI how you'll verify its work, it optimizes for 
        sounding right instead of being right. Always force it to show its work.
      </blockquote>

      <h3>Template I Actually Use</h3>

      <pre>
        <code>{`ROLE: [seniority + domain + audience]
GOAL: [single clear outcome]
INPUTS: [links, data, quotes, context]
CONSTRAINTS: [tone, format, exclusions, compliance]
PROCESS: outline → draft → self-critique → patch notes → final
ACCEPTANCE: [bullet list of requirements]
VERIFICATION: [how I'll check: facts, counts, references]
FORMAT: [markdown/table/JSON/slides]`}</code>
      </pre>

      <h2>How This Looks in Practice</h2>

      <p>
        Let me walk through three real scenarios from my work to show how this framework plays out.
      </p>

      <h3>Scenario 1: Backlog Triage (Startup Context)</h3>

      <p>
        Every Monday, I dump our Jira tickets into Claude and ask it to cluster by theme, estimate impact/effort 
        from the ticket text, and flag unknowns. The key constraint: it can't make up information. If something is 
        unclear from the ticket, it goes in the "needs clarification" bucket.
      </p>

      <p>
        My job becomes approving the themes, deciding which clusters to pursue this sprint, and defining quick tests 
        for the "we're not sure" items. What used to take 2 hours now takes 30 minutes, and I'm making better decisions 
        because I see patterns across the full backlog.
      </p>

      <h3>Scenario 2: PRD Drafting (B2B SaaS)</h3>

      <p>
        I share the context: customer feedback, competitive intel, technical constraints. The AI produces user stories, 
        success metrics, and edge cases. Then comes the crucial step: I ask it to self-critique the PRD, looking for 
        gaps, assumptions, and risks.
      </p>

      <p>
        I edit the bet size and risk section myself. That's judgment work that I don't outsource. But the synthesis, 
        structure, and first draft? AI handles that beautifully.
      </p>

      <h3>Scenario 3: UX Copy Variants (Consumer App)</h3>

      <p>
        For onboarding copy, error messages, or paywall text, I give tight tone constraints and ask for 5-7 variants 
        that are A/B-ready. The twist: I require counterexamples too. "Give me variants that would appeal to the 
        opposite user type" helps me understand the trade-offs in each option.
      </p>

      <TimeAllocationChart />

      <h2>Data Storytelling: Turning Analysis Into Decisions</h2>

      <p>
        Here's something I wish someone had told me earlier in my career: <strong>dashboards describe, but stories 
        decide.</strong> The best analysis in the world is useless if it doesn't lead to action.
      </p>

      <p>
        After struggling to get decisions out of executive reviews, I developed a narrative arc that I use for 
        every data-driven recommendation. Whether I'm talking to leadership, my squad, or a partner team, the 
        structure is the same.
      </p>

      <DecisionStoryArc />

      <h3>The Five-Part Arc</h3>

      <p><strong>Hook:</strong> The user pain or business risk in one sentence. This is why we're talking.</p>
      
      <p><strong>Insight (with magnitude):</strong> What changed, by how much, for whom. Numbers matter here. "Retention 
      improved" is weak; "9-point retention lift in SMB self-serve" is actionable.</p>
      
      <p><strong>Choice:</strong> The specific decision we're asking for. Ship, hold, or kill, plus the scope.</p>
      
      <p><strong>Risk (with thresholds):</strong> What could go wrong, and how we'll know. "If support tickets exceed 
      5 per 1k users, we pause" is a real guardrail.</p>
      
      <p><strong>Next:</strong> The first irreversible step and the rollback plan. Who owns it, when it happens.</p>

      <h3>Example: The Retention Decision</h3>

      <p>
        Let me show you how this played out recently. We had cohort data showing a 9-point retention lift for users 
        who completed our new onboarding flow. Good news, right? But the story was more nuanced.
      </p>

      <p>
        <strong>Hook:</strong> "We're losing users in the first week, and it's costing us $X in potential LTV."
      </p>
      
      <p>
        <strong>Insight:</strong> "Users who complete the new onboarding retain at 67% vs. 58%, a 9-point lift. 
        The effect concentrates in SMB self-serve. Support tickets dropped 15%. CPI held steady."
      </p>
      
      <p>
        <strong>Choice:</strong> "Full rollout to SMB this week. Hold enterprise until we instrument SSO edge cases."
      </p>
      
      <p>
        <strong>Risk:</strong> "If tickets exceed 5 per 1k users or SSO error rate hits 2%, we pause and investigate."
      </p>
      
      <p>
        <strong>Next:</strong> "Maria owns the rollout, starting Monday. Rollback is one config flag."
      </p>

      <p>
        The exec discussion focused on the risk we were consciously taking (holding enterprise) rather than 
        debating the charts. That's the goal: decisions, not dashboards.
      </p>

      <h2>Strategy as Option Management</h2>

      <p>
        2025 taught me that strategy isn't about predicting the future. It's about <strong>managing options while 
        preserving reversibility</strong>. The pace of AI development makes long-term predictions nearly worthless. 
        What works is staging learning before committing.
      </p>

      <BuildBuyPartnerMatrix />

      <h3>My Build/Buy/Partner Framework</h3>

      <p>
        Every strategic decision now goes through this lens:
      </p>

      <p>
        <strong>Build</strong> when data or workflow integration creates a moat. Yes, it's slower and has higher 
        fixed costs. But if your differentiation comes from proprietary data or deep process integration, building 
        is the only way to protect it.
      </p>

      <p>
        <strong>Buy</strong> when speed dominates and lock-in is bounded. The trap here is shallow differentiation. If 
        you buy something anyone can buy, you haven't created advantage. And always ask: what's our exit if this 
        vendor relationship sours?
      </p>

      <p>
        <strong>Partner</strong> to share risk and create exit ramps. The key is aligned incentives and defined exit 
        paths. I've seen too many partnerships where one side's success requires the other's failure.
      </p>

      <h3>Questions I Ask Before Every Strategic Commitment</h3>

      <ul>
        <li>Where is the moat: proprietary data, workflow lock-in, distribution, or brand?</li>
        <li>What happens if model quality converges? What remains defensible?</li>
        <li>What are the irreversible commitments, and can we stage learning before them?</li>
        <li>What's our exit strategy if quality or regulatory costs shift dramatically?</li>
      </ul>

      <p>
        That last question has saved me multiple times. The best deals are the ones where you know exactly how 
        you'd unwind them.
      </p>

      <h2>The Operating System: Daily and Weekly Rituals</h2>

      <p>
        Frameworks are great, but they don't work without consistent execution. Here's the rhythm that keeps 
        my system running.
      </p>

      <WeeklyRhythmTimeline />

      <h3>Weekly Rituals</h3>

      <p>
        <strong>Monday: Backlog Triage</strong> - AI clusters the backlog, I prioritize and define quick tests 
        for unknowns. This sets the week's focus.
      </p>

      <p>
        <strong>Tuesday: Deep Work</strong> - PRDs, strategy docs, anything that requires sustained thinking. 
        AI handles first drafts and research synthesis; I edit and decide.
      </p>

      <p>
        <strong>Wednesday: Stakeholder Day</strong> - Alignment meetings, decision reviews, cross-functional syncs. 
        I come prepared with decision one-pagers for anything that needs sign-off.
      </p>

      <p>
        <strong>Thursday: Risk Review</strong> - What could break? I review active experiments, check guardrails, 
        and update the risk radar. This is when I catch issues before they become fires.
      </p>

      <p>
        <strong>Friday: Bets Review</strong> - What shipped this week? What did we learn? I update the decision 
        ledger and set up next week's priorities.
      </p>

      <h3>Daily Rituals</h3>

      <p>
        <strong>Delegation Log (10 min):</strong> Every task I've delegated to AI, its status, and the next hand-off. 
        This prevents balls from dropping and helps me see patterns in what works.
      </p>

      <p>
        <strong>Decision Journal (5 min):</strong> Any decision I made that day: the choice, the evidence, the bet 
        size, and when I'll review the outcome. This builds my judgment over time.
      </p>

      <h3>Artifacts I Maintain</h3>

      <ul>
        <li><strong>AI Delegation Register:</strong> Canonical list of active AI tasks, acceptance criteria, last QA status.</li>
        <li><strong>Decision Ledger:</strong> One-pagers for every significant decision, with outcome notes and postmortems.</li>
        <li><strong>Risk Radar:</strong> Current top 5 risks with thresholds and rollback plans.</li>
      </ul>

      <h2>The Failure Modes (And How I Guard Against Them)</h2>

      <p>
        Let me be real: I've shipped AI-assisted work that was wrong. Embarrassingly wrong, in some cases. 
        Here are the failure modes I now actively defend against.
      </p>

      <FailureModeRadar />

      <h3>Hallucinations</h3>

      <p>
        AI will confidently make up statistics, misattribute quotes, and invent features that don't exist. My 
        defense: require citations or code-level references for any factual claims. If the AI can't point to 
        a source, I treat it as speculation.
      </p>

      <h3>Overconfident Drafts</h3>

      <p>
        The first draft often sounds polished and complete, but it's hiding gaps and assumptions. My defense: 
        enforce self-critique as part of the process. "Now critique this draft and list what's missing or weak" 
        surfaces issues the confident first draft hides.
      </p>

      <h3>Scope Creep</h3>

      <p>
        Ask AI for one thing and it'll try to solve adjacent problems you didn't ask about. My defense: one 
        clear goal per request, no exceptions. If I need multiple things, I make multiple requests.
      </p>

      <h3>Compliance Gaps</h3>

      <p>
        AI doesn't know your company's policies, regulatory requirements, or legal constraints. My defense: 
        supply the rules explicitly, add a compliance checklist to acceptance criteria, and require red-team 
        output that tries to find violations.
      </p>

      <h3>My Red-Team Prompt</h3>

      <p>
        When I need to stress-test a recommendation, I use this:
      </p>

      <pre>
        <code>{`Argue against this recommendation. List 5 ways it could fail.
For each failure mode:
- What's the fastest test we could run?
- What threshold would trigger concern?
- What's the rollback plan?

Then propose a monitoring approach for the first 30 days.`}</code>
      </pre>

      <h2>Real Examples: 48-Hour MVP to Enterprise Rollout</h2>

      <h3>The 48-Hour MVP Sprint</h3>

      <p>
        We had a hypothesis about a new feature and 48 hours to validate it. Here's how AI fit into the sprint:
      </p>

      <ul>
        <li><strong>Day 1 Morning:</strong> Problem framing with user quotes → AI synthesizes themes → I cut scope to core hypothesis</li>
        <li><strong>Day 1 Afternoon:</strong> AI drafts PRD with success metrics → I define the experiment → Engineering estimates</li>
        <li><strong>Day 2 Morning:</strong> AI generates UX copy variants + analytics spec → I select and tweak</li>
        <li><strong>Day 2 Afternoon:</strong> Decision memo with go/no-go criteria → Ship with guardrails</li>
      </ul>

      <p>
        We validated the hypothesis (positive signal on conversion) and learned enough to plan the full build. 
        Without AI, this would've been a week of work at minimum.
      </p>

      <h3>Enterprise Rollout with Compliance Gates</h3>

      <p>
        The opposite end of the spectrum: a feature rollout with regulatory implications and enterprise customers:
      </p>

      <ul>
        <li><strong>Phase 1:</strong> AI drafts stakeholder brief → I review with legal → Risk register created</li>
        <li><strong>Phase 2:</strong> Compliance mapping with AI assist → Manual review of edge cases</li>
        <li><strong>Phase 3:</strong> Vendor evaluation matrix → Exit ramps and data residency documented</li>
        <li><strong>Phase 4:</strong> Phased rollout with SLOs → Thresholds and rollback triggers defined</li>
      </ul>

      <p>
The AI accelerated the synthesis work by 60%, but the judgment calls (risk acceptance, compliance interpretation,
        vendor selection) stayed firmly human.
      </p>

      <h2>The Field Rules I Live By</h2>

      <p>
        If I had to distill everything down to rules I could print and tape to my monitor, it would be these:
      </p>

      <ol>
        <li><strong>Manage the model like a teammate; verify like an auditor.</strong></li>
        <li><strong>Every decision story names a choice, a magnitude, a risk threshold, and a next step.</strong></li>
        <li><strong>Prefer reversible moves; stage learning before irreversible commitments.</strong></li>
        <li><strong>Build self-critique and red-teaming into every process.</strong></li>
        <li><strong>Moat lives in data, workflows, distribution, and brand, not in raw model intelligence.</strong></li>
      </ol>

      <p>
        The tools will keep evolving. Claude 4, GPT-5, whatever comes next. They'll be more capable, probably 
        more reliable, maybe even agentic. But these fundamentals won't change: clear delegation, rigorous 
        verification, decision stories that drive action, and strategy that preserves optionality.
      </p>

      <p>
        You don't need more artifacts. You need a tighter operating system. Build the rituals, use the templates, 
        and always, always, make the model show its work.
      </p>

      <p>
        Then tell the story that moves the room.
      </p>

      <h2>Try It Yourself</h2>

      <p>
        If you want to put these ideas into practice, I've built some tools based on these frameworks. 
        The <Link to="/tools/ai-prioritizer" style={{ color: '#667eea', fontWeight: 600 }}>AI Prioritizer</Link> helps 
        you score features using RICE with AI-assisted reasoning. The{' '}
        <Link to="/tools/ai-roadmap-advisor" style={{ color: '#667eea', fontWeight: 600 }}>AI Roadmap Advisor</Link>{' '}
        can help you think through strategic planning. And if you want to see how I applied AI-assisted workflows 
        to accelerate development, check out my{' '}
        <Link to="/projects/ai-prototyping-framework" style={{ color: '#667eea', fontWeight: 600 }}>AI-Powered Prototyping Framework</Link>{' '}
        case study.
      </p>
    </ArticleLayout>
  );
};

export default PMSkillStack2025;
