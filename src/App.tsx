import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./components/Home'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Resume = lazy(() => import('./components/Resume'));
const Projects = lazy(() => import('./components/Projects'));
const Tools = lazy(() => import('./components/Tools'));
const Resources = lazy(() => import('./components/Resources'));
const Writings = lazy(() => import('./components/Writings'));
const NotFound = lazy(() => import('./components/NotFound'));

// Case Study Pages - Lazy loaded
const AIPrototypingFramework = lazy(() => import('./pages/projects/AIPrototypingFramework'));
const MultiBrandLaunch = lazy(() => import('./pages/projects/MultiBrandLaunch'));
const PerformanceMarketingOptimization = lazy(() => import('./pages/projects/PerformanceMarketingOptimization'));
const LoyaltyProgramPlatform = lazy(() => import('./pages/projects/LoyaltyProgramPlatform'));
const ABTestingFramework = lazy(() => import('./pages/projects/ABTestingFramework'));
const HealthcarePlatform = lazy(() => import('./pages/projects/HealthcarePlatform'));
const MarketingAutomation = lazy(() => import('./pages/projects/MarketingAutomation'));
const APIIntegrationSuite = lazy(() => import('./pages/projects/APIIntegrationSuite'));

// Writing Articles - Lazy loaded
const AIWinterThatNeverCame = lazy(() => import('./pages/writings/AIWinterThatNeverCame'));
const BeyondChatGPTEnterpriseAI = lazy(() => import('./pages/writings/BeyondChatGPTEnterpriseAI'));
const GreatAITalentWar = lazy(() => import('./pages/writings/GreatAITalentWar'));
const DeathOfTenYearBusinessPlan = lazy(() => import('./pages/writings/DeathOfTenYearBusinessPlan'));
const VentureCapitalNewPlaybook = lazy(() => import('./pages/writings/VentureCapitalNewPlaybook'));
const RemoteWorkSettlement = lazy(() => import('./pages/writings/RemoteWorkSettlement'));
const SubscriptionEconomyNextChapter = lazy(() => import('./pages/writings/SubscriptionEconomyNextChapter'));
const GreatAIModelCommoditization = lazy(() => import('./pages/writings/GreatAIModelCommoditization'));
const AIGovernanceGap = lazy(() => import('./pages/writings/AIGovernanceGap'));
const MultimodalAIEndOfSpecializedSoftware = lazy(() => import('./pages/writings/MultimodalAIEndOfSpecializedSoftware'));
const AIInfrastructureWars = lazy(() => import('./pages/writings/AIInfrastructureWars'));
const PlatformEconomicsUnbundlingRebundling = lazy(() => import('./pages/writings/PlatformEconomicsUnbundlingRebundling'));
const CreatorEconomyMaturation = lazy(() => import('./pages/writings/CreatorEconomyMaturation'));
const AttentionEconomyBacklash = lazy(() => import('./pages/writings/AttentionEconomyBacklash'));
const AIAlignmentControlProblem = lazy(() => import('./pages/writings/AIAlignmentControlProblem'));
const AIRegulationInnovationBalance = lazy(() => import('./pages/writings/AIRegulationInnovationBalance'));
const ConsultingIndustryAIDisruption = lazy(() => import('./pages/writings/ConsultingIndustryAIDisruption'));
const GrowthHackingMaturation = lazy(() => import('./pages/writings/GrowthHackingMaturation'));
const PricingPsychologyRevolution = lazy(() => import('./pages/writings/PricingPsychologyRevolution'));
const PMSkillStack2025 = lazy(() => import('./pages/writings/PMSkillStack2025'));
const FromGrowthMetricsToHealthOutcomes = lazy(() => import('./pages/writings/FromGrowthMetricsToHealthOutcomes'));
const MarketplacesVsAgents = lazy(() => import('./pages/writings/MarketplacesVsAgents'));

// AI Tools - Lazy loaded
const AIPrioritizer = lazy(() => import('./pages/tools/ai/AIPrioritizer'));
const AIFeedbackAnalyzer = lazy(() => import('./pages/tools/ai/AIFeedbackAnalyzer'));
const AIUserStoryGenerator = lazy(() => import('./pages/tools/ai/AIUserStoryGenerator'));
const AICompetitiveAnalysis = lazy(() => import('./pages/tools/ai/AICompetitiveAnalysis'));
const AIReleaseNotesGenerator = lazy(() => import('./pages/tools/ai/AIReleaseNotesGenerator'));
const AIRoadmapAdvisor = lazy(() => import('./pages/tools/ai/AIRoadmapAdvisor'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#667eea'
  }}>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #e0e0e0',
        borderTop: '3px solid #667eea',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <SpeedInsights />
      <div className="App">
        <Navigation />
        <MobileNavigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/writings" element={<Writings />} />
            
            {/* Case Study Routes */}
            <Route path="/projects/ai-prototyping-framework" element={<AIPrototypingFramework />} />
            <Route path="/projects/multi-brand-launch" element={<MultiBrandLaunch />} />
            <Route path="/projects/performance-marketing-optimization" element={<PerformanceMarketingOptimization />} />
            <Route path="/projects/loyalty-program-platform" element={<LoyaltyProgramPlatform />} />
            <Route path="/projects/ab-testing-framework" element={<ABTestingFramework />} />
            <Route path="/projects/healthcare-platform" element={<HealthcarePlatform />} />
            <Route path="/projects/marketing-automation" element={<MarketingAutomation />} />
            <Route path="/projects/api-integration-suite" element={<APIIntegrationSuite />} />
            
            {/* Writing Article Routes */}
            <Route path="/writings/ai-winter-that-never-came" element={<AIWinterThatNeverCame />} />
            <Route path="/writings/beyond-chatgpt-enterprise-ai" element={<BeyondChatGPTEnterpriseAI />} />
            <Route path="/writings/great-ai-talent-war" element={<GreatAITalentWar />} />
            <Route path="/writings/death-of-ten-year-business-plan" element={<DeathOfTenYearBusinessPlan />} />
            <Route path="/writings/venture-capital-new-playbook" element={<VentureCapitalNewPlaybook />} />
            <Route path="/writings/remote-work-settlement" element={<RemoteWorkSettlement />} />
            <Route path="/writings/subscription-economy-next-chapter" element={<SubscriptionEconomyNextChapter />} />
            <Route path="/writings/great-ai-model-commoditization" element={<GreatAIModelCommoditization />} />
            <Route path="/writings/ai-governance-gap" element={<AIGovernanceGap />} />
            <Route path="/writings/multimodal-ai-end-of-specialized-software" element={<MultimodalAIEndOfSpecializedSoftware />} />
            <Route path="/writings/ai-infrastructure-wars" element={<AIInfrastructureWars />} />
            <Route path="/writings/platform-economics-unbundling-rebundling" element={<PlatformEconomicsUnbundlingRebundling />} />
            <Route path="/writings/creator-economy-maturation" element={<CreatorEconomyMaturation />} />
            <Route path="/writings/attention-economy-backlash" element={<AttentionEconomyBacklash />} />
            <Route path="/writings/ai-alignment-control-problem" element={<AIAlignmentControlProblem />} />
            <Route path="/writings/ai-regulation-innovation-balance" element={<AIRegulationInnovationBalance />} />
            <Route path="/writings/consulting-industry-ai-disruption" element={<ConsultingIndustryAIDisruption />} />
            <Route path="/writings/growth-hacking-maturation" element={<GrowthHackingMaturation />} />
            <Route path="/writings/pricing-psychology-revolution" element={<PricingPsychologyRevolution />} />
            <Route path="/writings/pm-os-2025" element={<PMSkillStack2025 />} />
            <Route path="/writings/from-growth-metrics-to-health-outcomes" element={<FromGrowthMetricsToHealthOutcomes />} />
            <Route path="/writings/marketplaces-vs-agents" element={<MarketplacesVsAgents />} />
            
            {/* AI Tool Routes */}
            <Route path="/tools/ai-prioritizer" element={<AIPrioritizer />} />
            <Route path="/tools/ai-feedback-analyzer" element={<AIFeedbackAnalyzer />} />
            <Route path="/tools/ai-user-story-generator" element={<AIUserStoryGenerator />} />
            <Route path="/tools/ai-competitive-analysis" element={<AICompetitiveAnalysis />} />
            <Route path="/tools/ai-release-notes" element={<AIReleaseNotesGenerator />} />
            <Route path="/tools/ai-roadmap-advisor" element={<AIRoadmapAdvisor />} />
             
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <MobileFooter />
      </div>
    </Router>
  );
}

export default App;
