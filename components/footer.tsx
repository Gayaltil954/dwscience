'use client';

import { Facebook, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-full md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold" style={{ backgroundColor: '#FFCC07', color: '#000000' }}>
                DW
              </div>
              <span className="font-bold text-lg" style={{ color: '#000000' }}>DW Science</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#333333' }}>
              Excellence in science education for grades 6-11.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#000000' }}>Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Gallery', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:opacity-70 transition-opacity text-sm" style={{ color: '#333333' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#000000' }}>Resources</h4>
            <ul className="space-y-2">
              {['Curriculum', 'Study Materials', 'Class Schedule', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:opacity-70 transition-opacity text-sm" style={{ color: '#333333' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4" style={{ color: '#000000' }}>Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: '#FFCC07' }} />
                <a href="tel:0716945070" className="hover:opacity-70 transition-opacity text-sm" style={{ color: '#333333' }}>
                  071 694 5070
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#FFCC07' }} />
                <a
                  href="mailto:diliniwerrakkody81@gmail.com"
                  className="hover:opacity-70 transition-opacity text-sm"
                  style={{ color: '#333333' }}
                >
                  diliniwerrakkody81@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8" style={{ borderTop: '1px solid #E5E5E5' }}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm" style={{ color: '#666666' }}>
            &copy; {currentYear} DW Science. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#F0F0F0', color: '#000000' }}
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#F0F0F0', color: '#000000' }}
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ backgroundColor: '#F0F0F0', color: '#000000' }}
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
