<script setup>
import {
  ClockIcon,
  ListBulletIcon,
  ChartBarIcon
} from '@heroicons/vue/24/outline'

import NavItem from '@/components/NavItem.vue'
const navItems = {
  timeline: ClockIcon,
  activities: ListBulletIcon,
  progress: ChartBarIcon
}
</script>
<template>
  <nav class="sticky bottom-0 z-50 bag bg-white text-3x1">
    <ul class="flex items-center justify-around border-t">
      <NavItem v-for="(icon, page) in navItems" :key="page" :href="`#${page}`">
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
