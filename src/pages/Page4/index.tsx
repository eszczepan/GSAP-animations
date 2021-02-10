import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import styles from "./style.module.scss";
import arrowRight from "../../assets/page4/arrow-right.svg";
import imgGirl from "../../assets/page4/girl.webp";
import imgBoy from "../../assets/page4/boy.webp";

const Page4 = () => {
  const app = useRef<HTMLDivElement>(null);
  const images = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  const tl = new TimelineLite({ delay: 0.5 });

  useEffect(() => {
    const girlImage = images.current!.firstElementChild;
    const boyImage = images.current!.lastElementChild;
    const headlineFirst = content.current!.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond?.nextSibling;
    const contentP = content.current!.children[1];
    const contentBtn = content.current!.children[2];

    // Initial appearance
    TweenMax.to(app.current!, 0, { css: { visibility: "visible" } });

    // Images animation
    tl.from(girlImage!, 1.2, { y: 1280, ease: Power3.easeOut }, "Start")
      .from(
        girlImage!.firstElementChild!,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      )
      .from(boyImage!, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
      .from(
        boyImage!.firstElementChild!,
        2,
        { scale: 1.6, ease: Power3.easeOut },
        0.2
      );

    // Content animation
    tl.staggerFrom(
      [
        headlineFirst!.childNodes,
        headlineSecond!.childNodes,
        headlineThird!.childNodes,
      ],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      "Start"
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentBtn, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <div className={styles.hero} ref={app}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroContentInner} ref={content}>
              <h1>
                <div className={styles.heroContentLine}>
                  <div className={styles.heroContentLineInner}>
                    Relieving the burden
                  </div>
                </div>
                <div className={styles.heroContentLine}>
                  <div className={styles.heroContentLineInner}>
                    of diesease caused
                  </div>
                </div>
                <div className={styles.heroContentLine}>
                  <div className={styles.heroContentLineInner}>
                    by behaviour
                  </div>
                </div>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                dolorem unde veritatis id eos pariatur labore architecto nobis,
                eveniet nihil officia necessitatibus blanditiis, excepturi iusto
                nulla commodi at. Minima, facilis.
              </p>
              <div className={styles.btnRow}>
                <button className={styles.exploreButton}>
                  explore
                  <div className={styles.arrowIcon}>
                    <img src={arrowRight} alt="arrow-right" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.heroImages}>
            <div className={styles.heroImages}>
              <div className={styles.heroImagesInner} ref={images}>
                <div className={`${styles.heroImage} ${styles.girl}`}>
                  <img src={imgGirl} alt="girl" />
                </div>
                <div className={`${styles.heroImage} ${styles.boy}`}>
                  <img src={imgBoy} alt="girl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
