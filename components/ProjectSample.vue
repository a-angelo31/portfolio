<template>
  <div class="w-full max-w-5xl mx-auto top px-2 sm:px-4">
    <!-- Carousel Wrapper -->
    <div
      class="relative group"
      @mouseenter="pauseAutoPlay"
      @mouseleave="startAutoPlay"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <!-- Overflow Viewport -->
      <div class="overflow-hidden py-4 -my-4">
        <!-- Sliding Track -->
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }"
        >
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="flex-none p-2 sm:p-3 w-full md:w-1/2 flex"
          >
            <ProjectCard
              :imageSrc="project.imageSrc"
              :altText="project.altText"
              :githubLink="project.githubLink"
              :cardTitle="project.cardTitle"
              :description="project.description"
              :badges="project.badges"
            />
          </div>
        </div>
      </div>

      <!-- Left Arrow -->
      <button
        @click="prev"
        aria-label="Previous project"
        class="btn btn-circle bg-base-100/90 hover:bg-base-100 text-base-content hover:text-primary border border-base-300 shadow-lg absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Right Arrow -->
      <button
        @click="next"
        aria-label="Next project"
        class="btn btn-circle bg-base-100/90 hover:bg-base-100 text-base-content hover:text-primary border border-base-300 shadow-lg absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Pagination Dots & Status -->
    <div class="flex flex-col items-center justify-center mt-6 gap-3">
      <!-- Dots -->
      <div class="flex items-center space-x-2">
        <button
          v-for="index in totalSlides"
          :key="index - 1"
          @click="goToSlide(index - 1)"
          :aria-label="`Go to project slide ${index}`"
          class="h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
          :class="[
            currentIndex === index - 1
              ? 'w-8 bg-primary'
              : 'w-2.5 bg-base-content/25 hover:bg-base-content/50',
          ]"
        ></button>
      </div>

      <!-- Slide Counter indicator -->
      <div class="text-xs font-medium text-base-content/60">
        {{ currentIndex + 1 }} / {{ totalSlides }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { initScrollAnimations } = useScrollAnimation();

const projects = ref([
  {
    imageSrc: "/projects/portfolio/OxPlumbing.png",
    altText: "Ox Plumbing",
    githubLink: "https://www.oxplumb.com.au/",
    cardTitle: "Ox Plumbing",
    description:
      "A responsive website built for Ox Plumbing, an Australian plumbing service provider. Initiated and led the build as part of a team during my current role, recognized as Website of the Week for its clean design and user-friendly presentation of services, team, and contact information for potential clients. Built with Duda.",
    badges: ["Duda", "CSS", "SEO"],
  },
  {
    imageSrc: "/projects/capstone/capstone-project.png",
    altText: "Capstone Thesis Project",
    githubLink: "https://github.com/g-gelo/first-thesis-trial",
    cardTitle: "Capstone Thesis Project",
    description:
      "Led a team in developing a Progressive Web App (PWA) for Cavite State University's Guidance Office, allowing students to view announcements and book guidance counselor appointments without visiting the office in person. Built as a mobile-first, installable PWA using Vue 3, Nuxt 3, and TypeScript, with Google OAuth login for secure student access.",
    badges: ["Vue 3", "TypeScript", "JavaScript", "PWA", "Nuxt 3"],
  },
  {
    imageSrc: "/projects/ojt/ojt-project.png",
    altText: "OJT Project",
    githubLink: "https://github.com/g-gelo/hospital_project",
    cardTitle: "OJT Project",
    description:
      "Independently developed a responsive landing page for South Imus Specialist Hospital during OJT, designed to help patients easily find doctors and hospital services online. Built with Vue 3, Nuxt 3, and Prisma, focusing on intuitive navigation and visual presentation of hospital staff and departments.",
    badges: ["Vue 3", "Nuxt 3", "Prisma"],
  },
  {
    imageSrc: "/projects/portfolio/portfolio.png",
    altText: "Portfolio Project",
    githubLink: "https://github.com/g-gelo/portfolio",
    cardTitle: "My Portfolio",
    description:
      "Responsive, Simple, and Minimal custom theme for my portfolio.",
    badges: ["Nuxt 3", "Tailwind", "Daisy Ui"],
  },
  {
    imageSrc: "/projects/portfolio/ConfidentialProject.png",
    altText: "Confidential Project (NDA)",
    cardTitle: "Confidential Client Project",
    description:
      "This project was developed during my current work and is protected under a Non-Disclosure Agreement (NDA). While I’m unable to share specific details or source code, the work involved building responsive, SEO-optimized websites, handling revisions, and ensuring quality standards for production-ready delivery.",
    badges: ["Duda", "SEO", "Responsive Design", "Client Revisions"],
  },
]);

const currentIndex = ref(0);
const visibleCards = ref(1);
const autoPlayInterval = ref(null);
const touchStartX = ref(0);

const maxIndex = computed(() => {
  return Math.max(0, projects.value.length - visibleCards.value);
});

const totalSlides = computed(() => {
  return maxIndex.value + 1;
});

const updateVisibleCards = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth >= 768) {
      visibleCards.value = 2;
    } else {
      visibleCards.value = 1;
    }
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = maxIndex.value;
    }
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = maxIndex.value;
  }
};

const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const goToSlide = (index) => {
  currentIndex.value = Math.min(Math.max(0, index), maxIndex.value);
};

const startAutoPlay = () => {
  if (autoPlayInterval.value) return;
  autoPlayInterval.value = setInterval(() => {
    next();
  }, 6000);
};

const pauseAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value);
    autoPlayInterval.value = null;
  }
};

const onTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX;
};

const onTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const deltaX = touchStartX.value - touchEndX;

  if (Math.abs(deltaX) > 40) {
    if (deltaX > 0) {
      next();
    } else {
      prev();
    }
  }
};

const onKeydown = (event) => {
  if (event.key === "ArrowLeft") {
    prev();
  } else if (event.key === "ArrowRight") {
    next();
  }
};

onMounted(() => {
  initScrollAnimations();
  updateVisibleCards();
  startAutoPlay();
  window.addEventListener("resize", updateVisibleCards);
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  pauseAutoPlay();
  window.removeEventListener("resize", updateVisibleCards);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<style scoped>
/* No custom styles are needed as TailwindCSS is used for layout */
</style>
