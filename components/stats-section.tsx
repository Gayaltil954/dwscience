'use client';

import { motion } from 'framer-motion';
import { Card3D } from '@/components/card-3d';
import { Counter } from '@/components/counter';
import { TextReveal } from '@/components/text-reveal';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export function StatsSection() {
  const stats = [
    { 
      icon: <Users className="w-8 h-8" />, 
      value: 500, 
      suffix: '+', 
      label: 'Students Taught' 
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: 95, 
      suffix: '%', 
      label: 'Success Rate' 
    },
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      value: 10, 
      suffix: '+', 
      label: 'Years Experience' 
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      value: 100, 
      suffix: '%', 
      label: 'Satisfaction' 
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TextReveal 
            text="Proven Track Record of Excellence"
            className="text-4xl sm:text-5xl font-black text-foreground"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3D className="h-full">
                <div
                  className="relative p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center space-y-4 backdrop-blur-xl border border-white/10 overflow-hidden group"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  }}
                >
                  {/* Glassmorphism glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC07]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative z-10 p-4 rounded-full"
                    style={{
                      background: 'rgba(255, 204, 7, 0.1)',
                      color: '#FFCC07',
                    }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Counter */}
                  <div className="relative z-10">
                    <Counter
                      to={stat.value}
                      suffix={stat.suffix}
                      className="text-4xl sm:text-5xl font-black text-[#FFCC07]"
                    />
                  </div>

                  {/* Label */}
                  <p className="relative z-10 text-sm sm:text-base text-foreground/80 font-medium">
                    {stat.label}
                  </p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
