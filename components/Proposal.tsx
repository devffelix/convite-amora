import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoveCats } from './Cats';

interface ProposalProps {
  onAccept: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ onAccept }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [hoverCount, setHoverCount] = useState(0);

  const moveNoButton = () => {
    // Significantly increased range so it jumps far away
    const spreadX = 400 + (hoverCount * 20); 
    const spreadY = 300 + (hoverCount * 20);

    const x = (Math.random() - 0.5) * spreadX;
    const y = (Math.random() - 0.5) * spreadY;
    
    setNoBtnPosition({ x, y });
    setHoverCount(prev => prev + 1);
  };

  const getNoButtonText = () => {
    if (hoverCount === 0) return "Não";
    if (hoverCount < 3) return "Sério?";
    if (hoverCount < 6) return "Nem Tente";
    if (hoverCount < 9) return "Impossível";
    return "Aceita logo!";
  };

  const handleYesClick = () => {
    onAccept();
  };

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center relative z-20">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-12 rounded-3xl border border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] max-w-2xl w-full"
      >
        <LoveCats />
        
        <h2 className="text-5xl md:text-7xl font-script text-white mb-8 drop-shadow-md">
          Aceita comemorar comigo?
        </h2>
        <p className="text-xl text-rose-200 mb-12">
            Prometo que será inesquecível. ❤️
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative h-32 md:h-20">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                className="px-10 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all w-48 z-20"
            >
                SIM! 😍
            </motion.button>

            <motion.button
                animate={noBtnPosition}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton} // For mobile tap
                className="px-10 py-4 bg-gray-700/50 backdrop-blur text-gray-300 text-xl font-bold rounded-full border border-gray-600 hover:bg-gray-700 transition-colors w-48 z-10"
            >
                {getNoButtonText()}
            </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Proposal;