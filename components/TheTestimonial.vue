<template>
  <div class="max-w-4xl mx-auto my-10 h-auto bg-[#f5eeed] top">
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-700 ease-in-out items-center"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex-none w-full p-6"
        >
          <div class="bg-white shadow-md rounded-lg p-6">
            <img
              v-if="testimonial.image"
              :src="testimonial.image"
              alt="Profile Photo"
              class="w-3/5 h-3/5 object-contain mt-3 mx-auto"
            />
            <p class="text-lg text-gray-700 mb-4">{{ testimonial.text }}</p>
            <div class="text-right">
              <p class="text-sm font-semibold">{{ testimonial.author }}</p>
              <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Carousel Controls -->
      <button
        @click="prev"
        class="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white rounded-full p-2 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
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
      <!-- Right Arrow Button -->
      <button
        @click="next"
        class="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white rounded-full p-2 shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-700"
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
    <!-- Indicators -->
    <div class="flex justify-center mt-4">
      <span
        v-for="(testimonial, index) in testimonials"
        :key="index"
        @click="goToSlide(index)"
        class="mx-1 cursor-pointer h-2 w-2 rounded-full inline-block"
        :class="{
          'bg-blue-500': currentIndex === index,
          'bg-gray-400': currentIndex !== index,
        }"
      ></span>
    </div>
  </div>
</template>

<script setup>
import "animate.css";
import "intersection-observer";

onMounted(() => {
  if (process.client) {
    const sliders = document.querySelectorAll(".top");

    const appearOptions = {
      threshold: 0, // Adjust the threshold value as needed
    };

    const appearOnScroll = new IntersectionObserver(
      (entries, appearOnScroll) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            appearOnScroll.unobserve(entry.target);
          }
        });
      },
      appearOptions
    );

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }
});

const testimonials = ref([
  {
    text: "",
    author: "eClerx Philippines",
    role: "Web Development Unit",
    image: "/testimonial/MarchPerformer.jpeg",
  },
  {
    text: "",
    author: "eClerx Philippines",
    role: "Web Development Unit",
    image: "/testimonial/MayPerformer.jpeg",
  },
  {
    text: "As your professor for the capstone thesis project, I have to say you did an impressive job leading the team. You handled everything well, made sure we addressed the client’s needs, and overcame the challenges that came up. That really contributed to the project’s success.",
    author: "John Vincent Dallego",
    role: "College Professor and Software Engineer",
  },
  {
    text: "In the final project for my class, you did a fantastic job leading the team. Your leadership in programming and setting the priorities for the loan management system was crucial. You really made sure everything was on track and met our requirements, which made the project a success.",
    author: "Vlademir Pagtakhan",
    role: "College Professor and Software Engineer",
  },
  {
    text: "Can perform tasks with minimal supervision, punctual, shows initiative in performing tasks. Always willing to learn and quickly adapts to new challenges.",
    author: "Daniel Angelo Wagwag",
    role: "IT Staff (My IT Supervisor during Internship",
  },
]);

const currentIndex = ref(0);

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = testimonials.value.length - 1;
  }
};

const next = () => {
  if (currentIndex.value < testimonials.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
