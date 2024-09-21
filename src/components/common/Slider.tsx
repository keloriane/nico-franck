import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Image1 from "@/../public/images/karolina.png";
import Image2 from "@/../public/images/raspberry.png";
import Image3 from "@/../public/images/fruits.png";
import Image4 from "@/../public/images/eggs.png";
import Image5 from "@/../public/images/raspberry.png";
import Image6 from "@/../public/images/fruits.png";

gsap.registerPlugin(Draggable);

const ParallaxSlider = () => {
  const imagesArray = [Image1, Image2, Image3, Image4, Image5, Image6];
  const slidesRef = useRef<HTMLDivElement>(null);
  const currentXRef = useRef(0);
  const parallaxRef = useRef<any[]>([]);
  const snapRef = useRef<Function>(null!);
  const n = imagesArray.length;

  // Clone the array for infinite scrolling effect
  const infiniteArray = [...imagesArray, ...imagesArray, ...imagesArray];

  const updateParallax = () => {
    const slides = slidesRef.current;
    if (!slides) return;

    const x = (gsap.getProperty(slides, "x") as number) + window.innerWidth / 2;
    const normalize = gsap.utils.mapRange(window.innerWidth, -400, 0, 1);
    const clamp = gsap.utils.clamp(0, 1);

    parallaxRef.current.forEach((animation, i) => {
      animation.progress(clamp(normalize(x + i * 450)));
    });
  };

  const handleInfiniteLoop = (dragInstance: any) => {
    const slideContainer = slidesRef.current;
    if (!slideContainer) return;

    const totalWidth = n * 450;
    const x = dragInstance.x % totalWidth;

    gsap.set(slideContainer, {
      x: x > 0 ? -totalWidth + x : x,
    });
    currentXRef.current = gsap.getProperty(slideContainer, "x") as number;
  };

  useEffect(() => {
    const slideContainer = slidesRef.current;
    if (!slideContainer) return;

    const parallax: any[] = [];
    const snap = gsap.utils.pipe(
      gsap.utils.snap(450),
      gsap.utils.clamp(n * -450, 0)
    );
    snapRef.current = snap;

    gsap.set(slideContainer, { width: infiniteArray.length * 450 });

    infiniteArray.forEach((image, i) => {
      const box = document.createElement("div");
      const img = new Image();
      const link = document.createElement("a");

      gsap.set(box, {
        width: 400,
        height: 600,
        overflow: "hidden",
        position: "absolute",
        top: 50,
        left: i * 450,
        background: "#333",
      });

      gsap.set(img, {
        position: "absolute",
        left: -50,
        scale: 1.4,
        attr: { src: image.src },
      });

      parallax[i] = gsap.to(img, { x: 300, ease: "none", paused: true });

      box.appendChild(img);
      box.appendChild(link);
      slideContainer.appendChild(box);
    });

    parallaxRef.current = parallax;

    const rafUpdateParallax = () => {
      requestAnimationFrame(updateParallax);
    };

    Draggable.create(slideContainer, {
      type: "x",
      bounds: { left: window.innerWidth / 2, width: 1 },
      zIndexBoost: false,
      onDrag: rafUpdateParallax,
      inertia: true,
      throwResistance: 800,
      onThrowUpdate: rafUpdateParallax,
      onDragEnd: function () {
        handleInfiniteLoop(this);
        handleSwipeToSlide(this);
      },
      snap: snapRef.current,
      onRelease: function () {
        currentXRef.current = this.endX;
      },
    });

    const handleResize = () => {
      const draggableInstance = Draggable.get(slideContainer);
      if (draggableInstance) {
        draggableInstance.applyBounds({
          left: window.innerWidth / 2,
          width: 1,
        });
      }
      updateParallax();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Draggable.get(slideContainer)?.kill();
      gsap.killTweensOf(slideContainer);
    };
  }, [n]);

  // Handle swipe behavior to move to next or previous slide
  const handleSwipeToSlide = (dragInstance: any) => {
    const velocityX = dragInstance.getVelocity("x");

    // Check if the swipe is strong enough to trigger the next/prev slide
    if (velocityX < -500) {
      // Swipe to the left, go to next slide
      handleButtonClick("next");
    } else if (velocityX > 500) {
      // Swipe to the right, go to previous slide
      handleButtonClick("prev");
    } else {
      // If not strong enough, snap back to the nearest slide
      const snappedX = snapRef.current(dragInstance.endX);
      gsap.to(slidesRef.current, {
        x: snappedX,
        duration: 0.8,
        ease: "power3.out",
        onUpdate: updateParallax,
        overwrite: true,
      });
      currentXRef.current = snappedX;
    }
  };

  const handleButtonClick = (direction: "prev" | "next") => {
    const nextX = currentXRef.current + (direction === "next" ? -450 : 450);
    const snappedX = snapRef.current(nextX);

    if (snappedX !== currentXRef.current) {
      gsap.to(slidesRef.current, {
        x: snappedX,
        duration: 0.8,
        ease: "power3.out",
        onUpdate: updateParallax,
        overwrite: true,
      });
      currentXRef.current = snappedX;
    }
  };

  return (
    <div>
      <div id="carousel">
        <div className="flex">
          <svg
            id="prev"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#334646"
            strokeWidth="2"
            onClick={() => handleButtonClick("prev")}
          >
            <circle fill="rgba(170,170,170,0)" cx="25" cy="25" r="20" />
            <polyline id="arrow" points="29,15 17,25 29,35" />
          </svg>
          <svg
            id="next"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#334646"
            stroke-width="2"
            onClick={() => handleButtonClick("next")}
          >
            <circle fill="rgba(170,170,170,0)" cx="25" cy="25" r="20" />
            <polyline id="arrow" points="21,15 33,25 21,35" />
          </svg>
        </div>
        <div id="slides" ref={slidesRef}></div>
      </div>
    </div>
  );
};

export default ParallaxSlider;
