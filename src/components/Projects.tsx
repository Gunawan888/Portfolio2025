import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Brain, TrendingUp, Shield, Zap, Bot, Sparkles, Activity, Cpu } from 'lucide-react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI-Powered Customer Analytics Platform',
      description: 'End-to-end ML pipeline with neural networks for customer behavior prediction. Features real-time inference, automated retraining, and explainable AI insights.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Kafka', 'Docker'],
      icon: <TrendingUp className="w-6 h-6" />,
      aiFeatures: ['Deep Learning', 'Real-time Inference', 'AutoML'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Computer Vision Quality Control AI',
      description: 'Advanced deep learning model for automated defect detection using CNNs and transfer learning. Deployed on edge devices with 99.2% accuracy.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PyTorch', 'OpenCV', 'FastAPI', 'AWS', 'MLflow'],
      icon: <Brain className="w-6 h-6" />,
      aiFeatures: ['Computer Vision', 'Edge AI', 'Transfer Learning'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Intelligent Fraud Detection System',
      description: 'Real-time fraud detection using ensemble methods, graph neural networks, and anomaly detection. Processes millions of transactions with sub-second latency.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Scikit-learn', 'Neo4j', 'Redis', 'Kubernetes', 'Grafana'],
      icon: <Shield className="w-6 h-6" />,
      aiFeatures: ['Graph Neural Networks', 'Anomaly Detection', 'Real-time ML'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'NLP Sentiment Analysis Engine',
      description: 'Multi-language sentiment analysis using transformer models and BERT. Features emotion detection, aspect-based sentiment, and real-time processing.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Transformers', 'BERT', 'FastAPI', 'GCP', 'Terraform'],
      icon: <Zap className="w-6 h-6" />,
      aiFeatures: ['Transformers', 'BERT', 'Multi-language NLP'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Background AI Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        <Bot className="absolute top-20 left-20 w-24 h-24 text-emerald-400 animate-float" />
        <Cpu className="absolute bottom-32 right-32 w-20 h-20 text-violet-400 animate-float-delay-1" />
        <Sparkles className="absolute top-1/2 left-1/4 w-16 h-16 text-pink-400 animate-spin-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-emerald-100/80 to-violet-100/80 dark:from-emerald-900/30 dark:to-violet-900/30 rounded-2xl backdrop-blur-sm animate-float border border-emerald-200/50 dark:border-emerald-800/50">
              <Bot className="w-8 h-8 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-600 hover:to-violet-600 transition-all duration-300">
            AI-Powered Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto hover:text-slate-700 dark:hover:text-slate-200 transition-colors duration-300">
            Real-world AI and machine learning solutions with measurable business impact and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/80 dark:bg-slate-900/80 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-slate-700/30 transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* AI Processing Indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-1 bg-black/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span className="text-xs text-white font-mono">AI Active</span>
                </div>

                <div className="absolute top-4 left-4 p-2 bg-white/90 dark:bg-slate-900/90 rounded-2xl backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-emerald-600 dark:text-emerald-400 group-hover:animate-pulse">
                    {project.icon}
                  </div>
                </div>

                {/* AI Features Overlay */}
                {hoveredProject === index && (
                  <div className="absolute bottom-4 left-4 right-4 animate-fade-in-up">
                    <div className="flex flex-wrap gap-2">
                      {project.aiFeatures.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-2 py-1 bg-emerald-600/80 text-white text-xs rounded-full backdrop-blur-sm animate-fade-in-up"
                          style={{ animationDelay: `${featureIndex * 0.1}s` }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-2xl text-sm font-mono hover:scale-105 transition-transform duration-300 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50 cursor-pointer group/tech"
                    >
                      <span className="group-hover/tech:animate-pulse">{tech}</span>
                    </span>
                  ))}
                </div>

                {/* AI Capabilities Badge */}
                <div className="mb-4 p-3 bg-gradient-to-r from-emerald-50/80 to-violet-50/80 dark:from-emerald-900/20 dark:to-violet-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:animate-spin" />
                    <span className="text-sm font-medium text-emerald-800 dark:text-emerald-300">AI-Powered Solution</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.aiFeatures.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-emerald-700 dark:text-emerald-400 opacity-80">
                        {feature}{featureIndex < project.aiFeatures.length - 1 ? ' • ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      className="group/link flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors hover:scale-105 duration-300"
                    >
                      <ExternalLink size={16} className="group-hover/link:animate-bounce" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="group/link flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors hover:scale-105 duration-300"
                    >
                      <Github size={16} className="group-hover/link:animate-bounce" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                  <ArrowRight size={16} className="text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover Animation */}
                {hoveredProject === index && (
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Projects;