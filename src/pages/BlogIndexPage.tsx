import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, Clock, Calendar, ArrowRight, ChevronRight, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export const BlogIndexPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Company Formation',
    'GST & Taxation',
    'Certifications',
    'Loan & Finance Education',
    'Business Compliance'
  ];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="bg-[#142B49] text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-elevated">
          <div className="absolute top-0 right-0 w-80 h-80 bg-royal-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-4 relative">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal-600/40 text-royal-200 text-xs font-semibold border border-royal-400/30">
              <BookOpen className="w-3.5 h-3.5 text-teal-400" />
              <span>KNOWLEDGE HUB & REGULATORY INSIGHTS</span>
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Resources, Guides & Regulatory Updates
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore in-depth articles, statutory checklists, and educational breakdowns designed to help Indian business owners, founders, and borrowers navigate incorporation, taxation, and financing.
            </p>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles & checklists..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-royal-500 shadow-xs"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 w-full sm:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat ? 'bg-[#142B49] text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200 hover:border-royal-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-royal-600 bg-royal-50 px-2.5 py-0.5 rounded-full border border-royal-100">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#142B49] group-hover:text-royal-600 transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-100">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">{post.publishedDate}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-bold text-royal-600 group-hover:text-royal-700 flex items-center gap-1 transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
