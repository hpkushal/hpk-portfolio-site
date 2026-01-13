import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { media } from '../styles/GlobalStyles';

const MobileNavContainer = styled.nav<{ isHidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(20px);
  padding: 15px 20px;
  transform: ${props => props.isHidden ? 'translateY(-100%)' : 'translateY(0)'};
  transition: transform 0.3s ease;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  display: none;

  ${media.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 32px;
    width: auto;
    filter: brightness(0) invert(1);
    transition: all 0.3s ease;
    
    &:hover {
      filter: brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(35deg);
    }
  }
`;

const FloatingHamburgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 1001;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  touch-action: manipulation;

  ${media.mobile} {
    display: flex;
  }

  &:hover, &:active {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }

  span {
    display: block;
    width: 20px;
    height: 2px;
    background: white;
    margin: 2px 0;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'rotate(0)'};
    }
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 280px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  transform: ${props => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: none;

  ${media.mobile} {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 30px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #667eea;
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MobileMenuItem = styled.li`
  width: 100%;
`;

const MobileMenuLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-align: left;
  touch-action: manipulation;

  &:hover, &:active {
    background: rgba(255, 255, 255, 0.15);
    color: #feca57;
    transform: translateX(5px);
  }
`;

const MobileRouterLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-align: left;
  touch-action: manipulation;

  &:hover, &:active {
    background: rgba(255, 255, 255, 0.15);
    color: #feca57;
    transform: translateX(5px);
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 999;
  display: none;

  ${media.mobile} {
    display: block;
  }
`;

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';

      if (scrollTop > 100) {
        if (scrollDirection === 'down' && !isOpen) {
          setIsHidden(true);
        } else if (scrollDirection === 'up') {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
    closeMenu();
  };

  return (
    <>
      <MobileNavContainer isHidden={isHidden}>
        <MobileLogo to="/" onClick={scrollToTop}>
          <img src="/New KHP LOGO.png" alt="KHP Logo" />
        </MobileLogo>
      </MobileNavContainer>

      <FloatingHamburgerButton isOpen={isOpen} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </FloatingHamburgerButton>

      <Overlay isOpen={isOpen} onClick={closeMenu} />

      <MobileMenu isOpen={isOpen}>
        <MobileMenuList>
          <MobileMenuItem>
            <MobileRouterLink to="/about" onClick={scrollToTop}>
              About Me
            </MobileRouterLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileRouterLink to="/writings" onClick={scrollToTop}>
              Writings
            </MobileRouterLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileRouterLink to="/tools" onClick={scrollToTop}>
              Tools
            </MobileRouterLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink
              href="#get-help"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  window.location.href = '/#get-in-touch';
                } else {
                  scrollToSection('get-in-touch');
                }
              }}
            >
              Get Help
            </MobileMenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileRouterLink to="/resume" onClick={scrollToTop}>
              Resume
            </MobileRouterLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileRouterLink to="/projects" onClick={scrollToTop}>
              Projects
            </MobileRouterLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileRouterLink to="/resources" onClick={scrollToTop}>
              Resources
            </MobileRouterLink>
          </MobileMenuItem>
        </MobileMenuList>
      </MobileMenu>
    </>
  );
};

export default MobileNavigation; 