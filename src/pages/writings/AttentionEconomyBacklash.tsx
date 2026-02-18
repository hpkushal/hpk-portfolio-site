import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// SVG Components for visuals
const AttentionAwarenessRise: React.FC = () => (
  <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="300" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Awakening I've Witnessed</text>
    
    {[
      { factor: 'Mental Health Crisis', icon: '🧠', desc: 'Anxiety linked to social media', color: '#ef4444' },
      { factor: 'Productivity Loss', icon: '⏰', desc: 'Notifications destroying focus', color: '#f97316' },
      { factor: 'Whistleblowers', icon: '🔔', desc: 'Addiction by design exposed', color: '#eab308' },
      { factor: 'Screen Time Data', icon: '📱', desc: 'Shocking usage statistics', color: '#22c55e' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="180" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="28" textAnchor="middle">{item.icon}</text>
        <text x={132 + i * 185} y="140" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.factor}</text>
        <text x={132 + i * 185} y="170" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc.split(' ').slice(0, 3).join(' ')}</text>
        <text x={132 + i * 185} y="185" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc.split(' ').slice(3).join(' ')}</text>
      </g>
    ))}
    
    <text x="400" y="280" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">People are finally realizing their attention is being harvested, not served</text>
  </svg>
);

const DigitalMinimalismPrinciples: React.FC = () => (
  <svg viewBox="0 0 800 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="320" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">Digital Minimalism: What It Actually Means</text>
    
    {/* Center circle */}
    <circle cx="400" cy="170" r="60" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2" />
    <text x="400" y="165" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Intentional</text>
    <text x="400" y="182" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Tech Use</text>
    
    {/* Surrounding principles */}
    {[
      { label: 'Value-Based', desc: 'Use only what serves goals', angle: 0, color: '#3b82f6' },
      { label: 'Attention Guard', desc: 'Protect focus as precious', angle: 90, color: '#8b5cf6' },
      { label: 'Real World First', desc: 'Offline relationships priority', angle: 180, color: '#f97316' },
      { label: 'Purposeful', desc: 'Tech by choice, not habit', angle: 270, color: '#22c55e' },
    ].map((item, i) => {
      const x = 400 + Math.cos((item.angle - 90) * Math.PI / 180) * 160;
      const y = 170 + Math.sin((item.angle - 90) * Math.PI / 180) * 100;
      return (
        <g key={i}>
          <line x1="400" y1="170" x2={x} y2={y} stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4" />
          <circle cx={x} cy={y} r="50" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
          <text x={x} y={y - 5} fill="white" fontSize="10" fontWeight="500" textAnchor="middle">{item.label}</text>
          <text x={x} y={y + 12} fill="rgba(255,255,255,0.5)" fontSize="8" textAnchor="middle">{item.desc}</text>
        </g>
      );
    })}
    
    <text x="400" y="300" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">This isn't anti-technology. It's pro-human.</text>
  </svg>
);

const CorporateResponseChart: React.FC = () => (
  <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="350" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">How Companies Are Responding</text>
    
    {/* Adapting companies */}
    <rect x="50" y="70" width="330" height="230" rx="10" fill="rgba(34, 197, 94, 0.05)" stroke="#22c55e" strokeWidth="1" />
    <text x="215" y="100" fill="#22c55e" fontSize="13" fontWeight="600" textAnchor="middle">Adapting Successfully</text>
    
    {[
      { company: 'Apple', why: 'Privacy + Screen Time as selling points' },
      { company: 'Notion', why: 'Productivity over engagement' },
      { company: 'Calm/Headspace', why: 'Wellbeing as the product' },
      { company: 'Focus apps', why: 'Help users concentrate' },
    ].map((item, i) => (
      <g key={i}>
        <text x="70" y={135 + i * 40} fill="white" fontSize="11" fontWeight="500">{item.company}</text>
        <text x="70" y={150 + i * 40} fill="rgba(255,255,255,0.5)" fontSize="9">{item.why}</text>
      </g>
    ))}
    
    {/* Struggling companies */}
    <rect x="420" y="70" width="330" height="230" rx="10" fill="rgba(239, 68, 68, 0.05)" stroke="#ef4444" strokeWidth="1" />
    <text x="585" y="100" fill="#ef4444" fontSize="13" fontWeight="600" textAnchor="middle">Under Pressure</text>
    
    {[
      { company: 'Traditional Social', why: 'Built on endless scrolling' },
      { company: 'Gaming (addiction)', why: 'Engagement mechanics scrutinized' },
      { company: 'News Media', why: 'Outrage-driven models failing' },
      { company: 'Ad Tech', why: 'Behavioral targeting backlash' },
    ].map((item, i) => (
      <g key={i}>
        <text x="440" y={135 + i * 40} fill="white" fontSize="11" fontWeight="500">{item.company}</text>
        <text x="440" y={150 + i * 40} fill="rgba(255,255,255,0.5)" fontSize="9">{item.why}</text>
      </g>
    ))}
    
    <text x="400" y="330" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The market is rewarding companies that respect user attention</text>
  </svg>
);

const MarketOpportunities: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The New Market Opportunity</text>
    
    {[
      { market: 'Digital Wellness', size: '$35B', growth: '+30%/yr', color: '#22c55e' },
      { market: 'Privacy Tools', size: '$12B', growth: '+25%/yr', color: '#3b82f6' },
      { market: 'Minimalist Devices', size: '$2B', growth: '+40%/yr', color: '#8b5cf6' },
      { market: 'AI Focus Tools', size: '$5B', growth: '+50%/yr', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="rgba(255,255,255,0.6)" fontSize="11" textAnchor="middle">{item.market}</text>
        <text x={132 + i * 185} y="145" fill={item.color} fontSize="24" fontWeight="700" textAnchor="middle">{item.size}</text>
        <text x={132 + i * 185} y="175" fill="#22c55e" fontSize="12" textAnchor="middle">{item.growth}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">The attention backlash is creating substantial new markets</text>
  </svg>
);

const FutureOfTechInteraction: React.FC = () => (
  <svg viewBox="0 0 800 280" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <rect width="800" height="280" fill="#0f0f0f" rx="12" />
    
    <text x="400" y="35" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">The Future of Human-Computer Interaction</text>
    
    {[
      { paradigm: 'Calm Technology', desc: 'Computing in background', icon: '🧘', color: '#22c55e' },
      { paradigm: 'Ambient Interfaces', desc: 'Info without attention', icon: '🌫️', color: '#3b82f6' },
      { paradigm: 'Goal-Oriented', desc: 'Accomplish, don\'t engage', icon: '🎯', color: '#8b5cf6' },
      { paradigm: 'Mindful Design', desc: 'Deliberate, not impulsive', icon: '💭', color: '#f97316' },
    ].map((item, i) => (
      <g key={i}>
        <rect x={50 + i * 185} y="70" width="165" height="160" rx="10" fill="rgba(255,255,255,0.02)" stroke={item.color} strokeWidth="1" />
        <text x={132 + i * 185} y="105" fill="white" fontSize="24" textAnchor="middle">{item.icon}</text>
        <text x={132 + i * 185} y="140" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{item.paradigm}</text>
        <text x={132 + i * 185} y="170" fill="rgba(255,255,255,0.6)" fontSize="10" textAnchor="middle">{item.desc}</text>
      </g>
    ))}
    
    <text x="400" y="260" fill="rgba(255,255,255,0.4)" fontSize="11" textAnchor="middle">Technology that serves humans, not the other way around</text>
  </svg>
);

const AttentionEconomyBacklash: React.FC = () => {
  return (
    <ArticleLayout
      category="Society & Culture"
      title="The Attention Economy Backlash: Why I'm Betting on Digital Minimalism"
      subtitle="After years of watching attention capture dominate tech, I'm convinced the tide is turning. Here's why."
      author="Kushal Parameshwara"
      date="November 12, 2025"
      readTime="10 min read"
      heroImage={{
        src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop",
        alt: "Person practicing digital minimalism with simplified devices"
      }}
      keyTakeaways={[
        "Consumer awareness of attention manipulation has reached a tipping point. People know their attention is being harvested.",
        "Digital minimalism is becoming mainstream, not just a niche movement among tech-savvy early adopters.",
        "Companies built on attention capture are under pressure. Those prioritizing user wellbeing are gaining.",
        "New markets (digital wellness, focus tools, minimalist devices) are growing 30-50% annually.",
        "The future belongs to technology that serves human flourishing, not human psychology exploitation."
      ]}
      tags={['Digital Wellbeing', 'Technology Ethics', 'Consumer Behavior', 'Product Strategy', 'Minimalism']}
      articleId="attention-economy-backlash"
    >
      <p>
        For twenty years, the digital economy operated on a simple premise: capture human attention, 
        then monetize it. Social media platforms, streaming services, news sites, mobile apps, all 
        competing for the same finite resource. Our time and attention became the product.
      </p>

      <p>
        I bought into this model for a long time. As a product person, I studied engagement metrics, 
        optimized for time-on-site, and celebrated when users spent more time in our products. It 
        took me years to realize we were optimizing for the wrong thing.
      </p>

      <p>
        Now I'm convinced we're at a turning point. <strong>The attention economy is eating itself, 
        and the companies that understand this will win the next decade.</strong>
      </p>

      <h2>The Great Awakening</h2>

      <p>
        Something shifted in the past few years. People started realizing their attention was being 
        systematically harvested, not served. Several factors drove this awakening:
      </p>

      <AttentionAwarenessRise />

      <h3>The Mental Health Connection</h3>

      <p>
        Research linking social media use to anxiety, depression, and loneliness reached mainstream 
        awareness. Parents watched their teenagers struggle. Adults noticed their own mood shifts 
        after scrolling. The connection became impossible to ignore.
      </p>

      <h3>The Productivity Crisis</h3>

      <p>
        Knowledge workers realized that constant notifications were destroying their ability to 
        focus. The average person checks their phone 96 times per day. Context switching costs 
        were eating productivity. Something had to give.
      </p>

      <h3>The Whistleblower Effect</h3>

      <p>
        Frances Haugen's Facebook revelations, "The Social Dilemma" documentary, and a steady 
        stream of former tech employees speaking out made intentional addiction design visible. 
        People learned that the slot machine dynamics in their apps were no accident.
      </p>

      <h3>Screen Time Data</h3>

      <p>
        When Apple and Android introduced screen time tracking, people confronted their actual 
        usage for the first time. Six hours a day on social media. Hundreds of phone pickups. 
        The data was shocking, and it drove change.
      </p>

      <blockquote>
        The most successful technology companies of the next decade will be those that solve 
        problems rather than create addictions. The attention economy is eating itself.
      </blockquote>

      <h2>Digital Minimalism Goes Mainstream</h2>

      <p>
        Cal Newport's "Digital Minimalism" captured a movement that was already forming. What 
        started as a niche philosophy among tech-savvy early adopters has become mainstream.
      </p>

      <DigitalMinimalismPrinciples />

      <h3>What It Actually Looks Like</h3>

      <p>
        I've watched people in my network implement digital minimalism in different ways:
      </p>

      <ul>
        <li><strong>App deletion:</strong> Removing social media apps from phones, keeping only desktop access</li>
        <li><strong>Notification purge:</strong> Turning off all alerts except calls and texts from favorites</li>
        <li><strong>Phone-free zones:</strong> Bedrooms, dining tables, first hour of the day</li>
        <li><strong>Dumb phone experiments:</strong> Switching to basic phones for periods</li>
        <li><strong>Digital sabbaths:</strong> Complete disconnection one day per week</li>
      </ul>

      <p>
        The common thread: intentionality. Using technology by choice rather than habit.
      </p>

      <h3>The Economics of Detox</h3>

      <p>
        Digital minimalism isn't just a lifestyle choice. It's become a significant economic force:
      </p>

      <ul>
        <li>Digital detox retreats charging thousands of dollars</li>
        <li>Apps that block other apps (yes, the irony is intentional)</li>
        <li>Light Phone, Punkt, and other minimalist devices gaining traction</li>
        <li>Meditation and mindfulness apps reaching mainstream adoption</li>
      </ul>

      <h2>How Companies Are Responding</h2>

      <p>
        The attention backlash is reshaping the competitive landscape. Some companies are adapting 
        successfully. Others are struggling.
      </p>

      <CorporateResponseChart />

      <h3>The Winners</h3>

      <p>
        <strong>Apple</strong> has made privacy and screen time controls a selling point. They're 
        positioning the iPhone as a tool for living, not a slot machine in your pocket. It's 
        working: privacy features are now a competitive advantage.
      </p>

      <p>
        <strong>Productivity tools</strong> like Notion, Obsidian, and Linear are winning by 
        helping users accomplish goals rather than capturing attention. Their metrics focus on 
        tasks completed, not time spent.
      </p>

      <p>
        <strong>Wellness apps</strong> like Calm and Headspace built businesses on the backlash 
        itself. They profit by helping people reclaim attention, not capture it.
      </p>

      <h3>The Losers</h3>

      <p>
        <strong>Traditional social media</strong> platforms built on infinite scroll are under 
        pressure. User growth has stalled in developed markets. Younger generations are more 
        skeptical of platforms their parents got addicted to.
      </p>

      <p>
        <strong>Gaming companies</strong> using addiction mechanics face increasing regulatory 
        scrutiny. Loot boxes and engagement loops that target children are being restricted.
      </p>

      <p>
        <strong>News media</strong> built on outrage and clickbait is losing trust. Subscription 
        models are outperforming ad-dependent models because they align incentives with quality.
      </p>

      <h2>The Market Opportunity</h2>

      <p>
        The attention backlash isn't just about values. It's creating substantial new markets:
      </p>

      <MarketOpportunities />

      <p>
        These numbers reflect genuine demand. People are paying for products that help them 
        reclaim their attention, protect their privacy, and use technology more intentionally.
      </p>

      <h3>The Cost of Ignoring This</h3>

      <p>
        Companies that dismiss the backlash face real risks:
      </p>

      <ul>
        <li><strong>User exodus:</strong> Customers leaving for ethical alternatives</li>
        <li><strong>Regulatory penalties:</strong> Increasing fines for manipulative practices</li>
        <li><strong>Talent drain:</strong> Engineers refusing to work on harmful products</li>
        <li><strong>Brand damage:</strong> Association with digital addiction becomes toxic</li>
      </ul>

      <h2>What This Means for Product Teams</h2>

      <p>
        I've started thinking differently about product development based on this shift:
      </p>

      <h3>Measure Value, Not Engagement</h3>

      <p>
        Time-on-site is a terrible metric. It tells you nothing about whether users got value. 
        Better metrics: tasks completed, goals achieved, problems solved, satisfaction scores.
      </p>

      <h3>Design for Completion, Not Continuation</h3>

      <p>
        The best products help users accomplish what they came to do and then get out of the way. 
        Infinite scroll and autoplay are engagement hacks that erode trust over time.
      </p>

      <h3>Give Users Control</h3>

      <p>
        Let users configure their experience: notification settings, usage limits, content filters. 
        Users who feel in control are more loyal than users who feel manipulated.
      </p>

      <h3>Be Transparent About Trade-offs</h3>

      <p>
        If your business model depends on attention capture, be honest about it. Users respect 
        transparency more than hidden manipulation.
      </p>

      <h2>The Future of Human-Computer Interaction</h2>

      <p>
        I believe we're moving toward fundamentally different design paradigms:
      </p>

      <FutureOfTechInteraction />

      <h3>Calm Technology</h3>

      <p>
        Computing that stays in the background until needed. Ambient information that doesn't 
        demand attention. Alerts that respect context and priority.
      </p>

      <h3>AI as Attention Guardian</h3>

      <p>
        Ironically, AI could help solve the attention problem it helped create. Personalized 
        filtering that blocks irrelevant content. Context-aware systems that know when not to 
        interrupt. Wellbeing optimization built into AI assistants.
      </p>

      <h3>Goal-Oriented Design</h3>

      <p>
        Products designed around helping users accomplish specific objectives, then getting out 
        of the way. Success measured by efficiency, not engagement.
      </p>

      <h2>My Bet on the Future</h2>

      <p>
        I'm betting that the next wave of successful technology companies will be those that 
        respect human attention rather than exploit it. Here's why:
      </p>

      <ul>
        <li><strong>Trust becomes scarce:</strong> As manipulation becomes visible, trust becomes valuable</li>
        <li><strong>Regulation catches up:</strong> Governments are starting to restrict attention capture</li>
        <li><strong>Users vote with feet:</strong> Alternatives exist, and people are choosing them</li>
        <li><strong>Talent preferences shift:</strong> The best engineers want to build helpful products</li>
      </ul>

      <blockquote>
        The future belongs to technology that serves human flourishing rather than exploiting 
        human psychology. The attention economy is ending. The question is what comes next.
      </blockquote>

      <p>
        Digital minimalism isn't anti-technology. It's pro-human. The movement represents a 
        maturation of our relationship with digital tools, moving from addiction and manipulation 
        toward intentional and beneficial use.
      </p>

      <p>
        The companies that understand this evolution and design accordingly will define the 
        next generation of human-computer interaction. I'm excited to be part of building that future.
      </p>
    </ArticleLayout>
  );
};

export default AttentionEconomyBacklash;
