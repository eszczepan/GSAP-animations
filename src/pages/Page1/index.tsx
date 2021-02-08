import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";
import "./style.css";

const Page1 = () => {
  const [expand, setExpand] = useState(false);

  const container = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const circleRed = useRef<HTMLDivElement>(null);
  const circleBlue = useRef<HTMLDivElement>(null);

  useEffect(() => {
    TweenMax.to(container.current, 0, { css: { visibility: "visible" } });
    TweenMax.from(circle.current, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
    });
    TweenMax.from(circleRed.current, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.2,
    });
    TweenMax.from(circleBlue.current, 0.8, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  }, []);

  const handleExpand = () => {
    TweenMax.to(circleRed.current, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setExpand(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed.current, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setExpand(false);
  };

  return (
    <div className="container" ref={container}>
      <div className="circle-container">
        <div className="circle" ref={circle}></div>
        <div
          className="circle red"
          ref={circleRed}
          onClick={expand !== true ? handleExpand : handleShrink}
        ></div>
        <div className="circle blue" ref={circleBlue}></div>
      </div>
    </div>
  );
};

export default Page1;
