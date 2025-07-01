import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior AI/ML Engineer',
      company: 'TechCorp AI Solutions',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Leading AI initiatives and machine learning model development for enterprise clients. Architecting scalable ML pipelines and mentoring junior data scientists.',
      achievements: [
        'Led development of production ML systems serving millions of users',
        'Implemented MLOps practices reducing deployment time significantly',
        'Mentored team of data scientists and ML engineers',
        'Drove adoption of modern ML frameworks and best practices'
      ]
    },
    {
      title: 'Data Scientist',
      company: 'FinTech Innovations',
      location: 'Jakarta, Indonesia',
      period: '2020 - 2022',
      description: 'Developed predictive models for financial risk assessment and fraud detection. Built real-time analytics dashboards for executive decision making.',
      achievements: [
        'Built fraud detection system with industry-leading performance',
        'Created customer segmentation models improving business outcomes',
        'Developed credit scoring algorithms with high accuracy',
        'Presented insights to C-level executives regularly'
      ]
    },
    {
      title: 'Junior Data Analyst',
      company: 'DataDriven Consulting',
      location: 'Jakarta, Indonesia',
      period: '2019 - 2020',
      description: 'Performed exploratory data analysis and created business intelligence reports. Collaborated with cross-functional teams to identify data-driven opportunities.',
      achievements: [
        'Automated manual reporting processes across multiple departments',
        'Created interactive dashboards for various business units',
        'Identified significant operational cost savings opportunities',
        'Trained stakeholders on data visualization tools and techniques'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My journey through data science and AI roles with meaningful business impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-200 via-violet-200 to-pink-200 dark:from-emerald-800 dark:via-violet-800 dark:to-pink-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-600 to-violet-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gradient-to-r from-slate-50/80 to-emerald-50/80 dark:from-slate-800/80 dark:to-emerald-900/30 p-6 rounded-3xl shadow-lg hover:shadow-xl dark:hover:shadow-slate-700/30 transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50 group backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-sm">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 mb-4">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-800 dark:text-white flex items-center">
                        <Award size={16} className="mr-2 text-violet-600 dark:text-violet-400" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-slate-600 dark:text-slate-300 text-sm flex items-start hover:translate-x-2 transition-transform duration-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-violet-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;