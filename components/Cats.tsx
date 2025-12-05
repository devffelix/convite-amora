import React from 'react';
import { motion } from 'framer-motion';

// Using consistent high-quality cute cat stickers (Tenor links are more stable than Giphy)

export const SleepingCat: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="flex justify-center -mb-8 relative z-20"
  >
    <img 
      src="https://media.tenor.com/On7kb94hLVoAAAAi/mochi-peach-cat-sleep.gif" 
      alt="Sleeping Cat" 
      className="w-32 h-32 object-contain drop-shadow-lg"
    />
  </motion.div>
);

export const PeekingCat: React.FC = () => (
  <motion.div
    initial={{ x: -100 }}
    animate={{ x: [-100, 0, 0, -100] }}
    transition={{ 
      duration: 5, 
      times: [0, 0.1, 0.9, 1],
      repeat: Infinity,
      repeatDelay: 10,
      ease: "easeInOut"
    }}
    className="fixed bottom-0 left-0 z-40 pointer-events-none"
  >
    <img 
      src="https://media.tenor.com/N2s4cKMkG64AAAAi/mochi-cat.gif" 
      alt="Peeking Cat" 
      className="w-32 md:w-48 object-contain"
    />
  </motion.div>
);

export const LoveCats: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="flex justify-center gap-4 mb-4"
  >
    <img 
      src="https://media.tenor.com/5m7p_3v75wUAAAAi/mochi-peach-cat-love.gif" 
      alt="Love Cats" 
      className="w-24 h-24 md:w-32 md:h-32 object-contain"
    />
  </motion.div>
);

export const SittingCat: React.FC = () => (
  <motion.div
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-16 right-4 md:right-20 z-10 opacity-80"
  >
    <img 
      src="https://media.tenor.com/z3gM7PqjZ3AAAAAi/mochi-cat-peach.gif" 
      alt="Sitting Cat" 
      className="w-20 h-20 md:w-28 md:h-28 object-contain"
    />
  </motion.div>
);

export const MusicalCat: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, rotate: -10 }}
    animate={{ opacity: 1, rotate: 10 }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    className="absolute top-20 left-4 md:left-20 z-10 opacity-70"
  >
    <img 
      src="https://media.tenor.com/bI9J-t35aOoAAAAi/mochi-peach-cat-dancing.gif" 
      alt="Musical Cat" 
      className="w-24 h-24 md:w-32 md:h-32 object-contain"
    />
  </motion.div>
);

export const FooterCat: React.FC = () => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex justify-center mb-4"
  >
    <img 
      src="https://media.tenor.com/04M2jJkK-wAAAAAi/mochi-peach-cat-heart.gif" 
      alt="Footer Cat" 
      className="w-16 h-16 md:w-24 md:h-24 object-contain"
    />
  </motion.div>
);
