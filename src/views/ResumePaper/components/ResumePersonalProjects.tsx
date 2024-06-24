const ResumePersonalProjects: React.FC<IProps> = (props: IProps) => {
  const { title, descriptions, technologies, start, space } = props

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
          <h4 className="font-bold">{title}</h4>
        </div>
        {descriptions.map((description) => (
          <h6 className="my-2 text-justify">{description}</h6>
        ))}
        {technologies && technologies[0] && (
          <div className="my-2">
            {/* <h6 className="my-1 font-bold text-dark">Technologies used:</h6> */}
            <div className="flex flex-wrap space-x-2">
              {technologies.map((tech) => (
                <div className="my-1 bg-slate-700 text-light py-1 px-3 rounded-full">
                  <h6>{tech}</h6>
                </div>
              ))}
            </div>
          </div>
        )}
        {space && <div style={{ height: `${space}px` }}></div>}
      </div>
    </div>
  )
}

interface IProps {
  title: string
  descriptions: string[]
  technologies?: string[]
  start?: boolean
  space?: number | null
}

ResumePersonalProjects.defaultProps = {
  technologies: [],
  start: false,
  space: null,
}

export const ResumeExperienceSpace: React.FC<{ space: number }> = (
  props: {
    space: number
  } = {
    space: 100,
  },
) => {
  const { space } = props
  return (
    <div className="flex">
      <div className="flex flex-col mr-2 items-center">
        <div className="border-l-2 border-slate-700 h-full"></div>
      </div>
      <div style={{ height: `${space}px` }}></div>
    </div>
  )
}

export default ResumePersonalProjects
