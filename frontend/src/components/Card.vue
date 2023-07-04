<script setup lang="ts">
    defineProps<{
        titulo:string
        dado:number 
    }>()
</script>

<template>
    <div class="max-w-sm ring-black rounded-2xl shadow-lg shadow-slate-500 aspect-h-1 aspect-w-1 w-full overflow-hidden hover:bg-gray-300 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">{{ titulo }}</div>
            <p class="text-gray-700 text-base text-center">{{ dado }}</p>
        </div>
    </div>
</template>

<style scoped>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
