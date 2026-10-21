export const site = {
  name: 'Jeffrey Davila',
  title: 'Aspiring AI Developer',
  professionalHeadline: 'Aspiring AI Developer | Full-Stack Web Development | Python • JavaScript • Node.js • MySQL',
  specialties: ['Full-Stack Web Development', 'Python', 'JavaScript', 'Node.js', 'MySQL'],
  github: 'https://github.com/jeffdavila01',
  email: 'jeffdavila01@gmail.com',
  linkedin: '',
}

export const navigation = [
  { label: 'Home', href: '#/home' },
  { label: 'About', href: '#/about' },
  { label: 'Skills', href: '#/skills' },
  { label: 'Workflow', href: '#/workflow' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Resume', href: '#/resume' },
  { label: 'Contact', href: '#/contact' },
]

export function gmailComposeUrl(email = site.email) {
  const query = new URLSearchParams({ view: 'cm', fs: '1', to: email })
  return `https://mail.google.com/mail/?${query}`
}
