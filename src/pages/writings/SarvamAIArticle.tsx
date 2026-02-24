import React from 'react';
import ArticleLayout from '../../layouts/ArticleLayout';

// --- Inline SVG Illustrations ---

/** 1) The India AI Divide Diagram */
const AIDivideDiagram: React.FC = () => (
  <svg viewBox="0 0 900 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <defs>
      <linearGradient id="globalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id="sarvamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#10b981" />
      </linearGradient>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#f97316" />
      </marker>
    </defs>
    <rect x="0" y="0" width="900" height="320" rx="14" fill="#0f0f0f" />
    <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
      The Structural Gap in Global AI Models
    </text>

    {/* Global Models Pipeline */}
    <text x="120" y="80" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">Global LLM Approach</text>
    <rect x="60" y="100" width="180" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
    <text x="150" y="125" fill="white" fontSize="12" textAnchor="middle">English First</text>
    <text x="150" y="145" fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">trillions of tokens</text>

    <path d="M 240 130 L 290 130" stroke="url(#globalGrad)" strokeWidth="2" markerEnd="url(#arrow)" />
    <polygon points="285,126 295,130 285,134" fill="#f97316" />

    <rect x="300" y="100" width="180" height="60" rx="8" fill="rgba(239,68,68,0.05)" stroke="rgba(239,68,68,0.2)" />
    <text x="390" y="125" fill="#ef4444" fontSize="12" textAnchor="middle">Patchwork Translation</text>
    <text x="390" y="145" fill="rgba(239,68,68,0.7)" fontSize="10" textAnchor="middle">context loss &amp; hallucination</text>

    <path d="M 480 130 L 530 130" stroke="url(#globalGrad)" strokeWidth="2" />
    <polygon points="525,126 535,130 525,134" fill="#f97316" />

    <rect x="540" y="100" width="180" height="60" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
    <text x="630" y="125" fill="rgba(255,255,255,0.4)" fontSize="12" textAnchor="middle">Indian Language Outputs</text>
    <text x="630" y="145" fill="rgba(255,255,255,0.3)" fontSize="10" textAnchor="middle">fractured cultural alignment</text>

    {/* Sarvam Pipeline */}
    <text x="120" y="200" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">Sarvam AI Native Approach</text>
    <rect x="60" y="220" width="180" height="60" rx="8" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.2)" />
    <text x="150" y="245" fill="#22c55e" fontSize="12" textAnchor="middle">Native Tokenization</text>
    <text x="150" y="265" fill="rgba(34,197,94,0.7)" fontSize="10" textAnchor="middle">built for 22 languages</text>

    <path d="M 240 250 L 290 250" stroke="url(#sarvamGrad)" strokeWidth="2" />
    <polygon points="285,246 295,250 285,254" fill="#10b981" />

    <rect x="300" y="220" width="180" height="60" rx="8" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.3)" />
    <text x="390" y="245" fill="#22c55e" fontSize="12" textAnchor="middle">Cultural Comprehension</text>
    <text x="390" y="265" fill="rgba(34,197,94,0.7)" fontSize="10" textAnchor="middle">high efficiency parameter routing</text>

    <path d="M 480 250 L 530 250" stroke="url(#sarvamGrad)" strokeWidth="2" />
    <polygon points="525,246 535,250 525,254" fill="#10b981" />

    <rect x="540" y="220" width="180" height="60" rx="8" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.4)" />
    <text x="630" y="245" fill="#10b981" fontSize="12" fontWeight="600" textAnchor="middle">Sovereign Performance</text>
    <text x="630" y="265" fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle">high accuracy multi-lingual output</text>
  </svg>
);

/** 2) Sarvam Product Ecosystem */
const EcosystemDiagram: React.FC = () => (
  <svg viewBox="0 0 900 380" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <defs>
      <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    <rect x="0" y="0" width="900" height="380" rx="14" fill="#0f0f0f" />
    <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
      The Full Stack Sovereign Architecture
    </text>

    {/* Center Core */}
    <circle cx="450" cy="190" r="50" fill="url(#coreGrad)" filter="url(#glow)" />
    <circle cx="450" cy="190" r="45" fill="#0f0f0f" />
    <text x="450" y="185" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Sarvam</text>
    <text x="450" y="205" fill="rgba(255,255,255,0.7)" fontSize="11" textAnchor="middle">105B Core</text>

    {/* Nodes */}
    {[
      { x: 200, y: 100, label: 'Indus App', desc: 'Consumer chat\ninterface', color: '#ec4899', icon: '💬' },
      { x: 700, y: 100, label: 'Saaras V3', desc: 'Voice first\ninteraction', color: '#14b8a6', icon: '🎙️' },
      { x: 200, y: 280, label: 'Translate', desc: '22 language\nAPI bridge', color: '#f59e0b', icon: '🔄' },
      { x: 700, y: 280, label: 'Sarvam Vision', desc: 'Indic script OCR\n& documents', color: '#8b5cf6', icon: '👁️' },
      { x: 450, y: 340, label: 'Sarvam Kaze', desc: 'AI smart glasses\n(Upcoming 2026)', color: '#3b82f6', icon: '🕶️' }
    ].map((n, i) => (
      <g key={i}>
        <line x1="450" y1={n.y === 340 ? 240 : 190} x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
        <rect x={n.x - 70} y={n.y - 35} width="140" height="70" rx="10" fill="rgba(255,255,255,0.05)" stroke={n.color} strokeWidth="1.5" />
        <text x={n.x} y={n.y - 12} fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{n.icon} {n.label}</text>
        {n.desc.split('\n').map((line, li) => (
          <text key={li} x={n.x} y={n.y + 8 + (li * 14)} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{line}</text>
        ))}
      </g>
    ))}
  </svg>
);

/** 3) Token Efficiency Comparison Chart */
const TokenEfficiencyChart: React.FC = () => (
  <svg viewBox="0 0 900 340" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
    <defs>
      <linearGradient id="inefficientGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
      <linearGradient id="efficientGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="baselineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3f3f46" />
        <stop offset="100%" stopColor="#27272a" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="900" height="340" rx="14" fill="#0f0f0f" />
    <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
      The Tokenization Penalty In Global AI
    </text>
    <text x="450" y="60" fill="rgba(255,255,255,0.5)" fontSize="12" textAnchor="middle">
      Why Western models cost more and run slower for Indian users
    </text>

    {/* Labels */}
    <text x="80" y="115" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">English Text</text>
    <text x="80" y="185" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">Hindi (Global LLM)</text>
    <text x="80" y="255" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">Hindi (Sarvam Native)</text>

    {/* Base English Bar */}
    <rect x="250" y="95" width="200" height="30" rx="6" fill="url(#baselineGrad)" stroke="rgba(255,255,255,0.1)" />
    <text x="470" y="115" fill="white" fontSize="12">1x Cost and Latency Baseline</text>

    {/* Inefficient Global LLM Bar */}
    <rect x="250" y="165" width="550" height="30" rx="6" fill="url(#inefficientGrad)" />
    <text x="820" y="185" fill="#ef4444" fontSize="12" fontWeight="bold">3.8x Cost Overhead</text>

    {/* Efficient Native Bar */}
    <rect x="250" y="235" width="240" height="30" rx="6" fill="url(#efficientGrad)" />
    <text x="510" y="255" fill="#3b82f6" fontSize="12" fontWeight="bold">1.2x Target Cost Ratio</text>

    {/* Dotted lines bridging the gap */}
    <line x1="450" y1="125" x2="450" y2="290" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />

    {/* Callout box */}
    <rect x="250" y="290" width="480" height="32" rx="6" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" />
    <text x="270" y="310" fill="#60a5fa" fontSize="12">
      Native vocabularies reduce the tokens required to express the identical concept by up to 60%.
    </text>
  </svg>
);


const SarvamAIArticle: React.FC = () => {
  return (
    <ArticleLayout
      category="AI & Technology"
      title="Sarvam AI: India's Most Important Bet on Artificial Intelligence"
      subtitle="I was intrigued by the straightforwardness of their ambition. They do not just want to disrupt a market. They want to build India's full stack sovereign AI platform from the ground up."
      author="Kushal Parameshwara"
      date="February 24, 2026"
      readTime="15 min read"
      heroImage={{
        src: "/images/sarvam-ai-hero.webp",
        alt: "Sarvam AI and India's Sovereign AI Infrastructure"
      }}
      keyTakeaways={[
        "Global LLMs fundamentally misunderstand Indian languages because they rely on patchwork translation over English heavy training data.",
        "Sarvam is building models natively tokenized for 22 languages and this bypasses the comprehension gap and drastically reduces compute costs.",
        "Voice first technology like Saaras V3 is the primary unlock for India's massive rural and non typing populations.",
        "Sovereign infrastructure is no longer optional. The Indian government is backing Sarvam with compute and integration into national systems like Aadhaar."
      ]}
      tags={['Sarvam AI', 'India', 'LLMs', 'Sovereign AI', 'Multilingual AI', 'Technology']}
      articleId="sarvam-ai-india"
    >
      <p>
        When I first heard about Sarvam AI, what caught my attention was the sheer scale of the mandate. They are not trying to build a wrapper on top of OpenAI or Claude for a niche enterprise software market. They are attempting to build the foundational digital infrastructure for a population of 1.4 billion people. These people speak 22 officially recognized languages and live across wildly different socioeconomic spectrums.
      </p>

      <p>
        Founded in 2023 by Vivek Raghavan and Pratyush Kumar, who were previously leading AI4Bharat at IIT Madras, Sarvam is not a company stumbling into the Indian language problem. They spent years researching exactly why global AI systems fail at it. Now they have the capital and the mandate to fix it at incredible scale.
      </p>

      <h2>The Core Problem is The Language Divide</h2>

      <p>
        Here is the uncomfortable truth about the AI revolution. It is happening in a language hundreds of millions of people do not primarily speak.
      </p>

      <p>
        When an artificial intelligence model is trained on trillions of English tokens but only a fraction of Hindi, Tamil, or Bengali, it creates a fundamental comprehension problem. Western models do not actually understand India. They simply translate an English thought process into regional words. This causes severe cultural hallucination, formatting errors, and massive inefficiencies in how the models process data.
      </p>

      <AIDivideDiagram />

      <p>
        Sarvam recognized that you cannot patch a Western model to understand India. You have to build it natively from scratch.
      </p>

      <h3>The Hidden Cost of Translation</h3>

      <p>
        There is a massive economic penalty for using Western models in Indian languages. A standard English model might use one token to represent a word like water. When that same model tries to output the Hindi word paani, the tokenizer, which is optimized for the English alphabet, might split that single Hindi word into three or four separate tokens.
      </p>

      <p>
        Because API pricing for OpenAI or Anthropic is billed per token, developers building apps for Indian users end up paying three to four times more for the exact same amount of information. Not only is it more expensive, but it also takes the model longer to generate the output, causing visibly slower query latency times.
      </p>

      <div style={{ padding: '1rem' }}>
        <TokenEfficiencyChart />
      </div>

      <p>
        Sarvam is building custom tokenizers focused strictly on Indic scripts. By doing this, they compress the input and output requirements dramatically. This means Indian developers can run complex prompts in regional languages with latency and cost metrics that rival English interactions. This breaks down the economic barrier that has kept high end AI out of rural deployments.
      </p>

      <h2>A Full Stack Sovereign Ecosystem</h2>

      <p>
        What strikes me about Sarvam is the velocity of their execution. They are not just sitting on promising research papers. They have deployed a constellation of interconnected products that address enterprise and consumer needs. This is what a true full stack sovereign architecture looks like.
      </p>

      <EcosystemDiagram />

      <h3>The Foundational Models</h3>
      <p>
        In early 2026, they launched <strong>Sarvam 30B</strong>, which is a nimble mixture of experts model, and the heavy hitting <strong>Sarvam 105B</strong> with a 128k context window. These models feature architectures built to go head to head with global players on complex reasoning tasks. The 105B model reportedly activates approximately 9 billion parameters per token. This makes it highly efficient while maintaining incredible reasoning depth.
      </p>

      <h3>The Interface Layer: Indus and Translate</h3>
      <p>
        <strong>Indus</strong> is their consumer facing chat app. It aims to do for local AI what ChatGPT did globally. The difference is that it understands you natively when you speak Bengali or Malayalam. Backing this up is <strong>Sarvam Translate</strong>, an open weights model handling over 100,000 API requests weekly for enterprise translation across complex formats like Markdown and code.
      </p>

      <h3>Voice First Reality</h3>
      <p>
        India's digital adoption is heavily voice driven. A rural user is not typing complex search queries. They are speaking them. The <strong>Saaras V3</strong> speech model is designed specifically for this reality. It turns low quality audio into actionable compute, bridging the gap between illiterate and literate digital citizens.
      </p>

      <h2>The National Sovereignty Angle</h2>

      <p>
        The dimension of this story that deserves the most attention is sovereignty. Relying on foreign foundational models running on foreign servers governed by foreign law is a structural risk for nation states.
      </p>

      <p>
        The government recognizes this. Under the IndiaAI Mission, Sarvam was selected from 67 applicants to build India's sovereign LLM. They secured access to 4,000 high end GPUs to achieve this. This is a massive state level vote of confidence.
      </p>

      <h3>The Aadhaar Integration</h3>

      <p>
        The most striking evidence of this government trust happened in March 2025. The Unique Identification Authority of India (UIDAI) announced a partnership with Sarvam to bring multilingual voice AI to Aadhaar services. Aadhaar is the world's largest biometric identity system with over a billion registered users.
      </p>

      <p>
        When a startup integrates artificial intelligence directly into a nation's foundational biometric identity system, it is no longer just a startup. It has become critical digital infrastructure. It means an elderly citizen speaking only Odia can successfully navigate government bureaucracy using just their voice. It is a profound shift in accessibility.
      </p>

      <h2>Why The Rest of the World Should Pay Attention</h2>

      <p>
        It is very easy to dismiss Sarvam as a localized narrative, but that is missing the entire forest.
      </p>

      <p>
        The playbook they are writing is directly exportable to other emerging markets. Efficient tokenization for complex scripts, low resource language training architectures, and voice native interaction loops are critical building blocks. Hundreds of millions of people across Africa, Southeast Asia, and Latin America face the exact same technology divide.
      </p>

      <p>
        OpenAI can add better Hindi support, but native depth is an incredibly defensible moat. Being able to naturally understand the code mixed logic of a local user blending English and regional dialects is an immense challenge. Sarvam is not just building an AI company. They are defining what contextual AI sovereignty looks like for the global south.
      </p>

    </ArticleLayout>
  );
};

export default SarvamAIArticle;
