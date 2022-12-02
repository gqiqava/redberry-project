<template>
    <div v-for="(column, i) in 2" :key="i">
        <div v-if="info">
            <p class="text-sm"> {{ i === 0 ? 'The employer compensates' : 'Health Insurance compensates' }} <br>
                <span class="font-bold">{{ i === 0 ? info?.dayspaidByEmployer : info?.daysPaidByInsurance }} days</span>
            </p>
            <p class="text-lg font-bold">{{ i === 0 ? info?.paidByEmployer : info?.paidByInsurance }} €</p>
            <p class="text-xs text-neutral-500"> Dailly allowance <br>
                {{ (info?.paidByEmployer / info?.dayspaidByEmployer).toFixed(2) }} €
            </p>
        </div>
        <p v-else class="text-sm">
            {{ i === 0 ? 'The employer' : 'Health Insurance' }} compensation info will appear here
        </p>
    </div>
</template>

<script setup>

defineProps({
    info: {
        type: Object,
        required: true
    },
});

</script>