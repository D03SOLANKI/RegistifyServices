import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, Calendar, User, ArrowLeft, ArrowRight, 
  MessageCircle, Share2, Building, ShieldCheck, ChevronRight 
} from 'lucide-react';
import { getBlogPostBySlug, BLOG_POSTS } from '../data/blogData';

interface BlogPostPageProps {
  onOpenConsultation: (tab?: 'loan' | 'business', specific?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const otherPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 3);

  // Simple markdown renderer for headers, tables, bold, and lists
  const renderFormattedContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let tableBuffer: string[] = [];

    const flushTable = (key: number) => {
      if (tableBuffer.length === 0) return null;
      const rows = tableBuffer.map(r => r.split('|').filter(c => c.trim() !== ''));
      const header = rows[0];
      const dataRows = rows.slice(2); // skip separator row

      const el = (
        <div key={`table-${key}`} className="my-6 overflow-x-auto">
          <table className="min-w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-[#142B49] text-white">
              <tr>
                {header.map((th, thIdx) => (
                  <th key={thIdx} className="px-4 py-3 font-semibold">
                    {th.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {dataRows.map((tr, trIdx) => (
                <tr key={trIdx} className="hover:bg-slate-50">
                  {tr.map((td, tdIdx) => (
                    <td key={tdIdx} className="px-4 py-2.5 text-slate-700">
                      {td.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
      return el;
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('|')) {
        tableBuffer.push(trimmed);
        return;
      } else if (tableBuffer.length > 0) {
        elements.push(flushTable(index));
      }

      if (trimmed.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl font-bold text-[#142B49] mt-8 mb-3">
            {trimmed.replace('### ', '')}
          </h3>
        );
      } else if (trimmed.startsWith('#### ')) {
        elements.push(
          <h4 key={index} className="text-base font-bold text-[#142B49] mt-5 mb-2">
            {trimmed.replace('#### ', '')}
          </h4>
        );
      } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        elements.push(
          <li key={index} className="ml-5 list-disc text-xs sm:text-sm text-slate-700 leading-relaxed my-1">
            {trimmed.substring(2)}
          </li>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <li key={index} className="ml-5 list-decimal text-xs sm:text-sm text-slate-700 leading-relaxed my-1 font-medium">
            {trimmed.replace(/^\d+\.\s/, '')}
          </li>
        );
      } else if (trimmed.startsWith('---')) {
        elements.push(<hr key={index} className="my-6 border-slate-200" />);
      } else if (trimmed.length > 0) {
        elements.push(
          <p key={index} className="text-xs sm:text-sm text-slate-700 leading-relaxed my-3">
            {trimmed}
          </p>
        );
      }
    });

    if (tableBuffer.length > 0) {
      elements.push(flushTable(9999));
    }

    return elements;
  };

  return (
    <div className="bg-[#F7F9FC] min-h-screen py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Top */}
        <div className="flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142B49] hover:text-royal-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <span className="text-xs text-slate-400 font-medium">
            Published in {post.category}
          </span>
        </div>

        {/* Article Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="font-bold text-royal-600 bg-royal-50 px-3 py-1 rounded-full border border-royal-100">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#142B49] tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-600 italic">
            "{post.excerpt}"
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#142B49] text-white flex items-center justify-center font-bold text-xs">
                RS
              </div>
              <div>
                <span className="font-semibold text-slate-700 block">{post.author}</span>
                <span className="text-[10px] text-slate-400">Verified Compliance Review</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-card prose prose-slate max-w-none">
          {renderFormattedContent(post.content)}
        </div>

        {/* Relevant Service Links Box */}
        {post.relatedServices && post.relatedServices.length > 0 && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-4">
            <h3 className="text-base font-bold text-[#142B49]">
              Relevant Services & Further Assistance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {post.relatedServices.map((srv, idx) => (
                <Link
                  key={idx}
                  to={srv.url}
                  className="p-3.5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 text-xs font-semibold text-[#142B49] flex items-center justify-between group transition-all"
                >
                  <span>{srv.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Inline Consultation Action Box */}
        <div className="bg-gradient-to-r from-[#142B49] to-[#246BCE] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold">Have questions regarding this topic?</h3>
            <p className="text-xs text-slate-300 max-w-md">
              Speak with our consultation desk for personalized guidance tailored to your commercial situation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-6 py-3 bg-teal-500 hover:bg-teal-600 text-[#142B49] rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Get Free Consultation
            </button>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-semibold text-center transition-all flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Read More Section */}
        <div className="space-y-4 pt-6">
          <h3 className="text-lg font-bold text-[#142B49]">Other Guides You Might Find Helpful</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherPosts.map(p => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-royal-300 hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold text-royal-600">{p.category}</span>
                  <h4 className="text-sm font-bold text-[#142B49] group-hover:text-royal-600 transition-colors mt-1 line-clamp-2">
                    {p.title}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-royal-600 mt-3 flex items-center gap-1">
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
