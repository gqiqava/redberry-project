<template>
    <div v-if="info">
        <p class="text-sm"> The employer compensates <br><span class="font-bold">{{ info?.dayspaidByEmployer
        }} days</span></p>
        <p class="text-lg font-bold">{{ info?.paidByEmployer }} €</p>
        <p class="text-xs text-neutral-500">Dailly allowance<br>{{ (info?.paidByEmployer /
                info?.dayspaidByEmployer).toFixed(2)
        }} €</p>
    </div>
    <div v-else v-html="basicP">
    </div>
    <div v-if="info">
        <p class="text-sm"> Health Insurance compensates <br><span class="font-bold">{{
                info?.daysPaidByInsurance
        }} days</span></p>
        <p class="text-lg font-bold">{{ info?.paidByInsurance }}€</p>
        <p class="text-xs text-neutral-500">Dailly allowance<br>{{ (info?.paidByInsurance /
                info?.daysPaidByInsurance).toFixed(2)
        }} €</p>
    </div>
    <div v-else v-html="basicP2">
    </div>
</template>

<script setup>

const props = defineProps({
    info: {
        type: Object,
        required: true
    },
});

const basicP = `<p class="text-sm"> The employer compensation info will appear here</p>`
const basicP2 = `<p class="text-sm"> Health Insurance compensation info will appear here</p>`

</script>