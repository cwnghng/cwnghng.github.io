import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const RESUME_ABSTRACT =
  "As the Product Manager and Team Lead at The AceMeta Company, I specialize in full-stack development with MERN stacks and the creation of 3D frontend products. My innovative applications focus on discerning trade patterns, and I've recently developed an algorithm for identifying positive forex market expectations. A strong advocate for Web3 as the future of authentication and ownership, I envision its extension beyond Bitcoin to physical goods and agreements."

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
    achievements: [
      'Blackscale launch - successfully launched our first physically backed token',
      'NFT Asia -',
      'Sales',
    ],
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
    title: 'Freelance Photographer',
    duration: '2017 May - 2019 June',
    description:
      "As a freelancer, I focus on event and wedding photography as well as conducting some marketing. I am a great listener, always engaging and working closely with my clients to understand their requests and requirements for their photoshoots. During the shoots, I also focused on talking to and entertaining guests. I believe a great service is not in just in the quantity and quality of photos taken, but also the guests' experience as a whole.",
    company: 'Self-employed',
    companyLink: '',
    achievements: [],
    skills: [],
    technologies: ['Adobe Lightroom', 'Adobe Photoshop'],
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
    title: 'HTML/CSS',
    level: 0.95,
  },
  {
    title: 'ThreeJS',
    level: 0.85,
  },
]

export const RESUME_SKILLS_BACKEND = [
  {
    title: 'NodeJS',
    level: 0.9,
  },
  {
    title: 'MongoDB',
    level: 0.85,
  },
  {
    title: 'MySQL',
    level: 0.8,
  },
]

export const RESUME_SKILLS_OTHERS = [
  'Python',
  'Java',
  'AWS',
  'Git',
  'Blockchain',
  'Solidity',
  'Web3JS',
  'Stripe',
  'Ecwid',
  'Jest',
  'Webpack',
  'Azure',
  'TDD',
  'Jira',
  'ExpressJS',
]

export const RESUME_EDUCATION = [
  {
    title: 'BSc Physics',
    school: 'National University of Singapore',
    duration: '2017 - 2020',
  },
  {
    title: 'A Levels',
    school: 'Yishun Junior College',
    duration: '2013 - 2014',
  },
]

export const RESUME_CERTIFICATES = [
  {
    title: 'NGINX Fundamentals: High Performance Servers from Scratch',
    school: 'Udemy',
    duration: 'Jul 2022',
  },
  {
    title: 'Three.js and Typescript',
    school: 'Udemy',
    duration: 'Dec 2020',
  },
  {
    title: 'The Advanced Web Developer Bootcamp',
    school: 'Udemy',
    duration: 'Aug 2020',
  },
  {
    title: 'Web Programming and Applications',
    school: 'TMC Academy Singapore',
    duration: 'Feb 2019',
  },
]

export const RESUME_LANGUAGES = [
  {
    lang: 'English',
    level: 'Proficient',
  },
  {
    lang: 'Mandarin',
    level: 'Okay',
  },
  {
    lang: 'Teochew',
    level: 'Okay',
  },
]

export const RESUME_INTERESTS = ['Gaming', 'Game Development']
