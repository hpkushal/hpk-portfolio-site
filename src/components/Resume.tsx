import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { media } from '../styles/GlobalStyles';
import OfficeHoursButtonComponent from './OfficeHoursButton';
import SEO from './SEO';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

// Main Container
const ResumeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #fafbff 0%, #ffffff 100%);
  padding-top: 120px;
  position: relative;
  
  ${media.mobile} {
    padding-top: 100px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  
  ${media.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

// Sidebar Navigation
const SidebarNav = styled.div`
  width: 280px;
  flex-shrink: 0;
  position: sticky;
  top: 140px;
  height: fit-content;
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 4px 24px rgba(102, 126, 234, 0.08);
  border: 1px solid rgba(102, 126, 234, 0.1);
  
  ${media.tablet} {
    width: 100%;
    position: static;
    padding: 16px;
  }
`;

const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SidebarTabButton = styled.button<{ active?: boolean }>`
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  border: none;
  padding: 16px 20px;
  border-radius: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  
  ${props => !props.active && css`
    &:hover {
      background: rgba(102, 126, 234, 0.08);
      color: #667eea;
      transform: translateX(4px);
    }
  `}
  
  ${props => props.active && css`
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  `}
  
  ${media.tablet} {
    text-align: center;
    padding: 12px 16px;
    flex: 1;
    min-width: 140px;
    justify-content: center;
  }
  
  ${media.mobile} {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
`;

const TabIcon = styled.span`
  font-size: 1.2rem;
  
  ${media.tablet} {
    display: none;
  }
`;

const TabText = styled.span`
  flex: 1;
  
  ${media.tablet} {
    flex: none;
  }
`;

// Main Content Area
const MainContent = styled.div`
  flex: 1;
  min-width: 0;
`;

// Section Headers
const SectionHeader = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  
  &::before {
    content: '';
    width: 6px;
    height: 40px;
    background: linear-gradient(180deg, #667eea, #764ba2);
    border-radius: 3px;
  }
  
  ${media.tablet} {
    font-size: 1.8rem;
  }
  
  ${media.mobile} {
    font-size: 1.5rem;
    
    &::before {
      height: 30px;
    }
  }
`;

const Section = styled.section<{ bgAlt?: boolean }>`
  margin-bottom: 80px;
  scroll-margin-top: 140px;
  padding: 50px;
  border-radius: 32px;
  background: ${props => props.bgAlt ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.03), rgba(118, 75, 162, 0.03))' : 'white'};
  border: 1px solid rgba(102, 126, 234, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);
  
  ${media.mobile} {
    margin-bottom: 40px;
    padding: 24px;
    border-radius: 24px;
  }
`;

// Hero Section
const HeroSection = styled.section`
  padding: 0 0 60px;
  animation: ${fadeInUp} 0.8s ease-out;
  margin-bottom: 40px;
`;

const HeroCard = styled.div`
  background: white;
  border-radius: 32px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #667eea, #764ba2, #667eea);
    background-size: 200% 100%;
    animation: ${shimmer} 3s linear infinite;
  }
  
  ${media.mobile} {
    padding: 30px 20px;
    border-radius: 24px;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 40px;
  align-items: center;
  margin-bottom: 40px;
  
  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
  }
`;

const ProfileImageContainer = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
  border: 4px solid white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  ${media.tablet} {
    margin: 0 auto;
    width: 120px;
    height: 120px;
  }
`;

const HeroInfo = styled.div`
  ${media.tablet} {
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
  
  ${media.tablet} {
    font-size: 2.4rem;
  }
  
  ${media.mobile} {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.2rem;
  color: #667eea;
  margin-bottom: 16px;
  font-weight: 500;
  
  ${media.mobile} {
    font-size: 1rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  ${media.tablet} {
    justify-content: center;
  }
  
  ${media.mobile} {
    gap: 12px;
  }
`;

const ContactItem = styled.a`
  color: #555;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  border: 1px solid transparent;
  
  &:hover {
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.2);
    transform: translateY(-2px);
  }
`;

const HeroActions = styled.div`
  ${media.tablet} {
    display: flex;
    justify-content: center;
  }
`;

// Stats Grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  
  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  ${media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const StatCard = styled.div<{ delay?: number }>`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out ${props => (props.delay || 0) * 0.1}s both;
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
  }
`;

const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  line-height: 1.1;
  
  ${media.mobile} {
    font-size: 2.2rem;
  }
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// Professional Summary
const SummarySection = styled.div`
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 24px;
  padding: 32px;
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: ${float} 6s ease-in-out infinite;
  }
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  
  ${media.mobile} {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

// Timeline Experience Section
const Timeline = styled.div`
  position: relative;
  padding-left: 40px;
  
  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #667eea, #764ba2);
    border-radius: 2px;
  }
  
  ${media.mobile} {
    padding-left: 30px;
    
    &::before {
      left: 4px;
    }
  }
`;

const TimelineItem = styled.div<{ isFirst?: boolean }>`
  position: relative;
  padding-bottom: 40px;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 8px;
    width: 20px;
    height: 20px;
    background: ${props => props.isFirst ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'white'};
    border: 3px solid ${props => props.isFirst ? '#667eea' : '#764ba2'};
    border-radius: 50%;
    z-index: 1;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.2);
  }
  
  &:hover::before {
    transform: scale(1.2);
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  }
  
  ${media.mobile} {
    &::before {
      left: -30px;
      width: 16px;
      height: 16px;
    }
  }
`;

const ExperienceCard = styled.div<{ expanded: boolean; isFirst?: boolean }>`
  background: white;
  border: 2px solid ${props => props.isFirst ? 'rgba(102, 126, 234, 0.2)' : '#f0f0f0'};
  border-radius: 20px;
  padding: 28px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => props.isFirst && css`
    box-shadow: 0 8px 30px rgba(102, 126, 234, 0.1);
  `}
  
  &:hover {
    border-color: #667eea;
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.12);
    transform: translateX(8px);
  }
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
  
  ${media.mobile} {
    flex-direction: column;
    gap: 12px;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const CompanyBadge = styled.span<{ current?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => props.current ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'rgba(102, 126, 234, 0.1)'};
  color: ${props => props.current ? 'white' : '#667eea'};
  
  ${props => props.current && css`
    animation: ${pulse} 2s ease-in-out infinite;
  `}
`;

const CompanyName = styled.h3`
  color: #1a1a2e;
  font-size: 1.3rem;
  margin-bottom: 4px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const JobTitle = styled.h4`
  color: #667eea;
  font-size: 1.05rem;
  margin-bottom: 6px;
  font-weight: 600;
`;

const JobMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #888;
  font-size: 0.9rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const AchievementsList = styled.div<{ expanded: boolean }>`
  max-height: ${props => props.expanded ? '2000px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${props => props.expanded ? '20px' : '0'};
`;

const Achievement = styled.div`
  color: #555;
  margin-bottom: 12px;
  padding: 12px 16px;
  background: rgba(102, 126, 234, 0.03);
  border-radius: 12px;
  border-left: 3px solid #667eea;
  line-height: 1.6;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(102, 126, 234, 0.06);
    transform: translateX(4px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExpandButton = styled.button<{ expanded?: boolean }>`
  background: ${props => props.expanded ? 'rgba(102, 126, 234, 0.1)' : 'linear-gradient(135deg, #667eea, #764ba2)'};
  color: ${props => props.expanded ? '#667eea' : 'white'};
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.expanded ? 'none' : '0 6px 20px rgba(102, 126, 234, 0.3)'};
  }
  
  svg {
    transition: transform 0.3s ease;
    transform: rotate(${props => props.expanded ? '180deg' : '0deg'});
  }
`;

// Skills Section
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.div`
  background: white;
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 24px;
  padding: 28px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.08);
    transform: translateY(-4px);
  }
`;

const SkillCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`;

const CategoryIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

const SkillCategoryTitle = styled.h3`
  color: #1a1a2e;
  font-size: 1.15rem;
  font-weight: 700;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.div<{ level: 'Expert' | 'Advanced' | 'Intermediate' }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
  background: ${props => {
    switch(props.level) {
      case 'Expert': return 'linear-gradient(135deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.12))';
      case 'Advanced': return 'rgba(118, 75, 162, 0.08)';
      default: return 'rgba(160, 174, 192, 0.1)';
    }
  }};
  color: ${props => {
    switch(props.level) {
      case 'Expert': return '#5a6fd6';
      case 'Advanced': return '#764ba2';
      default: return '#666';
    }
  }};
  border: 1px solid ${props => {
    switch(props.level) {
      case 'Expert': return 'rgba(102, 126, 234, 0.2)';
      case 'Advanced': return 'rgba(118, 75, 162, 0.15)';
      default: return 'rgba(160, 174, 192, 0.2)';
    }
  }};
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 20px ${props => {
      switch(props.level) {
        case 'Expert': return 'rgba(102, 126, 234, 0.2)';
        case 'Advanced': return 'rgba(118, 75, 162, 0.15)';
        default: return 'rgba(160, 174, 192, 0.1)';
      }
    }};
  }
`;

const LevelDot = styled.span<{ level: 'Expert' | 'Advanced' | 'Intermediate' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => {
    switch(props.level) {
      case 'Expert': return 'linear-gradient(135deg, #667eea, #764ba2)';
      case 'Advanced': return '#764ba2';
      default: return '#a0aec0';
    }
  }};
`;

// Tools Section
const ToolsSection = styled.div`
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
`;

const ToolsSectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '🛠️';
  }
`;

const ToolsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const ToolBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  background: white;
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 14px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #667eea;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.12);
  }
`;

const ToolIcon = styled.span`
  font-size: 1.2rem;
`;

// Education Section
const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 24px;
  
  ${media.mobile} {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled.div`
  background: white;
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
  }
  
  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 12px 40px rgba(102, 126, 234, 0.1);
    transform: translateY(-6px);
  }
`;

const InstitutionName = styled.h3`
  color: #1a1a2e;
  font-size: 1.25rem;
  margin-bottom: 6px;
  font-weight: 700;
`;

const DegreeName = styled.h4`
  color: #667eea;
  font-size: 1rem;
  margin-bottom: 12px;
  font-weight: 600;
`;

const EducationMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const SubjectsContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
`;

const SubjectsLabel = styled.h5`
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '📚';
  }
`;

const SubjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SubjectTag = styled.span`
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.08));
  color: #555;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
    color: #667eea;
    transform: translateY(-2px);
  }
`;

// Download Section
const DownloadSection = styled.div`
  text-align: center;
  padding: 50px 0;
  margin-top: 20px;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 18px 36px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

// Back to Top Button
const BackToTopButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  opacity: ${props => props.visible ? 1 : 0};
  pointer-events: ${props => props.visible ? 'auto' : 'none'};
  transform: ${props => props.visible ? 'translateY(0)' : 'translateY(20px)'};
  z-index: 100;
  
  &:hover {
    transform: ${props => props.visible ? 'translateY(-4px)' : 'translateY(20px)'};
    box-shadow: 0 10px 35px rgba(102, 126, 234, 0.5);
  }
  
  ${media.mobile} {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
`;

// Component
const Resume: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([0]); // First card expanded by default
  const [activeSection, setActiveSection] = useState('experience');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    projects: 0,
    revenue: 0,
    markets: 0
  });

  const statsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      
      // Update active section based on scroll position
      const sections = [
        { id: 'experience', ref: experienceRef },
        { id: 'skills', ref: skillsRef },
        { id: 'education', ref: educationRef }
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 1500;
          const steps = 50;
          const stepDuration = duration / steps;
          
          let step = 0;
          const interval = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setAnimatedStats({
              experience: Math.floor(6 * easeOut),
              projects: Math.floor(50 * easeOut),
              revenue: Math.floor(2 * easeOut),
              markets: Math.floor(4 * easeOut)
            });
            
            if (step >= steps) {
              clearInterval(interval);
              setAnimatedStats({ experience: 6, projects: 50, revenue: 2, markets: 4 });
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "RESULTA",
      title: "Digital Product Strategist - Solution Delivery",
      duration: "January 2024 - Present",
      location: "Bedford, Canada",
      current: true,
      achievements: [
        "Led strategic planning and execution of product roadmaps using SAFe Agile frameworks, aligning cross-functional roadmaps to accelerate time-to-market and drive $2M+ ARR across five digital brands.",
        "Co-developed an AI-powered prototyping framework leveraging Cursor AI (code automation) and Figma AI (design), cutting development cycles in half and reducing MVP launch timelines from 12 weeks to 6.",
        "Developed and launched a Loyalty Program using Open Loyalty's API-first engine, leveraging real-time data to map user events, personalize rewards, and drive engagement and retention.",
        "Facilitated Joint Application Design (JAD) sessions, collaborating with product, engineering, sales, and marketing to define requirements and streamline high-impact feature rollouts and campaigns."
      ]
    },
    {
      company: "RESULTA",
      title: "Digital Product Team Lead",
      duration: "September 2022 – January 2024",
      location: "Bedford, Canada",
      achievements: [
        "Launched two new digital brands and rebranded three post-acquisitions, expanding into global markets and positioning them as challengers.",
        "Collaborated with engineering to define API specs for 10+ integrations, resolving critical customer workflow gaps and driving retention post-launch.",
        "Redesigned product messaging using Jobs-to-be-Done (JTBD) methodology, boosting sales win rates and differentiation in crowded markets.",
        "Collaborated on the launch of A/B testing frameworks (Optimizely, Google Optimize, VWO) boosting user activation and free-to-paid conversion by 10% in 12 months.",
        "Leveraged Cursor AI to develop high-impact PR campaigns, creating user-centric tools that accelerated backlink acquisition, amplified brand visibility, and drove exponential traffic growth.",
        "Negotiated agency contracts and reallocated underperforming spend, achieving 20% YoY cost savings without sacrificing lead quality.",
        "Managed the complete product lifecycle from discovery to post-launch support, focusing on developing customer-centric features that addressed key market needs."
      ]
    },
    {
      company: "RESULTA",
      title: "Digital Product Manager",
      duration: "October 2021 - September 2022",
      location: "Bedford, Canada",
      achievements: [
        "Leveraged Matomo and CRM analytics to refine campaign ROI, identifying high-value segments that drove $1M+ in attributed revenue.",
        "Partnered with performance teams to optimize paid media (Programmatic Ads) and landing page A/B tests, achieving lower CAC and improving lead-to-MQL conversion.",
        "Built and maintained product marketing automation infrastructure, supporting the customer journey from acquisition to retention, and improving lead generation and nurturing efforts.",
        "Acted as a liaison for customer feedback, translating insights into actionable product requirements and maintaining alignment across teams to ensure successful product releases."
      ]
    },
    {
      company: "RESULTA",
      title: "Digital Marketing Specialist",
      duration: "January 2021 - September 2021",
      location: "Bedford, Canada",
      achievements: [
        "Maintained multi-channel campaigns (Meta, Programmatic, SEO) driving 200+ MQLs and reducing CPA through A/B testing and geo-targeted segmentation.",
        "Delivered monthly performance dashboards (Google Data Studio), uncovering underperforming campaigns and redirecting $50K+ budget to high-ROI initiatives.",
        "Set up and manage tracking pixels, UTM parameters, and tag management using Google Tag Manager."
      ]
    },
    {
      company: "SPRING LOADED TECHNOLOGY",
      title: "Digital Marketing Assistant",
      duration: "June 2020 – December 2020",
      location: "Dartmouth, Canada",
      achievements: [
        "Built and managed the targeted Healthcare Professionals website using WordPress, creating a comprehensive resource hub with educational content and infographics, resulting in an increase in healthcare professional engagement.",
        "Collaborated with healthcare professionals to update and refine content and research materials, ensuring they were presented in a more accessible and patient-friendly format.",
        "Partnered with agencies to produce video ads, video testimonials and landing pages, improving ad relevancy and reducing bounce rates."
      ]
    },
    {
      company: "SCOTIA HVAC",
      title: "Digital Marketing Assistant",
      duration: "September 2019 – December 2019",
      location: "Halifax, Canada",
      achievements: [
        "Spearheaded digital promotions for 3 tradeshows using Mailchimp campaigns and targeted LinkedIn Ads, boosting attendance and capturing 100+ high-intent leads.",
        "Automated post-event nurture workflows, improving lead-to-customer conversion by 20% within 30 days through personalized email sequences and follow-up triggers.",
        "Developed ABM-focused collateral (case studies, product demos) using Canva, enabling sales teams to accelerate deal progression, reduce friction in decision-making, and shorten sales cycles while increasing deal sizes."
      ]
    },
    {
      company: "BHIVE WORKSPACE",
      title: "Digital Marketing Intern",
      duration: "March 2017 – June 2017",
      location: "Bangalore, India",
      achievements: [
        "Nurtured both online and offline communities, engaging with audiences on social media platforms to build brand loyalty and enhance visibility.",
        "Supported the management of content on CMS platforms, ensuring timely updates, accuracy, and a seamless user experience for community members."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Product Strategy",
      icon: "🚀",
      skills: [
        { name: "Product Lifecycle Management", level: 95 },
        { name: "Product-Led Growth", level: 90 },
        { name: "API-First Design", level: 85 },
        { name: "Competitive Intelligence", level: 88 },
        { name: "Roadmap Planning", level: 92 },
        { name: "Revenue Model Strategy", level: 87 },
        { name: "Feature Prioritization", level: 90 },
      ]
    },
    {
      title: "AI & Data",
      icon: "🤖",
      skills: [
        { name: "AI Prototyping", level: 88 },
        { name: "Automation", level: 85 },
        { name: "Customer Insights", level: 90 },
        { name: "A/B Testing", level: 92 },
        { name: "Performance Measurement", level: 95 },
      ]
    },
    {
      title: "Strategic Leadership",
      icon: "👑",
      skills: [
        { name: "Process Standardization", level: 93 },
        { name: "Stakeholder Communication", level: 95 },
        { name: "Project Management", level: 90 },
        { name: "Risk Assessment", level: 85 },
        { name: "Change Management", level: 88 },
        { name: "Executive Reporting", level: 92 },
      ]
    },
    {
      title: "Growth Marketing",
      icon: "📈",
      skills: [
        { name: "Performance Optimization", level: 90 },
        { name: "SEO/SEM", level: 88 },
        { name: "Paid Media Optimization", level: 92 },
        { name: "Marketing Automation", level: 87 },
        { name: "Customer Journey Mapping", level: 90 },
        { name: "Customer Retention", level: 85 },
      ]
    }
  ];

  const tools = [
    { name: "Cursor AI", icon: "⚡" },
    { name: "Figma", icon: "🎨" },
    { name: "Jira", icon: "📋" },
    { name: "Confluence", icon: "📝" },
    { name: "Google Analytics", icon: "📊" },
    { name: "Matomo", icon: "📈" },
    { name: "Optimizely", icon: "🧪" },
    { name: "VWO", icon: "🔬" },
    { name: "HubSpot", icon: "🧲" },
    { name: "Mailchimp", icon: "📧" },
    { name: "Google Tag Manager", icon: "🏷️" },
    { name: "Looker Studio", icon: "📉" },
    { name: "Notion", icon: "📓" },
    { name: "Miro", icon: "🖼️" },
  ];

  const education = [
    {
      institution: "Dalhousie University",
      degree: "Master of Business Administration",
      duration: "Graduated September 2019",
      location: "Halifax, Canada",
      subjects: [
        "Advanced Marketing", "Quantitative Decision Making", "Global Markets & Institutions", 
        "International Business", "Risk Management", "Leveraging Technology", 
        "Managing People", "Corporate Finance", "Strategic Leadership"
      ]
    },
    {
      institution: "Vellore Institute of Technology",
      degree: "B.Tech - Energy Engineering",
      duration: "Graduated May 2017",
      location: "Vellore, India",
      subjects: [
        "Operations Research", "Project Management", "Control Engineering", 
        "Applied Mechanics", "Marketing Principles", "Energy Systems", 
        "Renewable Energy", "Thermal Engineering", "Fluid Dynamics"
      ]
    }
  ];

  const getSkillLevel = (level: number): 'Expert' | 'Advanced' | 'Intermediate' => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    return 'Intermediate';
  };

  return (
    <>
      <SEO
        title="Resume"
        description="Kushal HP's professional resume - 6+ years of Product Management experience across healthcare, e-commerce, and digital transformation. View work history, skills, and achievements."
        url="/resume"
      />
      <ResumeContainer>
        <ContentWrapper>
          <HeroContentWrapper>
          <HeroSection>
            <HeroCard>
              <HeroGrid>
                <ProfileImageContainer>
                  <img src="/images/kushal-profile.jpg" alt="Kushal HP" />
                </ProfileImageContainer>
                <HeroInfo>
                  <HeroTitle>Kushal HP</HeroTitle>
                  <HeroSubtitle>Product Team Lead · Digital Marketing Specialist · Solution Delivery</HeroSubtitle>
                  <ContactInfo>
                    <ContactItem href="tel:+19024033023">
                      📞 (+1) 902-403-3023
                    </ContactItem>
                    <ContactItem href="mailto:hp.kushal95@outlook.com">
                      ✉️ hp.kushal95@outlook.com
                    </ContactItem>
                    <ContactItem href="https://linkedin.com/in/kushal-hp-09121995" target="_blank">
                      🔗 LinkedIn
                    </ContactItem>
                  </ContactInfo>
                </HeroInfo>
                <HeroActions>
                  <OfficeHoursButtonComponent />
                </HeroActions>
              </HeroGrid>
              
              <StatsGrid ref={statsRef}>
                <StatCard delay={1}>
                  <StatNumber>{animatedStats.experience}+</StatNumber>
                  <StatLabel>Years Experience</StatLabel>
                </StatCard>
                <StatCard delay={2}>
                  <StatNumber>{animatedStats.projects}+</StatNumber>
                  <StatLabel>Projects Delivered</StatLabel>
                </StatCard>
                <StatCard delay={3}>
                  <StatNumber>${animatedStats.revenue}M+</StatNumber>
                  <StatLabel>Revenue Generated</StatLabel>
                </StatCard>
                <StatCard delay={4}>
                  <StatNumber>{animatedStats.markets}+</StatNumber>
                  <StatLabel>Global Markets</StatLabel>
                </StatCard>
              </StatsGrid>

              <SummarySection>
                <SummaryText>
                  Product Leader with 6+ years of expertise in successful digital product launches and optimizing global market presence. 
                  My experience in leveraging AI, machine learning, and digital marketing strategies sets me apart as a trailblazer in product evolution. 
                  Recognized for transforming market insights into high-impact growth strategies, I have successfully driven product lifecycle success 
                  across global markets, including LATAM, Europe, Australia, and India.
                </SummaryText>
              </SummarySection>
            </HeroCard>
          </HeroSection>
        </HeroContentWrapper>

        <MainContentWrapper>
          <SidebarNav>
            <TabsList>
              <SidebarTabButton 
                active={activeSection === 'experience'} 
                onClick={() => scrollToSection('experience')}
              >
                <TabIcon>💼</TabIcon>
                <TabText>Work Experience</TabText>
              </SidebarTabButton>
              <SidebarTabButton 
                active={activeSection === 'skills'} 
                onClick={() => scrollToSection('skills')}
              >
                <TabIcon>💡</TabIcon>
                <TabText>Skills & Expertise</TabText>
              </SidebarTabButton>
              <SidebarTabButton 
                active={activeSection === 'education'} 
                onClick={() => scrollToSection('education')}
              >
                <TabIcon>🎓</TabIcon>
                <TabText>Education</TabText>
              </SidebarTabButton>
            </TabsList>
          </SidebarNav>

          <MainContent>
            <Section id="experience" ref={experienceRef}>
              <SectionHeader>Work Experience</SectionHeader>
              <Timeline>
                {experiences.map((exp, index) => (
                  <TimelineItem key={index} isFirst={index === 0}>
                    <ExperienceCard expanded={expandedCards.includes(index)} isFirst={index === 0}>
                      <CompanyRow>
                        <CompanyInfo>
                          <CompanyName>
                            {exp.company}
                            {exp.current && <CompanyBadge current>● Current</CompanyBadge>}
                          </CompanyName>
                          <JobTitle>{exp.title}</JobTitle>
                          <JobMeta>
                            <MetaItem>📅 {exp.duration}</MetaItem>
                            <MetaItem>📍 {exp.location}</MetaItem>
                          </JobMeta>
                        </CompanyInfo>
                      </CompanyRow>
                      <ExpandButton 
                        expanded={expandedCards.includes(index)}
                        onClick={() => toggleCard(index)}
                      >
                        {expandedCards.includes(index) ? 'Hide Details' : 'Show Achievements'}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </ExpandButton>
                      <AchievementsList expanded={expandedCards.includes(index)}>
                        {exp.achievements.map((achievement, i) => (
                          <Achievement key={i}>{achievement}</Achievement>
                        ))}
                      </AchievementsList>
                    </ExperienceCard>
                  </TimelineItem>
                ))}
              </Timeline>
            </Section>

            <Section id="skills" ref={skillsRef} bgAlt>
              <SectionHeader>Skills & Expertise</SectionHeader>
              <SkillsGrid>
                {skillCategories.map((category, index) => (
                  <SkillCategory key={index}>
                    <SkillCategoryHeader>
                      <CategoryIconWrapper>{category.icon}</CategoryIconWrapper>
                      <SkillCategoryTitle>{category.title}</SkillCategoryTitle>
                    </SkillCategoryHeader>
                    <SkillsList>
                      {category.skills.map((skill, i) => (
                        <SkillTag key={i} level={getSkillLevel(skill.level)}>
                          <LevelDot level={getSkillLevel(skill.level)} />
                          {skill.name}
                        </SkillTag>
                      ))}
                    </SkillsList>
                  </SkillCategory>
                ))}
              </SkillsGrid>
              
              <ToolsSection>
                <ToolsSectionTitle>Tools & Technologies</ToolsSectionTitle>
                <ToolsGrid>
                  {tools.map((tool, index) => (
                    <ToolBadge key={index}>
                      <ToolIcon>{tool.icon}</ToolIcon>
                      {tool.name}
                    </ToolBadge>
                  ))}
                </ToolsGrid>
              </ToolsSection>
            </Section>

            <Section id="education" ref={educationRef}>
              <SectionHeader>Education</SectionHeader>
              <EducationGrid>
                {education.map((edu, index) => (
                  <EducationCard key={index}>
                    <InstitutionName>{edu.institution}</InstitutionName>
                    <DegreeName>{edu.degree}</DegreeName>
                    <EducationMeta>
                      <MetaItem>📅 {edu.duration}</MetaItem>
                      <MetaItem>📍 {edu.location}</MetaItem>
                    </EducationMeta>
                    <SubjectsContainer>
                      <SubjectsLabel>Key Subjects</SubjectsLabel>
                      <SubjectTags>
                        {edu.subjects.map((subject, i) => (
                          <SubjectTag key={i}>{subject}</SubjectTag>
                        ))}
                      </SubjectTags>
                    </SubjectsContainer>
                  </EducationCard>
                ))}
              </EducationGrid>
            </Section>

            <DownloadSection>
              <DownloadButton href="/KushalHP_CV_Product.pdf" download>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download PDF Resume
              </DownloadButton>
            </DownloadSection>
          </MainContent>
        </MainContentWrapper>
      </ContentWrapper>

      <BackToTopButton visible={showBackToTop} onClick={scrollToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </BackToTopButton>
      </ResumeContainer>
    </>
  );
};

export default Resume;
