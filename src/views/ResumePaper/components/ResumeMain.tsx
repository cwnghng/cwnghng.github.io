import Divider from '../../../components/Divider'
import {
  RESUME_CERTIFICATES,
  RESUME_EDUCATION,
  RESUME_INTERESTS,
  RESUME_LANGUAGES,
  RESUME_SKILLS_BACKEND,
  RESUME_SKILLS_FRONTEND,
  RESUME_SKILLS_OTHERS,
  RESUME_WORK_EXPERIENCE,
} from '../constants'
import ResumeEducation from './ResumeEducation'
import ResumeExperience from './ResumeExperience'
import { ResumeSkillBar, ResumeSkillBadge } from './ResumeSkill'

const ResumeMain: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-8 py-4">
      <div className="col-span-8 m-1">
        <div className="text-dark">
          <h4>WORK EXPERIENCE</h4>
          <Divider />
        </div>
        {RESUME_WORK_EXPERIENCE.map((value, index) => (
          <ResumeExperience
            title={value.title}
            duration={value.duration}
            description={value.description}
            company={value.company}
            companyLink={value.companyLink}
            achievements={value.achievements}
            skills={value.skills}
            technologies={value.technologies}
            start={index === 0}
          />
        ))}
      </div>
      <div className="col-span-4 m-1">
        <div className="text-dark">
          <h4>SKILLS</h4>
          <Divider />
          <div className="mt-4 mb-2">
            <h6 className="font-bold">Fullstack</h6>
          </div>
          {RESUME_SKILLS_FRONTEND.map((value) => (
            <ResumeSkillBar title={value.title} level={value.level} />
          ))}
          <div className="mt-4 mb-2">
            <h6 className="font-bold">Backend</h6>
          </div>
          {RESUME_SKILLS_BACKEND.map((value) => (
            <ResumeSkillBar title={value.title} level={value.level} />
          ))}
          <div className="mt-4 mb-2">
            <h6 className="font-bold">Others</h6>
          </div>
          <div className="flex flex-wrap">
            {RESUME_SKILLS_OTHERS.map((value) => (
              <ResumeSkillBadge title={value} />
            ))}
          </div>
        </div>
        <div className="text-dark my-4">
          <h4>EDUCATION</h4>
          <Divider />
          {RESUME_EDUCATION.map((value) => (
            <ResumeEducation
              title={value.title}
              school={value.school}
              duration={value.duration}
            />
          ))}
        </div>
        <div className="text-dark my-4">
          <h4>CERTIFICATES</h4>
          <Divider />
          {RESUME_CERTIFICATES.map((value) => (
            <ResumeEducation
              title={value.title}
              school={value.school}
              duration={value.duration}
            />
          ))}
        </div>
        <div className="text-dark my-4">
          <h4>LANGUAGE</h4>
          <Divider />
          {RESUME_LANGUAGES.map((value) => (
            <div className="my-1">
              <h6 className="text-dark">
                {value.lang}{' '}
                <span className="text-gray-500">({value.level})</span>
              </h6>
            </div>
          ))}
        </div>
        <div className="text-dark my-4">
          <h4>INTERESTS</h4>
          <Divider />
          {RESUME_INTERESTS.map((value) => (
            <div className="my-1">
              <h6 className="text-dark">{value}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ResumeMain
