import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants.js';

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-neutral-400 max-w-xl">
              A collection of things I've built that I'm particularly proud of. 
              Each project represents a unique challenge and solution.
            </p>
          </div>
          <a href="#" className="text-emerald-400 font-semibold hover:underline flex items-center gap-2">
            View all on GitHub <Github size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-neutral-900/50 rounded-[2rem] overflow-hidden border border-white/5 hover:border-emerald-500/30 shadow-sm hover:shadow-emerald-500/5 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a 
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-neutral-900 hover:bg-emerald-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className="p-3 bg-white rounded-full text-neutral-900 hover:bg-emerald-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
