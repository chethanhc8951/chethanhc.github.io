import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants.js';

const Skills = () => {
  const categories = ['Frontend', 'Backend', 'Tools', 'Design'];

  return (
    <section id="skills" className="section-padding bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">My Expertise</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            I've spent years honing my craft across the entire stack, focusing on performance, 
            accessibility, and clean architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-bold mb-6 text-emerald-400">{category}</h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span className="text-neutral-200">{skill.name}</span>
                      <span className="text-neutral-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
