'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react';
import { useViewMode } from '@/contexts/ViewModeContext';

const Reservation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { viewMode } = useViewMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservation" className={`bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden ${
      viewMode === 'mobile' ? 'py-12' : 'py-24'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div ref={ref} className={`mx-auto relative z-10 ${viewMode === 'mobile' ? 'px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8'}`}>
        <div className={`grid items-center ${viewMode === 'mobile' ? 'grid-cols-1 gap-8' : 'lg:grid-cols-2 gap-12'}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-600/30">
              Book a Table
            </span>
            <h2 className={`font-display font-bold mb-6 ${viewMode === 'mobile' ? 'text-2xl' : 'text-4xl md:text-5xl'}`}>
              Reserve Your <span className="text-primary-400">Experience</span>
            </h2>
            <p className={`text-gray-400 mb-8 ${viewMode === 'mobile' ? 'text-base' : 'text-xl'}`}>
              Join us for an unforgettable dining experience. Book your table now 
              and let us take care of the rest.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-lg font-semibold text-gray-100">+1 (555) 123-4567</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-lg font-semibold text-gray-100">info@savoria.com</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-primary-600/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Hours</div>
                  <div className="text-lg font-semibold text-gray-100">Mon-Sun: 5:00 PM - 11:00 PM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`bg-gradient-to-br from-dark-800/50 to-dark-900/50 backdrop-blur-sm rounded-2xl border border-dark-700 ${
                viewMode === 'mobile' ? 'p-4' : 'p-8'
              }`}
            >
              <div className={`grid mb-6 ${viewMode === 'mobile' ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-6'}`}>
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-xl text-gray-100 focus:outline-none focus:border-primary-600 transition-colors resize-none"
                  placeholder="Any dietary restrictions or special occasions?"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-500 transition-all shadow-lg shadow-primary-600/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm Reservation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

