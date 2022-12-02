<template>
  <div class="grid grid-cols-1 gap-10 md:grid md:grid-cols-6 md:gap-30">
    <section class="xl:col-span-4 md:col-span-3">
      <InfoComponent />
    </section>
    <section class="xl:col-span-2 md:col-span-3">
      <FormComponent />
    </section>
  </div>
</template>
    
<script setup>
import FormComponent from "@/components/FormComponent.vue";
import InfoComponent from "@/components/InfoComponent.vue";


</script>
    
<style scoped>

</style>
    