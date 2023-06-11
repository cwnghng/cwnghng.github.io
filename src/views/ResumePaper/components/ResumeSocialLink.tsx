import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

const ResumeSocialLink: React.FC<IProps> = (props: IProps) => {
  const { href, value, icon } = props

  return (
    <div className="flex items-center">
      {icon && <FontAwesomeIcon icon={icon} className="m-1" />}
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <h6 className="m-1">{value}</h6>
        </a>
      ) : (
        <h6 className="m-1">{value}</h6>
      )}
    </div>
  )
}

interface IProps {
  href?: string
  value?: string
  icon?: IconDefinition
}

ResumeSocialLink.defaultProps = {
  href: '#',
  value: 'No value added',
}

export default ResumeSocialLink
