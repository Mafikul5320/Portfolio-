'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  MapPin,
  User,
  CheckCircle,
  ArrowRight,
  Globe,
  Star,
  Sparkles,
  Heart,
  Linkedin,
  Github,
  Facebook,
  Copy,
  Check,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
    }, 3000);
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'mdmafikul.islam53@gmail.com',
      description: 'Drop me an email anytime',
      href: 'mailto:mdmafikul.islam53@gmail.com',
      gradient: 'from-blue-500 via-cyan-500 to-teal-400',
      bgGlow: 'bg-blue-500/20',
      available: 'Usually respond within 24h'
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '+880 1796-048427',
      description: 'For urgent inquiries',
      href: 'tel:+8801796048427',
      gradient: 'from-emerald-500 via-green-500 to-teal-500',
      bgGlow: 'bg-green-500/20',
      available: 'Available 10AM - 10PM (BST)'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: '+880 1796-048427',
      description: 'Quick chat anytime',
      href: 'https://wa.me/8801796048427',
      gradient: 'from-green-400 via-emerald-500 to-green-600',
      bgGlow: 'bg-emerald-500/20',
      available: 'Usually online'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Uttara, Dhaka',
      description: 'Bangladesh 🇧🇩',
      href: '#',
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      bgGlow: 'bg-purple-500/20',
      available: 'Open to remote work'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mafikulislam/', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/50 hover:shadow-blue-500/20' },
    { icon: Github, href: 'https://github.com/Mafikul5320', label: 'GitHub', color: 'hover:text-gray-300 hover:border-gray-300/50 hover:shadow-gray-400/20' },
    { icon: Facebook, href: 'https://www.facebook.com/mdmafikul.islam.3388', label: 'Facebook', color: 'hover:text-blue-500 hover:border-blue-500/50 hover:shadow-blue-500/20' },
    { icon: Mail, href: 'mailto:mdmafikul.islam53@gmail.com', label: 'Email', color: 'hover:text-red-400 hover:border-red-400/50 hover:shadow-red-500/20' },
  ];

  const projectTypes = [
    { name: 'Web Development', popular: true },
    { name: 'Mobile App', popular: false },
    { name: 'E-commerce', popular: true },
    { name: 'API Development', popular: false },
    { name: 'Consulting', popular: false },
    { name: 'Other', popular: false }
  ];

  const budgetRanges = [
    '$100 - $200',
    '$200 - $300',
    '$300 - $350',
    '$500+'
  ];

  const timelines = [
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months'
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/8 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/8 dark:bg-pink-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100/80 dark:bg-purple-900/30 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-purple-200/50 dark:border-purple-500/30">
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Let&apos;s Create Something
            <span className="block bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x mt-2">
              Amazing Together
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I&apos;m here to help you build exceptional digital experiences
            that make a lasting impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column — Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Methods Card */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Decorative corner glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Send className="h-4 w-4 text-white" />
                </span>
                Contact Info
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Feel free to reach out through any channel</p>
              
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="group relative flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50/80 dark:hover:bg-gray-700/40 transition-all duration-300 border border-transparent hover:border-purple-500/20"
                  >
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 flex-shrink-0`}>
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium truncate">{method.value}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{method.available}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 dark:text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300 mt-1 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Copy Card */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Quick Copy</h4>
              <div className="space-y-3">
                <button
                  onClick={() => handleCopy('mdmafikul.islam53@gmail.com', 'email')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 group border border-gray-200/50 dark:border-gray-600/50"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                    <span className="text-sm text-gray-600 dark:text-gray-300 truncate">mdmafikul.islam53@gmail.com</span>
                  </div>
                  {copiedField === 'email' ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  )}
                </button>
                <button
                  onClick={() => handleCopy('+8801796048427', 'phone')}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200 group border border-gray-200/50 dark:border-gray-600/50"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">+880 1796-048427</span>
                  </div>
                  {copiedField === 'phone' ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm">Connect With Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center p-3.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-5 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 group hover:border-purple-500/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">24h</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Avg. Response</div>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl p-5 text-center shadow-lg border border-gray-200/50 dark:border-gray-700/50 group hover:border-purple-500/30 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center gap-1">
                  100<span className="text-lg">%</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center justify-center gap-1">
                  <Heart className="h-3 w-3 text-red-400" /> Dedication
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-3xl"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Globe className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Start Your Project</h3>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Tell me about your project and let&apos;s discuss how we can work together.</p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25 animate-bounce-slow">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Sent Successfully!</h4>
                    <p className="text-gray-500 dark:text-gray-400">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Full Name <span className="text-pink-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 backdrop-blur-sm text-sm"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email Address <span className="text-pink-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-500 transition-colors" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 backdrop-blur-sm text-sm"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Project Type
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type, index) => (
                          <label key={index} className="relative cursor-pointer">
                            <input
                              type="radio"
                              name="subject"
                              value={type.name}
                              checked={formData.subject === type.name}
                              onChange={handleChange}
                              className="sr-only peer"
                            />
                            <div className="p-3 border border-gray-200 dark:border-gray-600/50 rounded-xl peer-checked:border-purple-500 peer-checked:bg-purple-50/80 dark:peer-checked:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-200 backdrop-blur-sm">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 peer-checked:text-purple-600">{type.name}</span>
                                {type.popular && (
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                )}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-gray-50/80 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 backdrop-blur-sm text-sm"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-gray-50/80 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 backdrop-blur-sm text-sm"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Project Description <span className="text-pink-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 bg-gray-50/80 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/50 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none backdrop-blur-sm text-sm"
                        placeholder="Tell me about your project goals, requirements, and any specific features you have in mind..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] hover:bg-right disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3 disabled:cursor-not-allowed disabled:transform-none group overflow-hidden"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          <span>Send Message</span>
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-400 dark:text-gray-500 text-center leading-relaxed">
                      By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
