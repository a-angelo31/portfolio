<template>
  <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
    <div class="top">
      <ProjectCard
        imageSrc="/projects/capstone/capstone-project.png"
        altText="Capstone Thesis Project"
        githubLink="https://github.com/g-gelo/first-thesis-trial"
        cardTitle="Capstone Thesis Project"
        description="This capstone project is a mobile app implemented as a Progressive Web App (PWA), fully installable and designed solely for mobile use without a desktop screen view."
        :badges="['Vue 3', 'TypeScript', 'JavaScript', 'PWA', 'Nuxt 3']"
      />
    </div>
    <div class="top">
      <ProjectCard
        imageSrc="/projects/ojt/ojt-project.png"
        altText="OJT Project"
        githubLink="https://github.com/g-gelo/hospital_project"
        cardTitle="OJT Project"
        description="During my OJT, I developed a responsive landing page for South Imus Specialist Hospital, emphasizing intuitive navigation and visual appeal to showcase services and facilities."
        :badges="['Vue 3', 'Nuxt 3', 'Prisma']"
      />
    </div>
    <div class="top">
      <ProjectCard
        imageSrc="/projects/portfolio/portfolio.png"
        altText="Portfolio Project"
        githubLink="https://github.com/g-gelo/portfolio"
        cardTitle="My Portfolio"
        description="Responsive, Simple, and Minimal custom theme for my portfolio."
        :badges="['Nuxt 3', 'Tailwind', 'Daisy Ui']"
      />
    </div>
    <div class="top">
      <ProjectCard
        imageSrc="/projects/portfolio/ConfidentialProject.png"
        altText="Confidential Project (NDA)"
        cardTitle="Confidential Client Project"
        description="This project was developed during my current work and is protected under a Non-Disclosure Agreement (NDA). While I’m unable to share specific details or source code, the work involved building responsive, SEO-optimized websites, handling revisions, and ensuring quality standards for production-ready delivery."
        :badges="['Duda', 'SEO', 'Responsive Design', 'Client Revisions']"
      />
    </div>
  </div>
</template>

<script setup>
const { initScrollAnimations } = useScrollAnimation();

onMounted(() => {
  initScrollAnimations();
});
</script>

<style scoped>
/* No custom styles are needed as TailwindCSS is used for layout */
</style>
