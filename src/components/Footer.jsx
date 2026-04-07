import React from 'react';
import { PERSONAL_INFO } from '../constants.js';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#" className="text-2xl font-display font-bold tracking-tighter text-white">
            {PERSONAL_INFO.name.split(' ')[0]}<span className="text-emerald-500">.</span>
          </a>
          <p className="text-sm text-neutral-500 mt-2">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a href={PERSONAL_INFO.socials.github} className="text-neutral-500 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.linkedin} className="text-neutral-500 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={PERSONAL_INFO.socials.twitter} className="text-neutral-500 hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-sm text-neutral-500 flex items-center gap-1">
          Built with <Heart size={14} className="text-emerald-500 fill-emerald-500" /> in React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
