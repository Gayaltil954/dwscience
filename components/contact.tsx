'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-card border-4 border-accent rounded-3xl overflow-hidden animate-fade-in-up">
          {/* Left Side - Contact Info */}
          <div className="bg-primary p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-foreground mb-3">Contact Information</h3>
              <p className="text-muted-foreground mb-12 text-lg">We&apos;re here to support your learning journey.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">071 694 5070</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">diliniwerrakkody81@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">132 Dartmouth Street Boston,<br />Massachusetts 02156 United States</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="bg-accent/20 hover:bg-accent/30 text-accent rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-accent/20 hover:bg-accent/30 text-accent rounded-full">
                <Youtube className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="bg-accent/20 hover:bg-accent/30 text-accent rounded-full">
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 sm:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 012 3456 789"
                    className="w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">Select Subject?</label>
                <div className="flex flex-wrap gap-4">
                  {['Course Inquiry', 'Enrollment Support', 'Academic Guidance', 'Other'].map((subject) => (
                    <label key={subject} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="subject" value={subject} className="w-4 h-4" />
                      <span className="text-sm text-foreground">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full px-4 py-3 border-b-2 border-border bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <Button className="bg-primary border-2 border-primary text-foreground hover:bg-primary/90 px-8 py-3 font-bold rounded-lg w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
