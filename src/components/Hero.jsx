import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../constants.js';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-emerald-500/20"
          >
            Available for hire
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]">
            I'm {PERSONAL_INFO.name.split(' ')[0]} <br />
            <span className="text-gradient">
              {PERSONAL_INFO.role.split(' ')[0]}
            </span>
          </h1>
          
          <p className="text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href="#projects" 
              className="btn-primary"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={PERSONAL_INFO.resumeUrl}
              className="btn-secondary"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a href={PERSONAL_INFO.socials.github} className="text-neutral-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={PERSONAL_INFO.socials.linkedin} className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={PERSONAL_INFO.socials.twitter} className="text-neutral-500 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl rotate-3 border-4 border-white/5">
            <img 
              src={PERSONAL_INFO.photo} 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover -rotate-3 scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full -z-10 blur-2xl opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500 rounded-full -z-10 blur-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
