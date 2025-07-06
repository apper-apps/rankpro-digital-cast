import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const ContentMarketing = () => {
  const features = [
    {
      icon: 'FileText',
      title: 'Content Strategy Development',
      description: 'Comprehensive content strategies aligned with your business goals and target audience needs.'
    },
    {
      icon: 'PenTool',
      title: 'Blog Writing & SEO',
      description: 'Professional blog posts optimized for search engines and designed to engage your audience.'
    },
    {
      icon: 'Users',
      title: 'Social Media Content',
      description: 'Engaging social media content that builds community and drives brand awareness.'
    },
    {
      icon: 'Mail',
      title: 'Email Marketing',
      description: 'Targeted email campaigns that nurture leads and drive conversions.'
    },
    {
      icon: 'Video',
      title: 'Video Content Creation',
      description: 'Compelling video content for social media, websites, and marketing campaigns.'
    },
    {
      icon: 'BookOpen',
      title: 'Brand Storytelling',
      description: 'Authentic brand narratives that connect with your audience on an emotional level.'
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'SEO-optimized articles that drive organic traffic',
      icon: 'FileText',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Social Media',
      description: 'Engaging posts for all major social platforms',
      icon: 'Share2',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Email Campaigns',
      description: 'Personalized email marketing sequences',
      icon: 'Mail',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Video Content',
      description: 'Professional video production and editing',
      icon: 'Video',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="FileText" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Marketing Services
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Engage your audience with compelling content that builds brand authority and drives conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="BookOpen" size={20} />
                Get Content Strategy
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
              Complete Content Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we create content that resonates with your audience and drives business results.
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
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ApperIcon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Types We Create
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create diverse content formats to engage your audience across all touchpoints.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`bg-gradient-to-r ${type.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <ApperIcon name={type.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
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
              Why Content Marketing Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Content marketing delivers measurable results for businesses that invest in quality content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-orange-600 mb-2">3x</div>
              <div className="text-gray-600">More Leads Than Paid Search</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-orange-600 mb-2">62%</div>
              <div className="text-gray-600">Lower Cost Per Lead</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-orange-600 mb-2">434%</div>
              <div className="text-gray-600">More Indexed Pages</div>
            </div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a strategic approach to create content that drives results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Planning',
                description: 'Develop a comprehensive content strategy aligned with your goals.',
                icon: 'Target'
              },
              {
                step: '02',
                title: 'Content Creation',
                description: 'Create high-quality, engaging content across multiple formats.',
                icon: 'Edit'
              },
              {
                step: '03',
                title: 'Distribution & Promotion',
                description: 'Distribute content across relevant channels for maximum reach.',
                icon: 'Share2'
              },
              {
                step: '04',
                title: 'Analysis & Optimization',
                description: 'Monitor performance and optimize content for better results.',
                icon: 'BarChart'
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={process.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-700 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Tell Your Brand Story?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Let's create content that resonates with your audience and drives meaningful business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Calendar" size={20} />
                Schedule Strategy Session
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

export default ContentMarketing;