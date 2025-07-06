let analyticsData = {
  overview: {
    pageViews: { current: 12547, previous: 11206, change: 12 },
    uniqueVisitors: { current: 8432, previous: 7145, change: 18 },
    contactForms: { current: 156, previous: 125, change: 25 },
    bounceRate: { current: 32, previous: 35, change: -8 }
  },
  recentActivity: [
    { Id: 1, action: 'New contact form submission', time: '2 minutes ago', type: 'contact', user: 'John Doe' },
    { Id: 2, action: 'Page content updated', time: '1 hour ago', type: 'update', user: 'Admin User' },
    { Id: 3, action: 'New visitor from Google', time: '2 hours ago', type: 'visitor', user: 'Anonymous' },
    { Id: 4, action: 'Service page viewed', time: '3 hours ago', type: 'view', user: 'Jane Smith' },
    { Id: 5, action: 'Media file uploaded', time: '4 hours ago', type: 'media', user: 'Content Manager' }
  ],
  trafficSources: [
    { source: 'Organic Search', visits: 4521, percentage: 45.2 },
    { source: 'Direct', visits: 2876, percentage: 28.8 },
    { source: 'Social Media', visits: 1234, percentage: 12.3 },
    { source: 'Referral', visits: 987, percentage: 9.9 },
    { source: 'Email', visits: 382, percentage: 3.8 }
  ],
  topPages: [
    { page: '/', views: 3456, title: 'Home' },
    { page: '/services', views: 2341, title: 'Services' },
    { page: '/services/seo-optimization', views: 1876, title: 'SEO Optimization' },
    { page: '/about', views: 1234, title: 'About Us' },
    { page: '/contact', views: 987, title: 'Contact' }
  ]
};

export const analyticsService = {
  async getOverview() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...analyticsData.overview }), 300);
    });
  },

  async getRecentActivity(limit = 10) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const activities = [...analyticsData.recentActivity].slice(0, limit);
        resolve(activities);
      }, 200);
    });
  },

  async getTrafficSources() {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...analyticsData.trafficSources]), 300);
    });
  },

  async getTopPages(limit = 10) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const pages = [...analyticsData.topPages].slice(0, limit);
        resolve(pages);
      }, 200);
    });
  },

  async addActivity(activity) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newActivity = {
          Id: Math.max(...analyticsData.recentActivity.map(a => a.Id)) + 1,
          ...activity,
          time: 'Just now'
        };
        analyticsData.recentActivity.unshift(newActivity);
        
        // Keep only the last 50 activities
        if (analyticsData.recentActivity.length > 50) {
          analyticsData.recentActivity = analyticsData.recentActivity.slice(0, 50);
        }
        
        resolve(newActivity);
      }, 100);
    });
  },

  async getAnalyticsByDateRange(startDate, endDate) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate date-filtered analytics
        const mockData = {
          pageViews: Math.floor(Math.random() * 5000) + 8000,
          uniqueVisitors: Math.floor(Math.random() * 3000) + 5000,
          contactForms: Math.floor(Math.random() * 50) + 100,
          bounceRate: Math.floor(Math.random() * 20) + 25
        };
        resolve(mockData);
      }, 400);
    });
  }
};

export default analyticsService;