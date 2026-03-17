import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  const projects = [
    {
      id: "01",
      name: "Plan My Shadi",
      category: "Full-Stack Web Development",
      description:
        "A fully responsive wedding planning website with an intuitive interface[cite: 8, 10].",
      tools: "React JS, Node JS, Express JS, Mongo DB, Tailwind CSS [cite: 13]",
      features: "Vendor listings, budget planning, and event scheduling [cite: 11]",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rhfYZi6a5GudXmnjq0McqAHaE8?pid=Api&P=0&h=180",
      link: "https://github.com/Nikhilkr33/Plan-My-Shadi",
    },
    {
      id: "02",
      name: "AI-Meditation",
      category: "AI & Web Application",
      description:
        "AI-based medication reminder web app with real-time text-to-speech notifications[cite: 14, 16, 17].",
      tools: "Python, Flask, JavaScript, Web Speech API [cite: 16, 19]",
      features:
        "Voice alerts, dynamic reminder handling, and responsive UI [cite: 16, 17, 18]",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.WG5M6kZA42Yfh5wCPvelUwHaHa?pid=Api&P=0&h=180",
      link: "https://github.com/Nikhilkr33/AI-Meditation",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <p className="work-description">{project.description}</p>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>
                  <em>Features: {project.features}</em>
                </p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
