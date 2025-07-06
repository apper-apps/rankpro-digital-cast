import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';
import ContactForm from '@/components/organisms/ContactForm';
const SocialMediaMarketing = () => {
  const features = [
    {
      icon: 'Users',
      title: 'Social Media Strategy',
      description: 'Comprehensive social media strategies tailored to your brand and audience.'
    },
    {
      icon: 'Image',
      title: 'Content Creation',
      description: 'Engaging visual and written content that captures attention and drives engagement.'
    },
    {
      icon: 'MessageCircle',
      title: 'Community Management',
      description: 'Active community engagement and customer service across all platforms.'
    },
    {
      icon: 'Star',
      title: 'Influencer Partnerships',
      description: 'Strategic partnerships with influencers to expand your reach and credibility.'
    },
    {
      icon: 'Target',
      title: 'Paid Social Advertising',
      description: 'Targeted social media advertising campaigns for maximum ROI.'
    },
    {
      icon: 'BarChart',
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and insights to optimize your social presence.'
    }
  ];

  const platforms = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      description: 'Build community and drive engagement',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      description: 'Visual storytelling and brand building',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      description: 'Professional networking and B2B marketing',
      color: 'from-blue-700 to-blue-800'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      description: 'Real-time engagement and thought leadership',
      color: 'from-blue-400 to-blue-500'
    },
    {
      name: 'TikTok',
      icon: 'Music',
      description: 'Creative video content for younger audiences',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'YouTube',
      icon: 'Video',
      description: 'Long-form video content and tutorials',
      color: 'from-red-600 to-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section className="bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
<ApperIcon name="Users" size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Social Media Marketing
              </h1>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl lg:max-w-none">
                Build meaningful connections with your audience through strategic social media marketing and community management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="accent" className="flex items-center gap-2">
                  <ApperIcon name="TrendingUp" size={20} />
                  Get Social Media Audit
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
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we help you build a strong social media presence that drives real business results.
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
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
              Platforms We Manage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create and manage content across all major social media platforms to maximize your reach and engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Social Media Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our social media marketing strategies deliver measurable results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-pink-600 mb-2">250%</div>
              <div className="text-gray-600">Average Engagement Increase</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-pink-600 mb-2">180%</div>
              <div className="text-gray-600">Follower Growth Rate</div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl font-bold text-pink-600 mb-2">320%</div>
              <div className="text-gray-600">Website Traffic from Social</div>
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
              Our Social Media Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to build and grow your social media presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Audit & Strategy',
                description: 'Analyze your current presence and develop a comprehensive strategy.',
                icon: 'Search'
              },
              {
                step: '02',
                title: 'Content Planning',
                description: 'Create content calendars and develop engaging post ideas.',
                icon: 'Calendar'
              },
              {
                step: '03',
                title: 'Content Creation',
                description: 'Design and write compelling content for each platform.',
                icon: 'Edit'
              },
              {
                step: '04',
                title: 'Engagement & Growth',
                description: 'Actively engage with your audience and grow your following.',
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
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={process.icon} size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">{process.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Your Social Presence?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let's build a social media strategy that connects with your audience and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Calendar" size={20} />
                Schedule Strategy Call
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

export default SocialMediaMarketing;