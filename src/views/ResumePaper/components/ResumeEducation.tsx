const ResumeEducation: React.FC<IProps> = (props: IProps) => {
  const { title, school, duration, space } = props
  return (
    <div className="my-2">
      <h6 className="font-bold">{title}</h6>
      <h6>{school}</h6>
      <h6 className="text-gray-500">{duration}</h6>
      <div style={{ height: `${space}px` }}></div>
    </div>
  )
}

interface IProps {
  title: string
  school: string
  duration: string
  space?: number | null
}

export default ResumeEducation
