<template>
  <label class="mb-2 text-sm font-normal">{{ label }}</label>
  <section class="flex relative">
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
      class="input-border text-lg py-1.5 px-2 w-full" :placeholder="placeHolder" :maxlength="maxLength" />
    <p class="absolute right-2 py-1.5 text-lg font-bold">{{ mesUnit }}</p>
  </section>
  <p class="text-xs text-red-500 mt-1" v-html="errMessage"></p>
</template>
  
<script setup>

defineProps({
  label: {
    type: String,
    default: "No label provided",
  },
  mesUnit: {
    type: String,
    default: "Units",
  },
  errMessage: {
    type: String,
    default: "Incorrect input",
  },
  maxLength: {
    type: String,
    default: "8",
  },
  placeHolder: {
    type: String,
    default: "",
  },
  modelValue: {
    required: true,
  }
});

defineEmits(['update:modelValue']);

</script>
<style scoped>
.input-border {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #D3DAE8, #A7B7D8) border-box;
  border-radius: 4px;
  border: 2px solid transparent;
}
</style>
  