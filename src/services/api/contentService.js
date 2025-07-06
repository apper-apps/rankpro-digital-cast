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
  }
};

export default contentService;