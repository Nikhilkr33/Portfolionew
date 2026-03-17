import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { smootherState } from "./utils/smoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // only initialize smoother on non-touch devices to avoid performance hit
    if (!ScrollTrigger.isTouch) {
      // detect low‑power / slow devices so we can reduce animation load
      const nav = navigator as Navigator & { deviceMemory?: number; connection?: { effectiveType: string } };
      const isLowPower =
        (nav.deviceMemory && nav.deviceMemory < 4) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
        /(2g|slow-2g)/.test(nav.connection?.effectiveType || "") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const smootherOptions: ScrollSmoother.Vars = {
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: isLowPower ? 0.1 : 0.6,
        speed: isLowPower ? 0.1 : 0.6,
        effects: !isLowPower,
        autoResize: true,
        ignoreMobileResize: true,
      };

      smootherState.current = ScrollSmoother.create(smootherOptions);

      // move to top without animating
      smootherState.current?.scrollTop(0);

      // ---------- automatic scrolling on load ----------
      const AUTO_SCROLL = true; // flip this flag to disable
      // pixels per frame; adjust for readable auto-scrolling speed.
      // 0.25 is a comfortable pace (~15px/sec @60fps) for reading content while auto-scrolling.
      const AUTO_SCROLL_SPEED = 0.25;
      if (AUTO_SCROLL) {
        let autoId: number;
        const maxScroll = () => document.body.scrollHeight - window.innerHeight;
        const step = () => {
          const scroll = smootherState.current;
          if (!scroll) return;
          const current = scroll.scrollTop();
          const next = Math.min(current + AUTO_SCROLL_SPEED, maxScroll());
          // jump to the next position without additional tweening
          scroll.scrollTop(next);
          if (next < maxScroll()) {
            autoId = requestAnimationFrame(step);
          }
        };
        step();
        // cleanup on unmount
        return () => cancelAnimationFrame(autoId);
      }
    } else {
      // ensure native scrolling is available on touch devices
      document.body.style.overflowY = "auto";
    }

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        const scroll = smootherState.current;
        if (window.innerWidth > 1024 && scroll) {
          e.preventDefault();
          const targetElem = e.currentTarget as HTMLAnchorElement;
          const section = targetElem.getAttribute("data-href");
          if (section) scroll.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title">
          Logo
        </a>
        <a
          href="mailto:example@mail.com"
          className="navbar-connect"
        >
          example@mail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#achievements" href="#achievements">
              <HoverLinks text="ACHIEVEMENTS" />
            </a>
          </li>
          <li>
            <a data-href="#resume" href="#resume">
              <HoverLinks text="RESUME" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
