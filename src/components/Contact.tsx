import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi Himanshu, I would like to connect with you!');
    window.open(`https://wa.me/+919198922772?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-tertiary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-secondary text-[14px] uppercase tracking-wider">Get in touch</p>
          <h2 className="text-gradient font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h2>
        </motion.div>

        <div className="mt-20 flex flex-col lg:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 glass-card hover-card rounded-2xl p-8"
          >
            <h3 className="text-white text-[24px] font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-secondary"
              >
                <Phone className="w-6 h-6 text-violet-500" />
                <span>+91 9198922772</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-secondary"
              >
                <Mail className="w-6 h-6 text-violet-500" />
                <span>himanshubisen14@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-secondary"
              >
                <MapPin className="w-6 h-6 text-violet-500" />
                <span>Bhopal, Madhya Pradesh, India</span>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="mt-8 w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <Send className="w-5 h-5" />
              Message on WhatsApp
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 glass-card hover-card rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:border-violet-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:border-violet-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-lg p-3 focus:outline-none focus:border-violet-500 transition-colors"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/25"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;