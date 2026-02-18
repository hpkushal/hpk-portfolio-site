import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles/GlobalStyles';

const FloatingNav = styled.nav<{ isHidden: boolean; isCompact: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) ${props => props.isHidden ? 'translateY(-100px)' : 'translateY(0)'};
  z-index: 1000;
  width: 90%;
  max-width: 1200px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isHidden ? 0 : 1};

  ${props => props.isCompact && `top: 10px;`}

  ${media.tablet} {
    width: 95%;
    top: 15px;
    ${props => props.isCompact && `top: 8px;`}
  }

  ${media.mobile} {
    display: none;
  }
`;

const NavContainer = styled.div<{ isCompact: boolean }>`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(20px);
  border-radius: 50px;
  padding: ${props => props.isCompact ? '8px 20px' : '12px 30px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  ${media.tablet} {
    padding: 10px 20px;
    flex-direction: column;
    gap: 15px;
    border-radius: 25px;
    ${props => props.isCompact && `
      padding: 8px 16px;
      gap: 10px;
      border-radius: 20px;
    `}
  }
`;

const NavSection = styled.div<{ isCompact: boolean }>`
  display: flex;
  gap: ${props => props.isCompact ? '15px' : '30px'};
  align-items: center;
  transition: gap 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${media.tablet} {
    gap: 20px;
    ${props => props.isCompact && `gap: 12px;`}
  }

  ${media.mobile} {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
    ${props => props.isCompact && `gap: 8px;`}
  }
`;

const RouterNavLink = styled(Link) <{ isCompact: boolean }>`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: ${props => props.isCompact ? '13px' : '14px'};
  transition: all 0.3s ease;
  position: relative;
  padding: ${props => props.isCompact ? '6px 12px' : '8px 16px'};
  border-radius: ${props => props.isCompact ? '16px' : '20px'};

  &:hover {
    color: #feca57;
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  ${media.mobile} {
    font-size: 12px;
    padding: 6px 12px;
    ${props => props.isCompact && `
      font-size: 11px;
      padding: 4px 8px;
    `}
  }
`;

const NavLogo = styled.div<{ isCompact: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${media.tablet} {
    position: static;
    transform: none;
    order: -1;
  }
`;

const Logo = styled(Link) <{ isCompact: boolean }>`
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
    height: ${props => props.isCompact ? '48px' : '80px'};
    margin-top: -20px;
    margin-bottom: -20px;
    width: auto;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0) invert(1);
    
    &:hover {
      filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(35deg);
    }
  }

  ${media.mobile} {
    img {
      height: ${props => props.isCompact ? '28px' : '32px'};
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;

const Navigation: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;

      if (scrollTop > 100) {
        if (scrollDirection === 'down') {
          setIsCompact(true);
          if (scrollPercentage >= 10) {
            setIsHidden(true);
          }
        } else if (scrollDirection === 'up') {
          setIsHidden(false);
          setTimeout(() => setIsCompact(false), 100);
        }
      } else {
        setIsHidden(false);
        setIsCompact(false);
      }

      setLastScrollTop(scrollTop);
    };

    let ticking = false;
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
    return () => window.removeEventListener('scroll', requestTick);
  }, [lastScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  return (
    <FloatingNav isHidden={isHidden} isCompact={isCompact}>
      <NavContainer isCompact={isCompact}>
        <NavSection isCompact={isCompact}>
          <RouterNavLink
            to="/about"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            About Me
          </RouterNavLink>
          <RouterNavLink
            to="/writings"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            Writings
          </RouterNavLink>
          <RouterNavLink
            to="/tools"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            Tools
          </RouterNavLink>
        </NavSection>

        <NavLogo isCompact={isCompact}>
          <Logo
            to="/"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            <img src="/New KHP LOGO.png" alt="Kushal HP - Product Manager Portfolio Home" />
          </Logo>
        </NavLogo>

        <NavSection isCompact={isCompact}>
          <RouterNavLink
            to="/resume"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            Resume
          </RouterNavLink>
          <RouterNavLink
            to="/projects"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            Projects
          </RouterNavLink>
          <RouterNavLink
            to="/resources"
            isCompact={isCompact}
            onClick={scrollToTop}
          >
            Resources
          </RouterNavLink>
        </NavSection>
      </NavContainer>
    </FloatingNav>
  );
};

export default Navigation; 