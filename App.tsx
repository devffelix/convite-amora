import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import Envelope from './components/Envelope';
import HeartBackground from './components/HeartBackground';
import Letter from './components/Letter';
import Proposal from './components/Proposal';
import BackgroundMusic, { BackgroundMusicHandle } from './components/BackgroundMusic';
import TimeTogether from './components/TimeTogether';
import Reasons from './components/Reasons';
import Promises from './components/Promises';
import { PeekingCat, MusicalCat, FooterCat } from './components/Cats';
import { PARTNER_NAME } from './constants';
import { AppState } from './types';

function App() {
  const [state, setState] = useState<AppState>(AppState.LOCKED);
  const musicRef = useRef<BackgroundMusicHandle>(null);

  const startExperience = () => {
    // Try to play music immediately upon user interaction
    musicRef.current?.play();
    
    setState(AppState.OPENING);
    setTimeout(() => {
        setState(AppState.VIEWING);
    }, 1000);
  };

  const handleAcceptance = () => {
    setState(AppState.ACCEPTED);

    // Trigger romantic confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      // Launch confetti from left edge
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ec4899', '#f43f5e', '#ffffff', '#fb7185']
      });
      // Launch confetti from right edge
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ec4899', '#f43f5e', '#ffffff', '#fb7185']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <div className="min-h-screen relative overflow-hidden text-white selection:bg-pink-500 selection:text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[#1a0505] to-[#2a0a10] z-[-1]" />
      <HeartBackground />
      
      {/* Background Music - Always mounted, controls visible when unlocked */}
      <BackgroundMusic ref={musicRef} visible={state !== AppState.LOCKED} />

      <AnimatePresence mode="wait">
        {state === AppState.LOCKED && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <Envelope onOpen={startExperience} />
          </motion.div>
        )}

        {(state === AppState.VIEWING || state === AppState.ACCEPTED) && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 container mx-auto px-4"
          >
            {/* Peeking Cat Animation */}
            <PeekingCat />

            {/* Header */}
            <header className="min-h-screen flex flex-col items-center justify-center text-center py-20 relative">
                <MusicalCat />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                    <h1 className="text-5xl md:text-8xl font-script bg-clip-text text-transparent bg-gradient-to-r from-rose-200 via-pink-300 to-rose-200 mb-6 drop-shadow-2xl">
                        Feliz Nosso Dia
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-4">
                        Mais um ano ao seu lado, {PARTNER_NAME}.
                    </p>
                </motion.div>

                {/* Counter */}
                <TimeTogether />

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <ChevronDown size={40} className="text-white/50" />
                </motion.div>
            </header>

            {/* Reasons Section */}
            <section className="py-10">
              <Reasons />
            </section>

            {/* Promises Section */}
            <section className="py-10">
              <Promises />
            </section>

            {/* Letter Section */}
            <section className="py-10">
                <Letter />
            </section>

            {/* Proposal Section */}
            <section className="py-20 pb-32">
                {state === AppState.VIEWING ? (
                    <Proposal onAccept={handleAcceptance} />
                ) : (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center p-8 glass-card max-w-3xl mx-auto rounded-3xl border border-green-500/30 shadow-[0_0_100px_rgba(16,185,129,0.2)]"
                    >
                        <h2 className="text-6xl md:text-8xl font-script text-white mb-6">
                            Te Amo Mil Milhões!
                        </h2>
                        <p className="text-2xl text-rose-200">
                            Mal posso esperar para vivermos tudo isso. ❤️
                        </p>
                        <div className="mt-8 text-6xl animate-bounce">
                            💏
                        </div>
                    </motion.div>
                )}
            </section>

            <footer className="py-8 text-center text-white/20 text-sm flex flex-col items-center">
                <FooterCat />
                <p>Feito com todo amor do mundo para Rayssa.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;