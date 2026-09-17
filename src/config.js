export const API_BASE = import.meta.env.VITE_API_URL || 'https://classesta-backend.vercel.app';

export const getFileUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) return url;
    return `${API_BASE}${url}`;
};
