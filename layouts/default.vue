<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex justify-between items-center p-4 bg-[#260b9caf] sticky top-0 backdrop-filter z-50"
    >
      <div>
        <NuxtLink to="/">
          <img class="h-20 w-auto ml-5" src="/logo/logo.png" alt="Logo" />
        </NuxtLink>
      </div>

      <div class="flex items-center">
        <!-- Navigation links for larger screens -->
        <div class="hidden lg:flex text-white gap-4 font-bold items-center">
          <NuxtLink to="#hero" class="hover:text-[#260b9caf]">Home</NuxtLink>
          <NuxtLink to="#about-me" class="hover:text-[#260b9caf]"
            >About</NuxtLink
          >
          <NuxtLink to="#projects" class="hover:text-[#260b9caf]"
            >Projects</NuxtLink
          >
          <NuxtLink to="#skills" class="hover:text-[#260b9caf]"
            >Capability</NuxtLink
          >
          <NuxtLink to="#testimonials" class="hover:text-[#260b9caf]"
            >Testimonials</NuxtLink
          >
          <a
            class="btn bg-[#4e2edfaf] text-white"
            href="mailto:evangelistaangelo38@gmail.com"
          >
            Say Hi
            <img src="/icons/send.svg" alt="Send Icon" class="w-5" />
          </a>
        </div>

        <!-- Theme toggle switch for both large and small screens
        <div class="ml-4 hidden lg:block lg:middle">
          <input
            type="checkbox"
            v-model="isDarkTheme"
            class="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)]"
          />
        </div> -->

        <!-- Navigation links and theme toggle switch for smaller screens -->
        <div class="lg:hidden ml-4">
          <label class="btn btn-circle swap swap-rotate mr-2 z-10">
            <input
              type="checkbox"
              class="hidden"
              onclick="my_modal_2.showModal()"
            />
            <dialog id="my_modal_2" class="modal">
              <div class="modal-box">
                <nav
                  class="flex flex-col gap-y-4 font-bold text-lg tracking-wide uppercase"
                >
                  <NuxtLink to="#hero">Home</NuxtLink>
                  <NuxtLink to="#about-me" class="hover:text-[#260b9caf]"
                    >About</NuxtLink
                  >
                  <NuxtLink to="#projects">Projects</NuxtLink>
                  <NuxtLink to="#skills" class="hover:text-[#260b9caf]"
                    >Capability</NuxtLink
                  >
                  <NuxtLink to="#testimonials" class="hover:text-[#260b9caf]"
                    >Testimonials</NuxtLink
                  >
                  <a
                    class="btn bg-[#4e2edfaf] text-white"
                    href="mailto:evangelistaangelo38@gmail.com"
                  >
                    Say Hi
                    <img src="/icons/send.svg" alt="Send Icon" />
                  </a>
                  <!-- <div class="ml-4">
                    <input
                      type="checkbox"
                      v-model="isDarkTheme"
                      class="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)]"
                    />
                  </div> -->
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
    <footer
      class="footer footer-center p-10 bg-[#260b9caf] text-primary-content"
    >
      <aside>
        <img class="h-20 w-auto" src="/logo/logo.png" alt="Logo" />
        <p class="font-bold">
          Angelo Gabriel D. Evangelista <br />
          Created By Me 💘
        </p>
        <p>Copyright © 2026 - All right reserved</p>
      </aside>
      <nav>
        <div class="flex space-between gap-4">
          <NuxtLink
            to="https://www.facebook.com/angelo.evangelista.148/"
            class="size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            target="_blank"
            ><img src="/icons/facebook.svg" alt="Facebook"
          /></NuxtLink>
          <NuxtLink
            to="https://www.instagram.com/evang81194/"
            target="_blank"
            class="flex-none size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            ><img src="/icons/instagram.svg" alt="Instagram"
          /></NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/angelo-gabriel-evangelista-a6276222a/"
            target="_blank"
            class="size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            ><img src="/icons/linkedin.svg" alt="LinkedIn"
          /></NuxtLink>
          <NuxtLink
            to="https://github.com/g-gelo"
            target="_blank"
            class="size-9 bg-black middle rounded-full z-40 hover:animate-spin"
            ><img src="/icons/github.svg" alt="Github"
          /></NuxtLink>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup>
//
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
