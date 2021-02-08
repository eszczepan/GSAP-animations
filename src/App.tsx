import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const logoItem = useRef<HTMLImageElement>(null);
  const textItem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    TweenMax.to(logoItem.current, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    TweenMax.to(textItem.current, 0.8, {
      delay: 0.4,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} ref={logoItem} className="App-logo" alt="logo" />
        <p className="App-text" ref={textItem}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
