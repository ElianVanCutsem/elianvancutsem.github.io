<template>
    <main class="relative">  
      <section class="h-full mt-12 mx-12 md:grid md:grid-cols-2 md:gap-4 items-center">
        <div class="flex flex-col md:mr-24">
          <h1 class="title">👋 Hello</h1>
          <p class="subtitle">
            I'm a Webdeveloper
          </p>
          <p class="regular-text">
            My name is Elian Van Cutsem. I'm a Student and software engineer from belgium. On my personal site you'll find more info about myself and my projects. At the moment I'm doing an internship <a href="https://vbridge.eu" target="_blank">@vBridge</a> while finishing my Computer Science degree <a href="https://odisee.be/en" target="_blank">@Odisee</a>. I'm still learning lots of new technologies and skills everyday. On this site I try to blog about my findings and experiences and show off some projects I worked on.
          </p>
           <p class="footer-text mt-8 hidden md:block">Website created with <a target="_blank" href="https://nuxtjs.org/">Nuxt</a>,
            <a target="_blank" href="https://www.typescriptlang.org/">Typescript</a>,
            <a target="_blank" href="https://tailwindcss.com/">TailwindCSS</a> and ☕️
          </p>
        </div>
        <div class="mt-8 md:mt-0 flex flex-col items-center">
          <img class="rounded-full w-96" src="~/assets/about/about3.png">
          <section class="text-white md:mt-24 mt-8 flex gap-4 justify-center">
            <a href="https://github.com/elianvancutsem" target="_blank">
              <font-awesome-icon class="w-7 h-7 md:w-12 md:h-12" size="6x" :icon="['fab', 'github']" />
            </a>
            <a href="https://twitter.com/vancutsemelian" target="_blank">
              <font-awesome-icon class="w-7 h-7 md:w-12 md:h-12" size="6x" :icon="['fab', 'twitter']" />
            </a>
            <a href="https://linkedin.com/in/elianvancutsem" target="_blank">
              <font-awesome-icon class="w-7 h-7 md:w-12 md:h-12" size="6x" :icon="['fab', 'linkedin-in']" />
            </a>
          </section>
          <transition name="fadeWhisper" mode="out-in">
            <div v-if="this.showWhisper" class="flex flex-col text-white items-center mt-8">
              <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
              <p class="text-whisper">
                Follow me here
              </p>
            </div>
          </transition>
        </div>
      </section>
     
    </main>
</template>

<script lang="ts" src="./index.component.ts">
</script>

<style>
.fadeWhisper-enter-active {
  transition: opacity 30s;
}
.fadeWhisper-enter {
  opacity: 0;
}
</style>
