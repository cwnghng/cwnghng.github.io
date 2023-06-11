import ResumeAbstract from './components/ResumeAbstract'
import ResumeHeader from './components/ResumeHeader'
import ResumeMain from './components/ResumeMain'
import './style.css'

const ResumePaper: React.FC = () => {
  return (
    <div className="a4-page bg-light">
      <ResumeHeader />
      <ResumeAbstract />
      <ResumeMain />
    </div>
  )
}

export default ResumePaper
