import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const APIIntegrationSuite: React.FC = () => {
  const caseStudyData = {
    category: "Technical Product Management",
    title: "API Integration Suite Improves Customer Retention by 15%",
    subtitle: "How I collaborated with engineering to design 10+ API integrations, resolving workflow gaps that were driving enterprise customer churn",
    date: "May 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      alt: "API integration and system connectivity visualization"
    },
    tldr: {
      keyResults: [
        "<strong>15% retention improvement</strong> (72% to 87% annual)",
        "<strong>10+ API integrations</strong> with major business platforms",
        "<strong>90% reduction</strong> in integration support tickets",
        "<strong>$1.2M+ additional revenue</strong> from improved retention and enterprise wins"
      ],
      metrics: [
        {
          label: "Customer Retention",
          before: "72% annual retention",
          after: "87% annual retention"
        },
        {
          label: "Integration Coverage",
          before: "0 standardized integrations",
          after: "10+ production integrations"
        },
        {
          label: "Support Tickets",
          before: "150 issues/month",
          after: "15 issues/month"
        },
        {
          label: "Enterprise Deals",
          before: "Lost to competitors",
          after: "5 new accounts ($500K+)"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As <strong>Digital Product Strategist</strong> at Resulta, I bridged customer needs and engineering capabilities:
          </p>
          <ul>
            <li><strong>Customer Research:</strong> Conducted workflow analysis with 20+ enterprise customers to identify critical integration needs</li>
            <li><strong>Prioritization:</strong> Built integration roadmap based on customer impact, technical feasibility, and business value</li>
            <li><strong>API Specifications:</strong> Collaborated with engineering to define data models, auth requirements, and error handling</li>
            <li><strong>Pilot Program:</strong> Managed beta testing with 5 enterprise customers before general release</li>
            <li><strong>Developer Experience:</strong> Owned documentation, code samples, and implementation guides</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Customer Research",
          description: "Interviewed 20+ enterprise customers, mapped existing workflows, identified top integration requests",
          duration: "3 weeks"
        },
        {
          phase: "Phase 2",
          title: "Prioritization & Specs",
          description: "Ranked integrations by impact, wrote detailed API specifications, aligned with engineering",
          duration: "4 weeks"
        },
        {
          phase: "Phase 3",
          title: "Development & Testing",
          description: "Collaborated on implementation, established testing framework, validated with pilot customers",
          duration: "8 weeks"
        },
        {
          phase: "Phase 4",
          title: "Documentation & Launch",
          description: "Created developer docs and code samples, launched first 5 integrations, gathered feedback",
          duration: "3 weeks"
        },
        {
          phase: "Phase 5",
          title: "Expansion & Optimization",
          description: "Added 5+ more integrations, optimized based on usage data, continuous improvement",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About the Initiative",
      content: (
        <div>
          <p>
            <strong>Resulta's enterprise clients</strong> were struggling with workflow disruptions and data silos. They needed seamless data flow between our platform and their CRM, marketing, and analytics tools.
          </p>
          <p>
            Integration gaps were driving churn. 30% of departing customers cited workflow disruptions as a key reason for leaving. We were also losing deals to competitors with better integration ecosystems.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Manual data entry and spreadsheet work",
      caption: "Customers spent 10-15 hours weekly on manual data transfers"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified critical issues impacting customer retention:
          </p>
          
          <h3>Workflow Disruptions</h3>
          <p>
            Customers manually exported and imported data between systems. Time-consuming bottlenecks. Human error risks. Particularly painful for enterprise customers with complex workflows.
          </p>
          
          <h3>Data Silos</h3>
          <p>
            Customer data fragmented across systems. Inconsistencies and duplicates. Incomplete visibility into customer relationships. Hindered decision-making.
          </p>
          
          <h3>150+ Support Tickets Monthly</h3>
          <p>
            Integration issues consumed customer success resources. Frustrated customers expected seamless connectivity with existing tools.
          </p>
          
          <h3>30% of Churn Cited Integrations</h3>
          <p>
            Exit interviews revealed workflow disruptions as a primary reason for not renewing. Integration gaps directly impacted retention.
          </p>
          
          <h3>Competitive Disadvantage</h3>
          <p>
            Lost deals to competitors with better integration ecosystems. Prospects frequently chose platforms with more workflow compatibility.
          </p>
        </div>
      ),
      quote: {
        text: "Integration gaps weren't just a technical issue. They were fundamentally limiting our ability to serve enterprise customers. Every manual workaround was a barrier to customer success.",
        author: "VP of Enterprise Solutions, Resulta"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
      alt: "Server room and API infrastructure",
      caption: "Building a scalable integration architecture"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I collaborated with engineering to design and implement a comprehensive API integration suite.
          </p>
          
          <h3>Strategic Prioritization</h3>
          <p>
            Ranked integrations by customer impact and technical feasibility. CRM integrations (Salesforce, HubSpot) came first, covering 60% of requests. Created roadmap delivering maximum benefit in shortest time.
          </p>
          
          <h3>Collaborative API Design</h3>
          <p>
            Worked with engineering to define specifications balancing customer needs with technical constraints. Documented data models, authentication, rate limits, and error handling.
          </p>
          
          <h3>Customer-Centric Architecture</h3>
          <p>
            Prioritized ease of implementation. RESTful APIs with intuitive endpoints. Clear documentation so customer teams could implement quickly.
          </p>
          
          <h3>Rigorous Testing</h3>
          <p>
            Established testing framework with functional, performance, and real-world scenario validation. Pilot program with 5 enterprise customers before general release.
          </p>
          
          <h3>Developer Experience Focus</h3>
          <p>
            Created comprehensive documentation, code samples, and implementation guides. Minimized time-to-integration and support requirements.
          </p>
        </div>
      ),
      features: [
        "10+ integrations (Salesforce, HubSpot, Google Analytics, Slack, more)",
        "RESTful architecture with intuitive endpoints",
        "Comprehensive API documentation",
        "Code samples in 4 languages",
        "OAuth 2.0 and API key authentication",
        "Real-time data synchronization",
        "Webhook support for automated triggers",
        "Rate limiting and error handling"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Analytics dashboard showing retention improvements",
      caption: "Customer retention improved from 72% to 87% annually"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The API integration suite delivered significant improvements:
          </p>
          
          <h3>87% Customer Retention</h3>
          <p>
            Up from 72% (15% improvement). Reduced workflow friction and improved platform value. Integration capabilities became key in renewal discussions.
          </p>
          
          <h3>10+ Production Integrations</h3>
          <p>
            Covered CRM systems, marketing automation, analytics platforms, and business intelligence tools. 85% of customer-requested connections delivered.
          </p>
          
          <h3>90% Fewer Support Tickets</h3>
          <p>
            Integration issues dropped from 150 to 15 per month. Customer success team shifted from troubleshooting to strategic account growth.
          </p>
          
          <h3>35% Workflow Efficiency Gain</h3>
          <p>
            Customers saved 10-15 hours weekly on manual data transfers. Automated synchronization eliminated error-prone manual processes.
          </p>
          
          <h3>5 Major Enterprise Wins</h3>
          <p>
            Worth $500K+ combined annual value. Customers cited integration capabilities as key factor in choosing us over competitors.
          </p>
          
          <h3>+25 NPS Points</h3>
          <p>
            Among customers using integrations. Integration capabilities became a top-rated feature in satisfaction surveys.
          </p>
          
          <h3>$1.2M+ Additional Revenue</h3>
          <p>
            From improved retention and new enterprise acquisition. Integrations directly supported upselling and account expansion.
          </p>
        </div>
      ),
      quote: {
        text: "The API integration suite transformed our platform from a standalone tool to an integral part of our customers' business ecosystems. It changed how customers perceive and derive value from our solution.",
        author: "Chief Technology Officer, Resulta"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Customer research prevents wasted effort. Initial assumptions about priority integrations were wrong. Salesforce ranked higher than expected. We would have built the wrong things first without talking to customers."
        },
        {
          text: "Documentation is product. Great APIs with poor docs are useless. We spent 20% of project time on developer experience. Implementation time dropped from weeks to days."
        },
        {
          text: "Pilot programs catch issues early. Beta customers found edge cases our testing missed. Fixed before general release. Saved significant support burden."
        },
        {
          text: "Integrations compound over time. Each integration made the platform stickier. Customers using 3+ integrations had 95% retention vs 75% for those using none."
        }
      ]
    },
    tags: [
      "Technical Product Management",
      "API Development",
      "System Integration",
      "Customer Success",
      "Workflow Optimization",
      "Enterprise Solutions",
      "Developer Experience",
      "Business Automation"
    ],
    projectId: "api-integration-suite"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default APIIntegrationSuite;
