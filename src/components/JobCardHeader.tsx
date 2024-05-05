import Logo from '../assets/logo.png';

export default function JobCardHeader() {
    return (
        <div className='job-header'>
            <div className="job-header-layout">
                <img src={Logo} alt="company-logo" className='header-logo' />
                <div className='job-header-text'>
                    <h3 className="job-header-company">Weekday</h3>
                    <h2 className="job-header-title">Senior Frontend Developer</h2>
                    <p className="job-header-location">Bangalore</p>
                </div>
            </div>
            <p className='job-header-salary'>Estimated Salary: 10 - 15 LPA ✅</p>
        </div>
    )
}