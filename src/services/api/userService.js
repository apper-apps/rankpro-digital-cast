let userData = [
  { Id: 1, name: 'Admin User', email: 'admin@rankpro.com', role: 'Administrator', status: 'Active', lastLogin: '2024-01-15 10:30 AM', permissions: ['all'] },
  { Id: 2, name: 'Content Manager', email: 'content@rankpro.com', role: 'Editor', status: 'Active', lastLogin: '2024-01-15 09:15 AM', permissions: ['content', 'media'] },
  { Id: 3, name: 'SEO Specialist', email: 'seo@rankpro.com', role: 'Contributor', status: 'Active', lastLogin: '2024-01-14 04:45 PM', permissions: ['content'] }
];

let nextId = 4;

export const userService = {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...userData]), 200);
    });
  },

  async getById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userData.find(u => u.Id === parseInt(id));
        if (user) {
          resolve({ ...user });
        } else {
          reject(new Error('User not found'));
        }
      }, 200);
    });
  },

  async create(user) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUser = {
          ...user,
          Id: nextId++,
          status: 'Active',
          lastLogin: 'Never',
          permissions: user.role === 'Administrator' ? ['all'] : 
                      user.role === 'Editor' ? ['content', 'media'] : ['content']
        };
        userData.push(newUser);
        resolve(newUser);
      }, 500);
    });
  },

  async update(id, data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = userData.findIndex(u => u.Id === parseInt(id));
        if (index !== -1) {
          userData[index] = { ...userData[index], ...data };
          resolve(userData[index]);
        } else {
          reject(new Error('User not found'));
        }
      }, 500);
    });
  },

  async delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = userData.findIndex(u => u.Id === parseInt(id));
        if (index !== -1) {
          userData.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error('User not found'));
        }
      }, 300);
    });
  },

  async updateUserRole(id, role) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = userData.findIndex(u => u.Id === parseInt(id));
        if (index !== -1) {
          userData[index].role = role;
          userData[index].permissions = role === 'Administrator' ? ['all'] : 
                                       role === 'Editor' ? ['content', 'media'] : ['content'];
          resolve(userData[index]);
        } else {
          reject(new Error('User not found'));
        }
      }, 400);
    });
  },

  async updateUserStatus(id, status) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = userData.findIndex(u => u.Id === parseInt(id));
        if (index !== -1) {
          userData[index].status = status;
          resolve(userData[index]);
        } else {
          reject(new Error('User not found'));
        }
      }, 400);
    });
  }
};

export default userService;