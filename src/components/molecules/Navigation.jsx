import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'SEO Optimization', href: '/services/seo-optimization' },
        { name: 'PPC Management', href: '/services/ppc-management' },
        { name: 'Web Design & Development', href: '/services/web-design-development' },
        { name: 'Content Marketing', href: '/services/content-marketing' },
        { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
        { name: 'Analytics & Reporting', href: '/services/analytics-reporting' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
              <ApperIcon name="TrendingUp" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">RankPro Digital</span>
          </Link>

          {/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary flex items-center gap-1 ${
                    isActive(item.href) || (item.dropdown && item.dropdown.some(subItem => isActive(subItem.href)))
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ApperIcon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                            isActive(subItem.href)
                              ? 'text-primary bg-blue-50'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button size="sm" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ApperIcon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-4 border-t border-gray-100"
            >
<div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href) || (item.dropdown && item.dropdown.some(subItem => isActive(subItem.href)))
                          ? 'text-primary bg-blue-50'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 text-xs rounded-lg transition-colors duration-200 ${
                              isActive(subItem.href)
                                ? 'text-primary bg-blue-50'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <Button size="sm" variant="primary" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;