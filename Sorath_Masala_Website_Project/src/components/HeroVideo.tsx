import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { BRAND_INFO } from '../data/products';
import { gsap, ScrollTrigger } from '../animations/scrollAnimations';

export const HeroVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cinematic Entrance animation
    gsap.fromTo(
      container,
      {
        opacity: 0,
        scale: 0.85,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.3
      }
    );

    if (!prefersReducedMotion) {
      // Connect video playback progress on scroll
      const st = ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 1,
        onUpdate: (self) => {
          if (video.duration && !isNaN(video.duration)) {
            video.currentTime = self.progress * video.duration;
          }
        }
      });

      return () => {
        st.kill();
      };
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] aspect-[9/16] max-h-[75vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF9F0] bg-[#24140D] group"
      style={{
        boxShadow: '0 25px 60px -15px rgba(111, 16, 23, 0.45), 0 0 0 1px rgba(165, 29, 37, 0.25)'
      }}
    >
      {/* Background Subtle Warm Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#E8A928]/20 via-transparent to-transparent pointer-events-none" />

      {/* Video Element - Preserving full 9:16 aspect ratio */}
      <video
        ref={videoRef}
        src={BRAND_INFO.pavBhajiVideo}
        playsInline
        autoPlay
        loop
        muted={isMuted}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
      />

      {/* Campaign Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-[#6F1017]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8A928]/40 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-[#E8A928] animate-pulse" />
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#FFF9F0]">
          Pav Bhaji Commercial
        </span>
      </div>

      {/* Bottom Media Controls Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#24140D]/95 via-[#24140D]/60 to-transparent flex items-end justify-between z-20">
        <div>
          <p className="text-[10px] tracking-widest text-[#E8A928] uppercase font-bold">
            Sorath Masala Original
          </p>
          <h4 className="text-xs sm:text-sm font-bold text-[#FFF9F0] tracking-wide">
            The Taste of Authentic Pav Bhaji
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF9F0]/20 hover:bg-[#A51D25] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FFF9F0]/20 hover:bg-[#A51D25] text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
