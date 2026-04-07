import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 text-white uppercase tracking-tighter">Journal</h2>
          <div className="h-2 w-32 bg-emerald-500 mb-8" />
          <p className="text-neutral-400 max-w-2xl font-medium text-lg">
            Sharing my thoughts on development, design, and the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group block-card relative"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="px-4 py-1 bg-emerald-500 text-neutral-950 text-xs font-black uppercase border-2 border-white">
                  {post.category}
                </span>
                <span className="text-neutral-500 text-sm font-black uppercase tracking-widest">
                  {post.date}
                </span>
              </div>
              
              <h3 className="text-3xl font-black mb-6 text-white uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-neutral-400 font-medium mb-10 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-neutral-500 text-sm font-black uppercase tracking-widest">
                  {post.readTime}
                </span>
                <a href="#" className="p-3 bg-emerald-500 text-neutral-950 border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                  <ArrowUpRight size={24} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
