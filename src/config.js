export const API_BASE = import.meta.env.VITE_API_URL || 'https://classesta-backend.vercel.app';

export const getFileUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) {
        // Proxy external URLs (like Cloudinary) through backend to prevent CORS issues with react-pdf
        return `${API_BASE}/api/proxy-pdf?url=${encodeURIComponent(url)}`;
    }
    return `${API_BASE}${url}`;
};
