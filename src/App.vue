<template>
  <div :class="rootDivStyle">
    <LandingPageView />
  </div>
</template>

<script setup>
import LandingPageView from "@/views/LandingPageView.vue";

const rootDivStyle = 'h-max 3xl:h-screen px-6 py-20 sm:px-40 md:px-10 lg:px-20'
</script>


<style scoped>

</style>
