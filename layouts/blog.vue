<template>
  <section>
    <navbar v-bind:menuOpened="menuOpened" @closeMenu="closeMenu"/>
    <section v-if="!menuOpened">
      <nav class="flex justify-between mx-12 pt-12">
        <nuxt-link to="/" class="nav-title">Elian Van Cutsem</nuxt-link>
        <div class="flex flex-row gap-4">
          <darkmode />
          <a class="text-green-500 cursor-pointer" v-on:click="menuOpened = true">
            <svg class="w-6 h-6 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </a>
        </div>
      </nav>
      <div class="flex overflow-hidden">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden mx-12">
          <div class="flex-1 flex flex-row overflow-hidden">
            <sidebar v-if="this.$nuxt.$route.path === '/blog'" class="block lg:hidden" />
            <sidebar class="hidden lg:block" />
            <nuxt class="z-50"/>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" src="./blog.component.ts">
</script>

<style scoped>

.fade-enter-active{
  animation: bounce-in .5s;
}
.fade-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>