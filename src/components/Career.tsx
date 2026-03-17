import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Training <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Training Section */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA Trainee</h4>
                <h5>Lovely Professional University (LPU)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Underwent intensive training in Data Structures and Algorithms. 
              Mastered fundamental structures like arrays, linked lists, and stacks, 
              while optimizing code efficiency in Java and Python.
            </p>
          </div>

          {/* Updated Certification Section 1: Generative AI & Cloud Computing */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & AI Specialist</h4>
                <h5>NPTEL & Infosys</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Successfully completed the <strong>Cloud Computing Fundamentals</strong> certification 
              from <strong>NPTEL (Apr '24)</strong>. Additionally earned a professional certification 
              in Generative AI through Infosys (Oct '24).
            </p>
          </div>

          {/* Certification Section 2: IT & Networking */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT & Theory Professional</h4>
                <h5>IBM, Google & Infosys</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Earned certifications in <strong>Hardware and Operating Systems (IBM)</strong> and 
              <strong>Computer Networking (Google)</strong>. Further expanded theoretical expertise 
              in Computational Theory and Finite Automata through Infosys.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;