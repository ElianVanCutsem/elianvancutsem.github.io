<template>
  <div class="home-background relative h-screen">
    <navbar v-bind:menuOpened="menuOpened" @closeMenu="closeMenu"/>
    <div v-if="!menuOpened" class="bg-green-300 dark:bg-gray-800 md:bg-transparent">
      <nav class="flex justify-between mx-12 pt-12">
        <nuxt-link to="/" class="nav-title text-white dark:text-gray-200">Elian Van Cutsem</nuxt-link>
        <div class="flex flex-row gap-4">
          <darkmode />
          <a class="text-white cursor-pointer" v-on:click="menuOpened = true">
            <svg class="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>
        </div>
      </nav>
      <Nuxt />
    </div>
  </div>
</template>

<script>
import navbar from '~/components/layout/navbar.vue'
import darkmode from '~/components/layout/darkmode.vue'

export default {
  name: 'DefaultLayout',
  components: { navbar, darkmode },
  data () {
    return {
      menuOpened: false
    }
  },
  methods: {
    closeMenu(close) {
      this.menuOpened = close
    },
  },
  head: {
    title: 'Elian Van Cutsem',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Full-stack software engineer @vBridge | My online portfolio and CV. I also write about technology and programming.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
