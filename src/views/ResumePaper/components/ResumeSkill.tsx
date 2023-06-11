const ResumeSkillBar: React.FC<IBarProps> = (props: IBarProps) => {
  const { title, level } = props

  return (
    <div className="my-2 text-dark">
      <h6>{title}</h6>
      <div className="rounded-full bg-slate-300 h-1">
        <div
          className="rounded-full bg-slate-700 h-1"
          style={{ width: `${level * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

interface IBarProps {
  title: string
  level: number
}

const ResumeSkillBadge: React.FC<IBadgeProps> = (props: IBadgeProps) => {
  const { title } = props

  return (
    <div className="mr-1 my-1 bg-slate-300 text-dark px-1 rounded">
      <h6 className="font-bold" style={{ fontSize: '0.50rem' }}>
        {title}
      </h6>
    </div>
  )
}

interface IBadgeProps {
  title: string
}

export { ResumeSkillBar, ResumeSkillBadge }
