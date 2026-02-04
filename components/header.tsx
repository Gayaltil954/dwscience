'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background">
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
              className="font-medium hover:opacity-80 transition-colors"
              style={{ color: '#FFCC07' }}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="hover:opacity-80 transition-colors"
              style={{ color: '#FFCC07' }}
            >
              About Us
            </Link>
            <Link
              href="#gallery"
              className="hover:opacity-80 transition-colors"
              style={{ color: '#FFCC07' }}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="hover:opacity-80 transition-colors"
              style={{ color: '#FFCC07' }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 5.411 4.406 9.857 9.832 9.857h.005c5.426 0 9.858-4.446 9.858-9.857 0-5.411-4.406-9.798-9.945-9.798Z" />
              </svg>
            </Link>
            <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link href="#" className="text-accent hover:text-accent/80 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
              About Us
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
