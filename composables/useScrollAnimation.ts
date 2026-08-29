type AnimationDirection = "left" | "right" | "top";

const animationMap: Record<AnimationDirection, string> = {
  left: "animate__fadeInLeft",
  right: "animate__fadeInRight",
  top: "animate__fadeInUp",
};

export const useScrollAnimation = () => {
  const observeElements = (selector: string, animationClass: string) => {
    const elements = document.querySelectorAll(selector);

    const appearOptions = {
      threshold: 0,
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated", animationClass);
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    elements.forEach((element) => {
      appearOnScroll.observe(element);
    });
  };

  const initScrollAnimations = () => {
    (Object.keys(animationMap) as AnimationDirection[]).forEach((direction) => {
      observeElements(`.${direction}`, animationMap[direction]);
    });
  };

  return { initScrollAnimations };
};
