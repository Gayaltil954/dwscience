'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, MessageCircle, Mail, Phone, ChevronRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Class Centers', href: '#class-centers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-10 sm:py-12 md:py-16 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="DW Science Logo"
                  width={40}
                  height={40}
                  className="object-contain sm:w-12 sm:h-12"
                />
              </div>
              <span className="font-bold text-lg sm:text-xl" style={{ color: '#000000' }}>dwscience.com</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed mb-3 sm:mb-4" style={{ color: '#555555' }}>
              Excellence in science education for grades 6-11.
            </p>
            <p className="text-sm font-semibold" style={{ color: '#FFCC07' }}>
              Learn • Grow • Excel
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 relative inline-block" style={{ color: '#000000' }}>
              Quick Links
              <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-accent mt-2"></div>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1.5 sm:gap-2 hover:translate-x-2 transition-all duration-300 text-sm sm:text-base" 
                    style={{ color: '#555555' }}
                  >
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#FFCC07' }} />
                    <span className="group-hover:text-accent transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-full sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 relative inline-block" style={{ color: '#000000' }}>
              Get In Touch
              <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-accent mt-2"></div>
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="tel:0716945070" 
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="p-1.5 sm:p-2 rounded-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: '#FFCC07' }}>
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#000000' }} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-semibold mb-0.5 sm:mb-1" style={{ color: '#888888' }}>PHONE</p>
                  <p className="font-medium text-sm sm:text-base" style={{ color: '#333333' }}>071 694 5070</p>
                </div>
              </a>
              <a
                href="mailto:diliniwerrakkody81@gmail.com"
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="p-1.5 sm:p-2 rounded-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: '#FFCC07' }}>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#000000' }} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-semibold mb-0.5 sm:mb-1" style={{ color: '#888888' }}>EMAIL</p>
                  <p className="font-medium break-all text-xs sm:text-sm md:text-base" style={{ color: '#333333' }}>diliniweerakkodi91@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 relative inline-block" style={{ color: '#000000' }}>
              Follow Us
              <div className="absolute bottom-0 left-0 w-10 sm:w-12 h-0.5 sm:h-1 bg-accent mt-2"></div>
            </h4>
            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-lg touch-manipulation"
                style={{ backgroundColor: '#FFCC07', color: '#000000' }}
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/94716945070"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-lg touch-manipulation"
                style={{ backgroundColor: '#FFCC07', color: '#000000' }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:diliniwerrakkody81@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-lg touch-manipulation"
                style={{ backgroundColor: '#FFCC07', color: '#000000' }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#555555' }}>
              Join our community for updates, tips, and educational content!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 sm:my-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full" style={{ borderTop: '1px solid #E5E5E5' }}></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 text-xs font-semibold" style={{ backgroundColor: '#FFFFFF', color: '#FFCC07' }}>
              ★ ★ ★
            </span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center">
          <p className="text-sm" style={{ color: '#888888' }}>
            &copy; {currentYear} <span className="font-semibold" style={{ color: '#000000' }}>dwscience.com</span> - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
