import React from 'react';
import { motion } from 'framer-motion';
import { ItineraryItem } from '../types';

interface TimelineCardProps {
  item: ItineraryItem;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-24 w-full max-w-5xl mx-auto px-4 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2">
        <div className="relative group overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10">
            <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-20 group-hover:opacity-10 transition-opacity duration-500`}></div>
            <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20">
                <item.icon className="text-white w-6 h-6" />
            </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className={`text-4xl md:text-5xl font-script mb-4 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
            {item.title}
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
            {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineCard;