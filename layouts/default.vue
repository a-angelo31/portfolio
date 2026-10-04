<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-between items-center p-4 bg-primary sticky top-0 backdrop-filter z-50"
    >
      <div>
        <NuxtLink to="/">
          <img class="h-20 w-auto ml-5" src="/logo/logo.png" alt="Logo" />
        </NuxtLink>
      </div>

      <div class="flex items-center">
        <!-- Navigation links for larger screens -->
        <div class="hidden lg:flex text-white gap-4 font-bold items-center">
          <NuxtLink to="#hero" class="hover:text-primary">Home</NuxtLink>
          <NuxtLink to="#projects" class="hover:text-primary"
            >Projects</NuxtLink
          >
          <NuxtLink to="#about-me" class="hover:text-primary">About</NuxtLink>
          <NuxtLink to="#testimonials" class="hover:text-primary"
            >Testimonials</NuxtLink
          >
          <NuxtLink to="#skills" class="hover:text-primary"
            >Capability</NuxtLink
          >
          <a
            class="btn bg-secondary text-white"
            href="mailto:evangelistaangelo38@gmail.com"
          >
            Say Hi
            <img src="/icons/send.svg" alt="Send Icon" class="w-5" />
          </a>
        </div>

        <!-- Theme toggle switch for both large and small screens -->
        <div class="ml-4 hidden lg:block lg:middle">
          <input
            type="checkbox"
            v-model="isDarkTheme"
            class="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div>

        <!-- Navigation links and theme toggle switch for smaller screens -->
        <div class="lg:hidden ml-4">
          <label class="btn btn-circle swap swap-rotate mr-2 z-10">
            <input
              type="checkbox"
              class="hidden"
              @click="mobileMenuRef?.showModal()"
            />
            <dialog id="my_modal_2" ref="mobileMenuRef" class="modal">
              <div class="modal-box">
                <nav
                  class="flex flex-col gap-y-4 font-bold text-lg tracking-wide uppercase"
                >
                  <NuxtLink to="#hero">Home</NuxtLink>
                  <NuxtLink to="#projects">Projects</NuxtLink>
                  <NuxtLink to="#about-me" class="hover:text-primary"
                    >About</NuxtLink
                  >
                  <NuxtLink to="#testimonials" class="hover:text-primary"
                    >Testimonials</NuxtLink
                  >
                  <NuxtLink to="#skills" class="hover:text-primary"
                    >Capability</NuxtLink
                  >
                  <a
                    class="btn bg-secondary text-white"
                    href="mailto:evangelistaangelo38@gmail.com"
                  >
                    Say Hi
                    <img src="/icons/send.svg" alt="Send Icon" />
                  </a>
                  <div class="ml-4">
                    <input
                      type="checkbox"
                      v-model="isDarkTheme"
                      class="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)]"
                    />
                  </div>
                </nav>
              </div>
              <form method="dialog" class="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>

            <!-- hamburger icon -->
            <svg
              class="fill-current bg-none"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path
                d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
              />
            </svg>
          </label>
        </div>
      </div>
    </header>

    <div>
      <div>
        <slot />
      </div>
    </div>
    <footer class="footer footer-center p-10 bg-primary text-gray-300">
      <aside>
        <img class="h-20 w-auto" src="/logo/logo.png" alt="Logo" />
        <p class="font-bold">
          Designed & Built by Angelo Gabriel D. Evangelista
        </p>
        <p>Copyright © 2026 - All right reserved</p>
      </aside>
      <nav>
        <SocialLinks />
      </nav>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const isDarkTheme = computed({
  get: () => colorMode.value === "dark",
  set: (value) => {
    colorMode.value = value ? "dark" : "light";
  },
});

const mobileMenuRef = ref(null);
</script>

<style>
html {
  scroll-behavior: smooth;
}

.backdrop-filter {
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.middle {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
