import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'david.gunawan888@gmail.com',
      link: 'mailto:david.gunawan888@gmail.com'
    },
    // {
    //   icon: <Phone className="w-6 h-6" />,
    //   title: 'Phone',
    //   value: '+62 123 456 7890',
    //   link: 'tel:+621234567890'
    // },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Sydney, Australia',
      link: '#'
    },
    // {
    //   icon: <Calendar className="w-6 h-6" />,
    //   title: 'Schedule Call',
    //   value: 'Book a consultation',
    //   link: '#'
    // }
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, name: 'GitHub', url: 'https://github.com/Gunawan888', color: 'hover:bg-slate-600' },
    { icon: <Linkedin className="w-6 h-6" />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/david-gunawan-91bbb6150/', color: 'hover:bg-blue-600' },
    // { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', url: '#', color: 'hover:bg-cyan-500' },
    { icon: <Mail className="w-6 h-6" />, name: 'Email', url: 'mailto:david.gunawan888@gmail.com', color: 'hover:bg-emerald-600' }
  ];


  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Let's Collaborate
          </h2>
          {/* <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss your AI and data science needs.
          </p> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-left">
            {/* <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Whether you need help with machine learning implementation, data strategy, 
                or want to explore AI opportunities for your business, I'm here to help. 
                Let's turn your data challenges into competitive advantages.
              </p>
            </div> */}

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-slate-200/50 dark:hover:border-slate-600/50 backdrop-blur-sm"
                >
                  <div className="text-emerald-600 dark:text-emerald-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors group-hover:scale-110 group-hover:rotate-3 duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">{info.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Consultation Types */}
            {/* <div className="pt-8 border-t border-slate-200/50 dark:border-slate-600/50">
              <h4 className="font-medium text-slate-800 dark:text-white mb-4">Consultation Areas</h4>
              <div className="space-y-2">
                {consultationTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-600 dark:text-slate-300 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="pt-8 border-t border-slate-200/50 dark:border-slate-600/50">
              <h4 className="font-medium text-slate-800 dark:text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-white/80 dark:bg-slate-700/80 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 backdrop-blur-sm ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-slate-900/80 p-8 rounded-3xl shadow-lg animate-fade-in-right border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Start a Conversation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300/50 dark:border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300/50 dark:border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              {/* <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300/50 dark:border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600"
                >
                  <option value="">Select project type</option>
                  <option value="ml-consulting">ML Consulting</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="ai-implementation">AI Implementation</option>
                  <option value="training">Training & Workshops</option>
                  <option value="other">Other</option>
                </select>
              </div> */}
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300/50 dark:border-slate-600/50 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-600"
                  placeholder="Tell me about your data challenges, goals, and timeline..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-violet-600 text-white py-3 px-6 rounded-2xl font-semibold hover:from-emerald-700 hover:to-violet-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
{/* 
            <div className="mt-6 p-4 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 backdrop-blur-sm">
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                <strong>Response Time:</strong> I typically respond within 24 hours. 
                For urgent projects, please mention it in your message.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;