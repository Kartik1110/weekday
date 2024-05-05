import './JobCard.css'
import JobCardHeader from './JobCardHeader'
import JobCardHeaderChip from './JobCardHeaderChip'

export default function JobCard () {
  return (
    <div className="job-card">
        <JobCardHeaderChip />
        <JobCardHeader />
    </div>
  )
}
