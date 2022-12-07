<template>
  <div :class="rootDivStyle">
    <div :class="infoComponentStyle">
      <InfoComponent />
    </div>
    <div :class="formComponentStyle">
      <FormComponent />
    </div>
  </div>
</template>
    
<script setup>
import FormComponent from "@/components/FormComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";

const rootDivStyle = 'grid grid-cols-1 gap-10 md:grid md:grid-cols-6 md:gap-30'
const infoComponentStyle = 'md:col-span-3 xl:col-span-4'
const formComponentStyle = 'order-first md:order-last md:col-span-3 xl:col-span-2'

</script>
    
<style scoped>

</style>
    