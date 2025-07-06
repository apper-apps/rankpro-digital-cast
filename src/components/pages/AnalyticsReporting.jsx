import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const AnalyticsReporting = () => {
  const features = [
    {
      icon: 'BarChart',
      title: 'Advanced Analytics Setup',
      description: 'Complete Google Analytics 4 setup and configuration for comprehensive tracking.'
    },
    {
      icon: 'Activity',
      title: 'Custom Dashboard Creation',
      description: 'Personalized dashboards showing the metrics that matter most to your business.'
    },
    {
      icon: 'Target',
      title: 'Conversion Tracking',
      description: 'Advanced conversion tracking to measure the true impact of your marketing efforts.'
    },
    {
      icon: 'TrendingUp',
      title: 'Performance Monitoring',
      description: 'Continuous monitoring of key performance indicators and automated alerts.'
    },
    {
      icon: 'FileText',
      title: 'Detailed Reporting',
      description: 'Comprehensive monthly reports with actionable insights and recommendations.'
    },
    {
      icon: 'Users',
      title: 'Strategy Sessions',
      description: 'Regular strategy review sessions to discuss performance and optimization opportunities.'
    }
  ];

  const metrics = [
    {
      title: 'Website Traffic',
      description: 'Track visitors, page views, and user behavior',
      icon: 'Globe',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Conversion Rates',
      description: 'Monitor goal completions and ROI',
      icon: 'Target',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Social Media',
      description: 'Engagement and follower growth metrics',
      icon: 'Share2',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Email Marketing',
      description: 'Open rates, click-through rates, and conversions',
      icon: 'Mail',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="BarChart" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Analytics & Reporting
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Make data-driven decisions with comprehensive analytics, tracking, and performance reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Activity" size={20} />
                Get Analytics Audit
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
              Complete Analytics Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From setup to analysis, we provide comprehensive analytics solutions to help you understand and optimize your digital performance.
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
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Metrics We Track
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We monitor the metrics that matter most to your business success and growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`bg-gradient-to-r ${metric.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ApperIcon name={metric.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{metric.title}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Analytics Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proper analytics and reporting provide the insights you need to make informed business decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">85%</div>
              <div className="text-gray-600">Better Marketing ROI</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">60%</div>
              <div className="text-gray-600">Faster Decision Making</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">40%</div>
              <div className="text-gray-600">Improved Conversion Rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics Tools We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage the best analytics tools to provide comprehensive insights into your digital performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Google Analytics 4',
                description: 'Advanced web analytics and user behavior tracking',
                icon: 'BarChart'
              },
              {
                name: 'Google Tag Manager',
                description: 'Easy implementation and management of tracking codes',
                icon: 'Code'
              },
              {
                name: 'Data Studio',
                description: 'Beautiful, interactive dashboards and reports',
                icon: 'Layout'
              },
              {
                name: 'Search Console',
                description: 'Search performance and SEO insights',
                icon: 'Search'
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={tool.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Unlock Your Data Insights?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Let's set up comprehensive analytics tracking and reporting to help you make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Calendar" size={20} />
                Schedule Analytics Review
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

export default AnalyticsReporting;