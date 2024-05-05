import { Button } from '@mui/material';
import './JobCard.css';

export default function JobCardFooter() {
    const buttonStyle: React.CSSProperties = {
        borderRadius: '10px',
        textTransform: 'none',
        width: '100%',
    };

    return (
        <div className="job-card-footer">
            <h3 className='job-header-company'>Min Experience</h3>
            <h2 className='job-header-exp'>2 Years</h2>
            <div className='button-section'>
                <Button style={{ ...buttonStyle, marginBottom: '10px', backgroundColor: 'rgb(85, 239, 196)', color: 'black' }} className="apply-button">
                    ⚡ Easy Apply
                </Button>
                <Button style={{ ...buttonStyle, backgroundColor: 'rgb(73, 67, 218)', color: 'white' }} className="apply-button">
                    Unlock Referral Asks
                </Button>
            </div>
        </div>
    );
}
