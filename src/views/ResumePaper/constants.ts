import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const RESUME_ABSTRACT =
  'As the Product Manager and Team Lead at The AceMeta Company, I specialize in full-stack development with MERN stacks, the creation of 3D frontend products, and the development of our physically backed token systems. As a Physics major with an interest in web-based game development and trading, I combine my educational background with my personal interests to create innovative solutions. Known for my quick learning abilities and strong teamwork skills, I am eager to further expand my professional career. Currently, I am working on my own Web3 game-fi project that focuses on integrating real-time strategy and deck building into a board game.'

export const RESUME_SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/chuawangheng',
    value: 'linkedin.com/in/chuawangheng',
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

type TResumeWorkExperience = {
  title: string
  duration: string
  descriptions: string[]
  company: string
  companyLink?: string
  achievements?: string[]
  skills?: string[]
  technologies?: string[]
  space?: number
}[]

export const RESUME_WORK_EXPERIENCE: TResumeWorkExperience = [
  {
    title: 'Team Lead, Software Dev',
    duration: '2022 March - Present',
    descriptions: [
      'I worked in a team of five to develop a social commerce platform, Labelled.io, using React, NodeJS, AWS EC2, and MongoDB. My primary role encompassed both frontend and backend development, including the development of the NFC security key and the integration of Ecwid and Stripe.',
      "Developed the company's web based metaverse product as a collaboration with HashkeyDID.",
    ],
    company: 'The AceMeta Company',
    companyLink: 'https://labelled.io/',
    achievements: [
      'Blackscale launch - successfully launched our first physically backed token',
      'NFT Asia - ran a campaign to showcase our first NFT project - DreamDomain - to other Web3 natives and brands',
    ],
    skills: [],
    technologies: [
      'NodeJS',
      'Typescript',
      'ReactJS',
      'ThreeJS',
      'AWS',
      'MongoDB',
    ],
  },
  {
    title: 'Freelance Trader',
    duration: '2021 August - 2022 March',
    descriptions: [
      'Conducted research and development on an automatic trading algorithm primarily targeting forex trading, as well as development of trade management tools. The trading algorithm focused on adapting and reinventing technical analysis based on mathematical models.',
    ],
    company: 'Self-employed',
    companyLink: '',
    achievements: [],
    skills: [],
    technologies: ['NodeJS', 'MQL4'],
  },
  {
    title: 'Laboratory Technician',
    duration: '2020 September - 2022 March',
    descriptions: [
      'A BSL-3 clinical diagnostics facility primary focused on processing Covid-19 samples. As the lab technician, I am responsible for the samples processing and analysis as well as stock management. I am experienced with manual sample processing and is consistent with sample quality, managing to prevent and evade contaminations that would otherwise render the result unusable.',
    ],
    company: 'DSO National Laboratories',
    companyLink: 'https://www.dso.org.sg/',
    achievements: [],
    skills: [],
    technologies: [],
    // space: 50
  },
  {
    title: 'Freelance Photographer',
    duration: '2017 May - 2019 June',
    descriptions: [
      "As a freelancer, I focus on event and wedding photography as well as conducting some marketing. I am a great listener, always engaging and working closely with my clients to understand their requests and requirements for their photoshoots. During the shoots, I also focused on talking to and entertaining guests. I believe a great service is not in just in the quantity and quality of photos taken, but also the guests' experience as a whole.",
    ],
    company: 'Self-employed',
    companyLink: '',
    achievements: [],
    skills: [],
    technologies: ['Adobe Lightroom', 'Adobe Photoshop'],
  },
  {
    title: 'Associate Photographer',
    duration: '2017 May - 2019 June',
    descriptions: [
      'As an associate photographer, I helped the company engage clients, conduct shoots for weddings and corporate events as well as aided in several product photography. I am very experienced with photography on the go, capable of capturing high quantity of unique photographs with little to no edits in post. I have been noted and complimented by guests for my jovial and hardworking nature and have been well liked by my colleagues.',
    ],
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
  'Agile',
]

type TResumeEducation = {
  title: string
  school: string
  duration: string
  space?: number
}[]

export const RESUME_EDUCATION: TResumeEducation = [
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

export const RESUME_CERTIFICATES: TResumeEducation = [
  {
    title: 'NGINX Fundamentals: High Performance Servers from Scratch',
    school: 'Udemy',
    duration: 'Jul 2022',
  },
  {
    title: 'Three.js and Typescript',
    school: 'Udemy',
    duration: 'Dec 2020',
    // space: 67
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
