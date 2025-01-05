import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { TOOLS } from "./Constants";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Remove the before www.
export const getDomain = (url) => {
  const { hostname } = new URL(url);
  const parts = hostname.split('.');
  if (parts.length > 2) {
    parts.shift();
  }
  return parts.join('.');
};

export const getToolDetails = (toolName) => {
  const tool = TOOLS.get(toolName);
  return tool ? { icon: tool.icon, href: tool.href } : null;
};


export const getMonthYear = (StringDate) => {
  const date = new Date(StringDate);
  return date
    .toLocaleString(undefined, { month: 'short', year: 'numeric' })
    .replace(' ', ', ');
};

export const sortByDate = (blogs) => {
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
};