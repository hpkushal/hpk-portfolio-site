import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const ConsultingValueChain: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Traditional Consulting Value Chain</text>
    <text x="400" y="55" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">Each layer is being disrupted differently</text>
    
    {[
      { layer: 'Information Gathering', who: 'Junior analysts', aiImpact: '80%+ automatable', color: '#ef4444' },
      { layer: 'Pattern Recognition', who: 'Mid-level consultants', aiImpact: '60%+ augmented', color: '#f97316' },
      { layer: 'Strategic Synthesis', who: 'Senior consultants', aiImpact: '30% augmented', color: '#eab308' },
      { layer: 'Change Leadership', who: 'Partners', aiImpact: 'Still human', color: '#22c55e' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="80" width="165" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="115" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">{item.layer}</text>
        <text x={132 + i * 185} y="145" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{item.who}</text>
        
        <rect x={72 + i * 185} y="170" width="120" height="30" rx="4" fill={item.color} opacity="0.2" />
        <text x={132 + i * 185} y="190" fill={item.color} fontSize="10" textAnchor="middle">{item.aiImpact}</text>
        
        {/* Arrow down */}
        {i < 3 && (
          <path d={`M${215 + i * 185} 180 L${235 + i * 185} 180`} stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowRight)" />
        )}
      </g>
    ))}
    
    <defs>
      <marker id="arrowRight" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.3)" />
      </marker>
    </defs>
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The bottom of the pyramid is being compressed. The top remains valuable.</text>
  </svg>
);

const PyramidDisruption: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Pyramid Model Under Pressure</text>
    
    {/* Traditional pyramid */}
    <text x="200" y="70" fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="middle">Traditional</text>
    <polygon points="200,100 100,280 300,280" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <text x="200" y="140" fill="white" fontSize="9" textAnchor="middle">Partners</text>
    <text x="200" y="180" fill="white" fontSize="9" textAnchor="middle">Managers</text>
    <text x="200" y="220" fill="white" fontSize="9" textAnchor="middle">Consultants</text>
    <text x="200" y="260" fill="white" fontSize="9" textAnchor="middle">Analysts</text>
    
    {/* Arrow */}
    <path d="M350 180 L450 180" stroke="rgba(255,255,255,0.3)" strokeWidth="2" markerEnd="url(#arrowRight2)" />
    <text x="400" y="165" fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">AI</text>
    
    {/* AI-enabled pyramid (flatter) */}
    <text x="600" y="70" fill="rgba(255,255,255,0.6)" fontSize="12" textAnchor="middle">AI-Enabled</text>
    <polygon points="600,140 480,280 720,280" fill="none" stroke="#22c55e" strokeWidth="2" />
    <text x="600" y="175" fill="white" fontSize="9" textAnchor="middle">Partners + AI</text>
    <text x="600" y="215" fill="white" fontSize="9" textAnchor="middle">Senior + AI</text>
    <text x="600" y="255" fill="#ef4444" fontSize="9" textAnchor="middle">Compressed</text>
    
    <defs>
      <marker id="arrowRight2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.3)" />
      </marker>
    </defs>
    
    <text x="400" y="320" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">6 analysts spending 2 weeks → 1 analyst + AI in 2 days</text>
  </svg>
);

const FirmPlatforms: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">How Leading Firms Are Responding</text>
    
    {[
      { firm: 'McKinsey', platform: 'Lilli', desc: 'Instant access to firm knowledge', color: '#3b82f6' },
      { firm: 'BCG', platform: 'GAMMA', desc: 'AI + analytics practice', color: '#22c55e' },
      { firm: 'Deloitte', platform: 'AI Institute', desc: 'Research + tools + consulting', color: '#8b5cf6' },
      { firm: 'Accenture', platform: 'AI Hub', desc: 'Generative AI capabilities', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{item.firm}</text>
        <text x={132 + i * 185} y="130" fill={item.color} fontSize="11" textAnchor="middle">{item.platform}</text>
        <text x={132 + i * 185} y="165" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.desc.split(' ').slice(0, 3).join(' ')}</text>
        <text x={132 + i * 185} y="180" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{item.desc.split(' ').slice(3).join(' ')}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">These platforms create defensible advantages by combining methodology with AI</text>
  </svg>
);

const SkillsShift: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Where the Skills Premium Is Moving</text>
    
    {/* Declining skills */}
    <rect x="50" y="70" width="330" height="200" rx="10" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="1" />
    <text x="215" y="100" fill="#ef4444" fontSize="13" fontWeight="600" textAnchor="middle">Declining Premium</text>
    
    {[
      'Data gathering and synthesis',
      'Basic financial modeling',
      'Benchmarking research',
      'Presentation creation',
    ].map((item, i) => (
      <text key={i} x="70" y={135 + i * 30} fill="rgba(255,255,255,0.6)" fontSize="11">↓ {item}</text>
    ))}
    
    {/* Rising skills */}
    <rect x="420" y="70" width="330" height="200" rx="10" fill="rgba(34, 197, 94, 0.05)" stroke="#22c55e" strokeWidth="1" />
    <text x="585" y="100" fill="#22c55e" fontSize="13" fontWeight="600" textAnchor="middle">Rising Premium</text>
    
    {[
      'Relationship building and trust',
      'Creative problem-solving',
      'Change leadership',
      'AI-human collaboration',
    ].map((item, i) => (
      <text key={i} x="440" y={135 + i * 30} fill="rgba(255,255,255,0.6)" fontSize="11">↑ {item}</text>
    ))}
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The most valuable consultants are those who can do what AI cannot</text>
  </svg>
);

const NewEngagementModels: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The New Engagement Models</text>
    
    {[
      { model: 'Performance-Based', desc: 'Shared risk/reward', old: 'Fixed fee', color: '#22c55e' },
      { model: 'Subscription', desc: 'Ongoing AI insights', old: 'Project-based', color: '#3b82f6' },
      { model: 'Product-Like', desc: 'Deployable solutions', old: 'Custom builds', color: '#8b5cf6' },
      { model: 'Continuous', desc: 'Real-time optimization', old: 'Point-in-time', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="100" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">{item.model}</text>
        <text x={132 + i * 185} y="125" fill={item.color} fontSize="10" textAnchor="middle">{item.desc}</text>
        
        <line x1={72 + i * 185} y1="150" x2={195 + i * 185} y2="150" stroke="rgba(255,255,255,0.1)" />
        
        <text x={132 + i * 185} y="175" fill="rgba(255,255,255,0.4)" fontSize="9" textAnchor="middle">Replacing:</text>
        <text x={132 + i * 185} y="195" fill="#ef4444" fontSize="9" textAnchor="middle">{item.old}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">AI enables models that weren't possible before</text>
  </svg>
);

const ConsultingIndustryAIDisruption: React.FC = () => {
  return (
    <ArticleLayout
      category="Business & Strategy"
      title="The Consulting Industry's AI Reckoning: What I'm Seeing Inside the Firms"
      subtitle="40% of consulting work can now be augmented or automated by AI. Here's what that means for the trillion-dollar industry."
      author="Kushal Parameshwara"
      date="November 22, 2025"
      readTime="12 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        alt: "Business consulting meeting with digital transformation elements"
      }}
      keyTakeaways={[
        "McKinsey reports 40% of consulting work can now be augmented or automated by AI.",
        "The traditional labor arbitrage model (billing junior analysts at premium rates) is collapsing.",
        "Leading firms are building proprietary AI platforms: McKinsey's Lilli, BCG's GAMMA, Deloitte's AI Institute.",
        "The skills premium is shifting to relationship building, creative problem-solving, and change leadership.",
        "This transformation is a preview of what's coming to all knowledge work."
      ]}
      tags={['Consulting', 'AI Transformation', 'Professional Services', 'Future of Work', 'Strategy']}
      articleId="consulting-industry-ai-disruption"
    >
      <p>
        I've been watching the consulting industry closely for years, both as someone who's worked 
        with consultants and as someone fascinated by business model disruption. What I'm seeing 
        now is unprecedented: <strong>the fundamental model that's powered this trillion-dollar 
        industry for decades is being dismantled by AI.</strong>
      </p>

      <p>
        This isn't hyperbole. McKinsey itself reports that 40% of consulting work can now be 
        augmented or automated by AI. The implications extend far beyond consulting to all forms 
        of knowledge work.
      </p>

      <p>
        Let me share what I'm observing and what I think it means.
      </p>

      <h2>How Traditional Consulting Creates Value</h2>

      <p>
        To understand the disruption, you need to understand the traditional model. Consulting 
        value comes from a layered system:
      </p>

      <ConsultingValueChain />

      <h3>Information Gathering and Analysis</h3>

      <p>
        Junior consultants spend enormous time gathering data, conducting research, and performing 
        analysis. Market research, competitive analysis, benchmarking, data synthesis. This work 
        follows established methodologies and requires intelligence but not deep expertise.
      </p>

      <h3>Pattern Recognition and Framework Application</h3>

      <p>
        Mid-level consultants recognize patterns across industries and apply proven frameworks 
        to new situations. They bring cross-industry insights and structured approaches that 
        clients may lack internally.
      </p>

      <h3>Strategic Synthesis and Recommendation</h3>

      <p>
        Senior consultants synthesize complex information into actionable recommendations. They 
        leverage experience across multiple engagements to anticipate challenges and identify 
        solutions.
      </p>

      <h3>Change Leadership and Implementation</h3>

      <p>
        Partners and senior leaders guide organizations through complex transformations. This 
        requires relationship building, political navigation, and the credibility to drive change.
      </p>

      <p>
        Here's the key insight: <strong>AI is disrupting each layer differently, and at different 
        speeds.</strong>
      </p>

      <h2>The Labor Arbitrage Model Is Collapsing</h2>

      <p>
        Much of consulting's profitability has relied on labor arbitrage: hiring recent graduates 
        at relatively low salaries and billing their time at premium rates. The pyramid model.
      </p>

      <PyramidDisruption />

      <p>
        Consider a typical strategy engagement under the traditional model: 6 analysts spend 2 
        weeks gathering and analyzing market data. That's expensive.
      </p>

      <p>
        With AI-enhanced approaches: 1 analyst uses AI tools to gather and analyze the same data 
        in 2 days. The quality is often better because AI can process more data more consistently.
      </p>

      <p>
        This efficiency gain is positive for clients and senior consultants. It's devastating 
        for entry-level consulting jobs. The pyramid is being compressed from the bottom.
      </p>

      <blockquote>
        "We're not experimenting with AI anymore. We're deploying it across every practice area. 
        The question isn't whether AI changes consulting. It's how fast." - Senior Partner at 
        Big 4 Firm
      </blockquote>

      <h2>How Leading Firms Are Responding</h2>

      <p>
        The top consulting firms aren't standing still. They're building proprietary AI platforms 
        that combine consulting methodologies with AI capabilities:
      </p>

      <FirmPlatforms />

      <h3>McKinsey's Lilli</h3>

      <p>
        An AI platform providing instant access to the firm's knowledge base. Consultants can 
        query decades of research, frameworks, and case examples. It accelerates the pattern 
        recognition that previously required years of experience.
      </p>

      <h3>BCG's GAMMA</h3>

      <p>
        BCG's AI and analytics consulting practice combines proprietary tools with consulting 
        capabilities. They're not just using AI; they're productizing it.
      </p>

      <h3>Deloitte's AI Institute</h3>

      <p>
        Combines research, tools, and consulting into an integrated offering. They're positioning 
        themselves to help clients with AI transformation while using AI internally.
      </p>

      <p>
        These platforms create defensible competitive advantages by embedding consulting IP into 
        AI systems. The barrier to entry goes up, not down, for new competitors.
      </p>

      <h2>The Skills Premium Shift</h2>

      <p>
        As routine analytical work becomes automated, the premium shifts to skills that remain 
        uniquely human:
      </p>

      <SkillsShift />

      <h3>What's Declining</h3>

      <ul>
        <li><strong>Data gathering:</strong> AI can synthesize information faster and more comprehensively</li>
        <li><strong>Basic modeling:</strong> AI can build and validate financial models</li>
        <li><strong>Research synthesis:</strong> AI can review documents and extract insights</li>
        <li><strong>Presentation creation:</strong> AI can generate slides and visualizations</li>
      </ul>

      <h3>What's Rising</h3>

      <ul>
        <li><strong>Relationship building:</strong> Understanding client needs, building trust, navigating politics</li>
        <li><strong>Creative problem-solving:</strong> Developing novel solutions to unprecedented challenges</li>
        <li><strong>Change leadership:</strong> Guiding organizations through complex transformations</li>
        <li><strong>AI-human collaboration:</strong> Knowing how to use AI effectively as a thinking partner</li>
      </ul>

      <p>
        The consultants who thrive will be those who can do what AI cannot: build relationships, 
        navigate ambiguity, lead change, and provide the trusted judgment that clients need.
      </p>

      <h2>New Engagement Models</h2>

      <p>
        AI is enabling engagement models that weren't possible before:
      </p>

      <NewEngagementModels />

      <h3>Performance-Based Contracts</h3>

      <p>
        When AI can measure outcomes in real-time, it becomes possible to tie fees to results. 
        Shared risk and reward models align consultant and client incentives.
      </p>

      <h3>Subscription Models</h3>

      <p>
        Instead of project-based engagements, firms offer ongoing AI-powered insights. Continuous 
        monitoring and optimization rather than point-in-time analysis.
      </p>

      <h3>Product-Like Solutions</h3>

      <p>
        Some consulting deliverables are becoming products that can be deployed across multiple 
        clients. The economics shift from billable hours to scalable solutions.
      </p>

      <h2>What This Means for Knowledge Workers</h2>

      <p>
        The consulting transformation is a preview of changes coming to all knowledge work. The 
        patterns are clear:
      </p>

      <h3>Skills That Matter</h3>

      <ul>
        <li><strong>AI literacy:</strong> Understanding how to prompt, validate, and refine AI outputs</li>
        <li><strong>Critical thinking:</strong> Evaluating AI recommendations and identifying limitations</li>
        <li><strong>Emotional intelligence:</strong> Managing human relationships and organizational dynamics</li>
        <li><strong>Creative problem-solving:</strong> Developing novel approaches to complex challenges</li>
      </ul>

      <h3>Career Strategy Adaptations</h3>

      <ul>
        <li><strong>Develop AI collaboration skills:</strong> Learn to work effectively with AI as a partner</li>
        <li><strong>Build deep expertise:</strong> Specialize where human judgment remains critical</li>
        <li><strong>Focus on relationships:</strong> Invest in networking and client relationship skills</li>
        <li><strong>Embrace continuous learning:</strong> Stay current with rapidly evolving AI capabilities</li>
      </ul>

      <h2>For Organizations Buying Consulting</h2>

      <p>
        If you're a client of consulting firms, this transformation creates opportunities:
      </p>

      <h3>Increased Expectations</h3>

      <ul>
        <li>Faster delivery times for analytical work</li>
        <li>More comprehensive data analysis and insights</li>
        <li>Real-time monitoring and optimization capabilities</li>
        <li>Better ROI measurement and outcome tracking</li>
      </ul>

      <h3>New Selection Criteria</h3>

      <ul>
        <li>AI tool sophistication and integration</li>
        <li>Track record of successful AI-augmented projects</li>
        <li>Ability to transfer AI capabilities to your teams</li>
        <li>Flexibility in engagement models and pricing</li>
      </ul>

      <h2>My Take on What Comes Next</h2>

      <p>
        Looking ahead, I see several trends shaping consulting's evolution:
      </p>

      <p>
        <strong>Democratization of analysis:</strong> AI-powered consulting tools will become 
        accessible to companies directly, reducing reliance on external consultants for routine 
        analytical work.
      </p>

      <p>
        <strong>Deeper specialization:</strong> Generic consulting capabilities become less 
        valuable as AI handles general analysis. Success requires deep industry expertise and 
        specialized knowledge.
      </p>

      <p>
        <strong>Continuous engagement:</strong> Rather than project-based work, more ongoing 
        partnerships where AI enables continuous optimization.
      </p>

      <p>
        <strong>Blurring lines:</strong> The distinction between consulting, technology, and 
        software will continue to blur. Consulting firms become technology companies; technology 
        companies offer consulting services.
      </p>

      <h2>The Bottom Line</h2>

      <p>
        The consulting industry's AI transformation is a preview of changes coming to all 
        knowledge work. The fundamental question isn't whether AI will change these industries, 
        but how quickly organizations and individuals will adapt.
      </p>

      <p>
        The firms and professionals who thrive will be those who embrace AI as a collaborative 
        partner while doubling down on uniquely human capabilities. They'll create new forms of 
        value that leverage both artificial and human intelligence.
      </p>

      <blockquote>
        The future of consulting isn't about humans versus AI. It's about creating new forms 
        of value through human-AI collaboration that neither could achieve alone.
      </blockquote>

      <p>
        For the consulting industry specifically, this transformation represents both its greatest 
        challenge and its greatest opportunity. The firms that successfully navigate this 
        transition will emerge stronger and more valuable.
      </p>

      <p>
        Those that cling to the old model will find themselves increasingly irrelevant in a 
        world where AI can do their routine work better, faster, and cheaper.
      </p>
    </ArticleLayout>
  );
};

export default ConsultingIndustryAIDisruption;
