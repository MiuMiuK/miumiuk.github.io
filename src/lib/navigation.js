export const navigationTargets = {
  home: { type: 'home-section', sectionId: 'home' },
  projects: { type: 'home-section', sectionId: 'work' },
  contact: { type: 'home-section', sectionId: 'contact' },
  about: { type: 'overlay-page', page: 'about' },
  experience: { type: 'overlay-page', page: 'experience' },
};

export const getProjectHref = (projectId) =>
  `/?project=${encodeURIComponent(projectId)}`;

export function getNavigationHref(target) {
  const destination = navigationTargets[target];

  if (!destination) {
    return '/';
  }

  if (destination.type === 'home-section') {
    return destination.sectionId === 'home'
      ? '/#home'
      : `/#${destination.sectionId}`;
  }

  if (destination.type === 'overlay-page') {
    return `/?overlay=${destination.page}`;
  }

  return '/';
}

export function shouldHandleClientNavigation(event) {
  if (!event) {
    return true;
  }

  if (event.defaultPrevented) {
    return false;
  }

  if (event.button !== 0) {
    return false;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }

  const target = event.currentTarget?.getAttribute('target');

  if (target && target.toLowerCase() !== '_self') {
    return false;
  }

  return true;
}
