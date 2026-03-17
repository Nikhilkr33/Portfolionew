import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              {/* This will open the user's default email app */}
              <a href="mailto:nikhilmuhal0037@gmail.com">
                nikhilmuhal0037@gmail.com 
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              {/* This will prompt to dial the number on mobile devices */}
              <a href="tel:+919256570037">
                +91 92565 70037 
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {/* Added your GitHub link from CV */}
            <a
              href="https://github.com/Nikhilkr33" 
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <FaGithub className="social-icon" /> Github <MdArrowOutward /> 
            </a>
            {/* Added your LinkedIn link from CV */}
            <a
              href="https://www.linkedin.com/in/33nikhil/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <FaLinkedinIn className="social-icon" /> Linkedin <MdArrowOutward /> 
            </a>
            {/* Added your Instagram link */}
            <a
              href="https://www.instagram.com/nikhil.muhal/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <FaInstagram className="social-icon" /> Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>NIKHIL KUMAR [cite: 1]</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;