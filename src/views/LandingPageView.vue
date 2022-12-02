<template>
  <div class="grid grid-cols-1 gap-10 md:grid md:grid-cols-6 md:gap-30">
    <div class="md:col-span-3 xl:col-span-4">
      <InfoComponent />
    </div>
    <div class="order-first md:order-last md:col-span-3 xl:col-span-2">
      <FormComponent />
    </div>
  </div>
</template>
    
<script setup>
import FormComponent from "@/components/FormComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";


</script>
    
<style scoped>

</style>
    