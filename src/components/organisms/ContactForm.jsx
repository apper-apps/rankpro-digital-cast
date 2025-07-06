import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import ApperIcon from '@/components/ApperIcon';

const ContactForm = ({ embedded = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'ppc', label: 'PPC Management' },
    { value: 'web-design', label: 'Web Design' },
    { value: 'content-marketing', label: 'Content Marketing' },
    { value: 'social-media', label: 'Social Media Marketing' },
    { value: 'consultation', label: 'Free Consultation' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send this data to your backend
      console.log('Form submitted:', formData);
      
      toast.success('Thank you! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

if (embedded) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Get Your Free Strategy Session
          </h3>
          <p className="text-blue-100 text-sm">
            Ready to grow your business? Let's discuss your goals.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="text-white placeholder-blue-200"
            />
            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="text-white placeholder-blue-200"
            />
            <FormField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="text-white placeholder-blue-200"
            />
            <FormField
              label="Service Interested In"
              name="service"
              type="select"
              value={formData.service}
              onChange={handleChange}
              required
              className="text-gray-900"
            >
              {services.map(service => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </FormField>
          </div>

          <Button
            type="submit"
            size="lg"
            variant="accent"
            loading={isSubmitting}
            className="w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <ApperIcon name="Send" size={20} />
                Get Free Analysis
              </>
            )}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Strategy Session
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to grow your business? Let's discuss how our digital marketing services can help you achieve your goals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-600 mb-8">
                  We're here to help you succeed. Get in touch with our team of digital marketing experts.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-lg p-3">
                    <ApperIcon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-lg p-3">
                    <ApperIcon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@rankprodigital.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-lg p-3">
                    <ApperIcon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Business Ave, Suite 100<br />Toronto, ON M5V 3A8</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary rounded-lg p-3">
                    <ApperIcon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why Choose RankPro Digital?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span>5+ years of proven expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span>500+ successful campaigns</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span>98% client satisfaction rate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ApperIcon name="Check" size={16} className="text-green-500" />
                    <span>30-day money-back guarantee</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  <FormField
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>

                <FormField
                  label="Service Interested In"
                  name="service"
                  type="select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </FormField>

                <FormField
                  label="Message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project and goals..."
                />

                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  loading={isSubmitting}
                  className="w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      <ApperIcon name="Send" size={20} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;