<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        @click.self="$emit('close')"
        role="dialog"
        aria-modal="true"
      >
        <div
          :key="project.id"
          class="bg-base-100 text-base-content w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-base-300 relative my-auto max-h-[90vh] flex flex-col animate__animated animate__fadeInUp animate__faster"
        >
          <!-- Close Button -->
          <button
            @click="$emit('close')"
            aria-label="Close project modal"
            class="btn btn-circle btn-sm bg-base-200/90 hover:bg-base-300 border-0 absolute top-4 right-4 z-20 shadow-md text-base-content"
          >
            ✕
          </button>

          <!-- Scrollable Content Area -->
          <div class="overflow-y-auto flex-1">
            <!-- Full Project Image (Full View Uncropped) -->
            <div class="relative w-full bg-base-200/70 flex items-center justify-center overflow-hidden p-3 sm:p-4 border-b border-base-300">
              <img
                :key="project.imageSrc"
                :src="project.imageSrc"
                :alt="project.altText"
                class="w-auto max-h-[48vh] max-w-full object-contain rounded-xl shadow-md"
              />
            </div>

            <!-- Details Body -->
            <div class="p-6 sm:p-8">
              <!-- Categories -->
              <div class="flex flex-wrap gap-2 mb-3">
                <span
                  v-for="cat in project.categories"
                  :key="cat"
                  class="badge badge-sm uppercase tracking-wider font-semibold bg-base-200 text-primary dark:text-primary-light border-0 py-2.5 px-3"
                >
                  {{ cat }}
                </span>
              </div>

              <!-- Title -->
              <h3
                class="text-2xl sm:text-3xl font-extrabold text-base-content mb-4 leading-tight"
              >
                {{ project.cardTitle }}
              </h3>

              <!-- Full Description -->
              <div class="text-base-content/80 text-base leading-relaxed space-y-3 mb-6">
                <p>{{ project.description }}</p>
              </div>

              <!-- Tech Stack Section -->
              <div class="mb-6">
                <h4
                  class="text-xs uppercase tracking-wider font-bold text-base-content/60 mb-2.5"
                >
                  Technologies & Skills Used
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(badge, index) in project.badges"
                    :key="index"
                    class="badge py-3 px-3.5 text-xs sm:text-sm font-medium transition-colors"
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

              <!-- Modal Footer Action Buttons -->
              <div
                class="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-base-200"
              >
                <a
                  v-if="project.githubLink"
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn bg-primary hover:bg-primary-hover text-white border-0 gap-2 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
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
                  <span>{{
                    project.githubLink.includes('github.com')
                      ? 'View on GitHub'
                      : 'Visit Live Website'
                  }}</span>
                </a>

                <div
                  v-else
                  class="flex items-center gap-2 text-sm text-base-content/70 bg-base-200 py-2 px-3.5 rounded-lg"
                >
                  <span>🔒</span>
                  <span class="font-medium">Client Confidential (Protected under NDA)</span>
                </div>

                <button
                  @click="$emit('close')"
                  class="btn btn-ghost border border-base-300 hover:bg-base-200 ml-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>