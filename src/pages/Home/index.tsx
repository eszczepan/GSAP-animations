import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import logo from "./logo.svg";
import "./style.css";

function App() {
  const logoItem = useRef<HTMLImageElement>(null);
  const textItem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    TweenMax.to(logoItem.current!, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(textItem.current!, 0.8, {
      delay: 0.4,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} ref={logoItem} className="Home-logo" alt="logo" />
        <p className="Home-text" ref={textItem}>
          Hello everyone, choose you animations on the top.
        </p>
      </header>
    </div>
  );
}

export default App;
