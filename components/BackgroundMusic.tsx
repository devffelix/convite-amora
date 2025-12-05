import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
  interface Window {
    SC: any;
  }
}

export interface BackgroundMusicHandle {
  play: () => void;
}

interface BackgroundMusicProps {
  visible: boolean;
}

const BackgroundMusic = forwardRef<BackgroundMusicHandle, BackgroundMusicProps>(({ visible }, ref) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const widgetRef = useRef<any>(null);
  const pendingPlayRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // SoundCloud Track URL requested by user
  const TRACK_URL = "https://soundcloud.com/filipe-felix-520943766/rayssa-meu-amor";

  useImperativeHandle(ref, () => ({
    play: () => {
      if (widgetRef.current) {
        widgetRef.current.play();
      } else {
        // If widget isn't ready yet, queue the play command
        pendingPlayRef.current = true;
      }
    }
  }));

  useEffect(() => {
    // Load SoundCloud Widget API script
    const script = document.createElement('script');
    script.src = "https://w.soundcloud.com/player/api.js";
    script.async = true;
    
    script.onload = () => {
      if (iframeRef.current && window.SC) {
        const widget = window.SC.Widget(iframeRef.current);
        widgetRef.current = widget;
        
        // Bind events
        widget.bind(window.SC.Widget.Events.READY, () => {
          widget.setVolume(40); // Initial volume
          
          // If the user clicked play before it was ready, play now
          if (pendingPlayRef.current) {
            widget.play();
            pendingPlayRef.current = false;
          }
        });

        widget.bind(window.SC.Widget.Events.PLAY, () => {
            setIsPlaying(true);
        });

        widget.bind(window.SC.Widget.Events.PAUSE, () => {
            setIsPlaying(false);
        });

        widget.bind(window.SC.Widget.Events.FINISH, () => {
          // Loop functionality
          widget.seekTo(0);
          widget.play();
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      try {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const togglePlay = () => {
    if (!widgetRef.current) return;
    
    widgetRef.current.isPaused((paused: boolean) => {
        if (paused) {
            widgetRef.current.play();
        } else {
            widgetRef.current.pause();
        }
    });
  };

  const toggleMute = () => {
    if (!widgetRef.current) return;

    if (isMuted) {
      widgetRef.current.setVolume(40);
      setIsMuted(false);
    } else {
      widgetRef.current.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Persistent Hidden SoundCloud Iframe - Always mounted to ensure loading */}
      <iframe
        ref={iframeRef}
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(TRACK_URL)}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=true`}
        className="fixed opacity-0 pointer-events-none w-1 h-1 -bottom-10"
        title="Background Music"
      />

      {/* Visible Controls */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          >
            {/* Mute Control */}
            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white/70 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              title={isMuted ? "Ativar som" : "Mudo"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Play/Pause Control */}
            <button
              onClick={togglePlay}
              className={`
                  relative flex items-center justify-center w-14 h-14 rounded-full 
                  backdrop-blur-xl border border-white/20 shadow-[0_0_20px_rgba(225,29,72,0.3)] 
                  transition-all duration-300 hover:scale-105 active:scale-95 group
                  ${isPlaying ? 'bg-rose-500/20' : 'bg-black/40'}
              `}
              title={isPlaying ? "Pausar música" : "Tocar música"}
            >
              {/* Spinning border effect when playing */}
              {isPlaying && (
                  <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-rose-400 animate-spin opacity-50"></div>
              )}
              
              {isPlaying ? (
                  <Pause size={24} className="text-rose-200 fill-current" />
              ) : (
                  <Play size={24} className="text-white ml-1 fill-current" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

BackgroundMusic.displayName = 'BackgroundMusic';

export default BackgroundMusic;