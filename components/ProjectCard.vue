<template>
  <div
    class="card bg-base-100 w-full shadow-lg hover:shadow-2xl border border-base-300/70 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer h-full"
    @click="$emit('openModal')"
  >
    <!-- Thumbnail Image with Hover Preview Overlay -->
    <figure class="relative aspect-video w-full overflow-hidden bg-base-300">
      <img
        :key="projectData.id + '-' + projectData.imageSrc"
        :src="projectData.imageSrc"
        :alt="projectData.altText"
        class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <!-- Hover Overlay Preview Indicator -->
      <div
        class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none"
      >
        <span
          class="btn btn-sm bg-base-100/90 text-base-content shadow-lg border-0 gap-2 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span>View Details</span>
        </span>
      </div>

      <!-- Confidential Tag if NDA -->
      <div
        v-if="!projectData.githubLink"
        class="absolute top-3 right-3 bg-black/75 backdrop-blur-sm text-white text-[11px] px-2.5 py-1 rounded-full font-medium shadow-md flex items-center gap-1"
      >
        <span>🔒</span> NDA
      </div>
    </figure>

    <!-- Card Body Content (Compact) -->
    <div class="card-body p-5 flex flex-col justify-between flex-1">
      <div>
        <!-- Category Badges -->
        <div class="flex flex-wrap gap-1.5 mb-2.5">
          <span
            v-for="cat in projectData.categories"
            :key="cat"
            class="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-base-200 text-primary dark:text-primary-light"
          >
            {{ cat }}
          </span>
        </div>

        <!-- Project Title -->
        <h3
          class="card-title font-bold text-lg sm:text-xl text-base-content group-hover:text-primary transition-colors leading-snug mb-2"
        >
          {{ projectData.cardTitle }}
        </h3>

        <!-- Short Description (Line clamped to keep card compact) -->
        <p
          class="text-base-content/75 text-xs sm:text-sm leading-relaxed line-clamp-3"
        >
          {{ projectData.description }}
        </p>
      </div>

      <!-- Bottom Meta & Actions -->
      <div class="mt-4 pt-3 border-t border-base-200 flex flex-col gap-3">
        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap items-center gap-1.5">
          <span
            v-for="(badge, index) in projectData.badges || []"
            :key="index"
            class="badge badge-sm py-2 px-2.5 text-[11px] font-medium"
            :class="[
              index % 2 === 0
                ? 'bg-primary text-white border-transparent'
                : 'bg-light-green text-black border-transparent',
            ]"
          >
            {{ badge }}
          </span>
        </div>

        <!-- Links and Details Action Footer -->
        <div class="flex items-center justify-between pt-1">
          <span
            class="text-primary font-semibold text-xs sm:text-sm group-hover:underline flex items-center gap-1"
          >
            Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform"
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
          </span>

          <a
            v-if="projectData.githubLink"
            :href="projectData.githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-xs sm:btn-sm btn-ghost hover:bg-base-200 text-base-content/80 hover:text-primary flex items-center gap-1 font-medium transition-colors"
            @click.stop
            :aria-label="`Open external link for ${projectData.cardTitle}`"
          >
            <span>{{
              projectData.githubLink.includes("github.com")
                ? "GitHub"
                : "Live Site"
            }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
  imageSrc: {
    type: String,
    default: "",
  },
  altText: {
    type: String,
    default: "Project Screenshot",
  },
  githubLink: {
    type: String,
    default: null,
  },
  cardTitle: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  badges: {
    type: Array,
    default: () => [],
  },
  categories: {
    type: Array,
    default: () => [],
  },
});

defineEmits(["openModal"]);

const projectData = computed(() => {
  if (props.project) {
    return props.project;
  }
  return {
    imageSrc: props.imageSrc,
    altText: props.altText,
    githubLink: props.githubLink,
    cardTitle: props.cardTitle,
    description: props.description,
    badges: props.badges,
    categories: props.categories,
  };
});
</script>

<style scoped>
/* Scoped styles */
</style>
