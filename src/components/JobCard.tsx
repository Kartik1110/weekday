import JobBody from './JobCardBody'
import './JobCard.css'
import JobCardHeader from './JobCardHeader'
import JobCardHeaderChip from './JobCardHeaderChip'
import JobCardFooter from './JobCardFooter'

export default function JobCard() {
  return (
    <div className="job-card">
      <JobCardHeaderChip />
      <JobCardHeader />
      <JobBody aboutUs="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum sed architecto illo, laborum iusto at ea consequatur perferendis repudiandae voluptate molestias assumenda placeat laudantium facere magni temporibus consectetur fugiat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex illum sed architecto illo, laborum iusto at ea consequatur perferendis repudiandae voluptate molestias assumenda placeat laudantium facere magni temporibus consectetur fugiat." />
      <JobCardFooter />
    </div>
  )
}
