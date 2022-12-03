<template>
  <label class="mb-2 text-sm font-normal">{{ label }}</label>
  <div class="flex relative">
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :class="validState"
      :placeholder="placeHolder" :maxlength="maxLength" />
    <p class="absolute right-2 py-1.5 text-lg font-bold">{{ mesUnit }}</p>
  </div>
  <p class="text-xs text-red-500 mt-1" v-html="errMessage"></p>
</template>
  
<script setup>
import { computed } from "vue";

const props = defineProps({
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
    default: "",
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

const validState = computed(() => {
  return props.errMessage == "" || !props.errMessage
    ? 'input-border text-lg py-1.5 px-2 w-full'
    : 'input-border-invalid text-lg py-1.5 px-2 w-full'
})

</script>
<style scoped>
.input-border {
  background: linear-gradient(white, white) padding-box, linear-gradient(to right, #D3DAE8, #A7B7D8) border-box;
  border-radius: 4px;
  border: 2px solid transparent;
}

.input-border-invalid {
  border-radius: 4px;
  border: 2px solid red;
}
</style>
  