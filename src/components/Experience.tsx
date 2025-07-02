import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {


  const experiences = [
    {
      title: 'Senior Consultant (Customer & Growth)',
      company: 'Ernst & Young',
      location: 'Sydney',
      period: 'Sep 2023 - Present',
      description: "As a Senior Consultant within EY's Customer and Growth practice, I advise clients on developing and implementing customer-centric strategies and solutions to drive sustainable growth and enhance competitive advantage.",
      responsibility: [
        'Designing and implementing comprehensive Customer Experience (CX) programs through various methodologies, including survey development and deployment.',
        'Performing advanced data cleaning and manipulation using scripting languages such as Python and R to ensure data quality and integrity for robust analysis.',
        'Developing impactful data visualizations (Power BI, QGIS, Powerpoint) to translate complex insights into actionable recommendations for clients.',
        'Leading full Qualtrics XM platform implementations, encompassing survey design, program configuration, and advanced dashboarding.',
        'Integrating Qualtrics XM with various third-party systems including CRM, ERP, and other critical business applications to create a unified view of customer data.'
      ],
      skills: ['Python', 'R', 'Qualtrics', 'Javascript', 'Power BI', 'QGIS', 'Salesforce', 'Excel', 'Powerpoint', 'IBM SPSS'],
    },
    {
      title: 'Technical Consultant',
      company: 'Watermelon Research',
      location: 'Sydney, Australia',
      period: 'Dec 2020 - Sep 2023',
      description: 'As a technical consultant, I oversaw the deliveries of multiple large-scale Voice of Customer (VoC) programnmes. Some of my clients includes Big 4 Banks and FMCGs.',
      responsibility: [
        'Technical delivery of online software solutions, such as surveys, reporting and dashboarding tools (based on a SaaS environment (Confirmit) using ASP, JScript.NET, jQuery, HTML and CSS)',
        'Developing bespoke dashboards using Confirmit Reportal (Integrated with Highcharts)',
        'Implementation and maintenance of automation processes using Python script',
        'Liaising with stakeholders to scope out technical feasibility, advising on best practice and formalising specifications'
      ],
      skills: ['Python', 'Javascript', 'JScript.NET', 'Confirmit (Forsta)', 'Highcharts', 'Powerpoint', 'Excel'],
    },
    {
      title: 'Data Analyst (Salesforce)',
      company: 'Eco Outdoor Group',
      location: 'Sydney, Australia',
      period: 'Dec 2019 - Apr 2020',
      description: 'Performed exploratory data analysis and created business intelligence reports. Collaborated with cross-functional teams to identify data-driven opportunities.',
      responsibility: [
        'Developed and managed real-time sales performance dashboard (based on Salesforce environment using HTML, CSS, and Salesforce Object Query Language)',
        'Generated weekly sales KPI report for sales manager (Power BI & Excel)',
        'Provided Salesforce administrative support to sales team & managed data integrity between Salesforce and NetSuite',
        'Planned and set up dashboard hierarchy management for users across Australia and USA'
      ],
      skills: ['Salesforce', 'Power BI', 'Excel', 'Javascript'],
    },
    {
      title: 'Research Assistant',
      company: 'Global Big Data Technology Center (Under UTS)',
      location: 'Sydney, Australia',
      period: 'Dec 2018 - Aug 2019',
      description: 'Working with Dr Jing Song Xu on Automatic Sheep Counting in Live Export Industry research. My responsibility includes:',
      responsibility: [
        'Preprocessed sheep training datasets and performed anomaly detection using Python script',
        'Trained and improved the performance of TensorFlow Mobile model',
        'Evaluated & benchmarked several object detection model frameworks such as TensorFlow, OpenCV, SSD Mobile'
      ],
      skills: ['Python', 'Tensorflow', 'OpenCV'],
    },
    {
      title: 'Teaching Assistant (Java)',
      company: 'University of Technology Sydney',
      location: 'Sydney, Australia',
      period: 'Dec 2018 - Dec 2019',
      description: 'As a Teaching Assistant, I provided support to lecturers and tutors with preparing and delivering learning materials to undergraduate students in the Java Programming subject.',
      responsibility: [
        'Preparing and delivering Java programming learning materials to undergraduate students',
        'Assisted the group of up to 18 students by overseeing their lesson participation, offering practical exercises in class, and supervising assessments and exams',
      ],
      skills: ['Java'],
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
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-600 to-violet-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
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

                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, index) => (
                        <span
                          key={skill}
                          className="group px-4 py-2 bg-gradient-to-r from-emerald-100/80 to-violet-100/80 dark:from-emerald-900/30 dark:to-violet-900/30 text-emerald-800 dark:text-emerald-300 rounded-2xl text-sm font-medium animate-fade-in-up font-mono hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/50 hover:shadow-lg cursor-pointer"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <span className="group-hover:animate-pulse">{skill}</span>
                        </span>
                        
                      ))}
                    </div>

                    <br></br>

                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-800 dark:text-white flex items-center">
                        <Award size={16} className="mr-2 text-violet-600 dark:text-violet-400" />
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibility.map((responsibility, responsibilityIndex) => (
                          <li key={responsibilityIndex} className="text-slate-600 dark:text-slate-300 text-sm flex items-start hover:translate-x-2 transition-transform duration-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-emerald-600 to-violet-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {responsibility}
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