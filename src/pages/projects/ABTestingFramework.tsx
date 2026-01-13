import React from 'react';
import { Link } from 'react-router-dom';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const ABTestingFramework: React.FC = () => {
  const caseStudyData = {
    category: "Growth Optimization",
    title: "A/B Testing Framework Boosts Conversion by 10%",
    subtitle: "How I implemented a comprehensive experimentation framework using Optimizely, Google Optimize, and VWO to drive systematic conversion improvements across Resulta's brand portfolio",
    date: "August 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      alt: "A/B testing experimentation and growth optimization"
    },
    tldr: {
      keyResults: [
        "<strong>10% improvement</strong> in user activation rates (28% to 38%)",
        "<strong>10% boost</strong> in free-to-paid conversion (12% to 22%)",
        "<strong>3x increase</strong> in testing velocity (2-3 to 8-10 tests/month)",
        "<strong>$500K+</strong> additional annual revenue from optimizations"
      ],
      metrics: [
        {
          label: "User Activation Rate",
          before: "28% activation rate",
          after: "38% activation rate"
        },
        {
          label: "Free-to-Paid Conversion",
          before: "12% conversion rate",
          after: "22% conversion rate"
        },
        {
          label: "Testing Velocity",
          before: "2-3 tests per month",
          after: "8-10 tests per month"
        },
        {
          label: "Decision Confidence",
          before: "65% confidence level",
          after: "85%+ statistical confidence"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As <strong>Digital Product Strategist</strong> at Resulta, I owned the experimentation program:
          </p>
          <ul>
            <li><strong>Platform Selection:</strong> Evaluated and selected the testing stack (Optimizely, Google Optimize, VWO)</li>
            <li><strong>Methodology Design:</strong> Created hypothesis frameworks, statistical protocols, and test documentation standards</li>
            <li><strong>Team Training:</strong> Trained 12 team members across product, marketing, and engineering on experimentation best practices</li>
            <li><strong>Test Prioritization:</strong> Built ICE scoring system and managed the testing roadmap</li>
            <li><strong>Results Ownership:</strong> Reported conversion metrics to leadership, owned activation and conversion targets</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Audit & Platform Selection",
          description: "Audited existing testing practices, evaluated 6 platforms, selected multi-tool stack based on use cases",
          duration: "3 weeks"
        },
        {
          phase: "Phase 2",
          title: "Methodology & Infrastructure",
          description: "Developed testing protocols, statistical standards, and integrated tools with analytics stack",
          duration: "4 weeks"
        },
        {
          phase: "Phase 3",
          title: "Team Enablement",
          description: "Trained teams, created documentation, established hypothesis templates and review processes",
          duration: "3 weeks"
        },
        {
          phase: "Phase 4",
          title: "Pilot Testing Program",
          description: "Ran initial tests on 2 brands, validated methodology, refined processes based on learnings",
          duration: "6 weeks"
        },
        {
          phase: "Phase 5",
          title: "Scale & Optimization",
          description: "Expanded to all 5 brands, built learning repository, continuous process improvement",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About the Initiative",
      content: (
        <div>
          <p>
            <strong>Resulta's 5-brand portfolio</strong> was experiencing inconsistent conversion performance. Traffic was growing, but conversion rates varied wildly between brands. Decision-making was based on assumptions rather than validated insights.
          </p>
          <p>
            Each brand had different user journeys and goals, so a one-size-fits-all approach wouldn't work. I needed to create standardized testing methodologies that could adapt to different contexts while enabling cross-brand learning.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Analytics dashboard showing inconsistent metrics",
      caption: "Conversion rates varied significantly across brands with no systematic optimization"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified several critical issues limiting our optimization potential:
          </p>
          
          <h3>Assumption-Based Decisions</h3>
          <p>
            Most changes were based on best practices or opinions rather than data. We were essentially guessing, leading to inconsistent results.
          </p>
          
          <h3>Inconsistent Testing</h3>
          <p>
            Different brands used different tools (or none at all). No way to compare results or share learnings. Some tests ran without statistical rigor.
          </p>
          
          <h3>Low Testing Velocity</h3>
          <p>
            Manual setup and analysis limited us to 2-3 tests per month across all brands. Too slow to iterate or respond to market changes.
          </p>
          
          <h3>Weak Statistical Confidence</h3>
          <p>
            Tests often concluded without reaching significance. 65% confidence levels made it hard to trust recommendations.
          </p>
          
          <h3>No Knowledge Sharing</h3>
          <p>
            Successful tests in one brand weren't applied to others. We kept solving the same problems repeatedly.
          </p>
        </div>
      ),
      quote: {
        text: "We were essentially guessing our way to optimization. Every change was a gamble rather than a calculated decision based on validated user behavior.",
        author: "Head of Growth, Resulta"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      alt: "Data analysis and experimentation setup",
      caption: "Building a multi-platform testing architecture"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I designed a comprehensive A/B testing framework with standardized processes and multi-platform capabilities.
          </p>
          
          <h3>Multi-Platform Architecture</h3>
          <p>
            Selected <strong>Optimizely</strong> for complex multivariate tests, <strong>Google Optimize</strong> for rapid website changes, and <strong>VWO</strong> for personalization. Right tool for each use case.
          </p>
          
          <h3>Standardized Methodology</h3>
          <p>
            Developed protocols for hypothesis formation, sample size calculations, test duration, and result interpretation. Consistent, reliable results across all brands.
          </p>
          
          <h3>Automated Test Management</h3>
          <p>
            Built workflows that auto-calculate sample sizes, monitor progress, and alert when tests reach significance. Reduced manual effort while maintaining rigor.
          </p>
          
          <h3>Advanced Segmentation</h3>
          <p>
            Enabled targeted testing by user segment, traffic source, and behavior. Discovered segment-specific opportunities that broad tests would miss.
          </p>
          
          <h3>Cross-Brand Learning Repository</h3>
          <p>
            Created a centralized knowledge base capturing insights and successful variations. Rapid application of proven strategies across brands.
          </p>
        </div>
      ),
      features: [
        "Multi-platform stack (Optimizely, Google Optimize, VWO)",
        "Standardized hypothesis and testing protocols",
        "Automated sample size and significance calculations",
        "Advanced user segmentation capabilities",
        "Cross-brand learning repository",
        "Real-time test monitoring and alerts",
        "ICE scoring for test prioritization",
        "Executive reporting dashboard"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Growth metrics and conversion charts",
      caption: "Conversion improvements across the brand portfolio"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The framework delivered measurable results within the first 12 months:
          </p>
          
          <h3>38% User Activation</h3>
          <p>
            Activation rates improved from 28% to 38% through systematic testing of onboarding flows and feature introductions.
          </p>
          
          <h3>22% Free-to-Paid Conversion</h3>
          <p>
            Conversion jumped from 12% to 22% via targeted testing of pricing pages, trial experiences, and checkout funnels.
          </p>
          
          <h3>3x Testing Velocity</h3>
          <p>
            Went from 2-3 tests per month to 8-10 tests. Faster iteration enabled rapid response to market changes and user feedback.
          </p>
          
          <h3>85%+ Statistical Confidence</h3>
          <p>
            All decisions now backed by proper statistical rigor. No more implementing changes based on inconclusive results.
          </p>
          
          <h3>$500K+ Additional Revenue</h3>
          <p>
            Combined conversion improvements generated over $500K in additional annual revenue, directly attributable to specific optimizations.
          </p>
          
          <h3>60% Faster Cross-Brand Optimization</h3>
          <p>
            Successful tests rapidly applied across other brands. Learning repository prevented duplicate effort and accelerated wins.
          </p>

          <h3>Continue Exploring</h3>
          <p>
            For the full story of how my thinking evolved from individual tactics to systematic growth, read{' '}
            <Link to="/writings/growth-hacking-maturation" style={{ color: '#6366f1', fontWeight: 600 }}>From Growth Hacks to Growth Science</Link>. 
            And if you're looking to analyze customer feedback systematically, try my{' '}
            <Link to="/tools/ai-feedback-analyzer" style={{ color: '#6366f1', fontWeight: 600 }}>AI Feedback Analyzer</Link> tool.
          </p>
        </div>
      ),
      quote: {
        text: "This framework transformed our culture around optimization. We now approach every product decision with a testing mindset and data-driven validation.",
        author: "Chief Product Officer, Resulta"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Velocity beats perfection. Running more tests (even smaller ones) generated more learnings than waiting for perfect big experiments."
        },
        {
          text: "Statistical discipline is non-negotiable. Early on, we shipped changes based on 70% confidence. Several backfired. Now we wait for 85%+."
        },
        {
          text: "Segment-level insights are gold. Aggregate results often hide segment-specific wins. A test that 'failed' overall can succeed for specific user types."
        },
        {
          text: "Document everything. Our learning repository became our competitive advantage. New team members onboard in days, not months."
        }
      ]
    },
    tags: [
      "Growth Optimization",
      "A/B Testing",
      "Conversion Rate Optimization",
      "Optimizely",
      "Google Optimize",
      "VWO",
      "Statistical Analysis",
      "User Experience"
    ],
    projectId: "ab-testing-framework"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default ABTestingFramework;
