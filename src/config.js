export const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

export const getFileUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${API_BASE}${url}`;
};
