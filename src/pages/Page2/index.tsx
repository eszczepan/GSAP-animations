import React, { useRef, useEffect } from "react";
import { TimelineLite, Power2 } from "gsap";
import photo2 from "../../assets/page2/photo-2.jpg";
import "./style.css";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const Page2 = () => {
  const container = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const imageReveal = CSSRulePlugin.getRule(".image-container2:after");

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container.current!, 0, {
      css: { visibility: "visible" },
    })
      .to(imageReveal, 1.4, { width: " 0%", ease: Power2.easeInOut })
      .from(image.current!, 1.4, {
        scale: 1.6,
        ease: Power2.easeOut,
        delay: -1.6,
      });
  }, []);

  return (
    <div className="container2">
      <div className="image-container2" ref={container}>
        <img src={photo2} alt="women" className="image2" ref={image} />
      </div>
    </div>
  );
};

export default Page2;
