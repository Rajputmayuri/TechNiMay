import React, { useState } from 'react';
import apiService from '../services/api';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Web Development',
    customService: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, message: 'Please fill in all required fields.' });
      return;
    }

    if (formData.service === 'Other / Custom Software' && !formData.customService.trim()) {
      setStatus({ loading: false, success: false, message: 'Please specify your custom software or service requirement.' });
      return;
    }

    setStatus({ loading: true, success: null, message: '' });
    try {
      const payload = {
        ...formData,
        service: formData.service === 'Other / Custom Software' ? `Custom Software: ${formData.customService}` : formData.service,
      };
      const res = await apiService.submitContact(payload);
      setStatus({
        loading: false,
        success: true,
        message: res.message || 'Thank you! Your message has been received. We will get back to you shortly.',
      });
      setFormData({ name: '', email: '', service: 'Custom Web Development', customService: '', budget: '', message: '' });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: err.message || 'An error occurred while submitting your message. Please try again.',
      });
    }
  };

  return (
    <section className="py-xl px-margin max-w-container-max mx-auto border-t border-outline-variant/30" id="contact">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-md">
        <div className="text-center mb-10">
          <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-3">
            Start a Conversation
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tell us about your project goals, timelines, and technical requirements.
          </p>
        </div>

        {status.success === true && (
          <div className="mb-8 p-6 bg-secondary-container text-on-secondary-container rounded-xl font-label-md space-y-4">
            <div className="flex items-center text-lg font-bold">
              <span className="material-symbols-outlined mr-2 text-2xl">check_circle</span>
              {status.message}
            </div>
            <p className="text-sm opacity-90">
              Your inquiry has been sent to our team at <strong>technimay@gmail.com</strong>. You can also connect with us instantly on WhatsApp:
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={`https://wa.me/919545129542?text=${encodeURIComponent('Hello TechNiMay Solutions! I just submitted a message on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 bg-secondary text-on-secondary rounded-lg font-semibold text-sm hover:opacity-90 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined mr-1.5 text-lg">chat</span>
                WhatsApp (+91 95451 29542)
              </a>
              <a
                href={`https://wa.me/918329262125?text=${encodeURIComponent('Hello TechNiMay Solutions! I just submitted a message on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 bg-secondary text-on-secondary rounded-lg font-semibold text-sm hover:opacity-90 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined mr-1.5 text-lg">chat</span>
                WhatsApp (+91 8329262125)
              </a>
            </div>
          </div>
        )}

        {status.success === false && (
          <div className="mb-8 p-4 bg-error-container text-on-error-container rounded-xl font-label-md flex items-center">
            <span className="material-symbols-outlined mr-2">error</span>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="name">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                className="w-full px-4 py-3 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="service">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              >
                <option value="Custom Web Development">Custom Web Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="Full-Stack Engineering">Full-Stack Software Engineering</option>
                <option value="AI & Automation Integration">AI & Automation Integration</option>
                <option value="IoT & Smart Automation">IoT & Smart Automation</option>
                <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                <option value="Other / Custom Software">Other / Custom Software (Specify below)</option>
              </select>

              {formData.service === 'Other / Custom Software' && (
                <input
                  type="text"
                  name="customService"
                  value={formData.customService}
                  onChange={handleChange}
                  placeholder="Type your required software / custom solution..."
                  required
                  className="mt-3 w-full px-4 py-3 rounded-md bg-surface-container-lowest border border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all animate-fadeIn"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="budget">
                Estimated Budget (in ₹)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g. ₹50,000 - ₹1,50,000"
                className="w-full px-4 py-3 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-2" htmlFor="message">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project, goals, and target timeline..."
              required
              className="w-full px-4 py-3 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full py-4 bg-primary text-on-primary rounded-md font-label-md font-bold hover:bg-primary-hover hover:text-white transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-50"
          >
            {status.loading ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
