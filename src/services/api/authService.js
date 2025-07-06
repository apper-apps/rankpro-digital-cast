const ADMIN_CREDENTIALS = {
  username: 'admin@rankpro',
  password: 'RankPro2024!'
};

const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

export const authService = {
  async login(credentials) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === ADMIN_CREDENTIALS.username && 
            credentials.password === ADMIN_CREDENTIALS.password) {
          const sessionData = {
            authenticated: true,
            loginTime: new Date().toISOString(),
            user: {
              Id: 1,
              username: credentials.username,
              role: 'Administrator'
            }
          };
          
          localStorage.setItem('adminAuthenticated', 'true');
          localStorage.setItem('adminLoginTime', sessionData.loginTime);
          localStorage.setItem('adminUser', JSON.stringify(sessionData.user));
          
          resolve(sessionData);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },

  logout() {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    localStorage.removeItem('adminUser');
  },

  isAuthenticated() {
    const authenticated = localStorage.getItem('adminAuthenticated');
    const loginTime = localStorage.getItem('adminLoginTime');
    
    if (!authenticated || !loginTime) {
      return false;
    }

    const loginTimestamp = new Date(loginTime).getTime();
    const currentTime = new Date().getTime();
    
    if (currentTime - loginTimestamp > SESSION_TIMEOUT) {
      this.logout();
      return false;
    }

    return true;
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('adminUser');
    return userStr ? JSON.parse(userStr) : null;
  },

  refreshSession() {
    if (this.isAuthenticated()) {
      localStorage.setItem('adminLoginTime', new Date().toISOString());
      return true;
    }
    return false;
  }
};

export default authService;