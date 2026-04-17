import { siteConfig, toAbsoluteUrl } from './siteConfig';

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export function applySiteMetadata({ title, description, path = '/', image }) {
  const canonicalUrl = toAbsoluteUrl(path);
  const socialImage = toAbsoluteUrl(image || siteConfig.defaultSocialImage);

  document.title = title || siteConfig.defaultTitle;

  ensureMeta('meta[name="description"]', {
    name: 'description',
    content: description || siteConfig.defaultDescription,
  });
  ensureMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: title || siteConfig.defaultTitle,
  });
  ensureMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: description || siteConfig.defaultDescription,
  });
  ensureMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: canonicalUrl,
  });
  ensureMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: socialImage,
  });
  ensureMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: title || siteConfig.defaultTitle,
  });
  ensureMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description || siteConfig.defaultDescription,
  });
  ensureMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: socialImage,
  });
  ensureLink('link[rel="canonical"]', {
    rel: 'canonical',
    href: canonicalUrl,
  });
}
