import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navigation from './components/Navigation';
import MobileNavigation from './components/MobileNavigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Resources from './components/Resources';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import NotFound from './components/NotFound';
import Writings from './components/Writings';

// Case Study Pages
import AIPrototypingFramework from './pages/projects/AIPrototypingFramework';
import MultiBrandLaunch from './pages/projects/MultiBrandLaunch';
import PerformanceMarketingOptimization from './pages/projects/PerformanceMarketingOptimization';
import LoyaltyProgramPlatform from './pages/projects/LoyaltyProgramPlatform';
import ABTestingFramework from './pages/projects/ABTestingFramework';
import HealthcarePlatform from './pages/projects/HealthcarePlatform';
import MarketingAutomation from './pages/projects/MarketingAutomation';
import APIIntegrationSuite from './pages/projects/APIIntegrationSuite';

// Writing Articles
import AIWinterThatNeverCame from './pages/writings/AIWinterThatNeverCame';
import BeyondChatGPTEnterpriseAI from './pages/writings/BeyondChatGPTEnterpriseAI';
import GreatAITalentWar from './pages/writings/GreatAITalentWar';
import DeathOfTenYearBusinessPlan from './pages/writings/DeathOfTenYearBusinessPlan';
import VentureCapitalNewPlaybook from './pages/writings/VentureCapitalNewPlaybook';
import RemoteWorkSettlement from './pages/writings/RemoteWorkSettlement';
import SubscriptionEconomyNextChapter from './pages/writings/SubscriptionEconomyNextChapter';
import GreatAIModelCommoditization from './pages/writings/GreatAIModelCommoditization';
import AIGovernanceGap from './pages/writings/AIGovernanceGap';
import MultimodalAIEndOfSpecializedSoftware from './pages/writings/MultimodalAIEndOfSpecializedSoftware';
import AIInfrastructureWars from './pages/writings/AIInfrastructureWars';
import PlatformEconomicsUnbundlingRebundling from './pages/writings/PlatformEconomicsUnbundlingRebundling';
import CreatorEconomyMaturation from './pages/writings/CreatorEconomyMaturation';
import AttentionEconomyBacklash from './pages/writings/AttentionEconomyBacklash';
import AIAlignmentControlProblem from './pages/writings/AIAlignmentControlProblem';
import AIRegulationInnovationBalance from './pages/writings/AIRegulationInnovationBalance';
import ConsultingIndustryAIDisruption from './pages/writings/ConsultingIndustryAIDisruption';
import GrowthHackingMaturation from './pages/writings/GrowthHackingMaturation';
import PricingPsychologyRevolution from './pages/writings/PricingPsychologyRevolution';
import PMSkillStack2025 from './pages/writings/PMSkillStack2025';
import FromGrowthMetricsToHealthOutcomes from './pages/writings/FromGrowthMetricsToHealthOutcomes';

// AI Tools
import AIPrioritizer from './pages/tools/ai/AIPrioritizer';
import AIFeedbackAnalyzer from './pages/tools/ai/AIFeedbackAnalyzer';
import AIUserStoryGenerator from './pages/tools/ai/AIUserStoryGenerator';
import AICompetitiveAnalysis from './pages/tools/ai/AICompetitiveAnalysis';
import AIReleaseNotesGenerator from './pages/tools/ai/AIReleaseNotesGenerator';
import AIRoadmapAdvisor from './pages/tools/ai/AIRoadmapAdvisor';
 
 function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <MobileNavigation />
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
          
          {/* AI Tool Routes */}
          <Route path="/tools/ai-prioritizer" element={<AIPrioritizer />} />
          <Route path="/tools/ai-feedback-analyzer" element={<AIFeedbackAnalyzer />} />
          <Route path="/tools/ai-user-story-generator" element={<AIUserStoryGenerator />} />
          <Route path="/tools/ai-competitive-analysis" element={<AICompetitiveAnalysis />} />
          <Route path="/tools/ai-release-notes" element={<AIReleaseNotesGenerator />} />
          <Route path="/tools/ai-roadmap-advisor" element={<AIRoadmapAdvisor />} />
           
           <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <MobileFooter />
      </div>
    </Router>
  );
}

export default App;
