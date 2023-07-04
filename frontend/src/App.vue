<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import type {Ref} from 'vue'
  import Card from './components/Card.vue'
  import axios from 'axios'
  onMounted(async ()=>{
    const {data} = await axios.get('http://localhost:3030/messages')
    geral.value = data.intents
    user.value = data.user_intents
    bot.value = data.bot_intents
  })
  const geral: Ref<Record<string,number>> = ref({})
  const bot: Ref<Record<string,number>> = ref({})
  const user: Ref<Record<string,number>> = ref({})


</script>

<template>
  <!-- <div class="bg-white"> -->
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h1>Geral</h1>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div v-for="(intent,index) in Object.keys(geral)" :key="index" class="group">
            <div>
              <Card :titulo="intent" :dado="geral[intent]"></Card>
            </div>
          </div>
      </div>
      <h1>Usuarios</h1>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div v-for="(intent,index) in Object.keys(user)" :key="index" class="group">
            <div>
              <Card :titulo="intent" :dado="geral[intent]"></Card>
            </div>
          </div>
      </div>
      <h1>Bot</h1>
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div v-for="(intent,index) in Object.keys(bot)" :key="index" class="group">
            <div>
              <Card :titulo="intent" :dado="geral[intent]"></Card>
            </div>
          </div>
      </div>
      
    </div>
  <!-- </div> -->
</template>

<style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
