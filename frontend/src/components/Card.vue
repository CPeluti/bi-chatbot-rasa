<script setup lang="ts">
    defineProps<{
        titulo:string
        dado:string 
    }>()
</script>

<template>
    <div class="inline-flex break-words max-w-sm ring-black rounded-2xl shadow-2xl shadow-slate-500 hover:bg-slate-100 box-content">
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
