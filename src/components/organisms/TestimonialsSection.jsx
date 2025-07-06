import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b606?w=150&h=150&fit=crop&crop=face',
      quote: 'RankPro Digital transformed our online presence completely. Our organic traffic increased by 300% within just 6 months of working with them.',
      rating: 5,
      results: {
        metric: 'Organic Traffic',
        increase: '+300%',
        period: '6 months'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Urban Fitness',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote: 'Their PPC management is outstanding. We cut our cost-per-acquisition by 50% while doubling our lead generation. Highly recommend!',
      rating: 5,
      results: {
        metric: 'Cost Per Acquisition',
        increase: '-50%',
        period: '3 months'
      }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Coastal Dental',
      role: 'Practice Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'The new website design is absolutely stunning and our appointment bookings have increased by 200%. Professional team with amazing results.',
      rating: 5,
      results: {
        metric: 'Appointment Bookings',
        increase: '+200%',
        period: '4 months'
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped companies like yours succeed.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl"></div>
              
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-primary/20">
                <ApperIcon name="Quote" size={48} />
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Client info */}
                  <div className="text-center md:text-left">
                    <div className="w-24 h-24 mx-auto md:mx-0 mb-4 rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-primary font-medium mb-1">{currentTestimonial.role}</p>
                    <p className="text-gray-600 text-sm">{currentTestimonial.company}</p>
                    
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start mt-3">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <ApperIcon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="md:col-span-2">
                    <blockquote className="text-lg md:text-xl text-gray-800 mb-6 italic">
                      "{currentTestimonial.quote}"
                    </blockquote>
                    
                    {/* Results highlight */}
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{currentTestimonial.results.metric}</p>
                          <p className="text-2xl font-bold text-primary">{currentTestimonial.results.increase}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">In just</p>
                          <p className="text-lg font-semibold text-gray-900">{currentTestimonial.results.period}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ApperIcon name="ChevronLeft" size={20} />
            </button>
            
            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <ApperIcon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;