import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SittingCat } from './Cats';

const promises = [
  "Te fazer rir todos os dias (mesmo com piadas ruins).",
  "Ser seu abrigo nos dias de chuva.",
  "Comemorar cada pequena vitória sua.",
  "Estar sempre ao seu lado, não importa o que aconteça.",
  "Te amar mais a cada nascer do sol."
];

const Promises: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12 relative">
      <SittingCat />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 rounded-3xl border border-rose-200/20 relative z-0"
      >
        <h3 className="text-3xl md:text-4xl font-script text-center text-white mb-8">
          Minhas Promessas
        </h3>
        
        <div className="space-y-4">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-3 text-rose-100"
            >
              <CheckCircle2 className="text-pink-500 shrink-0" size={20} />
              <span className="text-lg font-light">{promise}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Promises;