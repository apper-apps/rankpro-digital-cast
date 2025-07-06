import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';
import ContactForm from '@/components/organisms/ContactForm';
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-blue-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/20 rounded-full blur-xl"></div>
      
<div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Dominate Search Results with
              <span className="gradient-text-accent block mt-2">
                Proven Digital Marketing
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8 max-w-2xl lg:max-w-none"
            >
              Transform your online presence with our data-driven SEO, PPC, and web design strategies. 
              We deliver measurable results that grow your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
            >
              <Button size="lg" variant="accent" className="flex items-center gap-2">
                <ApperIcon name="Rocket" size={20} />
                Get Free Analysis
              </Button>
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <ApperIcon name="Play" size={20} />
                Watch Our Success Stories
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-blue-200">Clients Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-blue-200">Success Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-accent mb-2">5 Years</div>
                <div className="text-blue-200">Experience</div>
              </div>
            </motion.div>
          </div>

          {/* Embedded Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:max-w-lg mx-auto w-full"
          >
            <ContactForm embedded />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;