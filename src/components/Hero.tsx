import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, ArrowRight, Brain, BarChart3, Zap, Cpu, Bot, Sparkles } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  
  const roles = [
    "AI Specialist",
    "Data Analyst", 
    "ML Engineer",
    "Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const AIParticles = () => (
    <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-gradient-to-r from-emerald-400 to-violet-500 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '3s'
          }}
        />
      ))}
    </div>
  );

  const NeuralNetwork = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        {/* Neural network connections */}
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        
        {/* Animated neural connections */}
        <g className="animate-pulse">
          <line x1="100" y1="150" x2="300" y2="200" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="100" y1="250" x2="300" y2="200" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="100" y1="350" x2="300" y2="300" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="300" y1="200" x2="500" y2="250" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="300" y1="300" x2="500" y2="250" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
          <line x1="500" y1="250" x2="700" y2="300" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6" />
        </g>
        
        {/* Neural nodes */}
        <circle cx="100" cy="150" r="4" fill="#10b981" className="animate-pulse" />
        <circle cx="100" cy="250" r="4" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
        <circle cx="100" cy="350" r="4" fill="#ec4899" className="animate-pulse" style={{animationDelay: '1s'}} />
        <circle cx="300" cy="200" r="6" fill="#10b981" className="animate-pulse" style={{animationDelay: '1.5s'}} />
        <circle cx="300" cy="300" r="6" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '2s'}} />
        <circle cx="500" cy="250" r="6" fill="#ec4899" className="animate-pulse" style={{animationDelay: '2.5s'}} />
        <circle cx="700" cy="300" r="8" fill="#10b981" className="animate-pulse" style={{animationDelay: '3s'}} />
      </svg>
    </div>
  );

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
      <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-400 rounded-full animate-spin-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-violet-400 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-bounce-slow opacity-60"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-cyan-400 rounded-full animate-pulse"></div>
      
      {/* AI-themed floating elements */}
      <div className="absolute top-1/3 left-1/4 animate-float">
        <Bot className="w-8 h-8 text-emerald-400 animate-pulse" />
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float-delay-1">
        <Cpu className="w-6 h-6 text-violet-400 animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float-delay-2">
        <Sparkles className="w-7 h-7 text-pink-400 animate-pulse" />
      </div>
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-emerald-50/30 to-violet-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-violet-900/20 overflow-hidden">
      <NeuralNetwork />
      <AIParticles />
      <FloatingElements />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="p-3 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-2xl animate-float backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50 hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="p-3 bg-violet-100/80 dark:bg-violet-900/30 rounded-2xl animate-float-delay-1 backdrop-blur-sm border border-violet-200/50 dark:border-violet-800/50 hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="p-3 bg-pink-100/80 dark:bg-pink-900/30 rounded-2xl animate-float-delay-2 backdrop-blur-sm border border-pink-200/50 dark:border-pink-800/50 hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-violet-600 to-pink-600 animate-gradient hover:scale-105 transition-transform duration-300 inline-block">
                David
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-3xl mx-auto animate-fade-in-delay-1 h-8">
              <span className={`inline-block transition-all duration-500 ${isTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {roles[currentText]}
              </span>
            </div>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300">
              I am an analytical, detail-oriented professional with comprehensive experience analysing and interpreting high volumes of complex data, developing and analysing database systems and solutions, preparing standardised reporting tools, and performing ad hoc analyses. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-gradient-to-r from-emerald-600 to-violet-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-emerald-700 hover:to-violet-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-violet-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-2xl font-semibold hover:border-emerald-600 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-400 transition-all duration-300 flex items-center space-x-2 hover:scale-105 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-violet-50 dark:from-emerald-900/20 dark:to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={20} className="relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Download Resume</span>
            </button>
          </div>

          {/* AI Stats Animation */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 animate-fade-in-delay-4">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 animate-pulse">AI</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Powered</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-violet-600 dark:text-violet-400 animate-pulse" style={{animationDelay: '0.5s'}}>ML</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Driven</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 animate-pulse" style={{animationDelay: '1s'}}>Data</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Focused</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 animate-bounce-slow hover:scale-110 group"
      >
        <ChevronDown size={32} className="group-hover:animate-pulse" />
      </button>
    </section>
  );
};

export default Hero;