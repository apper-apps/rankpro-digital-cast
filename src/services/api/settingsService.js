let siteSettings = {
  Id: 1,
  siteName: 'RankPro Digital',
  siteTagline: 'Premier Digital Marketing Agency',
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
  maintenanceMode: false,
  seoTitle: 'RankPro Digital - Premier Digital Marketing Agency',
  seoDescription: 'Transform your online presence with data-driven SEO, PPC, and web design strategies.',
  seoKeywords: 'digital marketing, SEO, PPC, web design, Toronto',
  googleAnalytics: 'GA-XXXXXXXXX',
  facebookPixel: 'FB-XXXXXXXXX',
  contactInfo: {
    phone: '+1 (555) 123-4567',
    email: 'info@rankprodigital.com',
    address: '123 Business Ave, Suite 100\nToronto, ON M5V 3A8',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM'
  },
  socialMedia: {
    facebook: 'https://facebook.com/rankprodigital',
    twitter: 'https://twitter.com/rankprodigital',
    linkedin: 'https://linkedin.com/company/rankprodigital',
    instagram: 'https://instagram.com/rankprodigital'
  },
  emailSettings: {
    smtpHost: 'smtp.gmail.com',
    smtpPort: 587,
    smtpUser: '',
    smtpPass: '',
    fromEmail: 'noreply@rankprodigital.com',
    fromName: 'RankPro Digital'
  }
};

export const settingsService = {
  async getSettings() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...siteSettings }), 200);
    });
  },

  async updateSettings(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        siteSettings = { ...siteSettings, ...data };
        resolve({ ...siteSettings });
      }, 500);
    });
  },

  async updateContactInfo(contactData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        siteSettings.contactInfo = { ...siteSettings.contactInfo, ...contactData };
        resolve({ ...siteSettings.contactInfo });
      }, 400);
    });
  },

  async updateSeoSettings(seoData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        siteSettings = {
          ...siteSettings,
          seoTitle: seoData.seoTitle || siteSettings.seoTitle,
          seoDescription: seoData.seoDescription || siteSettings.seoDescription,
          seoKeywords: seoData.seoKeywords || siteSettings.seoKeywords,
          googleAnalytics: seoData.googleAnalytics || siteSettings.googleAnalytics,
          facebookPixel: seoData.facebookPixel || siteSettings.facebookPixel
        };
        resolve({ ...siteSettings });
      }, 400);
    });
  },

  async updateSocialMedia(socialData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        siteSettings.socialMedia = { ...siteSettings.socialMedia, ...socialData };
        resolve({ ...siteSettings.socialMedia });
      }, 400);
    });
  },

  async toggleMaintenanceMode() {
    return new Promise((resolve) => {
      setTimeout(() => {
        siteSettings.maintenanceMode = !siteSettings.maintenanceMode;
        resolve(siteSettings.maintenanceMode);
      }, 300);
    });
  },

  async updateEmailSettings(emailData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        siteSettings.emailSettings = { ...siteSettings.emailSettings, ...emailData };
        resolve({ ...siteSettings.emailSettings });
      }, 400);
    });
  }
};

export default settingsService;