let contentData = {
  hero: {
    Id: 1,
    title: 'Dominate Search Results with',
    subtitle: 'Proven Digital Marketing',
    description: 'Transform your online presence with our data-driven SEO, PPC, and web design strategies. We deliver measurable results that grow your business.',
    buttonText: 'Get Free Analysis'
  },
  services: {
    seo: {
      Id: 1,
      title: 'SEO Optimization',
      description: 'Dominate search results with our proven SEO strategies. We optimize your website to rank higher and attract more organic traffic.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building']
    },
    ppc: {
      Id: 2,
      title: 'PPC Management',
      description: 'Maximize your ROI with targeted PPC campaigns. We manage your ads to deliver qualified leads at the lowest cost.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing']
    },
    webDesign: {
      Id: 3,
      title: 'Web Design',
      description: 'Create stunning websites that convert visitors into customers. Our designs are modern, responsive, and optimized for performance.',
      features: ['Responsive Design', 'User Experience', 'Speed Optimization', 'Mobile-First']
    }
  },
  about: {
    Id: 1,
    title: 'About RankPro Digital',
    subtitle: 'Your Digital Marketing Partner',
    description: 'We are a team of passionate digital marketing experts dedicated to helping businesses succeed online. With over 5 years of experience and 500+ successful campaigns, we deliver results that matter.',
    mission: 'To empower businesses with data-driven digital marketing strategies that drive growth and success.',
    vision: 'To be the leading digital marketing agency known for innovation, results, and exceptional client service.',
    teamMembers: [
      { Id: 1, name: 'John Smith', role: 'CEO & Founder', image: '/team/john.jpg' },
      { Id: 2, name: 'Sarah Johnson', role: 'Head of SEO', image: '/team/sarah.jpg' },
      { Id: 3, name: 'Mike Chen', role: 'PPC Specialist', image: '/team/mike.jpg' }
    ]
  },
  testimonials: [
    {
      Id: 1,
      name: 'Emily Rodriguez',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'RankPro Digital transformed our online presence. Our organic traffic increased by 300% in just 6 months!',
      rating: 5,
      image: '/testimonials/emily.jpg'
    },
    {
      Id: 2,
      name: 'David Thompson',
      company: 'Local Retail Co.',
      role: 'Owner',
      content: 'Their PPC campaigns have been incredibly effective. We\'ve seen a 250% increase in qualified leads.',
      rating: 5,
      image: '/testimonials/david.jpg'
    }
  ],
  cta: {
    Id: 1,
    title: 'Ready to Accelerate Your Growth?',
    description: 'Join hundreds of successful businesses that trust RankPro Digital to drive their online success.',
    buttonText: 'Get Started Today',
    secondaryButtonText: 'View Case Studies',
    backgroundImage: '/images/cta-bg.jpg'
  },
  pages: {
    home: {
      Id: 1,
      heroTitle: 'Dominate Search Results with',
      heroSubtitle: 'Proven Digital Marketing',
      heroDescription: 'Transform your online presence with our data-driven SEO, PPC, and web design strategies. We deliver measurable results that grow your business.',
      heroButtonText: 'Get Free Analysis',
      status: 'published',
      lastModified: new Date().toISOString()
    },
    about: {
      Id: 2,
      title: 'About RankPro Digital',
      subtitle: 'Your Digital Marketing Partner',
      description: 'We are a team of passionate digital marketing experts dedicated to helping businesses succeed online.',
      status: 'published',
      lastModified: new Date().toISOString()
    },
    contact: {
      Id: 3,
      title: 'Contact Us',
      description: 'Get in touch with our digital marketing experts to discuss your business goals.',
      phone: '+1 (555) 123-4567',
      email: 'info@rankprodigital.com',
      address: '123 Business Ave, Suite 100\nToronto, ON M5V 3A8',
      status: 'published',
      lastModified: new Date().toISOString()
    },
    services: {
      Id: 4,
      title: 'Digital Marketing Services',
      description: 'Comprehensive digital marketing solutions designed to grow your business, increase your online presence, and drive measurable results.',
      heroTitle: 'Digital Marketing Services',
      heroDescription: 'Comprehensive digital marketing solutions designed to grow your business.',
      status: 'published',
      lastModified: new Date().toISOString()
    },
    seo: {
      Id: 5,
      title: 'SEO Optimization Services',
      description: 'Dominate search engine results with our comprehensive SEO strategies that drive organic traffic and increase your online visibility.',
      heroTitle: 'SEO Optimization Services',
      heroDescription: 'Dominate search engine results with our comprehensive SEO strategies.',
      features: ['Keyword Research & Analysis', 'On-Page SEO Optimization', 'Technical SEO Audits', 'Local SEO', 'Link Building'],
      status: 'published',
      lastModified: new Date().toISOString()
    },
    ppc: {
      Id: 6,
      title: 'PPC Management Services',
      description: 'Maximize your ROI with expertly managed pay-per-click campaigns across Google Ads, Facebook, and other platforms.',
      heroTitle: 'PPC Management Services',
      heroDescription: 'Maximize your ROI with expertly managed pay-per-click campaigns.',
      features: ['Google Ads Management', 'Facebook & Instagram Ads', 'Campaign Optimization', 'Conversion Tracking', 'Performance Analytics'],
      status: 'published',
      lastModified: new Date().toISOString()
    },
    webDesign: {
      Id: 7,
      title: 'Web Design & Development',
      description: 'Create stunning, conversion-focused websites that provide exceptional user experiences and drive business growth.',
      heroTitle: 'Web Design & Development',
      heroDescription: 'Create stunning, conversion-focused websites that provide exceptional user experiences.',
      features: ['Custom Web Design', 'Responsive Development', 'E-commerce Solutions', 'CMS Integration', 'Performance Optimization'],
      status: 'published',
      lastModified: new Date().toISOString()
    },
    contentMarketing: {
      Id: 8,
      title: 'Content Marketing Services',
      description: 'Engage your audience with compelling content that builds brand authority and drives conversions.',
      heroTitle: 'Content Marketing Services',
      heroDescription: 'Engage your audience with compelling content that builds brand authority.',
      features: ['Content Strategy', 'Blog Writing & SEO', 'Social Media Content', 'Email Marketing', 'Brand Storytelling'],
      status: 'published',
      lastModified: new Date().toISOString()
    },
    socialMedia: {
      Id: 9,
      title: 'Social Media Marketing',
      description: 'Build meaningful connections with your audience through strategic social media marketing and community management.',
      heroTitle: 'Social Media Marketing',
      heroDescription: 'Build meaningful connections with your audience through strategic social media marketing.',
      features: ['Social Strategy', 'Content Creation', 'Community Management', 'Influencer Partnerships', 'Analytics & Reporting'],
      status: 'published',
      lastModified: new Date().toISOString()
    },
    analytics: {
      Id: 10,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics, tracking, and performance reporting.',
      heroTitle: 'Analytics & Reporting',
      heroDescription: 'Make data-driven decisions with comprehensive analytics and performance reporting.',
      features: ['Google Analytics Setup', 'Custom Dashboards', 'Conversion Tracking', 'Performance Monitoring', 'Strategy Sessions'],
      status: 'published',
      lastModified: new Date().toISOString()
    }
  }
};

export const contentService = {
  async getHeroContent() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...contentData.hero }), 200);
    });
  },

  async updateHeroContent(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        contentData.hero = { ...contentData.hero, ...data };
        resolve({ ...contentData.hero });
      }, 500);
    });
  },

  async getServicesContent() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...contentData.services }), 200);
    });
  },

  async updateServiceContent(serviceKey, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        contentData.services[serviceKey] = { ...contentData.services[serviceKey], ...data };
        resolve({ ...contentData.services[serviceKey] });
      }, 500);
    });
  },

  async getAboutContent() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...contentData.about }), 200);
    });
  },

  async updateAboutContent(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        contentData.about = { ...contentData.about, ...data };
        resolve({ ...contentData.about });
      }, 500);
    });
  },

  async getTestimonials() {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...contentData.testimonials]), 200);
    });
  },

  async addTestimonial(testimonial) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTestimonial = {
          ...testimonial,
          Id: Math.max(...contentData.testimonials.map(t => t.Id)) + 1
        };
        contentData.testimonials.push(newTestimonial);
        resolve(newTestimonial);
      }, 500);
    });
  },

  async updateTestimonial(id, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = contentData.testimonials.findIndex(t => t.Id === id);
        if (index !== -1) {
          contentData.testimonials[index] = { ...contentData.testimonials[index], ...data };
          resolve(contentData.testimonials[index]);
        } else {
          throw new Error('Testimonial not found');
        }
      }, 500);
    });
  },

  async deleteTestimonial(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        contentData.testimonials = contentData.testimonials.filter(t => t.Id !== id);
        resolve(true);
      }, 300);
    });
  },

  async getCtaContent() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...contentData.cta }), 200);
    });
  },

  async updateCtaContent(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        contentData.cta = { ...contentData.cta, ...data };
        resolve({ ...contentData.cta });
}, 500);
    });
  },

  async getAllPages() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...contentData.pages }), 200);
    });
  },

  async getPageContent(pageKey) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contentData.pages[pageKey]) {
          resolve({ ...contentData.pages[pageKey] });
        } else {
          reject(new Error('Page not found'));
        }
      }, 200);
    });
  },

  async updatePageContent(pageKey, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contentData.pages[pageKey]) {
          contentData.pages[pageKey] = { 
            ...contentData.pages[pageKey], 
            ...data, 
            lastModified: new Date().toISOString() 
          };
          resolve({ ...contentData.pages[pageKey] });
        } else {
          reject(new Error('Page not found'));
        }
      }, 500);
    });
  },

  async createPage(pageData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newId = Math.max(...Object.values(contentData.pages).map(p => p.Id)) + 1;
        const pageKey = pageData.slug || pageData.title.toLowerCase().replace(/\s+/g, '-');
        
        const newPage = {
          ...pageData,
          Id: newId,
          status: pageData.status || 'draft',
          lastModified: new Date().toISOString()
        };
        
        contentData.pages[pageKey] = newPage;
        resolve(newPage);
      }, 500);
    });
  },

  async deletePage(pageKey) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (contentData.pages[pageKey]) {
          delete contentData.pages[pageKey];
          resolve(true);
        } else {
          reject(new Error('Page not found'));
        }
      }, 300);
    });
  }
};

export default contentService;