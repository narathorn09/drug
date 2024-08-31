/**
 * Extracts the file ID from a Google Drive shareable link.
 * @param {string} url - The Google Drive shareable link.
 * @returns {string|null} - The file ID, or null if the link is invalid.
 */
export const getFileIdFromUrl = (url) => {
    const regex = /\/d\/([^\/?]+)/;
    const match = url?.match(regex);
    return match ? match[1] : null;
};
