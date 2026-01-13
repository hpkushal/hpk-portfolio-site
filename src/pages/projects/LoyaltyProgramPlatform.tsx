import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const LoyaltyProgramPlatform: React.FC = () => {
  const caseStudyData = {
    category: "Product Development",
    title: "Loyalty Program Platform Drives 35% Engagement Boost",
    subtitle: "How I designed and launched a unified loyalty platform using Open Loyalty's API, transforming customer engagement across Resulta's multi-brand ecosystem",
    date: "September 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Customer loyalty and engagement platform concept"
    },
    tldr: {
      keyResults: [
        "<strong>35% increase</strong> in user engagement across all touchpoints",
        "<strong>28% improvement</strong> in customer retention (65% to 83%)",
        "<strong>10+ API integrations</strong> for unified customer experience",
        "<strong>3.2x higher</strong> reward redemption through personalization"
      ],
      metrics: [
        {
          label: "User Engagement",
          before: "22% average engagement rate",
          after: "35%+ sustained engagement"
        },
        {
          label: "Customer Retention",
          before: "65% annual retention",
          after: "83% annual retention"
        },
        {
          label: "System Integrations",
          before: "Siloed customer data",
          after: "10+ unified API integrations"
        },
        {
          label: "Reward Redemption",
          before: "18% redemption rate",
          after: "58% redemption rate"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As <strong>Digital Product Strategist</strong> at Resulta, I led the loyalty platform initiative end-to-end:
          </p>
          <ul>
            <li><strong>Platform Selection:</strong> Evaluated 5 loyalty platforms, selected Open Loyalty for API-first architecture</li>
            <li><strong>Solution Architecture:</strong> Designed the integration architecture across 5 brands and 10+ systems</li>
            <li><strong>Personalization Strategy:</strong> Defined segmentation rules and reward optimization algorithms</li>
            <li><strong>Cross-functional Coordination:</strong> Led engineering, marketing, and customer success teams through implementation</li>
            <li><strong>Performance Ownership:</strong> Established KPIs and owned engagement/retention targets</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Discovery & Platform Selection",
          description: "Mapped customer journeys, identified gaps, evaluated loyalty platforms, selected Open Loyalty",
          duration: "4 weeks"
        },
        {
          phase: "Phase 2",
          title: "Architecture & Integration Design",
          description: "Designed API integrations with CRM, e-commerce, and marketing systems across all brands",
          duration: "6 weeks"
        },
        {
          phase: "Phase 3",
          title: "Personalization Engine Build",
          description: "Implemented segmentation rules, reward algorithms, and real-time personalization logic",
          duration: "8 weeks"
        },
        {
          phase: "Phase 4",
          title: "Pilot & Iteration",
          description: "Launched with 2 brands, gathered feedback, optimized reward structures and UX",
          duration: "6 weeks"
        },
        {
          phase: "Phase 5",
          title: "Full Rollout & Optimization",
          description: "Expanded to all 5 brands, continuous A/B testing and performance optimization",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About the Initiative",
      content: (
        <div>
          <p>
            <strong>Resulta's 5-brand ecosystem</strong> needed a unified loyalty platform. Customers were interacting with brands in isolation, with no cross-brand recognition or rewards. Traditional point-based programs wouldn't work for our complex multi-brand environment.
          </p>
          <p>
            The goal: create a seamless experience that encourages cross-brand loyalty while maintaining individual brand identity. This required strategic thinking about customer journey orchestration, personalization at scale, and compelling value propositions.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Customer shopping experience",
      caption: "Customers engaged with brands in isolation, missing cross-brand opportunities"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified several critical issues limiting customer lifetime value:
          </p>
          
          <h3>Fragmented Customer Experience</h3>
          <p>
            Each brand operated with separate databases, reward systems, and engagement mechanisms. Customers had no unified recognition across the ecosystem.
          </p>
          
          <h3>Low Engagement & Retention</h3>
          <p>
            22% engagement rate across touchpoints. 35% of customers became inactive within 6 months. No compelling reason to stay engaged.
          </p>
          
          <h3>No Personalization</h3>
          <p>
            Generic reward offerings failed to resonate. Without behavioral data integration, we couldn't deliver relevant experiences.
          </p>
          
          <h3>Missed Cross-Brand Opportunities</h3>
          <p>
            Only 18% of customers engaged with multiple brands. Lack of cross-brand visibility was leaving revenue on the table.
          </p>
          
          <h3>Manual Campaign Management</h3>
          <p>
            Campaign deployment took weeks. Optimization was reactive rather than proactive. No real-time responsiveness.
          </p>
        </div>
      ),
      quote: {
        text: "We had loyal customers for individual brands, but we weren't capturing the full potential of our ecosystem. Customers didn't see us as a comprehensive solution provider.",
        author: "VP of Customer Success, Resulta"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Analytics and personalization dashboard",
      caption: "Real-time personalization engine powering the loyalty platform"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I designed and implemented a comprehensive loyalty platform using Open Loyalty's API-first architecture.
          </p>
          
          <h3>Open Loyalty API Integration</h3>
          <p>
            Selected Open Loyalty for its flexible API-first engine. Integrated across all 5 brands while maintaining brand-specific customizations and unified customer profiles.
          </p>
          
          <h3>Real-Time Personalization</h3>
          <p>
            Built algorithms that analyze behavior, preferences, and engagement patterns in real-time. System automatically adjusts rewards, timing, and content based on individual profiles.
          </p>
          
          <h3>Cross-Brand Journey Orchestration</h3>
          <p>
            Created seamless journeys spanning multiple brands. Customers earn and redeem rewards across the entire ecosystem with consistent recognition.
          </p>
          
          <h3>Behavioral Segmentation</h3>
          <p>
            Built analytics tracking customer behavior across all touchpoints. System identifies high-value customers, predicts churn risk, and suggests optimal engagement approaches.
          </p>
          
          <h3>Dynamic Reward Structure</h3>
          <p>
            Flexible rewards that adapt to preferences: points, tiers, achievements, and experiential rewards with automatic optimization based on redemption patterns.
          </p>
        </div>
      ),
      features: [
        "Open Loyalty API-first architecture",
        "Real-time personalization engine",
        "Cross-brand reward earning and redemption",
        "Dynamic customer segmentation",
        "Automated campaign deployment",
        "Customer journey orchestration",
        "10+ system integrations (CRM, e-commerce, support)",
        "Advanced analytics dashboard"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Customer engagement and growth metrics",
      caption: "Engagement and retention metrics after platform launch"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The loyalty platform delivered transformational results within 6 months of launch:
          </p>
          
          <h3>35% Engagement Rate</h3>
          <p>
            User engagement increased from 22% to 35% across all touchpoints. Personalized experiences created compelling reasons to interact more frequently.
          </p>
          
          <h3>83% Annual Retention</h3>
          <p>
            Customer retention improved from 65% to 83% (28% improvement). The platform created emotional connections beyond transactional relationships.
          </p>
          
          <h3>60% Cross-Brand Engagement</h3>
          <p>
            60% of loyalty members now engage with multiple brands (up from 18%). Cross-brand engagement increased customer lifetime value by 2.4x.
          </p>
          
          <h3>58% Reward Redemption</h3>
          <p>
            Redemption rates jumped from 18% to 58%. Personalized offerings were significantly more relevant and appealing.
          </p>
          
          <h3>40% Higher Revenue per Customer</h3>
          <p>
            Loyalty members generate 40% higher revenue with 25% higher margins due to reduced acquisition costs. The program became self-funding.
          </p>
          
          <h3>60% Reduction in Manual Effort</h3>
          <p>
            Automated personalization reduced manual marketing work by 60%. Campaign deployment went from weeks to hours.
          </p>
        </div>
      ),
      quote: {
        text: "This platform transformed our customer strategy. We moved from competing on price to building lasting relationships based on value and personalization.",
        author: "Chief Customer Officer, Resulta"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Start with high-value segments. We piloted with our most engaged customers first. Their feedback shaped the experience before broad rollout."
        },
        {
          text: "Personalization beats generosity. Smaller, relevant rewards drove higher engagement than bigger generic ones. Context matters more than value."
        },
        {
          text: "Cross-brand rewards need careful balance. Too aggressive cross-selling feels spammy. We learned to suggest, not push, other brands."
        },
        {
          text: "Real-time data is table stakes. Batch processing couldn't deliver the responsive experience customers expected. Invested heavily in real-time infrastructure."
        }
      ]
    },
    tags: [
      "Product Development",
      "Customer Engagement",
      "Loyalty Programs",
      "Open Loyalty API",
      "Personalization",
      "Cross-Brand Strategy",
      "Customer Retention",
      "Real-time Analytics"
    ],
    projectId: "loyalty-program-platform"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default LoyaltyProgramPlatform;
