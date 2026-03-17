import { lazy, PropsWithChildren, Suspense, useEffect, useState, useRef } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
/* Cursor removed per user request */
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Achievements from "./utils/Achievements";
import Resume from "./utils/Resume";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [loadTechStack, setLoadTechStack] = useState(false);
  const techRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  // Auto-scroll throughout the entire page (minimum speed, no manual scroll)
  useEffect(() => {
    let autoScrollActive = true;
    const autoScrollRef = { current: 0 };

    const preventScroll = (event: Event) => {
      if (!autoScrollActive) return;
      event.preventDefault();
    };

    const startAutoScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const speed = 0.5; // pixels per frame

      const step = () => {
        if (!autoScrollActive) return;
        const next = Math.min(window.scrollY + speed, maxScroll);
        window.scrollTo({ top: next });
        if (next < maxScroll) {
          autoScrollRef.current = requestAnimationFrame(step);
        } else {
          autoScrollActive = false;
        }
      };

      autoScrollRef.current = requestAnimationFrame(step);
    };

    const delay = 1200;
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

  useEffect(() => {
    if (!isDesktopView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadTechStack(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" }
    );

    if (techRef.current) {
      observer.observe(techRef.current);
    }

    return () => observer.disconnect();
  }, [isDesktopView]);

  return (
    <div className="container-main">
      {/* Cursor component removed */}
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            {/* always render children inside landing so the character/model only appears on the home section */}
            <Landing>{children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Achievements />
            <Work />
            <Resume />
            <div ref={techRef} />
            {isDesktopView && loadTechStack && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
