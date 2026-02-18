'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#class-centers', label: 'Class Centers' },
    { href: '#about', label: 'About Teacher' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/98 shadow-xl' : 'bg-background/95 shadow-lg'
      } backdrop-blur-md`}
    >
      <style>{`
        @keyframes underlineExpand {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 75%;
            opacity: 1;
          }
        }

        @keyframes shimmerUnderline {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            #FFCC07, 
            #FFA500,
            #FFCC07, 
            transparent
          );
          background-size: 200% 100%;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
        }

        .nav-link:hover::before {
          animation: underlineExpand 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.8), 
            transparent
          );
          transition: left 0.6s ease;
        }

        .nav-link:hover::after {
          animation: shimmerUnderline 1.2s ease infinite;
        }

        .nav-link-text {
          transition: all 0.3s ease;
        }

        .nav-link:hover .nav-link-text {
          transform: translateY(-2px);
          text-shadow: 0 0 15px rgba(255, 204, 7, 0.6),
                       0 0 30px rgba(255, 204, 7, 0.4);
        }

        .mobile-nav-link {
          position: relative;
          overflow: hidden;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFCC07, #FFA500);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav-link:hover::before {
          width: 100%;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <a href="#home" onClick={(e) => smoothScrollTo(e, '#home')} className="flex items-center gap-3 group relative cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="dwscience Logo"
                  width={scrolled ? 36 : 40}
                  height={scrolled ? 36 : 40}
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
            <span className="text-foreground font-bold text-lg tracking-wide hidden sm:inline group-hover:text-accent transition-colors duration-300">
              dwscience.com
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                className="nav-link relative px-4 py-2 font-medium text-sm transition-all duration-300"
                style={{ color: '#FFCC07' }}
              >
                <span className="nav-link-text relative z-10">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="https://wa.me/94716945070" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-white hover:text-[#FFCC07] transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-.31.08-1.26.33.33-1.22.09-.34-.2-.32a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
              </svg>
            </Link>
            <Link 
              href="https://facebook.com/yourfacebookpage" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-white hover:text-[#FFCC07] transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link 
              href="mailto:diliniwerrakkody81@gmail.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-white hover:text-[#FFCC07] transition-all duration-300 hover:scale-110 hover:rotate-12"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-accent hover:bg-accent/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="pb-4 pt-2 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                className="mobile-nav-link block font-medium px-4 py-3 rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:translate-x-2"
                style={{ 
                  color: '#FFCC07',
                  animationDelay: `${index * 50}ms`
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {link.label}
                </span>
              </a>
            ))}
            <div className="flex gap-3 px-4 pt-4 border-t border-accent/20 mt-4">
              <Link 
                href="https://wa.me/94716945070" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-white hover:text-[#FFCC07] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-.31.08-1.26.33.33-1.22.09-.34-.2-.32a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
                </svg>
              </Link>
              <Link 
                href="https://facebook.com/yourfacebookpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-white hover:text-[#FFCC07] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link 
                href="mailto:diliniwerrakkody81@gmail.com" 
                className="flex-1 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-white hover:text-[#FFCC07] transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}