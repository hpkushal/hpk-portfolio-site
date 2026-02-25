import React from 'react';
import { Link } from 'react-router-dom';
import ArticleLayout from '../../layouts/ArticleLayout';

// --- Inline SVG Illustrations ---

/** 1) Execution Engine Architecture Diagram */
const ArchitectureDiagram: React.FC = () => (
    <svg viewBox="0 0 900 360" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
        <defs>
            <linearGradient id="orchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.4)" />
            </marker>
        </defs>
        <rect x="0" y="0" width="900" height="360" rx="14" fill="#0f0f0f" />
        <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
            Perplexity Computer: Autonomous Orchestration
        </text>

        {/* User Request */}
        <rect x="60" y="150" width="160" height="60" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
        <text x="140" y="175" fill="white" fontSize="13" fontWeight="600" textAnchor="middle">User Request</text>
        <text x="140" y="195" fill="rgba(255,255,255,0.5)" fontSize="11" textAnchor="middle">"Build a roadmap brief"</text>

        <line x1="220" y1="180" x2="300" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow)" />

        {/* Orchestrator */}
        <rect x="310" y="120" width="200" height="120" rx="12" fill="url(#orchGrad)" filter="drop-shadow(0 0 8px rgba(99,102,241,0.4))" />
        <text x="410" y="155" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">Perplexity Orchestrator</text>
        <text x="410" y="175" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">Task Decomposition</text>
        <text x="410" y="195" fill="rgba(255,255,255,0.8)" fontSize="11" textAnchor="middle">&amp; Resource Allocation</text>

        {/* Agents lines */}
        <line x1="510" y1="180" x2="620" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="510" y1="180" x2="620" y2="180" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="510" y1="180" x2="620" y2="260" stroke="rgba(255,255,255,0.4)" strokeWidth="2" markerEnd="url(#arrow)" />

        {/* Sub Agents */}
        {[
            { x: 630, y: 70, label: 'Sub-Agent: Search', env: 'Browsing live web pages', icon: '🌐' },
            { x: 630, y: 150, label: 'Sub-Agent: Context', env: 'Reading Memory & Docs', icon: '🧠' },
            { x: 630, y: 230, label: 'Sub-Agent: Execution', env: 'API / File System Writes', icon: '⚙️' },
        ].map((agent, i) => (
            <g key={i}>
                <rect x={agent.x} y={agent.y} width="220" height="60" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5" />
                <text x={agent.x + 20} y={agent.y + 25} fill="white" fontSize="13" fontWeight="600">{agent.icon} {agent.label}</text>
                <text x={agent.x + 20} y={agent.y + 45} fill="rgba(255,255,255,0.6)" fontSize="11">{agent.env}</text>
            </g>
        ))}
    </svg>
);

/** 2) Perplexity Evolution Timeline */
const EvolutionTimeline: React.FC = () => (
    <svg viewBox="0 0 900 240" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
        <rect x="0" y="0" width="900" height="240" rx="14" fill="#0f0f0f" />
        <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
            The Road to Computer Execution
        </text>
        <line x1="100" y1="120" x2="800" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />

        {[
            { x: 140, year: '', title: 'Answer Engine', desc: 'Fast, cited, real-time' },
            { x: 270, year: '', title: 'Deep Research', desc: 'Multi-step synthesis' },
            { x: 400, year: '', title: 'Perplexity Labs', desc: 'Agentic workflows' },
            { x: 530, year: '', title: 'Comet & Memory', desc: 'AI-browser context' },
            { x: 720, year: '', title: 'Perplexity Computer', desc: 'Autonomous execution', active: true },
        ].map((node, i) => (
            <g key={i}>
                <circle cx={node.x} cy="120" r="8" fill={node.active ? "#6366f1" : "rgba(255,255,255,0.5)"} />
                {node.active && <circle cx={node.x} cy="120" r="14" fill="transparent" stroke="#6366f1" strokeWidth="2" />}
                <rect x={node.x - 60} y="140" width="120" height="50" rx="6" fill={node.active ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.05)"} stroke={node.active ? "#6366f1" : "transparent"} />
                <text x={node.x} y="160" fill="white" fontSize="11" fontWeight="600" textAnchor="middle">{node.title}</text>
                <text x={node.x} y="175" fill="rgba(255,255,255,0.5)" fontSize="9" textAnchor="middle">{node.desc}</text>
            </g>
        ))}
    </svg>
);

/** 3) PM Workflow Map */
const WorkflowMapDiagram: React.FC = () => (
    <svg viewBox="0 0 900 400" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
        <defs>
            <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="900" height="400" rx="14" fill="#0f0f0f" />
        <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
            6 PM Workflows Delegated to Perplexity Computer
        </text>

        {/* Center Node */}
        <circle cx="450" cy="220" r="50" fill="url(#centerGrad)" />
        <text x="450" y="215" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">PM</text>
        <text x="450" y="235" fill="rgba(255,255,255,0.9)" fontSize="11" textAnchor="middle">Review &amp; Approve</text>

        {/* Surrounding Nodes */}
        {[
            { x: 450, y: 100, label: 'Launch Prep', icon: '🚀', desc: 'Coordinated docs & emails' },
            { x: 650, y: 150, label: 'Roadmap Research', icon: '🗺️', desc: 'Market size & signals' },
            { x: 650, y: 290, label: 'Stakeholder Updates', icon: '📊', desc: 'Decks & sprint reviews' },
            { x: 450, y: 340, label: 'Discovery Synthesis', icon: '🔬', desc: 'Themes from user interviews' },
            { x: 250, y: 290, label: 'Spec Writing Prep', icon: '📝', desc: 'Landscape & docs' },
            { x: 250, y: 150, label: 'Competitive Intel', icon: '🕵️', desc: 'Weekly briefing docs' },
        ].map((n, i) => (
            <g key={i}>
                <line x1="450" y1="220" x2={n.x} y2={n.y} stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                <rect x={n.x - 75} y={n.y - 35} width="150" height="70" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
                <text x={n.x} y={n.y - 10} fill="white" fontSize="12" fontWeight="600" textAnchor="middle">{n.icon} {n.label}</text>
                <text x={n.x} y={n.y + 12} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">{n.desc}</text>
            </g>
        ))}
    </svg>
);

/** 4) Value Shift Diagram */
const ValueShiftDiagram: React.FC = () => (
    <svg viewBox="0 0 900 320" style={{ width: '100%', height: 'auto', margin: '2rem 0' }}>
        <defs>
            <linearGradient id="infoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
            <linearGradient id="judgmentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="900" height="320" rx="14" fill="#0f0f0f" />
        <text x="450" y="38" fill="white" fontSize="17" fontWeight="650" textAnchor="middle">
            The Value Shift in Product Management
        </text>

        {/* Labels */}
        <text x="120" y="115" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">Before (Status Quo)</text>
        <text x="120" y="215" fill="rgba(255,255,255,0.7)" fontSize="13" fontWeight="600">After (With AI Agent)</text>

        {/* Before Bar */}
        <rect x="280" y="95" width="400" height="30" rx="4" fill="url(#infoGrad)" />
        <rect x="690" y="95" width="100" height="30" rx="4" fill="url(#judgmentGrad)" />
        <text x="480" y="115" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Information Work (80%)</text>
        <text x="740" y="115" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Judgment (20%)</text>

        {/* After Bar */}
        <rect x="280" y="195" width="100" height="30" rx="4" fill="url(#infoGrad)" />
        <rect x="390" y="195" width="400" height="30" rx="4" fill="url(#judgmentGrad)" />
        <text x="330" y="215" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Info (20%)</text>
        <text x="590" y="215" fill="white" fontSize="12" fontWeight="600" textAnchor="middle">Judgment &amp; Deciding (80%)</text>

        {/* Callout box */}
        <rect x="280" y="250" width="510" height="32" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" />
        <text x="295" y="270" fill="#34d399" fontSize="12">
            "The PMs who thrive aren't the ones most productive at info work. They're the ones clearest on what only a human can decide."
        </text>
    </svg>
);


const PerplexityArticle: React.FC = () => {
    return (
        <ArticleLayout
            category="Product & Technology"
            title="Perplexity Computer Is the PM's New Co-Pilot and Most Product Teams Don't See It Coming"
            subtitle="A product consultant's take on how Perplexity's new AI worker changes not just how PMs work, but what the role becomes."
            author="Kushal Parameshwara"
            date="February 2026"
            readTime="12 min read"
            heroImage={{
                src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
                alt: "Perplexity Computer and Modern PM Workflows"
            }}
            keyTakeaways={[
                "Perplexity Computer isn't just a chatbot; it's an orchestration system capable of pulling together search, reasoning, API calls, and file system access.",
                "The PM role is splitting into two distinct tracks: those who understand what they can delegate to machines, and those who don't.",
                "Routine information work like competitive intelligence, discovery synthesis, and roadmap research can now be consistently automated as parallel workflows.",
                "The real leverage for PMs is shifting entirely toward human judgment calls, decisions, and alignment—while delegating formatting and synthesis."
            ]}
            tags={['Perplexity', 'Product Management', 'AI Agents', 'Future of Work', 'Automation', 'Technology']}
            articleId="perplexity-computer-pm-copilot"
        >
            <p>
                I've spent the better part of a decade advising product teams, and if there's one pattern I've seen repeat itself, it's this: the best PMs aren't the ones who work the most hours. They're the ones who <Link to="/writings/pm-os-2025" style={{ color: '#667eea', fontWeight: 600 }}>ruthlessly protect their thinking time and off-load everything else</Link>.
            </p>

            <p>
                That's why, when I first came across Perplexity Computer, I didn't just see a new tool. I saw the clearest signal yet that the PM role is about to split into two distinct tracks: those who understand what they can delegate to machines, and those who don't.
            </p>

            <p>
                Let me explain why I think that, and what it actually looks like in practice.
            </p>

            <h2>What Perplexity Computer Actually Is</h2>

            <p>
                Before the use cases, it's worth pausing on what this thing actually does, because the framing matters.
            </p>

            <p>
                Perplexity Computer isn't a chatbot with extra steps. It's an orchestration system that pulls together every AI capability you'd want: search, reasoning, coding, document generation, API calls, file system access, and wraps it into a single execution environment. You describe an outcome. It decomposes that into tasks and subtasks, spins up sub-agents for each, and coordinates the work asynchronously.
            </p>

            <ArchitectureDiagram />

            <p>
                What makes this genuinely different from anything I've seen before is that it runs in isolated compute environments with real filesystems, real browsers, and real tool integrations. This isn't a simulation. When it writes code, the code runs. When it opens a browser, it's actually browsing. And when it hits a wall, it doesn't just stop and ask you what to do. It <Link to="/writings/manus-meta-telegram" style={{ color: '#667eea', fontWeight: 600 }}>creates new sub-agents to solve the problem itself</Link>.
            </p>

            <p>
                You can also run dozens of these in parallel. That's not a minor detail. That's the whole ballgame.
            </p>

            <blockquote>
                "Chat interfaces have answers, while agents can do tasks. Perplexity Computer is a system that creates and executes entire workflows, capable of running for hours or even months." (Perplexity)
            </blockquote>

            <h2>How Perplexity Built Up to This</h2>

            <p>
                I want to give you a bit of context here because I think it helps you see why this isn't just a marketing launch. Perplexity has been building toward this deliberately.
            </p>

            <EvolutionTimeline />

            <p>
                It started as a better answer engine: fast, cited, real-time. Then came Deep Research for multi-step synthesis. Then Perplexity Labs, with autonomous multi-tool workflows that could produce dashboards, spreadsheets, and web apps from a single prompt. Then Comet, an AI-native browser. Then Memory, which let the system carry context across sessions.
            </p>

            <p>
                Perplexity Computer is the moment all of those pieces converge. It's when "search" became "do." And for product people especially, that distinction is everything.
            </p>

            <h2>What This Looks Like for PMs in Practice</h2>

            <p>
                This is the part I actually want to talk about, because I've been thinking through this with a few teams I work with and the use cases are more concrete than most people realise.
            </p>

            <WorkflowMapDiagram />

            <h3>1. Competitive Intelligence You Actually Have Time For</h3>

            <p>
                Every PM I know has a competitor tracking setup they're slightly embarrassed about. A Notion doc that's two months out of date. A spreadsheet someone started and abandoned. A bookmark folder of "things I'll read later."
            </p>

            <p>
                The problem isn't that PMs don't care about competitive intelligence. It's that doing it well requires consistent, time-consuming effort that gets pushed aside for the urgent stuff.
            </p>

            <p>
                What I'd do with Perplexity Computer is simple: set up a recurring workflow. "Monitor these five competitors weekly. Track product releases, pricing changes, positioning shifts. Produce a briefing doc every Friday with links and flag anything that feels strategically significant." One sub-agent watches product pages, another scans announcements, another monitors pricing, a fourth writes the brief. It runs without me.
            </p>

            <p>
                That's not a nice-to-have. For any PM I advise, having a current, reliable competitive landscape changes the quality of their roadmap conversations entirely.
            </p>

            <h3>2. Discovery Synthesis That Actually Gets Done</h3>

            <p>
                Here's something I see constantly: teams that have done really good discovery work that never made it into a usable format. Dozens of user interviews sitting in Otter.ai. Support tickets nobody has ever properly analysed. NPS comments that got glanced at once. Survey data that informed exactly one slide.
            </p>

            <p>
                The synthesis is where the value lives, and it's also where time runs out.
            </p>

            <p>
                Perplexity Computer can take all of that, process it at scale, identify themes, map patterns to problem areas, and produce a structured insight document. If it's connected to Notion, Linear, and GitHub, it can cross-reference open bugs against user complaints and flag where the pain and frequency actually overlap.
            </p>

            <p>
                When I recommend this to teams, I tell them to think of it as turning their discovery backlog into an always-current product brief. That's a fundamentally different starting point for any prioritisation conversation.
            </p>

            <h3>3. Coming to Spec Writing Prepared</h3>

            <p>
                Writing a good spec is hard, and I don't think that changes. The judgment, the trade-offs, the decisions about what matters: that's still deeply human work. But I've sat in enough spec reviews to know that a lot of the time lost isn't in the hard thinking. It's in the prep.
            </p>

            <p>
                Before a PM sits down to write, Perplexity Computer can have already assembled the competitive landscape for the feature, similar patterns from adjacent products, relevant technical documentation, past user feedback on related problems, and a skeleton structure to work from. The PM arrives at the page with context, not a blank document and a vague brief.
            </p>

            <p>
                That's not replacing PM judgment. That's giving it better inputs. And in my experience, better inputs produce noticeably better outputs.
            </p>

            <h3>4. Launch Prep Without the Chaos</h3>

            <p>
                Product launches are genuinely exhausting, and not because any single piece is hard. It's the coordination: messaging, enablement docs, FAQs, battle cards, email sequences, internal announcements, blog drafts. Multiple teams, multiple reviewers, multiple deadlines, all tangled together.
            </p>

            <p>
                I've seen Perplexity Computer run several of these tracks simultaneously. One sub-agent drafts customer-facing messaging. Another writes the internal enablement doc. Another pulls together the FAQ from existing support content. Another generates the first pass at the launch email sequence. These aren't generic templates, they're grounded in the actual product context you've given it.
            </p>

            <p>
                The PM's job becomes reviewing, shaping, and approving. That's a real role. It's just a much saner one.
            </p>

            <h3>5. Roadmap Research That Raises the Bar</h3>

            <p>
                Prioritisation is where I spend a lot of time with the PMs I advise, and the single biggest lever I've found isn't a framework. It's the quality of the inputs going into the decision.
            </p>

            <p>
                Most PMs are prioritising with incomplete data, not because they don't want better data, but because assembling it is slow. Perplexity Computer can build a research brief for every candidate roadmap item: demand signals, market size estimates, competitive differentiation, technical risk indicators pulled from engineering discussions or public documentation. It doesn't make the call. But it means the call gets made on something closer to the full picture.
            </p>

            <p>
                That consistently improves the outcome of the prioritisation conversation, in my experience.
            </p>

            <h3>6. Stakeholder Updates That Don't Cost a Morning</h3>

            <p>
                PMs write a lot. Update emails. Steering committee decks. Executive briefings. Sprint reviews. Each one draws on the same base of knowledge, just reformatted for a different audience. With memory enabled, Perplexity Computer holds context across all of your ongoing work. It knows what shipped, what the metrics say, what's blocked, and what the narrative arc of the quarter is.
            </p>

            <p>
                Turning that into a stakeholder update becomes a prompt, not a project. I've started thinking of this as reclaiming Monday mornings.
            </p>

            <h2>The Uncomfortable Truth About the PM Role</h2>

            <p>
                I want to be direct about something here, because I think it's worth saying out loud.
            </p>

            <p>
                A large chunk of what PMs spend their time on is information work: gathering, synthesising, formatting, and communicating information that already exists somewhere. That work has value, but it's not where the real leverage is. The real leverage is in the judgment calls: what to build, what to cut, how to align the organisation behind a direction, how to translate user needs into something an engineering team can execute on.
            </p>

            <p>
                Perplexity Computer is very good at the first category. It's not remotely capable of the second.
            </p>

            <p>
                Which means the PMs who will thrive in this next wave aren't the ones who are most productive at information work. They're the ones who are clearest on what only a human can decide, and smart enough to delegate the rest.
            </p>

            <ValueShiftDiagram />

            <blockquote>
                The PM who thrives isn't the one who works hardest. It's the one who figures out what only a human can decide, and lets everything else run.
            </blockquote>

            <p>
                I've been saying a version of this in workshops for a couple of years. What's changed is that the infrastructure to actually act on it is now real and accessible.
            </p>

            <h2>Three Things I'm Watching Closely</h2>

            <p>
                A few honest observations for teams thinking about where to start:
            </p>

            <p>
                The first is <strong>integration depth</strong>. Perplexity Computer gets significantly more useful the more it's connected to your actual stack: Notion, Linear, GitHub, Gmail. The connectors are there. The question is whether teams will invest the time to set up thoughtful workflows now, or wait until they're behind.
            </p>

            <p>
                The second is <strong>governance</strong>. Autonomous workflows that run for hours create real questions about oversight. I'm advising teams to think carefully about where the human checkpoints should live. Not every output needs review, but some absolutely do, and you want to decide that before something goes out that shouldn't have.
            </p>

            <p>
                The third is <strong>prompt design as a skill</strong>. The ability to define a clear, outcome-based prompt that a computer can decompose into executable steps is genuinely learnable, and genuinely differentiating. This is becoming one of the more valuable PM skills, and most teams aren't treating it that way yet.
            </p>

            <h2>Where I Land on This</h2>

            <p>
                Look, I'm not someone who reaches for superlatives easily. I've watched a lot of AI product launches that were impressive in demos and underwhelming in practice. This feels different to me, and I want to be clear about why.
            </p>

            <p>
                It's not one new capability. It's the combination: deep search, reasoning, memory, tool integration, and autonomous multi-agent execution, all in one system that's accessible natively today. That combination hasn't existed in a consumer-accessible form before.
            </p>

            <p>
                For product teams, I think the honest message is this: <Link to="/writings/beyond-chatgpt-enterprise-ai" style={{ color: '#667eea', fontWeight: 600 }}>stop treating AI as a productivity supplement you sprinkle on top of existing workflows</Link>. Start treating it as a structural capability that changes what the team can take on. The teams that make that shift first won't just move faster. They'll operate at a different level entirely.
            </p>

            <p>
                I keep coming back to one question when I talk to PMs about this: if you could run a dozen intelligent digital co-workers in parallel, each capable of completing hours of research and execution autonomously, what would you actually do with your time?
            </p>

            <p>
                That question used to be hypothetical. It isn't anymore.
            </p>

            <p>
                <em>Written from my perspective as a product consultant and advisor. All references to Perplexity Computer are based on Perplexity's official product announcements.</em>
            </p>

        </ArticleLayout>
    );
};

export default PerplexityArticle;
