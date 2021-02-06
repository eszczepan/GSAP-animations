import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let logoItem: React.MutableRefObject<HTMLImageElement | null> = useRef(null);

  useEffect(() => {
    console.log(logoItem);
    TweenMax.to(logoItem, 0.8, { opacity: 1, y: -20, ease: Power3.easeOut });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          // ref={(el) => {
          //   logoItem = el;
          // }}
          className="App-logo"
          alt="logo"
        />
        <p>
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
