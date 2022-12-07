<template>
  <div class="grid grid-rows-7 gap-4 px-6 py-20 items-center lg:w-4/5 bg-white text-metal-dark cutEdges">
    <section>
      <h4 class="text-2xl font-bold tracking-tight">
        Compensation <br> Calculator
      </h4>
    </section>
    <section>
      <InputComponent v-model="monthlyIncome" label="Monthly gross income" mesUnit="€" :errMessage="incomeErrorMessage"
        maxLength="8" />
    </section>
    <section>
      <InputComponent v-model="daysOnLeave" label="Days on sick-leave" mesUnit="days" :errMessage="daysErrorMessage"
        maxLength="3" :placeHolder="`At most ${maximumDuration} days`" />
      <small class="text-red-500" v-if="!limitStatus"> At most {{ maximumDuration }} days</small>
    </section>
    <section>
      <input v-model="maxDaysOff" type="checkbox"> <span class="text-sm ml-2">I have
        tubercolosis</span>
    </section>
    <section>
      <button :disabled="!ButtonStatus" @click="calculateCompensation"
        class="main-button text-white font-bold">Calculate</button>
    </section>
    <section class="flex justify-between text-center border-t-2 border-b-2 py-6">
      <DisplayBeforeCalc :key="componentKey" :info="compensationObj" />
    </section>
    <section class="text-center">
      <p text-sm> Compensation total for {{ daysOnLeave }} days (net)</p>
      <p v-if="compensationObj" class="text-2xl font-bold">
        {{ (parseFloat(compensationObj?.paidByEmployer) + parseFloat(compensationObj?.paidByInsurance)).toFixed(2) }}€
      </p>
      <p v-else class="text-sm">will appear here</p>
    </section>
  </div>
</template>
  
<script setup>
import InputComponent from "@/components/InputComponent.vue";
import DisplayBeforeCalc from "@/components/DisplayBeforeCalc.vue";
import { useInputValidator } from '@/composables/validate.js'
import { calculator } from "@/calculations/compensationCalculator";
import { ref, watch, computed } from "vue";

// Income input controller -> income field status: incomeFieldStatus

const monthlyIncome = ref("");
let incomeErrorMessage = ref(null);

watch(monthlyIncome, () => {
  let temp = useInputValidator(monthlyIncome.value);
  incomeErrorMessage = temp.message.value;
  incomeFieldStatus.value = temp.fieldStatus.value;
})

// Maximum days on sick-leave

const maxDaysOff = ref(false);

const maximumDuration = computed(() => {
  return maxDaysOff.value ? 240 : 182
})

// Days on leave input controller -> Days on sick-leave field status: dayOffFieldStatus

const daysOnLeave = ref("");
let limitStatus = ref(182);
let daysErrorMessage = ref(null);

watch([daysOnLeave, maximumDuration], () => {
  let temp = useInputValidator(daysOnLeave.value);
  daysErrorMessage = temp.message.value;
  let integerStatus = temp.fieldStatus.value;

  parseInt(daysOnLeave.value) <= maximumDuration.value ? limitStatus = true : limitStatus = false;

  dayOffFieldStatus.value = integerStatus && limitStatus;
})

// Button Status Controller

let incomeFieldStatus = ref(false);
let dayOffFieldStatus = ref(false);

const ButtonStatus = computed(() => {
  return incomeFieldStatus.value && dayOffFieldStatus.value
})

// Calculate Compensation

let compensationObj = ref(null);
const componentKey = ref(true);

const calculateCompensation = () => {
  let answer = calculator(monthlyIncome.value, daysOnLeave.value)
  compensationObj = answer;

  componentKey.value = !componentKey.value;
}

</script>
  
<style scoped>
.main-button {
  background: linear-gradient(90deg, #911812 0%, #E1261C 100%);
  padding: 20px 40px;
  font-size: 18px;
  border-radius: 30px;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.4);
  width: 169px;
  height: 60px;
  line-height: 20px;
}

.main-button:disabled {
  background: linear-gradient(90deg, #7d6361 0%, #e3a3a3 100%);
}

.cutEdges {
  background:
    linear-gradient(45deg, transparent 15px, white 15px),
    linear-gradient(135deg, transparent 15px, white 15px),
    linear-gradient(225deg, transparent 15px, white 15px),
    linear-gradient(315deg, transparent 15px, white 15px);

  background-position: bottom left, top left, top right, bottom right;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>
  