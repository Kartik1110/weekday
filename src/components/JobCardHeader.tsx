import { CompanyDetails } from '../interfaces';
import { capitalizeFirstLetter } from '../utils';

/**
 * Renders the header section of a job card.
 */
export default function JobCardHeader({ data }: { data: CompanyDetails }) {
    const { name, logo, role, location, currency, maxSalary, minSalary } = data;
    return (
        <div className='job-header'>
            <div className="job-header-layout">
                <img src={logo} alt="company-logo" className='header-logo' />
                <div className='job-header-text'>
                    <h3 className="job-header-company">{name}</h3>
                    <h2 className="job-header-title">{capitalizeFirstLetter(role)}</h2>
                    <p className="job-header-location">{capitalizeFirstLetter(location)}</p>
                </div>
            </div>
            <p className='job-header-salary'>{`Estimated Salary: ${minSalary !== null ? minSalary : ''
                } ${minSalary !== null && maxSalary !== null ? '-' : ''} ${maxSalary !== null ? maxSalary : ''
                } ${currency} ✅`}</p>
        </div>
    )
}