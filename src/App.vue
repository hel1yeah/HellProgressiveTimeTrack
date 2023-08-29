<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = [
  {
    name: 'timeline',
    icon: ClockIcon
  },
  {
    name: 'activities',
    icon: ListBulletIcon
  },
  {
    name: 'progress',
    icon: ChartBarIcon
  }
]
</script>

<template>
  <header class="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-3">
    <a href="#">
      <img src="./assets/logo.png" alt="logo" class="h-9" />
    </a>
    <a href="#" class="text-sm">
      <div v-if="true" class="flex items-center gap-1">
        Day Template
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>
      <div v-else class="flex items-center gap-1">
        <div>Progress : <span class="fonts-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-600"></div>
      </div>
    </a>
  </header>

  <main class="flex flex-grow flex-col"></main>

  <nav class="sticky bottom-0 z-50 bag bg-white text-3x1">
    <ul class="flex items-center justify-around border-t">
      <li v-for="page in navItems" :key="page.name" class="flex-1">
        <a :href="`#${page.name}`" class="flex flex-col items-center p-2 text-xs capitalize">
          <component :is="page.icon" class="h-6 w-6" />
          {{ page.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
