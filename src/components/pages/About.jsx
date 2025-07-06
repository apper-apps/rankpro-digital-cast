import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'With over 10 years in digital marketing, Alex founded RankPro Digital to help businesses succeed online.',
      expertise: ['Digital Strategy', 'Business Development', 'Team Leadership']
    },
    {
      name: 'Sarah Chen',
      role: 'Head of SEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b606?w=300&h=300&fit=crop&crop=face',
      bio: 'Sarah leads our SEO team with 8 years of experience helping businesses rank higher in search results.',
      expertise: ['Technical SEO', 'Content Strategy', 'Local SEO']
    },
    {
      name: 'Mike Rodriguez',
      role: 'PPC Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Mike manages millions in ad spend and specializes in maximizing ROI for our PPC campaigns.',
      expertise: ['Google Ads', 'Facebook Ads', 'Conversion Optimization']
    },
    {
      name: 'Emily Davis',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Emily brings creative vision to life through stunning web designs and compelling marketing materials.',
      expertise: ['Web Design', 'Brand Design', 'User Experience']
    }
  ];

  const values = [
    {
      icon: 'Target',
      title: 'Results-Driven',
      description: 'We focus on delivering measurable results that directly impact your bottom line and business growth.'
    },
    {
      icon: 'Users',
      title: 'Client-Focused',
      description: 'Your success is our success. We work as an extension of your team to achieve your goals.'
    },
    {
      icon: 'TrendingUp',
      title: 'Innovation',
      description: 'We stay ahead of digital marketing trends and continuously evolve our strategies.'
    },
    {
      icon: 'Shield',
      title: 'Transparency',
      description: 'We believe in honest communication and provide detailed reporting on all our activities.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '98%', label: 'Client Retention' },
    { number: '5+', label: 'Years Experience' },
    { number: '250%', label: 'Avg. Traffic Increase' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About RankPro Digital
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're passionate about helping businesses grow through strategic digital marketing. 
              Our team of experts delivers results that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, RankPro Digital emerged from a simple belief: every business deserves 
                to succeed online. We started as a small team of digital marketing enthusiasts who were 
                frustrated with agencies that promised the world but delivered little.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we've grown into a full-service digital marketing agency that has helped over 
                500 businesses transform their online presence. Our success isn't measured by the awards 
                we've won, but by the growth our clients have achieved.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in transparency, results, and building long-term partnerships with our clients. 
                Every strategy we develop is custom-tailored to your unique business needs and goals.
              </p>
              <Button size="lg" variant="primary" className="flex items-center gap-2">
                <ApperIcon name="Users" size={20} />
                Meet Our Team
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                      <div className="text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name={value.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented team brings together diverse expertise and a shared passion for helping businesses grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital marketing goals and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Calendar" size={20} />
                Schedule a Meeting
              </Button>
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <ApperIcon name="MessageCircle" size={20} />
                Start a Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;