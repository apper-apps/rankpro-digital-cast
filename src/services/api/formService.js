let formSubmissions = [
  { Id: 1, name: 'John Doe', email: 'john@example.com', service: 'SEO', message: 'Interested in SEO services for my e-commerce website. Would like to know more about your packages.', date: '2024-01-15', status: 'New', phone: '+1-555-0123' },
  { Id: 2, name: 'Jane Smith', email: 'jane@example.com', service: 'PPC', message: 'Need help with Google Ads campaign management. Currently spending $2000/month with poor results.', date: '2024-01-14', status: 'Contacted', phone: '+1-555-0124' },
  { Id: 3, name: 'Bob Wilson', email: 'bob@example.com', service: 'Web Design', message: 'Looking for complete website redesign. Current site is outdated and not mobile-friendly.', date: '2024-01-13', status: 'Quoted', phone: '+1-555-0125' }
];

let nextId = 4;

export const formService = {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...formSubmissions]), 200);
    });
  },

  async getById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const submission = formSubmissions.find(s => s.Id === parseInt(id));
        if (submission) {
          resolve({ ...submission });
        } else {
          reject(new Error('Form submission not found'));
        }
      }, 200);
    });
  },

  async create(submission) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newSubmission = {
          ...submission,
          Id: nextId++,
          date: new Date().toISOString().split('T')[0],
          status: 'New'
        };
        formSubmissions.push(newSubmission);
        resolve(newSubmission);
      }, 500);
    });
  },

  async updateStatus(id, status) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = formSubmissions.findIndex(s => s.Id === parseInt(id));
        if (index !== -1) {
          formSubmissions[index].status = status;
          resolve(formSubmissions[index]);
        } else {
          reject(new Error('Form submission not found'));
        }
      }, 400);
    });
  },

  async delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = formSubmissions.findIndex(s => s.Id === parseInt(id));
        if (index !== -1) {
          formSubmissions.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error('Form submission not found'));
        }
      }, 300);
    });
  },

  async getByStatus(status) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = formSubmissions.filter(s => s.status === status);
        resolve([...filtered]);
      }, 200);
    });
  },

  async getByDateRange(startDate, endDate) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = formSubmissions.filter(s => {
          const submissionDate = new Date(s.date);
          return submissionDate >= new Date(startDate) && submissionDate <= new Date(endDate);
        });
        resolve([...filtered]);
      }, 200);
    });
  }
};

export default formService;