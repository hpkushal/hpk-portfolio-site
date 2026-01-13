import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { media } from '../styles/GlobalStyles';
import SEO from './SEO';

const AboutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 100px 0 40px;
  position: relative;

  ${media.tablet} {
    padding: 80px 0 30px;
  }

  ${media.mobile} {
    padding: 80px 0 20px;
  }
`;

// Hero section with paragraph and Lottie on same level
const HeroSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: flex-start;
  margin-bottom: 60px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 40px;
  }

  ${media.mobile} {
    padding: 0 15px;
    gap: 30px;
    margin-bottom: 30px;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.tablet} {
    gap: 30px;
  }

  ${media.mobile} {
    gap: 25px;
  }
`;

const IntroSection = styled.div`
  ${media.tablet} {
    text-align: center;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeroLottie = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  ${media.tablet} {
    margin-top: 30px;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 30px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${media.tablet} {
    font-size: 2.8rem;
  }

  ${media.mobile} {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const IntroText = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 1.2rem;
  }

  ${media.mobile} {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;

const DescriptionText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 1.1rem;
  }

  ${media.mobile} {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

const MissionText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #777;
  margin-bottom: 30px;
  font-style: italic;

  ${media.tablet} {
    font-size: 1rem;
  }

  ${media.mobile} {
    font-size: 0.95rem;
    margin-bottom: 20px;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  ${media.tablet} {
    margin-top: 30px;
  }

  ${media.mobile} {
    margin-top: 25px;
  }
`;

const ProfileImage = styled.img`
  width: 288px;
  height: 288px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 4px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  ${media.tablet} {
    width: 264px;
    height: 264px;
  }

  ${media.mobile} {
    width: 216px;
    height: 216px;
    border: 3px solid rgba(255, 255, 255, 0.8);
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LottieContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  margin: 0 auto;

  ${media.tablet} {
    width: 350px;
    height: 350px;
  }

  ${media.mobile} {
    width: 280px;
    height: 280px;
  }
`;

// Chat Interface
const ChatContainer = styled.div`
  max-width: 500px;
  
  ${media.tablet} {
    max-width: 800px;
    margin: 40px auto 0;
    padding: 0 20px;
  }

  ${media.mobile} {
    padding: 0 15px;
    margin: 30px auto 0;
  }
`;

const ChatHeader = styled.div`
  background: white;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #f0f0f0;

  ${media.mobile} {
    padding: 15px;
    border-radius: 16px 16px 0 0;
  }
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;

  ${media.mobile} {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const ChatInfo = styled.div`
  flex: 1;
`;

const ChatName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;

  ${media.mobile} {
    font-size: 1.1rem;
  }
`;

const ChatStatus = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #28a745;
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #28a745;
  }

  ${media.mobile} {
    font-size: 0.8rem;
  }
`;

const ChatMessages = styled.div`
  background: white;
  min-height: 600px;
  max-height: 600px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  scroll-behavior: smooth;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a6fd8, #6a4190);
  }

  ${media.mobile} {
    padding: 20px;
    min-height: 500px;
    max-height: 500px;
    gap: 15px;
  }
`;

const Message = styled(motion.div)<{ isUser?: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  justify-content: ${props => props.isUser ? 'flex-end' : 'flex-start'};
`;

const MessageBubble = styled.div<{ isUser?: boolean }>`
  max-width: 70%;
  padding: 15px 20px;
  border-radius: ${props => props.isUser 
    ? '20px 20px 5px 20px' 
    : '20px 20px 20px 5px'
  };
  background: ${props => props.isUser 
    ? 'linear-gradient(135deg, #667eea, #764ba2)' 
    : '#f8f9fa'
  };
  color: ${props => props.isUser ? 'white' : '#333'};
  font-size: 1rem;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  ${media.mobile} {
    max-width: 85%;
    padding: 12px 16px;
    font-size: 0.9rem;
  }
`;

const MessageTime = styled.span`
  font-size: 0.75rem;
  color: #999;
  margin-top: 5px;
  align-self: flex-end;

  ${media.mobile} {
    font-size: 0.7rem;
  }
`;

const TypingIndicator = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: #f8f9fa;
  border-radius: 20px 20px 20px 5px;
  max-width: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const TypingDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #999;
`;

const QuestionPrompts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  align-items: flex-end;

  ${media.mobile} {
    gap: 8px;
  }
`;

const QuestionButton = styled(motion.button)`
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 20px;
  padding: 12px 20px;
  font-size: 0.95rem;
  color: #667eea;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  max-width: 70%;

  &:hover {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${media.mobile} {
    padding: 10px 16px;
    font-size: 0.85rem;
    max-width: 85%;
  }
`;

const ChatFooter = styled.div`
  background: white;
  border-radius: 0 0 20px 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #f0f0f0;

  ${media.mobile} {
    padding: 15px;
    border-radius: 0 0 16px 16px;
  }
`;

const ConnectButton = styled(motion.a)`
  flex: 1;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 15px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  ${media.mobile} {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
`;

const StartButton = styled(motion.button)`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  ${media.mobile} {
    padding: 12px 25px;
    font-size: 0.9rem;
  }
`;

const AboutMe: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [conversationMessages, setConversationMessages] = useState<Array<{
    type: 'user' | 'kushal';
    text: string;
    time: string;
  }>>([]);
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  const conversation = [
    {
      kushalResponse: "Hi! I'm Kushal Horabylu Parameshwara: a builder at heart, a strategist by trade, and a big believer in turning constraints into creativity.",
      nextQuestions: [
        "That's interesting! What's your background?",
        "How did you get into product management?"
      ]
    },
    {
      kushalResponse: "I've always been obsessed with systems: how they work, where they break, and what makes them scale. That mindset pulled me into product management.",
      nextQuestions: [
        "What do you do currently?",
        "Tell me about your current role"
      ]
    },
    {
      kushalResponse: "Today, I work as a Digital Product Strategist at Resulta, leading initiatives that blend AI, martech, and performance-driven product thinking.",
      nextQuestions: [
        "What drives your approach to product work?",
        "What's your philosophy on building products?",
        "I'd love to connect and learn more!"
      ]
    },
    {
      kushalResponse: "I work at the intersection of product, technology, and AI to bring ambitious ideas to life: faster, sharper, and always with an eye on growth.",
      nextQuestions: [
        "What do you believe about the future of product development?",
        "What are your core beliefs about building products?",
        "This is fascinating! Can we connect?"
      ]
    },
    {
      kushalResponse: "AI won't replace builders, it will supercharge them. Speed is strategy. A rough idea launched fast > a perfect idea trapped in planning. Being technical makes you dangerous (in a good way).",
      nextQuestions: [
        "What do you do outside of work?",
        "Tell me about your interests beyond product management",
        "I'd love to chat more about this!"
      ]
    },
    {
      kushalResponse: "I geek out on game design and behavioral psychology, read business case studies, and mentor junior PMs to think bigger and ship sooner.",
      nextQuestions: [
        "This sounds amazing! How can we connect?",
        "I'd love to learn more. Can we chat?"
      ]
    },
    {
      kushalResponse: "Absolutely! I'd love to connect and chat about product, AI, or anything that's got you excited. I hold regular office hours where we can dive deep into whatever you're working on.",
      nextQuestions: []
    }
  ];

  const handleQuestionClick = (question: string, questionIndex: number) => {
    // Add user message to conversation
    const userMessage = {
      type: 'user' as const,
      text: question,
      time: getCurrentTime()
    };
    
    setConversationMessages(prev => [...prev, userMessage]);
    
    // Show typing indicator
    setShowTyping(true);
    
    // After typing delay, show Kushal's response and move to next step
    setTimeout(() => {
      const kushalMessage = {
        type: 'kushal' as const,
        text: conversation[currentStep].kushalResponse,
        time: getCurrentTime()
      };
      
      setConversationMessages(prev => [...prev, kushalMessage]);
      setShowTyping(false);
      setCurrentStep(prev => prev + 1);
    }, 1500);
  };

  const handleGetInTouch = () => {
    const userMessage = {
      type: 'user' as const,
      text: "I'd love to connect and learn more!",
      time: getCurrentTime()
    };
    
    setConversationMessages(prev => [...prev, userMessage]);
    
    // Show typing indicator
    setShowTyping(true);
    
    // After typing delay, show final response
    setTimeout(() => {
      const kushalMessage = {
        type: 'kushal' as const,
        text: "Perfect! I'd love to connect too. I hold regular office hours where we can dive deep into product strategy, AI, or whatever you're working on. Let's book some time!",
        time: getCurrentTime()
      };
      
      setConversationMessages(prev => [...prev, kushalMessage]);
      setShowTyping(false);
      setCurrentStep(conversation.length); // End conversation
    }, 1500);
  };

  const startConversation = () => {
    setConversationStarted(true);
    
    // Add initial messages
    const initialUserMessage = {
      type: 'user' as const,
      text: "Hey! Tell me about yourself 👋",
      time: getCurrentTime()
    };
    
    setConversationMessages([initialUserMessage]);
    
    // Show typing indicator then first response
    setShowTyping(true);
    setTimeout(() => {
      const firstKushalMessage = {
        type: 'kushal' as const,
        text: conversation[0].kushalResponse,
        time: getCurrentTime()
      };
      
      setConversationMessages(prev => [...prev, firstKushalMessage]);
      setShowTyping(false);
      setCurrentStep(1);
    }, 1500);
  };

  const scrollToOfficeHours = () => {
    window.location.href = '/#get-in-touch';
  };

  const getCurrentTime = () => {
    const now = new Date();
    const baseTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30);
    const stepTime = new Date(baseTime.getTime() + (conversationMessages.length + currentStep) * 60000);
    return stepTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  };

  const showGetInTouchOption = currentStep >= 3 && currentStep < conversation.length;

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationMessages, showTyping]);

  return (
    <>
      <SEO
        title="About Me"
        description="Meet Kushal HP - Product Manager with 6+ years of experience in Product Strategy, Marketing, and Delivery. Based in Nova Scotia, Canada. Learn about my journey, skills, and what drives me."
        url="/about"
        type="profile"
      />
      <AboutContainer>
        {/* Hero Section */}
        <HeroSection>
        <LeftContent>
          <IntroSection>
            <MainTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </MainTitle>
            
            <DescriptionText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I'm Kushal Horabylu Parameshwara. Yes, my name could pass for a secure API key, but I use it to unlock fast, AI-driven product development every day.
            </DescriptionText>

            <MissionText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Want to know what makes me tick or how I think about building products?<br />
              Use the chat, I'm just a few keystrokes away from a good convo.
            </MissionText>
          </IntroSection>

          <ProfileImageContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProfileImage 
              src="/images/kushal-profile.jpg" 
              alt="Kushal Horabylu Parameshwara - Product Manager professional headshot"
              loading="lazy"
              width={288}
              height={288}
            />
          </ProfileImageContainer>
        </LeftContent>

        {/* Chat Interface */}
        <ChatContainer>
          <ChatHeader>
            <Avatar>KP</Avatar>
            <ChatInfo>
              <ChatName>Kushal Parameshwara</ChatName>
              <ChatStatus>Online</ChatStatus>
            </ChatInfo>
          </ChatHeader>

          <ChatMessages ref={chatMessagesRef}>
            {!conversationStarted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', gap: '20px' }}>
                <p style={{ color: '#666', fontSize: '1.1rem', textAlign: 'center' }}>
                  👋 Ready to learn more about me? Let's start chatting!
                </p>
                <StartButton
                  onClick={startConversation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Conversation
                </StartButton>
              </div>
            ) : (
              <>
                {/* Show all conversation messages */}
                {conversationMessages.map((message, index) => (
                  <Message
                    key={index}
                    isUser={message.type === 'user'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {message.type === 'user' && (
                      <MessageTime>{message.time}</MessageTime>
                    )}
                    <MessageBubble isUser={message.type === 'user'}>
                      {message.text}
                    </MessageBubble>
                    {message.type === 'kushal' && (
                      <MessageTime>{message.time}</MessageTime>
                    )}
                  </Message>
                ))}

                {/* Typing indicator */}
                <AnimatePresence>
                  {showTyping && (
                    <Message>
                      <TypingIndicator
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <TypingDot
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <TypingDot
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <TypingDot
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </TypingIndicator>
                    </Message>
                  )}
                </AnimatePresence>

                {/* Question prompts */}
                {currentStep < conversation.length && 
                 currentStep > 0 && 
                 !showTyping && (
                  <QuestionPrompts>
                    {conversation[currentStep - 1].nextQuestions.map((question, index) => {
                      // Check if this is a "get in touch" option
                      const isGetInTouchOption = question.toLowerCase().includes('connect') || 
                                              question.toLowerCase().includes('chat') ||
                                              question.toLowerCase().includes('learn more');
                      
                      return (
                        <QuestionButton
                          key={index}
                          onClick={() => {
                            if (isGetInTouchOption && showGetInTouchOption) {
                              handleGetInTouch();
                            } else {
                              handleQuestionClick(question, index);
                            }
                          }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: isGetInTouchOption && showGetInTouchOption 
                              ? 'linear-gradient(135deg, #28a745, #20c997)' 
                              : 'rgba(102, 126, 234, 0.1)',
                            color: isGetInTouchOption && showGetInTouchOption ? 'white' : '#667eea',
                            border: isGetInTouchOption && showGetInTouchOption 
                              ? '1px solid rgba(40, 167, 69, 0.3)' 
                              : '1px solid rgba(102, 126, 234, 0.3)'
                          }}
                        >
                          {isGetInTouchOption && showGetInTouchOption ? '🤝 ' + question : question}
                        </QuestionButton>
                      );
                    })}
                  </QuestionPrompts>
                )}
              </>
            )}
          </ChatMessages>

          <ChatFooter>
            {currentStep >= conversation.length ? (
              <ConnectButton
                href="#get-in-touch"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToOfficeHours();
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                📅 Book Office Hours with Me
              </ConnectButton>
            ) : (
              <div style={{ 
                flex: 1, 
                textAlign: 'center', 
                color: '#999', 
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                {conversationStarted ? 'Click a question above to continue...' : 'Start the conversation to learn more about me!'}
              </div>
            )}
          </ChatFooter>
        </ChatContainer>
        </HeroSection>
      </AboutContainer>
    </>
  );
};

export default AboutMe; 