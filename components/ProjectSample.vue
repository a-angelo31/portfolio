<template>
  <div class="w-full max-w-6xl mx-auto top px-4 sm:px-6">
    <!-- Filter Tabs / Buttons -->
    <div
      class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
    >
      <button
        v-for="filter in filterCategories"
        :key="filter"
        @click="activeFilter = filter"
        :aria-pressed="activeFilter === filter"
        class="btn btn-sm sm:btn-md rounded-full px-4 sm:px-6 transition-all duration-300 font-medium capitalize"
        :class="[
          activeFilter === filter
            ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/30 border-primary scale-105'
            : 'bg-base-100 hover:bg-base-300 text-base-content/80 border border-base-300',
        ]"
      >
        <span>{{ filter }}</span>
        <span
          class="badge badge-xs sm:badge-sm ml-1.5 py-2 px-2 transition-colors"
          :class="[
            activeFilter === filter
              ? 'bg-white text-primary font-bold'
              : 'bg-base-300 text-base-content/70',
          ]"
        >
          {{ getCategoryCount(filter) }}
        </span>
      </button>
    </div>

    <!-- Responsive Filterable Grid with Smooth Transitions -->
    <div class="min-h-[350px]">
      <TransitionGroup
        name="project-grid"
        tag="div"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @openModal="openModal(project)"
        />
      </TransitionGroup>

      <!-- Empty State -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-16 text-base-content/60"
      >
        <p class="text-lg">No projects found in this category.</p>
      </div>
    </div>

    <!-- Lightbox Modal Component -->
    <ProjectModal :project="selectedProject" @close="closeModal" />
  </div>
</template>


<script setup>
const { initScrollAnimations } = useScrollAnimation();

const filterCategories = ["All", "Web Design", "SEO", "Personal Projects"];
const activeFilter = ref("All");
const selectedProject = ref(null);

const projects = ref([
  {
    id: "ox-plumbing",
    imageSrc: "/projects/portfolio/OxPlumbing.png",
    altText: "Ox Plumbing",
    githubLink: "https://www.oxplumb.com.au/",
    cardTitle: "Ox Plumbing",
    categories: ["Web Design", "SEO"],
    description:
      "A responsive website built for Ox Plumbing, an Australian plumbing service provider. Initiated and led the build as part of a team during my current role, recognized as Website of the Week for its clean design and user-friendly presentation of services, team, and contact information for potential clients.",
    badges: ["Duda", "Responsive Design", "SEO"],
  },
  {
    id: "confidential",
    imageSrc: "/projects/portfolio/ConfidentialProject.png",
    altText: "Confidential Client Project",
    githubLink: null,
    cardTitle: "Confidential Client Project",
    categories: ["Web Design", "SEO"],
    description:
      "This project was developed during my current work and is protected under a Non-Disclosure Agreement (NDA). While I'm unable to share specific details or source code, the work involved responsive design and SEO optimization for a live client site.",
    badges: ["Duda", "SEO", "Responsive Design", "Client Revisions"],
  },
  {
    id: "capstone",
    imageSrc: "/projects/capstone/capstone-project.png",
    altText: "Capstone Thesis Project",
    githubLink: "https://github.com/g-gelo/first-thesis-trial",
    cardTitle: "Capstone Thesis Project",
    categories: ["Personal Projects"],
    description:
      "Led a team in developing a Progressive Web App (PWA) for Cavite State University's Guidance Office, allowing students to view announcements and book guidance counselor appointments without visiting the office in person. Built as a mobile-first, installable PWA using Vue 3, Nuxt 3, and TypeScript, with Google OAuth login for secure student access.",
    badges: ["Vue 3", "TypeScript", "JavaScript", "PWA", "Nuxt 3"],
  },
  {
    id: "ojt",
    imageSrc: "/projects/ojt/ojt-project.png",
    altText: "OJT Project",
    githubLink: "https://github.com/g-gelo/hospital_project",
    cardTitle: "OJT Project",
    categories: ["Personal Projects", "Web Design"],
    description:
      "Independently developed a responsive landing page for South Imus Specialist Hospital during OJT, designed to help patients easily find doctors and hospital services online. Built with Vue 3, Nuxt 3, and Prisma, focusing on intuitive navigation and visual presentation of hospital staff and departments.",
    badges: ["Vue 3", "Nuxt 3", "Prisma"],
  },
  {
    id: "portfolio",
    imageSrc: "/projects/portfolio/portfolio.png",
    altText: "My Portfolio",
    githubLink: "https://github.com/g-gelo/portfolio",
    cardTitle: "My Portfolio",
    categories: ["Personal Projects", "Web Design"],
    description:
      "Responsive, Simple, and Minimal custom theme for my portfolio with smooth animations, dark/light theme switching, and interactive components.",
    badges: ["Nuxt 3", "Tailwind", "Daisy Ui"],
  },
]);

const getCategoryCount = (category) => {
  if (category === "All") return projects.value.length;
  return projects.value.filter((p) => p.categories.includes(category)).length;
};

const filteredProjects = computed(() => {
  if (activeFilter.value === "All") {
    return projects.value;
  }
  return projects.value.filter((p) =>
    p.categories.includes(activeFilter.value),
  );
});

const openModal = (project) => {
  selectedProject.value = project;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
};

const closeModal = () => {
  selectedProject.value = null;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
};

const handleKeydown = (event) => {
  if (event.key === "Escape" && selectedProject.value) {
    closeModal();
  }
};

onMounted(() => {
  initScrollAnimations();
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeydown);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("keydown", handleKeydown);
    document.body.style.overflow = "";
  }
});
</script>

<style scoped>
/* Filter grid transitions */
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: scale(0.94) translateY(12px);
}

.project-grid-leave-active {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>

