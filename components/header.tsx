'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-accent/20 shadow-lg" style={{ 
      /*boxShadow: '0 0 20px rgba(255, 204, 7, 0.3), 0 0 40px rgba(255, 204, 7, 0.1), inset 0 0 20px rgba(255, 204, 7, 0.05)'*/
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center relative overflow-hidden">
              <Image
                src="/logo.png"
                alt="DW Science Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-foreground font-bold text-lg tracking-wide hidden sm:inline">
              dwscience.lk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="font-medium hover:opacity-80 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,204,7,0.8)]"
              style={{ color: '#FFCC07', textShadow: '0 0 10px rgba(255, 204, 7, 0.5)' }}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,204,7,0.8)]"
              style={{ color: '#FFCC07', textShadow: '0 0 10px rgba(255, 204, 7, 0.5)' }}
            >
              About Teacher
            </Link>
            <Link
              href="#gallery"
              className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,204,7,0.8)]"
              style={{ color: '#FFCC07', textShadow: '0 0 10px rgba(255, 204, 7, 0.5)' }}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="hover:opacity-80 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_8px_rgba(255,204,7,0.8)]"
              style={{ color: '#FFCC07', textShadow: '0 0 10px rgba(255, 204, 7, 0.5)' }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="https://wa.me/94716945070" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,204,7,0.9)]" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 204, 7, 0.4))' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-.31.08-1.26.33.33-1.22.09-.34-.2-.32a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01z"/>
              </svg>
            </Link>
            <Link href="https://facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,204,7,0.9)]" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 204, 7, 0.4))' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link href="https://youtube.com/youryoutubechannel" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,204,7,0.9)]" style={{ filter: 'drop-shadow(0 0 6px rgba(255, 204, 7, 0.4))' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link
              href="#home"
              className="block font-medium hover:opacity-80 transition-colors py-2"
              style={{ color: '#FFCC07' }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block hover:opacity-80 transition-colors py-2"
              style={{ color: '#FFCC07' }}
              onClick={() => setIsOpen(false)}
            >
              About Teacher
            </Link>
            <Link
              href="#gallery"
              className="block hover:opacity-80 transition-colors py-2"
              style={{ color: '#FFCC07' }}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="block hover:opacity-80 transition-colors py-2"
              style={{ color: '#FFCC07' }}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
