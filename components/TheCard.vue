<template>
  <div
    class="middle flex-col bg-base-100 rounded-lg p-6 px-4 space-y-3 mx-10 shadow-lg"
  >
    <div><img :src="iconPath" alt="Icon" class="size-20" /></div>
    <div>
      <h1 class="text-2xl font-bold text-base-content">{{ title }}</h1>
    </div>
    <div>
      <p class="text-center">{{ description }}</p>
    </div>
    <div>
      <button
        @click="showModal = true"
        class="btn btn-active bg-primary text-white"
      >
        {{ buttonText }}
      </button>
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-base-100 rounded-lg p-6 space-y-4 w-1/2 middle flex-col">
        <h2 class="text-2xl font-bold text-base-content">Notice</h2>
        <img src="/icons/wrench.svg" class="size-9" alt="Facebook" />
        <p>This feature is under development.</p>
        <button @click="showModal = false" class="btn bg-primary text-white">
          Close
        </button>
      </div>
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
  buttonText: {
    type: String,
    required: true,
  },
});

const showModal = ref(false);
</script>

<style scoped>
/* Uses global .middle utility from layout */
</style>
