<template>
  <div>
    <div
      id="hero"
      class="flex flex-col md:flex-row h-screen gradient-bg gradients-container"
    >
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div class="g1"></div>
      <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
      <div class="g5"></div>
      <div class="interactive"></div>

      <div class="flex-1 flex flex-col justify-center p-6 text-left m-14">
        <h1 class="font-gideon font-bold text-gray-300 sm:text-8xl">I Am</h1>
        <h1
          class="text-5xl md:text-4xl font-extrabold font-gideon text-gray-300"
        >
          Angelo Gabriel
        </h1>
        <h2 class="mt-3 text-lg md:text-xl text-white tracking-wide font-della">
          Web Designer & Front-End Developer
        </h2>
        <div class="flex flex-wrap gap-4 mt-6">
          <SocialLinks />
        </div>
        <div class="mt-6 z-40">
          <a
            href="/projects/portfolio/Resume — Angelo Gabriel D. Evangelista.pdf"
            target="_blank"
            class="btn bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div
        class="relative flex-1 flex items-end justify-end p-4 mb-20 sm:mb-0 md:items-center md:justify-center md:ml-40 md:mt-0"
      >
        <img
          src="/img/Me-2.png"
          alt="Angelo Gabriel D. Evangelista — Front-End Developer/Designer"
          class="w-9/12 object-contain md:w-auto md:h-full lg:w-7/12 lg:mt-20"
        />
      </div>
    </div>
    <!-- What I Do -->
    <div id="about-me" class="h-auto md:h-auto flex flex-col p-4 bg-base-200">
      <div
        class="flex flex-col justify-center items-center mt-20 mb-10 sm:mb-24 sm:mt-20"
      >
        <h1
          class="text-2xl md:text-4xl font-extrabold text-center text-base-content left"
        >
          "CHASE YOUR PASSION
        </h1>
        <h1
          class="text-2xl md:text-4xl font-extrabold text-center text-primary dark:text-primary-light right"
        >
          IN YOUR OWN FASHION"
        </h1>
      </div>
      <div class="flex flex-col space-y-10 sm:flex-row sm:space-y-0 mb-10 top">
        <TheCard
          iconPath="/icons/book.svg"
          title="Reading"
          description="Medium offers diverse articles, from motivation to programming insights, enriching my reading experience."
          buttonText="View Link"
        />
        <TheCard
          iconPath="/icons/music.svg"
          title="Music"
          description="I love listening to music. I don't have a specific genre that I prefer; the only music genre that I hate is the music that I don't listen to."
          buttonText="View Link"
        />
        <TheCard
          iconPath="/icons/writing.svg"
          title="Writing"
          description="Writing down my thoughts process, especially in the morning, helps me stay on track and achieve my goals."
          buttonText="View Link"
        />
      </div>
    </div>
    <!-- About Me -->
    <div class="flex justify-center items-center md:mb-0 md:mt-0 bg-primary">
      <AboutMe />
    </div>
    <!-- Sample Project -->
    <div
      id="projects"
      class="h-auto bg-base-200 flex justify-center flex-col items-center"
    >
      <div class="font-bold text-4xl flex flex-col items-center mb-8 mt-10">
        <h1 class="text-center text-base-content left">SAMPLE</h1>
        <h1 class="text-primary dark:text-primary-light right">PROJECT</h1>
      </div>
      <div class="mb-10">
        <ProjectSample />
      </div>
    </div>

    <!-- Skills Overview -->
    <div id="skills" class="bg-primary">
      <SkillUsed />
    </div>

    <!-- Testimonial -->
    <div
      id="testimonials"
      class="max-w-5xl mx-auto my-12 p-6 bg-base-200 rounded-lg shadow-lg"
    >
      <h2
        class="text-4xl font-bold text-center text-primary dark:text-primary-light mb-6 left"
      >
        TESTIMONIALS
      </h2>
      <p class="text-center text-base-content/70 mb-8">
        See what others have to say about my work!
      </p>
      <div>
        <TheTestimonial />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Angelo's Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Angelo Gabriel D. Evangelista — Web Designer and Front-End Developer based in the Philippines. Specializing in clean, responsive, and visually engaging websites using Duda, WordPress, Vue, and Nuxt.",
    },
    { property: "og:title", content: "Angelo's Portfolio" },
    {
      property: "og:description",
      content:
        "Web Designer & Front-End Developer crafting clean, responsive, and visually engaging digital experiences.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://g-gelo.github.io/portfolio" },
    { property: "og:image", content: "/img/Me-2.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Angelo's Portfolio" },
    {
      name: "twitter:description",
      content:
        "Web Designer & Front-End Developer crafting clean, responsive, and visually engaging digital experiences.",
    },
    { name: "twitter:image", content: "/img/Me-2.png" },
  ],
});

const { initScrollAnimations } = useScrollAnimation();

onMounted(() => {
  initScrollAnimations();
});

// Interactive hero background animation with proper cleanup
let animationFrameId = null;
let mouseMoveHandler = null;

onMounted(() => {
  const interBubble = document.querySelector(".interactive");
  if (!interBubble) return;

  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX,
    )}px, ${Math.round(curY)}px)`;
    animationFrameId = requestAnimationFrame(move);
  };

  mouseMoveHandler = (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  };

  window.addEventListener("mousemove", mouseMoveHandler);
  move();
});

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  if (mouseMoveHandler) {
    window.removeEventListener("mousemove", mouseMoveHandler);
  }
});
</script>

<style>
:root {
  --color-bg1: rgb(108, 0, 162);
  --color-bg2: rgb(0, 17, 82);
  --color1: 18, 113, 255;
  --color2: 221, 74, 255;
  --color3: 100, 220, 255;
  --color4: 200, 50, 50;
  --color5: 180, 180, 50;
  --color-interactive: 140, 100, 255;
  --circle-size: 80%;
  --blending: hard-light;
}
@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}

.gradient-bg {
  position: relative;
  overflow: hidden;
  background: linear-gradient(40deg, var(--color-bg1), var(--color-bg2));
  top: 0;
  left: 0;

  svg {
    display: none;
  }

  .gradients-container {
    filter: url(#goo) blur(40px);
    width: 100%;
    height: 100%;
  }

  .g1 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color1), 0.8) 0,
        rgba(var(--color1), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: center center;
    animation: moveVertical 30s ease infinite;

    opacity: 1;
  }
  .g2 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color2), 0.8) 0,
        rgba(var(--color2), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 400px);
    animation: moveInCircle 20s reverse infinite;

    opacity: 1;
  }

  .g3 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color3), 0.8) 0,
        rgba(var(--color3), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2 + 200px);
    left: calc(50% - var(--circle-size) / 2 - 500px);

    transform-origin: calc(50% + 400px);
    animation: moveInCircle 40s linear infinite;

    opacity: 1;
  }

  .g4 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color4), 0.8) 0,
        rgba(var(--color4), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: var(--circle-size);
    height: var(--circle-size);
    top: calc(50% - var(--circle-size) / 2);
    left: calc(50% - var(--circle-size) / 2);

    transform-origin: calc(50% - 200px);
    animation: moveHorizontal 40s ease infinite;

    opacity: 0.7;
  }

  .g5 {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color5), 0.8) 0,
        rgba(var(--color5), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: calc(var(--circle-size) * 2);
    height: calc(var(--circle-size) * 2);
    top: calc(50% - var(--circle-size));
    left: calc(50% - var(--circle-size));

    transform-origin: calc(50% - 800px) calc(50% + 200px);
    animation: moveInCircle 20s ease infinite;

    opacity: 1;
  }

  .interactive {
    position: absolute;
    background: radial-gradient(
        circle at center,
        rgba(var(--color-interactive), 0.8) 0,
        rgba(var(--color-interactive), 0) 50%
      )
      no-repeat;
    mix-blend-mode: var(--blending);

    width: 100%;
    height: 100%;
    top: -50%;
    left: -50%;

    opacity: 0.8;
  }
}
</style>
