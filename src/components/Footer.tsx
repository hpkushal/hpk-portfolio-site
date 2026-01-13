import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 60px 20px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="footerGrain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23667eea" opacity="0.03"/><circle cx="75" cy="75" r="1" fill="%23764ba2" opacity="0.03"/><circle cx="50" cy="10" r="0.5" fill="%23667eea" opacity="0.02"/><circle cx="10" cy="60" r="0.5" fill="%23764ba2" opacity="0.02"/><circle cx="90" cy="40" r="0.5" fill="%23667eea" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23footerGrain)"/></svg>');
    pointer-events: none;
  }

  ${media.tablet} {
    padding: 50px 20px 30px;
  }

  ${media.mobile} {
    display: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  ${media.tablet} {
    flex-direction: column;
    gap: 30px;
    padding: 0;
  }
`;

const FooterNavSection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  ${media.tablet} {
    gap: 25px;
    justify-content: center;
  }

  ${media.mobile} {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #555;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #667eea;
    transform: translateY(-2px);

    &::after {
      width: 100%;
    }
  }

  ${media.mobile} {
    font-size: 14px;
  }
`;

const FooterLogo = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${media.tablet} {
    position: static;
    transform: none;
    order: -1;
  }
`;

const FooterLogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 80px;
    margin-top: -20px;
    margin-bottom: -20px;
    width: auto;
    transition: all 0.3s ease;
    
    &:hover {
      filter: brightness(1.1);
    }
  }

  ${media.mobile} {
    img {
      height: 40px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(102, 126, 234, 0.2) 20%, 
    rgba(118, 75, 162, 0.3) 50%, 
    rgba(102, 126, 234, 0.2) 80%, 
    transparent 100%);
  margin: 20px 0;
`;

const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;

  ${media.tablet} {
    padding: 0;
  }
`;

const FooterMessage = styled.p`
  font-size: 18px;
  color: #666;
  font-style: italic;
  font-weight: 400;
  line-height: 1.5;
  width: 100%;
  text-align: center;
  white-space: nowrap;

  ${media.tablet} {
    font-size: 16px;
    white-space: normal;
    text-align: center;
  }

  ${media.mobile} {
    font-size: 15px;
    line-height: 1.4;
  }
`;

const FooterSocialSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-top: 20px;

  ${media.tablet} {
    padding: 0;
    margin-top: 25px;
  }
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  ${media.tablet} {
    gap: 15px;
  }

  ${media.mobile} {
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #555;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

    i {
      transform: scale(1.1);
    }
  }

  i {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  ${media.mobile} {
    width: 40px;
    height: 40px;

    i {
      font-size: 16px;
    }
  }
`;

const Footer: React.FC = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    // If we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigation = (path: string) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    navigate(path);
  };

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterNav>
            <FooterNavSection>
              <FooterLink 
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/about');
                }}
              >
                About Me
              </FooterLink>
              <FooterLink 
                href="#writing"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('writing');
                }}
              >
                Writing
              </FooterLink>
              <FooterLink 
                href="#get-help"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('get-in-touch');
                }}
              >
                Get Help
              </FooterLink>
            </FooterNavSection>

            <FooterLogo>
              <FooterLogoLink 
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/');
                }}
              >
                <img src="/New KHP LOGO.png" alt="Kushal HP - Product Manager Portfolio Home" />
              </FooterLogoLink>
            </FooterLogo>

            <FooterNavSection>
              <FooterLink 
                href="/resume"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/resume');
                }}
              >
                Resume
              </FooterLink>
              <FooterLink 
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/projects');
                }}
              >
                Projects
              </FooterLink>
              <FooterLink 
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sitemap
              </FooterLink>
            </FooterNavSection>
          </FooterNav>

          <FooterDivider />

          <FooterBottom>
            <FooterMessage>
              Cooked from scratch in the Vibe Coding kitchen. No instant noodles, just spicy product magic.
            </FooterMessage>
          </FooterBottom>

          <FooterSocialSection>
            <FooterSocial>
              <SocialLink 
                href="https://linkedin.com/in/kushal-hp-09121995" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
              <SocialLink 
                href="https://github.com/hpkushal" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink 
                href="mailto:hp.kushal95@outlook.com" 
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </SocialLink>
              <SocialLink 
                href="tel:+19024033023" 
                aria-label="Phone"
              >
                <i className="fas fa-phone"></i>
              </SocialLink>
            </FooterSocial>
          </FooterSocialSection>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 