import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLayout from '../../layouts/CaseStudyLayout';

const AIPrototypingFramework: React.FC = () => {
  const caseStudyData = {
    category: "Product Innovation",
    title: "AI-Powered Prototyping Framework Accelerates Development by 50%",
    subtitle: "How I led the initiative to transform product development cycles from 12 weeks to 6 weeks at Resulta using AI automation and strategic process redesign",
    date: "December 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "AI-powered development and automation concept"
    },
    tldr: {
      keyResults: [
        "<strong>50% reduction</strong> in development cycles (12 weeks → 6 weeks)",
        "<strong>3x faster</strong> prototype validation and iteration",
        "<strong>85% improvement</strong> in design-to-development handoff efficiency",
        "<strong>$2M+ projected savings</strong> in annual development costs"
      ],
      metrics: [
        {
          label: "Prototype Development Time",
          before: "12 weeks average cycle",
          after: "6 weeks average cycle"
        },
        {
          label: "Iteration Speed",
          before: "1-2 iterations per month",
          after: "6-8 iterations per month"
        },
        {
          label: "Design Handoff Time",
          before: "5-7 days for specification",
          after: "Same day automated specs"
        },
        {
          label: "Development Cost per Project",
          before: "$150K average budget",
          after: "$75K average budget"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As the <strong>Digital Product Strategist</strong> at Resulta, I owned this initiative end-to-end:
          </p>
          <ul>
            <li><strong>Initiative Lead:</strong> Identified the opportunity, built the business case, and secured leadership buy-in</li>
            <li><strong>Tool Evaluation:</strong> Researched and evaluated 10+ AI tools, ultimately selecting Cursor AI and Figma AI</li>
            <li><strong>Framework Design:</strong> Architected the integration pipeline and workflow processes</li>
            <li><strong>Team Enablement:</strong> Created training materials and led adoption across 3 product teams</li>
            <li><strong>Metrics & Iteration:</strong> Established KPIs, monitored adoption, and iterated based on feedback</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Discovery & Research",
          description: "Analyzed existing workflows, identified bottlenecks, and researched AI tool landscape",
          duration: "3 weeks"
        },
        {
          phase: "Phase 2",
          title: "Tool Selection & POC",
          description: "Evaluated Cursor AI, GitHub Copilot, and Figma AI. Built proof-of-concept with one team",
          duration: "4 weeks"
        },
        {
          phase: "Phase 3",
          title: "Framework Development",
          description: "Created integration pipeline, documentation standards, and quality assurance processes",
          duration: "5 weeks"
        },
        {
          phase: "Phase 4",
          title: "Team Rollout",
          description: "Trained 15 team members across design and engineering. Established feedback loops",
          duration: "3 weeks"
        },
        {
          phase: "Phase 5",
          title: "Optimization & Scale",
          description: "Refined processes based on real project data. Expanded to all product teams",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About Resulta",
      content: (
        <div>
          <p>
            <strong>Resulta</strong> is a digital agency specializing in product strategy and development for high-growth startups and enterprise clients. Our portfolio spans fintech, healthcare, and e-commerce verticals.
          </p>
          <p>
            The competitive landscape was shifting rapidly. Clients expected faster delivery without compromising quality. Our traditional 12-week cycles were becoming a liability in an era where competitors promised 4-6 week turnarounds.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team collaboration and workflow challenges",
      caption: "Traditional workflows created bottlenecks across design and development teams"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified several critical bottlenecks during my initial workflow analysis:
          </p>
          
          <h3>Lengthy Development Cycles</h3>
          <p>
            12-week average cycles (16 weeks for enterprise). Breakdown: 3 weeks requirements, 4 weeks design, 3 weeks dev, 2 weeks testing.
          </p>
          
          <h3>Painful Design-to-Dev Handoffs</h3>
          <p>
            Developers spent 5-7 days interpreting Figma specs and setting up boilerplate. This manual process caused inconsistencies and revision loops.
          </p>
          
          <h3>Limited Iteration Capacity</h3>
          <p>
            Only 1-2 major iterations per month. Clients were frustrated when market feedback required quick pivots.
          </p>
          
          <h3>Resource Inefficiency</h3>
          <p>
            Senior developers spent 40% of time on repetitive setup. Designers created variations manually instead of innovating.
          </p>
        </div>
      ),
      quote: {
        text: "We were losing deals because our 12-week timelines couldn't compete with agencies promising 4-6 week deliveries. We needed a systematic solution without compromising quality.",
        author: "VP of Product Strategy, Resulta"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "AI tools and automation dashboard",
      caption: "Integrating AI tools into our development pipeline"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I designed a comprehensive AI-powered prototyping framework integrating cutting-edge tools with strategic process optimization.
          </p>
          
          <h3>Cursor AI for Code Generation</h3>
          <p>
            Implemented Cursor AI to auto-generate production-ready React components from design specs. Developers review and refine instead of building from scratch.
          </p>
          
          <h3>Figma AI for Design Automation</h3>
          <p>
            Integrated Figma AI to auto-generate responsive breakpoints, state variations, and accessibility-compliant versions from base components.
          </p>
          
          <h3>Automated Documentation</h3>
          <p>
            Technical specs, API docs, and component libraries generate automatically as code is written. This eliminated the 5-7 day documentation bottleneck.
          </p>
          
          <h3>Built-in Quality Assurance</h3>
          <p>
            Automated testing setup, accessibility checks, and performance optimization baked into the pipeline.
          </p>
        </div>
      ),
      features: [
        "Cursor AI integration for design-to-code automation",
        "Figma AI for design system automation",
        "Real-time design-code synchronization",
        "Auto-generated technical documentation",
        "Accessibility compliance checking",
        "Automated testing scaffolding",
        "Reusable component library generation",
        "CI/CD pipeline integration"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      alt: "Analytics dashboard showing growth metrics",
      caption: "Measurable impact across key performance indicators"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The framework delivered transformational results within the first quarter of full adoption:
          </p>
          
          <h3>50% Faster Delivery</h3>
          <p>
            Development cycles dropped from 12 weeks to 6 weeks. Enterprise projects went from 16 weeks to 8 weeks, fundamentally changing our competitive positioning.
          </p>
          
          <h3>6x Iteration Velocity</h3>
          <p>
            Iteration capacity increased from 1-2 to 6-8 cycles per month. Faster feedback loops led to better product-market fit for clients.
          </p>
          
          <h3>50% Cost Reduction</h3>
          <p>
            Average project costs dropped from $150K to $75K due to automation and faster delivery. This enabled competitive pricing and higher margins.
          </p>
          
          <h3>Client Retention Jump</h3>
          <p>
            Client satisfaction scores increased 40%. Retention rate improved from 75% to 92%. Secured 3 major contracts worth $2M+ attributed directly to our new capabilities.
          </p>
          
          <h3>Team Satisfaction</h3>
          <p>
            Engineers and designers reported higher job satisfaction. They now focus on creative problem-solving instead of boilerplate work. Senior dev productivity increased by 60%.
          </p>

          <h3>Want to Learn More?</h3>
          <p>
            I've written in depth about how I work with AI as a PM in{' '}
            <Link to="/writings/pm-os-2025" style={{ color: '#6366f1', fontWeight: 600 }}>My PM Operating System for 2025</Link>. 
            If you're thinking about enterprise AI adoption, check out{' '}
            <Link to="/writings/beyond-chatgpt-enterprise-ai" style={{ color: '#6366f1', fontWeight: 600 }}>what enterprise AI actually looks like</Link>.
          </p>
        </div>
      ),
      quote: {
        text: "This framework didn't just improve our processes; it transformed our entire value proposition. We're now competing on innovation speed, not just execution quality.",
        author: "CEO, Resulta"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Start with one team, prove value, then scale. The POC phase was critical: it gave us real data to secure buy-in from skeptics."
        },
        {
          text: "Change management matters more than technology. 40% of my time went into training, documentation, and addressing team concerns about AI replacing their jobs."
        },
        {
          text: "AI output needs human review. We built quality gates: Cursor AI handles 70% of boilerplate, but senior devs review everything before merge."
        },
        {
          text: "Measure what matters. Tracking iteration velocity (not just dev time) revealed the true business impact: faster client feedback loops."
        }
      ]
    },
    tags: [
      "AI Automation",
      "Product Development",
      "Process Optimization",
      "Cursor AI",
      "Figma AI",
      "Development Acceleration",
      "Change Management",
      "Team Enablement"
    ],
    projectId: "ai-prototyping-framework"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default AIPrototypingFramework;
