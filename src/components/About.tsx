import React from 'react';
import { Brain, TrendingUp, Database, Lightbulb, Target, Zap, Bot, Cpu, Sparkles, Activity } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />,
      title: 'Machine Learning',
      description: 'Developing predictive models and AI solutions using modern frameworks and methodologies.',
      aiFeature: 'Neural Networks & Deep Learning'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
      title: 'Data Analytics',
      description: 'Extracting meaningful insights from complex datasets through statistical analysis.',
      aiFeature: 'Automated Pattern Recognition'
    },
    {
      icon: <Database className="w-8 h-8 text-pink-600 dark:text-pink-400" />,
      title: 'Big Data Processing',
      description: 'Handling large-scale data processing with modern cloud platforms and tools.',
      aiFeature: 'Intelligent Data Pipelines'
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />,
      title: 'Business Intelligence',
      description: 'Creating dashboards and reports that drive strategic business decisions.',
      aiFeature: 'Predictive Analytics'
    }
  ];

  const AIDataFlow = () => (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-violet-100/50 dark:from-emerald-900/20 dark:to-violet-900/20 rounded-3xl backdrop-blur-sm group-hover:scale-105 transition-transform duration-500 animate-pulse"></div>
      
      {/* AI Processing Animation */}
      <div className="absolute top-4 right-4 opacity-30">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>

      <div className="relative p-8">
        <div className="flex items-center justify-between">
          <div className="text-center transform hover:scale-110 transition-all duration-300 group/item">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-2 mx-auto shadow-lg group-hover/item:shadow-xl group-hover/item:rotate-3 transition-all duration-300 relative overflow-hidden">
              <Database className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors duration-300">Raw Data</div>
          </div>
          
          <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500 to-violet-500 mx-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-emerald-400 to-violet-400 animate-pulse opacity-50"></div>
            <div className="absolute right-0 top-0 w-3 h-3 bg-violet-500 rounded-full transform -translate-y-1/2 animate-bounce"></div>
            {/* Data flow particles */}
            <div className="absolute left-1/4 top-0 w-1 h-1 bg-emerald-300 rounded-full transform -translate-y-1/2 animate-ping"></div>
            <div className="absolute left-3/4 top-0 w-1 h-1 bg-violet-300 rounded-full transform -translate-y-1/2 animate-ping" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="text-center transform hover:scale-110 transition-all duration-300 group/item">
            <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-2 mx-auto shadow-lg group-hover/item:shadow-xl group-hover/item:rotate-3 transition-all duration-300 relative overflow-hidden">
              <Bot className="w-8 h-8 text-white relative z-10 group-hover/item:animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-violet-500 opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-violet-600 dark:group-hover/item:text-violet-400 transition-colors duration-300">AI Processing</div>
          </div>
          
          <div className="flex-1 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 mx-4 relative overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-violet-400 to-pink-400 animate-pulse opacity-50"></div>
            <div className="absolute right-0 top-0 w-3 h-3 bg-pink-500 rounded-full transform -translate-y-1/2 animate-bounce" style={{animationDelay: '0.3s'}}></div>
            {/* AI processing particles */}
            <div className="absolute left-1/3 top-0 w-1 h-1 bg-violet-300 rounded-full transform -translate-y-1/2 animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute left-2/3 top-0 w-1 h-1 bg-pink-300 rounded-full transform -translate-y-1/2 animate-ping" style={{animationDelay: '0.7s'}}></div>
          </div>
          
          <div className="text-center transform hover:scale-110 transition-all duration-300 group/item">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-2 mx-auto shadow-lg group-hover/item:shadow-xl group-hover/item:rotate-3 transition-all duration-300 relative overflow-hidden">
              <Sparkles className="w-8 h-8 text-white relative z-10 group-hover/item:animate-spin" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-pink-600 dark:group-hover/item:text-pink-400 transition-colors duration-300">Smart Insights</div>
          </div>
        </div>

        {/* AI Activity Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm">
            <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">AI Processing Active</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-emerald-400 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background AI Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-violet-400 rounded-lg rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full animate-bounce-slow opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-100/80 to-violet-100/80 dark:from-emerald-900/30 dark:to-violet-900/30 rounded-2xl backdrop-blur-sm animate-float">
              <Cpu className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-600 hover:to-violet-600 transition-all duration-300">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-300">
            Passionate about turning data into stories and algorithms into solutions that shape tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in-left">
            <div className="prose prose-lg text-slate-600 dark:text-slate-300">
              <p className="transform hover:translate-x-2 transition-transform duration-300 hover:text-slate-700 dark:hover:text-slate-200 leading-relaxed">
                With extensive experience in data science and AI, I specialize in building 
                intelligent systems that solve real-world problems. My expertise spans from 
                exploratory data analysis to deploying production-ready machine learning models 
                that drive business transformation.
              </p>
              <p className="transform hover:translate-x-2 transition-transform duration-300 hover:text-slate-700 dark:hover:text-slate-200 leading-relaxed">
                I believe in the power of AI-driven decision making and the potential of machine learning 
                to revolutionize industries. When I'm not training neural networks or analyzing datasets, 
                you can find me contributing to open-source ML projects or researching the latest 
                developments in artificial intelligence and deep learning.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Python', 'R', 'SQL', 'IBM SPSS', 'Power BI','Azure', 'Qualtrics'].map((skill, index) => (
                <span 
                  key={skill} 
                  className="group px-4 py-2 bg-gradient-to-r from-emerald-100/80 to-violet-100/80 dark:from-emerald-900/30 dark:to-violet-900/30 text-emerald-800 dark:text-emerald-300 rounded-2xl text-sm font-medium animate-fade-in-up font-mono hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50 hover:shadow-lg cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:animate-pulse">{skill}</span>
                </span>
              ))}
            </div>

          </div>

          <div className="animate-fade-in-right">
            <AIDataFlow />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-50/80 dark:bg-slate-800/80 rounded-3xl hover:shadow-lg dark:hover:shadow-slate-700/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:border-emerald-200/50 dark:hover:border-emerald-800/50 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {highlight.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                {highlight.description}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;