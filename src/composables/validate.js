import { ref } from "vue";

export function useInputValidator(userInput) {
  let message = ref(null);
  let fieldStatus = ref(false);

  /^[0-9.,]+$/.test(userInput)
    ? ((message.value = ""), (fieldStatus.value = true))
    : ((message.value = `<strong>Required! <span style="float: right;">use only numbers</span></strong>`),
      (fieldStatus.value = false));

  return { message, fieldStatus };
}
