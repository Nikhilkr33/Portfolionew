import { MdDownload, MdSchool, MdStars, MdWork } from "react-icons/md";
import "../styles/Resume.css";

const Resume = () => {
  // Replace this link with your actual Google Drive or hosted PDF link
  const resumeLink = "https://github.com/Nikhilkr33/Portfolio/raw/main/Nikhil_Kumar_CV.pdf";

  return (
    <div className="resume-section section-container" id="resume">
      <div className="resume-container">
        {/* section title outside card */}
        <h2 className="resume-title">My Resume</h2>
        <div className="resume-content">
          <div className="resume-card single-card">

            {/* Education Summary */}
            <div className="resume-icon"><MdSchool /></div>
            <h3>Education</h3>
            <h4>B.Tech in Computer Science & Engineering</h4>
            <p className="institution">Lovely Professional University</p>
            <p className="duration">Aug' 23 - Present</p>
            <div className="stat-badge">CGPA: 8.23</div>

            {/* Key Stats Summary */}
            <div className="resume-icon"><MdStars /></div>
            <h3>Coding Profile</h3>
            <ul>
              <li><strong>LeetCode:</strong> 150+ Problems Solved</li>
              <li><strong>Streak:</strong> 100+ Days Continuous</li>
              <li><strong>FreeCodeCamp:</strong> 3-Star Rated</li>
            </ul>

            {/* Professional Goal Summary */}
            <div className="resume-icon"><MdWork /></div>
            <h3>Core Focus</h3>
            <p>
              Full-Stack Developer specialized in the <strong>MERN Stack</strong> and 
              <strong> Python/Flask</strong>. Experienced in building AI-integrated 
              web tools and scalable responsive interfaces.
            </p>

            {/* download button at bottom of card */}
            <a 
              href={resumeLink} 
              download="Nikhil_Kumar_CV.pdf" 
              className="download-btn card-btn"
              target="_blank" 
              rel="noreferrer"
            >
              Download CV <MdDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;