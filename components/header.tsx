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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Teacher' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/98 shadow-xl' : 'bg-background/95 shadow-lg'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative">
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
              dwscience.lk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-medium text-sm transition-all duration-300 group"
                style={{ color: '#FFCC07' }}
              >
                <span className="relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(255,204,7,0.8)] transition-all duration-300">
                  {link.label}
                </span>
                <div className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="https://wa.me/94716945070" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-accent/50"
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
              className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-accent/50"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link 
              href="https://youtube.com/youryoutubechannel" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-accent/50"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
              <Link
                key={link.href}
                href={link.href}
                className="block font-medium px-4 py-3 rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:translate-x-2"
                style={{ 
                  color: '#FFCC07',
                  animationDelay: `${index * 50}ms`
                }}
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="flex gap-3 px-4 pt-4 border-t border-accent/20 mt-4">
              <Link 
                href="https://wa.me/94716945070" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all duration-300"
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
                className="flex-1 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link 
                href="https://youtube.com/youryoutubechannel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 h-10 rounded-lg flex items-center justify-center bg-accent/10 text-accent hover:bg-accent hover:text-black transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
