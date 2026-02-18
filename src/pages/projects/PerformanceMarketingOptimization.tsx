import React from 'react';
import CaseStudyLayout from '../../layouts/CaseStudyLayout';

const PerformanceMarketingOptimization: React.FC = () => {
  const caseStudyData = {
    category: "Revenue Generation",
    title: "Performance Marketing Optimization Drives $1M+ Revenue Attribution",
    subtitle: "How I implemented Matomo analytics and CRM integration to improve marketing ROI by 3.5x and reduce CAC by 45% at Resulta",
    date: "October 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Performance marketing analytics and data optimization dashboard"
    },
    tldr: {
      keyResults: [
        "<strong>$1M+ attributed revenue</strong> (up from $285K tracked)",
        "<strong>7.4x ROAS</strong> (up from 2.1x return on ad spend)",
        "<strong>45% CAC reduction</strong> ($145 to $79 per customer)",
        "<strong>90%+ tracking accuracy</strong> (up from 35%)"
      ],
      metrics: [
        {
          label: "Attributed Revenue",
          before: "$285K tracked annually",
          after: "$1M+ tracked annually"
        },
        {
          label: "Marketing ROI",
          before: "2.1x return on ad spend",
          after: "7.4x return on ad spend"
        },
        {
          label: "Customer Acquisition Cost",
          before: "$145 average CAC",
          after: "$79 average CAC"
        },
        {
          label: "Conversion Tracking",
          before: "35% tracking accuracy",
          after: "90%+ tracking accuracy"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As <strong>Digital Product Strategist</strong> at Resulta, I owned the marketing analytics transformation:
          </p>
          <ul>
            <li><strong>Analytics Architecture:</strong> Designed and implemented Matomo tracking across all 5 brands</li>
            <li><strong>Attribution Modeling:</strong> Built multi-touch attribution framework connecting marketing to revenue</li>
            <li><strong>CRM Integration:</strong> Led integration between marketing platforms and CRM for complete journey visibility</li>
            <li><strong>Dashboard Development:</strong> Created automated reporting replacing 15-20 hours/week of manual work</li>
            <li><strong>Optimization Strategy:</strong> Established budget allocation framework and campaign optimization processes</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Audit & Requirements",
          description: "Audited existing tracking, identified gaps, mapped customer journeys across all brands",
          duration: "3 weeks"
        },
        {
          phase: "Phase 2",
          title: "Matomo Implementation",
          description: "Deployed Matomo analytics, configured custom events, set up cross-domain tracking",
          duration: "4 weeks"
        },
        {
          phase: "Phase 3",
          title: "CRM Integration",
          description: "Connected marketing data to CRM, built attribution models, enabled LTV calculations",
          duration: "5 weeks"
        },
        {
          phase: "Phase 4",
          title: "Dashboard & Automation",
          description: "Built real-time performance dashboards, automated reporting, created alerting systems",
          duration: "4 weeks"
        },
        {
          phase: "Phase 5",
          title: "Optimization & Scaling",
          description: "Implemented budget optimization, A/B testing protocols, continuous performance improvement",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About the Initiative",
      content: (
        <div>
          <p>
            <strong>Resulta</strong> was running campaigns across multiple channels but struggling with accurate measurement. Only 35% of conversions were attributed to marketing, leaving most revenue impact invisible.
          </p>
          <p>
            With 5 brands, different customer journeys, and varying attribution windows, traditional measurement approaches weren't working. We needed sophisticated attribution and optimization for our multi-touch, multi-brand ecosystem.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      alt: "Marketing analytics dashboard with unclear data",
      caption: "Only 35% of conversions were properly attributed to marketing channels"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified critical gaps in our marketing measurement:
          </p>
          
          <h3>Poor Attribution Visibility</h3>
          <p>
            Only 35% of conversions attributed to marketing. The majority of revenue impact was invisible. We couldn't identify which campaigns actually drove results.
          </p>
          
          <h3>Inefficient Budget Allocation</h3>
          <p>
            Without accurate data, budgets were allocated on incomplete information. High performers were underfunded. Low performers kept receiving budget.
          </p>
          
          <h3>Siloed Channels</h3>
          <p>
            Each channel operated in isolation. No visibility into cross-channel journeys. Missed opportunities for channel synergy.
          </p>
          
          <h3>Manual Reporting Burden</h3>
          <p>
            15-20 hours/week spent compiling data from multiple platforms. Delayed optimization decisions. Data was outdated by the time we acted.
          </p>
          
          <h3>Inconsistent Data</h3>
          <p>
            Different platforms used different attribution models and definitions. Impossible to create unified views. Discrepancies undermined confidence.
          </p>
        </div>
      ),
      quote: {
        text: "We were flying blind with our marketing investments. We knew we were generating revenue, but couldn't identify which efforts were driving results and which were wasting budget.",
        author: "CMO, Resulta"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Unified analytics dashboard",
      caption: "Building a unified attribution and analytics infrastructure"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I designed and implemented a comprehensive performance marketing system with accurate attribution and automated optimization.
          </p>
          
          <h3>Matomo Analytics Implementation</h3>
          <p>
            Deployed Matomo as the central analytics platform. Privacy-compliant, accurate tracking across all properties. Custom event tracking, enhanced e-commerce, cross-domain attribution.
          </p>
          
          <h3>CRM Integration</h3>
          <p>
            Connected marketing data to CRM for complete journey visibility. First touch to final conversion. Enabled multi-touch attribution and accurate LTV calculations.
          </p>
          
          <h3>Automated Dashboards</h3>
          <p>
            Built real-time dashboards aggregating all channel data. Eliminated manual reporting. Enabled daily optimization decisions.
          </p>
          
          <h3>Multi-Touch Attribution</h3>
          <p>
            Implemented sophisticated models crediting each touchpoint accurately. Revealed true contribution of awareness vs. retargeting vs. direct response.
          </p>
          
          <h3>Optimization Framework</h3>
          <p>
            Created systematic processes for campaign optimization: automated A/B testing, bid optimization, audience refinement. Continuous improvement across all channels.
          </p>
        </div>
      ),
      features: [
        "Matomo Analytics with custom event tracking",
        "CRM integration for complete journey visibility",
        "Real-time automated performance dashboards",
        "Multi-touch attribution modeling",
        "Predictive budget optimization",
        "Automated campaign optimization",
        "Cross-brand performance comparison",
        "GDPR-compliant tracking"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Revenue growth charts",
      caption: "Marketing ROI improved from 2.1x to 7.4x ROAS"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The optimization initiative delivered transformational results:
          </p>
          
          <h3>$1M+ Attributed Revenue</h3>
          <p>
            Up from $285K tracked annually. Improved tracking revealed previously hidden revenue streams and enabled confident marketing investments.
          </p>
          
          <h3>7.4x ROAS</h3>
          <p>
            Marketing ROI improved from 2.1x to 7.4x through precise attribution, budget optimization, and performance-driven campaign management.
          </p>
          
          <h3>45% CAC Reduction</h3>
          <p>
            Customer acquisition cost dropped from $145 to $79. Identified and eliminated inefficient campaigns. Better targeting and channel mix.
          </p>
          
          <h3>90%+ Tracking Accuracy</h3>
          <p>
            Up from 35%. Reliable data for all optimization decisions. Confident scaling of successful campaigns.
          </p>
          
          <h3>15-20 Hours Saved Weekly</h3>
          <p>
            Eliminated manual reporting through automation. Team focused on strategy instead of data compilation. Faster optimization cycles.
          </p>
          
          <h3>Evidence-Based Strategy</h3>
          <p>
            Shifted from intuition-based to data-driven decision making. Channel investments, audience expansion, and positioning now backed by data.
          </p>
        </div>
      ),
      quote: {
        text: "This system transformed our entire approach to growth. We now have the confidence and data to scale marketing investments aggressively while maintaining profitability.",
        author: "Chief Revenue Officer, Resulta"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Attribution is a journey, not a destination. We started with last-click, moved to multi-touch, and continue refining. Perfect attribution doesn't exist, but good-enough attribution transforms decisions."
        },
        {
          text: "Privacy-first pays off. Choosing Matomo over GA4 meant better data ownership and GDPR compliance. No sampling issues, no data retention limits."
        },
        {
          text: "Dashboards need owners. Automated reports only work if someone acts on them. We assigned channel owners who review their dashboards daily."
        },
        {
          text: "CAC isn't the only metric. Early on, we over-optimized for CAC and hurt brand awareness. Now we balance efficiency with scale targets."
        }
      ]
    },
    tags: [
      "Performance Marketing",
      "Analytics Implementation",
      "Revenue Attribution",
      "Marketing ROI",
      "Matomo Analytics",
      "CRM Integration",
      "Conversion Optimization",
      "Marketing Automation"
    ],
    projectId: "performance-marketing-optimization"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default PerformanceMarketingOptimization;
