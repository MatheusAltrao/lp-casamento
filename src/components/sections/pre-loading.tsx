import { ICONS_LOADING } from "@/consts/icons-loading";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

export default function PreLoading() {
  const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline();

    gsap.set(iconRefs.current, { opacity: 0, x: -20 });
    gsap.set(progressBarRef.current, { width: "0%" });

    const iconDuration = 2 / ICONS_LOADING.length;

    ICONS_LOADING.forEach((_, index) => {
      tl.to(
        iconRefs.current[index],
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        index * iconDuration
      ).to(
        iconRefs.current[index],
        {
          opacity: 0,
          x: 20,
          duration: 0.3,
          ease: "power2.in",
        },
        (index + 0.7) * iconDuration
      );
    });

    tl.to(
      iconRefs.current[ICONS_LOADING.length - 1],
      {
        opacity: 1,
        x: 0,
        duration: 0,
      },
      2
    );

    tl.to(
      progressBarRef.current,
      {
        width: "100%",
        duration: 2,
        ease: "power1.inOut",
      },
      0
    );

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          // Remove overflow hidden do body
          document.body.style.overflow = "";
          setIsHidden(true);
        },
      },
      2
    );

    return () => {
      // Cleanup: remove overflow hidden se o componente desmontar
      document.body.style.overflow = "";
      tl.kill();
    };
  }, []);

  if (isHidden) return null;

  return (
    <div ref={containerRef} className="min-h-screen fixed inset-0 bg-background z-50 pt-[20vh]  ">
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="flex items-center justify-center relative w-[60px] h-[60px]">
          {ICONS_LOADING.map((icon, index) => (
            <span
              key={index}
              ref={(el) => {
                iconRefs.current[index] = el;
              }}
              className="text-4xl absolute inset-0 flex items-center justify-center"
            >
              {icon}
            </span>
          ))}
        </div>

        <div className="h-1 rounded-full w-[190px] bg-zinc-200 overflow-hidden">
          <div ref={progressBarRef} className="bg-linear-to-r from-primary to-secondary w-0 h-full" />
        </div>
      </div>
    </div>
  );
}
