import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants.js';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-neutral-900/30 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Experience</h2>
            <p className="text-neutral-400 leading-relaxed">
              My professional journey has been driven by a curiosity for how things work 
              and a desire to build tools that make life easier.
            </p>
            <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-bold mb-2">Looking for a collaborator?</h4>
              <p className="text-neutral-400 text-sm mb-6">I'm currently open to new opportunities and interesting projects.</p>
              <a href="#contact" className="text-emerald-400 font-bold hover:underline">Get in touch →</a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-neutral-950" />
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl font-bold">{exp.position}</h3>
                  <span className="px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-neutral-300">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-emerald-400 font-semibold mb-6">{exp.company}</h4>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-neutral-400 flex gap-3">
                      <span className="text-emerald-500 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
