import { PropsWithChildren, useEffect } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {

  useEffect(() => {
    let autoScrollActive = true;
    const autoScrollRef = { current: 0 };

    const preventScroll = (event: Event) => {
      if (!autoScrollActive) return;
      event.preventDefault();
    };

    const startAutoScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const target = Math.min(maxScroll, window.innerHeight * 1.2);
      const speed = 0.6; // pixels per frame (adjust for slower/faster)

      const step = () => {
        if (!autoScrollActive) return;
        const next = Math.min(window.scrollY + speed, target);
        window.scrollTo({ top: next });
        if (next < target) {
          autoScrollRef.current = requestAnimationFrame(step);
        } else {
          autoScrollActive = false;
        }
      };

      autoScrollRef.current = requestAnimationFrame(step);
    };

    const delay = window.innerWidth > 768 ? 1200 : 800;
    const timer = window.setTimeout(startAutoScroll, delay);

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.clearTimeout(timer);
      autoScrollActive = false;
      cancelAnimationFrame(autoScrollRef.current);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NIKHIL
              <br />
              <span>KUMAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Creative</h3>
            <div className="landing-info-row">
              <span className="landing-h2-1">FULL STACK</span>
              <span className="landing-h2-2">Developer</span>
            </div>
            <div className="landing-info-row">
              <span className="landing-h2-info">ANDROID</span>
              <span className="landing-h2-info-1">Developer</span>
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
