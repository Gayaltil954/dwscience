'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Settings } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export function Features() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative overflow-hidden py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-[#020420] via-[#0a0633] to-[#1a0b3d]"
    >
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-10 top-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-10 bottom-10 w-96 h-96 rounded-full bg-violet-500/10 blur-[100px]" 
      />
      
      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          
          {/* Modern Video Showcase */}
          <motion.div variants={itemVariants} className="w-full max-w-5xl">
            
            {/* Course header */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold shadow-lg">
                      🏆 Island 1st Place - 2023 O/L
                    </span>
                    
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xs">
                        DW
                      </div>
                      <span className="font-medium">Dilini Weerakkody · Science Teacher</span>
                    </div>
                    <div className="h-4 w-px bg-gray-600" />
                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">English Medium</span>
                      <span>· Grades 6-11</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main video container */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Glassmorphic frame */}
              <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/[0.02] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-3 sm:p-4">
                
                {/* Video wrapper */}
                <div className="relative rounded-2xl overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src="/video.mp4"
                    poster="/demo-poster.jpg"
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-[360px] sm:h-[450px] lg:h-[540px] object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Quality badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/80 backdrop-blur-sm border border-white/20 text-white text-xs font-bold">
                    4K UHD
                  </div>
                  

                  
                  {/* Custom controls overlay */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6"
                  >
                    {/* Progress bar */}
                    <div className="mb-4">
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-400 to-violet-400"
                          initial={{ width: "0%" }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                    
                    {/* Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={togglePlay}
                          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                        >
                          {isPlaying ? (
                            <Pause className="w-4 h-4 text-white" fill="white" />
                          ) : (
                            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                          )}
                        </motion.button>
                        <span className="text-xs text-white/80 font-medium">0:00 / 1:14</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={toggleMute}
                          className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                        >
                          {isMuted ? (
                            <VolumeX className="w-4 h-4 text-white" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-white" />
                          )}
                        </motion.button>
                        <button className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                          <Settings className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
              

            </div>

            {/* Course details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              {/* Achievement Banner */}
              <div className="backdrop-blur-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-3xl">
                    🥇
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Island First Achievement - 2023</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      My student achieved <span className="font-bold text-yellow-400">Island 1st place</span> in the 2023 G.C.E. O/L Examination, English Medium. 
                      Proven track record of excellence with consistent <span className="font-semibold">A grades</span> and top rankings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">1st</div>
                  <div className="text-xs text-gray-400">Island Rank 2023</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-gray-400">Pass Rate</div>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white mb-1">A+</div>
                  <div className="text-xs text-gray-400">Top Results</div>
                </div>
                
              </div>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
