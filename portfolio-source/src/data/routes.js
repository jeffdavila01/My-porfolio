export const pageTitles = {
  home: 'Home', about: 'About', skills: 'Skills', workflow: 'Workflow', projects: 'Projects', contact: 'Contact',
}

// Hash routes work on static hosts without server-side URL rewrites.
export function resolveRoute(hash = '') {
  const segments = hash.replace(/^#\/?/, '').split('/')
  const page = segments[0] === 'project' ? 'projects' : segments[0]
  return {
    page: Object.hasOwn(pageTitles, page) ? page : 'home',
    projectId: ['project', 'projects'].includes(segments[0]) ? segments[1] || null : null,
  }
}
