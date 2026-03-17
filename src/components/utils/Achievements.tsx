import { MdEmojiEvents, MdCode, MdVerified } from "react-icons/md";
import "../styles/Achievements.css";

const Achievements = () => {
  const achievementData = [
    {
      id: 1,
      title: "100+ Day LeetCode Streak",
      description: "Solved 150+ DSA problems with a consistent daily streak, sharpening algorithmic thinking and problem-solving speed.",
      date: "Oct' 25",
      icon: <MdCode />,
      tag: "Problem Solving"
    },
    {
      id: 2,
      title: "Hackathon Finalist",
      description: "Recognized as a finalist at the 'Code Off Duty' Web Hackathon for building an innovative, fast-prototype web solution under pressure.",
      date: "Sep' 25",
      icon: <MdEmojiEvents />,
      tag: "Competition"
    },
    {
      id: 3,
      title: "3-Star Coder | FreeCodeCamp",
      description: "Awarded for consistent coding contributions and mastering web development modules through community-driven learning.",
      date: "Dec' 23",
      icon: <MdVerified />,
      tag: "Web Development"
    }
  ];

  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Key <span>Achievements</span>
        </h2>
        
        <div className="achievements-grid">
          {achievementData.map((item) => (
            <div className="achievement-card" key={item.id}>
              <div className="achievement-icon-box">
                {item.icon}
                <span className="achievement-date">{item.date}</span>
              </div>
              <div className="achievement-content">
                <span className="achievement-tag">{item.tag}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;