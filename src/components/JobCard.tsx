import './JobCard.css'
import { CompanyDetails, JobDetails } from '../interfaces'
import JobBody from './JobCardBody'
import JobCardHeader from './JobCardHeader'
import JobCardHeaderChip from './JobCardHeaderChip'
import JobCardFooter from './JobCardFooter'

export default function JobCard({ jobData }: { jobData: JobDetails }) {
  const companyDetails: CompanyDetails = {
    name: jobData.companyName,
    logo: jobData.logoUrl,
    maxSalary: jobData.maxJdSalary,
    minSalary: jobData.minJdSalary,
    currency: jobData.salaryCurrencyCode,
    location: jobData.location,
    role: jobData.jobRole,
  }


  return (
    <div className="job-card">
      <JobCardHeaderChip />
      <JobCardHeader data={companyDetails} />
      <JobBody aboutUs={jobData.jobDetailsFromCompany} />
      <JobCardFooter minExperience={jobData.minExp} />
    </div>
  )
}
