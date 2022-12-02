<template>
    <div class="text-white lg:mr-20">
        <section class="mb-10">
            <h1 class="font-bold text-5xl tracking-tight mb-6">Quam Tristique Condimentum</h1>
            <p class="text-lg" v-html="firstPar"></p>
        </section>
        <section class="grid grid-cols-1 gap-10 md:grid md:grid-cols-6 md:gap-30">
            <section class="xl:col-span-4 md:col-span-3">
                <h1 class="font-bold text-4xl tracking-tight mb-6">Fringilla Euismod<br>Adipiscing Ipsum</h1>
                <p class="text-lg mb-6">{{ secondPar }}</p>
                <ul class="text-lg">
                    <li class="mb-3" v-for="(row, i) in liContent" :key="i">
                        <span :style="row.use == 'customLiRed' ? customLiRed : customLiMetal"></span>{{ row.text }}
                    </li>
                </ul>
            </section>
            <section class="xl:col-span-2 md:col-span-3">
                <img src="@/assets/images/image.webp" alt="">
            </section>
        </section>
    </div>
</template>
      
<script setup>

const liContent = [
    {
        text: 'Tellus Ullamcorper Inceptos',
        use: 'customLiRed'
    },
    {
        text: 'Magna Condimentum',
        use: 'customLiRed'
    },
    {
        text: 'Mattis Tristique',
        use: 'customLiMetal'
    },
    {
        text: 'Pharetra Pellentesque Dapibus',
        use: 'customLiMetal'
    },
    {
        text: 'Aenean Inceptos',
        use: 'customLiRed'
    },
    {
        text: 'Parturient Bibendum',
        use: 'customLiRed'
    },
]

const basicLi = `display: inline-block; width: 16px; height: 4px; margin-bottom: 5px; margin-right: 10px;`

const redLi = `background: linear-gradient(90deg, #911812 0%, #E1261C 100%);`

const metalLi = `background: linear-gradient(90deg, #D3DAE8 0%, #A7B7D8 100%); margin-left: 25px;`

const customLiRed = `${basicLi} ${redLi}`

const customLiMetal = `${basicLi} ${metalLi}`


const firstPar = `Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem necelit. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                <span class="text-red-500 underline">Curabitur blandit </span>
                tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                Vestibulum id ligu laporta felis euismod semper.`

const secondPar = `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                   Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed.`

</script>
      
<style scoped>

</style>
      