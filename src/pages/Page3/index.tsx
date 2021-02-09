import React, { useRef, useEffect, useState } from "react";
import { TweenLite, Power3 } from "gsap";
import leftArrow from "../../assets/page3/arrow-left.svg";
import rightArrow from "../../assets/page3/arrow-right.svg";
import photo1 from "../../assets/page3/image31.jpg";
import photo2 from "../../assets/page3/image32.jpg";
import photo3 from "../../assets/page3/image33.jpg";
import styles from "./style.module.scss";

const testimonials = [
  {
    name: "Khashayar Kouchpeydeh",
    title: "Creative Director, VISA",
    image: photo1,
    quote:
      "It's all good. I was amazed at the quality of the design. We've seen amazing results already.",
  },
  {
    name: "Christina Wox",
    title: "Tech Lead, Google",
    image: photo2,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Isaiah Zy",
    title: "Brand Coordinator, Facebook",
    image: photo3,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

interface isActiveValues {
  isActive1?: boolean;
  isActive2?: boolean;
  isActive3?: boolean;
}

const Page3 = () => {
  const [state, setState] = useState<isActiveValues>({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  const imageWidth: number = 340;

  const imageList = useRef<HTMLUListElement>(null);
  const testimonialList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    TweenLite.to(testimonialList.current!.children[0], 0, {
      opacity: 1,
    });
  }, []);

  const slideLeft = (
    index: number,
    duration: number = 1,
    multiplier: number = 1
  ): void => {
    TweenLite.to(imageList.current!.children[index], duration, {
      x: -imageWidth * multiplier,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (
    index: number,
    duration: number = 1,
    multiplier: number = 1
  ): void => {
    TweenLite.to(imageList.current!.children[index], duration, {
      x: imageWidth * multiplier,
      ease: Power3.easeOut,
    });
  };

  const scale = (index: number, duration: number = 1): void => {
    TweenLite.from(imageList.current!.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  const fadeOut = (index: number, duration: number = 1) => {
    TweenLite.to(testimonialList.current!.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index: number, duration: number = 1) => {
    TweenLite.to(testimonialList.current!.children[index], duration, {
      opacity: 1,
      delay: duration,
    });
  };

  const nextSlide = () => {
    const image = imageList.current!.children;
    if (image[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (image[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (image[2].classList.contains("active")) {
      setState({ isActive3: false, isActive1: true });
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    const image = imageList.current!.children;
    if (image[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      fadeOut(0);
      fadeIn(2);
    } else if (image[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);

      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (image[2].classList.contains("active")) {
      setState({ isActive3: false, isActive2: true });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className={styles.testimonialSection}>
      <div className={styles.testimonialContainer}>
        <div className={`${styles.arrows} ${styles.left}`} onClick={prevSlide}>
          <span>
            <img src={leftArrow} alt="left-arrow" />
          </span>
        </div>

        <div className={styles.inner}>
          <div className={styles.tImage}>
            <ul ref={imageList}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[1].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[2].name} />
              </li>
            </ul>
          </div>
          <div className={styles.tContent}>
            <ul ref={testimonialList}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className={styles.contentInner}>
                  <p className={styles.quote}>{testimonials[0].quote}</p>
                  <h3 className={styles.name}>{testimonials[0].name}</h3>
                  <h4 className={styles.title}>{testimonials[0].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className={styles.contentInner}>
                  <p className={styles.quote}>{testimonials[1].quote}</p>
                  <h3 className={styles.name}>{testimonials[1].name}</h3>
                  <h4 className={styles.title}>{testimonials[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className={styles.contentInner}>
                  <p className={styles.quote}>{testimonials[2].quote}</p>
                  <h3 className={styles.name}>{testimonials[2].name}</h3>
                  <h4 className={styles.title}>{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.arrows} ${styles.right}`} onClick={nextSlide}>
          <span>
            <img src={rightArrow} alt="right-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page3;
