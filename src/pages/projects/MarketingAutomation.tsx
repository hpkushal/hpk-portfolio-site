import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const MarketingAutomation: React.FC = () => {
  const caseStudyData = {
    category: "Process Optimization",
    title: "Marketing Automation Infrastructure Improves Conversion by 20%",
    subtitle: "How I built end-to-end marketing automation supporting the complete customer journey across Resulta's 5-brand ecosystem",
    date: "June 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Marketing automation and workflow infrastructure"
    },
    tldr: {
      keyResults: [
        "<strong>20% conversion improvement</strong> (18% to 38% lead-to-customer)",
        "<strong>65% reduction</strong> in manual marketing tasks",
        "<strong>$750K+ additional revenue</strong> from automation-driven conversions",
        "<strong>10x scalability</strong> without additional headcount"
      ],
      metrics: [
        {
          label: "Lead-to-Customer Conversion",
          before: "18% conversion rate",
          after: "38% conversion rate"
        },
        {
          label: "Process Automation",
          before: "60% manual interventions",
          after: "95% automated processes"
        },
        {
          label: "Email Engagement",
          before: "Baseline engagement",
          after: "150% improvement"
        },
        {
          label: "Customer Lifetime Value",
          before: "Single-brand customers",
          after: "45% LTV increase"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As <strong>Digital Product Strategist</strong> at Resulta, I owned the marketing automation transformation:
          </p>
          <ul>
            <li><strong>Platform Architecture:</strong> Designed unified automation system supporting all 5 brands</li>
            <li><strong>Journey Mapping:</strong> Created customer journey maps for each brand and segment</li>
            <li><strong>Workflow Design:</strong> Built 50+ automated workflows for lead nurturing, onboarding, and retention</li>
            <li><strong>Integration Lead:</strong> Connected CRM, email, and analytics platforms into unified stack</li>
            <li><strong>Performance Ownership:</strong> Owned conversion and engagement metrics across the funnel</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Audit & Journey Mapping",
          description: "Audited existing processes, mapped customer journeys for all 5 brands, identified automation opportunities",
          duration: "4 weeks"
        },
        {
          phase: "Phase 2",
          title: "Platform Setup & Integration",
          description: "Implemented automation platform, integrated with CRM and analytics, set up data flows",
          duration: "5 weeks"
        },
        {
          phase: "Phase 3",
          title: "Workflow Development",
          description: "Built lead nurturing sequences, onboarding flows, and retention campaigns",
          duration: "6 weeks"
        },
        {
          phase: "Phase 4",
          title: "Cross-Brand Orchestration",
          description: "Implemented cross-brand triggers, upsell/cross-sell automation, unified customer profiles",
          duration: "4 weeks"
        },
        {
          phase: "Phase 5",
          title: "Optimization & Scaling",
          description: "A/B testing workflows, refining triggers, continuous performance optimization",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About the Initiative",
      content: (
        <div>
          <p>
            <strong>Resulta's 5-brand ecosystem</strong> was managing customer relationships with inconsistent, manual processes. Each brand used different tools, creating gaps in customer experience and limiting scalability.
          </p>
          <p>
            The challenge: build infrastructure that serves multiple brands while maintaining individual identity. Sophisticated enough for complex multi-brand journeys, simple enough for teams to manage effectively.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team dealing with manual marketing processes",
      caption: "60% of marketing activities required manual intervention"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified critical issues limiting our marketing effectiveness:
          </p>
          
          <h3>Fragmented Customer Journeys</h3>
          <p>
            Touchpoints managed manually across different systems. Leads fell through cracks between acquisition and conversion. Significant revenue loss.
          </p>
          
          <h3>Manual Process Bottlenecks</h3>
          <p>
            60% of activities required manual intervention. Teams spent time on admin instead of strategy. Couldn't scale customer acquisition.
          </p>
          
          <h3>Inconsistent Brand Experience</h3>
          <p>
            Different tools across brands. Disconnected customer experiences. No cross-brand opportunities captured.
          </p>
          
          <h3>Limited Personalization</h3>
          <p>
            Basic segmentation only. No behavior-based personalization. Lower engagement and conversion rates.
          </p>
          
          <h3>Poor Lead Nurturing</h3>
          <p>
            Inconsistent follow-up timing. High-value prospects neglected. Untimely or inappropriate communications.
          </p>
        </div>
      ),
      quote: {
        text: "We were losing customers at every stage due to manual handoffs and inconsistent experiences. Marketing efforts were working against each other.",
        author: "VP of Marketing Operations, Resulta"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      alt: "Marketing automation workflow diagram",
      caption: "Building end-to-end customer journey automation"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I designed comprehensive marketing automation infrastructure creating seamless customer journeys from awareness to advocacy.
          </p>
          
          <h3>Unified Automation Platform</h3>
          <p>
            Centralized system supporting all brands while maintaining individual identity. Orchestrates multi-touch campaigns with trigger-based logic and personalization.
          </p>
          
          <h3>Customer Journey Mapping</h3>
          <p>
            Comprehensive maps for each brand and segment. Foundation for automated workflows guiding customers through optimized conversion paths.
          </p>
          
          <h3>Behavioral Trigger System</h3>
          <p>
            Real-time response to customer actions. Personalized content based on behavior, preferences, and engagement patterns. Timely, relevant communications.
          </p>
          
          <h3>Cross-Brand Integration</h3>
          <p>
            Seamless movement between products and services. Unified customer profiles. Automatic identification of upsell and cross-sell opportunities.
          </p>
          
          <h3>Dynamic Segmentation</h3>
          <p>
            Automatic categorization based on behavior, demographics, engagement, and purchase history. Drives personalized content delivery.
          </p>
        </div>
      ),
      features: [
        "Unified platform supporting all 5 brands",
        "50+ automated nurturing workflows",
        "Real-time behavioral triggers",
        "Cross-brand customer orchestration",
        "Dynamic segmentation engine",
        "Automated lead scoring",
        "Journey analytics and optimization",
        "10x scalable infrastructure"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Conversion and engagement improvement charts",
      caption: "Lead-to-customer conversion improved from 18% to 38%"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The automation infrastructure delivered transformational results:
          </p>
          
          <h3>38% Lead-to-Customer Conversion</h3>
          <p>
            Up from 18% (20% absolute improvement). Optimized journeys, timely follow-ups, and personalized nurturing guide prospects through conversion.
          </p>
          
          <h3>95% Process Automation</h3>
          <p>
            Manual interventions reduced from 60% to 5%. Team focuses on strategy instead of admin. Enabled scaling without headcount increases.
          </p>
          
          <h3>150% Email Engagement Improvement</h3>
          <p>
            Automated personalization dramatically improved engagement rates. 85% improvement in content click-through. Higher customer satisfaction.
          </p>
          
          <h3>45% Higher Customer Lifetime Value</h3>
          <p>
            Cross-brand journeys drove 35% increase in multi-brand engagement. Automation identified and capitalized on cross-sell opportunities.
          </p>
          
          <h3>$750K+ Additional Revenue</h3>
          <p>
            From improved conversion rates, reduced acquisition costs, and increased customer lifetime value across the portfolio.
          </p>
          
          <h3>10x Scalability</h3>
          <p>
            Infrastructure supports 10x current volume without significant additional resources. Automatically scales with business growth.
          </p>
        </div>
      ),
      quote: {
        text: "This infrastructure transformed our relationship with customers. We deliver personalized experiences that feel human while operating at a scale impossible manually.",
        author: "Chief Marketing Officer, Resulta"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Start with journeys, not tools. We mapped every customer journey before selecting automation features. Technology decisions followed strategy, not the reverse."
        },
        {
          text: "Automation without personalization is spam. Early workflows were efficient but generic. Adding behavioral triggers transformed engagement metrics."
        },
        {
          text: "Cross-brand automation needs guardrails. Without limits, customers got overwhelmed with cross-sell messages. We implemented frequency caps and relevance scoring."
        },
        {
          text: "Teams need training, not just tools. Spent 30% of project time on enablement. Teams who understand the 'why' build better campaigns."
        }
      ]
    },
    tags: [
      "Process Optimization",
      "Marketing Automation",
      "Customer Journey",
      "CRM Integration",
      "Personalization",
      "Workflow Automation",
      "Lead Nurturing",
      "Revenue Optimization"
    ],
    projectId: "marketing-automation"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default MarketingAutomation;
