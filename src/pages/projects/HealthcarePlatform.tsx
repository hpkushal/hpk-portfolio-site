import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const HealthcarePlatform: React.FC = () => {
  const caseStudyData = {
    category: "Content Strategy",
    title: "Healthcare Professionals Platform Increases Engagement by 45%",
    subtitle: "How I built a WordPress-based resource hub for healthcare professionals, improving accessibility and enabling patient-friendly educational content",
    date: "July 2024",
    heroImage: {
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Healthcare professionals collaboration and medical education platform"
    },
    tldr: {
      keyResults: [
        "<strong>45% increase</strong> in healthcare professional engagement (25% to 70% MAU)",
        "<strong>95% accessibility</strong> compliance (up from 40%)",
        "<strong>85% content completion</strong> rate (up from 35%)",
        "<strong>2,000+ professional connections</strong> (up from 500)"
      ],
      metrics: [
        {
          label: "Professional Engagement",
          before: "25% monthly active users",
          after: "70% monthly active users"
        },
        {
          label: "Content Accessibility",
          before: "40% accessibility compliance",
          after: "95% WCAG 2.1 AA compliance"
        },
        {
          label: "Resource Utilization",
          before: "35% content completion rate",
          after: "85% content completion rate"
        },
        {
          label: "Network Growth",
          before: "500 professional connections",
          after: "2,000+ active connections"
        }
      ]
    },
    myRole: {
      title: "My Role",
      content: (
        <div>
          <p>
            As <strong>Digital Product Strategist</strong>, I led the healthcare platform initiative:
          </p>
          <ul>
            <li><strong>Product Vision:</strong> Defined platform strategy balancing professional rigor with patient-friendly accessibility</li>
            <li><strong>Content Architecture:</strong> Designed information hierarchy, taxonomy, and content workflows for medical accuracy</li>
            <li><strong>Accessibility Lead:</strong> Owned WCAG 2.1 AA compliance, conducted audits, and implemented assistive technology support</li>
            <li><strong>Stakeholder Management:</strong> Coordinated with medical advisors, content creators, and healthcare professionals</li>
            <li><strong>Launch & Optimization:</strong> Managed rollout, user feedback collection, and iterative improvements</li>
          </ul>
        </div>
      )
    },
    timeline: {
      title: "Project Timeline",
      steps: [
        {
          phase: "Phase 1",
          title: "Discovery & Requirements",
          description: "Interviewed 20+ healthcare professionals, audited existing resources, defined accessibility requirements",
          duration: "4 weeks"
        },
        {
          phase: "Phase 2",
          title: "Content Architecture",
          description: "Designed information hierarchy, content taxonomy, and medical review workflows",
          duration: "3 weeks"
        },
        {
          phase: "Phase 3",
          title: "WordPress Development",
          description: "Built custom theme, accessibility features, and healthcare-specific plugins",
          duration: "8 weeks"
        },
        {
          phase: "Phase 4",
          title: "Content Migration & Creation",
          description: "Migrated existing content, created patient education materials and infographics",
          duration: "6 weeks"
        },
        {
          phase: "Phase 5",
          title: "Launch & Community Building",
          description: "Rolled out to healthcare community, built collaboration features, ongoing optimization",
          duration: "Ongoing"
        }
      ]
    },
    customer: {
      title: "About the Initiative",
      content: (
        <div>
          <p>
            <strong>Healthcare professionals</strong> needed a centralized platform for educational resources, best practice sharing, and patient education materials. Existing platforms were either too academic for practical use or too simplified for professional credibility.
          </p>
          <p>
            The challenge: create accessible yet comprehensive resources that busy clinicians could quickly consume. The platform needed to serve physicians, nurses, and allied health professionals with varying experience levels and technological comfort.
          </p>
        </div>
      )
    },
    problemImage: {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Healthcare professional reviewing medical information",
      caption: "Medical education content was fragmented across multiple platforms"
    },
    problem: {
      title: "The Challenge",
      content: (
        <div>
          <p>
            I identified critical gaps in existing healthcare education resources:
          </p>
          
          <h3>Fragmented Resources</h3>
          <p>
            Content scattered across journals, institutional sites, and multiple platforms. Professionals wasted time searching instead of learning.
          </p>
          
          <h3>Poor Accessibility</h3>
          <p>
            Existing platforms weren't designed for users with disabilities. Only 40% accessibility compliance. Complex interfaces hindered quick information retrieval.
          </p>
          
          <h3>No Patient-Friendly Materials</h3>
          <p>
            Professionals needed materials that were medically accurate but patient-readable. Most resources were either too complex or too simplified.
          </p>
          
          <h3>Limited Collaboration</h3>
          <p>
            No centralized place for professionals to share cases, discuss best practices, or learn from peers across specialties.
          </p>
          
          <h3>Mobile Gaps</h3>
          <p>
            Existing platforms weren't optimized for clinical workflows. Professionals needed access during rounds and patient interactions.
          </p>
        </div>
      ),
      quote: {
        text: "We needed a platform that could serve both as a professional development resource and a patient education tool, accessible to healthcare professionals with varying technical skills and time constraints.",
        author: "Chief Medical Officer"
      }
    },
    solutionImage: {
      src: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Medical team collaborating on digital platform",
      caption: "Building an accessible, comprehensive healthcare resource hub"
    },
    solution: {
      title: "The Solution",
      content: (
        <div>
          <p>
            I designed and built a comprehensive WordPress platform focused on accessibility, clinical integration, and professional collaboration.
          </p>
          
          <h3>WordPress with Healthcare Customizations</h3>
          <p>
            Custom theme and plugins for medical content management. Multi-author workflows with medical review and approval processes. Version control for clinical guidelines.
          </p>
          
          <h3>WCAG 2.1 AA Accessibility</h3>
          <p>
            Fully accessible design with screen reader support, keyboard navigation, and assistive technology compatibility. Readability optimized for quick clinical consumption.
          </p>
          
          <h3>Patient Education Materials</h3>
          <p>
            Plain-language resources maintaining medical accuracy. Interactive infographics, visual aids, and downloadable handouts for patient conversations.
          </p>
          
          <h3>Professional Collaboration Tools</h3>
          <p>
            Discussion forums, case study sharing, and peer networking across specialties. Knowledge sharing without leaving the platform.
          </p>
          
          <h3>Mobile-First Clinical Design</h3>
          <p>
            Responsive interface for phones, tablets, and clinical workstations. Quick-access search, bookmarks, and offline capability for busy environments.
          </p>
        </div>
      ),
      features: [
        "WordPress CMS with healthcare-specific plugins",
        "WCAG 2.1 AA accessibility compliance",
        "Patient-friendly educational materials",
        "Professional networking and collaboration",
        "Mobile-optimized clinical interface",
        "Advanced search and categorization",
        "Multi-author medical review workflows",
        "Progress tracking and CE certification"
      ]
    },
    impactImage: {
      src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      alt: "Healthcare professionals using digital platform",
      caption: "Platform adoption across the healthcare professional community"
    },
    impact: {
      title: "The Results",
      content: (
        <div>
          <p>
            The platform delivered significant improvements within the first year:
          </p>
          
          <h3>70% Monthly Active Users</h3>
          <p>
            Professional engagement jumped from 25% to 70% MAU. Users spent 40% more time on platform compared to previous resources.
          </p>
          
          <h3>95% Accessibility Compliance</h3>
          <p>
            Up from 40%. Healthcare professionals with disabilities now have full access to continuing education and professional development.
          </p>
          
          <h3>85% Content Completion</h3>
          <p>
            Up from 35%. Improved UX and accessibility significantly enhanced learning outcomes and knowledge retention.
          </p>
          
          <h3>2,000+ Professional Connections</h3>
          <p>
            Network grew 4x from 500 connections. Cross-specialty collaboration created valuable knowledge sharing opportunities.
          </p>
          
          <h3>60% Better Patient Understanding</h3>
          <p>
            Professionals reported patients showed significantly improved comprehension when using platform-provided educational materials.
          </p>
          
          <h3>500+ Case Studies Shared</h3>
          <p>
            Collaboration features enabled peer learning at scale. Practical knowledge repository enhanced care quality across the community.
          </p>
        </div>
      ),
      quote: {
        text: "This platform fundamentally changed how our healthcare community approaches professional development and patient education. It's become an indispensable tool.",
        author: "VP of Clinical Operations"
      }
    },
    learnings: {
      title: "Key Learnings",
      items: [
        {
          text: "Accessibility is a feature, not a checkbox. WCAG compliance improved usability for everyone, not just users with disabilities. Design decisions benefited all users."
        },
        {
          text: "Healthcare professionals are time-starved. Every extra click costs engagement. We ruthlessly simplified navigation and prioritized quick-access patterns."
        },
        {
          text: "Patient materials need professional buy-in. We involved clinicians in content creation. They wouldn't share materials they didn't trust with patients."
        },
        {
          text: "Community features need seeding. Forums stayed empty until we recruited 'champion' users to start discussions. Now it's self-sustaining."
        }
      ]
    },
    tags: [
      "Content Strategy",
      "Healthcare Technology",
      "WordPress Development",
      "Accessibility Design",
      "Patient Education",
      "Professional Networking",
      "Medical Education",
      "Clinical Workflow"
    ],
    projectId: "healthcare-platform"
  };

  return <CaseStudyLayout {...caseStudyData} />;
};

export default HealthcarePlatform;
