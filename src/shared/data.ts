import Package from '../../package.json';
import { RiGithubLine, RiMailCheckLine, RiStackLine } from 'react-icons/ri';

export const metadata = {
  author: Package.author,
  appName: Package.metadata.name,
  version: Package.version,
  license: Package.license,
  repository: Package.repository,
  websiteName: Package.website_name,
  tags: Package.keywords.join(' '),
  websiteUrl: Package.url,
  copyright: Package.metadata.copyright_notice,
  contacts: [
    {
      name: 'Github',
      icon: RiGithubLine,
      url: Package.author.github
    },
    {
      name: 'Portfolio',
      icon: RiStackLine,
      url: Package.author.portfolio
    },
    {
      name: 'E-mail',
      icon: RiMailCheckLine,
      url: Package.author.email
    }
  ]
};

export const footerAnchors: Array<Array<{ name: string; url: string }>> = [
  [
    { name: 'Contact', url: '/' },
    { name: 'About Us', url: '/' },
    { name: 'Portfolio', url: metadata.author.portfolio }
  ],
  [
    { name: 'Compare Plans', url: '/' },
    { name: 'Resources', url: '/' },
    { name: 'Healthy and Safety', url: '/' }
  ],
  [
    { name: 'Book a Service', url: '/' },
    { name: 'Terms of Service', url: '/' },
    { name: 'Privacy Policy', url: '/docs/privacy-policy' }
  ],
  [
    { name: 'Facebook', url: '/' },
    { name: 'Twitter', url: '/' },
    { name: 'Instagram', url: '/' }
  ]
];

export const colorSchemeOptions = [
  { label: 'Light Theme', value: `{"mode":"manual", "scheme": "light"}` },
  { label: 'Dark Theme', value: `{"mode":"manual", "scheme": "dark"}` },
  { label: 'Automatic', value: `{"mode":"auto", "scheme": "dark"}` }
];
