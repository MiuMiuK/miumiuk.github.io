const fallbackSiteUrl = 'https://miumiuk.github.io';

export const siteConfig = {
  siteUrl: (import.meta.env.VITE_SITE_URL || fallbackSiteUrl).replace(
    /\/$/,
    ''
  ),
  siteName: 'Miao Ke Portfolio',
  defaultTitle: 'Miao Ke Portfolio',
  defaultDescription:
    'Miao Ke 的产品体验设计作品集，聚焦企业服务、设计系统、复杂流程设计与 AI 协作体验。',
  defaultSocialImage: '/og-cover.svg',
};

export function toAbsoluteUrl(path = '/') {
  return new URL(path, `${siteConfig.siteUrl}/`).toString();
}
