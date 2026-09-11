import React, { useState } from 'react';
import apiService from '../services/api';

export const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Custom Web Development',
    customService: '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState({ loading: false, success: null, message: '' });

  if (!isOpen) return null;

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
        message: res.message || 'Thank you! Your call request has been sent successfully.',
      });
      setTimeout(() => {
        onClose();
        setStatus({ loading: false, success: null, message: '' });
        setFormData({ name: '', email: '', service: 'Custom Web Development', customService: '', budget: '', message: '' });
      }, 8000);
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: err.message || 'Error sending call request. Please try again.',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl border border-slate-200 shadow-2xl p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors p-1"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="mb-6">
          <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
            Book a Technical Discovery Call
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Schedule a session with our team to discuss your project requirements.
          </p>
        </div>

        {status.success === true && (
          <div className="mb-6 p-5 bg-secondary-container text-on-secondary-container rounded-xl font-label-md space-y-3">
            <div className="flex items-center text-base font-bold">
              <span className="material-symbols-outlined mr-2 text-xl">check_circle</span>
              {status.message}
            </div>
            <p className="text-xs opacity-90">
              Notification sent to <strong>technimay@gmail.com</strong>. Chat with us on WhatsApp:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={`https://wa.me/919545129542?text=${encodeURIComponent('Hello TechNiMay Solutions! I just booked a call on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-secondary text-on-secondary rounded-lg font-semibold text-xs hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined mr-1 text-sm">chat</span>
                WhatsApp (+91 95451 29542)
              </a>
              <a
                href={`https://wa.me/918329262125?text=${encodeURIComponent('Hello TechNiMay Solutions! I just booked a call on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-secondary text-on-secondary rounded-lg font-semibold text-xs hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined mr-1 text-sm">chat</span>
                WhatsApp (+91 8329262125)
              </a>
            </div>
          </div>
        )}

        {status.success === false && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-xl font-label-md flex items-center">
            <span className="material-symbols-outlined mr-2">error</span>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-on-surface mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Alex Smith"
              required
              className="w-full px-4 py-2.5 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="alex@techfirm.com"
              required
              className="w-full px-4 py-2.5 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1">Service Required</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary outline-none"
              >
                <option value="Custom Web Development">Web Development</option>
                <option value="Mobile App Development">Mobile Apps</option>
                <option value="Full-Stack Engineering">Full-Stack</option>
                <option value="AI & Automation Integration">AI & Automation</option>
                <option value="IoT & Smart Automation">IoT & Automation</option>
                <option value="Digital Marketing & Growth">Digital Marketing & Growth</option>
                <option value="Other / Custom Software">Other / Custom Software</option>
              </select>

              {formData.service === 'Other / Custom Software' && (
                <input
                  type="text"
                  name="customService"
                  value={formData.customService}
                  onChange={handleChange}
                  placeholder="Type your required software / custom solution..."
                  required
                  className="mt-2 w-full px-4 py-2.5 rounded-md bg-surface-container-lowest border border-primary focus:ring-2 focus:ring-primary/20 outline-none animate-fadeIn text-sm"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1">Budget (in ₹)</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="e.g. ₹50,000 - ₹1,50,000"
                className="w-full px-4 py-2.5 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-on-surface mb-1">Notes / Scope *</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Brief summary of your project goals..."
              required
              className="w-full px-4 py-2.5 rounded-md bg-surface-container-lowest border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-md text-on-surface-variant font-label-md hover:bg-surface-container"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={status.loading}
              className="px-6 py-2.5 bg-primary text-on-primary rounded-md font-label-md font-bold hover:bg-primary-hover hover:text-white transition-all cursor-pointer disabled:opacity-50"
            >
              {status.loading ? 'Booking...' : 'Confirm Call Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
