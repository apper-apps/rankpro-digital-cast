import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const PpcManagement = () => {
  const features = [
    {
      icon: 'Target',
      title: 'Strategic Campaign Setup',
      description: 'Expert campaign architecture and setup across Google Ads, Facebook, and other major platforms.'
    },
    {
      icon: 'Users',
      title: 'Advanced Audience Targeting',
      description: 'Precise audience segmentation and targeting to reach your ideal customers at the right time.'
    },
    {
      icon: 'TestTube',
      title: 'A/B Testing & Optimization',
      description: 'Continuous testing of ads, landing pages, and campaigns to maximize conversion rates.'
    },
    {
      icon: 'BarChart',
      title: 'Performance Analytics',
      description: 'Real-time monitoring and detailed reporting on campaign performance and ROI.'
    },
    {
      icon: 'MousePointer',
      title: 'Conversion Tracking',
      description: 'Advanced conversion tracking and attribution modeling to measure true campaign impact.'
    },
    {
      icon: 'Zap',
      title: 'Budget Optimization',
      description: 'Smart budget allocation and bid management to maximize your advertising spend efficiency.'
    }
  ];

  const platforms = [
    {
      name: 'Google Ads',
      icon: 'Search',
      description: 'Search, Display, Shopping, and YouTube advertising campaigns',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Facebook & Instagram',
      icon: 'Users',
      description: 'Social media advertising across Meta platforms',
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'LinkedIn Ads',
      icon: 'Briefcase',
      description: 'Professional B2B advertising and lead generation',
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: 'Microsoft Ads',
      icon: 'Monitor',
      description: 'Bing and Microsoft network advertising campaigns',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="MousePointer" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              PPC Management Services
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Maximize your ROI with expertly managed pay-per-click campaigns across Google Ads, Facebook, and other platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="TrendingUp" size={20} />
                Get Free PPC Audit
              </Button>
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <ApperIcon name="Phone" size={20} />
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
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
              Complete PPC Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive PPC management services ensure your advertising budget delivers maximum return on investment.
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
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advertising Platforms We Manage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We manage PPC campaigns across all major advertising platforms to maximize your reach and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`bg-gradient-to-r ${platform.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ApperIcon name={platform.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our PPC management delivers measurable results for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">300%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
              <div className="text-gray-600">Cost Per Click Reduction</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">200%</div>
              <div className="text-gray-600">Conversion Rate Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Maximize Your PPC ROI?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Get a free PPC audit and discover how we can optimize your advertising campaigns for better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="BarChart" size={20} />
                Get Free PPC Audit
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

export default PpcManagement;