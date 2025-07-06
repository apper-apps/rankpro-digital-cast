import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import ContactForm from '@/components/organisms/ContactForm';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import contentService from '@/services/api/contentService';

const WebDesign = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      const pageContent = await contentService.getPageContent('webDesign');
      setContent(pageContent);
    } catch (err) {
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!content) return <Error message="Content not found" />;

  const features = [
    {
      icon: 'Palette',
      title: 'Custom Design',
      description: 'Unique, brand-focused designs that reflect your business identity and values.'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile-First Development',
      description: 'Responsive designs optimized for all devices, ensuring perfect user experience across platforms.'
    },
    {
      icon: 'Zap',
      title: 'Performance Optimization',
      description: 'Fast-loading websites with optimized code and assets for superior user experience.'
    },
    {
      icon: 'Search',
      title: 'SEO-Friendly Structure',
      description: 'Built with search engine optimization in mind to improve your online visibility.'
    },
    {
      icon: 'Shield',
      title: 'Security & Reliability',
      description: 'Secure coding practices and reliable hosting solutions for peace of mind.'
    },
    {
      icon: 'Users',
      title: 'User Experience Focus',
      description: 'Intuitive navigation and user-centered design to maximize engagement and conversions.'
    }
  ];

  const services = [
    {
      title: 'Website Design',
      description: 'Custom website design from concept to launch',
      icon: 'Monitor',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'E-commerce Development',
      description: 'Online stores with secure payment processing',
      icon: 'ShoppingCart',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'CMS Integration',
      description: 'Content management systems for easy updates',
      icon: 'Edit',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Landing Pages',
      description: 'High-converting landing pages for campaigns',
      icon: 'Target',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
<ApperIcon name="Palette" size={40} className="text-white" />
              </div>
<h1 className="text-4xl md:text-6xl font-bold mb-6">
                {content.title}
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl lg:max-w-none">
                {content.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="accent" className="flex items-center gap-2">
                  <ApperIcon name="Eye" size={20} />
                  View Our Portfolio
                </Button>
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <ApperIcon name="Phone" size={20} />
                  Call (555) 123-4567
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:max-w-lg mx-auto w-full"
            >
              <ContactForm embedded />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create websites that not only look amazing but also perform exceptionally well in search engines and convert visitors into customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple landing pages to complex e-commerce platforms, we deliver web solutions that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ApperIcon name={service.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your website project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Planning',
                description: 'We analyze your business, goals, and target audience to create a strategic plan.',
                icon: 'Search'
              },
              {
                step: '02',
                title: 'Design & Wireframing',
                description: 'Create wireframes and design mockups that align with your brand and goals.',
                icon: 'Layout'
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Build your website with clean code and test across all devices and browsers.',
                icon: 'Code'
              },
              {
                step: '04',
                title: 'Launch & Support',
                description: 'Launch your website and provide ongoing support and maintenance.',
                icon: 'Rocket'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={process.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's create a website that not only looks amazing but also drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Calendar" size={20} />
                Schedule Free Consultation
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="flex items-center gap-2">
                  <ApperIcon name="MessageCircle" size={20} />
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDesign;