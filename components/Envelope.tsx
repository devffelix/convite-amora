import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { PARTNER_NAME } from '../constants';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full relative z-10 p-4 text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8"
      >
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart size={100} className="text-red-500 fill-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-7xl font-script text-red-100 mb-4 drop-shadow-lg"
      >
        Para {PARTNER_NAME}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-rose-200 text-lg mb-12"
      >
        Tenho uma surpresa para você...
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
      >
        <span className="group-hover:tracking-widest transition-all duration-300">
            ABRIR CARTA
        </span>
      </motion.button>
    </div>
  );
};

export default Envelope;