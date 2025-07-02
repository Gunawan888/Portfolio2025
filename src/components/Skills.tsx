import React, { useState } from 'react';
import { Brain, Database, BarChart3, Code, Cloud, Cpu, Bot, Zap, Activity, Sparkles, Blocks } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code className="w-6 h-6" />,
      color: 'cyan',
      skills: ['Python', 'R', 'SQL', 'Java', 'C#', 'Javascript', 'React', 'Flutter', 'Git'],
    },
    {
      title: 'Data Analysis',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'violet',
      skills: ['Pandas', 'NumPy', 'R', 'Statistical Analysis', 'A/B Testing', 'Time Series', 'SQL'],
    },
    // {
    //   title: 'Data Engineering',
    //   icon: <Database className="w-6 h-6" />,
    //   color: 'pink',
    //   skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Airflow', 'ETL Pipelines', 'Data Warehousing'],
    //   aiFeature: 'Intelligent Data Pipelines'
    // },

    {
      title: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      color: 'emerald',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost'],
    },
    {
      title: 'Visualization',
      icon: <Cpu className="w-6 h-6" />,
      color: 'orange',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'QGIS'],
      aiFeature: 'Interactive AI Dashboards'
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      color: 'indigo',
      skills: ['AWS', 'GCP', 'Azure', 'Docker', 'Firebase'],
    },
    {
      title: 'SaaS',
      icon: <Blocks className="w-6 h-6" />,
      color: 'cyan',
      skills: ['Qualtrics', 'Confirmit (Forsta)', 'Voxco', 'Salesforce', 'SAP', 'IBM SPSS'],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-50/80 dark:bg-emerald-900/20 border-emerald-200/50 dark:border-emerald-800/50 text-emerald-600 dark:text-emerald-400',
      violet: 'bg-violet-50/80 dark:bg-violet-900/20 border-violet-200/50 dark:border-violet-800/50 text-violet-600 dark:text-violet-400',
      pink: 'bg-pink-50/80 dark:bg-pink-900/20 border-pink-200/50 dark:border-pink-800/50 text-pink-600 dark:text-pink-400',
      cyan: 'bg-cyan-50/80 dark:bg-cyan-900/20 border-cyan-200/50 dark:border-cyan-800/50 text-cyan-600 dark:text-cyan-400',
      orange: 'bg-orange-50/80 dark:bg-orange-900/20 border-orange-200/50 dark:border-orange-800/50 text-orange-600 dark:text-orange-400',
      indigo: 'bg-indigo-50/80 dark:bg-indigo-900/20 border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const AIMLPipeline = () => (
    <div className="bg-gradient-to-r from-slate-50/80 to-emerald-50/80 dark:from-slate-800/80 dark:to-emerald-900/30 p-8 rounded-3xl mb-12 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 group hover:shadow-lg transition-all duration-500 relative overflow-hidden">
      {/* AI Processing Animation */}
      {/* <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-60">
        <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
        <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">AI Pipeline Active</span>
      </div> */}

      {/* Background AI Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <Bot className="absolute top-6 left-6 w-8 h-8 text-emerald-400 animate-pulse" />
        <Sparkles className="absolute bottom-6 right-6 w-6 h-6 text-violet-400 animate-spin-slow" />
      </div> */}

      {/* <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 relative z-10">
        My AI-Powered Data Science Approach
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
        {[
          { step: '01', title: 'Data Collection', desc: 'AI-assisted data gathering', icon: <Database className="w-4 h-4" /> },
          { step: '02', title: 'Smart EDA', desc: 'Automated pattern discovery', icon: <Brain className="w-4 h-4" /> },
          { step: '03', title: 'Feature Engineering', desc: 'ML-driven feature creation', icon: <Zap className="w-4 h-4" /> },
          { step: '04', title: 'Model Training', desc: 'Neural network optimization', icon: <Bot className="w-4 h-4" /> },
          { step: '05', title: 'AI Deployment', desc: 'Intelligent model serving', icon: <Cloud className="w-4 h-4" /> }
        ].map((item, index) => (
          <div key={index} className="text-center group/item cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-violet-600 text-white rounded-2xl flex items-center justify-center font-bold mx-auto mb-3 group-hover/item:scale-110 group-hover/item:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
              <span className="relative z-10">{item.step}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-violet-400 opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="flex justify-center mb-2">
              <div className="text-emerald-600 dark:text-emerald-400 group-hover/item:animate-bounce">
                {item.icon}
              </div>
            </div>
            <h4 className="font-semibold text-slate-800 dark:text-white mb-1 group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400 transition-colors duration-300">{item.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 group-hover/item:text-slate-700 dark:group-hover/item:text-slate-200 transition-colors duration-300">{item.desc}</p>
          </div>
        ))}
      </div> */}

      {/* AI Processing Indicator */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center space-x-3 px-4 py-2 bg-slate-100/80 dark:bg-slate-800/80 rounded-full backdrop-blur-sm">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">Processing with AI</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Background AI Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-400 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 border border-violet-400 rounded-lg rotate-45 animate-pulse"></div>
        <Bot className="absolute top-1/3 left-1/4 w-16 h-16 text-emerald-400 animate-float" />
        <Sparkles className="absolute bottom-1/3 right-1/4 w-12 h-12 text-violet-400 animate-float-delay-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-100/80 to-violet-100/80 dark:from-emerald-900/30 dark:to-violet-900/30 rounded-2xl backdrop-blur-sm animate-float border border-emerald-200/50 dark:border-emerald-800/50">
              <Brain className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-600 hover:to-violet-600 transition-all duration-300">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-300">
            Comprehensive Data Science and XM Implementation skillsets
          </p>
        </div>

        {/* <AIMLPipeline /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-slate-900/80 p-8 rounded-3xl shadow-lg hover:shadow-xl dark:hover:shadow-slate-700/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-slate-200/50 dark:border-slate-700/50 group backdrop-blur-sm cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className={`inline-flex p-3 rounded-2xl mb-6 ${getColorClasses(category.color)} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 backdrop-blur-sm border relative overflow-hidden`}>
                <div className="relative z-10">
                  {category.icon}
                </div>
                {activeCategory === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-violet-400/20 animate-pulse"></div>
                )}
              </div>

              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                {category.title}
              </h3>


              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-2xl text-sm font-medium hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all duration-300 animate-fade-in font-mono hover:scale-105 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 cursor-pointer group/skill"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="group-hover/skill:animate-pulse">{skill}</span>
                  </span>
                ))}
              </div>

              {/* Hover Animation */}
              {activeCategory === index && (
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI Capabilities Showcase */}

      </div>
    </section>
  );
};

export default Skills;