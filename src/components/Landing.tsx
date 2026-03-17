import { PropsWithChildren, useEffect, useRef } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const autoScrollRef = useRef<number | null>(null);
  const userInteractedRef = useRef(false);

  useEffect(() => {
    const stopAutoScroll = () => {
      userInteractedRef.current = true;
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    const onUserScroll = () => {
      stopAutoScroll();
    };

    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchstart", onUserScroll, { passive: true });

    const startAutoScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const target = Math.min(maxScroll, window.innerHeight * 0.9);
      const speed = 0.5; // pixels per frame (adjust for slower/faster)

      const step = () => {
        if (userInteractedRef.current) return;
        const next = Math.min(window.scrollY + speed, target);
        window.scrollTo({ top: next });
        if (next < target) {
          autoScrollRef.current = requestAnimationFrame(step);
        }
      };

      autoScrollRef.current = requestAnimationFrame(step);
    };

    const delay = window.innerWidth > 768 ? 1200 : 800;
    const timer = window.setTimeout(() => {
      if (!userInteractedRef.current) startAutoScroll();
    }, delay);

    return () => {
      window.clearTimeout(timer);
      stopAutoScroll();
      window.removeEventListener("wheel", onUserScroll);
      window.removeEventListener("touchstart", onUserScroll);
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
