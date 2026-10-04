<template>
  <div
    class="card bg-base-100 w-full shadow-lg hover:shadow-2xl border border-base-300/60 rounded-2xl overflow-hidden transition-all duration-300 h-full flex flex-col justify-between group/card"
  >
    <!-- Image Header with Hover Action Overlay -->
    <figure class="relative aspect-video w-full overflow-hidden bg-base-300">
      <img
        :src="imageSrc"
        :alt="altText"
        class="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
        loading="lazy"
      />

      <!-- Hover Overlay -->
      <NuxtLink
        v-if="githubLink"
        :to="githubLink"
        target="_blank"
        class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white font-semibold opacity-0 group-hover/card:opacity-100 transition-all duration-300 gap-2 backdrop-blur-[2px] p-4 text-center cursor-pointer"
        aria-label="View project"
      >
        <span class="btn btn-sm bg-primary hover:bg-primary-hover text-white border-0 gap-2 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          {{ githubLink.includes('github.com') ? 'View on GitHub' : 'Visit Website' }}
        </span>
      </NuxtLink>

      <div
        v-else
        class="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white font-semibold opacity-0 group-hover/card:opacity-100 transition-all duration-300 gap-2 backdrop-blur-[2px] p-4 text-center"
      >
        <span class="badge badge-lg bg-base-300/90 text-white border-0 shadow-md">
          🔒 Confidential Project
        </span>
        <span class="text-xs text-gray-300">Protected under NDA</span>
      </div>
    </figure>

    <!-- Card Body Content -->
    <div class="card-body p-5 sm:p-6 flex flex-col justify-between flex-1">
      <div>
        <h2 class="card-title font-bold text-xl sm:text-2xl text-base-content mb-2 leading-snug">
          {{ cardTitle }}
        </h2>
        <p class="text-base-content/75 text-sm sm:text-base leading-relaxed line-clamp-3 hover:line-clamp-none transition-all">
          {{ description }}
        </p>
      </div>

      <!-- Badges / Tech Stack -->
      <div class="card-actions justify-end flex-wrap gap-2 mt-5 pt-3 border-t border-base-200">
        <span
          v-for="(badge, index) in badges"
          :key="index"
          class="badge text-xs sm:text-sm py-3 px-3 font-medium transition-colors"
          :class="[
            index % 2 === 0
              ? 'bg-primary text-white border-transparent'
              : 'bg-light-green text-black border-transparent',
          ]"
        >
          {{ badge }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Project Screenshot",
  },
  githubLink: {
    type: String,
    required: false,
    default: null,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  badges: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Scoped styles */
</style>
