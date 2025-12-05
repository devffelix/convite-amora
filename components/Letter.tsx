import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';
import { PARTNER_NAME } from '../constants';
import { SleepingCat } from './Cats';

const Letter: React.FC = () => {
  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-0 my-12 relative z-10">
      <SleepingCat />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8 md:p-16 pt-12 rounded-2xl md:rounded-[3rem] border border-rose-500/20 shadow-[0_0_40px_rgba(225,29,72,0.1)] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-20 text-rose-300">
            <Quote size={60} className="transform rotate-180" />
        </div>
        
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none text-rose-50/90 font-light leading-relaxed">
            <motion.h3 
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={paragraphVariants}
                className="font-script text-5xl md:text-6xl text-rose-300 mb-8"
            >
                Minha querida {PARTNER_NAME.split(' ')[0]},
            </motion.h3>

            <motion.p custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={paragraphVariants}>
                Hoje meu coração transborda de gratidão. Olhar para trás e ver tudo o que construímos desde aquele 07 de dezembro de 2020 me faz ter a certeza de que cada segundo valeu a pena. Você é a minha melhor escolha, todos os dias.
            </motion.p>

            <motion.p custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={paragraphVariants}>
                Para celebrar o nosso amor e mais um ano dessa união abençoada pelo destino, imaginei um dia perfeito, dedicado inteiramente a nós dois.
            </motion.p>

            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={paragraphVariants} className="pl-6 border-l-2 border-rose-500/50 my-8 italic text-rose-200">
                <p>
                    Quero começar te levando para um <strong>almoço romântico</strong>, onde o tempo pare para a gente conversar e admirar o brilho nos seus olhos.
                </p>
                <p className="mt-4">
                    Depois, vamos adoçar a alma tomando o <strong>melhor açaí das nossas vidas</strong>, rindo à toa e aproveitando a simplicidade de estarmos juntos.
                </p>
                <p className="mt-4">
                    Seguiremos passeando, para escolhermos <strong>livrinhos novos</strong> e sonharmos com novas histórias.
                </p>
                <p className="mt-4">
                    E, para finalizar esse dia mágico, nada melhor que o escurinho de um bom <strong>cinema</strong>, de mãos dadas, sentindo o calor do seu abraço.
                </p>
            </motion.div>

            <motion.p custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={paragraphVariants}>
                Você é a protagonista da minha vida e eu mal posso esperar para viver mais esse capítulo ao seu lado.
            </motion.p>

            <motion.div custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={paragraphVariants} className="mt-12 flex items-center gap-2 text-rose-300 font-script text-3xl">
                <Sparkles size={24} />
                <span>Com todo meu amor, Filipe.</span>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;