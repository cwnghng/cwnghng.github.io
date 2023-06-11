import { RESUME_CONTACT_INFOS, RESUME_SOCIAL_LINKS } from '../constants'
import ResumeSocialLink from './ResumeSocialLink'

const ResumeHeader: React.FC = () => {
  return (
    <div className="flex justify-between bg-slate-700 text-light p-8">
      <div>
        <h2 className="m-1">CHUA WANG HENG</h2>
        <h4 className="m-1">Software Developer</h4>
        <div>
          {RESUME_CONTACT_INFOS.map((value) => (
            <ResumeSocialLink value={value.value} icon={value.icon} />
          ))}
        </div>
      </div>
      <div>
        {RESUME_SOCIAL_LINKS.map((value) => (
          <ResumeSocialLink
            href={value.href}
            value={value.value}
            icon={value.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default ResumeHeader
