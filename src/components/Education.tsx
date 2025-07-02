import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, Trophy, Star, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Technology Sydney',
      location: 'Sydney, Australia',
      period: 'Mar 2018 - Nov 2019',
      description: 'Major in Data Analytics and Enterprise System Development',
      achievements: [
        "Dean's List 2019",
        'Best Thesis Award - Data Science Department',
        // 'Research published in IEEE Conference on Data Mining'
      ]
    },
    {
      degree: 'Diploma of Information Technology (Accelerated)',
      institution: 'UTS College',
      location: 'Sydney, Australia',
      period: 'Jun 2017 - Feb 2018',
      description: 'Finish diploma in 9 months and enter 2nd year in UTS',
      achievements: [
        "Future Leaders Scholarship recipient",
        "Dean's Merit 2018 recipient",
        "Outstanding Graduate Prize recipient"
      ]
    }
  ];

  const certifications = [
    {
      title: 'CX Technology Consultant',
      issuer: 'Qualtrics',
      date: '2025',
      icon: <Award className="w-5 h-5" />,
      level: 'Professional',
      link: 'https://ti-user-certificates.s3.amazonaws.com/8866c3e7-9eee-4478-ac17-7dd4d8d06e96/6f24c322-874d-4260-b94f-ed394e78d31b-david-gunawan-ee5f6a3a-1563-428a-9cc7-9a9442e4d5a9-certificate.pdf?trk=public_profile_see-credential'
    },
    {
      title: 'Confluent Fundamentals Certification',
      issuer: 'Confluent',
      date: '2023',
      icon: <Award className="w-5 h-5" />,
      level: 'Professional',
      link: "https://www.credential.net/09ad94a9-4bc4-45b0-8733-e061bd9e4edc?trk=public_profile_see-credential"
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2020',
      icon: <Star className="w-5 h-5" />,
      level: 'Professional',
      link: 'https://www.credly.com/badges/0255787f-1ac1-4c0f-a05e-be441db8dd2a/linked_in_profile?trk=public_profile_see-credential'
    },
    // {
    //   title: 'Microsoft Azure AI Engineer Associate',
    //   issuer: 'Microsoft',
    //   date: '2022',
    //   icon: <Award className="w-5 h-5" />,
    //   level: 'Associate'
    // },
    // {
    //   title: 'Tableau Desktop Certified Professional',
    //   issuer: 'Tableau',
    //   date: '2021',
    //   icon: <Trophy className="w-5 h-5" />,
    //   level: 'Professional'
    // },
    // {
    //   title: 'Deep Learning Specialization',
    //   issuer: 'DeepLearning.AI (Coursera)',
    //   date: '2021',
    //   icon: <BookOpen className="w-5 h-5" />,
    //   level: 'Specialization'
    // }
  ];

  const researchPapers = [
    {
      title: 'Predictive Analytics in Financial Markets using LSTM Networks',
      journal: 'IEEE Conference on Data Mining',
      year: '2021'
    },
    {
      title: 'Automated Feature Selection for Medical Diagnosis',
      journal: 'Journal of Artificial Intelligence in Medicine',
      year: '2020'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Education & Credentials
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Academic foundation and professional certifications in data science and AI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="animate-fade-in-left">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-emerald-100/80 dark:bg-emerald-900/30 rounded-2xl mr-4 backdrop-blur-sm">
                <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-50/80 to-emerald-50/80 dark:from-slate-800/80 dark:to-emerald-900/30 p-6 rounded-3xl hover:shadow-lg dark:hover:shadow-slate-700/30 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border border-slate-200/50 dark:border-slate-700/50 group backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-sm mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                  </div>

                  <div className="text-slate-600 dark:text-slate-300 mb-2">
                    <span className="font-medium">{edu.institution}</span> • {edu.location}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-medium text-slate-800 dark:text-white text-sm">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-slate-600 dark:text-slate-300 text-sm flex items-start hover:translate-x-2 transition-transform duration-300">
                          <span className="w-1.5 h-1.5 bg-emerald-600 dark:bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-right">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-violet-100/80 dark:bg-violet-900/30 rounded-2xl mr-4 backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-slate-50/80 dark:bg-slate-800/80 p-6 rounded-3xl hover:shadow-lg dark:hover:shadow-slate-700/30 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up border border-slate-200/50 dark:border-slate-700/50 group backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="text-violet-600 dark:text-violet-400 mt-1 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          {cert.issuer}
                        </p>
                        <span className="inline-block mt-1 px-3 py-1 bg-violet-100/80 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 rounded-2xl text-xs font-medium backdrop-blur-sm">
                          {cert.level}
                        </span>
                      </div>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                      {cert.date}
                    </span>
                  </div>
                  <br></br>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      <a
                        href={cert.link}
                        className="group/link flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors hover:scale-105 duration-300"
                      >
                        <ExternalLink size={16} className="group-hover/link:animate-bounce" />
                        <span className="text-sm font-medium">Link</span>
                      </a>
                      {/* <a
                        href={project.githubUrl}
                        className="group/link flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors hover:scale-105 duration-300"
                      >
                        <Github size={16} className="group-hover/link:animate-bounce" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    </div>
                    <ArrowRight size={16} className="text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Publications */}
        {/* <div className="animate-fade-in-up">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-pink-100/80 dark:bg-pink-900/30 rounded-2xl mr-4 backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-pink-600 dark:text-pink-400" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">Research Publications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPapers.map((paper, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-pink-50/80 to-violet-50/80 dark:from-pink-900/20 dark:to-violet-900/20 p-6 rounded-3xl border border-pink-200/50 dark:border-pink-800/50 hover:shadow-lg transition-all duration-500 group backdrop-blur-sm hover:-translate-y-1"
              >
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                  {paper.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                  {paper.journal} • {paper.year}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Continuous Learning */}
        {/* <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50/80 to-violet-50/80 dark:from-emerald-900/20 dark:to-violet-900/20 rounded-3xl border border-emerald-200/50 dark:border-emerald-800/50 animate-fade-in-up backdrop-blur-sm hover:shadow-lg transition-all duration-500 group">
          <h4 className="font-semibold text-slate-800 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Continuous Learning</h4>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            Staying current with the rapidly evolving field of AI and data science through ongoing research, 
            attending conferences like NeurIPS and ICML, and contributing to open-source ML projects. 
            Currently exploring Large Language Models and their applications in automated data analysis.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Education;