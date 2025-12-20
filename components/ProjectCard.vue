<template>
  <div class="card bg-base-100 w-96">
    <figure class="relative group">
      <img :src="imageSrc" :alt="altText" class="w-full" />
      <NuxtLink
        v-if="githubLink"
        :to="githubLink"
        target="_blank"
        class="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        View on GitHub
      </NuxtLink>
      <div
        v-else
        class="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        🔒 Confidential Project
      </div>
    </figure>

    <div class="card-body">
      <h2 class="card-title font-bold">
        {{ cardTitle }}
      </h2>
      <p class="line-clamp-3 hover:line-clamp-none">
        {{ description }}
      </p>
      <div class="card-actions justify-end">
        <div
          v-for="(badge, index) in badges"
          :key="index"
          class="p-2"
          :class="[
            'badge badge-outline',
            index % 2 === 0
              ? 'bg-[#260b9caf] text-white'
              : 'bg-[#C7FFB2] text-black',
          ]"
        >
          {{ badge }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Image",
  },
  githubLink: {
    type: String,
    required: false,
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
/* Add any scoped styles if needed */
</style>
