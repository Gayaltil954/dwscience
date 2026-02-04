'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-card border-4 border-accent rounded-3xl overflow-hidden animate-fade-in-up">
          {/* Left Side - Contact Info */}
          <div className="p-8 sm:p-12 flex flex-col justify-between" style={{ backgroundColor: '#FFCC07' }}>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: '#000000' }}>Contact Information</h3>
              <p className="mb-12 text-lg" style={{ color: 'rgba(0,0,0,0.7)' }}>We&apos;re here to support your learning journey.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 shrink-0 mt-1" style={{ color: '#000000' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#000000' }}>Phone</p>
                    <p style={{ color: 'rgba(0,0,0,0.7)' }}>071 694 5070</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 shrink-0 mt-1" style={{ color: '#000000' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#000000' }}>Email</p>
                    <p style={{ color: 'rgba(0,0,0,0.7)' }}>diliniwerrakkody81@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 shrink-0 mt-1" style={{ color: '#000000' }} />
                  <div>
                    <p className="font-semibold" style={{ color: '#000000' }}>Location</p>
                    <p style={{ color: 'rgba(0,0,0,0.7)' }}>132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#000000' }}>
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#000000' }}>
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(0,0,0,0.2)', color: '#000000' }}>
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 sm:p-12" style={{ backgroundColor: '#ffffff' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>First Name</label>
                  <input
                    type="text"
                    placeholder="Sahan"
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ borderColor: '#cccccc', color: '#000000' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Perera"
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ borderColor: '#cccccc', color: '#000000' }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>Email</label>
                  <input
                    type="email"
                    placeholder="sahan@example.com"
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ borderColor: '#cccccc', color: '#000000' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="077 123 4569"
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ borderColor: '#cccccc', color: '#000000' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4" style={{ color: '#000000' }}>Select Subject?</label>
                <div className="flex flex-wrap gap-4">
                  {['Course Inquiry', 'Enrollment Support', 'Academic Guidance', 'Other'].map((subject) => (
                    <label key={subject} className="flex items-center gap-2 cursor-pointer" style={{ color: '#000000' }}>
                      <input type="radio" name="subject" value={subject} className="w-4 h-4" />
                      <span className="text-sm">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-colors resize-none"
                  style={{ borderColor: '#cccccc', color: '#000000' }}
                />
              </div>

              <Button className="px-8 py-3 font-bold rounded-lg w-full md:w-auto border-2" style={{ backgroundColor: '#FFCC07', color: '#000000', borderColor: '#FFCC07' }}>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
