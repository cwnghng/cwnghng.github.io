import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const RESUME_SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/wang-heng-chua-86b53a194',
    value: 'linkedin.com/in/wang-heng-chua-86b53a194',
    icon: faLinkedin,
  },
  {
    href: 'https://github.com/cwnghng',
    value: 'github.com/cwnghng',
    icon: faGithub,
  },
  {
    href: 'https://cwnghng.github.io',
    value: 'cwnghng.github.io',
    icon: faGlobe,
  },
]

export const RESUME_CONTACT_INFOS = [
  {
    value: 'cwnghng@outlook.com',
    icon: faEnvelope,
  },
  {
    value: '+65 8138 4451',
    icon: faPhone,
  },
]

export const RESUME_WORK_EXPERIENCE = [
  {
    title: 'Team Lead, Software Dev',
    duration: '2022 March - Present',
    description:
      "Responsible for the development of the company's metaverse product and any other software the company requires. I am also the key person communicating technical requirements to the 3D assets developed by a studio the company engaged, ensuring that all the assets are well suited for web based applications",
    company: 'The AceMeta Company',
    companyLink: 'https://labelled.io/',
    achievements: ['Hashkey DID', 'Labelled', 'Sales'],
    skills: [],
    technologies: ['NodeJS', 'Typescript', 'ReactJS', 'ThreeJS', 'AWS'],
  },
  {
    title: 'Freelance Trader',
    duration: '2021 August - 2022 March',
    description:
      'Conducted research and development on an automatic trading algorithm primarily targeting forex trading, as well as development of trade management tools. The trading algorithm focused on adapting and reinventing technical analysis based on mathematical models.',
    company: 'Self-employed',
    companyLink: '',
    achievements: [],
    skills: [],
    technologies: ['NodeJS', 'MQL4'],
  },
  {
    title: 'Laboratory Technician',
    duration: '2020 September - 2022 March',
    description:
      'A BSL-3 clinical diagnostics facility primary focused on processing Covid-19 samples. As the lab technician, I am responsible for the samples processing and analysis as well as stock management. I am experienced with manual sample processing and is consistent with sample quality, managing to prevent and evade contaminations that would otherwise render the result unusable.',
    company: 'DSO National Laboratories',
    companyLink: 'https://www.dso.org.sg/',
    achievements: [],
    skills: [],
    technologies: [],
  },
  {
    title: 'Associate Photographer',
    duration: '2017 May - 2019 June',
    description:
      'As an associate photographer, I helped the company engage clients, conduct shoots for weddings and corporate events as well as aided in several product photography. I am very experienced with photography on the go, capable of capturing high quantity of unique photographs with little to no edits in post. I have been noted and complimented by guests for my jovial and hardworking nature and have been well liked by my colleagues.',
    company: 'LiveMoments',
    companyLink: 'https://www.livemoments.com.sg/',
    achievements: [],
    skills: [],
    technologies: ['Adobe Lightroom', 'Adobe Photoshop'],
  },
]

export const RESUME_SKILLS_FRONTEND = [
  {
    title: 'React',
    level: 0.85,
  },
  {
    title: 'Typescript',
    level: 0.9,
  },
  {
    title: 'NodeJS',
    level: 0.9,
  },
  {
    title: 'HTML/CSS',
    level: 0.95,
  },
]

export const RESUME_SKILLS_BACKEND = [
  {
    title: 'NodeJS',
    level: 0.9,
  },
  {
    title: 'MongoDB',
    level: 0.8,
  },
]

export const RESUME_SKILLS_OTHERS = [
  'Python',
  'Java',
  'AWS',
  'Git',
  'Stripe',
  'Ecwid',
  'Apple',
  'Apple',
  'Apple',
  'Apple',
]
