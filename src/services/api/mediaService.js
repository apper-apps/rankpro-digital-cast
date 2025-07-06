let mediaData = [
  { Id: 1, name: 'hero-background.jpg', type: 'image', size: '2.4 MB', url: '/images/hero-bg.jpg', uploadDate: '2024-01-10', alt: 'Hero background image' },
  { Id: 2, name: 'team-photo.jpg', type: 'image', size: '1.8 MB', url: '/images/team.jpg', uploadDate: '2024-01-09', alt: 'Team photo' },
  { Id: 3, name: 'logo.png', type: 'image', size: '156 KB', url: '/images/logo.png', uploadDate: '2024-01-08', alt: 'Company logo' },
  { Id: 4, name: 'company-video.mp4', type: 'video', size: '45.2 MB', url: '/videos/company.mp4', uploadDate: '2024-01-07', alt: 'Company introduction video' }
];

let nextId = 5;

export const mediaService = {
  async getAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...mediaData]), 200);
    });
  },

  async getById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const media = mediaData.find(m => m.Id === parseInt(id));
        if (media) {
          resolve({ ...media });
        } else {
          reject(new Error('Media not found'));
        }
      }, 200);
    });
  },

  async upload(file, metadata = {}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newMedia = {
          Id: nextId++,
          name: file.name || `file-${nextId}.jpg`,
          type: file.type?.startsWith('image/') ? 'image' : 
                file.type?.startsWith('video/') ? 'video' : 'file',
          size: file.size ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : '0 MB',
          url: URL.createObjectURL ? URL.createObjectURL(file) : `/uploads/${file.name}`,
          uploadDate: new Date().toISOString().split('T')[0],
          alt: metadata.alt || file.name || 'Uploaded media',
          ...metadata
        };
        mediaData.push(newMedia);
        resolve(newMedia);
      }, 1000);
    });
  },

  async delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mediaData.findIndex(m => m.Id === parseInt(id));
        if (index !== -1) {
          mediaData.splice(index, 1);
          resolve(true);
        } else {
          reject(new Error('Media not found'));
        }
      }, 300);
    });
  },

  async updateMetadata(id, metadata) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = mediaData.findIndex(m => m.Id === parseInt(id));
        if (index !== -1) {
          mediaData[index] = { ...mediaData[index], ...metadata };
          resolve(mediaData[index]);
        } else {
          reject(new Error('Media not found'));
        }
      }, 400);
    });
  },

  async getByType(type) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = mediaData.filter(m => m.type === type);
        resolve([...filtered]);
      }, 200);
    });
  }
};

export default mediaService;