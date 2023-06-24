<script setup lang="ts">
  // import { RouterLink, RouterView } from 'vue-router'
  import Card from './components/Card.vue'

  const q = [
    {
      titulo: "Quantas mensagens magens?",
      dado: "100",
    },
    {
      titulo: "Quantas mensagens pppppp pppppp pppppppppppppppodem ser classificadas em mensagens que contém imagens?",
      dado: "200",
    },
    {
      titulo: "Quantas mensagens podem ser classificadas em mensagens que contém imagens?",
      dado: "300",
    },
    {
      titulo: "Quantas mensagens podem ser classificadas em mensagens que contém imagens?",
      dado: "400",
    },
    {
      titulo: "Quantas mensagens podem ser classificadas em mensagens que contém imagens?",
      dado: "400",
    }
  ]
</script>

<template>
  <!-- <div class="bg-white"> -->
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div v-for="crd in q" class="group">
            <div>
              <Card :titulo="crd.titulo" :dado="crd.dado"></Card>
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
