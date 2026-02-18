import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const AlignmentLayersDiagram: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <defs>
      <linearGradient id="layer1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="layer2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="layer3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Three Layers of AI Alignment</text>
    
    {/* Layer 1 - Technical */}
    <rect x="50" y="70" width="220" height="240" rx="10" fill="url(#layer1Grad)" opacity="0.9" />
    <text x="160" y="105" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Layer 1</text>
    <text x="160" y="130" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">TECHNICAL</text>
    <text x="160" y="160" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Reward modeling</text>
    <text x="160" y="180" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Constitutional AI</text>
    <text x="160" y="200" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Interpretability</text>
    <text x="160" y="220" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Red-teaming</text>
    <text x="160" y="260" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">"Make AI do what we ask"</text>
    <text x="160" y="290" fill="#22c55e" fontSize="12" fontWeight="600" textAnchor="middle">✓ Most progress here</text>
    
    {/* Layer 2 - Value Specification */}
    <rect x="290" y="70" width="220" height="240" rx="10" fill="url(#layer2Grad)" opacity="0.9" />
    <text x="400" y="105" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Layer 2</text>
    <text x="400" y="130" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">VALUE SPEC</text>
    <text x="400" y="160" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Whose values?</text>
    <text x="400" y="180" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Which trade-offs?</text>
    <text x="400" y="200" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Cultural context</text>
    <text x="400" y="220" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Conflicting priorities</text>
    <text x="400" y="260" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">"Define what we actually want"</text>
    <text x="400" y="290" fill="#eab308" fontSize="12" fontWeight="600" textAnchor="middle">⚠ Underexplored</text>
    
    {/* Layer 3 - Value Evolution */}
    <rect x="530" y="70" width="220" height="240" rx="10" fill="url(#layer3Grad)" opacity="0.9" />
    <text x="640" y="105" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">Layer 3</text>
    <text x="640" y="130" fill="white" fontSize="18" fontWeight="700" textAnchor="middle">EVOLUTION</text>
    <text x="640" y="160" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Values change over time</text>
    <text x="640" y="180" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Moral progress</text>
    <text x="640" y="200" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Lock-in risks</text>
    <text x="640" y="220" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Value drift</text>
    <text x="640" y="260" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">"Allow for moral growth"</text>
    <text x="640" y="290" fill="#ef4444" fontSize="12" fontWeight="600" textAnchor="middle">✗ Barely addressed</text>
    
    {/* Connecting arrows */}
    <path d="M270 190 L290 190" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrowAL)" />
    <path d="M510 190 L530 190" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrowAL)" />
    
    <defs>
      <marker id="arrowAL" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.4)" />
      </marker>
    </defs>
  </svg>
);

const ValueTensionsDiagram: React.FC = () => (
  <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="300" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Human Values: The Contradictions We Navigate Daily</text>
    
    {/* Value pairs */}
    {[
      { left: 'Individual Freedom', right: 'Collective Security', y: 80 },
      { left: 'Innovation', right: 'Stability', y: 130 },
      { left: 'Efficiency', right: 'Fairness', y: 180 },
      { left: 'Short-term Gains', right: 'Long-term Health', y: 230 },
    ].map((pair, i) => (
      <g key={i}>
        <rect x="80" y={pair.y - 15} width="180" height="30" rx="6" fill="#3b82f6" opacity="0.3" />
        <text x="170" y={pair.y + 5} fill="#60a5fa" fontSize="12" fontWeight="500" textAnchor="middle">{pair.left}</text>
        
        <line x1="280" y1={pair.y} x2="520" y2={pair.y} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4" />
        <text x="400" y={pair.y + 4} fill="rgba(255,255,255,0.4)" fontSize="10" textAnchor="middle">vs</text>
        
        <rect x="540" y={pair.y - 15} width="180" height="30" rx="6" fill="#ef4444" opacity="0.3" />
        <text x="630" y={pair.y + 5} fill="#f87171" fontSize="12" fontWeight="500" textAnchor="middle">{pair.right}</text>
      </g>
    ))}
    
    <text x="400" y="280" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">How do we program AI to navigate tensions that we ourselves struggle with?</text>
  </svg>
);

const AlignmentApproachesChart: React.FC = () => (
  <svg viewBox="0 0 800 380" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="380" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">My Framework: Comprehensive Alignment Approaches</text>
    
    {/* Three approach cards */}
    {[
      { 
        title: 'Participatory Value Learning', 
        icon: '🗣️',
        points: ['Ongoing dialogue', 'Surface conflicts', 'Help humans reflect', 'Adapt over time'],
        color: '#22c55e',
        x: 50
      },
      { 
        title: 'Institutional Alignment', 
        icon: '🏛️',
        points: ['Global representation', 'Accountability systems', 'Oversight standards', 'Coordination'],
        color: '#3b82f6',
        x: 290
      },
      { 
        title: 'Empirical Value Research', 
        icon: '🔬',
        points: ['How values form', 'How they change', 'Cultural variation', 'Measurement'],
        color: '#a855f7',
        x: 530
      },
    ].map((card, i) => (
      <g key={i}>
        <rect x={card.x} y="70" width="220" height="270" rx="10" fill="rgba(255,255,255,0.03)" stroke={card.color} strokeWidth="1" />
        <text x={card.x + 110} y="110" fill="white" fontSize="24" textAnchor="middle">{card.icon}</text>
        <text x={card.x + 110} y="145" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">{card.title}</text>
        {card.points.map((point, j) => (
          <g key={j}>
            <circle cx={card.x + 30} cy={175 + j * 30} r="4" fill={card.color} />
            <text x={card.x + 45} y={180 + j * 30} fill="rgba(255,255,255,0.8)" fontSize="11">{point}</text>
          </g>
        ))}
      </g>
    ))}
    
    <text x="400" y="360" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Technical solutions alone aren't enough. We need all three approaches working together.</text>
  </svg>
);

const StakesVisualization: React.FC = () => (
  <svg viewBox="0 0 800 200" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="200" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Stakes: Two Possible Futures</text>
    
    {/* Success path */}
    <rect x="50" y="60" width="330" height="110" rx="10" fill="rgba(34, 197, 94, 0.1)" stroke="#22c55e" strokeWidth="1" />
    <text x="215" y="90" fill="#22c55e" fontSize="14" fontWeight="600" textAnchor="middle">✓ Alignment Success</text>
    <text x="215" y="115" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">AI amplifies human agency</text>
    <text x="215" y="135" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Helps us flourish by our deepest values</text>
    <text x="215" y="155" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Becomes tool for human potential</text>
    
    {/* Failure path */}
    <rect x="420" y="60" width="330" height="110" rx="10" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="1" />
    <text x="585" y="90" fill="#ef4444" fontSize="14" fontWeight="600" textAnchor="middle">✗ Alignment Failure</text>
    <text x="585" y="115" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Loss of human agency</text>
    <text x="585" y="135" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Values locked or drifted beyond recognition</text>
    <text x="585" y="155" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">Existential risk to humanity</text>
    
    <text x="400" y="185" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">This isn't hyperbole. The path we choose now shapes everything.</text>
  </svg>
);

const AIAlignmentControlProblem: React.FC = () => {
  return (
    <ArticleLayout
      category="AI & Technology"
      title="Why I Think About AI Alignment Differently Now"
      subtitle="After diving deep into this challenge, I've realized the problem isn't just technical. It's philosophical, social, and deeply human."
      author="Kushal Parameshwara"
      date="November 15, 2025"
      readTime="12 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
        alt: "Abstract neural network visualization representing AI alignment challenges"
      }}
      keyTakeaways={[
        "AI alignment operates on three interconnected layers: technical, value specification, and value evolution.",
        "We've made real progress on technical alignment, but we're barely scratching the surface on the deeper questions.",
        "Human values are contextual, evolving, and often contradictory. Precise specification may be impossible.",
        "The solution requires interdisciplinary work: philosophy, psychology, sociology, not just computer science.",
        "Getting this right might be the most important challenge of our generation."
      ]}
      tags={['AI Alignment', 'AI Safety', 'Ethics', 'Technology Policy', 'Philosophy']}
      articleId="ai-alignment-control-problem"
    >
      <p>
        I used to think AI alignment was primarily an engineering problem. Build better reward functions, create 
        smarter safety constraints, and eventually we'd crack it. Then I spent six months reading everything I could 
        find on the topic, talking to researchers, and honestly wrestling with the implications.
      </p>

      <p>
        My conclusion? <strong>The technical challenges are the easy part.</strong> The hard part is figuring out 
        what we actually want AI to optimize for, and whether the values we'd encode today are the ones we'll want 
        tomorrow.
      </p>

      <p>
        This might sound abstract, but I promise it's not. The decisions being made right now at AI labs, by 
        policymakers, and by researchers will shape whether AI becomes humanity's greatest tool or its biggest 
        mistake. I want to share how I've come to think about this problem, because I believe everyone should 
        be part of this conversation.
      </p>

      <h2>The Problem Is Deeper Than I Thought</h2>

      <p>
        When most people talk about AI alignment, they focus on technical solutions: RLHF (Reinforcement Learning 
        from Human Feedback), Constitutional AI, interpretability research. These are all important. They're also 
        nowhere near sufficient.
      </p>

      <p>
        The real challenge operates on three distinct layers, and we've only made serious progress on the first one.
      </p>

      <AlignmentLayersDiagram />

      <h3>Layer 1: Technical Alignment</h3>

      <p>
        This is where the AI safety community has focused most of its energy. The goal: make AI systems do what 
        we tell them to do, without finding loopholes or misinterpreting instructions.
      </p>

      <p>
        The classic example is the paperclip maximizer: an AI tasked with making paperclips that eventually converts 
        all matter in the universe into paperclips. Absurd? Yes. But it illustrates a real problem. AI systems 
        optimize for exactly what you measure, not what you meant.
      </p>

      <p>
        We've made genuine progress here. Constitutional AI embeds principles directly into training. Interpretability 
        research is revealing how models actually process information. Red-teaming has become standard practice. 
        These advances matter.
      </p>

      <p>
        But here's what keeps me up at night: <strong>technical alignment assumes we know what we want the AI to 
        optimize for.</strong> That assumption breaks down completely when we look at the next layer.
      </p>

      <h3>Layer 2: Value Specification</h3>

      <p>
        Let's say we solve technical alignment perfectly. The AI will do exactly what we specify. Great. Now... 
        what do we specify?
      </p>

      <p>
        Consider something that seems simple: "maximize human happiness." Immediately, problems emerge:
      </p>

      <ul>
        <li>Whose happiness counts? Everyone equally? Weighted by some factor?</li>
        <li>How do we balance short-term and long-term happiness?</li>
        <li>What about happiness derived from activities that harm others?</li>
        <li>Should we count future humans who don't exist yet?</li>
        <li>How do we handle cultural differences in what happiness even means?</li>
      </ul>

      <p>
        These aren't engineering problems. They're philosophical problems that humanity has debated for millennia 
        without resolution. And now we're trying to encode answers into systems more powerful than anything we've 
        ever built.
      </p>

      <ValueTensionsDiagram />

      <p>
        I spend a lot of time thinking about these value tensions because I navigate them in my own product work. 
        Every product decision involves trade-offs between competing goods. The difference is that my decisions 
        affect thousands of users. AGI decisions could affect billions, or all future humans.
      </p>

      <h3>Layer 3: Value Evolution</h3>

      <p>
        This is the layer that truly scares me.
      </p>

      <p>
        Human values aren't static. They evolve, sometimes dramatically. Slavery was once considered normal and 
        natural. So was denying women the right to vote. We look back on these as obvious moral failures, but at 
        the time, they were embedded in social structures and defended by sophisticated arguments.
      </p>

      <p>
        Now imagine we perfectly align AI with today's values and lock them in. We might be preventing humanity's 
        moral progress. We might be encoding our generation's blind spots into systems that shape civilization 
        for centuries.
      </p>

      <p>
        But the alternative is also terrifying: allow too much flexibility and we risk value drift. The AI systems 
        that shape our information environment could gradually shift human values in directions we'd never 
        consciously choose.
      </p>

      <blockquote>
        The question isn't whether AI will change human values. It's whether it will change them in ways we 
        retrospectively endorse.
      </blockquote>

      <h2>Why Technical Solutions Aren't Enough</h2>

      <p>
        I've talked to researchers who focus entirely on technical alignment. They're brilliant people doing 
        essential work. But I've noticed a pattern: they often treat value specification as "someone else's 
        problem," as if philosophers or policymakers will figure out what values to encode and then hand 
        over a clean spec.
      </p>

      <p>
        That's not how it works. Every technical decision embeds values implicitly.
      </p>

      <p>
        When we train language models using human feedback, we're encoding the values and biases of the human 
        raters. When we design reward functions, we're making choices about what matters and how much. When 
        we decide what data to train on, we're shaping what the AI will consider normal or desirable.
      </p>

      <p>
        <strong>There is no value-neutral AI alignment.</strong> The choice to prioritize safety over capability, 
        consistency over adaptability, efficiency over fairness: these are all value choices. Pretending otherwise 
        doesn't eliminate them; it just makes them invisible and unexamined.
      </p>

      <h2>How I Think About Solutions</h2>

      <p>
        After all this, you might think I'm pessimistic. I'm actually not. I believe we can navigate this 
        challenge, but only if we broaden our approach beyond purely technical solutions.
      </p>

      <AlignmentApproachesChart />

      <h3>Participatory Value Learning</h3>

      <p>
        Instead of trying to specify human values in advance (which may be impossible), we need AI systems 
        that can engage in ongoing dialogue about values with diverse stakeholders.
      </p>

      <p>
        This means developing AI that can:
      </p>

      <ul>
        <li>Recognize when value conflicts arise and surface them for human consideration</li>
        <li>Facilitate productive discussions between people with different values</li>
        <li>Help humans reflect on and refine their own values</li>
        <li>Adapt to evolving human values while maintaining core commitments</li>
      </ul>

      <p>
        I see hints of this in Constitutional AI and debate-based training, but we're nowhere near where we 
        need to be.
      </p>

      <h3>Institutional Alignment</h3>

      <p>
        AI alignment can't be solved by individual companies or researchers. We need new institutions that can:
      </p>

      <ul>
        <li>Ensure diverse global representation in AI development decisions</li>
        <li>Create accountability mechanisms for AI systems with significant social impact</li>
        <li>Establish standards and oversight for alignment research</li>
        <li>Coordinate responses to alignment failures or concerning developments</li>
      </ul>

      <p>
        This is governance work, and it's as important as the technical research. Right now, a handful of 
        companies are making decisions that affect everyone on the planet, with minimal democratic input.
      </p>

      <h3>Empirical Value Research</h3>

      <p>
        We need to know more about human values themselves: how they form, how they change, how they vary 
        across cultures and contexts. This isn't just philosophical speculation; it's empirical research 
        that should involve psychologists, anthropologists, sociologists, and neuroscientists.
      </p>

      <p>
        If we're going to encode human values into AI, we should probably understand them better first.
      </p>

      <h2>What This Means for Different Stakeholders</h2>

      <p>
        I've thought a lot about what different groups should take from this:
      </p>

      <p>
        <strong>For Researchers:</strong> Embrace interdisciplinary collaboration. The most important breakthroughs 
        might come from better understanding human values, not just better algorithms. Don't outsource the 
        philosophy to "someone else."
      </p>

      <p>
        <strong>For Companies:</strong> Invest in alignment research that goes beyond technical solutions. Create 
        processes for surfacing and addressing value conflicts. Be transparent about the value choices embedded 
        in your systems.
      </p>

      <p>
        <strong>For Policymakers:</strong> Focus on creating institutions and processes for ongoing democratic input, 
        not just one-time regulations. The governance frameworks we build must evolve with advancing capabilities.
      </p>

      <p>
        <strong>For Everyone:</strong> Recognize that AI alignment isn't just a technical problem for experts. It's 
        a reflection of our deepest questions about human values and social organization. You have a stake in 
        how these questions are answered.
      </p>

      <h2>The Stakes Are Real</h2>

      <StakesVisualization />

      <p>
        I don't think the stakes here are exaggerated. We're building systems that will increasingly shape our 
        information environment, our economic opportunities, our social interactions, and eventually our 
        understanding of what's true and valuable.
      </p>

      <p>
        Success means AI that amplifies human agency, helps us flourish according to our deepest values, and 
        supports our continued moral growth. Failure could mean losing human agency altogether, locked into 
        values we'd eventually reject if we had the chance.
      </p>

      <p>
        The alignment problem forces us to confront fundamental questions: What does it mean to be human? 
        What kind of future do we want? What values should guide our civilization?
      </p>

      <p>
        In wrestling with these questions, we might discover not just how to build better AI, but how to 
        build a better world. That's the opportunity hidden inside this challenge.
      </p>

      <blockquote>
        The goal isn't to create AI that perfectly reflects current human values. It's to create AI that 
        helps humanity become the best version of itself.
      </blockquote>

      <p>
        I don't know if we'll succeed. But I'm convinced that the effort matters, that it requires all of us, 
        and that the conversation needs to extend far beyond the technical community. This is humanity's 
        challenge, not just Silicon Valley's.
      </p>
    </ArticleLayout>
  );
};

export default AIAlignmentControlProblem;
