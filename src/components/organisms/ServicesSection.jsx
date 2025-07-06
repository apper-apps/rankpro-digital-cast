import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const ServicesSection = () => {
  const services = [
    {
      icon: 'Search',
      title: 'SEO Optimization',
      description: 'Dominate search results with our proven SEO strategies. We optimize your website to rank higher and attract more organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'MousePointer',
      title: 'PPC Management',
      description: 'Maximize your ROI with targeted PPC campaigns. We manage your ads to deliver qualified leads at the lowest cost.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'Palette',
      title: 'Web Design',
      description: 'Create stunning websites that convert visitors into customers. Our designs are modern, responsive, and optimized for performance.',
      features: ['Responsive Design', 'User Experience', 'Speed Optimization', 'Mobile-First'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to grow your online presence and drive measurable results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <ApperIcon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button size="lg" variant="primary" className="flex items-center gap-2">
              View All Services
              <ApperIcon name="ArrowRight" size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;