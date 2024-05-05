interface JobBodyProps {
    aboutUs: string;
}

export default function JobBody({ aboutUs }: JobBodyProps) {
    return (
        <div className="job-about-section">
            <div className="job-about-layout">
                <h2 className="job-about-heading">About Company</h2>
                <p className="job-about-p">{aboutUs.slice(0, 400)}...</p>
            </div>
            <a className="job-about-view-btn" href="/view-job">View Job</a>
        </div>
    );
}
