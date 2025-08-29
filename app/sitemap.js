import { URL } from 'url';

// This file is located in the `app` directory and is automatically detected by Next.js
// to generate a sitemap.xml file.

import { URL } from 'url';

// Define your base URL. This is important for Vercel deployments.
const baseURL = 'https://six-mp3.vercel.app'; // **CRITICAL:** Replaced with your actual domain URL

export default async function sitemap() {
  // This is a simple, static sitemap.
  // If your website had a blog or other dynamic content, you would
  // fetch that data here and include it in the sitemap.
  const routes = ['', '/download'].map((route) => ({
    url: new URL(route, baseURL).href,
    lastModified: new Date().toISOString(),
  }));

  return [
    ...routes,
    // Add any other static routes or dynamically generated routes here
    // For example: { url: `${baseURL}/about`, lastModified: new Date() }
  ];
}
