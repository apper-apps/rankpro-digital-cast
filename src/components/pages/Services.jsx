import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import ContactForm from '@/components/organisms/ContactForm';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import contentService from '@/services/api/contentService';

const Services = () => {
  const location = useLocation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Scroll to top when component mounts or location changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      setLoading(true);
      const pageContent = await contentService.getPageContent('services');
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
const services = [
    {
      icon: 'Search',
      title: 'SEO Optimization',
      description: 'Dominate search engine results with our comprehensive SEO strategies that drive organic traffic and increase your online visibility.',
      features: [
        'Comprehensive keyword research and analysis',
        'On-page optimization and technical SEO',
        'High-quality link building campaigns',
        'Local SEO for business locations',
        'Monthly performance reports and insights'
      ],
      price: 'Starting at $1,500/month',
      color: 'from-blue-500 to-blue-600',
      slug: 'seo-optimization'
    },
    {
      icon: 'MousePointer',
      title: 'PPC Management',
      description: 'Maximize your ROI with expertly managed pay-per-click campaigns across Google Ads, Facebook, and other platforms.',
      features: [
        'Strategic campaign setup and optimization',
        'Advanced audience targeting and segmentation',
        'A/B testing for ads and landing pages',
        'Conversion tracking and attribution',
        'Real-time performance monitoring'
      ],
      price: 'Starting at $2,000/month',
      color: 'from-green-500 to-green-600',
      slug: 'ppc-management'
    },
    {
      icon: 'Palette',
      title: 'Web Design & Development',
      description: 'Create stunning, conversion-focused websites that provide exceptional user experiences and drive business growth.',
      features: [
        'Custom responsive web design',
        'User experience (UX) optimization',
        'Speed and performance optimization',
        'Mobile-first development approach',
        'Content management system integration'
      ],
      price: 'Starting at $5,000 per project',
      color: 'from-purple-500 to-purple-600',
      slug: 'web-design-development'
    },
    {
      icon: 'FileText',
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that builds brand authority and drives conversions.',
      features: [
        'Content strategy development',
        'Blog writing and optimization',
        'Social media content creation',
        'Email marketing campaigns',
        'Brand storytelling and messaging'
      ],
      price: 'Starting at $800/month',
      color: 'from-orange-500 to-orange-600',
      slug: 'content-marketing'
    },
    {
      icon: 'Users',
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience through strategic social media marketing and community management.',
      features: [
        'Social media strategy development',
        'Content creation and curation',
        'Community management and engagement',
        'Influencer partnership facilitation',
        'Performance analytics and reporting'
      ],
      price: 'Starting at $1,200/month',
      color: 'from-pink-500 to-pink-600',
      slug: 'social-media-marketing'
    },
    {
      icon: 'BarChart',
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics, tracking, and performance reporting.',
      features: [
        'Google Analytics setup and configuration',
        'Custom dashboard creation',
        'Conversion tracking implementation',
        'Performance monitoring and optimization',
        'Monthly strategy review sessions'
      ],
      price: 'Starting at $500/month',
      color: 'from-indigo-500 to-indigo-600',
      slug: 'analytics-reporting'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
{/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              {content.title}
            </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl lg:max-w-none">
                {content.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-blue-200">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-blue-200">Client Satisfaction</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Embedded Contact Form */}
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

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Service Offerings
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of digital marketing services tailored to help 
              your business succeed in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <ApperIcon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <ApperIcon name="Check" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center justify-between mb-4">
<span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    </div>
                    <Link to={`/services/${service.slug}`}>
                      <Button variant="primary" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Proven Process
          </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure your digital marketing campaigns deliver maximum results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We analyze your business, competitors, and market to develop a winning strategy.',
                icon: 'Search'
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'Create a customized digital marketing strategy aligned with your business goals.',
                icon: 'Target'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute campaigns with precision using industry best practices and cutting-edge tools.',
                icon: 'Rocket'
              },
              {
                step: '04',
                title: 'Optimization & Reporting',
                description: 'Continuously monitor, optimize, and report on performance to maximize ROI.',
                icon: 'TrendingUp'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={process.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Accelerate Your Growth?
          </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital marketing services can help you achieve your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Calendar" size={20} />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <ApperIcon name="Phone" size={20} />
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;