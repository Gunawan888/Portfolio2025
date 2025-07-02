import React from 'react';
import { Heart, Brain, BarChart3, Database } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <Brain className="w-8 h-8 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              <h3 className="text-2xl font-bold">David Gunawan</h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md mb-4">
              AI Specialist & Data Analyst passionate about transforming complex data
              into actionable insights through machine learning and advanced analytics.
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <div className="flex items-center space-x-1 hover:text-emerald-400 transition-colors duration-300">
                <BarChart3 className="w-4 h-4" />
                <span>ML Solutions</span>
              </div>
              <div className="flex items-center space-x-1 hover:text-violet-400 transition-colors duration-300">
                <Database className="w-4 h-4" />
                <span>Data Insights</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Education', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-slate-300">
              {['Machine Learning', 'Data Analytics', 'AI Implementation', 'Business Intelligence', 'MLOps & Deployment'].map((item, index) => (
                <li key={item} className="hover:text-violet-400 transition-colors duration-300 hover:translate-x-1" style={{ animationDelay: `${index * 0.1}s` }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-300 flex items-center justify-center space-x-2">
            <span>© 2025 Gunawan. Crafted with</span>
            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
            <span>and powered by coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;