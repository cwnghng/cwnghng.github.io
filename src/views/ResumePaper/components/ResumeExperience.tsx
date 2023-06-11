const ResumeExperience: React.FC<IProps> = (props: IProps) => {
  const {
    title,
    duration,
    company,
    companyLink,
    description,
    achievements,
    skills,
    technologies,
    start,
  } = props

  return (
    <div className="flex">
      <div className="flex flex-col mr-2 items-center">
        {start ? (
          <div className="h-4"></div>
        ) : (
          <div className="border-l-2 border-slate-700 h-4"></div>
        )}
        <div className="border-2 rounded-full border-slate-700 h-4 w-3"></div>
        <div className="border-l-2 border-slate-700 h-full"></div>
      </div>
      <div className="my-2">
        <div className="flex justify-between items-center">
          <h4 className="mx-1">{title}</h4>
          <a href={companyLink} target="_blank" rel="noreferrer">
            <h5>{company}</h5>
          </a>
        </div>
        <h6 className="mx-1">{duration}</h6>
        <h6 className="m-1 my-4 text-justify">{description}</h6>
        {achievements && achievements[0] && (
          <div className="my-2">
            <h6 className="m-1 font-bold text-dark">Achievements:</h6>
            <ul className="m-1">
              {achievements.map((achivement) => (
                <li className="flex items-center ml-4">
                  <div className="rounded-full bg-slate-700 h-1 w-1 m-1"></div>
                  <h6>{achivement}</h6>
                </li>
              ))}
            </ul>
          </div>
        )}
        {skills && skills[0] && (
          <div className="my-2">
            <h6 className="m-1 font-bold text-dark">Skills:</h6>
            <ul className="m-1">
              {skills.map((skill) => (
                <li className="flex items-center ml-4">
                  <div className="rounded-full bg-slate-700 h-1 w-1 m-1"></div>
                  <h6>{skill}</h6>
                </li>
              ))}
            </ul>
          </div>
        )}
        {technologies && technologies[0] && (
          <div className="my-2">
            <h6 className="m-1 font-bold text-dark">Technologies used:</h6>
            <div className="flex">
              {technologies.map((tech) => (
                <div className="m-1 bg-slate-700 text-light py-1 px-3 rounded-full">
                  <h6>{tech}</h6>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

interface IProps {
  title: string
  duration: string
  company: string
  companyLink?: string
  description: string
  achievements?: string[]
  skills?: string[]
  technologies?: string[]
  start?: boolean
}

ResumeExperience.defaultProps = {
  companyLink: '#',
  achievements: [],
  skills: [],
  technologies: [],
  start: false,
}

export const ResumeExperienceSpace: React.FC<{ space: number }> = (
  props: {
    space: number
  } = {
    space: 100,
  },
) => {
  return (
    <div className="flex">
      <div className="flex flex-col mr-2 items-center">
        <div className="border-l-2 border-slate-700 h-full"></div>
      </div>
    </div>
  )
}

export default ResumeExperience
