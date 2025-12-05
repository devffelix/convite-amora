import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Heart, Star, Sun } from 'lucide-react';

const reasons = [
  {
    icon: Smile,
    title: "Seu Sorriso",
    desc: "Ilumina até os meus dias mais difíceis.",
    color: "bg-amber-400/20 text-amber-300 border-amber-400/30"
  },
  {
    icon: Heart,
    title: "Seu Carinho",
    desc: "O lugar mais seguro do mundo é o seu abraço.",
    color: "bg-rose-500/20 text-rose-300 border-rose-500/30"
  },
  {
    icon: Sun,
    title: "Sua Essência",
    desc: "Sua bondade e leveza tornam tudo melhor.",
    color: "bg-yellow-400/20 text-yellow-200 border-yellow-400/30"
  },
  {
    icon: Star,
    title: "Nossa Conexão",
    desc: "Entendemos um ao outro até sem palavras.",
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  }
];

const Reasons: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-script text-center text-rose-200 mb-10"
      >
        Por que eu te amo
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl border backdrop-blur-sm ${item.color} flex items-center gap-4 hover:scale-105 transition-transform duration-300`}
          >
            <div className="p-3 bg-white/10 rounded-full">
              <item.icon size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">{item.title}</h4>
              <p className="text-sm opacity-80">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reasons;