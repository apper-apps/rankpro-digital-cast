import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import ContactForm from '@/components/organisms/ContactForm';
const SeoOptimization = () => {
  const features = [
    {
      icon: 'Search',
      title: 'Keyword Research & Analysis',
      description: 'Comprehensive keyword research to identify high-value opportunities and optimize your content strategy.'
    },
    {
      icon: 'FileText',
      title: 'On-Page SEO Optimization',
      description: 'Optimize your website structure, meta tags, headers, and content for maximum search engine visibility.'
    },
    {
      icon: 'Link',
      title: 'Technical SEO Audits',
      description: 'In-depth technical analysis to identify and fix crawlability, indexability, and performance issues.'
    },
    {
      icon: 'TrendingUp',
      title: 'Performance Tracking',
      description: 'Regular monitoring and reporting on keyword rankings, organic traffic, and conversion metrics.'
    },
    {
      icon: 'MapPin',
      title: 'Local SEO Optimization',
      description: 'Optimize your business for local search results and Google My Business listings.'
    },
    {
      icon: 'Users',
      title: 'Competitor Analysis',
      description: 'Analyze competitor strategies and identify opportunities to outrank them in search results.'
    }
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with SEO',
      features: [
        'Up to 20 target keywords',
        'Basic on-page optimization',
        'Monthly performance reports',
        'Google Analytics setup',
        'Basic technical SEO audit'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive SEO for growing businesses',
      features: [
        'Up to 50 target keywords',
        'Advanced on-page optimization',
        'Content optimization strategy',
        'Link building campaign',
        'Monthly strategy calls',
        'Detailed performance reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,000',
      period: '/month',
      description: 'Advanced SEO for large organizations',
      features: [
        'Unlimited target keywords',
        'Enterprise-level optimization',
        'Custom content strategy',
        'Advanced link building',
        'Weekly strategy sessions',
        'Priority support & reporting'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section className="bg-gradient-to-br from-primary via-secondary to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
<ApperIcon name="Search" size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                SEO Optimization Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl lg:max-w-none">
                Dominate search engine results with our comprehensive SEO strategies that drive organic traffic and increase your online visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="accent" className="flex items-center gap-2">
                  <ApperIcon name="Calendar" size={20} />
                  Get Free SEO Audit
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
              Complete SEO Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive SEO services cover every aspect of search engine optimization to help your website rank higher and attract more qualified traffic.
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
                <div className="bg-gradient-to-r from-primary to-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Packages & Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect SEO package for your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-2 p-8 relative ${
                  pkg.popular ? 'border-primary' : 'border-gray-100'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    <span className="text-xl text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <ApperIcon name="Check" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? 'primary' : 'secondary'} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Boost Your Search Rankings?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover how we can help your website rank higher in search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="FileText" size={20} />
                Get Free SEO Audit
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

export default SeoOptimization;