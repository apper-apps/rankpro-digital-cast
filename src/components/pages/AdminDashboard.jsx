import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import ApperIcon from '@/components/ApperIcon';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const [content, setContent] = useState({
    hero: {
      title: 'Dominate Search Results with',
      subtitle: 'Proven Digital Marketing',
      description: 'Transform your online presence with our data-driven SEO, PPC, and web design strategies. We deliver measurable results that grow your business.',
      buttonText: 'Get Free Analysis'
    },
    services: {
      seo: {
        title: 'SEO Optimization',
        description: 'Dominate search results with our proven SEO strategies. We optimize your website to rank higher and attract more organic traffic.',
        features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
      },
      ppc: {
        title: 'PPC Management',
        description: 'Maximize your ROI with targeted PPC campaigns. We manage your ads to deliver qualified leads at the lowest cost.',
        features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing']
      },
      webDesign: {
        title: 'Web Design',
        description: 'Create stunning websites that convert visitors into customers. Our designs are modern, responsive, and optimized for performance.',
        features: ['Responsive Design', 'User Experience', 'Speed Optimization', 'Mobile-First']
      }
    },
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@rankprodigital.com',
      address: '123 Business Ave, Suite 100\nToronto, ON M5V 3A8',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM'
    }
  });

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    toast.success('Logged out successfully');
    navigate('/admin-panel-2024');
  };

  const handleSave = async (section) => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success(`${section} content updated successfully!`);
    } catch (error) {
      toast.error('Failed to save changes');
    } finally {
      setIsSaving(false);
    }
  };

  const handleContentChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleServiceChange = (service, field, value) => {
    setContent(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: {
          ...prev.services[service],
          [field]: value
        }
      }
    }));
  };

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: 'Home' },
    { id: 'services', label: 'Services', icon: 'Settings' },
    { id: 'contact', label: 'Contact Info', icon: 'Phone' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                <ApperIcon name="Shield" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">RankPro Digital Content Management</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <ApperIcon name="LogOut" size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ApperIcon name={tab.icon} size={20} className="mr-3" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'hero' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hero Section Content</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="space-y-6">
                  <FormField
                    label="Main Title"
                    name="title"
                    value={content.hero.title}
                    onChange={(e) => handleContentChange('hero', 'title', e.target.value)}
                    placeholder="Enter main title"
                  />
                  <FormField
                    label="Subtitle"
                    name="subtitle"
                    value={content.hero.subtitle}
                    onChange={(e) => handleContentChange('hero', 'subtitle', e.target.value)}
                    placeholder="Enter subtitle"
                  />
                  <FormField
                    label="Description"
                    name="description"
                    type="textarea"
                    rows={4}
                    value={content.hero.description}
                    onChange={(e) => handleContentChange('hero', 'description', e.target.value)}
                    placeholder="Enter description"
                  />
                  <FormField
                    label="Button Text"
                    name="buttonText"
                    value={content.hero.buttonText}
                    onChange={(e) => handleContentChange('hero', 'buttonText', e.target.value)}
                    placeholder="Enter button text"
                  />
                  <Button
                    onClick={() => handleSave('Hero')}
                    loading={isSaving}
                    variant="primary"
                    className="flex items-center gap-2"
                  >
                    <ApperIcon name="Save" size={16} />
                    Save Changes
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Services Content</h2>
              <div className="space-y-6">
                {Object.entries(content.services).map(([key, service]) => (
                  <div key={key} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                      {key === 'webDesign' ? 'Web Design' : key.toUpperCase()}
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        label="Service Title"
                        value={service.title}
                        onChange={(e) => handleServiceChange(key, 'title', e.target.value)}
                      />
                      <FormField
                        label="Service Description"
                        type="textarea"
                        rows={3}
                        value={service.description}
                        onChange={(e) => handleServiceChange(key, 'description', e.target.value)}
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Features (one per line)
                        </label>
                        <textarea
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          rows={4}
                          value={service.features.join('\n')}
                          onChange={(e) => handleServiceChange(key, 'features', e.target.value.split('\n').filter(f => f.trim()))}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  onClick={() => handleSave('Services')}
                  loading={isSaving}
                  variant="primary"
                  className="flex items-center gap-2"
                >
                  <ApperIcon name="Save" size={16} />
                  Save All Services
                </Button>
              </div>
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="space-y-6">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    value={content.contact.phone}
                    onChange={(e) => handleContentChange('contact', 'phone', e.target.value)}
                    placeholder="Enter phone number"
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={content.contact.email}
                    onChange={(e) => handleContentChange('contact', 'email', e.target.value)}
                    placeholder="Enter email address"
                  />
                  <FormField
                    label="Address"
                    name="address"
                    type="textarea"
                    rows={3}
                    value={content.contact.address}
                    onChange={(e) => handleContentChange('contact', 'address', e.target.value)}
                    placeholder="Enter business address"
                  />
                  <FormField
                    label="Business Hours"
                    name="hours"
                    type="textarea"
                    rows={3}
                    value={content.contact.hours}
                    onChange={(e) => handleContentChange('contact', 'hours', e.target.value)}
                    placeholder="Enter business hours"
                  />
                  <Button
                    onClick={() => handleSave('Contact')}
                    loading={isSaving}
                    variant="primary"
                    className="flex items-center gap-2"
                  >
                    <ApperIcon name="Save" size={16} />
                    Save Changes
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Website Analytics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Page Views</p>
                      <p className="text-2xl font-bold text-gray-900">12,547</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <ApperIcon name="Eye" size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">+12% from last month</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Unique Visitors</p>
                      <p className="text-2xl font-bold text-gray-900">8,432</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <ApperIcon name="Users" size={24} className="text-green-600" />
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">+18% from last month</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Contact Forms</p>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <ApperIcon name="Mail" size={24} className="text-purple-600" />
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">+25% from last month</p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Bounce Rate</p>
                      <p className="text-2xl font-bold text-gray-900">32%</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <ApperIcon name="TrendingDown" size={24} className="text-orange-600" />
                    </div>
                  </div>
                  <p className="text-sm text-green-600 mt-2">-8% from last month</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: 'New contact form submission', time: '2 minutes ago', type: 'contact' },
                    { action: 'Page content updated', time: '1 hour ago', type: 'update' },
                    { action: 'New visitor from Google', time: '2 hours ago', type: 'visitor' },
                    { action: 'Service page viewed', time: '3 hours ago', type: 'view' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <ApperIcon name="Activity" size={16} className="text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;