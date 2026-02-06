"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 bg-card rounded-3xl overflow-hidden animate-fade-in-up shadow-2xl hover:shadow-[0_0_60px_rgba(255,204,7,0.3)] transition-shadow duration-500">
          {/* Left Side - Contact Info */}
          <div
            className="p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden"
            style={{ backgroundColor: "#FFCC07" }}
          >
            {/* Animated background gradient */}
            <div
              className="absolute inset-0 opacity-20 animate-pulse"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%)",
              }}
            ></div>

            <div className="relative z-10">
              <h3
                className="text-3xl sm:text-4xl font-black mb-3 animate-fade-in-up"
                style={{
                  color: "#000000",
                  animationDelay: "100ms",
                  animationFillMode: "both",
                }}
              >
                Contact Information
              </h3>
              <p
                className="mb-12 text-lg animate-fade-in-up"
                style={{
                  color: "rgba(0,0,0,0.7)",
                  animationDelay: "200ms",
                  animationFillMode: "both",
                }}
              >
                We&apos;re here to support your learning journey.
              </p>

              <div className="space-y-8">
                <a
                  href="tel:+94716945070"
                  className="flex items-start gap-4 animate-fade-in-up hover:translate-x-2 transition-transform duration-300 group"
                  style={{ animationDelay: "300ms", animationFillMode: "both" }}
                >
                  <div className="p-2 rounded-lg bg-black/10 group-hover:bg-black/20 transition-colors">
                    <Phone
                      className="w-6 h-6 shrink-0"
                      style={{ color: "#000000" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#000000" }}>
                      Phone
                    </p>
                    <p style={{ color: "rgba(0,0,0,0.7)" }}>071 694 5070</p>
                  </div>
                </a>

                <div
                  className="flex items-start gap-4 animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: "400ms", animationFillMode: "both" }}
                >
                  <a
                    href="mailto:diliniweerakkodi91@gmail.com"
                    className="flex items-start gap-4 animate-fade-in-up hover:translate-x-2 transition-transform duration-300 group"
                    style={{
                      animationDelay: "400ms",
                      animationFillMode: "both",
                    }}
                  >
                    <div className="p-2 rounded-lg bg-black/10 group-hover:bg-black/20 transition-colors">
                      <Mail
                        className="w-6 h-6 shrink-0"
                        style={{ color: "#000000" }}
                      />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: "#000000" }}>
                        Email
                      </p>
                      <p
                        className="break-all"
                        style={{ color: "rgba(0,0,0,0.7)" }}
                      >
                        diliniweerakkodi91@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                <div
                  className="flex items-start gap-4 animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: "500ms", animationFillMode: "both" }}
                >
                  <div className="p-2 rounded-lg bg-black/10 hover:bg-black/20 transition-colors">
                    <MapPin
                      className="w-6 h-6 shrink-0"
                      style={{ color: "#000000" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#000000" }}>
                      Location
                    </p>
                    <p style={{ color: "rgba(0,0,0,0.7)" }}>
                      132 Dartmouth Street Boston,
                      <br />
                      Massachusetts 02156 United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex gap-4 mt-8 relative z-10 animate-fade-in-up"
              style={{ animationDelay: "600ms", animationFillMode: "both" }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#000000" }}
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#000000" }}
              >
                <Youtube className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300"
                style={{ backgroundColor: "rgba(0,0,0,0.2)", color: "#000000" }}
              >
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 sm:p-12" style={{ backgroundColor: "#ffffff" }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "200ms", animationFillMode: "both" }}
                >
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#000000" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sahan"
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-all duration-300 hover:border-accent"
                    style={{
                      borderColor:
                        focusedField === "firstName" ? "#FFCC07" : "#cccccc",
                      color: "#000000",
                      transform:
                        focusedField === "firstName"
                          ? "translateY(-2px)"
                          : "none",
                    }}
                  />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "250ms", animationFillMode: "both" }}
                >
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#000000" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Perera"
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-all duration-300 hover:border-accent"
                    style={{
                      borderColor:
                        focusedField === "lastName" ? "#FFCC07" : "#cccccc",
                      color: "#000000",
                      transform:
                        focusedField === "lastName"
                          ? "translateY(-2px)"
                          : "none",
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "300ms", animationFillMode: "both" }}
                >
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#000000" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="sahan@example.com"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-all duration-300 hover:border-accent"
                    style={{
                      borderColor:
                        focusedField === "email" ? "#FFCC07" : "#cccccc",
                      color: "#000000",
                      transform:
                        focusedField === "email" ? "translateY(-2px)" : "none",
                    }}
                  />
                </div>
                <div
                  className="animate-fade-in-up"
                  style={{ animationDelay: "350ms", animationFillMode: "both" }}
                >
                  <label
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "#000000" }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="077 123 4569"
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-all duration-300 hover:border-accent"
                    style={{
                      borderColor:
                        focusedField === "phone" ? "#FFCC07" : "#cccccc",
                      color: "#000000",
                      transform:
                        focusedField === "phone" ? "translateY(-2px)" : "none",
                    }}
                  />
                </div>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "400ms", animationFillMode: "both" }}
              >
                <label
                  className="block text-sm font-semibold mb-4"
                  style={{ color: "#000000" }}
                >
                  Select Subject?
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Course Inquiry",
                    "Enrollment Support",
                    "Academic Guidance",
                    "Other",
                  ].map((subject, idx) => (
                    <label
                      key={subject}
                      className="flex items-center gap-2 cursor-pointer group"
                      style={{ color: "#000000" }}
                    >
                      <input
                        type="radio"
                        name="subject"
                        value={subject}
                        className="w-4 h-4 accent-[#FFCC07] transition-transform group-hover:scale-125"
                      />
                      <span className="text-sm group-hover:text-[#FFCC07] transition-colors duration-300">
                        {subject}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "450ms", animationFillMode: "both" }}
              >
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: "#000000" }}
                >
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 border-b-2 bg-transparent placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none hover:border-accent"
                  style={{
                    borderColor:
                      focusedField === "message" ? "#FFCC07" : "#cccccc",
                    color: "#000000",
                    transform:
                      focusedField === "message" ? "translateY(-2px)" : "none",
                  }}
                />
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "500ms", animationFillMode: "both" }}
              >
                <Button
                  className="px-8 py-3 font-bold rounded-lg w-full md:w-auto border-2 hover:scale-105 hover:shadow-lg hover:shadow-[#FFCC07]/50 transition-all duration-300"
                  style={{
                    backgroundColor: "#FFCC07",
                    color: "#000000",
                    borderColor: "#FFCC07",
                  }}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
