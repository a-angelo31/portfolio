<template>
  <div
    class="flex flex-col items-center justify-start bg-base-100 rounded-lg p-6 sm:p-8 space-y-4 shadow-lg w-full h-full text-center transition-transform hover:-translate-y-1 hover:shadow-xl"
  >
    <div><img :src="iconPath" alt="Icon" class="size-20" /></div>
    <div>
      <h3 class="text-2xl font-bold text-base-content">{{ title }}</h3>
    </div>
    <div class="flex-grow">
      <p class="text-center">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  iconPath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Responsive card component */
</style>
