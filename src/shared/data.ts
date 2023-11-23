import Package from '../../package.json';
import { RiGithubLine, RiMailCheckLine, RiStackLine } from 'react-icons/ri';

import personImage00 from '../assets/people/people-00.jpg';
import personImage01 from '../assets/people/people-01.jpg';
import personImage02 from '../assets/people/people-02.jpg';
import personImage03 from '../assets/people/people-03.jpg';
import personImage04 from '../assets/people/people-04.jpg';
import personImage05 from '../assets/people/people-05.jpg';
import personImage06 from '../assets/people/people-06.jpg';
import personImage07 from '../assets/people/people-07.jpg';

export const personPhotos = [
  personImage00,
  personImage01,
  personImage02,
  personImage03,
  personImage04,
  personImage05,
  personImage06,
  personImage07
];

export const categoryRoutes: Array<{ name: string; url: string }> = [
  { name: 'Adana Kebab, Lamb and Beef', url: '/' },
  { name: 'White Beans okra with Lamb Shank', url: '/' },
  { name: 'Mondi with Lamb shank Delimia', url: '/' },
  { name: 'Black Beans with Lamb Shank', url: '/' },
  { name: 'Stuffed grape leaves with Lamb Shank', url: '/' }
];

export const recipeTypes: Array<{ type: string; description: string }> = [
  {
    type: 'Asiatic',
    description: 'We also offer a wide range of kebab plates, including lamb.'
  },
  {
    type: 'Japanese',
    description: 'The perfect complement to any meal and for dessert.'
  },
  {
    type: 'Italian',
    description: 'At Ottawa Kebab, we strive to create a wram and welcoming.'
  },
  {
    type: 'Chinese',
    description: 'Our dips and sauces, including smoky baba ganoush.'
  }
];

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
