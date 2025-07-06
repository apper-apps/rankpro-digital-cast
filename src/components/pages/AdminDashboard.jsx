import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Error from "@/components/ui/Error";
import Contact from "@/components/pages/Contact";
import Services from "@/components/pages/Services";
import About from "@/components/pages/About";
import FormField from "@/components/molecules/FormField";
import userService from "@/services/api/userService";
import authService from "@/services/api/authService";
import contentService from "@/services/api/contentService";
import mediaService from "@/services/api/mediaService";
import analyticsService from "@/services/api/analyticsService";
import formService from "@/services/api/formService";
import settingsService from "@/services/api/settingsService";
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
    about: {
      title: 'About RankPro Digital',
      subtitle: 'Your Digital Marketing Partner',
      description: 'We are a team of passionate digital marketing experts dedicated to helping businesses succeed online. With over 5 years of experience and 500+ successful campaigns, we deliver results that matter.',
      mission: 'To empower businesses with data-driven digital marketing strategies that drive growth and success.',
      vision: 'To be the leading digital marketing agency known for innovation, results, and exceptional client service.',
      teamMembers: [
        { name: 'John Smith', role: 'CEO & Founder', image: '/team/john.jpg' },
        { name: 'Sarah Johnson', role: 'Head of SEO', image: '/team/sarah.jpg' },
        { name: 'Mike Chen', role: 'PPC Specialist', image: '/team/mike.jpg' }
      ]
    },
    testimonials: [
      {
        id: 1,
        name: 'Emily Rodriguez',
        company: 'TechStart Inc.',
        role: 'Marketing Director',
        content: 'RankPro Digital transformed our online presence. Our organic traffic increased by 300% in just 6 months!',
        rating: 5,
        image: '/testimonials/emily.jpg'
      },
      {
        id: 2,
        name: 'David Thompson',
        company: 'Local Retail Co.',
        role: 'Owner',
        content: 'Their PPC campaigns have been incredibly effective. We\'ve seen a 250% increase in qualified leads.',
        rating: 5,
        image: '/testimonials/david.jpg'
      }
    ],
    cta: {
      title: 'Ready to Accelerate Your Growth?',
      description: 'Join hundreds of successful businesses that trust RankPro Digital to drive their online success.',
      buttonText: 'Get Started Today',
      secondaryButtonText: 'View Case Studies',
      backgroundImage: '/images/cta-bg.jpg'
    },
    contact: {
      phone: '+1 (555) 123-4567',
      email: 'info@rankprodigital.com',
      address: '123 Business Ave, Suite 100\nToronto, ON M5V 3A8',
      hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM'
    },
    settings: {
      siteName: 'RankPro Digital',
      siteTagline: 'Premier Digital Marketing Agency',
      logo: '/images/logo.png',
      favicon: '/favicon.ico',
      googleAnalytics: 'GA-XXXXXXXXX',
      facebookPixel: 'FB-XXXXXXXXX',
      maintenanceMode: false,
      seoTitle: 'RankPro Digital - Premier Digital Marketing Agency',
      seoDescription: 'Transform your online presence with data-driven SEO, PPC, and web design strategies.',
      seoKeywords: 'digital marketing, SEO, PPC, web design, Toronto'
    }
  });

const [users, setUsers] = useState([
    { id: 1, name: 'Admin User', email: 'admin@rankpro.com', role: 'Administrator', status: 'Active', lastLogin: '2024-01-15 10:30 AM' },
    { id: 2, name: 'Content Manager', email: 'content@rankpro.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-15 09:15 AM' },
    { id: 3, name: 'SEO Specialist', email: 'seo@rankpro.com', role: 'Contributor', status: 'Active', lastLogin: '2024-01-14 04:45 PM' }
  ]);

  const [formSubmissions, setFormSubmissions] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', service: 'SEO', message: 'Interested in SEO services', date: '2024-01-15', status: 'New' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', service: 'PPC', message: 'Need help with Google Ads', date: '2024-01-14', status: 'Contacted' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', service: 'Web Design', message: 'Looking for website redesign', date: '2024-01-13', status: 'Quoted' }
  ]);

  const [mediaLibrary, setMediaLibrary] = useState([
    { id: 1, name: 'hero-background.jpg', type: 'image', size: '2.4 MB', url: '/images/hero-bg.jpg', uploadDate: '2024-01-10' },
    { id: 2, name: 'team-photo.jpg', type: 'image', size: '1.8 MB', url: '/images/team.jpg', uploadDate: '2024-01-09' },
    { id: 3, name: 'logo.png', type: 'image', size: '156 KB', url: '/images/logo.png', uploadDate: '2024-01-08' },
    { id: 4, name: 'company-video.mp4', type: 'video', size: '45.2 MB', url: '/videos/company.mp4', uploadDate: '2024-01-07' }
  ]);

  const [analytics, setAnalytics] = useState({});
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    setLoading(true);
    try {
      const [usersData, formsData, mediaData, analyticsData, activityData] = await Promise.all([
        userService.getAll(),
        formService.getAll(),
        mediaService.getAll(),
        analyticsService.getOverview(),
        analyticsService.getRecentActivity(5)
      ]);
      
      setUsers(usersData);
      setFormSubmissions(formsData);
      setMediaLibrary(mediaData);
      setAnalytics(analyticsData);
      setRecentActivity(activityData);
    } catch (error) {
      setError('Failed to load dashboard data');
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    toast.success('Logged out successfully');
    navigate('/admin-panel-2024');
  };

  const handleSave = async (section) => {
    setIsSaving(true);
    try {
      let result;
      switch (section.toLowerCase()) {
        case 'hero':
          result = await contentService.updateHeroContent(content.hero);
          break;
        case 'services':
          result = await Promise.all(
            Object.entries(content.services).map(([key, service]) =>
              contentService.updateServiceContent(key, service)
            )
          );
          break;
        case 'about':
          result = await contentService.updateAboutContent(content.about);
          break;
        case 'contact':
          result = await settingsService.updateContactInfo(content.contact);
          break;
        case 'cta':
          result = await contentService.updateCtaContent(content.cta);
          break;
        case 'seo':
          result = await settingsService.updateSeoSettings(content.settings);
          break;
        case 'settings':
          result = await settingsService.updateSettings(content.settings);
          break;
        default:
          throw new Error('Unknown section');
      }
      
      await analyticsService.addActivity({
        action: `${section} content updated`,
        type: 'update',
        user: authService.getCurrentUser()?.username || 'Admin'
      });
      
      toast.success(`${section} content updated successfully!`);
    } catch (error) {
      toast.error(`Failed to save ${section.toLowerCase()} changes`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUserAction = async (action, userId, data = null) => {
    try {
      let result;
      switch (action) {
        case 'delete':
await userService.delete(userId);
          setUsers(prev => prev.filter(u => u.id !== userId));
          toast.success('User deleted successfully');
          break;
        case 'updateRole':
result = await userService.updateUserRole(userId, data);
          setUsers(prev => prev.map(u => u.id === userId ? result : u));
          toast.success('User role updated successfully');
          break;
case 'updateStatus':
          result = await userService.updateUserStatus(userId, data);
          setUsers(prev => prev.map(u => u.id === userId ? result : u));
          toast.success('User status updated successfully');
          break;
      }
      
      await analyticsService.addActivity({
        action: `User ${action}`,
        type: 'user',
        user: authService.getCurrentUser()?.username || 'Admin'
      });
    } catch (error) {
      toast.error(`Failed to ${action} user`);
    }
  };

  const handleMediaAction = async (action, mediaId, data = null) => {
    try {
      switch (action) {
case 'delete':
          await mediaService.delete(mediaId);
          setMediaLibrary(prev => prev.filter(m => m.id !== mediaId));
          toast.success('Media deleted successfully');
          break;
        case 'upload':
          const newMedia = await mediaService.upload(data);
          setMediaLibrary(prev => [newMedia, ...prev]);
          toast.success('Media uploaded successfully');
          break;
      }
      
      await analyticsService.addActivity({
        action: `Media ${action}`,
        type: 'media',
        user: authService.getCurrentUser()?.username || 'Admin'
      });
    } catch (error) {
      toast.error(`Failed to ${action} media`);
    }
  };

  const handleFormAction = async (action, formId, data = null) => {
    try {
      let result;
      switch (action) {
case 'updateStatus':
          result = await formService.updateStatus(formId, data);
          setFormSubmissions(prev => prev.map(f => f.id === formId ? result : f));
          toast.success('Form status updated successfully');
          break;
case 'delete':
          await formService.delete(formId);
          setFormSubmissions(prev => prev.filter(f => f.id !== formId));
          toast.success('Form submission deleted successfully');
          break;
      }
      
      await analyticsService.addActivity({
        action: `Form submission ${action}`,
        type: 'form',
        user: authService.getCurrentUser()?.username || 'Admin'
      });
    } catch (error) {
      toast.error(`Failed to ${action} form submission`);
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
    { id: 'analytics', label: 'Dashboard', icon: 'BarChart' },
    { id: 'hero', label: 'Hero Section', icon: 'Home' },
    { id: 'services', label: 'Services', icon: 'Settings' },
    { id: 'pages', label: 'Pages', icon: 'FileText' },
    { id: 'users', label: 'Users', icon: 'Users' },
    { id: 'media', label: 'Media', icon: 'Image' },
    { id: 'forms', label: 'Form Submissions', icon: 'Mail' },
    { id: 'seo', label: 'SEO Settings', icon: 'Search' },
    { id: 'contact', label: 'Contact Info', icon: 'Phone' },
    { id: 'settings', label: 'Site Settings', icon: 'Sliders' }
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
              className="max-w-6xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Page Views</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {analytics.pageViews?.current?.toLocaleString() || '12,547'}
                      </p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <ApperIcon name="Eye" size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <p className={`text-sm mt-2 ${analytics.pageViews?.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {analytics.pageViews?.change >= 0 ? '+' : ''}{analytics.pageViews?.change || 12}% from last month
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Unique Visitors</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {analytics.uniqueVisitors?.current?.toLocaleString() || '8,432'}
                      </p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <ApperIcon name="Users" size={24} className="text-green-600" />
                    </div>
                  </div>
                  <p className={`text-sm mt-2 ${analytics.uniqueVisitors?.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {analytics.uniqueVisitors?.change >= 0 ? '+' : ''}{analytics.uniqueVisitors?.change || 18}% from last month
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Contact Forms</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {analytics.contactForms?.current || formSubmissions.length || '156'}
                      </p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <ApperIcon name="Mail" size={24} className="text-purple-600" />
                    </div>
                  </div>
                  <p className={`text-sm mt-2 ${analytics.contactForms?.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {analytics.contactForms?.change >= 0 ? '+' : ''}{analytics.contactForms?.change || 25}% from last month
                  </p>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Bounce Rate</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {analytics.bounceRate?.current || '32'}%
                      </p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <ApperIcon name="TrendingDown" size={24} className="text-orange-600" />
                    </div>
                  </div>
                  <p className={`text-sm mt-2 ${analytics.bounceRate?.change <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {analytics.bounceRate?.change || -8}% from last month
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
<div className="space-y-3">
{recentActivity.map((activity) => (
                       <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                         <div className="bg-blue-100 p-2 rounded-full">
                           <ApperIcon name="Activity" size={16} className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                          {activity.user && (
                            <p className="text-xs text-gray-400">by {activity.user}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setActiveTab('hero')}
                      className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                    >
                      <ApperIcon name="Home" size={24} className="text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">Edit Hero</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('services')}
                      className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                    >
                      <ApperIcon name="Settings" size={24} className="text-green-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">Edit Services</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('forms')}
                      className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
                    >
                      <ApperIcon name="Mail" size={24} className="text-purple-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">View Forms</span>
                    </button>
                    <button 
                      onClick={() => setActiveTab('media')}
                      className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group"
                    >
                      <ApperIcon name="Image" size={24} className="text-orange-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-900">Media Library</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'pages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Pages Management</h2>
                <Button variant="primary" className="flex items-center gap-2">
                  <ApperIcon name="Plus" size={16} />
                  Add New Page
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* About Page */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About Page</h3>
                  <div className="space-y-4">
                    <FormField
                      label="Page Title"
                      value={content.about.title}
                      onChange={(e) => handleContentChange('about', 'title', e.target.value)}
                    />
                    <FormField
                      label="Subtitle"
                      value={content.about.subtitle}
                      onChange={(e) => handleContentChange('about', 'subtitle', e.target.value)}
                    />
                    <FormField
                      label="Description"
                      type="textarea"
                      rows={3}
                      value={content.about.description}
                      onChange={(e) => handleContentChange('about', 'description', e.target.value)}
                    />
                    <Button onClick={() => handleSave('About')} loading={isSaving} variant="primary" size="sm">
                      Update About Page
                    </Button>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Testimonials</h3>
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {content.testimonials.map((testimonial, index) => (
                      <div key={testimonial.id} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{testimonial.name}</span>
                          <div className="flex space-x-1">
                            <button className="text-blue-600 hover:text-blue-800">
                              <ApperIcon name="Edit" size={14} />
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <ApperIcon name="Trash" size={14} />
                            </button>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600">{testimonial.company}</p>
                        <p className="text-xs text-gray-700 mt-1">{testimonial.content.substring(0, 50)}...</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    <ApperIcon name="Plus" size={14} className="mr-1" />
                    Add Testimonial
                  </Button>
                </div>

                {/* CTA Section */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Call-to-Action</h3>
                  <div className="space-y-4">
                    <FormField
                      label="CTA Title"
                      value={content.cta.title}
                      onChange={(e) => handleContentChange('cta', 'title', e.target.value)}
                    />
                    <FormField
                      label="Description"
                      type="textarea"
                      rows={2}
                      value={content.cta.description}
                      onChange={(e) => handleContentChange('cta', 'description', e.target.value)}
                    />
                    <FormField
                      label="Button Text"
                      value={content.cta.buttonText}
                      onChange={(e) => handleContentChange('cta', 'buttonText', e.target.value)}
                    />
                    <Button onClick={() => handleSave('CTA')} loading={isSaving} variant="primary" size="sm">
                      Update CTA
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <Button variant="primary" className="flex items-center gap-2">
                  <ApperIcon name="UserPlus" size={16} />
                  Add New User
                </Button>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">{user.name.charAt(0)}</span>
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                                <div className="text-sm text-gray-500">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                              {user.role}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                              {user.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.lastLogin}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
<button
                                onClick={() => handleUserAction('updateRole', user.id, 'Editor')}
                                className="text-blue-600 hover:text-blue-900"
                                title="Edit User"
                              >
                                <ApperIcon name="Edit" size={16} />
                              </button>
                              <button 
onClick={() => {
                                  if (confirm('Are you sure you want to delete this user?')) {
                                    handleUserAction('delete', user.id);
                                  }
                                }}
                                className="text-red-600 hover:text-red-900"
                                title="Delete User"
                              >
                                <ApperIcon name="Trash" size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'media' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Media Library</h2>
                <Button variant="primary" className="flex items-center gap-2">
                  <ApperIcon name="Upload" size={16} />
                  Upload Media
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mediaLibrary.map((media) => (
                  <div key={media.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center">
                      <ApperIcon name={media.type === 'image' ? 'Image' : 'Video'} size={48} className="text-gray-400" />
                    </div>
<div className="p-4">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{media.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{media.size}</p>
                      <p className="text-xs text-gray-500">{media.uploadDate}</p>
                      <div className="flex justify-between items-center mt-3">
                        <Button variant="outline" size="sm">View</Button>
                        <button 
onClick={() => {
                            if (confirm('Are you sure you want to delete this media?')) {
                              handleMediaAction('delete', media.id);
                            }
                          }}
                          className="text-red-600 hover:text-red-800"
                          title="Delete Media"
                        >
                          <ApperIcon name="Trash" size={16} />
                        </button>
                      </div>
                    </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'forms' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Submissions</h2>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {formSubmissions.map((submission) => (
                        <tr key={submission.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                              <div className="text-sm text-gray-500">{submission.email}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                              {submission.service}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {submission.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              submission.status === 'New' ? 'bg-yellow-100 text-yellow-800' :
                              submission.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {submission.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
<div className="flex space-x-2">
                              <button 
                                className="text-blue-600 hover:text-blue-900"
                                title="View Submission"
                              >
                                <ApperIcon name="Eye" size={16} />
                              </button>
<button 
                                onClick={() => handleFormAction('updateStatus', submission.id, 'Contacted')}
                                className="text-green-600 hover:text-green-900"
                                title="Mark as Contacted"
                              >
                                <ApperIcon name="Mail" size={16} />
                              </button>
<button 
                                onClick={() => {
                                  if (confirm('Are you sure you want to delete this submission?')) {
                                    handleFormAction('delete', submission.id);
                                  }
                                }}
                                className="text-red-600 hover:text-red-900"
                                title="Delete Submission"
                              >
                                <ApperIcon name="Trash" size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'seo' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Settings</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="space-y-6">
                  <FormField
                    label="Meta Title"
                    value={content.settings.seoTitle}
                    onChange={(e) => handleContentChange('settings', 'seoTitle', e.target.value)}
                    placeholder="Enter SEO title"
                  />
                  <FormField
                    label="Meta Description"
                    type="textarea"
                    rows={3}
                    value={content.settings.seoDescription}
                    onChange={(e) => handleContentChange('settings', 'seoDescription', e.target.value)}
                    placeholder="Enter SEO description"
                  />
                  <FormField
                    label="Keywords"
                    value={content.settings.seoKeywords}
                    onChange={(e) => handleContentChange('settings', 'seoKeywords', e.target.value)}
                    placeholder="Enter keywords separated by commas"
                  />
                  <FormField
                    label="Google Analytics ID"
                    value={content.settings.googleAnalytics}
                    onChange={(e) => handleContentChange('settings', 'googleAnalytics', e.target.value)}
                    placeholder="GA-XXXXXXXXX"
                  />
                  <FormField
                    label="Facebook Pixel ID"
                    value={content.settings.facebookPixel}
                    onChange={(e) => handleContentChange('settings', 'facebookPixel', e.target.value)}
                    placeholder="FB-XXXXXXXXX"
                  />
                  <Button
                    onClick={() => handleSave('SEO')}
                    loading={isSaving}
                    variant="primary"
                    className="flex items-center gap-2"
                  >
                    <ApperIcon name="Save" size={16} />
                    Save SEO Settings
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Site Settings</h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="space-y-6">
                  <FormField
                    label="Site Name"
                    value={content.settings.siteName}
                    onChange={(e) => handleContentChange('settings', 'siteName', e.target.value)}
                    placeholder="Enter site name"
                  />
                  <FormField
                    label="Site Tagline"
                    value={content.settings.siteTagline}
                    onChange={(e) => handleContentChange('settings', 'siteTagline', e.target.value)}
                    placeholder="Enter site tagline"
                  />
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="maintenanceMode"
                      checked={content.settings.maintenanceMode}
                      onChange={(e) => handleContentChange('settings', 'maintenanceMode', e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="maintenanceMode" className="text-sm font-medium text-gray-700">
                      Enable Maintenance Mode
                    </label>
                  </div>
                  <Button
                    onClick={() => handleSave('Settings')}
                    loading={isSaving}
                    variant="primary"
                    className="flex items-center gap-2"
                  >
                    <ApperIcon name="Save" size={16} />
                    Save Settings
                  </Button>
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