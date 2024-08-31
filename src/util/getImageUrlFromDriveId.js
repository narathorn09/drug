/**
 * Extracts the file ID from a Google Drive shareable link.
 * @param {string} url - The Google Drive shareable link.
 * @returns {string|null} - The file ID, or null if the link is invalid.
 */
export const getImageUrlFromDriveId = (fileId) => {
    return fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : '';
};